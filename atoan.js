let x = document.getElementById('img');
let count=0;
setInterval(() => {
    count++;
    if(count%3==1){
        x.style.backgroundImage= "url('https://theme.hstatic.net/1000257596/1000329871/14/slideshow_3.jpg?v=82')";
        x.style.transition= "background 4s"
    }else if(count%3==2){
        x.style.backgroundImage= "url('https://theme.hstatic.net/1000257596/1000329871/14/slideshow_2.jpg?v=82')"
        x.style.transition= "background 4s"
    }else{
        x.style.backgroundImage= "url('https://theme.hstatic.net/1000257596/1000329871/14/slideshow_1.jpg?v=82')"
        x.style.transition= "background 4s"
    }

}, 4000);

let y=document.getElementsByClassName('anh');
let z =document.getElementsByClassName('icon');

for(let i=0;i<y.length;i++){
    y[i].addEventListener('mouseover', function(){
        z[i].style.opacity="1";
    })
    y[i].addEventListener('mouseout', function(event){
        z[i].style.opacity="0";
    })
}

window.onscroll = function(){
    scrollFunction();
}
function scrollFunction(){
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
       console.log('oke')
      }
}
