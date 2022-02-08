import axios from "axios";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL || "http://localhost:5000";

export const addNewMessage = (message) => axios.post("addNewMessage", { message });

export const getLatestMessages = () => axios.get("getLatestMessages");
