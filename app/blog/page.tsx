import Link from 'next/link';
import { Suspense } from 'react';
import ViewCounter from './view-counter';
import { getViewsCount } from 'app/db/queries';
import { getBlogPosts } from 'app/db/blog';
import postcss from 'postcss';

export const metadata = {
  title: 'blog',
  description: 'my thoughts about everything I want to share',
};

export default function BlogPage() {
  const allBlogs = getBlogPosts().filter(
    (post) => !!post.metadata.lastPublishedAt // verifies if the post was published (lastPublishedAt is a string)
  );

  return (
    <section>
      <h1 className="font-medium text-2xl mb-8 tracking-tighter">
        read my blog
      </h1>
      {allBlogs
        .filter((post) => typeof post.metadata.lastPublishedAt === 'string')
        .sort((a, b) => {
          if (
            new Date(a.metadata.lastPublishedAt ?? a.metadata.createdAt) >
            new Date(b.metadata.lastPublishedAt ?? b.metadata.createdAt)
          ) {
            return -1;
          }
          return 1;
        })
        .map((post) => (
          <Link
            key={post.slug}
            className="flex flex-col space-y-1 mb-4"
            href={`/blog/${post.slug}`}
          >
            <div className="w-full flex flex-col">
              <p className="text-neutral-900 dark:text-neutral-100 tracking-tight">
                {post.metadata.title}
              </p>
              <Suspense fallback={<p className="h-6" />}>
                <Views slug={post.slug} />
              </Suspense>
            </div>
          </Link>
        ))}
    </section>
  );
}

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();

  return <ViewCounter allViews={views} slug={slug} />;
}
