import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

// https://dev.to/rafacdomin/autenticacao-no-react-com-context-api-e-hooks-4bia
export const AuthProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState(null);

	async function Login (loginInfo) {
		const response = postData(process.env.REACT_APP_AUTH_LOGIN,
								  loginInfo)
			  .then((response) => response.json())
			  .then((json) => {
				  setUser(json.user);
				  localStorage.setItem('@App:user',
									   JSON.stringify(json.user));
				  sessionStorage.setItem('@App:user',
										 JSON.stringify(json.user));
				  window.location.replace(process.env.REACT_APP_URL);
			  })
			  .catch((e) => console.log(e));
	}

	function Logout () {
		setUser(null);
		// TODO: limpar os cookies de sessão
		sessionStorage.removeItem('@App:user');
		localStorage.removeItem('@App:user');
	}

	useEffect(() => {
		const storagedUser = localStorage.getItem('@App:user');
		if (storagedUser) {
			setUser(JSON.parse(storagedUser));
		}
	}, []);
	
	return (
			<AuthContext.Provider value={{ signed: Boolean(user),
										   user, Login, Logout }}>
			{children}
		</AuthContext.Provider>
	);
};


async function postData(url = '', data = {}) {
	const headersreq = {'Content-Type': 'application/x-www-form-urlencoded',
						'Upgrade-Insecure-Requests': '1',};

	const response = await fetch(url, {
		method: 'POST',
		mode: 'cors',
		// cache: 'no-cache',
		credentials: 'include',
		headers: headersreq,
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
		body: new URLSearchParams(data)
	});

	return response;
}


export default AuthContext;
