var selectedOrigin = "Mumbai";
var selectedDest = "Indore";
var cities = ['Mumbai','Delhi','Indore']
var loader = true;
function loadcities(cities, name){
  var aa = ""

  for(pos in cities){
    console.log("CITY: "+cities[pos]);
    aa += "<p name="+name+" onclick = updateSel("+name+")>"+cities[pos]+"</p>"
  }
  return aa
}

function updateSel(name){
  if(name==='Origin')
    selectedOrigin = document.getElementsByName(name).value
  else if (name === 'Dest')
  selectedDest = document.getElementsByName(name).value

}

function initMap() {
  var indore = {lat: 22.7196, lng: 75.8577};
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: indore});
  var marker = new google.maps.Marker({position: indore, map: map});
}

window.onload =
  function(){
    console.log("doc loaded ");
    document.getElementById("myDropdownOrigin").innerHTML = loadcities(cities, 'Origin')
    document.getElementById("myDropdownDest").innerHTML = loadcities(cities, 'Dest')

  }

  window.onclick = function(event) {
    if(!event.target.matches('.dropbtn')){
      closeDDs();
    }


}

function closeDDs(){
  var dropdowns = document.getElementsByClassName("dropdown-content");
  var i;
  for (i = 0; i < dropdowns.length; i++) {
    console.log("DROPDOWNSSS : "+dropdowns[i]);
    var openDropdown = dropdowns[i];
    if (openDropdown.classList.contains('show')) {
      openDropdown.classList.remove('show');
    }

}
}



function showCities(id){

  var selected = "myDropdown"+id.city;
  console.log(selected);
  closeDDs();
  document.getElementById(selected).classList.toggle("show");

  console.log(selectedOrigin);
}

function getRoutes(){

  request = {
    origins: [selectedOrigin],
    destinations: [selectedDest],
  travelMode: 'TRANSIT'
  // drivingOptions: {
  //   departureTime: new Date(Date.now() + 1000),  // for the time N milliseconds from now.
  //   trafficModel: 'optimistic'
  // }
  }

  var service = new google.maps.DistanceMatrixService();
  service.getDistanceMatrix(request, showRoutes);
  document.getElementById('possibilities').innerHTML = "<h2>LOADING...</h2>";

}

function showRoutes(response, status) {
  document.getElementById('possibilities').innerHTML = "<h2>"+JSON.stringify(response)+"</h2>";

  console.log(JSON.stringify(response));
  // See Parsing the Results for
  // the basics of a callback function.
}
