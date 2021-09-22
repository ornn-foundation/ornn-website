import Head from "next/head";
import Layout from "../src/components/layout/Layout";
import { Button } from "@mui/material";
import Header from "../src/components/header/Header";
import Content from '../src/components/content/Content';
export default function Home() {
  return (
    <>
      <Head>
        <title>Ornn Foundation</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Header />
        <Content>
          {/* <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1>
          <h1>1</h1> */}
        </Content>
      </Layout>
    </>
  );
}
