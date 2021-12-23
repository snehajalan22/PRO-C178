let latitude = 31.103749,longitude = 77.172713
mapboxgl.accessToken = "pk.eyJ1IjoicGVwZXhlIiwiYSI6ImNrdHBiOTNkYzBsMWQydmw0MjN3a2lvODYifQ.ujdtFAABS9vY052IWVRyug"
var map = new mapboxgl.Map({
    container:"map",
    style:"mapbox://styles/mapbox/streets-v11",
    center:[longitude,latitude],
    zoom:16
});
map.addControl(
    new mapboxgl.GeolocateControl({
        positionOptions:{
            enableHighAccuracy:true
        },
        trackUserLocation:true
    })
);
map.addControl(
    new MapboxDirections({
        accessToken:mapboxgl.accessToken
    }),
    "top-left"
)