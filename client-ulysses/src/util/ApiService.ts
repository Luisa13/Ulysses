
const API_BASE_URL = "http://localhost:8080";

export const login = async (username:string, password: string) => {

    const response = await fetch(`${API_BASE_URL}/auth/signin`, {
        credentials: 'include',
        method: 'POST',
        body: JSON.stringify({"username": username , "password": password}),
        headers: {
            ...jsonHeader
          }
    });
    return response.json();
};

export const jsonHeader = {
    'Content-Type': 'application/json;'
  };


export const getUser = async (token: string) => {
    const response = await fetch(`${API_BASE_URL}/auth/getCurrentUser`, {
      method: 'GET',
      headers: {
        "Authorization": token    
      }
    });
    return response.json();
  }


  export const updateUser = async (user:object) =>{

    const response = await fetch(`${API_BASE_URL}/user/updateuser`, {
      method: 'PUT',
      headers: {
        ...jsonHeader
      },
      body: JSON.stringify(user),
    });
    return response.json();
  }


  export const createTrip = async (trip: object) =>{
    console.log(JSON.stringify(trip));
    const response = await fetch(`${API_BASE_URL}/trip/`, {
      method: 'POST',
      headers: {
        ...jsonHeader
      },
      body: JSON.stringify(trip),
    });

    return response.json();
  }

