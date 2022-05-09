import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import User from "./components/User";
import { useStyles } from "./styles";

const App: React.FC = () => {
	const styles = useStyles();
	const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	return (
		<main>
			<div className={styles.container}>
				{x.map((_, index) => (
					<User key={index} />
				))}
			</div>
			<Footer />
		</main>
	);
};

export default App;
