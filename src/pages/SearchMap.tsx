import React, { useEffect } from "react";
import Header from "../components/Header";
import { Colors } from "../assets/colors";
import { getGeoloc, getGeolocLink } from "../API";
import { MapContainer, Marker, Popup, TileLayer, useMap } from "react-leaflet";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

const styles = {
  search: {
    display: "flex",
    justifyContent: "space-evenly",
    alignItems: "center",
    height: "10vh",
    width: "100%",
    backgroundColor: Colors.lightBlue,
  },
  input: {
    width: "200px",
    border: "none",
    borderRadius: "15px",
    padding: "10px",
    fontSize: "20px",
    backgroundColor: Colors.greyBlue,
    color: "white",
  },
  inputLink: {
    width: "600px",
    border: "none",
    borderRadius: "15px",
    padding: "10px",
    fontSize: "20px",
    backgroundColor: Colors.greyBlue,
    color: "white",
  },
};

function SearchMap() {
  const [positions, setPositions] = React.useState<
    { address: string; latitude: number; longitude: number }[]
  >([]);

  async function searchHandler() {
    const dpe = (document.getElementById("dpe") as HTMLInputElement).value;
    const ges = (document.getElementById("ges") as HTMLInputElement).value;
    const zipcode = (document.getElementById("zipcode") as HTMLInputElement)
      .value;
    const surface = (document.getElementById("surface") as HTMLInputElement)
      .value;

    console.log(dpe, ges, zipcode, surface);
    const data = await getGeoloc(
      dpe,
      ges,
      parseInt(zipcode),
      parseInt(surface)
    );

    setPositions([]);

    if (data) {
      data.forEach((element: any) => {
        setPositions((prev) => [
          ...prev,
          {
            address: element.address,
            latitude: element.latitude,
            longitude: element.longitude,
          },
        ]);
      });
    }
  }

  async function searchLinkHandler() {
    const link = (document.getElementById("link") as HTMLInputElement).value;

    const data = await getGeolocLink(link);

    setPositions([]);

    if (data) {
      data.forEach((element: any) => {
        setPositions((prev) => [
          ...prev,
          {
            address: element.address,
            latitude: element.latitude,
            longitude: element.longitude,
          },
        ]);
      });
    }
  }

  return (
    <div>
      <Header />
      <div style={styles.search}>
        <div>
          <div>Dpe</div>
          <input id="dpe" style={styles.input} type="text" />
        </div>
        <div>
          <div>Ges</div>
          <input id="ges" style={styles.input} type="text" />
        </div>
        <div>
          <div>Zpicode</div>
          <input id="zipcode" style={styles.input} type="number" />
        </div>
        <div>
          <div>Surface</div>
          <input id="surface" style={styles.input} type="number" />
        </div>
        <div onClick={searchHandler}>Search</div>
      </div>
      <div style={styles.search}>
        <div>
          <div>Immonot link</div>
          <input id="link" style={styles.inputLink} type="text" />
        </div>
        <div onClick={searchLinkHandler}>Search</div>
      </div>
      <MapContainer
        style={{ height: "70vh" }}
        center={[48.00611, 0.199556]}
        zoom={8}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {positions.map((position, index) => (
          <Marker
            icon={
              new Icon({
                iconUrl: markerIconPng,
                iconSize: [25, 41],
                iconAnchor: [12, 41],
              })
            }
            position={[position.latitude, position.longitude]}
            key={index}
          >
            <Popup>{position.address}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default SearchMap;
