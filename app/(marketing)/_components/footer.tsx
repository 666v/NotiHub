import { Button } from "@/components/ui/button"
import Link from "next/link";


import { Logo } from "./logo"

export const Footer = () => {
    return (
        <div className="flex items-center w-full p-6 bg-background z-50 dark:bg-[#1F1F1F]">
            {/* <Logo /> */}
            <div className="md:ml-auto w-full justify-between md:justify-end flex items-center gap-x-2 text-muted-foreground">
            <Button variant="ghost" size="sm">
                <Link href="/privacy">
                سياسة الخصوصية
                </Link>
            </Button>
            <Button variant="ghost" size="sm">
                <Link href="/terms">
                الشروط والأحكام 
                </Link>
            </Button>
            </div>
        </div>
    )
  }