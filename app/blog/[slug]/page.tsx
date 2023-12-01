import type { Metadata } from 'next';
import { Suspense, cache } from 'react';
import { notFound } from 'next/navigation';
import { CustomMDX } from 'app/components/mdx';
import { getViewsCount } from 'app/db/queries';
import { getBlogPosts } from 'app/db/blog';
import ViewCounter from '../view-counter';
import { increment } from 'app/db/actions';
import { webUrl } from 'app/config';

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  let post = getBlogPosts().find((post) => post.slug === params.slug);
  if (!post) {
    return;
  }

  const {
    title,
    lastPublishedAt,
    createdAt,
    summary: description,
    image,
  } = post.metadata;

  const publishedTime = lastPublishedAt ?? createdAt;

  const ogImage = image ? `${webUrl}${image}` : `${webUrl}/og?title=${title}`;

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: 'article',
      publishedTime,
      url: `${webUrl}/blog/${post.slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

function formatDate(date: string) {
  const currentDate = new Date();
  const targetDate = new Date(date);

  const yearsAgo = currentDate.getFullYear() - targetDate.getUTCFullYear();
  const monthsAgo = currentDate.getMonth() - targetDate.getUTCMonth();
  const daysAgo = currentDate.getDate() - targetDate.getUTCDate();

  let formattedDate = '';

  if (yearsAgo > 0) {
    formattedDate = `${yearsAgo}y ago`;
  } else if (monthsAgo > 0) {
    formattedDate = `${monthsAgo}mo ago`;
  } else if (daysAgo > 0) {
    formattedDate = `${daysAgo}d ago`;
  } else {
    formattedDate = 'Today';
  }

  const fullDate = targetDate.toLocaleString('en-us', {
    timeZone: 'UTC',
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });

  return `${fullDate} (${formattedDate})`;
}

export default function Blog({ params }) {
  const post = getBlogPosts().find((post) => post.slug === params.slug);

  if (!post) {
    notFound();
  }

  const isDraft = !post.metadata.lastPublishedAt;

  return (
    <section>
      <script
        type="application/ld+json"
        suppressHydrationWarning
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'BlogPosting',
            headline: post.metadata.title,
            datePublished: post.metadata.createdAt,
            dateModified: post.metadata.lastPublishedAt,
            description: post.metadata.summary,
            image: post.metadata.image
              ? `${webUrl}${post.metadata.image}`
              : `${webUrl}/og?title=${post.metadata.title}`,
            url: `${webUrl}/blog/${post.slug}`,
            author: {
              '@type': 'Person',
              name: 'Gustavo Dantas',
            },
          }),
        }}
      />
      <h1 className="title font-medium text-2xl tracking-tighter max-w-[650px]">
        {post.metadata.title}
      </h1>

      {isDraft && (
        <div className="dark:bg-gray-100 dark:text-gray-900 px-4 py-2 my-4 rounded-md  text-gray-100 bg-gray-900">
          <p>This post is a draft!</p>
          <p>
            You can contribute to this content{' '}
            <a
              className="underline"
              href={`https://github.com/dantas15/me/blob/main/content/${post.slug}.mdx`}
              target="_blank"
            >
              here
            </a>
            !
          </p>
        </div>
      )}

      <div className="flex justify-between items-center mt-2 mb-8 text-sm max-w-[650px]">
        <p className="text-sm text-neutral-600 dark:text-neutral-400">
          {formatDate(post.metadata.lastPublishedAt ?? post.metadata.createdAt)}
        </p>
        <Suspense fallback={<p className="h-5" />}>
          <Views slug={post.slug} />
        </Suspense>
      </div>
      <article className="prose prose-quoteless prose-neutral dark:prose-invert">
        <CustomMDX source={post.content} />
      </article>
    </section>
  );
}

let incrementViews = cache(increment);

async function Views({ slug }: { slug: string }) {
  let views = await getViewsCount();
  if (process.env.NODE_ENV !== 'development') {
    incrementViews(slug);
  }
  return <ViewCounter allViews={views} slug={slug} />;
}
