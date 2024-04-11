import { Card, CardContent, Chip, Stack, Typography } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";

import React from "react";

const colorGreen = green[400];
const colorRed = red[300];
const colorBlue = blue[300];

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
					{programmingLanguages.map((language, index) => (
						<Chip
							key={index}
							label={language}
							// Add any additional props or styles as needed
							style={{ marginRight: 5, marginBottom: 5 }}
						/>
					))}
				</CardContent>
			</Card>
		</>
	);
};
export default Skills;
