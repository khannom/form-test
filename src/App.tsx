import React, { useState } from "react";
import "./App.css";
import FormSelect from "./components/FormSelect/FormSelect";
import FormTextInput from "./components/FormTextInput/FormTextInput";

interface IFlujo {
	Delivery: string[];
	"Social Listening": string[];
	Mensajería: string[];
}

interface IAutoRespuesta {
	Completo: string[];
	"Clasifica y responde": string[];
	"Responde y atiende": string[];
	Responde: string[];
	Atiende: string[];
}

const App: React.FC = () => {
	const [nombreEmpresa, setNombreEmpresa] = useState<string>("");
	const [tipoEmpresa, setTipoEmpresa] = useState<string>("Delivery");
	const [tipoFlujo, setTipoFlujo] = useState<string>("Completo");
	const [tipoAutoRespuesta, setTipoAutoRespuesta] = useState<string>("");

	const tiposEmpresa: string[] = [
		"Delivery",
		"Social Listening",
		"Mensajería",
	];

	const flujos: IFlujo = {
		Delivery: ["Completo", "Responde y atiende", "Atiende"],
		"Social Listening": ["Clasifica y responde", "Responde"],
		Mensajería: ["Clasifica y responde", "Responde"],
	};

	const autoRespuestas: IAutoRespuesta = {
		"Clasifica y responde": [],
		Completo: [],
		"Responde y atiende": [
			"Deshabilitado",
			"Pedir datos y derivar",
			"Manejo automático",
		],
		Responde: ["Deshabilitado", "Clasificación automática"],
		Atiende: ["Deshabilitado", "Clasificación automática"],
	};

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault();

		console.log(`Nombre de la empresa: ${nombreEmpresa}`);
		console.log(`Tipo de empresa: ${tipoEmpresa}`);
		console.log(`Flujo: ${tipoFlujo}`);
		console.log(`Autorespuesta: ${tipoAutoRespuesta}`);
        
        /* POST request to backend... */
	};

	return (
		<div className="App">
			<h1>Formulario ReactJS</h1>
			<form className="form-box" onSubmit={handleSubmit}>
				<FormTextInput
					type={"text"}
					name={"NombreEmpresa"}
					inputLabel={"Nombre de la empresa:"}
					placeholder={"McDonalds..."}
					setState={setNombreEmpresa}
				></FormTextInput>
				<FormSelect
					name={"TipoEmpresa"}
					inputLabel={"Tipo de Empresa:"}
					options={tiposEmpresa}
					setState={setTipoEmpresa}
				></FormSelect>
				<FormSelect
					name={"TipoFlujo"}
					inputLabel={"Flujo:"}
					options={flujos[tipoEmpresa as keyof IFlujo]}
					setState={setTipoFlujo}
				></FormSelect>
				<FormSelect
					name={"TipoAutoRespuesta"}
					inputLabel={"Auto Respuesta:"}
					options={autoRespuestas[tipoFlujo as keyof IAutoRespuesta]}
					setState={setTipoAutoRespuesta}
				></FormSelect>
				<input
					type="submit"
					value="Submit"
					className="form-submit-button"
				/>
			</form>
		</div>
	);
};

export default App;
