import React from "react";
import "./FormSelect.css";

interface FormSelectProps {
	name: string;
	inputLabel: string;
	options: string[];
	setState: React.Dispatch<React.SetStateAction<string>>;
}

const FormSelect: React.FC<FormSelectProps> = ({
	name,
	inputLabel,
	options,
	setState,
}) => {
	return options.length > 0 ? (
		<div className="form-select-wrap">
			<label htmlFor={name}>{inputLabel}</label>
			<select className="form-select"
				name={name}
				id={name}
				onChange={(event) => setState(event.target.value)}
			>
				{options.map((option) => (
					<option value={option} key={option.toUpperCase()}>
						{option}
					</option>
				))}
			</select>
		</div>
	) : null;
};

export default FormSelect;
