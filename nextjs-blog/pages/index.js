import Head from "next/head";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Layout, { siteTitle } from "../components/layout";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This is my Blog</p>
        <p>You can build a blog like this with Next.js</p>
      </section>
    </Layout>
  );
}
