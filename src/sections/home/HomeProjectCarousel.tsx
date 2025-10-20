'use client'
import Carousel, { CarouselArrows, Settings } from "@/components/carousel";
import { AspectRatio } from "@/components/ui/AspectRatio";
import { Separator } from "@/components/ui/Separator";
import { Typography } from "@/components/ui/Typography";
import Image from "next/image";
import { useRef } from "react";

const projects = [
    {
        name: 'Công ty Fama',
        image: '/assets/project/fama.jpg'
    },
    {
        name: 'Gravity Global Vietnam',
        image: '/assets/project/gravity-global-vietnam.jpg'
    },
    {
        name: 'Lan Phẩm Đường',
        image: '/assets/project/lan-pham-duong.jpg'
    },
    {
        name: 'Star City Hotel and Condotel Beachfront Nha Trang',
        image: '/assets/project/star-city-hotel.jpg'
    },
    {
        name: 'Trà dâu Yersin',
        image: '/assets/project/tra-dau-yersin.jpg'
    },
    {
        name: 'Trường mầm non Oanh Vũ',
        image: '/assets/project/truong-mam-non-oanh-vu.jpg'
    },
]

const carouselSettings: Settings = {
    arrows: false,
    autoplay: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    className: 'my-8',
    responsive: [
        {
            breakpoint: 768,
            settings: { slidesToShow: 3 }
        },
        {
            breakpoint: 425,
            settings: { slidesToShow: 2 }
        }
    ]
}

export default function HomeProjectCarousel() {
    const carouselRef = useRef<Carousel>(null)

    const handlePrev = () => {
        carouselRef.current?.slickPrev()
    }

    const handleNext = () => {
        carouselRef.current?.slickNext()
    }

    return (
        <>
            <Typography variant='h4' className="text-center mb-4">Công trình đã thực hiện</Typography>
            <Separator className="w-28 mx-auto relative after-separator" />
            <Typography className="my-4 text-center">Danh sách công trình hoàn thiện bởi Mỹ Thuật Khánh Hòa</Typography>
            <CarouselArrows filled shape="rounded" onNext={handleNext} onPrevious={handlePrev}>
                <Carousel ref={carouselRef} {...carouselSettings}>
                    {projects.map(project => (
                        <div className="px-2" key={project.image}>
                            <AspectRatio ratio={1} className="rounded-xl overflow-hidden group">
                                <Image
                                    src={project.image}
                                    alt={project.image}
                                    fill
                                    className="object-cover hover:scale-110 duration-500 ease-in-out"
                                    sizes="100vw"
                                    priority
                                />
                                <div className="absolute w-full uppercase text-center text-white bottom-0 group-hover:bottom-2 duration-500 ease-in-out">
                                    <Typography variant='span' className="font-semibold">{project.name}</Typography>
                                    <Typography className="group-hover:opacity-100 opacity-0 duration-500 ease-in-out">Vẽ tranh tường Nha Trang</Typography>
                                </div>
                            </AspectRatio>
                        </div>
                    ))}
                </Carousel>
            </CarouselArrows>
        </>
    )
}