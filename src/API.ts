import Axios from "axios";

const baseUrl = "http://localhost:3030";

const axios = Axios.create({
  baseURL: baseUrl,
  headers: {
    "Content-Type": "application/json",
  },
});

axios.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

async function register(name: string, email: string, password: string) {
  try {
    const response = await axios.post("/register", {
      name,
      email,
      password,
    });

    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);

    return response.data;
  } catch (error: any) {
    alert(error.response.data);
  }
}

async function login(email: string, password: string) {
  try {
    const response = await axios.post("/login", {
      email,
      password,
    });

    localStorage.setItem("accessToken", response.data.accessToken);
    localStorage.setItem("refreshToken", response.data.refreshToken);

    return response.data;
  } catch (error: any) {
    alert(error.response.data);
  }
}

async function getGeoloc(
  dpe: string,
  ges: string,
  zipcode: number,
  surface: number
) {
  try {
    const response = await axios.get(
      `/geoloc/${dpe}/${ges}/${zipcode}/${surface}`
    );
    return response.data;
  } catch (error: any) {
    alert(error.response.data);
  }
}

async function getGeolocLink(link: string) {
  try {
    const response = await axios.post(`/geoloc`, { link: link });
    return response.data;
  } catch (error: any) {
    alert(error.response.data);
  }
}

async function getUserProfile() {
  try {
    const response = await axios.get("/user");
    return response.data;
  } catch (error: any) {
    alert(error.response.data);
  }
}

async function getUserSavedSearches(page: number) {
  try {
    const response = await axios.get(`/savedSearches/${page}`);
    return response.data;
  } catch (error: any) {
    alert(error.response.data);
  }

}

export { register, login, getGeoloc, getGeolocLink, getUserProfile, getUserSavedSearches };
