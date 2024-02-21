import "@/styles/globals.css";
import { Fragment, useEffect, useState } from "react";
import Layout from "@/src/layouts/Layout";

export default function App({ Component, pageProps }) {
  return (
    <Fragment>
      <Layout headerColor={"dark"}>
        <Component {...pageProps} />
      </Layout>
    </Fragment>
  );
}
