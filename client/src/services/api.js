import axios from 'axios'
export const addUser = async (data) => {
try {
    return  await axios.post('/register' , data)
} catch (error) {
    console.log("Error while posting data from frontend")
}
}
export const getUser = async(data) => {
    try {
        return await axios.post('/login' , data)

    } catch (error) {
        console.log(error.message)
    }
}