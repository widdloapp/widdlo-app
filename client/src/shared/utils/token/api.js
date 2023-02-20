import {getStoredToken} from "./token.js";
import { setGlobal } from "reactn";

const headers = new Headers();
headers.append("authorization", getStoredToken() ? 'Bearer ' + getStoredToken() : undefined);
/*headers.append("Content-Type", "application/json");*/
headers.append("Transfer-Encoding", "chunked");

const defaults = {
    endpoints: {
        api: process.env.REACT_APP_API_ENDPOINT,
        streams: process.env.REACT_APP_STREAMS_API_ENDPOINT
    }
}

export const api = async (method, url, body) => {
    await setGlobal({loading: true});

    const request = await fetch(defaults.endpoints.api + url, {
        method: method,
        headers: headers,
        body: body,
    })
    await setGlobal({loading: false});
    return request.json();
}

export const stream = async (id) => {
    const request = await fetch(defaults.endpoints.streams + id)
    return request;
}

export const streamPath = (id) => {
    return `${defaults.endpoints.streams}${id}/index.m3u8`;
}
