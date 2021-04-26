import React, { useContext } from 'react';
import atomize from "@quarkly/atomize";
import { Context } from './Context';
import { useOverrides } from "@quarkly/components";
import { Icon, Text, Box } from "@quarkly/widgets";
import { MdDone, MdClose, MdStar } from "react-icons/md";
const overrides = {
	"box": {
		"kind": "Box",
		"props": {
			"text-transform": "uppercase",
			"color": "--dark1",
			"text-align": "center",
			"margin": "16px 0px 0px 0px",
			"font": "--headline3"
		}
	},
	"icon1": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdDone
		}
	},
	"icon2": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdClose
		}
	},
	"icon3": {
		"kind": "Icon",
		"props": {
			"category": "md",
			"icon": MdStar
		}
	},
	"span": {
		"kind": "Text"
	},
	"span1": {
		"kind": "Text",
		"props": {
			"text-transform": "uppercase",
			"color": "green"
		}
	},
	"span2": {
		"kind": "Span",
		"props": {
			"text-transform": "uppercase",
			"color": "yellow"
		}
	},
	"btnGroup": {
		"kind": "Box"
	}
};

const ToDo = ({
	todo,
	index,
	...props
}) => {
	const {
		dispatch
	} = useContext(Context);

	const onDelete = () => dispatch({
		type: "deleteTask",
		index
	});

	const {
		override,
		children,
		rest
	} = useOverrides(props, overrides);
	return <Box {...rest}>
		            
		<Text {...override("span", todo.complete && "span1", todo.important && "span2")}>
			{todo.task}
		</Text>
		            
		<Box {...override("btnGroup")}>
			                
			<Icon {...override("icon1")} onClick={() => dispatch({
				type: "doneTask",
				index
			})} />
			 
                
			<Icon {...override("icon2")} onClick={onDelete} />
			 
                
			<Icon {...override("icon3")} onClick={() => dispatch({
				type: "importantTask",
				index
			})} />
			                   

            
		</Box>
		            
        
	</Box>;
};

export default atomize(ToDo)({
	name: "ToDo",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "ToDo — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	},
	overrides
});