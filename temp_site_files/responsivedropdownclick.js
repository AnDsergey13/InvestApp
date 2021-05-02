jQuery.noConflict();
jQuery(document).ready(function($) {

	$("div#arrow-icon.dropdown-toggle").toggle(
	function(){
		$(this).parent().addClass('open').parent().addClass('nav-hover');
	},
	function(){
		$(this).parent().removeClass('open').parent().removeClass('nav-hover');
	});
});