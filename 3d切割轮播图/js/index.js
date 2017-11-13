$(function() {

	var index = 0;
     var ooff = true;
     $('.left').on('click',function() {
     	if (!ooff) return;
     	index--;
     	var angle= -index*90;
           $('ul li').css('transform','rotateX('+angle+'deg)').each(function(index,item) {
                    $(this).css('transition-delay',index*0.25+'s');
           });
           ooff = false;
     });

     $('.right').on('click',function(){
     	if (!ooff) return;
          index++;
          var angle =-index*90;
          $('li').css('transform','rotateX('+angle+'deg)').each(function(index,item) {
                    $(this).css('transition-delay',index*0.25+'s');
          });
          ooff=false;
     });
      
     $('li:last').on('transitionend',function() {
           ooff = true;
     });
     
});