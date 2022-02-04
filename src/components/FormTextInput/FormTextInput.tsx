import React from "react";
import "./FormTextInput.css";

interface TextInputProps {
	type: string;
	name: string;
	inputLabel: string;
	placeholder: string;
	setState: React.Dispatch<React.SetStateAction<string>>;
}

const FormTextInput: React.FC<TextInputProps> = ({
	type,
	name,
	inputLabel,
	placeholder,
	setState,
}) => {
	return (
		<div className="form-text-wrap">
			<label htmlFor={name}>{inputLabel}</label>
			<input
				className="form-text-input"
				type={type}
				name={name}
				id={name}
				placeholder={placeholder}
				onChange={(event) => setState(event.target.value)}
			/>
		</div>
	);
};

export default FormTextInput;
