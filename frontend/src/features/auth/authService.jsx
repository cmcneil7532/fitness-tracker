//Strickty to make HTTP request
import axios from 'axios'

const API_URL = '/fitness/users'

//Register User
const register = async(userData)=>{
    //Axios will make an HTTP request to the url with the user data
    const response = await axios.post(API_URL, userData)
    //Sucess axios will put our data in an object under data
    if(response.data){
        //Put our data into our local storage
        localStorage.setItem('user',JSON.stringify(response.data))
    }
    return response.data
}

const authService ={
    register
}
export default authService