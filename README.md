# Project: BookBorrow

## Overview
BookBorrow is a web application designed for managing book borrowing activities. The system allows users to sign in or sign up, borrow books, and create lists of favorite books. Librarians have the additional capability to manage books and user accounts, including the ability to add, edit, or delete entries.

## Technologies Used
- **Next.js:** A React-based web framework that enables efficient server-side rendering and provides a great developer experience.
- **Chakra UI:** A modular and accessible component library for React applications, offering a set of customizable UI components.
- **MySQL:** A relational database management system used for storing and retrieving data related to users, books, and library activities.

## Credits
The project utilizes the database provided by [Gutendex](https://gutendex.com/), contributing to the richness and diversity of available books.

## Features

### User Features
1. **Authentication:**
   - Users can sign in or sign up to access the system.

2. **Book Borrowing:**
   - Users can borrow books from the available collection.

3. **Favorite Lists:**
   - Users can create and manage lists of their favorite books.

### Librarian Features
1. **Book Management:**
   - Librarians can add new books to the system.
   - Edit existing book details.
   - Delete books that are no longer in the collection.

2. **Account Management:**
   - Librarians can manage user accounts, including adding new users and editing or deleting existing accounts.

## Database Structure (SQL)

### Tables
1. **Book:**
   - id
   - title
   - author
   - description
   - coverUrl
   - isAvailable
   - likes

2. **Borrow:**
   - id
   - checkoutDate
   - dueDate
   - returnDate
   - userId
   - bookId

3. **Favorite:**
   - userId
   - bookId

4. **Information:**
   - id
   - firstName
   - lastName
   - username
   - password
   - borrowCount
   - fine
   - isBorrowable
   - roleId

5. **Role:**
    - id
    - name
    - borrowLimit

### Procedures
1. **borrowBook:**
   - Borrow a book.

2. **deleteBook:**
   - Removes a book.

3. **returnBook:**
   - Return a book.

4. **favBook:**
   - Add a book to favorite lists.

5. **unfavBook:**
   - Remove a book from favorite lists.

6. **deleteUser:**
   - Delete a user from the system.

### Triggers
1. **updateBorrowable:**
   - Automatically update the borrowability of the users.

### Events
1. **updateFine:**
   - Automatically update the fine of the users.