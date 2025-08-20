import React, { useEffect } from 'react';
//= Packages
import Head from 'next/head';
//= Layout
import Layout from '@/layouts/default';
//= Components
import Loader from '@/components/Common/Loader';
// import Navbar from "@/components/Freelancer/Navbar";

import WhyRealTourzNavbar from "@/components/Common/WhyRealTourzNavbar";
import Footer from "@/components/Freelancer/Footer";
import Intro from '@/components/InnerPages/About/Intro';
import Story from '@/components/InnerPages/About/Story';



function PageWhyRealTourz() {
  useEffect(() => {
    document.body.classList.add('main-bg');
    return () => document.body.classList.remove('main-bg');
  }, []);

  return (
    <>
      <Head>
        <title>Why realtourz?</title>
      </Head>

      <Loader />
  <WhyRealTourzNavbar lightMode={false} />
      <main>
        {/* <Header /> */}
        <Intro />
        <Story />
      </main>
      <Footer subBg/>
    </>
  )
}

PageWhyRealTourz.getLayout = page => <Layout>{page}</Layout>

export default PageWhyRealTourz;