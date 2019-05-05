import axios from 'axios'

export const API = () => {
  return (
    axios.get(`https://aws.random.cat/meow`)
  )
}
