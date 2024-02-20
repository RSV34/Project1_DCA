const btn = document.getElementById('btn');
let num1 = 0;
let lastClick;
btn.addEventListener('click', function(){
    // this.classList.toggle("close");
    // console.log(this.innerHTML);
    num1+=1;
    if((num1%2)== 0 )
    {
        this.innerHTML='☰';
    }
    else
    {
        this.innerHTML='X';
    }
    // console.log(this.innerHTML);
});

var navLink = document.getElementsByClassName('nav-link');

for(var i=0; i< navLink.length ;i++){
    navLink[i].onclick = function myFunc(event){
        console.log(event);
        if(lastClick === undefined)
        {
            console.log('First Click');
        }
        else{
            lastClick.classList.remove('navActive')
        }
        event.srcElement.classList.add('navActive');
        lastClick = event.srcElement;
    }
    // console.log(navLink[i].classList.add('navActive'));
    
}





