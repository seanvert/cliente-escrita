import './App.css';
import Main from "./layouts/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Escrita from "./pages/Escrita";
import Trilha from "./pages/Trilha";
import Login from "./pages/Login";
import NaoEncontrado from "./pages/NaoEncontrado";
import SignUp from "./pages/SignUp";
import {AuthProvider} from "./contexts/AuthContext";

function App() {
	return (
			<AuthProvider> 
			<BrowserRouter>
			<Routes>
			<Route path="/" element={<Main />}>
			<Route index element={<Home />} />
			<Route path="escrita" element={<Escrita />} />
			<Route path="trilha" element={<Trilha />} />
			<Route path="login" element={<Login />} />
			<Route path="signup" element={<SignUp />} />
			<Route path="*" element={<NaoEncontrado />} />
			</Route>
			</Routes>
			</BrowserRouter>
			</AuthProvider>
	);
}

export default App;
