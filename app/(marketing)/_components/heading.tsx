"use client";

import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import { SignInButton } from "@clerk/clerk-react";
import Link from "next/link";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";

export const Heading = () => {
  const { isAuthenticated, isLoading } = useConvexAuth();

    return (
      <div className="max-w-3xl space-y-4" dir="rtl">
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
          افكارك , مشاريعك , خططك , كلها مرتبة على <span className="underline">NotiHub</span>
        </h1>
        <h3 className="text-base sm:text-xl md:text-2xl font-medium">
        بدون تشتيت وضياع وقت نسق كل امورك على NotiHub <br />
        فكرة واضحة وخطة مرتبة ومشاريع اكثر مرونه
        </h3>
        {isLoading && (
          <div className="w-full flex items-center justify-center">
            <Spinner size="lg" />
          </div> 
        )}
        {isAuthenticated && !isLoading && (
        <Button asChild>
          <Link href="/documents">
            دخول NotiHub 
            <ArrowRight className="h-4 w-4 ml-2" />
          </Link>
        </Button>
        )}
         {!isAuthenticated && !isLoading && (
        <SignInButton mode="modal">
          <Button>
            جرب NotiHub مجاناً
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </SignInButton>
      )}
      </div>
    )
  }