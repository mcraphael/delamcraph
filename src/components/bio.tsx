import { Button, Card, CardContent, Stack, Typography } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";
import Avatar from "@mui/material/Avatar";
import CloudDownloadIcon from "@mui/icons-material/CloudDownload";
import React from "react";
import Typical from "react-typical";

const colorGreen = green[400];
const colorRed = red[300];
const colorBlue = blue[300];

const Bio: React.FC = () => {
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
					Bio
				</Typography>
			</Stack>

			<Card sx={{ maxWidth: 650, mt: 2 }} variant="outlined">
				<CardContent>
					<Stack direction="column" spacing={1}>
						<Typography>
							Hi.. I'm Raphael, a
							<Typography color="primary" component="span">
								{" <Developer /> "}
							</Typography>
						</Typography>
						<Typography>
							with experience in
							<Typical
								steps={[
									" designing",
									1000,
									" developing",
									1000,
									" implementing",
									1000,
								]}
								loop={3}
								wrapper="span"
							/>
							innovative software solutions.
						</Typography>
						<Stack direction="row" alignItems="center">
							<Typography>Currently with</Typography>
							<Avatar
								alt="appcitystudios"
								src="appcity.jpg"
								sx={{ width: 25, height: 25, ml: 1 }}
							/>
							<Typography>AppCityStudios.</Typography>
						</Stack>
						<Button
							variant="contained"
							startIcon={<CloudDownloadIcon />}
							onClick={handleDownload}
							size="small"
							color="primary"
							sx={{ mt: 2, alignSelf: "flex-start" }}
						>
							Get Resume
						</Button>
					</Stack>
				</CardContent>
			</Card>
		</>
	);
};
export default Bio;
