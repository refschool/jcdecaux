	class Diapo
	{
		constructor()
		{
			this.tableauImage  = ['velib1.jpg', 'velib2.jpg', 'velib3.jpg', 'velib4.jpg', 'velib5.jpg'];
			this.tableauTexte =  ['Ce Site permet de réserver un vélo', 'Pour cela vous avez à votre disposition une carte avec l\'emplacement des differents sites', 'à droite de la carte vous pouvez en cliquant sur les marqueur avoir les info de la station', 'vous avez aussi la possibilité de reserver un velo en fournissant votre nom et votre prénom', 'enfin vous n\'aurez plus qu\'à signer'];
			this.i = 0;
			this.j = 0;
			this.surPause = true;
			this.handle = null;
		}

		start() 
		{
			if (this.surPause==false) 
			{
				clearInterval(this.handle);
				this.surPause = true;
				document.getElementById('boutondual').innerHTML = "Play";
				return;
			}
			else 
			{
				let handle = setInterval(this.suiv.bind(this), 1000);
				this.surPause = false;
				document.getElementById('boutondual').innerHTML = "Pause";
				//$('#boutondual').text('Pause');// enlever tout le jquery mettre du javascript pour le diapo !!!
				return handle;
			}
		}

		stop() 
		{
			clearInterval(this.handle)
			document.getElementById('boutondual').innerHTML = "Play";
			//$('#boutondual').text('Play');
		}

		suiv() 
		{
			this.i++;
			this.j++;

			if (this.i == 5 || this.j == 5) {
				this.i = 0;
				this.j = 0;
			}


			document.getElementById('conteneur').innerHTML = '<img src="' + this.tableauImage[this.i]+ '">' + '<p id="explicationText">"' + this.tableauTexte[this.j]+ '"</p>'+'<div id="divImgVelo1" class="rotation1"><img id="imgVelo1" src="velovelo1.png"></div>'+
		'<div id="divImgVelo2" class="rotation2"><img id="imgVelo2" src="velovelo2.png"></div>';

		};

		prec() 
		{
			this.i--;
			this.j--;
			if (this.i < 0 || this.j < 0) {
				this.i = 4;
				this.j = 4;
			}

			document.getElementById('conteneur').innerHTML = '<img src="' + this.tableauImage[this.i] + '">' + '<p id="explicationText">"' + this.tableauTexte[this.j] + '"</p>'+'<div id="divImgVelo1" class="rotation1"><img id="imgVelo1" src="velovelo1.png"></div>'+
		'<div id="divImgVelo2" class="rotation2"><img id="imgVelo2" src="velovelo2.png"></div>';

		}

	}