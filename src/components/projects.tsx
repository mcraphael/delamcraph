import { Card, CardContent, Stack, Typography } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";

import React from "react";

const colorGreen = green[400];
const colorRed = red[300];
const colorBlue = blue[300];

const Projects: React.FC = () => {
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
					Projects
				</Typography>
			</Stack>

			<Card sx={{ maxWidth: 650, mt: 2 }} variant="outlined">
				<CardContent>
					<Typography>Building Somewhere! 🧑‍💻 </Typography>
					&nbsp;
				</CardContent>
			</Card>
		</>
	);
};
export default Projects;
