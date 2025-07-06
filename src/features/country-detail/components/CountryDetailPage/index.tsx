'use client'

import { useCountryDetail } from '../../hooks/useCountryDetail'
import CountryHeader from '../CountryHeader'
import CountryDetailsGrid from '../CountryDetailsGrid'
import CountryDetailLoadingState from '../CountryDetailLoadingState'
import CountryDetailErrorState from '../CountryDetailErrorState'

interface CountryDetailPageProps {
  countryCode: string
}

export const CountryDetailPage: React.FC<CountryDetailPageProps> = ({
  countryCode,
}) => {
  const { country, loading, error, refetch } = useCountryDetail(countryCode)

  if (loading) {
    return <CountryDetailLoadingState />
  }

  if (error) {
    return <CountryDetailErrorState error={error} onRetry={refetch} />
  }

  if (!country) {
    return (
      <CountryDetailErrorState
        error="Country data not available"
        onRetry={refetch}
      />
    )
  }

  return (
    <div className="min-h-screen bg-background">
      <CountryHeader country={country} />
      <main className="container mx-auto px-4 py-8">
        <CountryDetailsGrid country={country} />
      </main>
    </div>
  )
}

export default CountryDetailPage
