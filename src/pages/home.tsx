import arrowCurve from "../assets/arrow-curve.svg";
import imgHome from "../assets/hero-img.svg";
import threeDashes from "../assets/three-dashes.svg";

import { Button } from "../components/Button";
import { Card } from "../components/Card";
import { Footer } from "../components/Footer";
import { Navbar } from "../components/Navbar";

export function Home() {
  return (
    <div className="px-5 md:px-12">
      <Navbar />
      <div className="flex flex-col justify-center items-center lg:flex-row-reverse py-16">
        <img src={imgHome} alt="home" className="max-w-2xl w-3/4" />
        <div className="relative">
          <img
            src={threeDashes}
            alt=""
            className="absolute top-10 left-60 sm:top-[60px] sm:left-[300px]
            "
          />
          <h1 className="text-5xl md:text-6xl font-black">
            Crie algo <br /> <span className="text-highlight">impactante</span>{" "}
            <br /> com música
          </h1>
          <p className="my-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          <div className="relative">
            <Button placeholder="COMECE AGORA" href="#" />
            <img src={arrowCurve} alt="" className="relative top-5 left-36" />
          </div>
        </div>
      </div>
      <Card />
      <Footer />
    </div>
  );
}
