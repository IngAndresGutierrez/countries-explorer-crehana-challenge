import { Search, Filter } from 'lucide-react'
import {
  Select,
  SelectItem,
  SelectValue,
  SelectTrigger,
  SelectContent,
} from '@/components/ui/select'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { CountriesFilters } from '../../types'
import { hasActiveFilters } from '../../utils/filters.utils'

interface CountriesFiltersProps {
  filters: CountriesFilters
  continents: string[]
  currencies: string[]
  onSearchChange: (search: string) => void
  onContinentChange: (continent: string) => void
  onCurrencyChange: (currency: string) => void
  onClearFilters: () => void
}

export const CountriesFiltersComponent: React.FC<CountriesFiltersProps> = ({
  filters,
  continents,
  currencies,
  onSearchChange,
  onContinentChange,
  onCurrencyChange,
  onClearFilters,
}) => {
  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
        <Input
          placeholder="Search countries..."
          value={filters.searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-10"
        />
      </div>

      <Select
        value={filters.selectedContinent}
        onValueChange={onContinentChange}
      >
        <SelectTrigger className="w-full md:w-48">
          <SelectValue placeholder="Filter by continent" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-continents">All Continents</SelectItem>
          {continents.map((continent) => (
            <SelectItem key={continent} value={continent}>
              {continent}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <Select value={filters.selectedCurrency} onValueChange={onCurrencyChange}>
        <SelectTrigger className="w-full md:w-48">
          <SelectValue placeholder="Filter by currency" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all-currencies">All Currencies</SelectItem>
          {currencies.map((currency) => (
            <SelectItem key={currency} value={currency}>
              {currency}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {hasActiveFilters(filters) && (
        <Button variant="outline" onClick={onClearFilters}>
          <Filter className="w-4 h-4 mr-2" />
          Clear Filters
        </Button>
      )}
    </div>
  )
}

export default CountriesFiltersComponent
