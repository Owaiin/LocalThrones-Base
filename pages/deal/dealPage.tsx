import Navbar from "@/components/nav/Navbar";
import Head from "next/head";
import Image from "next/image";
import Container from "@/components/utility/Container";
import FeatureImageCard from "@/components/utility/imageCards/FeatureImageCard";
import PizzaImage from "../../public/pizzaStock.jpg";
import Button from "@/components/utility/Button";
import { GoLocation } from "react-icons/go";
import {
  AiOutlineHeart,
  AiOutlineInfoCircle,
  AiFillHeart,
} from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import FilterBadge from "@/components/nav/FilterBadge";
import { useState } from "react";
import PopupContainer from "@/components/dealComponents/PopupContainer";
export default function DealPage() {
  const [isLiked, setIsLiked] = useState(false);
  const [showDrawer, setShowDrawer] = useState(false);
  return (
    <>
      <Head>
        <title>Deal Page</title>
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="pt-20">
        <Container>
          <div className="mb-5 grid grid-flow-col gap-3 overflow-scroll scrollbar-hide">
            <FilterBadge text="Pizza" />
            <FilterBadge text="American" />
            <FilterBadge text="Alcohol" />
            <FilterBadge text="Cocktails" />
            <FilterBadge text="Vegan" />
          </div>
          <div className="">
            <FeatureImageCard businessName="Pizza Mikes" image={PizzaImage} />
            <div className="flex text-2xl justify-between px-2 mb-2">
              <div className=" grid grid-cols-3 gap-4">
                <AiOutlineInfoCircle onClick={() => setShowDrawer(true)} />
                <GoLocation onClick={() => setShowDrawer(true)} />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <FiShare />
                {isLiked ? (
                  <AiFillHeart
                    className=" text-rose-500"
                    onClick={() => setIsLiked(false)}
                  />
                ) : (
                  <AiOutlineHeart onClick={() => setIsLiked(true)} />
                )}
              </div>
            </div>
            <div className="prose">
              <h1>Buy One, Get One Free!</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. In, et
                porro doloremque reiciendis quasi aut beatae impedit sit neque!
                Itaque repudiandae recusandae maxime nobis quia ad doloremque ab
                fugit error?
              </p>
              <Button text="GET DEAL" />
            </div>
          </div>
        </Container>

        {showDrawer && <PopupContainer onClick={() => setShowDrawer(false)} />}
      </main>
    </>
  );
}
