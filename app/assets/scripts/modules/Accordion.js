function openFirstPanel(){
  $('.accordion > .accordion__title:first-child').next().addClass('active').slideDown();
}

(function($) {
    
  var allPanels = $('.accordion > .accordion__description').hide();
  
  openFirstPanel();
    
  $('.accordion > .accordion__title > a').click(function(e) {
  	e.preventDefault();
  	console.log($(this).text());
      var $target =  $(this).parent().next();
      
    
      if($target.hasClass('active')){
        $target.removeClass('active').slideUp(); 
      }else{
        allPanels.removeClass('active').slideUp();
        $target.addClass('active').slideDown();
      }
      
    return false;
  });

})(jQuery);