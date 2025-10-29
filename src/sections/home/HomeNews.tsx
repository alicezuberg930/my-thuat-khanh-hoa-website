'use client'
import { MotionViewport, varBounce, varSlide } from "@/components/animate";
import { AspectRatio } from "@/components/ui/AspectRatio";
import { Badge } from "@/components/ui/Badge";
import { Separator } from "@/components/ui/Separator";
import { Typography } from "@/components/ui/Typography";
import slugify from "@/lib/slugify";
import Image from "next/image";
import Link from "next/link";

const news = [
    {
        image: '/assets/news/bang-hieu-quang-cao-nha-trang.jpg',
        title: 'Thiết kế thi công bảng hiệu quảng cáo Nha Trang',
        description: 'Bảng hiệu quảng cáo Nha Trang - Bí quyết để thu hút khách hàng Bạn đang có kế hoạch mở một cửa hàng ở thành phố biển Nha Trang và muốn tìm cách để quảng bá sản phẩm của mình...',
        date: '28/07/2023'
    },
    {
        image: '/assets/news/bang-hieu-quang-cao-nha-trang.jpg',
        title: 'Thiết kế thi công bảng hiệu quảng cáo Nha Trang',
        description: 'Bảng hiệu quảng cáo Nha Trang - Bí quyết để thu hút khách hàng Bạn đang có kế hoạch mở một cửa hàng ở thành phố biển Nha Trang và muốn tìm cách để quảng bá sản phẩm của mình...',
        date: '28/07/2023'
    }
]

export default function HomeNews() {
    return (
        <>
            <MotionViewport variants={varBounce({ durationIn: 3 }).inLeft}>
                <Typography variant='h4' className="text-center mb-4">Tin tức mới nhất</Typography>
            </MotionViewport>
            <Separator className="w-28 mx-auto relative after-separator" />
            <div className="my-8 flex flex-col md:flex-row gap-4">
                {news.map((n, i) => (
                    <div className="w-full h-full shadow-lg rounded-lg overflow-hidden" key={i}>
                        <MotionViewport variants={varSlide({ distance: i * 300 }).inUp}>
                            <Link href={`/news/${slugify(`${n.title}-13047198`)}`}>
                                <AspectRatio ratio={16 / 9} className="relative">
                                    <Image
                                        src={news[0].image}
                                        alt={news[0].image}
                                        fill
                                        className="object-cover"
                                        sizes="100vw"
                                        priority
                                    />
                                    <Badge variant="info" className="absolute left-1/2 -translate-x-1/2 p-2 -bottom-4">
                                        {news[0].date}
                                    </Badge>
                                </AspectRatio>
                                <div className="p-4">
                                    <Typography variant='h5'>{n.title}</Typography>
                                    <Typography variant='span'>{n.description}</Typography>
                                </div>
                            </Link>
                        </MotionViewport>
                    </div>
                ))}
            </div>
        </>
    )
}