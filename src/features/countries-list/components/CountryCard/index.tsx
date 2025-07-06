import Link from 'next/link'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Country } from '../../types'

interface CountryCardProps {
  country: Country
}

export const CountryCard: React.FC<CountryCardProps> = ({ country }) => {
  return (
    <Link key={country.code} href={`/country/${country.code.toLowerCase()}`}>
      <Card className="h-full hover:shadow-md transition-shadow cursor-pointer">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg">{country.name}</CardTitle>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>{country.code}</span>
            <span>•</span>
            <span>{country.continent.name}</span>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {country.capital && (
            <div>
              <span className="text-sm font-medium">Capital: </span>
              <span className="text-sm text-muted-foreground">
                {country.capital}
              </span>
            </div>
          )}
          {country.currencies.length > 0 && (
            <div>
              <span className="text-sm font-medium mb-2 block">
                Currencies:
              </span>
              <div className="flex flex-wrap gap-1">
                {country.currencies.slice(0, 3).map((currency, index) => (
                  <Badge key={index} variant="secondary" className="text-xs">
                    {currency}
                  </Badge>
                ))}
                {country.currencies.length > 3 && (
                  <Badge variant="outline" className="text-xs">
                    +{country.currencies.length - 3} more
                  </Badge>
                )}
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </Link>
  )
}

export default CountryCard
