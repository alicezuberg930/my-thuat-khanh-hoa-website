import createMetadata from "@/lib/seo"
import { HomeBannerCarousel, HomeIntroduction, HomeNews, HomePriceTable, HomeProjectCarousel, HomeQNA, HomeReviewCarousel, HomeTeam } from "@/sections/home"
import { Metadata } from "next"

export const metadata: Metadata = createMetadata({ title: 'Trang chủ' })

export default function page() {
  return (
    <>
      <HomeBannerCarousel />
      <div className='max-w-screen-xl mx-auto mt-10'>
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