import Link from 'next/link'
import { ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CountryDetail } from '../../types'

interface CountryHeaderProps {
  country: CountryDetail
}

export const CountryHeader: React.FC<CountryHeaderProps> = ({ country }) => {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-6">
        <Link href="/">
          <Button variant="ghost" className="mb-4">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Countries
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">{country.name}</h1>
        <p className="text-muted-foreground mt-2">
          Country Code: {country.code}
        </p>
      </div>
    </header>
  )
}

export default CountryHeader
