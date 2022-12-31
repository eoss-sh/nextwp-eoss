import client from "../client";
import { gql } from "@apollo/client";
import { BlockRenderer } from "components/BlockRenderer/BlockRenderer";
import { cleanAndTransformBlocks } from "utils/cleanAndTransformBlocks";

const Page = (props) => {
  console.log(props);
  return (
    <div>
      <BlockRenderer blocks={props.blocks} />
    </div>
  );
};

export const getStaticProps = async (context) => {
  const uri = `/${context.params.slug.join("/")}/`;
  const { data } = await client.query({
    query: gql`
      query PageQuery($uri: String!) {
        nodeByUri(uri: $uri) {
          ... on Page {
            id
            title
            blocksJSON
          }
        }
      }
    `,
    variables: {
      uri,
    },
  });
  const blocks = cleanAndTransformBlocks(data.nodeByUri.blocksJSON);
  return {
    props: {
      title: data.nodeByUri.title,
      blocks,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query AllPagesQuery {
        pages {
          nodes {
            uri
          }
        }
      }
    `,
  });

  return {
    paths: data.pages.nodes.map((page) => ({
      params: {
        slug: page.uri
          .substring(1, page.uri.length - 1)
          .split("/")
          .filter((item) => item !== ""),
      },
    })),
    fallback: false,
  };
};

export default Page;
