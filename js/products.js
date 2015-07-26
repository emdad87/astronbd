




$(document).ready(function(){
  $('#pdisp1').hover(function()
	{
	  // do my image switching logic here.
	  $('#product-display').css("background-image", "url(./images/facewash_330x330.jpg)");
	  $('#product-details').text("Amino-18 Softgel Capsules: \
	  Amino-18  -Builds & strengthens body muscle, skin, for both male & female. Initiates protein synthesis, \
	  production of Growth hormons, Sex hormons, Enzymes and Insulin etc. Improves immunity etc. \
	  Product pack size : each Box contains 2X15 softgel capsules in blister strips. Example Text. Example Text. Example Text. Example Text. \
            Example Text. Example Text. Example Text. Example Text. Example Text. Example Text. Example Text. Example Text. \
			Example Text. Example Text. Example Text. Example Text. \
            Example Text. Example Text. Example Text. Example Text. Example Text. Example Text. Example Text. Example Text. \
			Example Text. Example Text. Example Text. Example Text. \
            Example Text. Example Text. Example Text. Example Text. Example Text. Example Text. Example Text. Example Text. ");

	});
	
	$('#pdisp2').hover(function()
	{
	  // do my image switching logic here.
	  $('#product-display').css("background-image", "url(./images/stayon_330x330.jpg)");
	  $('#product-details').text("product2");

	});
	
	$('#pdisp3').hover(function()
	{
	  // do my image switching logic here.
	  $('#product-display').css("background-image", "url(./images/facewash_330x330.jpg)");
	  $('#product-details').text("product3");

	});

	
	
	
	
	
	
	(function($) {
	$.lockfixed("#product-page-sidebar", {offset: {top: 10, bottom: 250}});
	/*$.lockfixed("#sidebar .menu",{offset: {top: 10, bottom: 620}});
	$.lockfixed("#sidebar .promo",{offset: {top: 420, bottom: 510}});*/	
	})(jQuery);	
});







