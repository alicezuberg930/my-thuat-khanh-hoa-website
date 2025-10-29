import createMetadata, { NextMetadata } from "@/lib/seo"
import { HomeBannerCarousel, HomeIntroduction, HomeNews, HomePriceTable, HomeProjectCarousel, HomeQNA, HomeReviewCarousel, HomeTeam } from "@/sections/home"

export const metadata: NextMetadata = createMetadata({ title: 'Trang chủ' })

export default function page() {
  return (
    <>
      <HomeBannerCarousel />
      <div className='max-w-screen-xl mx-auto mt-10 overflow-x-hidden'>
        <HomeIntroduction />
        <HomePriceTable />
        <HomeTeam />
        <HomeReviewCarousel />
        <HomeProjectCarousel />
        <HomeQNA />
        <HomeNews />
      </div>
    </>
  )
}