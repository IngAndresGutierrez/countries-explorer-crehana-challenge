export interface CountryDetail {
  code: string
  name: string
  capital?: string
  continent: {
    name: string
  }
  currencies: string[]
  languages: {
    name: string
  }[]
}

export interface CountryDetailResponse {
  data: {
    country: CountryDetail | null
  }
}

export interface UseCountryDetailReturn {
  country: CountryDetail | null
  loading: boolean
  error: string | null
  refetch: () => Promise<void>
}

export interface CountryPageParams {
  code: string
}

export interface CountryInfoCardProps {
  title: string
  value: string | React.ReactNode
  icon: React.ReactNode
}

export interface CountryDetailsGridProps {
  country: CountryDetail
}
