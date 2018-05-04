const mapbox = require('mapbox-gl');

const buildMaker = (type, coordinates) => {
  const markerDomEl = document.createElement("div"); // Create a new, detached DIV
  markerDomEl.style.width = "32px";
  markerDomEl.style.height = "39px";

  if (type === 'activity') {
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/WbMOfMl.png)";
  }
  else if (type === 'hotel')
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/D9574Cu.png)";
  else if (type === 'restaurant')
    markerDomEl.style.backgroundImage = "url(http://i.imgur.com/cqR6pUI.png)";

  return new mapbox.Marker(markerDomEl).setLngLat(coordinates);
}

module.exports = buildMaker;
