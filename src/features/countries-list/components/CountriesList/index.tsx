'use client'

import { useCountries } from '../../hooks/useCountries'
import { useCountriesFilters } from '../../hooks/useCountriesFilters'
import CountriesFiltersComponent from '../CountriesFilters'
import CountriesGrid from '../CountriesGrid'
import LoadingState from '../CountriesGrid/LoadingState'
import ErrorState from '../CountriesGrid/ErrorState'

const CountriesList: React.FC = () => {
  const { countries, loading, error, refetch } = useCountries()
  const {
    filters,
    setSearchTerm,
    setSelectedContinent,
    setSelectedCurrency,
    clearFilters,
    filteredCountries,
    continents,
    currencies,
  } = useCountriesFilters(countries)

  if (loading) {
    return <LoadingState />
  }

  if (error) {
    return <ErrorState error={error} onRetry={refetch} />
  }

  return (
    <div className="space-y-6">
      <CountriesFiltersComponent
        filters={filters}
        continents={continents}
        currencies={currencies}
        onSearchChange={setSearchTerm}
        onContinentChange={setSelectedContinent}
        onCurrencyChange={setSelectedCurrency}
        onClearFilters={clearFilters}
      />

      <CountriesGrid
        countries={filteredCountries}
        totalCountries={countries.length}
        onClearFilters={clearFilters}
      />
    </div>
  )
}

export default CountriesList
