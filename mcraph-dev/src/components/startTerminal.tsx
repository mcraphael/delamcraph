import { Stack, Typography, styled } from "@mui/material";
import { blue, green, red } from "@mui/material/colors";
import RocketLaunchOutlinedIcon from "@mui/icons-material/RocketLaunchOutlined";

const colorGreen = green[400];
const colorRed = red[300];
const colorBlue = blue[300];

const StyledBadge = styled(RocketLaunchOutlinedIcon)(() => ({
	animation: "ripple 1.2s infinite ease-in",
	color: colorBlue,
	fontSize: "15px",
	marginLeft: 20,
	marginTop: 10,
}));

function StartTerminal() {
	return (
		<div>
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
					dela run init
				</Typography>
			</Stack>

			<StyledBadge>
				<RocketLaunchOutlinedIcon></RocketLaunchOutlinedIcon>
			</StyledBadge>
		</div>
	);
}

export default StartTerminal;
