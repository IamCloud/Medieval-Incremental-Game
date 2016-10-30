var charName= "Marler";
var EXP = 0;
var WeaponCost = 10;
var WeaponBonus = 1;
var WeaponQuantity = 0;
var DummyCost = 100;
var DummyBonus = 5;
var DummyQuantity = 0;
var ConCost = 1000;
var ConBonus = 10;
var ConQuantity = 0;

var expPclick = 1;
var expPsec = 0;

function addEXP(){
		EXP = EXP + expPclick;
		document.getElementById("EXP").innerHTML = EXP;
};

function getCharName()
{
    ChannelName = prompt("Enter your character name: ", "Marler");
	document.getElementById('charName').innerHTML = charName;
};

function addWeapon(){
	if (EXP > WeaponCost){
		EXP -= WeaponCost;
		WeaponQuantity++;
		WeaponCost = Math.round(WeaponCost * (1.2));
		document.getElementById('weaponCost').innerHTML = WeaponCost;
		document.getElementById('weaponQuantity').innerHTML = WeaponQuantity;
		expPclick++;
		UpdateStats();
	}
};

function addDummy(){
	if (EXP > DummyCost){
		EXP -= DummyCost;
		DummyQuantity++;
		DummyCost = Math.round(DummyCost * (1.2));
		document.getElementById('dummyCost').innerHTML = DummyCost;
		document.getElementById('dummyQuantity').innerHTML = DummyQuantity;
		expPclick += 5;
		UpdateStats();
	}
};

function addCon(){
	if (EXP > ConCost){
		EXP -= ConCost;
		ConQuantity++;
		ConCost = Math.round(ConCost * (1.2));
		document.getElementById('conCost').innerHTML = ConCost;
		document.getElementById('conQuantity').innerHTML = ConQuantity;
		expPclick += 10;
		UpdateStats();
	}
};

function UpdateStats(){
	document.getElementById('expPclick').innerHTML = expPclick;
	document.getElementById('expPsec').innerHTML = expPsec;
	document.getElementById('EXP').innerHTML = EXP;
};