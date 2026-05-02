let Book=function(title,author,pageCount,readStatus)
{
    this.title=String(title);
    this.author=String(author);
    this.pageCount=Number(pageCount);
    this.readStatus=Boolean(readStatus);
};