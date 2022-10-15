import {getStoredToken} from "./token.js";

const defaults = {
    endpoints: {
        api: "http://localhost:3004/api/v1/",
        streams: "http://localhost:8888/"
    },
    headers: () => ({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: getStoredToken() ? 'Bearer ' + getStoredToken() : undefined,
    })
}

export const api = async (method, url, body) => {
    const request = await fetch(defaults.endpoints.api + url, {
        method: method,
        headers: defaults.headers,
        body: body,
    })
    return request.json();
}

export const stream = async (url) => {
    const request = await fetch(defaults.endpoints.streams + url)
    return request.json();
}
