 /* =====================================================================

	Copyright:  Hybrid Forge 2013. All Rights Reserved.
	Authors: 	Khean Murphy (www.hybridforge.com)
	Date: 		April 2013
	
	Info: 		Custom jQueryfor APLEN Training Centre

	"In the beginner's mind there are many possibilities, 
		but in the expert's there are few." - Shunryu Suzuki-Roshi

	===================================================================== */


jQuery(document).ready(function($) {

	$('.view-training-resources .view-header').appendTo('.view-training-resources .view-filters #edit-keys-wrapper');

	$('.logged-in.page-user .region-top-menu').prependTo('#tasks');
	$('.logged-in.page-user .region-top-menu #block-system-user-menu .menu').addClass('tabs');

/*
	$('.page-taxonomy-term .node-booking-resource.node-teaser .field-label').text('This Lab has been booked for:');	
		
	$('.page-taxonomy-term .term-listing-heading').after('<a class="button booking" href="/node/170/">Book this Mobile Technology Lab</a>');
*/
});
