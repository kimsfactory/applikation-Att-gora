var attGora = document.getElementById('att_gora');
var laggTill = document.getElementById('lagg_till_btn');
var fardiga = document.getElementById('fardiga');


laggTill.addEventListener('click', function() {
	var attGoraList = document.createElement('li');
	
	var attGoraSyssla = document.createElement('input');
	attGoraSyssla.value = document.getElementById('syssla0').value;
	attGoraSyssla.setAttribute('type', 'text');
	attGoraSyssla.setAttribute('id', 'attGoraListItem');
	attGoraSyssla.setAttribute('readonly', '');

	var btnAndra1 = document.createElement('button');
	btnAndra1.setAttribute('type', 'button');
	btnAndra1.setAttribute('id', 'andra');
	btnAndra1.innerHTML = "Ändra";
	btnAndra1.addEventListener('click', function() {
		attGoraSyssla.removeAttribute('readonly');
		btnAndra1.addEventListener('click', function() {
			attGoraSyssla.setAttribute('readonly', '');		
		});		
	});

	var btnFardig = document.createElement('button');
	btnFardig.setAttribute('type', 'button');
	btnFardig.setAttribute('id', 'fardig');
	btnFardig.innerHTML = "Färdig";
	btnFardig.addEventListener('click', function() {

		var fardigaList = document.createElement('li');
		
		var fardigaSyssla = document.createElement('input');
		fardigaSyssla.value = attGoraSyssla.value;
		fardigaSyssla.setAttribute('type', 'text');
		fardigaSyssla.setAttribute('id', 'fardigaListItem');
		fardigaSyssla.setAttribute('readonly', '');

		var btnAndra2 = document.createElement('button');
		btnAndra2.setAttribute('type', 'button');
		btnAndra2.setAttribute('id', 'andra');
		btnAndra2.innerHTML = "Ändra";
		btnAndra2.addEventListener('click', function() {
			fardigaSyssla.removeAttribute('readonly');
			btnAndra2.addEventListener('click', function() {
				fardigaSyssla.setAttribute('readonly', '');		
			});	
		});

		fardigaList.appendChild(fardigaSyssla);
		fardigaList.appendChild(btnAndra2);
		fardiga.appendChild(fardigaList);

		attGoraSyssla.remove();
		btnAndra1.remove();
		btnFardig.remove();
		attGoraList.remove();
	});

	attGoraList.appendChild(attGoraSyssla);
	attGoraList.appendChild(btnAndra1);
	attGoraList.appendChild(btnFardig);
	attGora.appendChild(attGoraList);
});
