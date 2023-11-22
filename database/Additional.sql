DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `borrowBook`(IN `userId_in` INT, IN `bookId_in` INT)
begin
	insert into `Borrow` (`checkoutDate`, `dueDate`, `userId`, `bookId`)
    	values (current_date(), adddate(current_date(), interval 7 day), `userId_in`, `bookId_in`);
    
    update `Information`
    	set `borrowCount` = `borrowCount` + 1
        where `id` = `userId_in`;
    
    update `Book`
    	set `isAvailable` = 0
        where `id` = `bookId_in`;
end$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteBook`(IN `bookId_in` INT)
begin
    declare isAvailable_in int;

    select `isAvailable`
    	into `isAvailable_in`
        from `Book`
        where `id` = `bookId_in`;
    
    if isAvailable_in = 0 then
        call returnBook(`bookId_in`);
    end if;

    delete from `Favorite`
		where `bookId` = `bookId_in`;
        
    delete from `Book`
		where `id` = `bookId_in`;
end$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `deleteUser`(IN `userId_in` INT)
begin
	
    update `Book`
		set `likes` = `likes` - 1
        where `id` in (
            select `bookId`
            	from `Favorite`
				where `userId` = `userId_in`
        );
        
	delete from `Favorite`
		where `userId` = `userId_in`;
    
    update `Book`
		set `isAvailable` = 1
		where `id` in (
        	select `bookId`
				from `Borrow`
				where `userId` = `userId_in`
					and `returnDate` is null
        );
    
    delete from `Borrow`
		where `userId` = `userId_in`;
    
    delete from `Information`
		where `id` = `userId_in`;
end$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `favBook`(IN `userId_in` INT, IN `bookId_in` INT)
begin
	insert into `Favorite` (`userId`, `bookId`)
    	values (`userId_in`, `bookId_in`);
    
    update `Book`
    	set `likes` = `likes` + 1
        where `id` = `bookId_in`; 
end$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `returnBook`(IN `bookId_in` INT)
begin
	declare `userId_in` int;
    
    select `userId`
    	into `userId_in`
        from `Borrow`
        where `bookId` = `bookId_in`
        	and `returnDate` is null;
    
    update `Borrow`
		set `returnDate` = current_date()
        where `bookId` = `bookId_in`
        	and `userId` = `userId_in`
			and `returnDate` is null;

	update `Book`
    	set `isAvailable` = 1
        where `id` = `bookId_in`;
    
    update `Information`
    	set `borrowCount` = `borrowCount` - 1
        where `id` = `userId_in`;
end$$
DELIMITER ;

DELIMITER $$
CREATE DEFINER=`root`@`localhost` PROCEDURE `unfavBook`(IN `userId_in` INT, IN `bookId_in` INT)
begin
	delete from `Favorite`
    	where `userId` = `userId_in` 
        	and `bookId` = `bookId_in`;
            
    update `Book`
    	set `likes` = `likes` - 1
        where `id` = `bookId_in`;
end$$
DELIMITER ;

CREATE DEFINER=`root`@`localhost` EVENT `updateFine` ON SCHEDULE EVERY 1 DAY STARTS '2023-11-01 00:00:00' ENDS '2023-12-31 00:00:00' ON COMPLETION NOT PRESERVE ENABLE DO begin
	declare done int default 0;
    declare id_in int;
    
    declare cur cursor for
    	select `id` from `Information`;
    
    declare continue handler for not found set done = 1;
    
    open cur;
    
    while done = 0 do
        fetch cur into id_in;

        if done = 0 then
            update `Information`
                set fine = fine + 10 * (
                    select count(*)
                        from `Borrow`
                        where `userId` = id_in
                            and `returnDate` is null
                            and `dueDate` < current_date()
                )
               where `id` = id_in;
        end if;
    end while;
    
    close cur;
end