/**
 * Create By : Mostafa Mohamed (Shdaow)
 * 
 */

 $(function(){
   // shoow animate hero
   $(function animationHero(){

      $(".animate-hero").each(function(){
         $(this).animate({
            left:0
         },1000,function(){
            $(this).delay(4000).fadeOut(1000,function(){
               $(this).animate({
                  left:'-100%'
            }).fadeIn();
            animationHero();
            });
         });
      });

   }());

   // navbar-big fixed 
   $(window).scroll(function(){
      if($(window).scrollTop() > $('header').height()){
         $('header nav').addClass('run-animation').removeClass('stop-animation');
      }
      else{
         $('header nav').addClass('stop-animation').removeClass('run-animation');
      }
   });




   //click show ul Nav

   $('.parent-list i').on('click',function(){
      
      if ($('.nav-small').is(':hidden')){
         $('.nav-small').slideDown(700,function(){
            $('.nav-small').css({
               display:'block'
            });
         });
      }

      else
      {
         $('.nav-small').slideUp(700,function(){
            $('.nav-small').css({
               display:'none'
            });
         });

      }
   });


      /** Show Icon Scrolling */

      $(window).scroll(function(){
      if ($(window).scrollTop() > 1000 ){
         $('.parent-scroll').fadeIn(300)
      }
      else
      {
         $('.parent-scroll').fadeOut(300)
      }
      })  


                     /** click Scrolling smooth */

   $('.parent-scroll i').on('click',function(){
      $("html,body").animate({
         scrollTop:0
      },2000);
   });
});