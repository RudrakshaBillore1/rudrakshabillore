import { useRouter } from 'next/router'
import Head from 'next/head'
import { createClient } from "next-sanity";
import PortableText from "react-portable-text"
import Navbar from '@components/Navbar';
import Footer from '@components/Footer';

const Post = ({ blog, profile }) => {
  const router = useRouter()

  return <><>
    <Head>
      <meta charset="utf-8" />

      <meta content="IE=edge,chrome=1" http-equiv="X-UA-Compatible" />

      <meta content="width=device-width, initial-scale=1, shrink-to-fit=no" name="viewport" />

      <title>{blog.title}</title>
      
      <link rel="icon" herf="/avatar.png"/>

      <meta property="og:title" content="How to become a frontend developer | Atom Template" />

      <meta property="og:locale" content="en_US" />

      <link rel="canonical" href="//post" />

      <meta property="og:url" content="//post" />

      <meta name="description"
        content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua." />

      <link rel="icon" type="image/png" href="/assets/img/favicon.png" />

      <meta name="theme-color" content="#5540af" />

      <meta property="og:site_name" content="Atom Template" />

      <meta property="og:image" content="//assets/img/social.jpg" />

      <meta name="twitter:card" content="summary_large_image" />

      <meta name="twitter:site" content="@tailwindmade" />

      <link crossorigin="crossorigin" href="https://fonts.gstatic.com" rel="preconnect" />

      <link as="style"
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
        rel="preload" />

      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600&family=Raleway:wght@400;500;600;700&display=swap"
        rel="stylesheet" />

      <link href="https://unpkg.com/boxicons@2.0.7/css/boxicons.min.css" rel="stylesheet" />

      <link crossorigin="anonymous" href="/assets/styles/main.min.css" media="screen" rel="stylesheet" />

      <script defer src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js"></script>

      <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>



      <link rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/10.7.2/styles/atom-one-dark.min.css" />



    </Head>
    <Navbar />

    <div>
      <div class="container py-6 md:py-10">
        <div class="mx-auto max-w-4xl">
          <div class="">
            <h1
              class="pt-5 font-body text-3xl font-semibold text-primary sm:text-4xl md:text-5xl xl:text-6xl">
              {blog.title}
            </h1>
            <div class="flex items-center pt-5 md:pt-10">
              <div>
                <img src="/avatar.png"
                  class="h-20 w-20 rounded-full border-2 border-grey-70 shadow"
                  alt="author image" />
              </div>
              <div class="pl-5">
                <span class="block font-body text-xl font-bold text-grey-10">By Rudraksha Billore</span>
                <span class="block pt-1 font-body text-xl font-bold text-grey-30">February 27,
                  2022</span>
              </div>
            </div>
          </div>
          <div class="prose max-w-none pt-8">
            <PortableText
              // Pass in block content straight from Sanity.io
              content={blog.content}
              projectId="iytovi01"
              dataset="production"
              // Optionally override marks, decorators, blocks, etc. in a flat
              // structure without doing any gymnastics
              serializers={{
                h1: (props) => <h1 style={{ color: "red" }} {...props} />,
                li: ({ children }) => <li className="special-list-item">{children}</li>,
              }}
            />

          </div>
          <div class="mt-10 flex justify-between border-t border-lila py-12">
            <a href="/" class="flex items-center">
              <i class="bx bx-left-arrow-alt text-2xl text-primary"></i>
              <span
                class="block pl-2 font-body text-lg font-bold uppercase text-primary md:pl-5">Previous
                Post</span>
            </a>
            <a href="/" class="flex items-center">
              <span class="block pr-2 font-body text-lg font-bold uppercase text-primary md:pr-5">Next
                Post</span>
              <i class="bx bx-right-arrow-alt text-2xl text-primary"></i>
            </a>
          </div>
          <div
            class="flex flex-col items-center border-t border-lila py-12 pt-12 md:flex-row md:items-start xl:pb-20">
            <div class="w-3/4 sm:w-2/5 lg:w-1/4 xl:w-1/5">
              <img src="/avatar.png" class="rounded-full shadow" alt="author image" />
            </div>
            <div class="ml-0 text-center md:ml-10 md:w-5/6 md:text-left">
              <h3 class="pt-10 font-body text-2xl font-bold text-secondary md:pt-0">
                Rudraksha Billore
              </h3>
              <p
                class="pt-5 font-body text-lg leading-8 text-secondary sm:leading-9 md:text-xl md:leading-9 lg:leading-9 xl:leading-9">
                I am Rudraksha Billore , I am full Stack Web developer and Mobile App Developer and I have 3 Years  Experence . I also like to Write blogs.

              </p>
              
            </div>
          </div>
        </div>
      </div>
    </div>

   <Footer/>
    
  </> </>
}

export default Post

export const getServerSideProps = async (context) => {
  const { slug } = context.query
  const client = createClient({
    projectId: "iytovi01",
    dataset: "production",
    useCdn: false
  });
  const query = `*[_type == "blog" && slug.current == '${slug}'][0]`;
  const blog = await client.fetch(query);
  const profileQuery = `*[_type == "profile"][0]`;
  const profile = await client.fetch(profileQuery);
  return {
    props: {
      blog, profile
    }
  }
}