import { CountryDetailPage } from '@/features/country-detail'

export default async function CountryPage({
  params,
}: {
  params: Promise<{ code: string }>
}) {
  const { code } = await params
  return <CountryDetailPage countryCode={code} />
}
