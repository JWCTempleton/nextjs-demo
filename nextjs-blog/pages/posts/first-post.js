import Link from "next/link";
import Head from "next/head";
import Layout from "../../components/layout";

const FirstPost = () => {
  return (
    <Layout>
      <Head>
        <title>First Post</title>
      </Head>
      <h1>First Post</h1>
      <h2>
        <Link href="/">&larr;Back to Home</Link>
      </h2>
    </Layout>
  );
};

export default FirstPost;
