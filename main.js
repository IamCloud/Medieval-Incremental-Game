var charName= "Pemda";
var EXP = 0.0;
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

var begCost = 100;
var begBonus = 1;
var begQuantity = 0;
var begTotalBonus = 0;
var advCost = 1000;
var advBonus = 5;
var advQuantity = 0;
var advTotalBonus = 0;
var senCost = 1000;
var senBonus = 5;
var senQuantity = 0;
var senTotalBonus = 0;

var expPclick = 0.0;
var hitPsec = 0;
var Damage = 1.0;
var TurnDamage = 0.0;

var totalLife = 10;
var life = 10;


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
		WeaponCost = Math.round(WeaponCost * (1.15));
		WeaponTotalBonus++;
		document.getElementById('WeaponCost').innerHTML = WeaponCost;
		document.getElementById('WeaponQuantity').innerHTML = WeaponQuantity;
		document.getElementById('WeaponTotalBonus').innerHTML = WeaponTotalBonus;
		Damage++;		
		UpdateStats();
	}
}

function addDummy(){
	if (EXP >= DummyCost){
		EXP -= DummyCost;
		DummyQuantity++;
		DummyCost = Math.round(DummyCost * (1.15));
		DummyTotalBonus+=5;
		document.getElementById('DummyCost').innerHTML = DummyCost;
		document.getElementById('DummyQuantity').innerHTML = DummyQuantity;
		document.getElementById('DummyTotalBonus').innerHTML = DummyTotalBonus;
		Damage += 5;
		UpdateStats();
	}
}

function addConcentration(){
	if (EXP >= ConcentrationCost){
		EXP -= ConcentrationCost;
		ConcentrationQuantity++;
		ConcentrationCost = Math.round(ConcentrationCost * (1.15));
		ConcentrationTotalBonus += 10;
		document.getElementById('ConcentrationCost').innerHTML = ConcentrationCost;
		document.getElementById('ConcentrationQuantity').innerHTML = ConcentrationQuantity;
		document.getElementById('ConcentrationTotalBonus').innerHTML = ConcentrationTotalBonus;
		Damage += 10;
		UpdateStats();
	}
}

function addBeginner(){
	if (EXP >= begCost){		
		EXP -= Math.round(begCost * 100) / 100;
		begQuantity++;
		begCost = Math.round(begCost * (1.15));
		begTotalBonus++;
		document.getElementById('beginnerCost').innerHTML = begCost;
		document.getElementById('beginnerQuantity').innerHTML = begQuantity;
		document.getElementById('beginnerTotalBonus').innerHTML = begTotalBonus;
		hitPsec++;
		UpdateStats();
	}
}

function addAdvanced(){
	if (EXP >= advCost){
		EXP -= Math.round(advCost * 100) / 100;
		advQuantity++;
		advCost = Math.round(advCost * (1.15));
		advTotalBonus+=5;
		document.getElementById('advancedCost').innerHTML = advCost;
		document.getElementById('advancedQuantity').innerHTML = advQuantity;
		document.getElementById('advancedTotalBonus').innerHTML = advTotalBonus;
		hitPsec+= 5;
		UpdateStats();
	}
}

function addSenior(){
	if (EXP >= senCost){
		EXP -= Math.round(senCost * 100) / 100;
		senQuantity++;
		senCost = Math.round(senCost * (1.15));
		senTotalBonus+=20;
		document.getElementById('seniorCost').innerHTML = senCost;
		document.getElementById('seniorQuantity').innerHTML = senQuantity;
		document.getElementById('seniorTotalBonus').innerHTML = senTotalBonus;
		hitPsec+= 20;
		UpdateStats();
	}
}

function UpdateStats(){
	expPsec = Math.round((TurnDamage / 10) * 100) / 100;
	expPclick = Math.round((Damage / 10) * 100) / 100;
	EXP = Math.round(EXP * 100) / 100;
	document.getElementById('Damage').innerHTML = Damage;
	document.getElementById("TurnDamage").innerHTML = TurnDamage;
	document.getElementById('expPsec').innerHTML = expPsec;
	document.getElementById('EXP').innerHTML = EXP;
	document.getElementById("expPclick").innerHTML = expPclick;
	document.getElementById("lifeValue").innerHTML = life;
	document.getElementById("totalLife").innerHTML = totalLife;
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
	EXP += Math.round(totalLife/10);
	totalLife = Math.round(totalLife * (1.05)); 
	life = totalLife;
	UpdateStats();
}
	
function DPS(){
	TurnDamage = Damage * hitPsec;
	expPclick = TurnDamage / 10;
	EXP += expPclick;
	loseLife(TurnDamage);
}
	
function startTimer(){
	DPS();
	document.getElementById("HitDamage").innerHTML = ".";
	UpdateStats();
setTimeout(function(){
	startTimer();
	}, 1000);
}
	

