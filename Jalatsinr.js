

var UK=resultMax*6,5
var USA=resultMax*4,5
var resultMax = document.getElementById('jnr').value;

function Jalatsinumbrid() {


//see, mida kasutaja sisestab kasti, saadakse see väärtus. mida hakatakse siis mujal koodis kasutama. 
	

	if (resultMax>60) {
		showResult='<p>Sinu kinganumber on liiga suur. Oled kindel, et õige suurus?</p>';
		}
	else {
		showResult ='Sinu kinganumber on '+resultMax;
		}

	document.getElementById('usa').innerHTML= showResult;

}