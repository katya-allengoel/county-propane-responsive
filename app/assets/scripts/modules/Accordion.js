function openFirstPanel(){
  $('.accordion > .accordion__title:first-child').next().addClass('active').slideDown();
}

(function($) {
    
  var allDescriptions = $('.accordion > .accordion__description').hide();
  var allTitles = $('.accordion > .accordion__title');
  
 // openFirstPanel();
    
  $('.accordion > .accordion__title > a').click(function(e) {
  	e.preventDefault();
  	
      var $description =  $(this).parent().next();
      var $title = $(this).parent();
      
    
      if($description.hasClass('active')){
        $description.removeClass('active').slideUp();
        $title.removeClass('active');
        
      }else{
        allDescriptions.removeClass('active').slideUp();
        allTitles.removeClass('active');
        $description.addClass('active').slideDown();
        $title.addClass('active');
      }
      
    return false;
  });

})(jQuery);