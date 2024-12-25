function clock(){
    let hours=document.querySelector('.hours')
    let minutes=document.querySelector('.minute')
    let second=document.querySelector('.second')
    let period=document.querySelector('.period')

    let h= new Date().getHours();
    let m= new Date().getMinutes();
    let s= new Date().getSeconds();
    
    let ampm=h>=12 ? "PM":"AM"

    if(h > 12){
        h=h-12;
    }
    
    h=(h<10)? "0" + h :h;
   
    s=(s<10)? "0" + s :s;
   
    m=(m<10)? "0" + m :m;


    hours.innerHTML=h;
    minutes.innerHTML=m;
    second.innerHTML=s;
    period.innerHTML=ampm

}
setInterval(clock, 1000);