import { Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";

import React from "react";

const colorGreen = green[400];
const colorRed = red[300];
const colorBlue = blue[300];

import { Icon } from "@mui/material";
import TypeScriptIcon from "./icons/typescript.svg"; // Import your SVG files for each language
import JavaScriptIcon from "./icons/javascript.svg";
// Import icons for other languages as needed

interface LanguageChipProps {
	language: string;
}

const LanguageChip: React.FC<LanguageChipProps> = ({ language }) => {
	const getLanguageIcon = (language: string) => {
		switch (language.toLowerCase()) {
			case "typescript":
				return <TypeScriptIcon />;
			case "javascript":
				return <JavaScriptIcon />;
			// Add cases for other languages
			default:
				return null;
		}
	};
	const languageIcon = getLanguageIcon(language);

	return (
		<Chip
			icon={languageIcon || undefined}
			label={language}
			variant="outlined"
			color="primary"
			style={{ margin: "0.5rem" }}
		/>
	);
};
const Skills: React.FC = () => {
	const programmingLanguages: string[] = [
		"TypeScript",
		"JavaScript",
		"Python",
		"Java",
		"C#",
		"Ruby",
		"Go",
		"Swift",
		"Kotlin",
		"Rust",
		"PHP",
	];
	return (
		<>
			<Stack direction="row" spacing={0.2} mt={2}>
				<Typography color={colorBlue} variant="h6">
					C
				</Typography>
				<Typography color={colorRed} variant="h6">
					:
				</Typography>
				<Typography color={colorRed} variant="h6">
					\
				</Typography>
				<Typography color={colorBlue} variant="h6">
					Users
				</Typography>
				<Typography color={colorRed} variant="h6">
					\
				</Typography>
				<Typography color={colorBlue} variant="h6">
					McRaph
				</Typography>
				<Typography variant="h6"> &gt; </Typography>&nbsp;
				<Typography color={colorGreen} variant="h6">
					Tech Stack
				</Typography>
			</Stack>

			<Card sx={{ maxWidth: 650, mt: 2 }} variant="outlined">
				<CardContent>
					<div>
						{programmingLanguages.map((language, index) => (
							<LanguageChip key={index} language={language} />
						))}
					</div>
				</CardContent>
			</Card>
		</>
	);
};
export default Skills;
