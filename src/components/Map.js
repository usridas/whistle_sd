import { MapContainer, TileLayer, useMap, Marker, Popup } from 'react-leaflet'

export const SimpleMap = ({}) =>{
    
  return (
    <div style={{ height: '100vh', maxHeight: '1000px', width: '100vw', maxWidth: '1000px' }}>
        <MapContainer center={[32.7157, -117.1611]} zoom={11} scrollWheelZoom={false} style={{height: '100%'}}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[32.7157, -117.1611]}>
                <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
            </Marker>
        </MapContainer>
    </div>
  );
}