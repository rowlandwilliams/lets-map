import DeckGL from "@deck.gl/react";
import { useState } from "react";
import Map from "react-map-gl";
import { ScatterplotLayer } from "@deck.gl/layers";
import cities from "./data/cities.json";

const INITIAL_VIEW_STATE = {
  longitude: -65.26,
  latitude: -19.03,
  zoom: 2,
  pitch: 0,
  bearing: 0,
};

const MapLaSend = () => {
  const [view, setView] = useState(INITIAL_VIEW_STATE);
  const layers = [
    // eslint-disable-next-line @typescript-eslint/no-unsafe-call
    new ScatterplotLayer({
      id: "scatterplot-layer",
      data: cities,
      pickable: true,
      stroked: true,
      filled: true,
      radiusScale: 6,
      radiusMinPixels: 6,
      radiusMaxPixels: 10,
      lineWidthMinPixels: 1,
      getPosition: (d: { coordinates: number[] }) => d.coordinates,
      getFillColor: [0, 51, 232],
      getLineColor: [255, 51, 222],
    }),
  ];

  return (
    <DeckGL
      controller
      layers={layers}
      viewState={view}
      // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
      onViewStateChange={(e: any) => setView(e.viewState)}
    >
      <Map
        mapboxAccessToken={
          process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN as string
        }
        mapStyle={process.env.NEXT_PUBLIC_DARK_STYLE}
      />
    </DeckGL>
  );
};

export default MapLaSend;
