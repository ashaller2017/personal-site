import Image from "next/image";
import { db } from "~/server/db";
const mockUrls = [
  "https://e5u5rk10z1.ufs.sh/f/qtd5XUyPlRkKC1en0pmUsnqyAHP6WueIZcpxdBoVjtkz2QEr",
  "https://e5u5rk10z1.ufs.sh/f/qtd5XUyPlRkKC1en0pmUsnqyAHP6WueIZcpxdBoVjtkz2QEr",
  "https://e5u5rk10z1.ufs.sh/f/qtd5XUyPlRkKC1en0pmUsnqyAHP6WueIZcpxdBoVjtkz2QEr",
  "https://e5u5rk10z1.ufs.sh/f/qtd5XUyPlRkKC1en0pmUsnqyAHP6WueIZcpxdBoVjtkz2QEr",
  "https://e5u5rk10z1.ufs.sh/f/qtd5XUyPlRkKC1en0pmUsnqyAHP6WueIZcpxdBoVjtkz2QEr",
]
const mockImages = mockUrls.map((url, index) => ({
  url,
  id: index+1,
}))

export default async function HomePage() {
  try {
    const posts = await db.query.posts.findMany();
    return (
      <main className="">
        <div className="flex flex-wrap gap-4">
          {posts.map((post)=>(
            <div key={post.id} className="w-48 p-4">
                {post.name}
              </div>
          ))}
          {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image, index) => (
            <div key={image.id + "-" + index} className="w-48 p-4">
                <Image src={image.url} alt={`Image ${image.id}`}  className="object-contain" width={200} height={200} />
              </div>
          ))}
        </div>
      </main>
    );
  } catch (error) {
    console.error("Error fetching posts:", error);
    return (
      <main className="">
        <div className="flex flex-wrap gap-4">
          {[...mockImages, ...mockImages, ...mockImages, ...mockImages].map((image) => (
            <div key={image.id} className="w-48 p-4">
                <Image src={image.url} alt={`Image ${image.id}`}  className="object-contain" width={200} height={200} />
              </div>
          ))}
        </div>
      </main>
    );
  }
}
