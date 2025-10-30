'use client'
import { Calendar, ChevronUp, Home, Inbox, Search, Settings } from "lucide-react";
import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarMenuSub,
    SidebarMenuSubButton,
    SidebarMenuSubItem,
} from "@/components/ui/sidebar"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import Link from "next/link";

// Menu items.
const items = [
    {
        title: "Trang chủ",
        url: "/",
        icon: Home,
    },
    {
        title: "Giới thiệu",
        url: "/about",
        icon: Inbox,
    },
    {
        title: "Vẽ tranh",
        url: "#",
        icon: Calendar,
        subMenuItems: [
            {
                title: "Tranh đắp vẽ",
                url: "/category/1",
            },
            {
                title: "Tranh khách sạn, văn phòng",
                url: "/category/2",
            },
            {
                title: "Tranh vui chơi giải trí",
                url: "/category/3",
            },
            {
                title: "Tranh phong cảnh",
                url: "/category/4",
            },
            {
                title: "Tranh tường 3D",
                url: "/category/5",
            },
            {
                title: "Tranh tường nhà hàng quán ăn",
                url: "/category/6",
            },
            {
                title: "Tranh tường quán bar",
                url: "/category/7",
            },
            {
                title: "Tranh tường quán cà phê",
                url: "/category/8",
            },
            {
                title: "Tranh tường trường mầm non",
                url: "/category/9",
            },
            {
                title: "Tranh tường phòng gym",
                url: "/category/10",
            },
        ]
    },
    {
        title: "Nội thất",
        url: "#",
        icon: Search,
    },
    {
        title: "Bảng hiệu quảng cáo",
        url: "#",
        icon: Settings,
    },
    {
        title: "Tiểu cảnh sân vườn",
        url: "#",
        icon: Settings,
    },
]

export default function AppSidebar() {
    return (
        <>
            <Sidebar variant='inset' >
                <SidebarContent>
                    <SidebarGroup>
                        {/* <SidebarGroupLabel>Application</SidebarGroupLabel> */}
                        <SidebarGroupContent>
                            <SidebarMenu>
                                {items.map((item) => (
                                    item.subMenuItems ? (
                                        <Collapsible defaultOpen className="group/collapsible" key={item.title}>
                                            <SidebarMenuItem>
                                                <CollapsibleTrigger asChild>
                                                    <SidebarMenuButton asChild>
                                                        <div className="group">
                                                            <span>{item.title}</span>
                                                            <ChevronUp className="ml-auto group-focus:rotate-180" />
                                                        </div>
                                                    </SidebarMenuButton>
                                                </CollapsibleTrigger>
                                                <CollapsibleContent>
                                                    {item.subMenuItems.map(subMenuItem => (
                                                        <SidebarMenuSub key={subMenuItem.title}>
                                                            <SidebarMenuSubItem>
                                                                <SidebarMenuSubButton asChild>
                                                                    <Link href={subMenuItem.url}>
                                                                        {subMenuItem.title}
                                                                    </Link>
                                                                </SidebarMenuSubButton>
                                                            </SidebarMenuSubItem>
                                                        </SidebarMenuSub>
                                                    ))}
                                                </CollapsibleContent>
                                            </SidebarMenuItem>
                                        </Collapsible>
                                    ) : (
                                        <SidebarMenuItem key={item.title}>
                                            <SidebarMenuButton asChild>
                                                <Link href={item.url}>
                                                    <span>{item.title}</span>
                                                </Link>
                                            </SidebarMenuButton>
                                        </SidebarMenuItem>
                                    )
                                ))}
                            </SidebarMenu>
                        </SidebarGroupContent>
                    </SidebarGroup>
                </SidebarContent>
            </Sidebar>
        </>
    )
}