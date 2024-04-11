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
