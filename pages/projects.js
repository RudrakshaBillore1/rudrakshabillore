import LatestCode from "@components/LatestCode";
import React from "react";
import ContainerBlock from "../components/ContainerBlock";
import Projects from "../components/Projects";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";

export default function projects({ repositories }) {
  return (
    <ContainerBlock title="Projects - Rudraksha Billore">
      <Projects />
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  console.log(process.env.GITHUB_AUTH_TOKEN);
  let token = process.env.GITHUB_AUTH_TOKEN;
  

  const repositories = await getLatestRepos(userData, token);
  // console.log("REPOSITORIES", repositories);

  return {
    props: {
      repositories,

    },
  };

  
};
