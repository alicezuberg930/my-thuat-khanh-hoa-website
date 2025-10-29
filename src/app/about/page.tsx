import { MotionViewport, varBounce } from "@/components/animate";
import { Typography } from "@/components/ui/Typography";

export default function page() {
    return (
        <div className="max-w-screen-xl mx-auto mt-10 overflow-x-hidden">
            <MotionViewport variants={varBounce({ durationIn: 3 }).inLeft}>
                <Typography variant='h4' className="text-center">CÔNG TY MỸ THUẬT KHÁNH HÒA – TẠO GIÁ TRỊ – VẼ ƯƠC MƠ</Typography>
            </MotionViewport>
            <Typography variant={'h5'}>Lời đầu</Typography>
            <Typography variant={'span'}>
                Có những không gian bạn muốn ngắm, muốn dạo chơi, muốn ở và cả chìm đắm trong đó. Đó là những khung cảnh gợi lên những câu chuyện huyền thoại, ký ức êm đềm… mà ở đó bạn không hề cảm thấy cô đơn, ở đó bạn tìm thấy không gian đối thoại với chính mình – một không gian của “Tâm nhân tâm cảnh” và nơi ấy chính là chốn thiên đường hiện hữu – nơi mình và thiên nhiên có thể cùng trò chuyện, giao hòa. Và tôi muốn gởi gắm tất cả những điều đó vào trong tác phẩm của mình, để tạo nên những bức tranh đẹp, có hồn.
            </Typography>
            <Typography variant={'h5'}>Dịch vụ vẽ tranh tường</Typography>
            <Typography variant={'span'}>Chuyên tư vấn khách hàng dựa theo phong cách và không gian:</Typography>
            <Typography variant={'ul'} className="text-sm lg:text-base">
                <li>Thiết kế các market theo ý tưởng của khách hàng</li>
                <li>Thi công chuyên nghiệp, có nhiều nhóm vẽ chuyên về các thể loại khác nhau: Nhóm vẽ tranh tường teen, nhóm vẽ tranh 3D, nhóm vẽ tranh cổ điển...</li>
                <li>vẽ tranh tường tại Nha Trang Khánh Hòa, tranh tường phòng ngủ, tranh tường phòng khách, tranh tường phòng ngủ bé, tranh tường quán cafe, tranh tường 3D, tranh tường trường mầm non</li>
            </Typography>
            <Typography variant={'span'}>
                + Là những tác phẩm được thể hiện sự phóng khoáng, tinh tế và chuyển động trong không gian. Một lần nữa nó trở lại chiếm lĩnh trí tưởng tượng của một thế giới đang hướng tới sự đơn điệu và buồn tẻ:
            </Typography>
            <Typography variant={'span'}>
                + Nhằm đáp ứng nhu cầu ngày càng cao về các sản phẩm mỹ thuật trang trí và quà tặng đẹp, chúng tôi luôn nỗ lực cập nhật thường xuyên những sản phẩm mới nhất như: tranh tường, tranh sơn dâu, tranh đá quý, tranh sơn mài
            </Typography>
            <Typography variant={'span'}>
                + Mỹ Thuật Khánh Hòa chuyên vẽ theo yêu cầu các loại tranh trên mọi chất liệu như: tường, gỗ, thạch cao, lụa, đá quý, kính…với nhiều màu sắc phong phú đa dạng và kích cỡ khác nhau.
            </Typography>
            <Typography variant={'span'}>+ Chúng tôi sử dụng sơn Acrylic không mùi và không độc hại với con người.</Typography>
            <Typography variant={'span'}>+ Với Đội ngũ trẻ nhiệt tình giao hàng tại tất cả các tỉnh thành toàn quốc và sự nhiệt tình chu đáo với khách hàng.</Typography>
            <Typography variant={'span'}>+ Với phương châm “chất lượng hàng đầu, hài lòng khách hàng”. Mỹ Thuật Khánh Hòa luôn phấn đấu, nỗ lực ngày một tốt hơn để đem đến cho khách hàng những bức tranh vẽ đẹp nhất phù hợp với yêu cầu của quý khách.</Typography>
            <Typography variant={'span'}>+ Vẽ tranh tường bạn hãy lựa chọn một thể loại mà bạn chọn là hợp nhất với căn phòng của mình. Nếu còn bối dối hãy hỏi chúng tôi.</Typography>
            <Typography variant={'h5'}>Bảo hành</Typography>
            <Typography variant={'span'}>Với tất cả các sản phẩm của chúng tôi luôn</Typography>
            <Typography variant={'ul'} className="text-sm lg:text-base">
                <li>1 năm đối với các công trình vẽ tranh tường ngoài trời</li>
                <li>3 năm với các công trình vẽ tranh tường trong nhà.</li>
            </Typography>
            <Typography variant={'h5'}>Khuyến mãi</Typography>
            <Typography variant={'ul'} className="text-sm lg:text-base">
                <li>Giảm 10 % cho khách hàng vẽ tranh tường tại Khánh Hòa</li>
                <li>Vẽ tranh với số lượng lơn chúng tối sẽ giảm % theo khối lượng công trình.</li>
            </Typography>
        </div>
    )
}