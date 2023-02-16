import Logo from "../../assets/logo.svg";
import { Button } from "../Button";

export function Navbar() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-center pt-6">
      <img src={Logo} alt="" />
      <div className="grid grid-cols-2 gap-4 py-5 text-center md:flex">
        <a href="#">Início</a>
        <a href="#">Cursos</a>
        <a href="#">Eventos</a>
        <a href="#">Contato</a>
      </div>
      <Button placeholder="SE INSCREVA" href="#" />
    </div>
  );
}
