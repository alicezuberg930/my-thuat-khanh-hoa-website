import Image from "next/image";
import { House, Phone, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/ButtonGroup";
import { Label } from "@/components/ui/Label";
import NavigationMenuHeader from "./NavigationMenuHeader";
import { Typography } from "@/components/ui/Typography";
import { SidebarTrigger } from "@/components/ui/sidebar";

export default function Header() {
    return (
        <>
            <div className="w-full max-w-screen-xl mx-auto">
                <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-2">
                        <div className="block md:hidden">
                            <SidebarTrigger />
                        </div>
                        <Image
                            src="/assets/my-thuat-khanh-hoa-logo.png"
                            alt="Logo"
                            width={72} height={72}
                            className="rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
                        />
                        <ButtonGroup>
                            <Input placeholder="Tìm kiếm..." className="border-info focus-visible:ring-info" />
                            <Button variant="info" aria-label="Search">
                                <SearchIcon />
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div className="hidden flex-col gap-1 md:flex">
                        <ButtonGroup>
                            <Button variant='outline' aria-label="Search">
                                <Phone />
                            </Button>
                            <ButtonGroupText>
                                <Label htmlFor="name" className="font-semibold">0922 501 222</Label>
                            </ButtonGroupText>
                        </ButtonGroup>
                        <ButtonGroup>
                            <Button variant='outline' aria-label="Search">
                                <Phone />
                            </Button>
                            <ButtonGroupText>
                                <Label htmlFor="name" className="font-semibold">0333 442 947</Label>
                            </ButtonGroupText>
                        </ButtonGroup>
                    </div>
                    <div className="hidden flex-col gap-1 md:flex">
                        <ButtonGroup>
                            <Button variant="outline" aria-label="Search">
                                <House />
                            </Button>
                            <ButtonGroupText>
                                Nha Trang - Khánh Hoà
                            </ButtonGroupText>
                        </ButtonGroup>
                        <Typography className="text-xs text-center">(Thời gian từ 8:00 - 20:00)</Typography>
                    </div>
                </div>
            </div>
            <div className="hidden md:block">
                <NavigationMenuHeader />
            </div>
        </>
    )
}