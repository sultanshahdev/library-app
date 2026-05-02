let EventHandler=
function()
{
    this.currentEventElement={};
    this.currentEvent={}
    this.Events=new Events();
};
EventResponder.prototype.showPopUp()
{
    selectAddBookButton();
    selectDialogPopUpEvent();  
    addEventToElement();

}
EventHandler.prototype.selectAddBookButton
=function()
{
    this.currentEvent=document.querySelector('new-book-button');
};
EventHandler.prototype.selectDialogPopUpEvent
=function()
{
    this.currentEvent=this.Events.DialogPopUpEvent;
};
EventHandler.prototype.addEventToElement
=function()
{
    this.currentEventElement.addEventListener('click',this.currentEvent);
};
