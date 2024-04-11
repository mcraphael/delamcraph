import {
	Box,
	Card,
	CardContent,
	Grid,
	Skeleton,
	Stack,
	Typography,
} from "@mui/material";
import { blue, green, grey, red } from "@mui/material/colors";

import React, { useEffect, useState } from "react";
import axios from "axios";

interface House {
	name: string;
	slug: string;
}

interface Character {
	name: string;
	slug: string;
	house: House;
}

interface Quote {
	sentence: string;
	character: Character;
}
const colorGreen = green[400];
const colorRed = red[300];
const colorBlue = blue[300];
const colorGrey = grey[800];

const Got: React.FC = () => {
	const [quote, setQuote] = useState<Quote | null>(null);
	const [loading, setLoading] = useState<boolean>(false);

	useEffect(() => {
		const fetchQuoteAfterDelay = () => {
			setTimeout(() => {
				fetchRandomQuote();
			}, 3 * 1000);
		};

		fetchRandomQuote();
		fetchQuoteAfterDelay();
	}, []);

	const fetchRandomQuote = async () => {
		setLoading(true);
		try {
			const response = await axios.get<Quote>(
				"https://api.gameofthronesquotes.xyz/v1/random"
			);
			setQuote(response.data);
			console.log(response.data);
		} catch (error) {
			console.error("Error fetching quote:", error);
		} finally {
			setLoading(false);
		}
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
				<Typography
					color={colorGreen}
					variant="body1"
					fontWeight="bold"
					textAlign="left"
				>
					Movies🍿🎬, GOT Quotes
				</Typography>
			</Stack>

			<Card sx={{ maxWidth: 650, mt: 2 }} variant="outlined">
				<CardContent>
					{loading ? (
						<Skeleton animation="wave" />
					) : (
						<>
							<Box>
								<Grid container justifyContent="center">
									<Grid item xs={12} sm={8} md={6}>
										<Box bgcolor={colorGrey} p={2} borderRadius={2}>
											<Box display="flex" flexDirection="column">
												<Typography>"{quote?.sentence}"</Typography>
												<Typography
													color={colorBlue}
													sx={{ alignSelf: "flex-end", mt: 2 }}
													variant="body2"
												>
													{quote?.character.name}
												</Typography>
												<Typography
													color={colorRed}
													sx={{ alignSelf: "flex-end" }}
													variant="body2"
												>
													{quote?.character.house.name}
												</Typography>
											</Box>
										</Box>
									</Grid>
								</Grid>
							</Box>
						</>
					)}
				</CardContent>
			</Card>
		</>
	);
};
export default Got;
