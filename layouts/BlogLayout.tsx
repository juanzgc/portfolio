import Image from 'next/image';
import { parseISO, format } from 'date-fns';
import { ArticleJsonLd } from 'next-seo';
import Header from '../components/Header'
import { ArrowLeftIcon } from '@heroicons/react/solid'
import Link from 'next/link';

import type { PropsWithChildren } from 'react';
import type { Blog } from '.contentlayer/types';

export default function BlogLayout({
  children,
  post
}: PropsWithChildren<{ post: Blog }>) {
  const allAuthors = post.authors.map(elem => elem.author);
  return (
    <>
      <ArticleJsonLd
        url={`https://juanzg.com/blog/${post.slug}`}
        title={post.title}
        images={[post.image]}
        datePublished={new Date(post.publishedAt).toISOString()}
        dateModified={new Date(post.publishedAt).toISOString()}
        authorName={allAuthors}
        publisherName="Juan Zapata Gomez's Blog"
        description={post.summary}
        publisherLogo='https://ndesfgzqzbtptpoebdwc.supabase.in/storage/v1/object/public/main/Headshot.jpg'
      />

      <div className="h-full">
        {/* Header */}
        <Header />

        <main className="flex flex-col justify-center mt-10 px-8">
        <article className="flex flex-col items-start justify-center w-full max-w-2xl mx-auto mb-10">
          <button type="button" className="mb-2 inline-flex justify-center rounded-md text-gray-600 dark:text-gray-300 hover:text-black dark:hover:text-white focus:outline-none" aria-controls="mobile-menu" aria-expanded="false">
            <Link href='/blog'>
              <a className='inline-flex items-center text-lg font-bold'>
                <ArrowLeftIcon className="block h-5 w-5 mr-2" aria-hidden="true" />
                All Blogs
              </a>
            </Link>
          </button>

          <h1 className="mb-4 text-3xl font-bold tracking-tight text-black md:text-5xl dark:text-white">
            {post.title}
          </h1>
          <div className="flex flex-col items-start justify-between w-full mt-2 md:flex-row md:items-center">
            <div className="flex items-center">
              <Image
                alt="Juan Zapata Gomez"
                height={30}
                width={30}
                src="/headshot.jpg"
                className="rounded-full"
              />
              <p className="ml-2 text-sm text-gray-700 dark:text-gray-300">
                {'Juan Zapata Gomez / '}
                {format(parseISO(post.publishedAt), 'MMMM dd, yyyy')}
              </p>
            </div>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400 min-w-32 md:mt-0">
              {post.readingTime.text}
            </p>
          </div>
          <div className="w-full mt-4 prose dark:prose-dark max-w-none">
            {children}
          </div>
        </article>
        </main>
      </div>

    </>
  );
}