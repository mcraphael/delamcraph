import { Card, CardContent, Stack, Typography } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";
import React from "react";

const colorGreen = green[400];
const colorRed = red[300];
const colorBlue = blue[300];

const Footer: React.FC = () => {
	return (
		<>
			<Card sx={{ maxWidth: 650, mb: 2 }} variant="outlined">
				<CardContent>
					<Stack direction="row">
						<Typography color={colorGreen}>Made with ❤️</Typography>
						<Typography color={colorRed}> © 🧑‍💻 2024. </Typography>
						<Typography color={colorBlue}>All Rights Reserved. </Typography>
					</Stack>
				</CardContent>
			</Card>
		</>
	);
};
export default Footer;
