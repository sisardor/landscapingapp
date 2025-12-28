import  axios from "axios";

const axiosClient = axios.create();

const apiVersion = '/api/v1'
axiosClient.defaults.baseURL = `http://localhost:8080${apiVersion}`


export async function getRequest(URL) {
    const response = await axiosClient.get(URL)
        .then(response => response)
        .catch(err => console.log(err));

    return response.data;
}