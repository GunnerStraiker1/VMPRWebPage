$('.main-iso').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
});

$('.iso-nav ul li button').click(function(){
	$('.iso-nav ul li button').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$('.main-iso').isotope({
		filter: selector
	});
	return false;
});
