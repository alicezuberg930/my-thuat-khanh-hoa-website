import createMetadata, { NextMetadata } from "@/lib/seo"
import slugify from "@/lib/slugify"

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<NextMetadata> {
    const { slug } = await params
    // const id = slug.split('-').at(-1)

    return createMetadata({
        openGraph: {
            images: '/assets/my-thuat-khanh-hoa-logo.png',
            url: `/product/${slug}`
        }
    })
}

export default async function page({ params }: { params: Promise<{ slug: string }> }) {
    const { slug } = await params

    return (
        <div className="text-xl text-red-600">{slug} {slugify("", { strict: true })}</div>
    )
}