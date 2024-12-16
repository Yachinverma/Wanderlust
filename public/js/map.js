//    let mapToken = mapToken;
// console.log(mapToken);
mapboxgl.accessToken = mapToken;

const map = new mapboxgl.Map({
  container: "map",
  style: "mapbox://styles/mapbox/streets-v12",
  // **starting position [Longitude, Latitude].*
  //  Nagpur Coordinates: 21.1498°N 79.0806°E
  center: listing.geometry.coordinates,
  zoom: 10, // starting zoom
});


const marker = new mapboxgl.Marker({ color: "red" })
  .setLngLat(listing.geometry.coordinates) //Listing.geometry.coordinates
  .setPopup(
    new mapboxgl.Popup({ offset: 25 })
      .setHTML(
       ` <h4>${listing.title}</h4><p>Exact location will be provided after booking</p>`
      )
      .setMaxWidth("300px")
  )
  .addTo(map); 
