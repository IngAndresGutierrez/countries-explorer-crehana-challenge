import { CountryDetailPage } from '@/features/country-detail'

export default async function CountryPage({
  params,
}: {
  params: { code: string }
}) {
  return <CountryDetailPage countryCode={params.code} />
}
