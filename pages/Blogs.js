import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { createClient } from "next-sanity";
import { useEffect } from 'react';
import imageUrlBuilder from '@sanity/image-url'
import Link from 'next/link'
import ContainerBlock from '@components/ContainerBlock';
import Post from './blog/[slug]';

export default function Blogs ({blogs}) {
    const client = createClient({
        projectId: "iytovi01",
        dataset: "production",
        useCdn: false
      });
      const builder = imageUrlBuilder(client)
      
      useEffect(() => {
        console.log("thsnks") 
        
      }, [])
  return (
   <ContainerBlock>

    <div>
        
         <div className="bg-grey-50 my-12" id="blog">
        <div className="container mx-auto py-16 md:py-20">
          <h2 className="text-center font-header text-4xl font-semibold uppercase text-primary sm:text-5xl lg:text-6xl">
            I also like to write
          </h2>
          <h4 className="pt-6 text-center font-header text-xl font-medium text-black sm:text-2xl lg:text-3xl">
            Check out my latest posts!
          </h4>
          {/* <div className=" block  bg-grey-50 mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10  col-span-3 sm:col-span-1  object-cover"> */}
          <div className=" block  bg-grey-50 mx-auto w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10  col-span-3 sm:col-span-1  object-cover">
            {blogs.map((item) => { 
              return <Link key={item.slug.current} href={"/blog/" + item.slug.current} className="relative overflow-hidden w-full  shadow-2xl ">
              <div>
              {/* <div style={{"backgroundImage": `url(${builder.image(item.blogimage).width(200).url() || '/assets/img/post-01.png'})`}}
                className=" group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72 transform hover:scale-110 transition duration-2000 ease-out  "> */}
                <div style={{"backgroundImage": `url(${builder.image(item.blogimage).width(200).url() || '/assets/img/post-01.png'})`}}
                className="transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72  ">
                <span
                  className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                <span
                  className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-grey dark:border-grey px-6 py-2 text-center font-body text-sm font-bold uppercase text-grey dark:text-white md:text-base cursor-pointer">Read
                  More</span>
              </div>
              <div className="bg-white py-6 px-5 xl:py-8 cursor-pointer">
                <span className="block font-body text-lg font-semibold text-black"> {item.title}</span>
                <span className="block pt-2 font-body text-grey-20">{item.metadesc}</span>
              </div>
              </div>
            </Link>
             })}
            
          </div>
        </div>
      </div>

    </div>
    </ContainerBlock>
  )
}


export async function getServerSideProps(context) {
    const client = createClient({
      projectId: "iytovi01",
      dataset: "production",
      useCdn: false
    });
    const query = `*[_type == "blog"]`;
    const blogs = await client.fetch(query); 
    return {
      props: {
        blogs
      }
    }
  }