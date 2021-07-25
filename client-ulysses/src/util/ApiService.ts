import User from '../domain/entity/User';


const API_BASE_URL = "http://localhost:8080";

export const login = async (username:string, password: string) => {
  console.log(JSON.stringify({"username": username , "password": password}))
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
    console.log("JSON:")
    console.log(JSON.stringify({user}))

    const response = await fetch(`${API_BASE_URL}/user/updateuser`, {
      method: 'PUT',
      headers: {
        ...jsonHeader
      },
      body: JSON.stringify(user),
    });
    return response.json();
  }

