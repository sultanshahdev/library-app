let Events=function()
{
    this.dialogBox={

    };
}
Event.prototype.createDialogBox=
function()
{
    this.dialogBox=document.createElement('div')
    this.dialogBox.innerHTML=
        {

        };
    this.dialogBox.classList.add('new-book-dialog-box');
    
}
Events.prototype.showDialogBox=
function()
{
    document.querySelector('main').appendChild(dialogBox);
}
Events.prototype.closeDialogBox
=function()
{
    document.removeChild(this.dialogBox);
}
Events.prototype.removeBookItem=
function(bookListItem)
{
    this.document.querySelector('.book-list').removeChild(bookListItem);

}