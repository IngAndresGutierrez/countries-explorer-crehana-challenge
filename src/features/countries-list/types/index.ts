export interface Country {
  code: string
  name: string
  capital?: string
  continent: {
    name: string
  }
  currencies: string[]
}

export interface CountriesFilters {
  searchTerm: string
  selectedContinent: string
  selectedCurrency: string
}

export interface CountriesResponse {
  data: {
    countries: Country[]
  }
}

export interface UseCountriesReturn {
  countries: Country[]
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

export interface UseCountriesFiltersReturn {
  filters: CountriesFilters
  setSearchTerm: (term: string) => void
  setSelectedContinent: (continent: string) => void
  setSelectedCurrency: (currency: string) => void
  clearFilters: () => void
  filteredCountries: Country[]
  continents: string[]
  currencies: string[]
}

export const DEFAULT_FILTERS: CountriesFilters = {
  searchTerm: '',
  selectedContinent: 'all-continents',
  selectedCurrency: 'all-currencies',
}
