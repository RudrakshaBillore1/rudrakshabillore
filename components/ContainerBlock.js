import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollButton from "./ScrollButton";


export default function ContainerBlock({ children, ...customMeta }) {
  const router = useRouter();

  const meta = {
    title: "I am Rudraksha Billore - Developer, Writer, Creator and YouTuber",
    description: `I've been developing websites for 3 years straight. Get in touch with me to know more.`,
    image:  "avatar.png" ,
    type: "website",
    keywords: "Rudraksha Billore, Rudraksha Billore portfoilo , rudraksh , rudraksh Billore",
    ogTitle: "Rudraksha Billore",
    ...customMeta,
  };
  return (
    <div>
      <Head>
        <title>{meta.title}</title>
        <link rel="icon" herf="/avatar.png"/>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta
          property="og:url"
          content={`https://rudrakshabillore.vercel.app${router.asPath}`}
        />
        <link
          rel="canonical"
          href={`https://rudrakshabillore.vercel.app${router.asPath}`}
        />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Rudraksha Billore" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="https://rudrakshabillore.vercel.app" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
        {meta.date && (
          <meta property="article:published_time" content={meta.date} />
        )}
        
         <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.6/umd/popper.min.js" integrity="sha384-wHAiFfRlMFy6i5SRaxvfOCifBUQy1xHdJ/yoi7FRNXMRBu5WHdZYu1hA6ZOblgut" crossorigin="anonymous"></script>
         <script defer src="https://unpkg.com/@alpine-collective/toolkit@1.0.0/dist/cdn.min.js" ></script>
         <script defer src="https://unpkg.com/alpinejs@3.x.x/dist/cdn.min.js"></script>

      </Head>

   <main className="dark:bg-gray-800 w-full">
        <Navbar />
        <ScrollButton/>
        <div>{children}</div>
        
        <Footer />
      </main>
    </div>
  );
}
