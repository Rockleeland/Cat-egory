import axios from 'axios'

export const API = () => {
  return (
    axios.get(`http://aws.random.cat/meow`)
  )
}
