import Link from 'next/link'
import { MapPin, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

export const CountryNotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <Link href="/">
            <Button variant="ghost" className="mb-4">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Countries
            </Button>
          </Link>
          <h1 className="text-3xl font-bold">Country Not Found</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="text-center py-12">
          <MapPin className="w-16 h-16 mx-auto mb-4 text-muted-foreground" />
          <h2 className="text-xl font-semibold mb-2">Country Not Found</h2>
          <p className="text-muted-foreground mb-6">
            The country you&apos;re looking for doesn&apos;t exist or has been
            moved.
          </p>
          <Link href="/">
            <Button>
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Countries
            </Button>
          </Link>
        </div>
      </main>
    </div>
  )
}

export default CountryNotFound
