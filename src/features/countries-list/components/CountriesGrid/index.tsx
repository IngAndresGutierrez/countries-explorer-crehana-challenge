import { Button } from '@/components/ui/button'
import { Country } from '../../types'
import CountryCard from '../CountryCard'

interface CountriesGridProps {
  countries: Country[]
  totalCountries: number
  onClearFilters: () => void
}

export const CountriesGrid: React.FC<CountriesGridProps> = ({
  countries,
  totalCountries,
  onClearFilters,
}) => {
  return (
    <div className="space-y-4">
      {/* Results count */}
      <div className="text-sm text-muted-foreground">
        Showing {countries.length} of {totalCountries} countries
      </div>

      {/* Countries grid */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {countries.map((country) => (
          <CountryCard key={country.code} country={country} />
        ))}
      </div>

      {/* No results message */}
      {countries.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No countries found matching your criteria.
          </p>
          <Button
            variant="outline"
            onClick={onClearFilters}
            className="mt-4 bg-transparent"
          >
            Clear Filters
          </Button>
        </div>
      )}
    </div>
  )
}

export default CountriesGrid
