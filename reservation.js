	class Reservation //majuscule class passer les parametre nom
	{
		constructor(){}

		sauvegarderNom(nom,prenom)
		{
			if ((document.getElementById('nom').val != '') && (document.getElementById('prenom').val !=''))
			{
				localStorage.setItem("nom_personne_form", nom);
				localStorage.setItem("prenom_personne_form", prenom);
			}
		}

	}