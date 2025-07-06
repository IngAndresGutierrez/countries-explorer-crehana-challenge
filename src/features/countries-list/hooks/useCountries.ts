import { useState, useEffect } from 'react'
import { Country, UseCountriesReturn } from '../types'
import { CountriesService } from '../services/countries.service'

export const useCountries = (): UseCountriesReturn => {
  const [countries, setCountries] = useState<Country[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchCountries = async (): Promise<void> => {
    try {
      setLoading(true)
      setError(null)
      const data = await CountriesService.fetchCountries()
      setCountries(data)
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to fetch countries'
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    fetchCountries()
  }, [])

  return {
    countries,
    loading,
    error,
    refetch: fetchCountries,
  }
}
