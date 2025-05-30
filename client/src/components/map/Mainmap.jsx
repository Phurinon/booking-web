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
import { Form, Input } from 'antd'

function LocationMarker({ position, setPosition, form }) {
  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      if (form) {
        form.setFieldsValue({
          lat: e.latlng.lat,
          lng: e.latlng.lng,
        });
      }
    },
  });

  return position === null ? null : (
    <Marker position={position}>
      <Popup>คุณอยู่ที่นี่</Popup>
    </Marker>
  );
}

function Mainmap({ form, Location }) {
  const DEFAULT_LOCATION = [13, 100];
  const [position, setPosition] = useState(null);

  return (
    <div>
      <h1 className="font-bold mt-4">ปักหมุดของคุณ</h1>
      {position && (
        <p className="text-sm text-gray-500">
          Coordinates: {position.lat.toFixed(6)}, {position.lng.toFixed(6)}
        </p>
      )}

      {/* ซ่อน input เก็บค่าพิกัดใน Form */}
      <Form.Item name="lat" noStyle>
        <Input type="hidden" />
      </Form.Item>
      <Form.Item name="lng" noStyle>
        <Input type="hidden" />
      </Form.Item>

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

        <LocationMarker position={position} setPosition={setPosition} form={form} />
      </MapContainer>
    </div>
  );
}


export default Mainmap;
