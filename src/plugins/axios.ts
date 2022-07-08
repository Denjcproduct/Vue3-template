import axios from 'axios'

export default function (app) {
    console.log('APP', app)

    axios.interceptors.response.use(
        (response) => {
            return response
        },
        (error) => {
            throw error
        }
    )
}
