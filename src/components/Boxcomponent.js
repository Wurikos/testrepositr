import React from "react";
import { useOverrides } from "@quarkly/components";
import { Box } from "@quarkly/widgets";
const defaultProps = {
	"width": "500px",
	"height": "500px",
	"color": "#871a1a",
	"background": "#c65555"
};
const overrides = {};

const Boxcomponent = props => {
	const {
		children,
		rest
	} = useOverrides(props, overrides, defaultProps);
	return <Box {...rest}>
		{children}
	</Box>;
};

Object.assign(Boxcomponent, { ...Box,
	defaultProps,
	overrides
});
export default Boxcomponent;