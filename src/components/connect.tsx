import { Card, CardContent, Grid, Stack, Typography } from "@mui/material";
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
					Connect With Me
				</Typography>
			</Stack>

			<Card variant="outlined" sx={{ maxWidth: 650, mt: 2 }}>
				<CardContent>
					<Grid container alignItems="center">
						<Grid item xs={12} sm={6}>
							<Grid container alignItems="center">
								<Grid item>
									<IconButton
										color="inherit"
										aria-label="Email"
										href="mailto:1delamcraph@gmail.com"
										target="_blank"
										rel="noopener noreferrer"
									>
										<EmailIcon />
									</IconButton>
								</Grid>
								<Grid item>
									<Link
										href="mailto:1delamcraph@gmail.com"
										color="secondary"
										target="_blank"
										rel="noopener noreferrer"
										underline="none"
									>
										1delamcraph@gmail.com
									</Link>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Grid container alignItems="center">
								<Grid item>
									<IconButton
										color="inherit"
										aria-label="GitHub Repository"
										href="https://github.com/mcraphael"
										target="_blank"
										rel="noopener noreferrer"
									>
										<GitHubIcon />
									</IconButton>
								</Grid>
								<Grid item>
									<Link
										href="https://github.com/mcraphael"
										color="secondary"
										target="_blank"
										rel="noopener noreferrer"
										underline="none"
									>
										mcraphael
									</Link>
								</Grid>
							</Grid>
						</Grid>
						<Grid item xs={12}>
							<Grid container alignItems="center">
								<Grid item>
									<IconButton
										color="inherit"
										aria-label="Twitter Profile"
										href="https://x.com/DelaMcRaph?t=vvX3KdoPpW802BpO-qicFQ&s=09"
										target="_blank"
										rel="noopener noreferrer"
									>
										<TwitterIcon />
									</IconButton>
								</Grid>
								<Grid item>
									<Link
										href="https://x.com/DelaMcRaph?t=vvX3KdoPpW802BpO-qicFQ&s=09"
										color="secondary"
										target="_blank"
										rel="noopener noreferrer"
										underline="none"
									>
										DelaMcRaph
									</Link>
								</Grid>
							</Grid>
						</Grid>
					</Grid>
				</CardContent>
			</Card>
		</>
	);
};
export default Connect;
