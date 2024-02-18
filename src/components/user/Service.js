import * as React from "react"
import { styled } from "@mui/material/styles"
import Box from "@mui/material/Box"
import Paper from "@mui/material/Paper"
import Grid from "@mui/material/Grid"
import LeftSidebar from "./LeftSidebar"
import MainArea from "./MainArea"

function Service() {
	return (
		<>
			<Box sx={{ height: "100vh" }}>
				<Grid container sx={{ height: "100%", background: "#adc5d6" }}>
					<Grid item xs={3}>
						<LeftSidebar />
					</Grid>
					<Grid item xs={9}>
						<MainArea />
					</Grid>
				</Grid>
			</Box>
		</>
	)
}

export default Service
