import { Component } from "react";
import Painel from "../painel";
import Teclado from "../teclado";
import "./style.css";

class Calculadora extends Component {
	render() {
		return (
			<section className="calculadora">
				<Painel />
				<Teclado />
			</section>
		)
	}
}

export default Calculadora;