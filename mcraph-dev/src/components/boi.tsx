import { Card, CardContent, Stack, Typography } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";

const colorGreen = green[400];
const colorRed = red[300];
const colorBlue = blue[300];

function Boi() {
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
					BOI
				</Typography>
			</Stack>

			<Card sx={{ maxWidth: 500, mt: 2 }}>
				<CardContent>
					<Stack direction="row">
						<Typography>HI... I'm Raphael a </Typography>&nbsp;
						<Typography color={colorBlue}> &lt;Developer /&gt; </Typography>
						&nbsp;
						<Typography>from Ghana.</Typography>
					</Stack>
					<Stack direction="row">
						<Typography>With AppCityStudios</Typography>
					</Stack>
				</CardContent>
			</Card>
		</>
	);
}

export default Boi;
