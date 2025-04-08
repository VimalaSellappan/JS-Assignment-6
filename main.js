const library = [];
const book={
    Title,
    Author,
    isRead
};
function addBook(){

}
function listBooks(){

}
function markAsRead(title){

}
while(running){
    const choice=prompt(`
        Book Tracker
        1.Add Book
        2.List Books
        3.Mark Book As Read
        4.Exit
        Enter Your Choice:`);

switch(choice){
    case "1":
        addBook();
        break;
    case "2":
        listBooks();
        break;
    case "3":
        prompt("Enter the title of the book to mark as read:");
        markAsRead(title);
        break;
    case "4":
        running=false;
        alert("Good Bye!");
        break;
    default:
        alert("Invalid Choice")
}

}