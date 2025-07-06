'use client'

import { useState, useEffect, useCallback } from 'react'
import { CountryDetail, UseCountryDetailReturn } from '../types'
import { CountryDetailService } from '../services/country-detail.service'

export const useCountryDetail = (
  countryCode: string
): UseCountryDetailReturn => {
  const [country, setCountry] = useState<CountryDetail | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  const fetchCountryDetail = useCallback(async (): Promise<void> => {
    try {
      setLoading(true)
      setError(null)
      const data = await CountryDetailService.fetchCountryDetail(countryCode)
      setCountry(data)
    } catch (err) {
      const errorMessage =
        err instanceof Error ? err.message : 'Failed to fetch country details'
      setError(errorMessage)
    } finally {
      setLoading(false)
    }
  }, [countryCode])

  useEffect(() => {
    if (countryCode) {
      fetchCountryDetail()
    }
  }, [countryCode, fetchCountryDetail])

  return {
    country,
    loading,
    error,
    refetch: fetchCountryDetail,
  }
}
