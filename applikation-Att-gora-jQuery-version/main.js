var attGora = $('#att_gora');
var laggTill = $('#lagg_till_btn');
var fardiga = $('#fardiga');



laggTill.on('click', function() {
	let attGoraList = $('<li></li>');
	
	let attGoraSyssla = $('<input></input>');
	attGoraSyssla.val($('#syssla0').val());
	attGoraSyssla.attr('type', 'text');
	attGoraSyssla.attr('id', 'attGoraListItem');
	attGoraSyssla.attr('readonly', '');

	let btnAndra1 = $('<button></button>');
	btnAndra1.attr('type', 'button');
	btnAndra1.attr('id', 'andra');
	btnAndra1.html('Ändra');
	btnAndra1.on('click', function() {
		attGoraSyssla.removeAttr('readonly');
		btnAndra1.on('click', function() {
			attGoraSyssla.attr('readonly', '');		
		});		
	});

	let btnFardig = $('<button></button>');
	btnFardig.attr('type', 'button');
	btnFardig.attr('id', 'fardig');
	btnFardig.html('Färdig');
	btnFardig.on('click', function() {

		let fardigaList = $('<li></li>');
		
		let fardigaSyssla = $('<input></input>');
		fardigaSyssla.val(attGoraSyssla.val());
		fardigaSyssla.attr('type', 'text');
		fardigaSyssla.attr('id', 'fardigaListItem');
		fardigaSyssla.attr('readonly', '');

		let btnAndra2 = $('<button></button>');
		btnAndra2.attr('type', 'button');
		btnAndra2.attr('id', 'andra');
		btnAndra2.html('Ändra');
		btnAndra2.on('click', function() {
			fardigaSyssla.removeAttr('readonly');
			btnAndra2.on('click', function() {
				fardigaSyssla.attr('readonly', '');		
			});	
		});

		fardigaList.append(fardigaSyssla);
		fardigaList.append(btnAndra2);
		fardiga.append(fardigaList);

		attGoraSyssla.remove();
		btnAndra1.remove();
		btnFardig.remove();
		attGoraList.remove();
	});

	attGoraList.append(attGoraSyssla);
	attGoraList.append(btnAndra1);
	attGoraList.append(btnFardig);
	attGora.append(attGoraList);
});
