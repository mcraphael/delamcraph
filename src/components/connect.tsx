import { Card, CardContent, Stack, Typography } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";

import React from "react";

import { IconButton, Link } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import EmailIcon from "@mui/icons-material/Email";
import TwitterIcon from "@mui/icons-material/Twitter";

const colorGreen = green[400];
const colorRed = red[300];
const colorBlue = blue[300];

const Connect: React.FC = () => {
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
					Connect With Me
				</Typography>
			</Stack>

			<Card sx={{ maxWidth: 650, mt: 2 }} variant="outlined">
				<CardContent>
					{/* email, github, twitter */}
					<div>
						<IconButton
							color="inherit"
							aria-label="Email"
							href="mailto:1delamcraph@gmail.com"
							target="_blank"
							rel="noopener noreferrer"
						>
							<EmailIcon />
						</IconButton>
						<Link
							href="mailto:1delamcraph@gmail.com"
							color="secondary"
							target="_blank"
							rel="noopener noreferrer"
							underline="none"
						>
							1delamcraph@gmail.com
						</Link>

						<IconButton
							edge="end"
							color="inherit"
							aria-label="GitHub Repository"
							href="https://github.com/mcraphael"
							target="_blank"
							rel="noopener noreferrer"
						>
							<GitHubIcon />
						</IconButton>
						<Link
							href="https://github.com/mcraphael"
							color="secondary"
							target="_blank"
							rel="noopener noreferrer"
							style={{ marginLeft: "10px" }}
							underline="none"
						>
							mcraphael
						</Link>
						<IconButton
							color="inherit"
							aria-label="Twitter Profile"
							href="https://x.com/DelaMcRaph?t=vvX3KdoPpW802BpO-qicFQ&s=09"
							target="_blank"
							rel="noopener noreferrer"
						>
							<TwitterIcon />
						</IconButton>
						<Link
							href="https://x.com/DelaMcRaph?t=vvX3KdoPpW802BpO-qicFQ&s=09"
							color="secondary"
							target="_blank"
							rel="noopener noreferrer"
							underline="none"
						>
							DelaMcRaph
						</Link>
					</div>
				</CardContent>
			</Card>
		</>
	);
};
export default Connect;
