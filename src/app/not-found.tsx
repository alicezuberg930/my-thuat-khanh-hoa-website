import { Button } from "@/components/ui/Button";
import { Typography } from "@/components/ui/Typography";
import { PageNotFoundIllustration } from "@/lib/illustrations";
import Link from "next/link";

export default function NotFound() {
    return (
        <div className="text-center my-20">
            <div>
                <Typography variant="h3">
                    Sorry, page not found!
                </Typography>
            </div>

            <div>
                <Typography variant="span">
                    Sorry, we couldn’t find the page you’re looking for. Perhaps you’ve mistyped the URL? Be
                    sure to check your spelling.
                </Typography>
            </div>

            <div>
                <PageNotFoundIllustration className="h-96 my-20" />
            </div>

            <Link href='/'>
                <Button variant="info">
                    Go to Home
                </Button>
            </Link>
        </div>
    )
}