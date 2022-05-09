import React, { useEffect, useState } from "react";
import "./App.css";
import Footer from "./components/Footer";
import User from "./components/User";
import { useStyles } from "./styles";
import { useDispatch, useSelector } from "react-redux";
import { IRootReducer } from "./redux/rootReducer";
import { getUsersRequest } from "./redux/users/actions";
import { IUser } from "./interfaces/user";

const App: React.FC = () => {
	const [arr, setArr] = useState<any>([]);
	const dispatch = useDispatch();
	const { users, loading } = useSelector((store: IRootReducer) => store.users);

	useEffect(() => {
		dispatch(getUsersRequest());
	}, []);

	useEffect(() => {
		setArr(users);
	}, [users]);

	const styles = useStyles();
	const x = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
	return (
		<main>
			<div className={styles.container}>
				{arr.map((user: IUser, index: number) => (
					<User key={index} data={user} />
				))}
			</div>
			<Footer />
		</main>
	);
};

export default App;
