"use client";

import Image from "next/image";
import { useUser } from "@clerk/clerk-react";
import { PlusCircle } from "lucide-react";
import { useMutation } from "convex/react";
import { toast } from "sonner";

import { api } from "@/convex/_generated/api";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

const DocumentsPage = () => {
    const router = useRouter();
    const { user } = useUser();
    const create = useMutation(api.documents.create);

    const onCreate = () => {
        const promise = create({ title: "Untitled" })
        .then((documentId) => router.push(`/documents/${documentId}`))
    
        toast.promise(promise, {
            loading: "جاري إنشاء ملاحظة جديدة...",
            success: "تم إنشاء ملاحظة جديدة!",
            error: "فشل في إنشاء ملاحظة جديدة."
        });
    };
    

    return ( 
        <div className="h-full flex flex-col items-center justify-center space-y-4">
            <Image
                src="/empty.png"
                height="300"
                width="300"
                alt="Empty"
                className="dark:hidden"
            />
            <Image
                src="/empty-dark.png"
                height="300"
                width="300"
                alt="Empty"
                className="hidden dark:block"
            />
            <h2 className="text-lg font-medium" dir="rtl">
                Welcome to {user?.firstName}&apos;s NotiHub
            </h2>
            <Button onClick={onCreate}>
               <PlusCircle className="h-4 w-4 mr-2" />
                انشاء ملاحظة
            </Button>
        </div>
    );
}
 
export default DocumentsPage;