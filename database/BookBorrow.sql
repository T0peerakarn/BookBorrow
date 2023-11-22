-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: localhost:8889
-- Generation Time: Nov 22, 2023 at 10:20 AM
-- Server version: 5.7.39
-- PHP Version: 7.4.33

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `BookBorrow`
--

-- --------------------------------------------------------

--
-- Table structure for table `Book`
--

CREATE TABLE `Book` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `author` varchar(255) NOT NULL,
  `description` varchar(255) DEFAULT NULL,
  `coverUrl` varchar(255) NOT NULL,
  `isAvailable` tinyint(1) NOT NULL DEFAULT '1',
  `likes` int(11) NOT NULL DEFAULT '0'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Book`
--

INSERT INTO `Book` (`id`, `title`, `author`, `description`, `coverUrl`, `isAvailable`, `likes`) VALUES
(1, 'Frankenstein; Or, The Modern Prometheus', 'Shelley, Mary Wollstonecraft', 'Gothic Fiction, Movie Books, Precursors of Science Fiction, Science Fiction by Women', 'https://www.gutenberg.org/cache/epub/84/pg84.cover.medium.jpg', 1, 1),
(2, 'Romeo and Juliet', 'Shakespeare, William', '', 'https://www.gutenberg.org/cache/epub/1513/pg1513.cover.medium.jpg', 1, 0),
(3, 'Pride and Prejudice', 'Austen, Jane', 'Best Books Ever Listings, Harvard Classics', 'https://www.gutenberg.org/cache/epub/1342/pg1342.cover.medium.jpg', 1, 1),
(4, 'The Scarlet Letter', 'Hawthorne, Nathaniel', 'Banned Books from Anne Haight\'s list', 'https://www.gutenberg.org/cache/epub/25344/pg25344.cover.medium.jpg', 1, 1),
(5, 'Alice\'s Adventures in Wonderland', 'Carroll, Lewis', 'Children\'s Literature', 'https://www.gutenberg.org/cache/epub/11/pg11.cover.medium.jpg', 1, 1),
(6, 'Dracula', 'Stoker, Bram', 'Gothic Fiction, Horror, Movie Books, Mystery Fiction', 'https://www.gutenberg.org/cache/epub/345/pg345.cover.medium.jpg', 1, 0),
(7, 'Metamorphosis', 'Kafka, Franz', 'Horror', 'https://www.gutenberg.org/cache/epub/5200/pg5200.cover.medium.jpg', 1, 0),
(8, 'The Picture of Dorian Gray', 'Wilde, Oscar', 'Gothic Fiction, Movie Books', 'https://www.gutenberg.org/cache/epub/174/pg174.cover.medium.jpg', 1, 0),
(9, 'The Great Gatsby', 'Fitzgerald, F. Scott (Francis Scott)', '', 'https://www.gutenberg.org/cache/epub/64317/pg64317.cover.medium.jpg', 1, 0),
(10, 'A Doll\'s House : a play', 'Ibsen, Henrik', 'Best Books Ever Listings', 'https://www.gutenberg.org/cache/epub/2542/pg2542.cover.medium.jpg', 1, 0),
(11, 'The Yellow Wallpaper', 'Gilman, Charlotte Perkins', 'Gothic Fiction', 'https://www.gutenberg.org/cache/epub/1952/pg1952.cover.medium.jpg', 1, 0),
(12, 'A Modest Proposal', 'Swift, Jonathan', '', 'https://www.gutenberg.org/cache/epub/1080/pg1080.cover.medium.jpg', 1, 0),
(13, 'The Importance of Being Earnest: A Trivial Comedy for Serious People', 'Wilde, Oscar', 'Plays', 'https://www.gutenberg.org/cache/epub/844/pg844.cover.medium.jpg', 1, 0),
(14, 'The Strange Case of Dr. Jekyll and Mr. Hyde', 'Stevenson, Robert Louis', 'Horror, Movie Books, Precursors of Science Fiction', 'https://www.gutenberg.org/cache/epub/43/pg43.cover.medium.jpg', 1, 0),
(15, 'A Tale of Two Cities', 'Dickens, Charles', 'Historical Fiction', 'https://www.gutenberg.org/cache/epub/98/pg98.cover.medium.jpg', 1, 0),
(16, 'The Legend of Sleepy Hollow', 'Irving, Washington', 'Children\'s Literature, Harvard Classics', 'https://www.gutenberg.org/cache/epub/41/pg41.cover.medium.jpg', 1, 0),
(17, 'The Adventures of Sherlock Holmes', 'Doyle, Arthur Conan', 'Banned Books from Anne Haight\'s list, Contemporary Reviews, Detective Fiction', 'https://www.gutenberg.org/cache/epub/1661/pg1661.cover.medium.jpg', 1, 0),
(18, 'Moby Dick; Or, The Whale', 'Melville, Herman', 'Best Books Ever Listings', 'https://www.gutenberg.org/cache/epub/2701/pg2701.cover.medium.jpg', 1, 0),
(19, 'Jane Eyre: An Autobiography', 'Brontë, Charlotte', '', 'https://www.gutenberg.org/cache/epub/1260/pg1260.cover.medium.jpg', 1, 0),
(20, 'The Prince', 'Machiavelli, Niccolò', 'Banned Books from Anne Haight\'s list, Harvard Classics, Philosophy, Politics', 'https://www.gutenberg.org/cache/epub/1232/pg1232.cover.medium.jpg', 1, 0),
(21, 'The Iliad', 'Homer', 'Classical Antiquity', 'https://www.gutenberg.org/cache/epub/6130/pg6130.cover.medium.jpg', 1, 0),
(22, 'Great Expectations', 'Dickens, Charles', 'Best Books Ever Listings', 'https://www.gutenberg.org/cache/epub/1400/pg1400.cover.medium.jpg', 1, 0),
(23, 'Grimms\' Fairy Tales', 'Grimm, Wilhelm', '', 'https://www.gutenberg.org/cache/epub/2591/pg2591.cover.medium.jpg', 1, 0),
(24, 'The Brothers Karamazov', 'Dostoyevsky, Fyodor', 'Best Books Ever Listings', 'https://www.gutenberg.org/cache/epub/28054/pg28054.cover.medium.jpg', 1, 0),
(25, 'The Souls of Black Folk', 'Du Bois, W. E. B. (William Edward Burghardt)', 'African American Writers', 'https://www.gutenberg.org/cache/epub/408/pg408.cover.medium.jpg', 1, 0),
(26, 'A Christmas Carol in Prose; Being a Ghost Story of Christmas', 'Dickens, Charles', 'Children\'s Literature, Christmas', 'https://www.gutenberg.org/cache/epub/46/pg46.cover.medium.jpg', 1, 0),
(27, 'Crime and Punishment', 'Dostoyevsky, Fyodor', 'Best Books Ever Listings, Crime Fiction, Harvard Classics', 'https://www.gutenberg.org/cache/epub/2554/pg2554.cover.medium.jpg', 1, 0),
(28, 'Anna Karenina', 'Tolstoy, Leo, graf', 'Best Books Ever Listings, Harvard Classics, Movie Books', 'https://www.gutenberg.org/cache/epub/1399/pg1399.cover.medium.jpg', 1, 0),
(29, 'Adventures of Huckleberry Finn', 'Twain, Mark', 'Banned Books List from the American Library Association, Banned Books from Anne Haight\'s list, Best Books Ever Listings', 'https://www.gutenberg.org/cache/epub/76/pg76.cover.medium.jpg', 1, 0),
(30, 'Leviathan', 'Hobbes, Thomas', 'Harvard Classics, Politics', 'https://www.gutenberg.org/cache/epub/3207/pg3207.cover.medium.jpg', 1, 0),
(31, 'Heart of Darkness', 'Conrad, Joseph', 'Best Books Ever Listings, Movie Books', 'https://www.gutenberg.org/cache/epub/219/pg219.cover.medium.jpg', 1, 0),
(32, 'Walden, and On The Duty Of Civil Disobedience', 'Thoreau, Henry David', '', 'https://www.gutenberg.org/cache/epub/205/pg205.cover.medium.jpg', 1, 0),
(33, 'Ulysses', 'Joyce, James', 'Banned Books List from the American Library Association, Banned Books from Anne Haight\'s list, Best Books Ever Listings, Erotic Fiction', 'https://www.gutenberg.org/cache/epub/4300/pg4300.cover.medium.jpg', 1, 0),
(34, 'Dubliners', 'Joyce, James', 'Banned Books from Anne Haight\'s list', 'https://www.gutenberg.org/cache/epub/2814/pg2814.cover.medium.jpg', 1, 0),
(35, 'Peter Pan', 'Barrie, J. M. (James Matthew)', 'Children\'s Literature, Movie Books', 'https://www.gutenberg.org/cache/epub/16/pg16.cover.medium.jpg', 1, 0),
(36, 'Narrative of the Life of Frederick Douglass, an American Slave', 'Douglass, Frederick', 'African American Writers, Slavery', 'https://www.gutenberg.org/cache/epub/23/pg23.cover.medium.jpg', 1, 0),
(37, 'The Count of Monte Cristo', 'Dumas, Alexandre', 'Adventure, Movie Books', 'https://www.gutenberg.org/cache/epub/1184/pg1184.cover.medium.jpg', 1, 0),
(38, 'The Fall of the House of Usher', 'Poe, Edgar Allan', 'Movie Books', 'https://www.gutenberg.org/cache/epub/932/pg932.cover.medium.jpg', 1, 0),
(39, 'War and Peace', 'Tolstoy, Leo, graf', 'Best Books Ever Listings, Historical Fiction, Movie Books, Napoleonic(Bookshelf), Opera', 'https://www.gutenberg.org/cache/epub/2600/pg2600.cover.medium.jpg', 1, 0),
(40, 'The Odyssey', 'Homer', 'Classical Antiquity, Harvard Classics', 'https://www.gutenberg.org/cache/epub/1727/pg1727.cover.medium.jpg', 1, 0),
(41, 'Frankenstein; Or, The Modern Prometheus', 'Shelley, Mary Wollstonecraft', 'Precursors of Science Fiction, Science Fiction by Women', 'https://www.gutenberg.org/cache/epub/41445/pg41445.cover.medium.jpg', 1, 0),
(42, 'Wuthering Heights', 'Brontë, Emily', 'Best Books Ever Listings, Gothic Fiction, Movie Books', 'https://www.gutenberg.org/cache/epub/768/pg768.cover.medium.jpg', 1, 0),
(43, 'The Wonderful Wizard of Oz', 'Baum, L. Frank (Lyman Frank)', 'Children\'s Literature, Fantasy', 'https://www.gutenberg.org/cache/epub/55/pg55.cover.medium.jpg', 1, 0),
(44, 'Second Treatise of Government', 'Locke, John', 'Philosophy, Politics', 'https://www.gutenberg.org/cache/epub/7370/pg7370.cover.medium.jpg', 1, 0),
(45, 'Carmilla', 'Le Fanu, Joseph Sheridan', 'Gothic Fiction, Horror', 'https://www.gutenberg.org/cache/epub/10007/pg10007.cover.medium.jpg', 1, 0),
(46, 'The Adventures of Tom Sawyer, Complete', 'Twain, Mark', 'Banned Books List from the American Library Association, Banned Books from Anne Haight\'s list', 'https://www.gutenberg.org/cache/epub/74/pg74.cover.medium.jpg', 1, 0),
(47, 'The Interesting Narrative of the Life of Olaudah Equiano, Or Gustavus Vassa, The African', 'Equiano, Olaudah', 'Africa', 'https://www.gutenberg.org/cache/epub/15399/pg15399.cover.medium.jpg', 1, 0),
(48, 'The Kama Sutra of Vatsyayana', 'Vatsyayana', 'Banned Books from Anne Haight\'s list, Erotic Fiction, Sociology', 'https://www.gutenberg.org/cache/epub/27827/pg27827.cover.medium.jpg', 1, 0),
(49, 'The Republic', 'Plato', 'Philosophy', 'https://www.gutenberg.org/cache/epub/1497/pg1497.cover.medium.jpg', 1, 0),
(50, 'The Prophet', 'Gibran, Kahlil', '', 'https://www.gutenberg.org/cache/epub/58585/pg58585.cover.medium.jpg', 1, 0),
(51, 'The Works of Edgar Allan Poe — Volume 2', 'Poe, Edgar Allan', 'Detective Fiction, Gothic Fiction, Horror, Mystery Fiction', 'https://www.gutenberg.org/cache/epub/2148/pg2148.cover.medium.jpg', 1, 0),
(52, 'Anne of Green Gables', 'Montgomery, L. M. (Lucy Maud)', 'Canada, Children\'s Literature', 'https://www.gutenberg.org/cache/epub/45/pg45.cover.medium.jpg', 1, 0),
(53, 'The Romance of Lust: A classic Victorian erotic novel', 'Anonymous', '', 'https://www.gutenberg.org/cache/epub/30254/pg30254.cover.medium.jpg', 1, 0),
(54, 'Don Quixote', 'Cervantes Saavedra, Miguel de', 'Best Books Ever Listings, Harvard Classics', 'https://www.gutenberg.org/cache/epub/996/pg996.cover.medium.jpg', 1, 0),
(55, 'Don Quijote', 'Cervantes Saavedra, Miguel de', '6 Best Loved Spanish Literary Classics, Best Books Ever Listings, Harvard Classics', 'https://www.gutenberg.org/cache/epub/2000/pg2000.cover.medium.jpg', 1, 0),
(56, 'The Extraordinary Adventures of Arsène Lupin, Gentleman-Burglar', 'Leblanc, Maurice', 'Crime Fiction', 'https://www.gutenberg.org/cache/epub/6133/pg6133.cover.medium.jpg', 1, 0),
(57, 'A Study in Scarlet', 'Doyle, Arthur Conan', 'Detective Fiction', 'https://www.gutenberg.org/cache/epub/244/pg244.cover.medium.jpg', 1, 0),
(58, 'Thus Spake Zarathustra: A Book for All and None', 'Nietzsche, Friedrich Wilhelm', 'Philosophy', 'https://www.gutenberg.org/cache/epub/1998/pg1998.cover.medium.jpg', 1, 0),
(59, 'Winnie-the-Pooh', 'Milne, A. A. (Alan Alexander)', '', 'https://www.gutenberg.org/cache/epub/67098/pg67098.cover.medium.jpg', 1, 0),
(60, 'Little Women', 'Alcott, Louisa May', 'Children\'s Literature', 'https://www.gutenberg.org/cache/epub/514/pg514.cover.medium.jpg', 1, 0),
(61, 'The Hound of the Baskervilles', 'Doyle, Arthur Conan', 'Bestsellers, American, 1895-1923, Detective Fiction', 'https://www.gutenberg.org/cache/epub/2852/pg2852.cover.medium.jpg', 1, 0),
(62, 'Treasure Island', 'Stevenson, Robert Louis', 'Best Books Ever Listings, Children\'s Literature, Historical Fiction, Pirates, Buccaneers, Corsairs, etc.', 'https://www.gutenberg.org/cache/epub/120/pg120.cover.medium.jpg', 1, 0),
(63, 'Meditations', 'Marcus Aurelius, Emperor of Rome', 'Harvard Classics', 'https://www.gutenberg.org/cache/epub/2680/pg2680.cover.medium.jpg', 1, 0),
(64, 'The divine comedy', 'Dante Alighieri', 'Best Books Ever Listings, Italy', 'https://www.gutenberg.org/cache/epub/8800/pg8800.cover.medium.jpg', 1, 0),
(65, 'Beyond Good and Evil', 'Nietzsche, Friedrich Wilhelm', 'Atheism, Philosophy', 'https://www.gutenberg.org/cache/epub/4363/pg4363.cover.medium.jpg', 1, 0),
(66, 'Notes from the Underground', 'Dostoyevsky, Fyodor', '', 'https://www.gutenberg.org/cache/epub/600/pg600.cover.medium.jpg', 1, 0),
(67, 'Eight or Nine Wise Words about Letter-Writing', 'Carroll, Lewis', '', 'https://www.gutenberg.org/cache/epub/38065/pg38065.cover.medium.jpg', 1, 0),
(68, 'Autobiography of Benjamin Franklin', 'Franklin, Benjamin', 'Harvard Classics', 'https://www.gutenberg.org/cache/epub/20203/pg20203.cover.medium.jpg', 1, 0),
(69, 'Pygmalion', 'Shaw, Bernard', 'Plays', 'https://www.gutenberg.org/cache/epub/3825/pg3825.cover.medium.jpg', 1, 0),
(70, 'The Tragical History of Doctor Faustus: From the Quarto of 1604', 'Marlowe, Christopher', 'Harvard Classics', 'https://www.gutenberg.org/cache/epub/779/pg779.cover.medium.jpg', 1, 0),
(71, 'The Time Machine', 'Wells, H. G. (Herbert George)', 'Movie Books, Science Fiction', 'https://www.gutenberg.org/cache/epub/35/pg35.cover.medium.jpg', 1, 0),
(72, 'Emma', 'Austen, Jane', '', 'https://www.gutenberg.org/cache/epub/158/pg158.cover.medium.jpg', 1, 0),
(73, 'Calculus Made Easy', 'Thompson, Silvanus P. (Silvanus Phillips)', 'Being a very-simplest introduction to those beautiful methods which are generally called by the terrifying names of the Differential Calculus and the Integral Calculus', 'https://www.gutenberg.org/cache/epub/33283/pg33283.cover.medium.jpg', 1, 0),
(74, 'The War of the Worlds', 'Wells, H. G. (Herbert George)', 'Movie Books, Science Fiction', 'https://www.gutenberg.org/cache/epub/36/pg36.cover.medium.jpg', 1, 0),
(75, 'Sense and Sensibility', 'Austen, Jane', '', 'https://www.gutenberg.org/cache/epub/161/pg161.cover.medium.jpg', 1, 0),
(76, 'The King in Yellow', 'Chambers, Robert W. (Robert William)', 'Horror', 'https://www.gutenberg.org/cache/epub/8492/pg8492.cover.medium.jpg', 1, 0),
(77, 'Anna Karenina, 1. Band', 'Tolstoy, Leo, graf', '', 'https://www.gutenberg.org/cache/epub/44956/pg44956.cover.medium.jpg', 1, 0),
(78, 'The Life and Adventures of Robinson Crusoe', 'Defoe, Daniel', '', 'https://www.gutenberg.org/cache/epub/521/pg521.cover.medium.jpg', 1, 0),
(79, 'The Problems of Philosophy', 'Russell, Bertrand', 'Philosophy', 'https://www.gutenberg.org/cache/epub/5827/pg5827.cover.medium.jpg', 1, 0),
(81, 'Anthem', 'Rand, Ayn', 'Science Fiction, Science Fiction by Women', 'https://www.gutenberg.org/cache/epub/1250/pg1250.cover.medium.jpg', 1, 0),
(82, 'A Portrait of the Artist as a Young Man', 'Joyce, James', '', 'https://www.gutenberg.org/cache/epub/4217/pg4217.cover.medium.jpg', 1, 0),
(83, 'The Turn of the Screw', 'James, Henry', 'Best Books Ever Listings, Gothic Fiction, Horror, Opera', 'https://www.gutenberg.org/cache/epub/209/pg209.cover.medium.jpg', 1, 0),
(84, 'The Confessions of St. Augustine', 'Augustine, Saint, Bishop of Hippo', 'Christianity, Classical Antiquity, Harvard Classics', 'https://www.gutenberg.org/cache/epub/3296/pg3296.cover.medium.jpg', 1, 0),
(85, 'Uncle Tom\'s Cabin', 'Stowe, Harriet Beecher', 'Banned Books from Anne Haight\'s list, Slavery, US Civil War', 'https://www.gutenberg.org/cache/epub/203/pg203.cover.medium.jpg', 1, 0),
(86, 'The Complete Works of William Shakespeare', 'Shakespeare, William', 'Plays', 'https://www.gutenberg.org/cache/epub/100/pg100.cover.medium.jpg', 1, 0),
(87, 'Oliver Twist', 'Dickens, Charles', '', 'https://www.gutenberg.org/cache/epub/730/pg730.cover.medium.jpg', 1, 0),
(88, 'Common Sense', 'Paine, Thomas', '', 'https://www.gutenberg.org/cache/epub/147/pg147.cover.medium.jpg', 1, 0),
(89, 'Psmith in the City', 'Wodehouse, P. G. (Pelham Grenville)', 'Humor', 'https://www.gutenberg.org/cache/epub/6753/pg6753.cover.medium.jpg', 1, 0),
(90, 'Incidents in the Life of a Slave Girl, Written by Herself', 'Jacobs, Harriet A. (Harriet Ann)', 'African American Writers', 'https://www.gutenberg.org/cache/epub/11030/pg11030.cover.medium.jpg', 1, 0),
(91, 'The Jungle Book', 'Kipling, Rudyard', 'Children\'s Literature, Contemporary Reviews, Movie Books, Scouts', 'https://www.gutenberg.org/cache/epub/236/pg236.cover.medium.jpg', 1, 0),
(92, 'Le Morte d\'Arthur: Volume 1', 'Malory, Thomas, Sir', 'Arthurian Legends, Fantasy', 'https://www.gutenberg.org/cache/epub/1251/pg1251.cover.medium.jpg', 1, 0),
(93, 'Gulliver\'s Travels into Several Remote Nations of the World', 'Swift, Jonathan', 'Banned Books from Anne Haight\'s list, Best Books Ever Listings', 'https://www.gutenberg.org/cache/epub/829/pg829.cover.medium.jpg', 1, 0),
(94, 'The Philippines a Century Hence', 'Rizal, José', '', 'https://www.gutenberg.org/cache/epub/35899/pg35899.cover.medium.jpg', 1, 0),
(95, 'The Art of War', 'Sunzi, active 6th century B.C.', '', 'https://www.gutenberg.org/cache/epub/132/pg132.cover.medium.jpg', 1, 0),
(96, 'The Rámáyan of Válmíki, translated into English verse', 'Valmiki', 'India', 'https://www.gutenberg.org/cache/epub/24869/pg24869.cover.medium.jpg', 1, 0),
(97, 'Josefine Mutzenbacher: oder Die Geschichte einer Wienerischen Dirne von ihr selbst erzählt', 'Salten, Felix', 'DE Prosa', 'https://www.gutenberg.org/cache/epub/31284/pg31284.cover.medium.jpg', 1, 0),
(98, 'Middlemarch', 'Eliot, George', 'Best Books Ever Listings, Historical Fiction', 'https://www.gutenberg.org/cache/epub/145/pg145.cover.medium.jpg', 1, 0),
(99, 'The call of the wild', 'London, Jack', 'Adventure, Animals-Domestic, Banned Books List from the American Library Association, Banned Books from Anne Haight\'s list, Best Books Ever Listings, Movie Books', 'https://www.gutenberg.org/cache/epub/215/pg215.cover.medium.jpg', 1, 0),
(100, 'Essays of Michel de Montaigne — Complete', 'Montaigne, Michel de', 'Banned Books from Anne Haight\'s list, Best Books Ever Listings', 'https://www.gutenberg.org/cache/epub/3600/pg3600.cover.medium.jpg', 1, 0),
(101, 'Persuasion', 'Austen, Jane', '', 'https://www.gutenberg.org/cache/epub/105/pg105.cover.medium.jpg', 1, 0),
(102, 'On Liberty', 'Mill, John Stuart', 'Philosophy', 'https://www.gutenberg.org/cache/epub/34901/pg34901.cover.medium.jpg', 1, 0),
(103, 'The Awakening, and Selected Short Stories', 'Chopin, Kate', 'Banned Books List from the American Library Association, Banned Books from Anne Haight\'s list', 'https://www.gutenberg.org/cache/epub/160/pg160.cover.medium.jpg', 1, 0),
(104, 'Siddhartha', 'Hesse, Hermann', '', 'https://www.gutenberg.org/cache/epub/2500/pg2500.cover.medium.jpg', 1, 0),
(105, 'The murder of Roger Ackroyd', 'Christie, Agatha', '', 'https://www.gutenberg.org/cache/epub/69087/pg69087.cover.medium.jpg', 1, 0),
(106, 'Narrative of the Captivity and Restoration of Mrs. Mary Rowlandson', 'Rowlandson, Mary White', '', 'https://www.gutenberg.org/cache/epub/851/pg851.cover.medium.jpg', 1, 0),
(107, 'Myths and Legends of Ancient Greece and Rome', 'Berens, E. M.', 'Greece, Mythology', 'https://www.gutenberg.org/cache/epub/22381/pg22381.cover.medium.jpg', 1, 0),
(108, 'Candide', 'Voltaire', 'Banned Books from Anne Haight\'s list, Best Books Ever Listings', 'https://www.gutenberg.org/cache/epub/19942/pg19942.cover.medium.jpg', 1, 0),
(109, 'Noli Me Tangere', 'Rizal, José', '', 'https://www.gutenberg.org/cache/epub/20228/pg20228.cover.medium.jpg', 1, 0),
(110, 'Through the Looking-Glass', 'Carroll, Lewis', 'Best Books Ever Listings, Children\'s Literature', 'https://www.gutenberg.org/cache/epub/12/pg12.cover.medium.jpg', 1, 0),
(111, 'The Elements of Style', 'Strunk, William', '', 'https://www.gutenberg.org/cache/epub/37134/pg37134.cover.medium.jpg', 1, 0),
(112, 'Mosses from an old manse', 'Hawthorne, Nathaniel', 'Gothic Fiction', 'https://www.gutenberg.org/cache/epub/512/pg512.cover.medium.jpg', 1, 0),
(113, 'The Tempest: The Works of William Shakespeare [Cambridge Edition] [9 vols.]', 'Shakespeare, William', '', 'https://www.gutenberg.org/cache/epub/23042/pg23042.cover.medium.jpg', 1, 0),
(114, 'Spenser\'s The Faerie Queene, Book I', 'Spenser, Edmund', '', 'https://www.gutenberg.org/cache/epub/15272/pg15272.cover.medium.jpg', 1, 0),
(115, 'Tractatus Logico-Philosophicus', 'Wittgenstein, Ludwig', 'DE Sachbuch, Mathematics, Philosophy', 'https://www.gutenberg.org/cache/epub/5740/pg5740.cover.medium.jpg', 1, 0),
(116, 'The Happy Prince, and Other Tales', 'Wilde, Oscar', 'Children\'s Literature', 'https://www.gutenberg.org/cache/epub/902/pg902.cover.medium.jpg', 1, 0),
(117, 'Essays by Ralph Waldo Emerson', 'Emerson, Ralph Waldo', 'Harvard Classics', 'https://www.gutenberg.org/cache/epub/16643/pg16643.cover.medium.jpg', 1, 0),
(118, 'The Secret Garden', 'Burnett, Frances Hodgson', 'Children\'s Literature', 'https://www.gutenberg.org/cache/epub/17396/pg17396.cover.medium.jpg', 1, 0),
(119, 'Les Misérables', 'Hugo, Victor', 'Banned Books from Anne Haight\'s list, Historical Fiction', 'https://www.gutenberg.org/cache/epub/135/pg135.cover.medium.jpg', 1, 0),
(121, 'Little Women; Or, Meg, Jo, Beth, and Amy', 'Alcott, Louisa May', '', 'https://www.gutenberg.org/cache/epub/37106/pg37106.cover.medium.jpg', 1, 0),
(122, 'The Ethics of Aristotle', 'Aristotle', 'Classical Antiquity, Philosophy', 'https://www.gutenberg.org/cache/epub/8438/pg8438.cover.medium.jpg', 1, 0),
(123, 'A Pickle for the Knowing Ones', 'Dexter, Timothy', '', 'https://www.gutenberg.org/cache/epub/43453/pg43453.cover.medium.jpg', 1, 0),
(124, 'Songs of Innocence and of Experience', 'Blake, William', '', 'https://www.gutenberg.org/cache/epub/1934/pg1934.cover.medium.jpg', 1, 0),
(125, 'The Communist Manifesto', 'Engels, Friedrich', 'Banned Books from Anne Haight\'s list, Philosophy, Politics', 'https://www.gutenberg.org/cache/epub/61/pg61.cover.medium.jpg', 1, 0),
(126, 'Chaucer\'s Works, Volume 4 — The Canterbury Tales', 'Chaucer, Geoffrey', 'Best Books Ever Listings', 'https://www.gutenberg.org/cache/epub/22120/pg22120.cover.medium.jpg', 1, 0),
(127, 'The History of the Decline and Fall of the Roman Empire', 'Gibbon, Edward', 'Banned Books from Anne Haight\'s list', 'https://www.gutenberg.org/cache/epub/25717/pg25717.cover.medium.jpg', 1, 0),
(128, 'The Works of Edgar Allan Poe — Volume 1', 'Poe, Edgar Allan', 'Detective Fiction, Horror, Mystery Fiction', 'https://www.gutenberg.org/cache/epub/2147/pg2147.cover.medium.jpg', 1, 0),
(129, 'Northanger Abbey', 'Austen, Jane', 'Gothic Fiction', 'https://www.gutenberg.org/cache/epub/121/pg121.cover.medium.jpg', 1, 0),
(130, 'Antiquities of the Jews', 'Josephus, Flavius', 'Judaism', 'https://www.gutenberg.org/cache/epub/2848/pg2848.cover.medium.jpg', 1, 0),
(131, 'Plays', 'Glaspell, Susan', 'One Act Plays', 'https://www.gutenberg.org/cache/epub/10623/pg10623.cover.medium.jpg', 1, 0),
(132, 'An Essay Concerning Humane Understanding', 'Locke, John', 'Banned Books from Anne Haight\'s list', 'https://www.gutenberg.org/cache/epub/10615/pg10615.cover.medium.jpg', 1, 0),
(133, 'The Reign of Greed', 'Rizal, José', '', 'https://www.gutenberg.org/cache/epub/10676/pg10676.cover.medium.jpg', 1, 0),
(134, 'On the Origin of Species By Means of Natural Selection', 'Darwin, Charles', 'Banned Books from Anne Haight\'s list, Biology, Harvard Classics', 'https://www.gutenberg.org/cache/epub/1228/pg1228.cover.medium.jpg', 1, 0),
(135, 'David Copperfield', 'Dickens, Charles', 'Harvard Classics', 'https://www.gutenberg.org/cache/epub/766/pg766.cover.medium.jpg', 1, 0),
(136, 'Hard Times', 'Dickens, Charles', '', 'https://www.gutenberg.org/cache/epub/786/pg786.cover.medium.jpg', 1, 0),
(137, 'Hamlet, Prince of Denmark', 'Shakespeare, William', 'Best Books Ever Listings, Plays', 'https://www.gutenberg.org/cache/epub/1524/pg1524.cover.medium.jpg', 1, 0),
(138, 'An Occurrence at Owl Creek Bridge', 'Bierce, Ambrose', 'Horror, US Civil War', 'https://www.gutenberg.org/cache/epub/375/pg375.cover.medium.jpg', 1, 0),
(139, 'Struwwelpeter: Merry Stories and Funny Pictures', 'Hoffmann, Heinrich', 'Children\'s Picture Books', 'https://www.gutenberg.org/cache/epub/12116/pg12116.cover.medium.jpg', 1, 0),
(140, 'The Prince and the Pauper', 'Twain, Mark', 'Historical Fiction', 'https://www.gutenberg.org/cache/epub/1837/pg1837.cover.medium.jpg', 1, 0),
(141, 'How the Other Half Lives: Studies Among the Tenements of New York', 'Riis, Jacob A. (Jacob August)', '', 'https://www.gutenberg.org/cache/epub/45502/pg45502.cover.medium.jpg', 1, 0),
(142, 'Paradise Lost', 'Milton, John', '', 'https://www.gutenberg.org/cache/epub/26/pg26.cover.medium.jpg', 1, 0),
(143, 'The Sign of the Four', 'Doyle, Arthur Conan', 'Detective Fiction', 'https://www.gutenberg.org/cache/epub/2097/pg2097.cover.medium.jpg', 1, 0),
(144, 'The Mysterious Affair at Styles', 'Christie, Agatha', 'Detective Fiction', 'https://www.gutenberg.org/cache/epub/863/pg863.cover.medium.jpg', 1, 0),
(145, 'Twenty Thousand Leagues under the Sea', 'Verne, Jules', 'Science Fiction', 'https://www.gutenberg.org/cache/epub/164/pg164.cover.medium.jpg', 1, 0),
(146, 'Democracy in America — Volume 1', 'Tocqueville, Alexis de', '', 'https://www.gutenberg.org/cache/epub/815/pg815.cover.medium.jpg', 1, 0),
(147, 'Toodle and Noodle Flat-tail: The Jolly Beaver Boys', 'Garis, Howard Roger', '', 'https://www.gutenberg.org/cache/epub/67990/pg67990.cover.medium.jpg', 1, 0),
(148, 'The Republic of Plato', 'Plato', '', 'https://www.gutenberg.org/cache/epub/55201/pg55201.cover.medium.jpg', 1, 0),
(149, 'Oedipus King of Thebes: Translated into English Rhyming Verse with Explanatory Notes', 'Sophocles', '', 'https://www.gutenberg.org/cache/epub/27673/pg27673.cover.medium.jpg', 1, 0),
(150, 'Madame Bovary', 'Flaubert, Gustave', 'Banned Books from Anne Haight\'s list, Best Books Ever Listings', 'https://www.gutenberg.org/cache/epub/2413/pg2413.cover.medium.jpg', 1, 0),
(151, 'The Vampyre; a Tale', 'Polidori, John William', 'Gothic Fiction, Horror', 'https://www.gutenberg.org/cache/epub/6087/pg6087.cover.medium.jpg', 1, 0),
(152, 'Three Men in a Boat (To Say Nothing of the Dog)', 'Jerome, Jerome K. (Jerome Klapka)', 'Best Books Ever Listings, Humor', 'https://www.gutenberg.org/cache/epub/308/pg308.cover.medium.jpg', 1, 0),
(154, 'The History of the Peloponnesian War', 'Thucydides', '', 'https://www.gutenberg.org/cache/epub/7142/pg7142.cover.medium.jpg', 1, 0),
(155, 'The Idiot', 'Dostoyevsky, Fyodor', 'Best Books Ever Listings', 'https://www.gutenberg.org/cache/epub/2638/pg2638.cover.medium.jpg', 1, 0),
(156, 'The Sea-Gull', 'Chekhov, Anton Pavlovich', '', 'https://www.gutenberg.org/cache/epub/1754/pg1754.cover.medium.jpg', 1, 0),
(157, 'Bartleby, the Scrivener: A Story of Wall-Street', 'Melville, Herman', '', 'https://www.gutenberg.org/cache/epub/11231/pg11231.cover.medium.jpg', 1, 0),
(463, 'Southern Horrors: Lynch Law in All Its Phases', 'Wells-Barnett, Ida B.', 'African American Writers, Crime Nonfiction', 'https://www.gutenberg.org/cache/epub/14975/pg14975.cover.medium.jpg', 1, 0),
(464, 'The First Book of Adam and Eve', 'Platt, Rutherford Hayes', 'Christianity', 'https://www.gutenberg.org/cache/epub/398/pg398.cover.medium.jpg', 1, 0),
(465, 'Ethics', 'Spinoza, Benedictus de', 'Philosophy', 'https://www.gutenberg.org/cache/epub/3800/pg3800.cover.medium.jpg', 1, 0),
(466, 'The slang dictionary : $b Etymological, historical and anecdotal', 'Hotten, John Camden', '', 'https://www.gutenberg.org/cache/epub/42108/pg42108.cover.medium.jpg', 1, 0),
(467, 'Democracy and Education: An Introduction to the Philosophy of Education', 'Dewey, John', 'Philosophy', 'https://www.gutenberg.org/cache/epub/852/pg852.cover.medium.jpg', 1, 0),
(468, 'A Room with a View', 'Forster, E. M. (Edward Morgan)', 'Italy', 'https://www.gutenberg.org/cache/epub/2641/pg2641.cover.medium.jpg', 1, 0),
(469, 'The Poetics of Aristotle', 'Aristotle', 'Classical Antiquity, Philosophy', 'https://www.gutenberg.org/cache/epub/1974/pg1974.cover.medium.jpg', 1, 0),
(470, 'Pascal\'s Pensées', 'Pascal, Blaise', 'Banned Books from Anne Haight\'s list, Harvard Classics', 'https://www.gutenberg.org/cache/epub/18269/pg18269.cover.medium.jpg', 1, 0),
(471, 'The Masque of the Red Death', 'Poe, Edgar Allan', '', 'https://www.gutenberg.org/cache/epub/1064/pg1064.cover.medium.jpg', 1, 0),
(472, 'The Eyes Have It', 'Dick, Philip K.', 'Science Fiction', 'https://www.gutenberg.org/cache/epub/31516/pg31516.cover.medium.jpg', 1, 0),
(473, 'The Critique of Pure Reason', 'Kant, Immanuel', 'Philosophy', 'https://www.gutenberg.org/cache/epub/4280/pg4280.cover.medium.jpg', 1, 0),
(474, 'An Inquiry into the Nature and Causes of the Wealth of Nations', 'Smith, Adam', 'Best Books Ever Listings, Harvard Classics', 'https://www.gutenberg.org/cache/epub/3300/pg3300.cover.medium.jpg', 1, 0),
(475, 'Helps to Latin Translation at Sight', 'Luce, Edmund', '', 'https://www.gutenberg.org/cache/epub/28890/pg28890.cover.medium.jpg', 1, 0),
(476, 'Die Verwandlung', 'Kafka, Franz', 'DE Prosa', 'https://www.gutenberg.org/cache/epub/22367/pg22367.cover.medium.jpg', 1, 0),
(477, '2 B R 0 2 B', 'Vonnegut, Kurt', 'Science Fiction', 'https://www.gutenberg.org/cache/epub/21279/pg21279.cover.medium.jpg', 1, 0),
(478, 'Up from Slavery: An Autobiography', 'Washington, Booker T.', 'African American Writers, Slavery', 'https://www.gutenberg.org/cache/epub/2376/pg2376.cover.medium.jpg', 1, 0),
(479, 'The Sorrows of Young Werther', 'Goethe, Johann Wolfgang von', 'Banned Books from Anne Haight\'s list, Harvard Classics, Opera', 'https://www.gutenberg.org/cache/epub/2527/pg2527.cover.medium.jpg', 1, 0),
(480, 'An Enquiry Concerning Human Understanding', 'Hume, David', 'Harvard Classics, Philosophy', 'https://www.gutenberg.org/cache/epub/9662/pg9662.cover.medium.jpg', 1, 0),
(481, 'On the Duty of Civil Disobedience', 'Thoreau, Henry David', '', 'https://www.gutenberg.org/cache/epub/71/pg71.cover.medium.jpg', 1, 0),
(482, 'The Enchiridion', 'Epictetus', '', 'https://www.gutenberg.org/cache/epub/45109/pg45109.cover.medium.jpg', 1, 0),
(483, 'The Trial', 'Kafka, Franz', 'Best Books Ever Listings, Horror', 'https://www.gutenberg.org/cache/epub/7849/pg7849.cover.medium.jpg', 1, 0),
(484, 'On War', 'Clausewitz, Carl von', '', 'https://www.gutenberg.org/cache/epub/1946/pg1946.cover.medium.jpg', 1, 0),
(485, 'Around the World in Eighty Days', 'Verne, Jules', 'Adventure, Best Books Ever Listings, Movie Books', 'https://www.gutenberg.org/cache/epub/103/pg103.cover.medium.jpg', 1, 0),
(486, 'R.U.R. (Rossum\'s Universal Robots): A Fantastic Melodrama in Three Acts and an Epilogue', 'Čapek, Karel', '', 'https://www.gutenberg.org/cache/epub/59112/pg59112.cover.medium.jpg', 1, 0),
(487, 'The Sun Also Rises', 'Hemingway, Ernest', '', 'https://www.gutenberg.org/cache/epub/67138/pg67138.cover.medium.jpg', 1, 0),
(488, 'Faust [part 1]. Translated Into English in the Original Metres', 'Goethe, Johann Wolfgang von', 'Banned Books from Anne Haight\'s list, Best Books Ever Listings, Harvard Classics', 'https://www.gutenberg.org/cache/epub/14591/pg14591.cover.medium.jpg', 1, 0),
(489, 'The Invisible Man: A Grotesque Romance', 'Wells, H. G. (Herbert George)', 'Movie Books', 'https://www.gutenberg.org/cache/epub/5230/pg5230.cover.medium.jpg', 1, 0),
(490, 'The Monkey\'s Paw: The Lady of the Barge and Others, Part 2.', 'Jacobs, W. W. (William Wymark)', 'Gothic Fiction', 'https://www.gutenberg.org/cache/epub/12122/pg12122.cover.medium.jpg', 1, 0),
(491, 'Mansfield Park', 'Austen, Jane', '', 'https://www.gutenberg.org/cache/epub/141/pg141.cover.medium.jpg', 1, 0),
(492, 'Demonology and Devil-lore', 'Conway, Moncure Daniel', '', 'https://www.gutenberg.org/cache/epub/40686/pg40686.cover.medium.jpg', 1, 0),
(493, 'Nature', 'Emerson, Ralph Waldo', '', 'https://www.gutenberg.org/cache/epub/29433/pg29433.cover.medium.jpg', 1, 0),
(494, 'Hedda Gabler', 'Ibsen, Henrik', '', 'https://www.gutenberg.org/cache/epub/4093/pg4093.cover.medium.jpg', 1, 0),
(495, 'Childe Harold\'s Pilgrimage', 'Byron, George Gordon Byron, Baron', '', 'https://www.gutenberg.org/cache/epub/5131/pg5131.cover.medium.jpg', 1, 0),
(496, 'A History of the Philippines', 'Barrows, David P.', '', 'https://www.gutenberg.org/cache/epub/38269/pg38269.cover.medium.jpg', 1, 0),
(497, 'The Tale of Peter Rabbit', 'Potter, Beatrix', 'Children\'s Picture Books', 'https://www.gutenberg.org/cache/epub/14838/pg14838.cover.medium.jpg', 1, 0),
(498, 'The Essays or Counsels, Civil and Moral', 'Bacon, Francis', 'Harvard Classics', 'https://www.gutenberg.org/cache/epub/575/pg575.cover.medium.jpg', 1, 0),
(499, 'The Flowers of Evil', 'Baudelaire, Charles', '', 'https://www.gutenberg.org/cache/epub/36098/pg36098.cover.medium.jpg', 1, 0),
(500, 'The History of Herodotus — Volume 1', 'Herodotus', '', 'https://www.gutenberg.org/cache/epub/2707/pg2707.cover.medium.jpg', 1, 0),
(501, 'Bleak House', 'Dickens, Charles', '', 'https://www.gutenberg.org/cache/epub/1023/pg1023.cover.medium.jpg', 1, 0),
(502, 'The Social Cancer: A Complete English Version of Noli Me Tangere', 'Rizal, José', '', 'https://www.gutenberg.org/cache/epub/6737/pg6737.cover.medium.jpg', 1, 0),
(503, 'The Ladies\' Book of Etiquette, and Manual of Politeness', 'Hartley, Florence', 'A Complete Hand Book for the Use of the Lady in Polite Society', 'https://www.gutenberg.org/cache/epub/35123/pg35123.cover.medium.jpg', 1, 0),
(504, 'Novo dicionário da língua portuguesa', 'Figueiredo, Cândido de', '', 'https://www.gutenberg.org/cache/epub/31552/pg31552.cover.medium.jpg', 1, 0),
(505, 'The Innocents Abroad', 'Twain, Mark', '', 'https://www.gutenberg.org/cache/epub/3176/pg3176.cover.medium.jpg', 1, 0),
(506, 'De Profundis', 'Wilde, Oscar', '', 'https://www.gutenberg.org/cache/epub/921/pg921.cover.medium.jpg', 1, 0),
(507, 'The City of God, Volume I', 'Augustine, Saint, Bishop of Hippo', '', 'https://www.gutenberg.org/cache/epub/45304/pg45304.cover.medium.jpg', 1, 0),
(508, 'The Consolation of Philosophy', 'Boethius', 'Classical Antiquity', 'https://www.gutenberg.org/cache/epub/14328/pg14328.cover.medium.jpg', 1, 0),
(509, 'Just So Stories', 'Kipling, Rudyard', 'Children\'s Literature, Scouts', 'https://www.gutenberg.org/cache/epub/2781/pg2781.cover.medium.jpg', 1, 0),
(510, 'The Nine Days\' Queen, Lady Jane Grey, and Her Times', 'Davey, Richard', '', 'https://www.gutenberg.org/cache/epub/50427/pg50427.cover.medium.jpg', 1, 0),
(511, 'The Marriage of Heaven and Hell', 'Blake, William', '', 'https://www.gutenberg.org/cache/epub/45315/pg45315.cover.medium.jpg', 1, 0),
(512, 'Ethan Frome', 'Wharton, Edith', '', 'https://www.gutenberg.org/cache/epub/4517/pg4517.cover.medium.jpg', 1, 0),
(513, 'White Nights and Other Stories: The Novels of Fyodor Dostoevsky, Volume X', 'Dostoyevsky, Fyodor', '', 'https://www.gutenberg.org/cache/epub/36034/pg36034.cover.medium.jpg', 1, 0),
(514, 'Cookery and Dining in Imperial Rome', 'Apicius', 'Cookbooks and Cooking', 'https://www.gutenberg.org/cache/epub/29728/pg29728.cover.medium.jpg', 1, 0),
(515, 'The Wind in the Willows', 'Grahame, Kenneth', 'Best Books Ever Listings, Children\'s Literature', 'https://www.gutenberg.org/cache/epub/289/pg289.cover.medium.jpg', 1, 0),
(516, 'The Iliad', 'Homer', 'Classical Antiquity', 'https://www.gutenberg.org/cache/epub/2199/pg2199.cover.medium.jpg', 1, 0),
(517, 'The Genealogy of Morals: The Complete Works, Volume Thirteen, edited by Dr. Oscar Levy.', 'Nietzsche, Friedrich Wilhelm', '', 'https://www.gutenberg.org/cache/epub/52319/pg52319.cover.medium.jpg', 1, 0),
(518, 'The island of Doctor Moreau', 'Wells, H. G. (Herbert George)', 'Best Books Ever Listings, Movie Books, Science Fiction', 'https://www.gutenberg.org/cache/epub/159/pg159.cover.medium.jpg', 1, 0),
(519, 'The Antichrist', 'Nietzsche, Friedrich Wilhelm', 'Philosophy', 'https://www.gutenberg.org/cache/epub/19322/pg19322.cover.medium.jpg', 1, 0),
(520, 'Divine Comedy, Longfellow\'s Translation, Hell', 'Dante Alighieri', 'Italy', 'https://www.gutenberg.org/cache/epub/1001/pg1001.cover.medium.jpg', 1, 0),
(522, 'The Decameron of Giovanni Boccaccio', 'Boccaccio, Giovanni', 'Best Books Ever Listings', 'https://www.gutenberg.org/cache/epub/23700/pg23700.cover.medium.jpg', 1, 0),
(523, 'A Passage to India', 'Forster, E. M. (Edward Morgan)', '', 'https://www.gutenberg.org/cache/epub/61221/pg61221.cover.medium.jpg', 1, 0),
(524, 'The Duchess of Malfi', 'Webster, John', 'Harvard Classics', 'https://www.gutenberg.org/cache/epub/2232/pg2232.cover.medium.jpg', 1, 0),
(525, 'The Phantom of the Opera', 'Leroux, Gaston', 'Gothic Fiction, Movie Books, Opera', 'https://www.gutenberg.org/cache/epub/175/pg175.cover.medium.jpg', 1, 0),
(526, 'A Connecticut Yankee in King Arthur\'s Court', 'Twain, Mark', 'Arthurian Legends, Precursors of Science Fiction', 'https://www.gutenberg.org/cache/epub/86/pg86.cover.medium.jpg', 1, 0),
(527, 'A Midsummer Night\'s Dream', 'Shakespeare, William', '', 'https://www.gutenberg.org/cache/epub/1514/pg1514.cover.medium.jpg', 1, 0),
(528, 'The Adventures of Pinocchio', 'Collodi, Carlo', '', 'https://www.gutenberg.org/cache/epub/500/pg500.cover.medium.jpg', 1, 0),
(529, 'Ang \"Filibusterismo\" (Karugtóng ng Noli Me Tangere)', 'Rizal, José', '', 'https://www.gutenberg.org/cache/epub/47629/pg47629.cover.medium.jpg', 1, 0),
(530, 'Poirot Investigates', 'Christie, Agatha', 'Detective Fiction', 'https://www.gutenberg.org/cache/epub/61262/pg61262.cover.medium.jpg', 1, 0),
(531, 'She Stoops to Conquer; Or, The Mistakes of a Night: A Comedy', 'Goldsmith, Oliver', 'Harvard Classics', 'https://www.gutenberg.org/cache/epub/383/pg383.cover.medium.jpg', 1, 0),
(532, 'The Red Record: Tabulated Statistics and Alleged Causes of Lynching in the United States', 'Wells-Barnett, Ida B.', 'African American Writers, Crime Nonfiction', 'https://www.gutenberg.org/cache/epub/14977/pg14977.cover.medium.jpg', 1, 0),
(533, 'The Age of Innocence', 'Wharton, Edith', 'Bestsellers, American, 1895-1923, Movie Books', 'https://www.gutenberg.org/cache/epub/541/pg541.cover.medium.jpg', 1, 0),
(534, 'Leaves of Grass', 'Whitman, Walt', 'Banned Books from Anne Haight\'s list, Best Books Ever Listings, Poetry', 'https://www.gutenberg.org/cache/epub/1322/pg1322.cover.medium.jpg', 1, 0),
(535, 'The Elementary Forms of the Religious Life', 'Durkheim, Émile', '', 'https://www.gutenberg.org/cache/epub/41360/pg41360.cover.medium.jpg', 1, 0),
(536, 'Utopia', 'More, Thomas, Saint', 'Harvard Classics, Politics', 'https://www.gutenberg.org/cache/epub/2130/pg2130.cover.medium.jpg', 1, 0),
(537, 'The Possessed (The Devils)', 'Dostoyevsky, Fyodor', 'Best Books Ever Listings', 'https://www.gutenberg.org/cache/epub/8117/pg8117.cover.medium.jpg', 1, 0),
(538, 'Selected Poems', 'Frost, Robert', '', 'https://www.gutenberg.org/cache/epub/59824/pg59824.cover.medium.jpg', 1, 0),
(539, 'The Metamorphoses of Ovid, Books I-VII', 'Ovid', 'Best Books Ever Listings', 'https://www.gutenberg.org/cache/epub/21765/pg21765.cover.medium.jpg', 1, 0),
(540, 'Riders to the Sea', 'Synge, J. M. (John Millington)', 'One Act Plays, Opera', 'https://www.gutenberg.org/cache/epub/994/pg994.cover.medium.jpg', 1, 0),
(541, 'The Castle of Otranto', 'Walpole, Horace', 'Gothic Fiction', 'https://www.gutenberg.org/cache/epub/696/pg696.cover.medium.jpg', 1, 0),
(542, 'Memoirs of Fanny Hill: A New and Genuine Edition from the Original Text (London, 1749)', 'Cleland, John', 'Banned Books from Anne Haight\'s list', 'https://www.gutenberg.org/cache/epub/25305/pg25305.cover.medium.jpg', 1, 0),
(543, 'Twelve Years a Slave', 'Northup, Solomon', 'Narrative of Solomon Northup, a Citizen of New-York, Kidnapped in Washington City in 1841, and Rescued in 1853, from a Cotton Plantation near the Red River in Louisiana', 'https://www.gutenberg.org/cache/epub/45631/pg45631.cover.medium.jpg', 1, 0),
(544, 'The three musketeers', 'Dumas, Alexandre', 'Adventure, Best Books Ever Listings, Historical Fiction, Movie Books', 'https://www.gutenberg.org/cache/epub/1257/pg1257.cover.medium.jpg', 1, 0),
(545, 'The Ten Books on Architecture', 'Vitruvius Pollio', 'Architecture', 'https://www.gutenberg.org/cache/epub/20239/pg20239.cover.medium.jpg', 1, 0),
(546, 'Rizal\'s own story of his life', 'Rizal, José', '', 'https://www.gutenberg.org/cache/epub/48438/pg48438.cover.medium.jpg', 1, 0),
(547, 'Don Juan', 'Byron, George Gordon Byron, Baron', '', 'https://www.gutenberg.org/cache/epub/21700/pg21700.cover.medium.jpg', 1, 0),
(548, 'The Grand Inquisitor', 'Dostoyevsky, Fyodor', 'Racism', 'https://www.gutenberg.org/cache/epub/8578/pg8578.cover.medium.jpg', 1, 0),
(549, 'The Pursuit of God', 'Tozer, A. W. (Aiden Wilson)', '', 'https://www.gutenberg.org/cache/epub/25141/pg25141.cover.medium.jpg', 1, 0),
(550, 'Complete Original Short Stories of Guy De Maupassant', 'Maupassant, Guy de', '', 'https://www.gutenberg.org/cache/epub/3090/pg3090.cover.medium.jpg', 1, 0),
(551, 'Discourse on the Method of Rightly Conducting One\'s Reason and of Seeking Truth in the Sciences', 'Descartes, René', 'Harvard Classics, Philosophy', 'https://www.gutenberg.org/cache/epub/59/pg59.cover.medium.jpg', 1, 0),
(553, 'Tess of the d\'Urbervilles: A Pure Woman', 'Hardy, Thomas', 'Banned Books from Anne Haight\'s list', 'https://www.gutenberg.org/cache/epub/110/pg110.cover.medium.jpg', 1, 0),
(554, 'The Aeneid', 'Virgil', 'Best Books Ever Listings, Classical Antiquity, Harvard Classics, Poetry', 'https://www.gutenberg.org/cache/epub/228/pg228.cover.medium.jpg', 1, 0),
(555, 'Pride and Prejudice', 'Austen, Jane', 'Best Books Ever Listings', 'https://www.gutenberg.org/cache/epub/42671/pg42671.cover.medium.jpg', 1, 0),
(556, 'A Course of Pure Mathematics: Third Edition', 'Hardy, G. H. (Godfrey Harold)', 'Mathematics', 'https://www.gutenberg.org/cache/epub/38769/pg38769.cover.medium.jpg', 1, 0),
(557, 'The Red Badge of Courage: An Episode of the American Civil War', 'Crane, Stephen', 'Best Books Ever Listings, Bestsellers, American, 1895-1923, Historical Fiction, US Civil War', 'https://www.gutenberg.org/cache/epub/73/pg73.cover.medium.jpg', 1, 0),
(558, 'The Devil\'s Dictionary', 'Bierce, Ambrose', 'Humor, Reference', 'https://www.gutenberg.org/cache/epub/972/pg972.cover.medium.jpg', 1, 0),
(559, 'Apology', 'Plato', 'Harvard Classics, Philosophy', 'https://www.gutenberg.org/cache/epub/1656/pg1656.cover.medium.jpg', 1, 0),
(560, 'The City of God, Volume II', 'Augustine, Saint, Bishop of Hippo', '', 'https://www.gutenberg.org/cache/epub/45305/pg45305.cover.medium.jpg', 1, 0),
(561, 'The Murder on the Links', 'Christie, Agatha', 'Detective Fiction', 'https://www.gutenberg.org/cache/epub/58866/pg58866.cover.medium.jpg', 1, 0),
(562, 'The Last of the Mohicans; A narrative of 1757', 'Cooper, James Fenimore', 'Historical Fiction', 'https://www.gutenberg.org/cache/epub/940/pg940.cover.medium.jpg', 1, 0),
(563, 'The Federalist Papers', 'Hamilton, Alexander', 'United States, United States Law', 'https://www.gutenberg.org/cache/epub/1404/pg1404.cover.medium.jpg', 1, 0),
(564, 'Moby-Dick; or, The Whale', 'Melville, Herman', 'Adventure, Best Books Ever Listings', 'https://www.gutenberg.org/cache/epub/15/pg15.cover.medium.jpg', 1, 0),
(565, '1001 задача для умственного счета', 'Rachinskii, Sergei Aleksandrovich', '', 'https://www.gutenberg.org/cache/epub/16527/pg16527.cover.medium.jpg', 1, 0),
(566, 'La Odisea', 'Homer', '', 'https://www.gutenberg.org/cache/epub/58221/pg58221.cover.medium.jpg', 1, 0),
(567, 'Der Struwwelpeter: oder lustige Geschichten und drollige Bilder', 'Hoffmann, Heinrich', 'Children\'s Picture Books, DE Kinderbuch', 'https://www.gutenberg.org/cache/epub/24571/pg24571.cover.medium.jpg', 1, 0),
(568, 'The Memoirs of Sherlock Holmes', 'Doyle, Arthur Conan', 'Detective Fiction', 'https://www.gutenberg.org/cache/epub/834/pg834.cover.medium.jpg', 1, 0),
(569, 'The Mysterious Stranger, and Other Stories', 'Twain, Mark', 'Best Books Ever Listings', 'https://www.gutenberg.org/cache/epub/3186/pg3186.cover.medium.jpg', 1, 0),
(570, 'As a Man Thinketh', 'Allen, James', '', 'https://www.gutenberg.org/cache/epub/4507/pg4507.cover.medium.jpg', 1, 0),
(571, 'The Tragedy of King Lear', 'Shakespeare, William', 'Best Books Ever Listings', 'https://www.gutenberg.org/cache/epub/1532/pg1532.cover.medium.jpg', 1, 0),
(572, 'Shakespearean Tragedy: Lectures on Hamlet, Othello, King Lear, Macbeth', 'Bradley, A. C. (Andrew Cecil)', '', 'https://www.gutenberg.org/cache/epub/16966/pg16966.cover.medium.jpg', 1, 0),
(573, 'Aesop\'s Fables: Translated by George Fyler Townsend', 'Aesop', '', 'https://www.gutenberg.org/cache/epub/21/pg21.cover.medium.jpg', 1, 0),
(574, 'Omens and Superstitions of Southern India', 'Thurston, Edgar', '', 'https://www.gutenberg.org/cache/epub/35690/pg35690.cover.medium.jpg', 1, 0),
(575, 'El paraíso perdido', 'Milton, John', '', 'https://www.gutenberg.org/cache/epub/67092/pg67092.cover.medium.jpg', 1, 0),
(576, 'The call of Cthulhu', 'Lovecraft, H. P. (Howard Phillips)', '', 'https://www.gutenberg.org/cache/epub/68283/pg68283.cover.medium.jpg', 1, 0),
(577, 'North and South', 'Gaskell, Elizabeth Cleghorn', '', 'https://www.gutenberg.org/cache/epub/4276/pg4276.cover.medium.jpg', 1, 0),
(578, 'Medea of Euripides', 'Euripides', 'Best Books Ever Listings', 'https://www.gutenberg.org/cache/epub/35451/pg35451.cover.medium.jpg', 1, 0),
(579, 'We', 'Zamiatin, Evgenii Ivanovich', '', 'https://www.gutenberg.org/cache/epub/61963/pg61963.cover.medium.jpg', 1, 0),
(580, 'Mi Ultimo Adiós', 'Rizal, José', '', 'https://www.gutenberg.org/cache/epub/18600/pg18600.cover.medium.jpg', 1, 0),
(581, 'The Strange Case of Dr. Jekyll and Mr. Hyde', 'Stevenson, Robert Louis', 'Gothic Fiction, Horror, Movie Books, Precursors of Science Fiction', 'https://www.gutenberg.org/cache/epub/42/pg42.cover.medium.jpg', 1, 0),
(582, 'The Canterville Ghost', 'Wilde, Oscar', '', 'https://www.gutenberg.org/cache/epub/14522/pg14522.cover.medium.jpg', 1, 0),
(583, 'Black Beauty', 'Sewell, Anna', 'Best Books Ever Listings, Children\'s Literature', 'https://www.gutenberg.org/cache/epub/271/pg271.cover.medium.jpg', 1, 0),
(584, 'A Treatise of Human Nature', 'Hume, David', 'Philosophy', 'https://www.gutenberg.org/cache/epub/4705/pg4705.cover.medium.jpg', 1, 0),
(585, 'White Fang', 'London, Jack', 'Adventure, Movie Books', 'https://www.gutenberg.org/cache/epub/910/pg910.cover.medium.jpg', 1, 0),
(586, 'Notre-Dame de Paris', 'Hugo, Victor', 'Banned Books from Anne Haight\'s list, Harvard Classics, Movie Books', 'https://www.gutenberg.org/cache/epub/2610/pg2610.cover.medium.jpg', 1, 0),
(587, 'The Return of Sherlock Holmes', 'Doyle, Arthur Conan', 'Detective Fiction', 'https://www.gutenberg.org/cache/epub/108/pg108.cover.medium.jpg', 1, 0),
(588, 'Hamlet, Prince of Denmark', 'Shakespeare, William', 'Best Books Ever Listings', 'https://www.gutenberg.org/cache/epub/27761/pg27761.cover.medium.jpg', 1, 0),
(589, 'The secrets of black arts!', 'Anonymous', '', 'https://www.gutenberg.org/cache/epub/71924/pg71924.cover.medium.jpg', 1, 0),
(590, 'Reflections; or Sentences and Moral Maxims', 'La Rochefoucauld, François duc de', '', 'https://www.gutenberg.org/cache/epub/9105/pg9105.cover.medium.jpg', 1, 0),
(591, 'The Beast in the Jungle', 'James, Henry', '', 'https://www.gutenberg.org/cache/epub/1093/pg1093.cover.medium.jpg', 1, 0),
(592, 'Symposium', 'Plato', '', 'https://www.gutenberg.org/cache/epub/1600/pg1600.cover.medium.jpg', 1, 0),
(593, 'The Aesop for Children: With pictures by Milo Winter', 'Aesop', '', 'https://www.gutenberg.org/cache/epub/19994/pg19994.cover.medium.jpg', 1, 0),
(594, 'Uncle Vanya: Scenes from Country Life in Four Acts', 'Chekhov, Anton Pavlovich', '', 'https://www.gutenberg.org/cache/epub/1756/pg1756.cover.medium.jpg', 1, 0),
(595, 'The Twilight of the Idols; or, How to Philosophize with the Hammer. The Antichrist', 'Nietzsche, Friedrich Wilhelm', '', 'https://www.gutenberg.org/cache/epub/52263/pg52263.cover.medium.jpg', 1, 0),
(597, 'Democracy in America — Volume 2', 'Tocqueville, Alexis de', '', 'https://www.gutenberg.org/cache/epub/816/pg816.cover.medium.jpg', 1, 0),
(598, 'A Christmas Carol', 'Dickens, Charles', 'Children\'s Literature, Christmas', 'https://www.gutenberg.org/cache/epub/24022/pg24022.cover.medium.jpg', 1, 0),
(599, 'Sexual ethics', 'Forel, Auguste', '', 'https://www.gutenberg.org/cache/epub/71898/pg71898.cover.medium.jpg', 1, 0),
(600, 'The Wars of the Jews; Or, The History of the Destruction of Jerusalem', 'Josephus, Flavius', 'Judaism', 'https://www.gutenberg.org/cache/epub/2850/pg2850.cover.medium.jpg', 1, 0),
(601, 'Arms and the Man', 'Shaw, Bernard', '', 'https://www.gutenberg.org/cache/epub/3618/pg3618.cover.medium.jpg', 1, 0),
(602, 'The Tragedy of Pudd\'nhead Wilson', 'Twain, Mark', '', 'https://www.gutenberg.org/cache/epub/102/pg102.cover.medium.jpg', 1, 0),
(603, 'Personal Memoirs of U. S. Grant, Complete', 'Grant, Ulysses S. (Ulysses Simpson)', 'Children\'s History, US Civil War', 'https://www.gutenberg.org/cache/epub/4367/pg4367.cover.medium.jpg', 1, 0),
(604, 'Vanity Fair', 'Thackeray, William Makepeace', 'Harvard Classics, Historical Fiction', 'https://www.gutenberg.org/cache/epub/599/pg599.cover.medium.jpg', 1, 0),
(605, 'The Forsyte Saga, Volume I.: The Man Of Property', 'Galsworthy, John', '', 'https://www.gutenberg.org/cache/epub/2559/pg2559.cover.medium.jpg', 1, 0),
(606, 'Rip Van Winkle', 'Irving, Washington', '', 'https://www.gutenberg.org/cache/epub/60976/pg60976.cover.medium.jpg', 1, 0),
(607, 'Andersen\'s Fairy Tales', 'Andersen, H. C. (Hans Christian)', 'Best Books Ever Listings, Children\'s Myths, Fairy Tales, etc., Harvard Classics', 'https://www.gutenberg.org/cache/epub/1597/pg1597.cover.medium.jpg', 1, 0),
(608, 'Selected Sermons of Jonathan Edwards', 'Edwards, Jonathan', '', 'https://www.gutenberg.org/cache/epub/34632/pg34632.cover.medium.jpg', 1, 0),
(609, 'Kidnapped', 'Stevenson, Robert Louis', 'Adventure, Best Books Ever Listings, Children\'s Literature, Historical Fiction, Movie Books', 'https://www.gutenberg.org/cache/epub/421/pg421.cover.medium.jpg', 1, 0),
(610, 'Simple Sabotage Field Manual', 'United States. Office of Strategic Services', '', 'https://www.gutenberg.org/cache/epub/26184/pg26184.cover.medium.jpg', 1, 0),
(611, 'Aesop\'s Fables; a new translation', 'Aesop', '', 'https://www.gutenberg.org/cache/epub/11339/pg11339.cover.medium.jpg', 1, 0),
(612, 'The Blue Castle: a novel', 'Montgomery, L. M. (Lucy Maud)', '', 'https://www.gutenberg.org/cache/epub/67979/pg67979.cover.medium.jpg', 1, 0),
(613, 'My Bondage and My Freedom', 'Douglass, Frederick', 'African American Writers, Slavery', 'https://www.gutenberg.org/cache/epub/202/pg202.cover.medium.jpg', 1, 0),
(618, 'Dialogues Concerning Natural Religion', 'Hume, David', 'Paganism, Philosophy', 'https://www.gutenberg.org/cache/epub/4583/pg4583.cover.medium.jpg', 1, 0),
(619, 'The Principles of Masonic Law', 'Mackey, Albert Gallatin', '', 'https://www.gutenberg.org/cache/epub/12186/pg12186.cover.medium.jpg', 1, 0);

-- --------------------------------------------------------

--
-- Table structure for table `Borrow`
--

CREATE TABLE `Borrow` (
  `id` int(11) NOT NULL,
  `checkoutDate` date NOT NULL,
  `dueDate` date NOT NULL,
  `returnDate` date DEFAULT NULL,
  `userId` int(11) NOT NULL,
  `bookId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Favorite`
--

CREATE TABLE `Favorite` (
  `userId` int(11) NOT NULL,
  `bookId` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

-- --------------------------------------------------------

--
-- Table structure for table `Information`
--

CREATE TABLE `Information` (
  `id` int(11) NOT NULL,
  `firstName` varchar(255) NOT NULL,
  `lastName` varchar(255) NOT NULL,
  `username` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `borrowCount` int(11) NOT NULL DEFAULT '0',
  `fine` int(11) NOT NULL DEFAULT '0',
  `isBorrowable` tinyint(1) NOT NULL DEFAULT '1',
  `roleId` int(11) NOT NULL DEFAULT '2'
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Triggers `Information`
--
DELIMITER $$
CREATE TRIGGER `updateBorrowable` BEFORE UPDATE ON `Information` FOR EACH ROW begin
	if new.fine >= 100 then
		set new.isBorrowable = 0;
    else
		set new.isBorrowable = 1;
    end if;
end
$$
DELIMITER ;

-- --------------------------------------------------------

--
-- Table structure for table `Role`
--

CREATE TABLE `Role` (
  `id` int(11) NOT NULL,
  `name` varchar(255) NOT NULL,
  `borrowLimit` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `Role`
--

INSERT INTO `Role` (`id`, `name`, `borrowLimit`) VALUES
(1, 'Librarian', 20),
(2, 'Member', 10);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Book`
--
ALTER TABLE `Book`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Borrow`
--
ALTER TABLE `Borrow`
  ADD PRIMARY KEY (`id`),
  ADD KEY `memberId` (`userId`),
  ADD KEY `bookId` (`bookId`);

--
-- Indexes for table `Favorite`
--
ALTER TABLE `Favorite`
  ADD KEY `userId` (`userId`),
  ADD KEY `bookId` (`bookId`);

--
-- Indexes for table `Information`
--
ALTER TABLE `Information`
  ADD PRIMARY KEY (`id`),
  ADD KEY `roleId` (`roleId`);

--
-- Indexes for table `Role`
--
ALTER TABLE `Role`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Book`
--
ALTER TABLE `Book`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=620;

--
-- AUTO_INCREMENT for table `Borrow`
--
ALTER TABLE `Borrow`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=33;

--
-- AUTO_INCREMENT for table `Information`
--
ALTER TABLE `Information`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=23;

--
-- AUTO_INCREMENT for table `Role`
--
ALTER TABLE `Role`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `Borrow`
--
ALTER TABLE `Borrow`
  ADD CONSTRAINT `borrow_ibfk_1` FOREIGN KEY (`bookId`) REFERENCES `Book` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `borrow_ibfk_2` FOREIGN KEY (`userId`) REFERENCES `Information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Favorite`
--
ALTER TABLE `Favorite`
  ADD CONSTRAINT `favorite_ibfk_1` FOREIGN KEY (`userId`) REFERENCES `Information` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `favorite_ibfk_2` FOREIGN KEY (`bookId`) REFERENCES `Book` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `Information`
--
ALTER TABLE `Information`
  ADD CONSTRAINT `information_ibfk_1` FOREIGN KEY (`roleId`) REFERENCES `Role` (`id`) ON UPDATE CASCADE;

DELIMITER $$
--
-- Events
--
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
end$$

DELIMITER ;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
