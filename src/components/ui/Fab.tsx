import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"
import { Slot } from "@radix-ui/react-slot"

const fabVariants = cva("rounded-full hover:shadow-xl transition-all flex items-center justify-center", {
    variants: {
        variant: {
            default:
                "bg-primary text-primary-foreground shadow hover:bg-primary/90",
            destructive:
                "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/80",
            outline:
                "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
            secondary:
                "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
            ghost: "hover:bg-accent hover:text-accent-foreground",
            link: "text-primary underline-offset-4 hover:underline",
            info: "bg-info text-info-foreground shadow-sm hover:bg-info/80"
        },
        position: {
            "bottom-right": "fixed bottom-2 right-2 md:bottom-6 md:right-6",
            "bottom-left": "fixed bottom-2 left-2 md:bottom-6 md:left-6",
            "top-right": "fixed top-2 right-2 md:top-6 md:right-6",
            "top-left": "fixed top-2 left-2 md:top-6 md:left-6",
        },
        size: {
            default: "h-12 w-12 md:h-14 md:w-14",
            sm: "h-8 w-8 md:h-10 md:w-10",
            lg: "h-12 w-12 md:h-16 md:w-16",
        },
    },
    defaultVariants: {
        variant: "default",
        position: "bottom-right",
        size: "default",
    },
})

export interface FABProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof fabVariants> {
    asChild?: boolean
}

const FAB = React.forwardRef<HTMLButtonElement, FABProps>(
    ({ className, position, variant, size, asChild = false, ...props }, ref) => {
        const Comp = asChild ? Slot : "button"
        return (
            <Comp
                ref={ref}
                className={cn(
                    fabVariants({ position, size, variant, className }),
                )}
                {...props}
            />
        )
    }
)
FAB.displayName = "FAB"

export { FAB, fabVariants }
