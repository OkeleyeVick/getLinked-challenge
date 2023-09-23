import { RouterProvider, createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import RegisterComponent from "./pages/register";
import ContactComponent from "./pages/contact";
import LandingPageComponent from "./pages";

function App() {
	const router = createBrowserRouter(
		createRoutesFromElements(
			<Route>
				<Route path="/" Component={LandingPageComponent} />
				<Route path="/register" Component={RegisterComponent} />
				<Route path="/contact" Component={ContactComponent} />
			</Route>
		)
	);

	return <RouterProvider router={router} />;
}

export default App;
