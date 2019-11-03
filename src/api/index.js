import axios from "axios";
import config from "../config";

const getCountryByName = async countryName => {
  try {
    const options = { withCredentials: true, params: { countryName } };
    const { data } = await axios.get(`${config.endpoint}/countries`, options);
    return data;
  } catch (error) {
    throw error;
  }
};

const login = async () => {
  try {
    const options = { withCredentials: true };
    const { data } = await axios.get(`${config.endpoint}/login`, options);
    return data;
  } catch (error) {
    throw error;
  }
};

export { getCountryByName, login };
