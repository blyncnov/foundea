import type { NextPage } from "next";
import Head from "next/head";

// Import Header components
import Header from "../components/Header";
import Services from "../components/Services";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Foundea | Fintech for the poor</title>
        <meta
          name="Foundea | Fintech for the poor"
          content="Foundea | Fintech for the poor"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* All components */}
      <Header />
      <Services />
      {/* Components Ends */}
    </>
  );
};

export default Home;
