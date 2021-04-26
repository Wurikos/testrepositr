import React, { useContext, useState } from 'react';
import atomize from "@quarkly/atomize";
import { useOverrides } from "@quarkly/components";
import { Context } from './Context';
import { Button, Input } from "@quarkly/widgets";
const defaultProps = {};
const overrides = {
	"input": {
		"kind": "Input",
		"props": {}
	},
	"button": {
		"kind": "Button",
		"props": {
			"children": "Добавить"
		}
	}
};

const ToDoForm = props => {
	const {
		dispatch
	} = useContext(Context);
	const [userInput, setUserInput] = useState('');

	const handleChange = e => {
		setUserInput(e.currentTarget.value);
	};

	const handleSubmit = e => {
		e.preventDefault();
		dispatch({
			userInput,
			type: "addTask"
		});
		setUserInput("");
	};

	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <form noValidate autoComplete="off" onSubmit={handleSubmit} {...props}>
		        
		<Input
			{...override("input")}
			label="Task"
			id="standard-uncontrolled"
			size="small"
			value={userInput}
			type="text"
			onChange={handleChange}
		/>
		        
		<Button {...override("button")} variant="contained" color="primary" type="submit">
			Add Task
		</Button>
		    
	</form>;
};

export default atomize(ToDoForm)({
	name: "ToDoForm",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "ToDoForm — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	},
	overrides
});