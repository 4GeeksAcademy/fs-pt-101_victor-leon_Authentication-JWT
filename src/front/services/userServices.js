// This will set the url to the same we added to the env file
const url = import.meta.env.VITE_BACKEND_URL;

const userServices = {};

//POST method to call sign up
userServices.signup = async (formData) => {
  try {
    const resp = await fetch(url + "/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await resp.json();

    if (!resp.ok) throw new Error(data.error);

    console.log(data);
    return data;

  } catch (error) {
    return error;
  }
};

//POST method to call log in
userServices.login = async (formData) => {
  try {
    const resp = await fetch(url + "/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    const data = await resp.json();

    if (!resp.ok) throw Error(data.error);
   
    console.log(data);
    localStorage.setItem("token", data.token)

    return data;

  } catch (error) {
    console.log(error);
    return error;
  }
};

//GET user information, could be profile or any other private page
userServices.getUser = async () => {
  try {
    const resp = await fetch(url + "/api/private", {
      method: "GET",
      headers: {
        //pass token from local storage here
        'Authorization': 'Bearer ' + localStorage.getItem('token'),
        'Content-Type': 'application/json'
      }
    })

    const data = await resp.json()

    if (!resp.ok) throw Error(data.error)
    console.log(data)

    //add user data as object, we need to use JSON.stringify()
    localStorage.setItem('user', JSON.stringify(data.user))
    
    return data;

  } catch (error) {
    console.log(error);
    return error;
  }
}

export default userServices;