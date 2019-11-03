import { getCountryByName, login } from "../api";

const handleCountrySearchSubmit = (countryName, controls) => async e => {
  const { setLoading, setError, setCountries } = controls;
  e.preventDefault();
  setLoading(true);
  try {
    const data = await getCountryByName(countryName);
    setCountries(countries => {
      return [data, ...countries];
    });
    setError("");
  } catch (error) {
    if (error.response) {
      const { data, status } = error.response;
      setError(`${status} - ${data}`);
    } else {
      setError(error.message);
    }
  } finally {
    setLoading(false);
  }
};

const handleRemoveCountry = (index, setCountries) => _ => {
  setCountries(countries => {
    countries.splice(index, 1);
    return [...countries];
  });
};

const handleLogin = async ({ setLoading, setMessage }) => {
  setLoading(true);
  try {
    const message = await login();
    setMessage(message);
  } catch ({ message }) {
    setMessage(message);
  } finally {
    setLoading(false);
  }
};

export { handleCountrySearchSubmit, handleRemoveCountry, handleLogin };
