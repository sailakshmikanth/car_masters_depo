import { Route, Routes, Navigate } from "react-router-dom";
import Main from "./components/Main";
import Signup from "./components/Singup";
import Login from "./components/Login";
import Benz from './components/Main/Benz';
import RollsRoyce from './components/Main/RollsRoyce';
import Bugatti from './components/Main/Bugatti';
import Lamborghini from './components/Main/Lamborghini';
import BMW from './components/Main/BMW';
import Konenigsegg from './components/Main/Konenigsegg';
import MercedesEClassPage from "./components/Main/Mercedes-BenzE-Class";
import Mercedes from "./components/Main/Mercedes-BenzGLC";
import Mercedes1 from "./components/Main/Mercedes-BenzS-Class";
import Mercedes2 from "./components/Main/Mercedes-BenzEQS";
import Mercedes3 from "./components/Main/Mercedes-Benz Maybach GLS";
function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
			<Route path="/Benz" exact element={<Benz />} />
			<Route path="/RollsRoyce" exact element={<RollsRoyce />} />
			<Route path="/Bugatti" exact element={<Bugatti />} />
			<Route path="/Lamborghini" exact element={<Lamborghini />} />
			<Route path="/BMW" exact element={<BMW />} />
			<Route path="/Konenigsegg" exact element={<Konenigsegg />} />
			<Route path="/benz/Mercedes-BenzE-Class" exact element={< MercedesEClassPage/>} />
			<Route path="/benz/Mercedes-BenzGLC" exact element={< Mercedes/>} />
		    <Route path="/benz/Mercedes-BenzS-Class" exact element={< Mercedes1/>} />
			<Route path="/benz/Mercedes-BenzEQS" exact element={< Mercedes2/>} />
			<Route path="/benz/Mercedes-BenzMaybachGLS" exact element={< Mercedes3/>} />
		</Routes>
	);
}

export default App;
