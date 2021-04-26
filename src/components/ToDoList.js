import React, { useContext } from 'react';
import atomize from "@quarkly/atomize";
import ToDo from './ToDo';
import { useOverrides } from "@quarkly/components";
import { Context } from './Context';
const overrides = {
	"todo": {
		"kind": "ToDo",
		"props": {
			"display": "flex"
		}
	}
};

const ToDoList = props => {
	const {
		state
	} = useContext(Context);
	const {
		override,
		rest
	} = useOverrides(props, overrides);
	return <div {...rest}>
		            
		{state.map((todo, index) => <ToDo key={index} index={index} todo={todo} {...override("todo", "todo" + index)} />)}
		        
	</div>;
};

export default atomize(ToDoList)({
	name: "ToDoList",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "ToDoList — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	},
	overrides
});