
var cities = ['Mumbai','Delhi','Indore']
var showcities = loadcities(cities)
function loadcities(cities){
  var aa = ""
  for(pos in cities){
    console.log("CITY: "+cities[pos]);
    aa += "<p>"+cities[pos]+"</p>"
  }
  return aa
}

function initMap() {
  // The location of Uluru
  var indore = {lat: 22.7196, lng: 75.8577};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: indore});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: indore, map: map});
}

window.onload =
  function(){
    console.log("doc loaded ");
    document.getElementById("myDropdown").innerHTML = showcities
  }

  window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}



function showCities(id){
  console.log(JSON.stringify(id));
  document.getElementById("myDropdown").classList.toggle("show");
  console.log(showcities);

}
