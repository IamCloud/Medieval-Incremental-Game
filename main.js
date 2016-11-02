var charName= "Marler";
var EXP = 0;
var WeaponCost = 10;
var WeaponBonus = 1;
var WeaponQuantity = 0;
var DummyCost = 100;
var DummyBonus = 5;
var DummyQuantity = 0;
var ConcentrationCost = 1000;
var ConcentrationBonus = 10;
var ConcentrationQuantity = 0;

var begCost = 10;
var begBonus = 1;
var begQuantity = 0;
var advCost = 100;
var advBonus = 5;
var advQuantity = 0;

var expPclick = 1;
var expPsec = 0;

function addEXP(){
		EXP = EXP + expPclick;
		document.getElementById("EXP").innerHTML = EXP;
}

function getCharName(){
    charName = prompt("Enter your character name: ", "Marler");
	document.getElementById('charName').innerHTML = charName;
}

function addWeapon(){
	if (EXP >= WeaponCost){
		EXP -= WeaponCost;
		WeaponQuantity++;
		WeaponCost = Math.round(WeaponCost * (1.2));
		document.getElementById('WeaponCost').innerHTML = WeaponCost;
		document.getElementById('WeaponQuantity').innerHTML = WeaponQuantity;
		expPclick++;
		UpdateStats();
	}
}

function addDummy(){
	if (EXP >= DummyCost){
		EXP -= DummyCost;
		DummyQuantity++;
		DummyCost = Math.round(DummyCost * (1.2));
		document.getElementById('DummyCost').innerHTML = DummyCost;
		document.getElementById('DummyQuantity').innerHTML = DummyQuantity;
		expPclick += 5;
		UpdateStats();
	}
}

function addConcentration(){
	if (EXP >= ConcentrationCost){
		EXP -= ConcentrationCost;
		ConcentrationQuantity++;
		ConcentrationCost = Math.round(ConCost * (1.2));
		document.getElementById('ConcentrationCost').innerHTML = ConcentrationCost;
		document.getElementById('ConcentrationQuantity').innerHTML = ConcentrationQuantity;
		expPclick += 10;
		UpdateStats();
	}
}

function addBeginner(){
	if (EXP >= begCost){		
		EXP -= begCost;
		begQuantity++;
		begCost = Math.round(begCost * (1.2));
		document.getElementById('beginnerCost').innerHTML = begCost;
		document.getElementById('beginnerQuantity').innerHTML = begQuantity;
		expPsec+= 1;
		UpdateStats();
	}
}

function addAdvanced(){
	if (EXP >= advCost){
		EXP -= advCost;
		advQuantity++;
		advCost = Math.round(advCost * (1.2));
		document.getElementById('advancedCost').innerHTML = advCost;
		document.getElementById('advancedQuantity').innerHTML = advQuantity;
		expPsec+= 5;
		UpdateStats();
	}
}

function UpdateStats(){
	document.getElementById('expPclick').innerHTML = expPclick;
	document.getElementById('expPsec').innerHTML = expPsec;
	document.getElementById('EXP').innerHTML = EXP;
}

window.setInterval(function(){
EXP = EXP + expPsec;
UpdateStats();
}, 1000);