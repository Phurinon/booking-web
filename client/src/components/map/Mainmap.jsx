import React from "react";
import {
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMap,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

function LocationMarker({ position, setPosition, setValue }) {
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      if (setValue) {
        setValue("lat", e.latlng.lat);
        setValue("lng", e.latlng.lng);
      }
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>You are here</Popup>
    </Marker>
  );
}

function Mainmap({ register, Location, setValue }) {
  const DEFAULT_LOCATION = [13, 100];
  const [position, setPosition] = useState(null);
  return (
    <div>
      {register && (
        <>
          <input hidden {...register("lat")} />
          <input hidden {...register("lng")} />
        </>
      )}
      <h1 className="font-bold mt-4">Where Are You?</h1>
      {
        position && (
            <p className="text-sm text-gray-500">
                Coordinates : {position.lat.toFixed(6)}, {position.lng.toFixed(6)}
            </p>
        )
      }
      <MapContainer
        center={Location || DEFAULT_LOCATION}
        zoom={7}
        scrollWheelZoom={true}
        className="h-[50vh] rounded-md z-0"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LocationMarker
          position={position}
          setPosition={setPosition}
          setValue={setValue}
        />
      </MapContainer>
    </div>
  );
}

export default Mainmap;
