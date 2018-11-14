import $ from 'jquery';


var stickyNavTop = $('.navbar').offset().top;	
var stickyNav = function(){
var scrollTop = $(window).scrollTop(); 

if (scrollTop > stickyNavTop) { 
    $('.navbar').addClass('navbar--fixed');
} else {
    $('.navbar').removeClass('navbar--fixed'); 
}
};

stickyNav();
// and run it again every time you scroll
$(window).scroll(function() {
	stickyNav();
});