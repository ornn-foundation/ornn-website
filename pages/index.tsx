import Head from "next/head";
import Layout from "../src/components/layout/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title>Ornn Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <div>Ornn Foundation</div>
      </Layout>
    </>
  );
}
