import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import BadgeAvatars from "./avatar";

function Header() {
	return (
		<Box sx={{ flexGrow: 1 }}>
			<AppBar position="static">
				<Toolbar>
					<Typography sx={{ flexGrow: 1 }}>
						Dela McRaph Os [Version 1.10.145.0.0] All Right Reserved.
					</Typography>
					<BadgeAvatars />
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export default Header;
