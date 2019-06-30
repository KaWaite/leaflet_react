import React, { Component } from "react";
import L from "leaflet";

class MainMap extends Component {
  state = {
    center: [49.257946402467375, -123.11622619628906],
    zoom: 12
  };

  componentDidMount() {
    // Tile Layer declaration
    const streets = L.tileLayer(
      "https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}",
      {
        attribution:
          'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
        maxZoom: 18,
        id: "mapbox.streets",
        accessToken:
          "pk.eyJ1IjoiZmxpcHBpbmRhaXN5IiwiYSI6ImNqeDJvYTJwZzAwamw0OHFubjlsZG10OWQifQ.2mnXT5FpNzrRmovIytx8Vg"
      }
    );
    const hotMap = L.tileLayer(
      "https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png",
      {
        maxZoom: 19,
        attribution:
          '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank">OpenStreetMap France</a>'
      }
    );

    // Markers and places layergroup
    const nanaimo = L.marker([
        49.24828238593356,
        -123.05573701858519
      ]).bindPopup("This is our Nanaimo Neighbourhood"),
      downtown = L.marker([49.28146827115352, -123.12369346618652]).bindPopup(
        "This is Downtown Vancouver"
      ),
      langaraCollege = L.marker([
        49.22527721920461,
        -123.10927391052245
      ]).bindPopup("This is Langara College");

    const places = L.layerGroup([nanaimo, downtown, langaraCollege]);

    // Map initialization
    const map = L.map("mapid", {
      center: this.state.center,
      zoom: this.state.zoom,
      layers: [streets]
    });

    // Layer and Control Setup
    var baseMaps = {
      Streets: streets,
      "Hot Map": hotMap
    };
    var overlayMaps = {
      "Important Places": places
    };
    L.control.layers(baseMaps, overlayMaps).addTo(map);
    L.control.scale().addTo(map);

    // Center Marker
    L.marker(this.state.center).addTo(map);

    // define rectangle geographical bounds
    const bounds = [[49.253, -123.111], [49.266, -123.1]];
    // create an red rectangle
    L.rectangle(bounds, { color: "red", weight: 2 }).addTo(map);
  }

  render() {
    return (
      <React.Fragment>
        <div id="mapid" />
      </React.Fragment>
    );
  }
}

export default MainMap;
