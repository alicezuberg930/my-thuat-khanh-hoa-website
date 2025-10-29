import { ImageResponse } from 'next/og'
import createMetadata from "@/lib/seo"

export function GET() {
    const seo = createMetadata()

    return new ImageResponse(
        (
            <div tw='flex h-full w-full flex-col p-16 text-white relative'
                style={{
                    backgroundColor: '#0c0c0c',
                    backgroundImage: `linear-gradient(to top right, #a96249, transparent)`,
                }}
            >
                <p tw='text-4xl'>{seo.applicationName}</p>
                <p tw='text-6xl'>{seo.title}</p>
                <p tw='text-2xl'>{seo.description}</p>
            </div>
        ),
        { width: 1200, height: 630 }
    )
}