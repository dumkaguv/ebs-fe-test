const baseURL = import.meta.env.VITE_PUBLIC_API_URL;

export const fetchInstance = (url: string) => fetch(`${baseURL}${url}`);
