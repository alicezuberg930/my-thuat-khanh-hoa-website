"use client"
import * as React from "react"
import Link from "next/link"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
} from "@/components/ui/navigation-menu"

const categories: { title: string; href: string }[] = [
    {
        title: "Tranh đắp vẽ",
        href: "/danh-muc/tranh-dap-ve",
    },
    {
        title: "Vẽ tranh khách sạn, văn phòng",
        href: "/danh-muc/tranh-dap-ve",
    },
    {
        title: "Vẽ tranh khu vui chơi giải trí",
        href: "/danh-muc/tranh-dap-ve",
    },
    {
        title: "Vẽ tranh phong cảnh",
        href: "/danh-muc/tranh-dap-ve",
    },
    {
        title: "Vẽ tranh tường 3D",
        href: "/danh-muc/tranh-dap-ve",
    },
    {
        title: "Vẽ tranh tường nhà hàng quán ăn",
        href: "/danh-muc/tranh-dap-ve",
    },
    {
        title: "Vẽ tranh tường quán Bar",
        href: "/danh-muc/tranh-dap-ve",
    },
    {
        title: "Vẽ tranh tường quán cà phê",
        href: "/danh-muc/tranh-dap-ve",
    },
    {
        title: "Vẽ tranh tường trường mầm non",
        href: "/danh-muc/tranh-dap-ve",
    },
    {
        title: "Vẽ tranh tường phòng gym",
        href: "/danh-muc/tranh-dap-ve",
    }
]

export default function NavigationMenuHeader() {
    return (
        <div className="bg-info">
            <div className="max-w-7xl mx-auto">
                <NavigationMenu>
                    <NavigationMenuList className="flex-wrap">
                        <NavigationMenuItem className="py-2">
                            <NavigationMenuLink asChild className={``}>
                                <Link href="/">TRANG CHỦ</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem>
                            <NavigationMenuLink asChild className={''}>
                                <Link href="/gioi-thieu">GIỚI THIỆU</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="">
                            <NavigationMenuTrigger>VẼ TRANH</NavigationMenuTrigger>
                            <NavigationMenuContent>
                                <ul className="grid gap-2 sm:w-[400px] md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                                    {categories.map((category) => (
                                        <ListItem
                                            key={category.title}
                                            title={category.title}
                                            href={category.href}
                                        />
                                    ))}
                                </ul>
                            </NavigationMenuContent>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="">
                            <NavigationMenuLink asChild className={''}>
                                <Link href="/noi-that">NỘI THẤT</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="">
                            <NavigationMenuLink asChild className={''}>
                                <Link href="/bang-hieu-quang-cao">BẢNG HIỆU QUẢNG CÁO</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                        <NavigationMenuItem className="">
                            <NavigationMenuLink asChild className={''}>
                                <Link href="/tieu-canh-san-vuon">TIỂU CẢNH SÂN VƯỜN</Link>
                            </NavigationMenuLink>
                        </NavigationMenuItem>
                    </NavigationMenuList>
                </NavigationMenu>
            </div>
        </div>
    )
}

function ListItem({
    title,
    href,
    ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
    return (
        <li {...props}>
            <NavigationMenuLink asChild className="text-black">
                <Link href={href}>
                    <div className="text-sm leading-none font-medium">{title}</div>
                </Link>
            </NavigationMenuLink>
        </li>
    )
}