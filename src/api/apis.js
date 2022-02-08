import axios from "axios";

axios.defaults.baseURL = "http://localhost:5000";

export const addNewMessage = (message) => axios.post("addNewMessage", { message });

export const getLatestMessages = () => axios.get("getLatestMessages");
