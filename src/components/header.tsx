import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import BadgeAvatars from "./avatar";

function Header() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography sx={{ flexGrow: 1 }}>Dela Raphael</Typography>
					<BadgeAvatars />
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Header;
