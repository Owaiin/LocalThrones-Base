import Navbar from "@/components/nav/Navbar";
import Head from "next/head";
import Image from "next/image";
import Container from "@/components/utility/Container";
import FeatureImageCard from "@/components/utility/imageCards/FeatureImageCard";
import PizzaImage from "../../public/pizzaStock.jpg";
import Button from "@/components/utility/Button";
import { GoLocation } from "react-icons/go";
import { BiArrowBack } from "react-icons/bi";
import {
  AiOutlineHeart,
  AiOutlineInfoCircle,
  AiFillHeart,
} from "react-icons/ai";
import { FiShare } from "react-icons/fi";
import FilterBadge from "@/components/nav/FilterBadge";
import { useState } from "react";
import BusinessInfo from "@/components/dealComponents/BusinessInfo";
import PopupContainer from "@/components/dealComponents/PopupContainer";
import LocationInfo from "@/components/dealComponents/LocationInfo";
import { useRouter } from "next/navigation";
export default function DealPage() {
  const [isLiked, setIsLiked] = useState(false);
  const [showBusiness, setShowBusiness] = useState(false);
  const [showLocation, setShowLocation] = useState(false);
  const router = useRouter();
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
          <div className="flex items-center mb-5">
            <div className="pr-3 mr-3 border-r text-3xl">
              <BiArrowBack onClick={() => router.push("/")} />
            </div>
            <div className=" grid grid-flow-col gap-3 overflow-scroll scrollbar-hide">
              <FilterBadge text="Pizza" />
              <FilterBadge text="American" />
              <FilterBadge text="Alcohol" />
              <FilterBadge text="Cocktails" />
              <FilterBadge text="Vegan" />
            </div>
          </div>

          <div className="">
            <FeatureImageCard businessName="Pizza Mikes" image={PizzaImage} />
            <div className="flex text-2xl justify-between px-2 mb-2">
              <div className=" grid grid-cols-3 gap-4">
                <AiOutlineInfoCircle onClick={() => setShowBusiness(true)} />
                <GoLocation onClick={() => setShowLocation(true)} />
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
        {showBusiness && (
          <PopupContainer onClick={() => setShowBusiness(false)}>
            <BusinessInfo />
          </PopupContainer>
        )}

        {showLocation && (
          <PopupContainer onClick={() => setShowLocation(false)}>
            <LocationInfo />
          </PopupContainer>
        )}

        {/* {showBusiness && <BusinessInfo onClose={() => console.log("click")} />} */}
      </main>
    </>
  );
}
