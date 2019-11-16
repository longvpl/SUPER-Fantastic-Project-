let x=document.getElementsByClassName('anh');
let y =document.getElementsByClassName('icon');

for(let i=0;i<x.length;i++){
    x[i].addEventListener('mouseover', function(){
        y[i].style.opacity="1";
    })
    x[i].addEventListener('mouseout', function(event){
        y[i].style.opacity="0";
    })
}
let z = document.getElementById('back-anh');
let url = [
    'https://theme.hstatic.net/1000257596/1000329871/14/block_home_category2.jpg?v=82',
    'https://theme.hstatic.net/1000257596/1000329871/14/block_home_category1.jpg?v=82'
]

let count=0;
        setInterval(() => {
            count++;
           if(count % 3 == 0){
            z.style.backgroundImage = "url(https://theme.hstatic.net/1000257596/1000329871/14/slideshow_3.jpg?v=82)"
           }
           else if(count % 3 == 1){
            z.style.backgroundImage = "url(https://theme.hstatic.net/1000257596/1000329871/14/slideshow_2.jpg?v=82)"
           }
           else{
            z.style.backgroundImage = "url(https://theme.hstatic.net/1000257596/1000329871/14/slideshow_1.jpg?v=82)"
           }
            
        }, 5000);
    

