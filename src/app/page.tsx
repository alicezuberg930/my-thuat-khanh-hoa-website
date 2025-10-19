import createMetadata from "@/lib/seo"
import { Metadata } from "next"

export const metadata: Metadata = createMetadata({ title: 'Trang chủ' })

export default function page() {
  return (
    <></>
  )
}