//calculator function
jQuery(document).ready(function(){
	var funds;
	var total;
	var remaining;
	var clubs;
	jQuery('.next').click(function(){
		clubs = jQuery('.clubs').val();
		funds = jQuery('.funds').val();
		total = parseFloat(funds);
		total = total * 0.1;

		jQuery('.next').hide();
		jQuery('.report').show();
		jQuery('.back').show();

		jQuery('.main-form').html('');
		for (var i = 1; i <= clubs; i++) {
			jQuery('.main-form').append('<input class="club-name" type="text" placeholder="Club Name '+i+'">');
		}
	});

	jQuery('.report').click(function(){
		jQuery('.main-form input.club-name').each(function(){
			var name = jQuery(this).val();
			jQuery('.main-form').append('<div class="reports">Club '+name+': PHP '+total+' </div>');
			jQuery(this).remove();
		});

		total = total * parseInt(clubs);
		remaining = funds - total;

		jQuery('.main-form').append('<div class="total">Funds: '+funds+'</div>');
		jQuery('.main-form').append('<div class="total">Club Funds: '+total+'</div>');
		jQuery('.main-form').append('<div class="total">Remaining: '+remaining+'</div>');

		jQuery('.report').hide();
		jQuery('.back').show();
	});


	jQuery('.back').click(function(){
		jQuery('.report').hide();
		jQuery('.back').hide();
		jQuery('.next').show();
		jQuery('.main-form').html('<div class="input-form"><label>Funds</label>: <input class="funds" type="text" placeholder="Funds Price"></div><div class="input-form"><label>Clubs</label>: <input class="clubs" type="text" placeholder="How many clubs?"></div>');
	});

});