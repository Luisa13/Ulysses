
const API_BASE_URL = "http://localhost:8080";

export const login = async (username:string, password: string) => {
    const response = await fetch(`${API_BASE_URL}/auth`, {
        credentials: 'include',
        method: 'POST',
        headers: {
            ...jsonHeader,
            ...buildBasicAuthHeader(username , password)
          }
    });
    return response.text();
};

export const jsonHeader = {
    'Content-Type': 'application/json;'
  };
  
  export const buildBasicAuthHeader = (username: string, password: string) => {
    return {
      'Authorization': 'Basic ' + btoa(username + ':' + password)
    };
  };