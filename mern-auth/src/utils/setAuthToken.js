import axios from 'axios'

//this utility will essentially add the authorized users to the request header 
const setAuthToken = (token) =>{
    if (token) {
        //apply the token to every request header
        axios.defaults.headers.common['Authorization'] = token
        console.log('--Headers ---')
        console.log(axios.defaults.headers.common)
    }else {
        delete axios.defaults.headers.common['Authorization']
    }
}
export default setAuthToken