let Library=
function()
{
    if(!new.target)
    {
        throw new Error("the constructor of an object must be called with new")
    }
    this.booksData=[];
    this.booksAdder = new BooksAdder()
    this.booksRemover=new BooksRemover()
}
