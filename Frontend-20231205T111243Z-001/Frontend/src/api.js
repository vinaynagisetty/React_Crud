import axios from 'axios';
const url = "http://localhost:3000/products";

export async function getData() {
    return await axios.get(`${url}`);
}

export async function postData(data) {
    console.log(data);
    return await axios.post(url, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}

export async function putData(id, data) {
    return await axios.put(`${url}/${id}`, data, {
        headers: {
            'Content-Type': 'application/json'
        }
    });
}


export async function deleteData(id) {
    return await axios.delete(`${url}/${id}`);
}