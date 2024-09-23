import {useLoaderStore}  from "../services/lib/zustand/index"

const url = "http://localhost:4000";
const token = localStorage.getItem("token");

const apiCall = async (path, body = null, method = "GET") => {
  const { setLoading } = useLoaderStore.getState();
  console.log(token);
  const options = {
    method,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };

  if (method !== "GET" && body) {
    options.body = JSON.stringify(body);
  }

  try {
    setLoading(true);
    const response = await fetch(url + path, options);

    if (!response.ok) {
      setLoading(false);
      const error = await response.json();
      throw error;
    }
    setLoading(false);

    return await response.json();
  } catch (error) {
    setLoading(false);
    throw error;
  } finally {
    setLoading(false);
  }
};

const getData = (path) => apiCall(path);
const postData = (path, body) => apiCall(path, body, "POST");
const deleteData = (path, body) => apiCall(path, body, "DELETE");
const patchData = (path, body) => apiCall(path, body, "PATCH");
const putData = (path, body) => apiCall(path, body, "PUT");
export { getData, postData, deleteData, patchData,putData };