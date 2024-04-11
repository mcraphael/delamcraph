import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/header";
import StartTerminal from "./components/startTerminal";
import Bio from "./components/bio";
import Projects from "./components/projects";
import Connect from "./components/connect";
import Skills from "./components/skills";

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
			<Bio />
			<Connect />
			<Projects />
			<Skills />
		</ThemeProvider>
	);
}

export default App;
