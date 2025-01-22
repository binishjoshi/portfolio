import { posts } from "#site/content";
import { PostItem } from "@/features/posts/components/post-item";
import { sortPosts } from "@/lib/utils";

export default async function BlogPage() {
  const sortedPosts = sortPosts(posts.filter((post) => post.published));
  const displayPosts = sortedPosts;

  return (
    <div className="container max-w-4xl py-6 lg:py-10">
      <div className="flex flex-col items-start gap-4 md:flex-row md:justify-between md:gap-8">
        <div className="flex-1 space-y-4">
          <h1 className="inline-block text-4xl font-black lg:text-5xl">Blog</h1>
          <p className="text-xl text-muted-foreground">
            I write sometimes. And by sometimes, I mean rarely.
          </p>
        </div>
      </div>
      <hr className="mt-8" />
      {displayPosts.length > 0 ? (
        <ul className="flex flex-col gap-2">
          {displayPosts.map(({ slug, date, title, description }) => (
            <li key={slug}>
              <PostItem
                slug={slug}
                date={date}
                title={title}
                description={description}
              />
            </li>
          ))}
        </ul>
      ) : (
        <>No blogs</>
      )}
    </div>
  );
}
