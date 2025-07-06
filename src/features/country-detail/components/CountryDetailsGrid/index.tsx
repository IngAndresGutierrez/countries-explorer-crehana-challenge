import { Globe, MapPin, Coins, Languages } from 'lucide-react'
import { Badge } from '@/components/ui/badge'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CountryDetailsGridProps } from '../../types'
import CountryInfoCard from '../CountryInfoCard'

export const CountryDetailsGrid: React.FC<CountryDetailsGridProps> = ({
  country,
}) => {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <CountryInfoCard
        title="Country Code"
        value={country.code}
        icon={<Globe className="w-4 h-4" />}
      />

      <CountryInfoCard
        title="Capital"
        value={country.capital || 'N/A'}
        icon={<MapPin className="w-4 h-4" />}
      />

      <CountryInfoCard
        title="Continent"
        value={country.continent.name}
        icon={<Globe className="w-4 h-4" />}
      />

      <Card className="md:col-span-2 lg:col-span-1">
        <CardHeader className="flex flex-row items-center space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Currencies</CardTitle>
          <Coins className="w-4 h-4 ml-auto text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {country.currencies.length > 0 ? (
              country.currencies.map((currency, index) => (
                <Badge key={index} variant="secondary">
                  {currency}
                </Badge>
              ))
            ) : (
              <span className="text-muted-foreground">N/A</span>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="md:col-span-2">
        <CardHeader className="flex flex-row items-center space-y-0 pb-2">
          <CardTitle className="text-sm font-medium">Languages</CardTitle>
          <Languages className="w-4 h-4 ml-auto text-muted-foreground" />
        </CardHeader>
        <CardContent>
          <div className="flex flex-wrap gap-2">
            {country.languages.length > 0 ? (
              country.languages.map((language, index) => (
                <Badge key={index} variant="outline">
                  {language.name}
                </Badge>
              ))
            ) : (
              <span className="text-muted-foreground">N/A</span>
            )}
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CountryDetailsGrid
