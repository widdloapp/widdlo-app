import {getStoredToken} from "./token.js";

const headers = new Headers();
headers.append("authorization", getStoredToken() ? 'Bearer ' + getStoredToken() : undefined);
/*headers.append("content-type", "multipart/form-data");*/

const defaults = {
    endpoints: {
        api: "http://localhost:443/api/v1/",
        streams: "http://localhost:8888/"
    }
}

export const api = async (method, url, body) => {

    const request = await fetch(defaults.endpoints.api + url, {
        method: method,
        headers: headers,
        body: body,
    })
    return request.json();
}

export const stream = async (url) => {
    const request = await fetch(defaults.endpoints.streams + url)
    return request.json();
}
