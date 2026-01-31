export const API_URL = import.meta.env.VITE_API_URL;
export const WS_URL = import.meta.env.VITE_WS_URL;

export const AUTH_ROUTES = {
  GOOGLE: `${API_URL}/v1/auth/google`,
  GITHUB: `${API_URL}/v1/auth/github`,
  FACEBOOK: `${API_URL}/v1/auth/facebook`,
};
