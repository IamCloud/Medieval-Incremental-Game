var charName = "Pemda";
var EXP = 0.0;
var Currency = 0.0;

var WeaponCost = 10;
var WeaponDamage = 1;
var WeaponLevel = 0;
var WeaponName = "Unarmed";

var WeaponNames = ["Unarmed", "Gauntlet", "Spiked Gauntlet", "Dagger", 
"Light mace", "Light hammer", "Sickle", "Club", "Handaxe", "Shortspear", 
"Longspear", "Heavy mace", "Battleaxe", "Flail", "Longsword", "Trident", "Warhammer",
"Glaive", "Greatclub", 
"Greataxe", "Greatsword", "God Weapon"];

var DummyCost = 100;
var DummyBonus = 5;
var DummyQuantity = 0;
var DummyTotalBonus = 0;
var ConcentrationCost = 1000;
var ConcentrationBonus = 10;
var ConcentrationQuantity = 0;
var ConcentrationTotalBonus = 0;

var begCost = 50;
var begBonus = 1;
var begQuantity = 0;
var begTotalBonus = 0;
var advCost = 500;
var advBonus = 5;
var advQuantity = 0;
var advTotalBonus = 0;
var senCost = 5000;
var senBonus = 20;
var senQuantity = 0;
var senTotalBonus = 0;
var godCost = 100000;
var godBonus = 100;
var godQuantity = 0;
var godTotalBonus = 0;

var expPclick = 0.0;
var hitPsec = 0;
var Damage = 1.0;
var TurnDamage = 0.0;

var totalLife = 10;
var life = 10;

var refreshTime = 100;


function DummyMouseUp(){		
		document.getElementById('dummyImg').src = "images/DummyIdle.png";
}

function getCharName(){
    charName = prompt("Enter your character name: ", "Pemda");
	document.getElementById('charName').innerHTML = charName;
}

function addWeapon(){
	if (Currency >= WeaponCost){
		Currency -= WeaponCost;
		WeaponCost = Math.round(WeaponCost * (1.2));
		WeaponDamage = Math.round(WeaponDamage * (1.15) + 1);
		WeaponLevel++;
		if (WeaponNames.length > WeaponLevel) {
			WeaponName = WeaponNames[WeaponLevel];
		}
		document.getElementById('WeaponCost').innerHTML = WeaponCost;
		document.getElementById('WeaponDamage').innerHTML = WeaponDamage;
		document.getElementById('WeaponLevel').innerHTML = WeaponLevel;
		document.getElementById('WeaponName').innerHTML = WeaponName;
		Damage = WeaponDamage;		
		UpdateStats();
	}
}

function addBeginner(){
	if (Currency >= begCost){		
		Currency -= Math.round(begCost * 100) / 100;
		begQuantity++;
		begCost = Math.round(begCost * (1.15));
		begTotalBonus+=begBonus;
		document.getElementById('beginnerCost').innerHTML = begCost;
		document.getElementById('beginnerQuantity').innerHTML = begQuantity;
		document.getElementById('beginnerTotalBonus').innerHTML = begTotalBonus;
		hitPsec+=begBonus;
		UpdateStats();
	}
}

function addAdvanced(){
	if (Currency >= advCost){
		Currency -= Math.round(advCost * 100) / 100;
		advQuantity++;
		advCost = Math.round(advCost * (1.15));
		advTotalBonus+=advBonus;
		document.getElementById('advancedCost').innerHTML = advCost;
		document.getElementById('advancedQuantity').innerHTML = advQuantity;
		document.getElementById('advancedTotalBonus').innerHTML = advTotalBonus;
		hitPsec+= advBonus;
		UpdateStats();
	}
}

function addSenior(){
	if (Currency >= senCost){
		Currency -= Math.round(senCost * 100) / 100;
		senQuantity++;
		senCost = Math.round(senCost * (1.15));
		senTotalBonus+=senBonus;
		document.getElementById('seniorCost').innerHTML = senCost;
		document.getElementById('seniorQuantity').innerHTML = senQuantity;
		document.getElementById('seniorTotalBonus').innerHTML = senTotalBonus;
		hitPsec+= senBonus;
		UpdateStats();
	}
}

function addGod(){
	if (Currency >= godCost){
		Currency -= Math.round(godCost * 100) / 100;
		godQuantity++;
		godCost = Math.round(godCost * (1.15));
		godTotalBonus+=godBonus;
		document.getElementById('godCost').innerHTML = godCost;
		document.getElementById('godQuantity').innerHTML = godQuantity;
		document.getElementById('godTotalBonus').innerHTML = godTotalBonus;
		hitPsec+= godBonus;
		UpdateStats();
	}
}

function UpdateStats(){
	expPclick = Math.round((Damage / 10) * 100) / 100;
	EXP = Math.round(EXP * 100) / 100;
	document.getElementById('Damage').innerHTML = Damage;
	document.getElementById("TurnDamage").innerHTML = hitPsec;
	document.getElementById('EXP').innerHTML = EXP;
	document.getElementById("expPclick").innerHTML = expPclick;
	document.getElementById("lifeValue").innerHTML = Math.round(life * 100) / 100;
	document.getElementById("totalLife").innerHTML = totalLife;
	document.getElementById("gold").innerHTML = Currency;
}

function DummyMouseDown() {
	expPclick = Damage / 10;
	EXP += expPclick;
	loseLife(Damage);
	document.getElementById('dummyImg').src = "images/DummyHit.png";
	document.getElementById("HitDamage").innerHTML = Damage + " damage";
	UpdateStats();
}

function loseLife(dmg) {
  var elem = document.getElementById("lifeBar");
  
  if (life-dmg > 0){
	  life -= dmg;
	  elem.style.width = Math.round((life/totalLife)*100) + "%";
  } else {
	  elem.style.width = "100%";
	  life = totalLife;
	  kill();
  }
}

function kill (){
	Currency += Math.round(totalLife/5);
	totalLife = Math.round(totalLife * (1.05)); 
	life = totalLife;
	UpdateStats();
}
	
function startTimer(){
	var refreshDiv = refreshTime/10;
	loseLife(hitPsec/refreshDiv)
	document.getElementById("HitDamage").innerHTML = ".";
	UpdateStats();
setTimeout(function(){
	startTimer();
	}, refreshTime);
}
	

