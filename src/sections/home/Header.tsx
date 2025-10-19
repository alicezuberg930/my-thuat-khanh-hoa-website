import Image from "next/image";
import { House, Phone, SearchIcon } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Button } from "@/components/ui/Button";
import { ButtonGroup, ButtonGroupText } from "@/components/ui/ButtonGroup";
import { Label } from "@/components/ui/Label";
import NavigationMenuHeader from "./NavigationMenuHeader";
import { Typography } from "@/components/ui/Typography";

export default function Header() {
    return (
        <>
            <div className="max-w-7xl mx-auto">
                <div className="flex items-center justify-between py-3">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/assets/mythuatkhanhhoa_icon.png"
                            alt="Logo"
                            width={80} height={80}
                            className="rounded-lg object-cover dark:brightness-[0.2] dark:grayscale"
                        />
                        <ButtonGroup>
                            <Input placeholder="Tìm kiếm..." className="border-info focus-visible:ring-info" />
                            <Button variant="info" aria-label="Search">
                                <SearchIcon />
                            </Button>
                        </ButtonGroup>
                    </div>
                    <div className="flex flex-col gap-1">
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
                    <div className="flex flex-col gap-1 items-center">
                        <ButtonGroup>
                            <Button variant="outline" aria-label="Search">
                                <House />
                            </Button>
                            <ButtonGroupText>
                                <Label htmlFor="name" className="font-semibold">Nha Trang - Khánh Hoà</Label>
                            </ButtonGroupText>
                        </ButtonGroup>
                        <Typography className="text-muted">(Thời gian từ 8:00 - 20:00)</Typography>
                    </div>
                </div>
            </div>
            <NavigationMenuHeader />
        </>
    )
}