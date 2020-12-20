function checkAll() {

  $.ajax({
    type: "GET",
    url: "https://api.jcdecaux.com/vls/v1/stations?contract=lyon&apiKey=623ef8fd63d44852ad0b0f8069e983830a639598",
    dataType: "JSON",
    error: function (msg) {
      // message en cas d'erreur :
      alert("Error !: " + msg);
    },
    success: function (data) {

      for (var i = 0; i < data.length; i++) {

        if (data[i].available_bikes != 0 && data[i].status != "CLOSED") {
          let marker = L.marker([data[i].position.lat, data[i].position.lng]).addTo(mymap);
          let nom = data[i].name;
          let adresse = data[i].address;
          let nbrVeloDispo = data[i].available_bikes;
          let nbrEmplacementLibre = data[i].available_bike_stands;
          let status = data[i].status;
          let lattitude = data[i].position.lat;
          let longitude = data[i].position.lng;
          var oIconGreen = L.divIcon({
            iconAnchor: [45.758122, 4.842911],
            className: 'leaflet-pane leaflet-marker-pane',
            html: '<img class="leaflet-pane leaflet-marker-pane">'
          });

          marker.bindPopup((["Nom:" + data[i].name + "</br>Adresse:" + data[i].address + "</br>Nombre de vélo disponibles:" + data[i].available_bikes + "</br>Nombre d'emplacement libre:" + data[i].available_bike_stands + "</br>Status:" + data[i].status] + "<br><br>"));

          $(marker).on('click', function () {
           /* $('#cont-form').show();
            $('#clr').show();
            $('#confirmer').show();*/
            let marker2 = L.marker([lattitude, longitude], { icon: oIconGreen }).addTo(mymap);
            $('#label1').text(nom);
            $('#label2').text(adresse);
            $('#label3').text(nbrVeloDispo);
            $('#label4').text(nbrEmplacementLibre);
            $('#label5').text(status);
          });
        }
      }
    }
  });
}

function sauvegarderadresseStation()
{
  localStorage.setItem('adresseStation', $('#label2').text());
  console.log($('#label2').text());
}


function convertToUserFriendly(tempsSecondes) {
  let minutes = 0;
  let secondes = 0;
  minutes = Math.trunc(tempsSecondes / 60);
  secondes = tempsSecondes % 60;
  if (tempsSecondes > 0)
    return padleft(minutes) + ':' + padleft(secondes);
  else {
    localStorage.removeItem('tempsRestant');
    clearInterval();
    return '00:00';
  }
};

function padleft(nombre) {
  if (nombre < 10) {
    return '0' + nombre;
  }
  return nombre;
};


function afficheCanvas(evt) {
  evt.preventDefault();
  if (($('#nom').val() != '') && ($('#prenom').val() != '')) {
    //sauvegarderNom();

    $('#canvasDiv').show();

  }
  else if (($('#nom').val() == '') && ($('#prenom').val() == ''))

    $('#canvasDiv').hide();
}

