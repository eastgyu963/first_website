var Body={
    setColor:function(color){
        document.querySelector('body').style.color=color;
    },
    setBackgroundColor:function(color){
        document.querySelector('body').style.backgroundColor=color;
    }
}
var Links={
    setColor:function(color){
        var alist=document.querySelectorAll('a');
    var i=0;
        while(i<alist.length)
        {
            alist[i].style.color=color;
            i++;
        }
    }
}
function nightDayHandler(self)
{
    var target=document.querySelector('body');
    if(self.value==='night'){
        self.value='day';
        Body.setBackgroundColor('black');
        Body.setColor('white');
        Links.setColor('powderblue');
    }
    else{
        self.value='night';
        Body.setBackgroundColor('white');
        Body.setColor('black');
        Links.setColor('pink');
    }
}