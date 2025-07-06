import { useState, useMemo } from 'react'
import {
  Country,
  CountriesFilters,
  UseCountriesFiltersReturn,
  DEFAULT_FILTERS,
} from '../types'
import {
  getUniqueContinents,
  getUniqueCurrencies,
  filterCountries,
} from '../utils/filters.utils'

export const useCountriesFilters = (
  countries: Country[]
): UseCountriesFiltersReturn => {
  const [filters, setFilters] = useState<CountriesFilters>(DEFAULT_FILTERS)

  const setSearchTerm = (searchTerm: string): void => {
    setFilters((prev) => ({ ...prev, searchTerm }))
  }

  const setSelectedContinent = (selectedContinent: string): void => {
    setFilters((prev) => ({ ...prev, selectedContinent }))
  }

  const setSelectedCurrency = (selectedCurrency: string): void => {
    setFilters((prev) => ({ ...prev, selectedCurrency }))
  }

  const clearFilters = (): void => {
    setFilters(DEFAULT_FILTERS)
  }

  const continents = useMemo(() => getUniqueContinents(countries), [countries])
  const currencies = useMemo(() => getUniqueCurrencies(countries), [countries])
  const filteredCountries = useMemo(
    () => filterCountries(countries, filters),
    [countries, filters]
  )

  return {
    filters,
    setSearchTerm,
    setSelectedContinent,
    setSelectedCurrency,
    clearFilters,
    filteredCountries,
    continents,
    currencies,
  }
}
