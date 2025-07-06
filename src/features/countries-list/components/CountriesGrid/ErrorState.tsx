import { AlertCircle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface ErrorStateProps {
  error: string
  onRetry: () => void
}

export const ErrorState: React.FC<ErrorStateProps> = ({ error, onRetry }) => {
  return (
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
          Something went wrong while loading countries.
        </p>
        <Button onClick={onRetry} variant="outline">
          <RefreshCw className="w-4 h-4 mr-2" />
          Try Again
        </Button>
      </div>
    </div>
  )
}

export default ErrorState
