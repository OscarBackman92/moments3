import axios from "axios";

axios.defaults.baseURL = "https://drfapi1234-45423df65b8c.herokuapp.com/"
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true