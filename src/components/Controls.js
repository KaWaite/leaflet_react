import React from "react";
import {
  LayersControl,
  TileLayer,
  //   Marker,
  Popup,
  FeatureGroup,
  Circle
} from "react-leaflet";

function Controls(props) {
  return (
    <LayersControl position="bottomright">
      {/* Base Layers */}
      <LayersControl.BaseLayer name="OpenStreetMap.BlackAndWhite">
        <TileLayer url="https://tiles.wmflabs.org/bw-mapnik/{z}/{x}/{y}.png" />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer name="OpenStreetMap.Mapnik">
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      </LayersControl.BaseLayer>

      {/* Overlays: 1st red circle, 2nd a purple circle incasing center circle */}
      <LayersControl.Overlay name="Red Circle">
        <Circle center={props.center} color="red" radius={200} />
      </LayersControl.Overlay>
      <LayersControl.Overlay name="Feature group">
        <FeatureGroup color="purple">
          <Popup>
            <span>Popup in FeatureGroup</span>
          </Popup>
          <Circle center={[props.center.lat, props.center.lng]} radius={400} />
        </FeatureGroup>
      </LayersControl.Overlay>
    </LayersControl>
  );
}
export default Controls;
