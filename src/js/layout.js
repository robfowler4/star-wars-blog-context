import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import ScrollToTop from "./component/scrollToTop";
import injectContext from "./store/appContext";

import { Home } from "./views/home";
import { Demo } from "./views/demo";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import { Details } from "./views/details";

//create your first component
const Layout = () => {
	//the basename is used when your project is published in a subdirectory and not in the root of the domain
	// you can set the basename on the .env file located at the root of this project, E.g: BASENAME=/react-hello-webapp/
	const basename = process.env.BASENAME || "";

	return (
		<div style={{ backgroundImage: `url(https://wallpapercave.com/wp/wp2572362.jpg)`, bbackgroundRepeat: "no-repeat", backgroundSize: "contain" }}>

			<BrowserRouter basename={basename}>
				<ScrollToTop>
					<Navbar />
					<Switch>
						<Route exact path="/" component={Home} />

						<Route exact path="/demo" component={Demo} />

						<Route exact path="/details/:type/:index" component={Details} />

						<Route>
							<h1>Not found!</h1>
						</Route>
					</Switch>
					<Footer />
				</ScrollToTop>
			</BrowserRouter>

		</div>
	);
};

export default injectContext(Layout);
