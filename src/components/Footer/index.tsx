import logo from "../../assets/logo.svg";
import { Button } from "../Button";

export function Footer() {
  return (
    <ul className="flex flex-col sm:items-center md:grid md:grid-cols-3 mt-32 mb-12">
      <li className="max-w-sm w-11/12">
        <img src={logo} alt="" />
        <p className="mt-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </li>
      <li className="flex flex-col md:items-center gap-1 my-10 md:my-0">
        <a href="#">Início</a>
        <a href="#">Cursos</a>
        <a href="#">Eventos</a>
        <a href="#">Contato</a>
      </li>
      <li>
        <h1 className="text-xl font-black">
          Receba materiais gratuitos no seu email
        </h1>
        <input
          type="text"
          className="max-w-full w-full h-10 border-2 border-black shadow-shadow my-5"
        />
        <Button placeholder="QUERO RECEBER" href="#" />
      </li>
    </ul>
  );
}
