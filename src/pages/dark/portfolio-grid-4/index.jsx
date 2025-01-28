import React, { useEffect } from "react";
//= Packages
import Head from "next/head";
//= Layout
import Layout from "@/layouts/default";
//= Components
import Loader from "@/components/Common/Loader";
import Navbar from "@/components/Freelancer/Navbar";
import Header from "@/components/Portfolio/Header";
import Footer from "@/components/Freelancer/Footer";
import GridFourCols from "@/components/Portfolio/ClassicGrid/4Col";

function PortfolioClassicGrid4() {
  useEffect(() => {
    document.body.classList.add("main-bg");
    return () => document.body.classList.remove("main-bg");
  }, []);

  const metadata = {
    subTitle: "Our Works",
    title: "View some of our recent works",
  };

  return (
    <>
      <Head>
        <title>Realtourz - Some of my work</title>
      </Head>

      <Loader />
      <Navbar mainBg />
      <main className="main-bg">
        <Header data={metadata} />
        <GridFourCols />
      </main>
      <Footer subBg />
    </>
  );
}

PortfolioClassicGrid4.getLayout = (page) => <Layout>{page}</Layout>;

export default PortfolioClassicGrid4;
