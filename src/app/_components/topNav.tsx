"use client"

import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";

export default function TopNav(){
    const router = useRouter();
    return (
        <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold border-b">
            <div>Gallery</div>
            <div className="flex flex-row">
                <SignedOut>
                    <SignInButton/>
                </SignedOut>
                <SignedIn>
                    <UploadButton 
                    endpoint="imageUploader" 
                    onClientUploadComplete={() => {
                        router.refresh();
                    }} 
                    onUploadError={() => {
                        console.log("Error uploading image");
                    }} />
                    <UserButton/>
                </SignedIn>
            </div>
        </nav>
        )
}