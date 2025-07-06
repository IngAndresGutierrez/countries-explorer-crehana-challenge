import Link from 'next/link'
import { Button } from '@/components/ui/button'

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center">
      <div className="text-center space-y-4">
        <h1 className="text-4xl font-bold">404</h1>
        <h2 className="text-2xl font-semibold">Country Not Found</h2>
        <p className="text-muted-foreground">
          The country you&apos;re looking for doesn&apos;t exist or the code is
          invalid.
        </p>
        <Link href="/">
          <Button>Back to Countries</Button>
        </Link>
      </div>
    </div>
  )
}
