import { Skeleton } from '@/components/ui/skeleton'

export const CountryDetailLoadingState: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <Skeleton className="h-10 w-40 mb-4" />
          <Skeleton className="h-8 w-64 mb-2" />
          <Skeleton className="h-4 w-32" />
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
          <Skeleton className="h-32" />
          <Skeleton className="h-32 md:col-span-2 lg:col-span-1" />
          <Skeleton className="h-32 md:col-span-2" />
        </div>
      </main>
    </div>
  )
}

export default CountryDetailLoadingState
