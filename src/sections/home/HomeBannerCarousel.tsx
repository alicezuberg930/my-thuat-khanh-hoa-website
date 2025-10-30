'use client'
import { useRef } from 'react'
// components
import Carousel, { CarouselArrows, CarouselDots, Settings } from "@/components/carousel";
import Image from 'next/image'
import { AspectRatio } from '@/components/ui/AspectRatio'

const bannerImages = [
    "/assets/home-banner/banner-1.jpg",
    "/assets/home-banner/banner-2.jpg",
    "/assets/home-banner/banner-3.jpg",
    "/assets/home-banner/banner-4.jpg",
]

export default function HomeBannerCarousel() {
    const carouselRef = useRef<Carousel>(null)

    const carouselSettings: Settings = {
        dots: true,
        arrows: false,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        ...CarouselDots({
            className: '-mt-6 md:-mt-12'
        })
    }

    const handlePrev = () => {
        carouselRef.current?.slickPrev()
    }

    const handleNext = () => {
        carouselRef.current?.slickNext()
    }

    return (
        <CarouselArrows filled shape="rounded" onNext={handleNext} onPrevious={handlePrev}>
            <Carousel ref={carouselRef} {...carouselSettings}>
                {bannerImages.map(url => (
                    <AspectRatio ratio={16 / 8} key={url}>
                        <Image
                            src={url}
                            alt={url}
                            fill
                            className="object-cover"
                            sizes="100vw"
                            priority
                        />
                    </AspectRatio>
                ))}
            </Carousel>
        </CarouselArrows>
    )
}