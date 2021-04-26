/**
 * Create By : Mostafa Mohamed (Shdaow)
 * template-3
 * 
 */



 /* Start global Rulz*/
 $(function(){
    
   
   // Stop ul on hover


   // shoow animate hero
   $(function changeAnimationLeft(){

      $('.pa-hero').each(function(){
         $(this).animate({
            left:0
         },1000,function(){
            $(this).delay(4000).fadeOut(1000,function(){
               $(this).animate({
                  left:'-100%'
            }).fadeIn();
            changeAnimationLeft();
            });
         });
      });

   }())

   // navbar-big vixed 

   $(window).scroll(function(){
      if($(window).scrollTop() > $('header').height())
      {
         $('header .parent-nav-big .logo').css({width:'20%'});
         $('header .parent-nav-big .nav-big').css({width:'80%'});
         $('header .parent-nav-big').addClass('run-animation').removeClass('stop-animation');
      }
      else
      {

         $('header .parent-nav-big .nav-big').css({width:'70%'});
         $('header .parent-nav-big').addClass('stop-animation').removeClass('run-animation');

      }
   });

     // navbar-big vixed 

     $(window).scroll(function(){
      if($(window).scrollTop() > $('header').height())
      {
         $('header .parent-nav-small .logo img').css({marginTop:'4px'});
         $('header .parent-nav-small .parent-list').css({top:'15px'});
         $('header .parent-nav-small').addClass('run-animation').removeClass('stop-animation');
      }
      else
      {
         $('header .parent-nav-small .logo img').css({marginTop:'30px'});
         $('header .parent-nav-small .parent-list').css({top:'30px'});
         $('header .parent-nav-small').addClass('stop-animation').removeClass('run-animation');

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