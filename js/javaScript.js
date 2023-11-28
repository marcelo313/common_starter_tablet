let lastScrollTop = 0;

window.addEventListener("scroll", function(){
   let currentScroll = window.pageYOffset || document.documentElement.scrollTop;
   if (currentScroll > lastScrollTop){
       // Scroll Down
       document.querySelector('nav').style.top = '-100px'; // Adjust based on the height of your nav
   } else {
      // Scroll Up
      document.querySelector('nav').style.top = '0px';
   }
   lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
}, false);
