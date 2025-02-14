import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

async function Images (){
  const images = await db.query.images.findMany({orderBy: (images, {desc}) => desc(images.id)});
  return (
    <div className="flex flex-wrap gap-4">
      {images.map((image) => (
        <div key={image.id} className="w-48 p-4">
            <Image src={image.url} alt={`Image ${image.id}`}  className="object-contain" width={200} height={200} />
          </div>
      ))}
    </div>
  )
}

export default async function HomePage() {
  try {
    return (
      <main className="">
        <SignedOut>
          <div className="h-full w-full text-2xl text-center">Please sign in to view the gallery</div>
        </SignedOut>
        <SignedIn>
          <Images/>
        </SignedIn>
      </main>
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return <div>Error fetching posts</div>;
  }
}

