// +++++++++++++++++++ "Navigator.GeoLocation" Api +++++++++++++++++++
// create function "renderMap(myCoordinatePara) , "myCoordinatePara" is array parameter that contains 'x-axis' , 'y-axis' "
// "shubra al Khayma" coordinates : longitude:31.2631261 , latitude:30.1148849
function renderMap(myCoordinatePara)
{
    var map = new maplibregl.Map({
        container: 'map',
        style:
        'https://api.maptiler.com/maps/streets/style.json?key=get_your_own_OpIi9ZULNHzrESv6T2vL',
        center: myCoordinatePara ,
        zoom: 10
        });
        // add location mark
        var marker = new maplibregl.Marker()
        .setLngLat(myCoordinatePara)
        .addTo(map);
    // Add "zoom" and "rotation" controls to the map
    map.addControl(new maplibregl.NavigationControl(),"bottom-right");   
}
/* ++++++++++ Geolocation_API : from "https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API/Using_the_Geolocation_API" +++++++++++ */
// there two cases in "Navigator Geolocation Api"
navigator.geolocation.getCurrentPosition(successFunc,errorFunc);
// when user click "Allow" To navigator geolocation Api
function successFunc(position)
{
    /* the coordinates of your location */
    console.log("position.coords.longitude = " + position.coords.longitude);   
    console.log("position.coords.latitude = " + position.coords.latitude);
    // call "renderMap( x-axis , y-axis )" function
    renderMap( [ position.coords.longitude , position.coords.latitude ] );
}
// when user click "Block" To navigator geolocation Api
function errorFunc(position)
{
    console.log(position.message);
}
/* +++++++++++++++++++++ maplibre plugins : from https://maplibre.org/maplibre-gl-js-docs/example/mapbox-gl-rtl-text/ +++++++++++++++++++++++  */
// Plugin 1 : support "arabic language" in map
maplibregl.setRTLTextPlugin(
    'https://unpkg.com/@mapbox/mapbox-gl-rtl-text@0.2.3/mapbox-gl-rtl-text.min.js',
    null,
    true // Lazy load the plugin
);

