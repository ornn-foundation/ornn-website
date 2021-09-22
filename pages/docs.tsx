import Head from "next/head";
import React, { ReactElement } from "react";
import Content from "../src/components/content/Content";
import Layout from "../src/components/layout/Layout";

interface Props {}

function Docs({}: Props): ReactElement {
  return (
    <>
      <Head>
        <title>Docs</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Content></Content>
      </Layout>
    </>
  );
}

export default Docs;
