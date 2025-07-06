import { Country, CountriesResponse } from '../types'

const COUNTRIES_API_URL = 'https://countries.trevorblades.com/'

const GET_COUNTRIES_QUERY = `
  query GetCountries {
    countries {
      code
      name
      capital
      continent {
        name
      }
      currencies
    }
  }
`

export class CountriesService {
  static async fetchCountries(): Promise<Country[]> {
    try {
      const response = await fetch(COUNTRIES_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ query: GET_COUNTRIES_QUERY }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: CountriesResponse = await response.json()

      if (!data.data?.countries) {
        throw new Error('Invalid response structure')
      }

      return data.data.countries
    } catch (error) {
      console.error('Error fetching countries:', error)
      throw error instanceof Error ? error : new Error('Unknown error occurred')
    }
  }
}

export const countriesService = new CountriesService()
