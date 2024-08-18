import axios, {CanceledError} from "axios";

export default axios.create({
    baseURL: "https://"
});

export {CanceledError};