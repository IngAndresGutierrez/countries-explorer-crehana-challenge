import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { CountryInfoCardProps } from '../../types'

export const CountryInfoCard: React.FC<CountryInfoCardProps> = ({
  title,
  value,
  icon,
}) => {
  return (
    <Card>
      <CardHeader className="flex flex-row items-center space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">{title}</CardTitle>
        <div className="ml-auto text-muted-foreground">{icon}</div>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">{value}</div>
      </CardContent>
    </Card>
  )
}

export default CountryInfoCard
