/*
import axios from "axios";

const form = document.querySelector("form")!;
const addressInput = document.getElementById("address")! as HTMLInputElement;

const GEOCODING_API_KEY = "b47a7a799a8540cd95844dfe7dc2c45b";

declare var google: any;

type GeocodingResponse = {
  data: { geometry: { location: { lat: number; long: number } } }[];
  status: "OK" | "ZERO_RESULTS";
};

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  axios
    .get<GeocodingResponse>(
      `https://api.geoapify.com/v1/geocode/search?text=${encodeURIComponent(
        enteredAddress
      )}&apiKey=${GEOCODING_API_KEY}`
    )
    .then((response) => {
      if (response.data.status !== "OK") {
        throw new Error("Could not fetch location!");
      }
      const { lat, long } = response.data.features[0].geometry.coordinates;
      const googleMapsLink = `https://www.google.com/maps/search/?api=${GEOCODING_API_KEY}query=${lat},${long}`;
      console.log(googleMapsLink);
    })
    .catch((err) => {
      alert(err.message);
      console.log(err);
    });
}

form.addEventListener("submit", searchAddressHandler);
*/