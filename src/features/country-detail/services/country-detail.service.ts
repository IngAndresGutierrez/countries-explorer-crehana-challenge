import { CountryDetail, CountryDetailResponse } from '../types'

const COUNTRIES_API_URL = 'https://countries.trevorblades.com/'

const GET_COUNTRY_DETAIL_QUERY = `
  query GetCountry($code: ID!) {
    country(code: $code) {
      code
      name
      capital
      continent {
        name
      }
      currencies
      languages {
        name
      }
    }
  }
`

export class CountryDetailService {
  static async fetchCountryDetail(code: string): Promise<CountryDetail | null> {
    try {
      const response = await fetch(COUNTRIES_API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          query: GET_COUNTRY_DETAIL_QUERY,
          variables: { code: code.toUpperCase() },
        }),
      })

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`)
      }

      const data: CountryDetailResponse = await response.json()

      return data.data?.country || null
    } catch (error) {
      console.error('Error fetching country detail:', error)
      throw error instanceof Error ? error : new Error('Unknown error occurred')
    }
  }
}

export const countryDetailService = new CountryDetailService()
