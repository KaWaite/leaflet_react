import React, { Component } from "react";
import L from "leaflet";
import Controls from "./Controls";
import {
  Map,
  TileLayer,
  Marker,
  Popup,
  Circle,
  Rectangle,
  LayerGroup,
  FeatureGroup
} from "react-leaflet";

// Icon fix. Without marks/popups etc don't show.
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
  iconUrl: require("leaflet/dist/images/marker-icon.png"),
  shadowUrl: require("leaflet/dist/images/marker-shadow.png")
});

// MainMap Class
class MainMap extends Component {
  state = {
    center: {
      lat: 51.505,
      lng: -0.09
    },
    marker: {
      lat: 51.505,
      lng: -0.09
    },
    zoom: 13,
    draggable: true
  };

  // toggleDraggable = () => {
  //   this.setState({ draggable: !this.state.draggable });
  // };

  // updatePosition = () => {
  //   const marker = this.refmarker.current;
  //   if (marker != null) {
  //     this.setState({
  //       marker: marker.leafletElement.getLatLng()
  //     });
  //   }
  // };

  render() {
    const position = [this.state.center.lat, this.state.center.lng];
    const rectangle = [
      [this.state.center.lat, this.state.center.lng],
      [this.state.center.lat + 0.01, this.state.center.lng + 0.04]
    ];
    const markerPosition = [this.state.marker.lat, this.state.marker.lng];

    return (
      <Map className="map" center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker draggable={this.state.draggable} position={markerPosition}>
          {/* <Popup minWidth={90}>
            <span onClick={this.toggleDraggable}>
              {this.state.draggable ? "DRAG MARKER" : "MARKER FIXED"}
            </span>
          </Popup> */}
        </Marker>
        <LayerGroup>
          <Circle center={position} fillColor="blue" radius={200} />
          <LayerGroup>
            <Circle
              center={[51.51, -0.08]}
              color="green"
              fillColor="green"
              radius={100}
            />
          </LayerGroup>
        </LayerGroup>
        <FeatureGroup color="grey">
          <Popup>Popup in FeatureGroup</Popup>
          <Circle center={[51.51, -0.06]} radius={200} />
          <Rectangle bounds={rectangle} />
        </FeatureGroup>
        <Controls center={this.state.center} />
      </Map>
    );
  }
}

export default MainMap;
