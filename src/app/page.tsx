import CountriesList from '@/features/countries-list/components/CountriesList'

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b">
        <div className="container mx-auto px-4 py-6">
          <h1 className="text-3xl font-bold text-center">Countries Explorer</h1>
          <p className="text-muted-foreground text-center mt-2">
            Explore countries around the world
          </p>
        </div>
      </header>
      <main className="container mx-auto px-4 py-8">
        <CountriesList />
      </main>
    </div>
  )
}
