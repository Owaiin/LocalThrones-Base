import Head from "next/head";
import Image from "next/image";
import Button from "@/components/utility/Button";
import Navbar from "@/components/nav/Navbar";
import DealContainer from "@/components/dealComponents/DealContainer";
import Container from "@/components/utility/Container";
import FilterNav from "@/components/nav/FilterNav";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className="pt-16">
        <Navbar />
        <Container>
          <FilterNav />
        </Container>
      </header>
      <main className="pt-5">
        <Container>
          <DealContainer />
        </Container>
      </main>
    </>
  );
}
