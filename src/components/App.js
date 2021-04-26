import React, { useReducer } from 'react';
import atomize from "@quarkly/atomize";
import { useOverrides } from "@quarkly/components";
import { Context } from './Context';
import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';
const overrides = {
	"todolist": {
		"kind": "List"
	},
	"todoform": {
		"kind": "Box",
		"props": {
			"text-align": "center"
		}
	}
};
const initialState = [];

function reducer(state, action) {
	switch (action.type) {
		case 'addTask':
			return [...state, {
				id: state.length + 1,
				task: action.userInput,
				complete: false,
				important: false
			}];

		case 'deleteTask':
			return [...state].filter((item, i) => i !== action.index);

		case 'doneTask':
			return [...state].map((item, i) => {
				return i === action.index ? { ...item,
					complete: true
				} : item;
			});

		case 'importantTask':
			return [...state].map((item, i) => {
				return i === action.index ? { ...item,
					important: true
				} : item;
			});

		default:
			return state;
	}
}

const App = props => {
	const [state, dispatch] = useReducer(reducer, initialState);
	const {
		override
	} = useOverrides(props, overrides);
	return <div className="App" {...props}>
		 
        
		<Context.Provider value={{
			state,
			dispatch
		}}>
			              
			<ToDoForm {...override("todoform")}></ToDoForm>
			              
			<ToDoList {...override("todolist")}></ToDoList>
			              
          
        
		</Context.Provider>
		    
	</div>;
};

export default atomize(App)({
	name: "App",
	effects: {
		hover: ":hover"
	},
	normalize: true,
	mixins: true,
	description: {
		// paste here description for your component
		en: "App — my awesome component"
	},
	propInfo: {
		// paste here props description for your component
		yourCustomProps: {
			control: "input"
		}
	},
	overrides
});