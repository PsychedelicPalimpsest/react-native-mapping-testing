import { Platform } from "react-native";
import React from "react";

const OSM_RASTER_STYLE = {
  version: 8,
  sources: {
    osm: {
      type: "raster",
      tiles: [
        "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      ],
      tileSize: 256,
      attribution: "Tiles &copy; Esri — Source: Esri, Maxar, Earthstar Geographics, and others",
      maxzoom: 19,
    },
  },
  layers: [
    {
      id: "osm",
      type: "raster",
      source: "osm",
    },
  ],
};

let MapComponent: any;

if (Platform.OS === "web") {
  const MapLibreGL = require("maplibre-gl");

  MapComponent = () => (
    <div
      id="map"
      style={{ flex: 1, width: "100%", height: "100%" }}
      ref={(el) => {
        if (!el || el.children.length > 0) return;
        const map = new MapLibreGL.Map({
          container: el,
          style: OSM_RASTER_STYLE, // Use the same style as Android
          center: [-80.1276, 51.5072],
          zoom: 3,
        });
      }}
    />
  );
} else {
  const MapLibreGL = require("@maplibre/maplibre-react-native");

  MapComponent = () => (
    <MapLibreGL.MapView style={{ flex: 1 }}>
      <MapLibreGL.Camera zoomLevel={3} centerCoordinate={[-80.1276, 51.5072]} />
      <MapLibreGL.RasterSource
        id="osm-raster-source"
        tileUrlTemplates={OSM_RASTER_STYLE.sources.osm.tiles}
        {...OSM_RASTER_STYLE.sources.osm}
      >
        <MapLibreGL.RasterLayer id="osm-raster-layer" style={{}} />
      </MapLibreGL.RasterSource>
    </MapLibreGL.MapView>
  );
}

export default MapComponent;
