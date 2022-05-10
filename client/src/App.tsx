import React, { useCallback, useEffect } from "react";
import "./App.css";
import Footer from "./components/Footer";
import User from "./components/User";
import { useStyles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { IRootReducer } from "./redux/rootReducer";
import { getUsersRequest } from "./redux/users/actions";
import { IUser } from "./interfaces/user";

const App: React.FC = () => {
	const styles = useStyles();
	const dispatch = useDispatch();
	const { users, loading } = useSelector((state: IRootReducer) => state.users);

	const loadSurvayer = useCallback(async () => {
		dispatch(getUsersRequest());
	}, [dispatch]);

	useEffect(() => {
		loadSurvayer();
	}, []);

	return (
		<main>
			<div className={styles.container}>
				{users.map((user: IUser) => (
					<User key={user.id} data={user} />
				))}
			</div>
			<Footer />
		</main>
	);
};

export default App;
