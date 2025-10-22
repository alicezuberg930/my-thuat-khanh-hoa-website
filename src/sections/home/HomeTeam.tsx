"use client"
import { MotionViewport, varBounce } from "@/components/animate";
import Carousel, { CarouselArrows, Settings } from "@/components/carousel";
import { AspectRatio } from "@/components/ui/AspectRatio";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Separator } from "@/components/ui/Separator";
import { Typography } from "@/components/ui/Typography";
import Image from "next/image";
import { useRef } from "react";

const teamMembers = [
    {
        name: 'Minh Thành',
        avatar: '/assets/team/minh-thanh.jpg',
        role: 'CEO'
    },
    {
        name: 'Quang Ninh',
        avatar: '/assets/team/quang-ninh.jpg',
        role: 'CO - FO'
    },
    {
        name: 'Đình Thủy',
        avatar: '/assets/team/dinh-thuy.jpg',
        role: 'Họa sĩ'
    },
    {
        name: 'Huyền My',
        avatar: '/assets/team/huyen-my.jpg',
        role: 'Họa sĩ'
    },
    {
        name: 'Nguyễn Hòa',
        avatar: '/assets/team/nguyen-hoa.jpg',
        role: 'Họa sĩ'
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

export default function HomeTeam() {
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
                <Typography variant='h4' className="text-center mb-4">Đội ngũ Mỹ Thuật Khánh Hòa</Typography>
            </MotionViewport>
            <Separator className="w-28 mx-auto relative after-separator" />
            <CarouselArrows filled shape="rounded" onNext={handleNext} onPrevious={handlePrev}>
                <Carousel ref={carouselRef} {...carouselSettings}>
                    {teamMembers.map(member => (
                        <div className="flex flex-col space-y-2 px-2 lg:px-4" key={member.avatar}>
                            <AspectRatio ratio={1 / 1}>
                                <Image
                                    src={member.avatar}
                                    alt={member.name}
                                    fill
                                    className="object-cover rounded-full"
                                    priority
                                />
                            </AspectRatio>
                            <div className="uppercase bg-info text-white text-center rounded-lg p-2">
                                <Typography variant='h6'>{member.name}</Typography>
                                <Typography>{member.role}</Typography>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </CarouselArrows>
            <Card className="my-8">
                <CardHeader>
                    <CardTitle>
                        <Typography variant='h5'>
                            Đội ngũ họa sĩ chất lượng cao:
                        </Typography>
                    </CardTitle>
                    <CardDescription>
                        <Typography>
                            Mỹ Thuật Khánh Hòa cam kết lấy chất lượng đội ngũ họa sĩ làm uy tín hàng đầu của công ty
                        </Typography>
                    </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                    <CardDescription>
                        <Typography variant='ul'>
                            <li>Họa sĩ là người có kinh nghiệm nhiều năm.</li>
                            <li>Họa sĩ là sinh viên ưu tú, tốt nghiệp chuyên ngành mỹ thuật.</li>
                            <li>Họa sĩ là các sinh viên xuất sắc, có thành tích tốt từ các trường đại học.</li>
                        </Typography>
                    </CardDescription>
                </CardContent>
            </Card>
        </>
    )
}