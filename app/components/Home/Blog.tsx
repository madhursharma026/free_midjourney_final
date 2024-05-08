import Image from 'next/image'
import React from 'react'
import { Col, Row } from 'react-bootstrap'

import Blog1 from "@/assets/images/blog-1.jpg";
import Blog2 from "@/assets/images/blog-2.jpg";
import Blog3 from "@/assets/images/blog-3.jpg";
import Link from 'next/link';
import Container from '../Ui/Container';

const Blog = () => {
  return (
    <section className="blog bg-gray-50 xl:py-24 py-16 lg:px-7">
        <Container>
          <div className="mb-6 text-center">
            <h3 className="heading md:pb-4">watch our latest blog news</h3>
            <p className="text md:max-w-xl mx-auto text-gray-900">
              AI systems that possess the ability to understand learn and
              apply knowledge across a wide range of tasks similar to human
              intelligence
            </p>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 pq-blog gap-3 md:px-6">
            <div className="inline-block rounded-lg shadow-md group">
              <div className="overflow-hidden relative rounded-lg">
                <Link className='no-underline' aria-label='blog' href="/blog/exploring-dalle-ai-art-generator">
                  <Image className='w-full rounded-lg transition h-64 object-cover' decoding="async" src={Blog1} alt="blog" />
                </Link>
              </div>

              <div className="p-6 inline-block relative">
                <div className="mb-2">
                  <span className='text-dark-2 text-xs font-Mona_Bold uppercase tracking-wider no-underline'>DALL-E</span>
                </div>
                <h3>
                  <Link className='text-dark-2 text-base leading-6 font-Mona_Bold tracking-wider no-underline' aria-label='blog' href="/blog/exploring-dalle-ai-art-generator">
                  Unlocking Creativity: Exploring the DALL-E AI Art Generator
                  </Link>
                </h3>
                <div className="mt-2">
                    <span className='text-dark-2 text-sm font-Mona_Medium no-underline'>Feb 04, 2024</span>
                </div>
              </div>
            </div>

            <div className="inline-block rounded-lg shadow-md group">
              <div className="overflow-hidden relative rounded-lg">
                <Link className='no-underline' aria-label='blog' href="/blog/exploring-dalle-ai-art-generator">
                  <Image className='w-full rounded-lg transition h-64 object-cover' decoding="async" src={Blog2} alt="blog" />
                </Link>
              </div>

              <div className="p-6 inline-block relative">
                <div className="mb-2">
                  <span className='text-dark-2 text-xs font-Mona_Bold uppercase tracking-wider no-underline' aria-label='blog'>Artifical Intelligence</span>
                </div>
                <h3>
                  <Link className='text-dark-2 text-base leading-6 font-Mona_Bold tracking-wider no-underline' aria-label='blog' href="/blog/ethical-implications-of-ai-in-healthcare">The Ethical Implications Of AI In Healthcare</Link>
                </h3>
                <div className="mt-2">
                    <span className='text-dark-2 text-sm font-Mona_Medium no-underline'>Feb 04, 2024</span>
                </div>
              </div>
            </div>

            <div className="inline-block rounded-lg shadow-md group">
              <div className="overflow-hidden relative rounded-lg">
                <Link className='no-underline' aria-label='blog' href="/blog/revolutionizing-remote-healthcare-delivery">
                  <Image className='w-full rounded-lg transition h-64 object-cover' decoding="async" src={Blog3} alt="blog" />
                </Link>
              </div>

              <div className="p-6 inline-block relative">
                <div className="mb-2">
                  <span className='text-dark-2 text-xs font-Mona_Bold uppercase tracking-wider no-underline'>MidJourney</span>
                </div>
                <h3>
                  <Link className='text-dark-2 text-base leading-6 font-Mona_Bold tracking-wider no-underline' aria-label='blog' href="/blog/revolutionizing-remote-healthcare-delivery">
                  MidJourney And Telemedicine: Revolutionizing Remote Healthcare Delivery
                  </Link>
                </h3>
                <div className="mt-2">
                    <span className='text-dark-2 text-sm font-Mona_Medium no-underline'>Feb 04, 2024</span>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>
  )
}

export default Blog