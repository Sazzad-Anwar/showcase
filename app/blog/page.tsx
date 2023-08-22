import React from "react"

import { Category, categories } from "@/types/category"
import BlogPage from "@/components/Blog/blog/page"
import EditorsPick from "@/components/Blog/editors-pick/page"
import Footer from "@/components/Blog/footer/page"
import BlogSiteHeader from "@/components/Blog/header/site-header"
import HeroCarousel from "@/components/Blog/hero/hero-carousel"
import PopularTopics from "@/components/Blog/popular-topics/page"
import Testimonial from "@/components/Blog/testimonial/page"

interface BlogPageProps {
  params: {}
  searchParams: { [key: string]: string | undefined }
}

type FetchBlogProps = string

async function getBlogs(category: FetchBlogProps): Promise<Boolean> {
  if (category === "") {
    return true
  }
  return categories.find((cat) => cat.value === category) ? true : false
}

export default async function HomePage({ searchParams }: BlogPageProps) {
  let category: string = (searchParams?.category ?? "") as string
  let posts = await getBlogs(category)
  return (
    <div className="relative">
      <BlogSiteHeader />
      <HeroCarousel />
      <PopularTopics />
      {posts ? <BlogPage posts={category} /> : "Posts Not found"}
      <Testimonial />
      <EditorsPick />
      <Footer />
    </div>
  )
}
