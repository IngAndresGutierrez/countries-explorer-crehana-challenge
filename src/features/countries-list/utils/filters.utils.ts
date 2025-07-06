import { Country, CountriesFilters } from '../types'

export const getUniqueItems = (items: string[]): string[] => {
  return Array.from(new Set(items))
    .filter((item) => item && item.trim() !== '')
    .sort()
}

export const getUniqueContinents = (countries: Country[]): string[] => {
  const continents = countries.map((country) => country.continent.name)
  return getUniqueItems(continents)
}

export const getUniqueCurrencies = (countries: Country[]): string[] => {
  const currencies = countries.flatMap((country) => country.currencies)
  return getUniqueItems(currencies)
}

export const filterCountries = (
  countries: Country[],
  filters: CountriesFilters
): Country[] => {
  const { searchTerm, selectedContinent, selectedCurrency } = filters

  return countries.filter((country) => {
    const matchesSearch = country.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase())

    const matchesContinent =
      selectedContinent === 'all-continents' ||
      country.continent.name === selectedContinent

    const matchesCurrency =
      selectedCurrency === 'all-currencies' ||
      country.currencies.includes(selectedCurrency)

    return matchesSearch && matchesContinent && matchesCurrency
  })
}

export const hasActiveFilters = (filters: CountriesFilters): boolean => {
  return (
    filters.searchTerm !== '' ||
    filters.selectedContinent !== 'all-continents' ||
    filters.selectedCurrency !== 'all-currencies'
  )
}
