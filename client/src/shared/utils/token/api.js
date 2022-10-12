import {getStoredToken} from "./token.js";

const defaults = {
    base: "http://localhost:3004/api/v1/",
    headers: () => ({
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        Authorization: getStoredToken() ? 'Bearer ' + getStoredToken() : undefined,
    })
}

export const api = async (method, url) => {
    console.log(await fetch(defaults.base + url, {
        method: method,
        headers: {'Content-Type': 'application/json'},
    }))
    return await fetch(defaults.base + url, {
        method: method,
        headers: {'Content-Type': 'application/json'},
        //body: 'Bearer' + getStoredToken(),
    })
}
