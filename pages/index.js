import Head from "next/head";
import styles from "../styles/Home.module.css";
import ContainerBlock from "../components/ContainerBlock";
import FavouriteProjects from "../components/FavouriteProjects";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";
import { createClient } from "next-sanity";
import imageUrlBuilder from '@sanity/image-url'
import Link from "next/dist/client/link";
import YtlLists from "@components/YtlLists";
import LinkdinPosts from "@components/LinkdinPosts";

export default function Home({ repositories , blogs }) {
  const client = createClient({
    projectId: "iytovi01",
    dataset: "production",
    useCdn: false
  });
  const builder = imageUrlBuilder(client)
  return (
    <ContainerBlock
      title= "Rudraksha Billore - Developer, Writer, Creator"
      description="This is a built specifically for my blog - Creating a developer portfolio that gets a job."
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />

      <div className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900 pb-40">
      <div className="bg-grey-50 max-w-6xl mx-auto" id="blog">
        <div className="container py-16 md:py-20 justify-between items-center md:pt-40 mx-10">
          <h2 className="text-6xl lg:text-8xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-white dark:text-gray-600 text-center lg:text-left font-header  font-semibold   text-gray-500   text-primary sm:text-5xl ">
            My Blogs
          </h2>
          
          <div className="mx-auto grid w-full grid-cols-1 gap-6 pt-12 sm:w-3/4 lg:w-full lg:grid-cols-3 xl:gap-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20">

            {blogs.map((item) => { 
              return <Link key={item.slug.current} href={"/blog/" + item.slug.current} className="shadow">
              <div><div style={{"backgroundImage": `url(${builder.image(item.blogimage).width(200).url() || '/assets/img/post-01.png'})`}}
                className="group relative h-72 bg-cover bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72">
                <span
                  className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                <span
                  className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base cursor-pointer">Read
                  More</span>
              </div>
              <div className="bg-white py-6 px-5 xl:py-8">
                <span className="block font-body text-lg font-semibold text-black"> {item.title}</span>
                <span className="block pt-2 font-body text-grey-20">{item.metadesc}</span>
              </div></div>
            </Link>
             })}
              </div>
              </div>
             </div>
      </div>

      <YtlLists/>
      <LinkdinPosts/>
      
     
      
    </ContainerBlock>
  );
}


export const getServerSideProps = async (context) => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;
  const client = createClient({
    projectId: "iytovi01", 
    dataset: "production",
    useCdn: false
  });

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);
  const query = `*[_type == "blog"][0...3]`;
  const blogs = await client.fetch(query);

  return {
    props: {
      repositories,
      blogs,

    },
  };

  
};

