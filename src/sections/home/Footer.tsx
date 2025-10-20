import { Separator } from "@/components/ui/Separator";
import { Typography } from "@/components/ui/Typography";
import { LucideFacebook, Mail, Phone } from "lucide-react";
import Link from "next/link";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"

export default function Footer() {
    return (
        <div className="bg-gray-500">
            <div className="max-w-screen-xl mx-auto py-6 text-white space-y-8">
                <div className="flex flex-col md:flex-row justify-between gap-2">
                    <div className="space-y-3">
                        <Typography variant='h6'>TIÊU CHÍ THI CÔNG CỦA CHÚNG TÔI</Typography>
                        <Separator />
                        <Typography>Thân thiện và tích cực trong công việc!</Typography>
                        <Typography>Chất lượng của sản phẩm luôn được chú ý.</Typography>
                        <Typography>Thi công nhanh chóng và hiệu quả!</Typography>
                        <Typography>Đội ngũ họa sĩ chuyên nghiệp!</Typography>
                        <Typography>Giá thành rẻ nhất!</Typography>
                    </div>
                    <div className="space-y-3">
                        <Typography variant='h6'>VỀ MỸ THUẬT KHÁNH HÒA</Typography>
                        <Separator />
                        <Typography>Thân thiện và tích cực trong công việc!</Typography>
                        <Typography>Chất lượng của sản phẩm luôn được chú ý.</Typography>
                        <Typography>Thi công nhanh chóng và hiệu quả!</Typography>
                        <Typography>Đội ngũ họa sĩ chuyên nghiệp!</Typography>
                        <Typography>Giá thành rẻ nhất!</Typography>
                    </div>
                    <div className="space-y-3">
                        <Typography variant='h6'>DỊCH VỤ NỔI BẬT</Typography>
                        <Separator />
                        <Typography>Thân thiện và tích cực trong công việc!</Typography>
                        <Typography>Chất lượng của sản phẩm luôn được chú ý.</Typography>
                        <Typography>Thi công nhanh chóng và hiệu quả!</Typography>
                        <Typography>Đội ngũ họa sĩ chuyên nghiệp!</Typography>
                        <Typography>Giá thành rẻ nhất!</Typography>
                    </div>
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="flex-none space-y-3">
                        <Typography variant='h6'>LIÊN HỆ VỚI CHÚNG TÔI</Typography>
                        <Separator />
                        <Typography>CÔNG TY TNHH MỸ THUẬT KHÁNH HÒA</Typography>
                        <Typography>Địa chỉ: 86B Quang Trung - Nha Trang - Khánh Hòa.</Typography>
                        <Typography>Phone/Zalo: 0922.501.222</Typography>
                        <Typography>Email: mythuatkhanhhoa@gmail.com</Typography>
                        <Typography>GPKD: 4201978572</Typography>
                        <Typography>Người đại diện: Phạm Quang Ninh</Typography>
                        <div className="flex gap-2">
                            <TooltipProvider>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link href='https://www.facebook.com/mythuatnhatrang'>
                                            <LucideFacebook size={48} className="rounded-xl bg-info p-2" />
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Follow on Facebook</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link href='mailto:mythuatkhanhhoa@gmail.com'>
                                            <Mail size={48} className="rounded-xl bg-gray-900 p-2" />
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Send us an email</p>
                                    </TooltipContent>
                                </Tooltip>
                                <Tooltip>
                                    <TooltipTrigger asChild>
                                        <Link href='tel:0793545123'>
                                            <Phone size={48} className="rounded-xl bg-green-500 p-2" />
                                        </Link>
                                    </TooltipTrigger>
                                    <TooltipContent>
                                        <p>Call us</p>
                                    </TooltipContent>
                                </Tooltip>
                            </TooltipProvider>
                        </div>
                    </div>
                    <div className="flex-1 aspect-video">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d62384.39207676209!2d109.1914!3d12.24662!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31706719c8addce7%3A0xa95d3fbf53321ae9!2zQ8O0bmcgdHkgTeG7uSBUaHXhuq10IEtow6FuaCBIb8OgIC0gVuG6vSBUcmFuaCBUxrDhu51uZw!5e0!3m2!1svi!2sus!4v1760982516866!5m2!1svi!2sus"
                            className="w-full h-full" allowFullScreen loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                        />
                    </div>
                </div>
            </div>
            <div className="py-2 text-white bg-gray-400 text-center">
                <Typography variant='span'>Bản quyền 2025 © Thiết kế bởi Mỹ Thuật Khánh Hòa</Typography>
            </div>
        </div>
    )
}