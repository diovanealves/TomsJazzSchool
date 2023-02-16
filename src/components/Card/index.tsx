import arrowRight from "../../assets/arrow-right.svg";
import Clef from "../../assets/clef.png";
import Drums from "../../assets/drums.png";
import Piano from "../../assets/piano.png";
import Sax from "../../assets/sax.png";
import { Button } from "../Button";

export function Card() {
  const card = [
    {
      img: Piano,
      name: "Piano popular",
      background: "#ED4D1B",
    },
    {
      img: Clef,
      name: "Teoria Musical",
      background: "#FF9A3C",
    },
    {
      img: Sax,
      name: "Sax alto",
      background: "#ED4D1B",
    },
    { img: Drums, name: "Bateria", background: "#FF9A3C" },
  ];

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex flex-wrap justify-center gap-3">
        {card.map((cards) => (
          <a
            href="#"
            key={cards.name}
            className="w-72 px-6 py-4 rounded-md"
            style={{ background: cards.background }}
          >
            <img src={cards.img} alt="" />
            <h1 className="text-xl font-black my-4">{cards.name}</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, dolore
              magna aliqua.
            </p>
            <img src={arrowRight} alt="" className="block mt-4 ml-auto w-fit" />
          </a>
        ))}
      </div>
      <h1 className="text-3xl font-bold mt-20 mb-10">
        E <span className="text-highlight">vários </span> outros!
      </h1>
      <Button placeholder="CONHECER CURSOS" href="#" />
    </div>
  );
}
