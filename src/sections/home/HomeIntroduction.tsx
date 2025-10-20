import { Separator } from "@/components/ui/Separator";
import { Typography } from "@/components/ui/Typography";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/Card"
import { Button } from "@/components/ui/Button";
import Image from "next/image";

export default function HomeIntroduction() {
    return (
        <>
            <Typography variant='h4' className="text-center mb-4">Giới thiệu về Mỹ Thuật Khánh Hòa</Typography>
            <Separator className="w-28 mx-auto relative after-separator" />
            <div className="flex gap-3 flex-col md:flex-row my-8">
                <Card className="flex-1">
                    <CardHeader>
                        <CardTitle>
                            <Typography variant='h5'>
                                Xin kính chào Quý Khách Hàng!
                            </Typography>
                        </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                        <CardDescription>
                            <Typography variant='span'>
                                Chúng tôi là Công ty Mỹ Thuật Khánh Hòa - Vẽ tranh Nha Trang - đơn vị mang đến cho khách hàng những giá trị hoàn toàn khác biệt. Chúng tôi hoạt động chuyên Thiết kế mỹ thuật , vẽ tranh tường, tư vấn mỹ thuật và thi công công trình nhà ở, nhà hàng, quán cafe, karaoke…  Mỹ Thuật Khánh Hòa luôn luôn tích cực hoạt động để tìm ra những giải pháp không gian sống, làm việc, kinh doanh mới mẻ và sáng tạo nhất, chúng tôi xem mỗi công trình tạo ra phải là một tác phẩm nghệ thuật được làm việc nghiêm túc và thăng hoa.
                            </Typography>
                        </CardDescription>
                        <CardDescription>
                            <Typography variant='span'>
                                Là một trong những đơn vị trong lĩnh vực vẽ tranh Nha Trang, tiền thân của chúng tôi là M79 (hoạt động từ năm 2016), với đội ngũ họa sỹ chuyên nghiệp, dày dặn kinh nghiệm, chúng tôi tự hào đã mang hàng ngàn tác phẩm nghệ thuật đến với công chúng cùng với biết bao lợi ích mà các tác phẩm đó mang lại.
                            </Typography>
                        </CardDescription>
                        <CardDescription>
                            <Typography variant='span'>
                                Đặc biệt, Mỹ Thuật Khánh Hoà cam kết sẽ không ngừng cải tiến sản phẩm, dịch vụ để đáp ứng nhu cầu của khách hàng, đồng thời nỗ lực phát triển đội ngũ giỏi, tận tâm.
                            </Typography>
                        </CardDescription>
                        <CardDescription>
                            <Typography variant='span' className="italic font-semibold">
                                Hãy liên hệ với chúng tôi để được hỗ trợ tư vấn!
                            </Typography>
                        </CardDescription>
                        <CardDescription>
                            <Typography variant='span'>
                                Thân ái,
                            </Typography>
                        </CardDescription>
                    </CardContent>
                    <CardFooter>
                        <Button variant='info'>Liên hệ tư vấn </Button>
                    </CardFooter>
                </Card>
                <div className="relative aspect-[4/3] flex-1 border-8 border-info rounded-lg">
                    <Image
                        src="/assets/introduction-image.jpg"
                        alt='introduction-image'
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
            </div>
        </>
    )
}