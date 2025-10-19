import type { Metadata } from 'next'
import { getBaseUrl } from "@/lib/utils"

export interface NextMetadata extends Metadata {
    title?: string
}

export default function createMetadata(override: NextMetadata = {}): NextMetadata {
    const siteName = 'Mỹ thuật khánh hòa'
    const baseUrl = getBaseUrl()

    const title = override.title ? `${override.title} | ${siteName}` : siteName
    const description = 'Dịch vụ thiết kế mỹ thuật, vẽ tranh tường, tư vấn mỹ thuật và thi công công trình nhà ở, nhà hàng, quán cafe, karaoke,...'
    const url = override.openGraph?.url
        ? `${baseUrl}${override.openGraph.url}`
        : baseUrl

    const images = [
        ...(override.openGraph?.images
            ? Array.isArray(override.openGraph.images)
                ? override.openGraph.images
                : [override.openGraph.images]
            : []),
        { url: '/api/og', alt: 'Open Graph Image' },
    ]

    return {
        ...override,
        metadataBase: new URL(baseUrl),
        applicationName: siteName,
        title,
        description,
        openGraph: {
            ...override.openGraph,
            title,
            description,
            siteName,
            url,
            images,
        },
        twitter: {
            ...override.twitter,
            card: 'summary_large_image',
        },
        icons: { icon: '/favicon.ico' },
        alternates: { ...override.alternates, canonical: url },
    }
}