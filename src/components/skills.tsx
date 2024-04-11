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
		"React",
		"React Native",
		"Python",
		"Git",
		"NextJs",
		"MUI",
	];
	return (
		<>
			<Stack direction="row" spacing={0.2} mt={4}>
				<Typography color={colorBlue} variant="body1" fontWeight="bold">
					C
				</Typography>
				<Typography color={colorRed} variant="body1">
					:
				</Typography>
				<Typography color={colorRed} variant="body1">
					\
				</Typography>
				<Typography color={colorBlue} variant="body1">
					Users
				</Typography>
				<Typography color={colorRed} variant="body1">
					\
				</Typography>
				<Typography color={colorBlue} variant="body1">
					McRaph
				</Typography>
				<Typography variant="body1"> &gt; </Typography>&nbsp;
				<Typography color={colorGreen} variant="body1" fontWeight="bold">
					Tech Stack
				</Typography>
			</Stack>

			<Card sx={{ maxWidth: 650, mt: 2 }} variant="outlined">
				<CardContent>
					{programmingLanguages.map((language, index) => (
						<Chip
							key={index}
							label={language}
							style={{ marginRight: 5, marginBottom: 5 }}
						/>
					))}
				</CardContent>
			</Card>
		</>
	);
};
export default Skills;
