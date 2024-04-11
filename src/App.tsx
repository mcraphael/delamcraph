import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Header from "./components/header";
import StartTerminal from "./components/startTerminal";
import Bio from "./components/bio";
import Projects from "./components/projects";
import Connect from "./components/connect";
import Skills from "./components/skills";
import Got from "./components/got";
import Footer from "./components/footer";
import { Analytics } from "@vercel/analytics/react";

const darkTheme = createTheme({
	palette: {
		mode: "dark",
	},
});

function App() {
	return (
		<ThemeProvider theme={darkTheme}>
			<Analytics />
			<CssBaseline />
			<Header />
			<StartTerminal />
			<Bio />
			<Connect />
			<Projects />
			<Skills />
			<Got />
			<Footer />
		</ThemeProvider>
	);
}

export default App;
