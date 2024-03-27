import React from "react";

import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/header";
import StartTerminal from "./components/startTerminal";
import Boi from "./components/boi";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<CssBaseline />
			<Header />
			<StartTerminal />
			<Boi />
		</ThemeProvider>
	);
}

export default App;
