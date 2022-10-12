export const getStoredToken = () => localStorage.getItem('token');

export const storeToken = token => localStorage.setItem('token', token);

export const removeStoredToken = () => localStorage.removeItem('token');