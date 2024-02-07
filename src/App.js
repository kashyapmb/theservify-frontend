import { Box, Button } from "@mui/material"
import Header from "./components/Header"
import Slider from "./components/Slider"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Home from "./Home"
import PageNotFound from "./components/PageNotFound"
import Service from "./components/Service"
import Signup from "./components/serviceProvider/Signup"
import Login from "./components/serviceProvider/Login"

function App() {
	return (
		<>
			<Router>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/service" element={<Service />} />
					<Route path="/providerlogin" element={<Login />} />
					<Route path="/providersignup" element={<Signup />} />
					<Route path="*" element={<PageNotFound />} />
				</Routes>
			</Router>
		</>
	)
}

export default App
