import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.coingecko.com/api/v3',
  timeout: 20000,
})

export const getMarketValue = () =>
  api.get('/coins/markets?vs_currency=idr&per_page=2')
