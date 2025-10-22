import { Separator } from "@/components/ui/Separator";
import { Typography } from "@/components/ui/Typography";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/Table"
import { MotionViewport, varBounce } from "@/components/animate";

const services = [
    {
        name: "Vẽ Tranh tường trường Mần Non, tranh 2D, phong cách đơn giản",
        price: "Trên 50m vuông giá 200k. Dưới 50m vuông giá 250k",
    },
    {
        name: "Vẽ tranh phong cảnh, sơn thuỷ đơn giản",
        price: "Dưới 5m vuông tính theo bức (2 triệu/bức). Trên 5m vuông (400k/m)",
    },
    {
        name: "Vẽ tranh phong cảnh, tranh sơn thuỷ độ khó cao",
        price: "Dưới 5m vuông tính theo bức (1 bức từ 2,5 dến 3,5 triệu). Trên 5m vuông giá từ 450k đến 550k tuỳ vào độ khó tranh.",
    },
    {
        name: "Vẽ tranh 3D",
        price: "Giá từ 500 đến 700k trên mét vuông",
    },
    {
        name: "Vẽ tranh tả thực",
        price: "Giá từ 800k đến 1,5 triệu trên mét vuông, tuỳ vào độ khó",
    },
    {
        name: "Vẽ tranh rừng nhiệt đới",
        price: "Giá từ 400 đến 550k trên mét vuông",
    },
    {
        name: "Vẽ tranh trang trí quán cà phê, trà sữa, đi nét đơn giản",
        price: "Giá 280k đến 320k",
    },
    {
        name: "Vẽ logo",
        price: "1,2tr đến 2tr cho 1 tranh",
    }
]

export default function HomePriceTable() {
    return (
        <>
            <MotionViewport variants={varBounce({ durationIn: 3 }).inLeft}>
                <Typography variant='h4' className="text-center mb-4">Bảng giá tham khảo tại Mỹ thuật Khánh Hòa</Typography>
            </MotionViewport>
            <Separator className="w-28 mx-auto relative after-separator" />
            <MotionViewport variants={varBounce({ durationIn: 4 }).inLeft}>
                <Typography className="my-4 text-center">Công ty cam kết chất lượng, khách hàng hài lòng</Typography>
            </MotionViewport>
            <div className="rounded-xl border shadow my-8">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Dịch vụ</TableHead>
                            <TableHead>Giá tiền</TableHead>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {services.map(service => (
                            <TableRow key={service.name} className="font-medium">
                                <TableCell>{service.name}</TableCell>
                                <TableCell>{service.price}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </div>
        </>
    )
}