import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import React from "react";
import Typical from "react-typical";

const colorGreen = green[400];
const colorRed = red[300];
const colorBlue = blue[300];

const Got: React.FC = () => {
	const handleDownload = () => {
		const fileUrl = "/Raphael_CV.pdf";

		const link = document.createElement("a");
		link.href = fileUrl;
		link.setAttribute("download", "Raphael_CV.pdf");
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

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
					Bio
				</Typography>
			</Stack>

			<Card sx={{ maxWidth: 650, mt: 2 }} variant="outlined">
				<CardContent>
					<Stack direction="row">
						<Typography>Hi.. I'm Raphael a </Typography>&nbsp;
						<Typography color={colorBlue}> {"<Developer /> "}</Typography>
						&nbsp;
					</Stack>
					<Stack
						direction="row"
						alignItems="center"
						sx={{ marginBottom: -1, marginTop: -1 }}
					>
						<Typography>with experience in </Typography> &nbsp;
						<Typical
							steps={[
								"designing",
								1000,
								"developing",
								1000,
								"implementing",
								1000,
							]}
							loop={2}
						/>
						&nbsp;
						<Typography>innovative software solutions.</Typography>
					</Stack>
					<Stack direction="row">
						<Typography>currently with</Typography>&nbsp;
						<Avatar
							alt="appcitystudios"
							src="appcity.jpg"
							sx={{ width: 25, height: 25 }}
						/>
						<Typography>AppCityStudios. </Typography>
					</Stack>
					<Button
						variant="contained"
						startIcon={<CloudDownloadIcon />}
						onClick={handleDownload}
						size="small"
						color="primary"
						sx={{ mt: 1 }}
					>
						Get Resume
					</Button>
				</CardContent>
			</Card>
		</>
	);
};
export default Got;
