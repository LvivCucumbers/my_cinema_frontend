import Axios from "./Axios";



const baseHeaders = {
    headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
    }
};

const APIService = {
    get (url, params) {
        return Axios.get<T>(url, Object.assign({}, baseHeaders, params));
    },

    post (url, data, params) {
        return Axios.post<T>(url, data, Object.assign({}, baseHeaders, params));
    },

    put (url, data, params) {
        return Axios.put<T>(url, data, Object.assign({}, baseHeaders, params));
    },

    delete (url, params) {
        return Axios.delete(url, Object.assign({}, baseHeaders, params));
    }
};

export default APIService;