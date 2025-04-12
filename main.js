const library = [];
let running=true;

function addBook(){
    const title = prompt("Enter the book title:");
    const author = prompt("Enter the book author:");
    const isReadInput = prompt("Have you read this book before? (yes/no):").toLowerCase();
    const isRead = isReadInput == "yes";
    const book={
    title: title,
    author: author,
    isRead: isRead
};
    library.push(book);        
    alert(`"${title}" by ${author} has been added to your library.`);
}
function listBooks(){
    
    if (library.length ==0) {
        alert("No books in the library.");
      }
    else {
        let message = "Your Library List:\n";
        library.forEach((book, index) => {
            message += `${index + 1}. "${book.title}" by ${book.author} - ${book.isRead ? "Read" : "Unread"}\n`;
        });
        alert(message);
      }
}
function markAsRead(title){
    const book = library.find(book => book.title.toLowerCase() === title.toLowerCase());
    if(book){
        if (book.isRead) {
            alert(`"${book.title}" is already marked as read.`);
        }
        else {
            book.isRead=true;
            alert("Marked as read");
        }
    }
    else
      alert("Book not found.");
    }


function removeBook(title){
    
const index = library.findIndex(book => book.title.toLowerCase() === title.toLowerCase());

    if (index !== -1) {
      library.splice(index, 1);
      alert(`"${title}" has been removed from the library.`);
    } else {
      alert("Book not found.");
    }

}

while(running){
    const choice=prompt(`
        Book Tracker
        1.Add Book
        2.List Books
        3.Mark Book As Read
        4.Remove Book from list
        5.Exit
        Enter Your Choice:`);

switch(choice){
    case "1":
        addBook();
        break;
    case "2":
        listBooks();
        break;
    case "3":
        const title= prompt("Enter the title of the book to mark as read:");
        markAsRead(title);
        break;
    case "4":
        const removetitle= prompt("Enter the Book title to remove from the list:")
        removeBook(removetitle);
        break;
    case "5":
        running=false;
        alert("Good Bye!");
        break;
    default:
        alert("Invalid Choice");
}

}