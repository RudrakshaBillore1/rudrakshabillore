import Head from "next/head";
import Link from "next/link";
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
import SocialMedia from "@components/SocialMedia";

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
      description="I am Rudraksha Billore Web Developer and Android Developer.
      I've been developing websites for 3 years straight.
      I  like to write blogs .I Write very interesting blogs. 
      Read my blogs and See My interesting project.
      Get in touch with me to know more.."
    >
      <Hero />
      <FavouriteProjects />
      <LatestCode repositories={repositories} />

      <div className="bg-[#F1F1F1] -mt-40 dark:bg-gray-900 pb-40">
      <div className="bg-grey-50 max-w-6xl mx-auto" id="blog">
        <div className="flex flex-col md:flex-row justify-between items-center pt-40 mx-10 md:my-20 lg:my-0">
          <h2 className="text-6xl lg:text-9xl max-w-lg font-bold text-gray-500 my-20 md:my-0 md:text-white dark:text-gray-600 text-center lg:text-left ">
            My Blogs
          </h2>
          <Link href="/projects">
               <a
            className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square"
              stroke="4"
              strokeWidth="4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
            <p>View My Blogs</p>
          </a>
           </Link>
        </div>
          
          <div className="grid grid-cols-1  md:grid-cols-3 pb-40md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto px-10 lg:-mt-10 gap-y-20  ">

            {blogs.map((item) => { 
              return <Link key={item.slug.current} href={"/blog/" + item.slug.current} className=" relative overflow-hidden  w-full  shadow-2xl">
              <div><div style={{"backgroundImage": `url(${builder.image(item.blogimage).width(200).url() || '/assets/img/post-01.png'})`}}
                className="group relative h-72 bg-cover  bg-center bg-no-repeat sm:h-84 lg:h-64 xl:h-72  transform hover:scale-110 transition duration-2000 ease-out  overflow-hidden">
                <span
                  className="absolute inset-0 block bg-gradient-to-b from-blog-gradient-from to-blog-gradient-to bg-cover bg-center bg-no-repeat opacity-10 transition-opacity group-hover:opacity-50"></span>
                <span
                  className="absolute right-0 bottom-0 mr-4 mb-4 block rounded-full border-2 border-white px-6 py-2 text-center font-body text-sm font-bold uppercase text-white md:text-base cursor-pointer">Read
                  More</span>
              </div>
              <div className="bg-white py-6 px-5 xl:py-8">
                <span className="block font-body text-lg font-semibold text-black"> {item.title}</span>
                <span className="block pt-2 font-body text-grey-20">{item.metadesc}</span>
              </div>
              </div>
            </Link>
             })}
              </div>
              </div>
             
      </div>

      
     
     <SocialMedia/>
      
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
