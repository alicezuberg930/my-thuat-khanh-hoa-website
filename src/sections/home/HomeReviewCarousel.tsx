'use client'
import { MotionViewport, varBounce } from "@/components/animate";
import Carousel, { CarouselArrows, Settings } from "@/components/carousel";
import { AspectRatio } from "@/components/ui/AspectRatio";
import { Card, CardContent, CardDescription } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { Typography } from "@/components/ui/Typography";
import Image from "next/image";
import { useRef } from "react";

const customerReviews = [
    {
        review: 'Mỹ thuật Khánh Hòa là một trong những đơn vị vẽ tranh Nha Trang đẹp và chi phí hợp lý',
        avatar: '/assets/customer/avatar.png',
        name: 'Anh Minh Hòa'
    },
    {
        review: 'Mỹ thuật Khánh Hòa là một trong những đơn vị vẽ tranh Nha Trang đẹp và chi phí hợp lý',
        avatar: '/assets/customer/avatar.png',
        name: 'Người Dùng 1'
    },
    {
        review: 'Mỹ thuật Khánh Hòa là một trong những đơn vị vẽ tranh Nha Trang đẹp và chi phí hợp lý',
        avatar: '/assets/customer/avatar.png',
        name: 'Người Dùng 2'
    },
    {
        review: 'Mỹ thuật Khánh Hòa là một trong những đơn vị vẽ tranh Nha Trang đẹp và chi phí hợp lý',
        avatar: '/assets/customer/avatar.png',
        name: 'Người Dùng 3'
    },
]

const carouselSettings: Settings = {
    arrows: false,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    className: 'my-8',
    responsive: [
        {
            breakpoint: 768,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 425,
            settings: { slidesToShow: 1 }
        }
    ]
}

export default function HomeReviewCarousel() {
    const carouselRef = useRef<Carousel>(null)

    const handlePrev = () => {
        carouselRef.current?.slickPrev()
    }

    const handleNext = () => {
        carouselRef.current?.slickNext()
    }

    return (
        <>
            <MotionViewport variants={varBounce({ durationIn: 3 }).inLeft}>
                <Typography variant='h4' className="text-center mb-4">Cảm nhận của Khách Hàng</Typography>
            </MotionViewport>
            <Separator className="w-28 mx-auto relative after-separator" />
            <MotionViewport variants={varBounce({ durationIn: 4 }).inLeft}>
                <Typography className="my-4 text-center">Những cảm nhận thật lòng của Quý khách hàng sau khi sử dụng dịch vụ vẽ tranh tường tại Mỹ Thuật Khánh Hòa</Typography>
            </MotionViewport>
            <CarouselArrows filled shape="rounded" onNext={handleNext} onPrevious={handlePrev}>
                <Carousel ref={carouselRef} {...carouselSettings}>
                    {customerReviews.map(review => (
                        <div className="px-2 lg:px-4" key={review.name}>
                            <Card>
                                <CardContent className="pt-6 space-y-4">
                                    <CardDescription>
                                        <AspectRatio ratio={1 / 1} key={review.avatar}>
                                            <Image
                                                src={review.avatar}
                                                alt={review.avatar}
                                                fill
                                                className="object-cover rounded-full"
                                                sizes="100vw"
                                                priority
                                            />
                                        </AspectRatio>
                                    </CardDescription>
                                    <CardDescription className="text-center">
                                        <Typography>{review.review}</Typography>
                                    </CardDescription>
                                    <CardDescription className="text-center">
                                        <Typography variant='h6'>{review.name}</Typography>
                                    </CardDescription>
                                </CardContent>
                            </Card>
                        </div>
                    ))}
                </Carousel>
            </CarouselArrows>
        </>
    )
}