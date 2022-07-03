let menuButton = document.querySelector('.ClickMe'); //getElementByClassName은 배열을 반환하기 때문에 addEventListener에서 정확히 몇번짼지 알려줘야함
let closeButton = document.querySelector('.ClickMe2');
let menuWrap = document.querySelector('.fixed_navi ul');
let menuElements = document.querySelectorAll('.fixed_navi ul li');
let container = document.querySelector('#container');

console.log('%c'+ menuElements.length,`background: ${"#FF0000"}` , `color: ${"#FFFFFF"}`  );

// var randomColor = Math.floor(Math.random()*16777215).toString(16);
// fixed_navi.style.background= "#" + randomColor;

menuButton.addEventListener('click',hello_navi);
closeButton.addEventListener('click',bye_navi);
container.addEventListener('click',bye_navi)
//클릭하면 navi block 다른곳 클릭하면 navi none 
function hello_navi(){
       console.log(menuWrap.style.display ='none');
        if(menuWrap.style.display ='none'){
            menuButton.style.display ='none';
            closeButton.style.transitionDuration ='1s';
            closeButton.style.display ='block';

            
            menuWrap.style.transitionDuration = '1s';
            menuWrap.style.display ='block';
            
            
        }else{
            menuWrap.style.display ='none';
        }
}
function bye_navi(){
        console.log(menuWrap.style.display ='block');
        if(menuWrap.style.display ='block'){
            menuButton.style.display ='block';
            closeButton.style.display ='none';
            menuWrap.style.display ='none';
            
        }
        
}

