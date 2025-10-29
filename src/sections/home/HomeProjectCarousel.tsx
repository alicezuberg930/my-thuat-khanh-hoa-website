'use client'
import { MotionViewport, varBounce } from "@/components/animate";
import Carousel, { CarouselArrows, Settings } from "@/components/carousel";
import { AspectRatio } from "@/components/ui/AspectRatio";
import { Separator } from "@/components/ui/Separator";
import { Typography } from "@/components/ui/Typography";
import Image from "next/image";
import { useRef, useState } from "react";
import Lightbox from "@/components/lightbox";

const projects = [
    {
        src: '/assets/project/fama.jpg',
        title: 'Công ty Fama',
        description: 'Vicko Mozara \n Veliki zali, Dubravica, Croatia',
    },
    {
        src: '/assets/project/gravity-global-vietnam.jpg',
        title: 'Gravity Global Vietnam',
        description: 'Vicko Mozara \n Veliki zali, Dubravica, Croatia',
    },
    {
        src: '/assets/project/lan-pham-duong.jpg',
        title: 'Lan Phẩm Đường',
        description: 'Vicko Mozara \n Veliki zali, Dubravica, Croatia',
    },
    {
        src: '/assets/project/star-city-hotel.jpg',
        title: 'Star City Hotel and Condotel Beachfront Nha Trang',
        description: 'Vicko Mozara \n Veliki zali, Dubravica, Croatia',
    },
    {
        src: '/assets/project/tra-dau-yersin.jpg',
        title: 'Trà dâu Yersin',
        description: 'Vicko Mozara \n Veliki zali, Dubravica, Croatia',
    },
    {
        src: '/assets/project/truong-mam-non-oanh-vu.jpg',
        title: 'Trường mầm non Oanh Vũ',
        description: 'Vicko Mozara \n Veliki zali, Dubravica, Croatia',
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
    const [state] = useState({
        disabledZoom: false,
        disabledVideo: false,
        disabledTotal: false,
        disabledCaptions: true,
        disabledSlideshow: false,
        disabledThumbnails: false,
        disabledFullscreen: false,
    })
    const [selectedImage, setSelectedImage] = useState<number>(-1)

    // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setState({
    //         ...state,
    //         [event.target.name]: event.target.checked,
    //     })
    // }

    const handleOpenBasic = (imageUrl: string) => {
        const imageIndex = projects.findIndex((image) => image.src === imageUrl);
        setSelectedImage(imageIndex);
    };

    const handleCloseBasic = () => {
        setSelectedImage(-1);
    };

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
                <Typography variant='h4' className="text-center mb-4">Công trình đã thực hiện</Typography>
            </MotionViewport>
            <Separator className="w-28 mx-auto relative after-separator" />
            <MotionViewport variants={varBounce({ durationIn: 4 }).inLeft}>
                <Typography className="my-4 text-center">Danh sách công trình hoàn thiện bởi Mỹ Thuật Khánh Hòa</Typography>
            </MotionViewport>
            <CarouselArrows filled shape="rounded" onNext={handleNext} onPrevious={handlePrev}>
                <Carousel ref={carouselRef} {...carouselSettings}>
                    {projects.map(project => (
                        <div className="px-2" key={project.src}>
                            <AspectRatio ratio={1} className="rounded-xl overflow-hidden group">
                                <Image
                                    onClick={() => handleOpenBasic(project.src)}
                                    src={project.src}
                                    alt={project.src}
                                    fill
                                    className="object-cover hover:scale-110 duration-500 ease-in-out"
                                    sizes="100vw"
                                    priority
                                />
                                <div className="absolute w-full uppercase text-center text-white bottom-0 group-hover:bottom-2 duration-500 ease-in-out">
                                    <Typography variant='span' className="font-semibold">{project.title}</Typography>
                                    <Typography className="group-hover:opacity-100 opacity-0 duration-500 ease-in-out">Vẽ tranh tường Nha Trang</Typography>
                                </div>
                            </AspectRatio>
                        </div>
                    ))}
                </Carousel>
            </CarouselArrows>

            <Lightbox
                disabledZoom={state.disabledZoom}
                disabledTotal={state.disabledTotal}
                disabledVideo={state.disabledVideo}
                disabledCaptions={state.disabledCaptions}
                disabledSlideshow={state.disabledSlideshow}
                disabledThumbnails={state.disabledThumbnails}
                disabledFullscreen={state.disabledFullscreen}
                index={selectedImage}
                open={selectedImage >= 0}
                close={handleCloseBasic}
                slides={[...projects]}
            />
        </>
    )
}