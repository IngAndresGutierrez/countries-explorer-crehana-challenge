import Link from 'next/link'
import { AlertCircle, RefreshCw, ArrowLeft } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface CountryDetailErrorStateProps {
  error: string
  onRetry: () => void
}

export const CountryDetailErrorState: React.FC<
  CountryDetailErrorStateProps
> = ({ error, onRetry }) => {
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
          <h1 className="text-3xl font-bold">Error Loading Country</h1>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="space-y-6">
          <div className="border border-red-200 bg-red-50 p-4 rounded-lg">
            <div className="flex items-center gap-2 text-red-700">
              <AlertCircle className="h-4 w-4" />
              <span className="text-sm font-medium">Error</span>
            </div>
            <p className="text-sm text-red-600 mt-1">{error}</p>
          </div>

          <div className="text-center py-12">
            <p className="text-muted-foreground mb-4">
              Something went wrong while loading the country details.
            </p>
            <Button onClick={onRetry} variant="outline">
              <RefreshCw className="w-4 h-4 mr-2" />
              Try Again
            </Button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default CountryDetailErrorState
