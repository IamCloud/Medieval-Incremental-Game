var charName= "Pemda";
var EXP = 0;
var WeaponCost = 10;
var WeaponBonus = 1;
var WeaponQuantity = 0;
var WeaponTotalBonus = 0;
var DummyCost = 100;
var DummyBonus = 5;
var DummyQuantity = 0;
var DummyTotalBonus = 0;
var ConcentrationCost = 1000;
var ConcentrationBonus = 10;
var ConcentrationQuantity = 0;
var ConcentrationTotalBonus = 0;

var begCost = 10;
var begBonus = 1;
var begQuantity = 0;
var begTotalBonus = 0;
var advCost = 100;
var advBonus = 5;
var advQuantity = 0;
var advTotalBonus = 0;

var expPclick = 1;
var expPsec = 0;

var Damage = 1;


function DummyMouseUp(){		
		document.getElementById('dummyImg').src = "images/DummyIdle.png";
}

function getCharName(){
    charName = prompt("Enter your character name: ", "Pemda");
	document.getElementById('charName').innerHTML = charName;
}

function addWeapon(){
	if (EXP >= WeaponCost){
		EXP -= WeaponCost;
		WeaponQuantity++;
		WeaponCost = Math.round(WeaponCost * (1.1));
		WeaponTotalBonus++;
		document.getElementById('WeaponCost').innerHTML = WeaponCost;
		document.getElementById('WeaponQuantity').innerHTML = WeaponQuantity;
		document.getElementById('WeaponTotalBonus').innerHTML = WeaponTotalBonus;
		expPclick++;		
		UpdateStats();
	}
}

function addDummy(){
	if (EXP >= DummyCost){
		EXP -= DummyCost;
		DummyQuantity++;
		DummyCost = Math.round(DummyCost * (1.1));
		DummyTotalBonus+=5;
		document.getElementById('DummyCost').innerHTML = DummyCost;
		document.getElementById('DummyQuantity').innerHTML = DummyQuantity;
		document.getElementById('DummyTotalBonus').innerHTML = DummyTotalBonus;
		expPclick += 5;
		UpdateStats();
	}
}

function addConcentration(){
	if (EXP >= ConcentrationCost){
		EXP -= ConcentrationCost;
		ConcentrationQuantity++;
		ConcentrationCost = Math.round(ConcentrationCost * (1.1));
		ConcentrationTotalBonus += 10;
		document.getElementById('ConcentrationCost').innerHTML = ConcentrationCost;
		document.getElementById('ConcentrationQuantity').innerHTML = ConcentrationQuantity;
		document.getElementById('ConcentrationTotalBonus').innerHTML = ConcentrationTotalBonus;
		expPclick += 10;
		UpdateStats();
	}
}

function addBeginner(){
	if (EXP >= begCost){		
		EXP -= begCost;
		begQuantity++;
		begCost = Math.round(begCost * (1.1));
		begTotalBonus++;
		document.getElementById('beginnerCost').innerHTML = begCost;
		document.getElementById('beginnerQuantity').innerHTML = begQuantity;
		document.getElementById('beginnerTotalBonus').innerHTML = begTotalBonus;
		expPsec++;
		UpdateStats();
	}
}

function addAdvanced(){
	if (EXP >= advCost){
		EXP -= advCost;
		advQuantity++;
		advCost = Math.round(advCost * (1.1));
		advTotalBonus+=5;
		document.getElementById('advancedCost').innerHTML = advCost;
		document.getElementById('advancedQuantity').innerHTML = advQuantity;
		document.getElementById('advancedTotalBonus').innerHTML = advTotalBonus;
		expPsec+= 5;
		UpdateStats();
	}
}

function UpdateStats(){
	document.getElementById('expPclick').innerHTML = expPclick;
	document.getElementById('expPsec').innerHTML = expPsec;
	document.getElementById('EXP').innerHTML = EXP;
}

function DummyMouseDown() {
	EXP = EXP + expPclick;
	document.getElementById("EXP").innerHTML = EXP;
	document.getElementById('dummyImg').src = "images/DummyHit.png";
	
	document.getElementById("Damage").innerHTML = expPclick + " damage";
	
}
	
window.setInterval(function(){
EXP = EXP + expPsec;
document.getElementById("Damage").innerHTML = ".";
UpdateStats();
}, 1000);
