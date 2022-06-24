
window.addEventListener('onload', function(){
   
    

});               
 //svg animation, Vivus.js                 
let icon = new Vivus('icon', {
    type: 'delayed',
    duration: 100
  });

  var resetAnim = () => {
    icon.stop().reset();
    icon.el.classList.remove('finished');
    buttons.map(button => button.classList.remove('is-link'));
  }

  var playAnim = (anim) => {
    if (anim === 'fill') {
      icon = new Vivus('icon', {
        duration: 150
      }, obj => {
      obj.el.classList.add('finished');
    });
    } else {
      icon = new Vivus('icon', {
        type: anim,
        duration: 150
      }); 
    }
  }
  //scroll lock 
  const loader = document.querySelector("#loading_wrap");
  const loader_wrap = document.querySelector("#container");
 
  loader.addEventListener('wheel', preventScroll, {passive: false});

  function preventScroll(e){
      e.preventDefault();
      e.stopPropagation();
  
      return false;
  } 
  function byeloader() {
    loader.style.display = "none";
  }
  
 setTimeout(byeloader, 1800);