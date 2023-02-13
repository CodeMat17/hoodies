import Head from "next/head";
import AllCollections from "../components/allCollections/AllCollections";
import HeroComponent from "../components/hero/HeroComponent";
import NewsLetter from "../components/newsLetter/NewsLetter";
import Testimonials from "../components/testimonials/Testimonials";
import TrendyCollections from "../components/trendy/TrendyCollections";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Hoodies eShop</title>
        <meta name='description' content='Hoodies eShop is a demo application for selling of hoods online. DM me if you are interested to have such to push your products online and make more money.' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <HeroComponent />
      <TrendyCollections />
      <AllCollections />
      <Testimonials />
      <NewsLetter />
    </div>
  );
}
