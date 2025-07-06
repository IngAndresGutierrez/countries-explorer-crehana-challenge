import { notFound } from 'next/navigation'
import { CountryDetailPage } from '@/features/country-detail'
import { CountryDetailService } from '@/features/country-detail'

export default async function CountryPage({
  params,
}: {
  params: Promise<{ code: string }>
}) {
  const { code } = await params

  const countryExists = await CountryDetailService.checkCountryExists(code)

  if (!countryExists) {
    notFound()
  }

  return <CountryDetailPage countryCode={code} />
}
