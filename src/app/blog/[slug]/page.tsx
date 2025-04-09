import { notFound } from "next/navigation"
import { posts } from "@/data/blogs.json"

interface Props {
  params: {
    slug: string
  }
}

export function generateStaticParams() {
  return posts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: Props) {
  const post = posts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto py-10">
      <h1 className="text-4xl font-bold">{post.title}</h1>
      <div className="mt-4 flex gap-4 text-gray-600">
        <span>{post.author}</span>
        <span>{new Date(post.date).toLocaleDateString()}</span>
      </div>
      <img
        src={post.image}
        alt={post.title}
        className="mt-6 rounded-lg"
      />
      <div className="prose mt-8 max-w-none">
        {post.content}
      </div>
      <div className="mt-6 flex gap-2">
        {post.tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full bg-gray-100 px-3 py-1 text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  )
} 