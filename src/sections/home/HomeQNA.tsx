import { MotionViewport, varBounce } from "@/components/animate";
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/Accordion"
import { Separator } from "@/components/ui/Separator";
import { Typography } from "@/components/ui/Typography";

export default function HomeQNA() {
    return (
        <>
            <MotionViewport variants={varBounce({ durationIn: 3 }).inLeft}>
                <Typography variant='h4' className="text-center mb-4">Câu hỏi thường gặp</Typography>
            </MotionViewport>
            <Separator className="w-28 mx-auto relative after-separator" />
            <MotionViewport variants={varBounce({ durationIn: 4 }).inLeft}>
                <Typography className="my-4 text-center">Giải đáp những thắc mắc thường gặp khi sử dụng dịch vụ vẽ tranh tường tại Mỹ Thuật Khánh Hòa</Typography>
            </MotionViewport>
            <Accordion
                type="single"
                collapsible
                className="max-w-screen-md mx-auto my-8"
            >
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-base">Tôi có thể xem trước mẫu vẽ tranh tường được không?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <Typography variant="span">Có ạ, Mỹ thuật Khánh Hòa sẽ chốt mẫu với khách hàng, báo giá và tiến hành thi công.</Typography>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-base">Tôi muốn xem bảng giá vẽ tranh tường khu vực Nha Trang Khánh Hòa</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <Typography variant="span">Quý khách vui lòng xem bảng giá vẽ tranh tường tại https://mythuatkhanhhoa.vn/bang-gia.</Typography>
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-3">
                    <AccordionTrigger className="text-base">Vẽ tranh tường có được bảo hành không?</AccordionTrigger>
                    <AccordionContent className="flex flex-col gap-4 text-balance">
                        <Typography variant="span">Trang tường sẽ được bảo hành ạ, thời gian bảo hành tùy vào công trình</Typography>
                    </AccordionContent>
                </AccordionItem>
            </Accordion >
        </>
    )
}