import React, { createContext, useState, useEffect } from "react";

const AuthContext = createContext({});

// https://dev.to/rafacdomin/autenticacao-no-react-com-context-api-e-hooks-4bia
export const AuthProvider: React.FC = ({ children }) => {
	const [user, setUser] = useState(null);

	async function Login (loginInfo) {
		const response = postData("http://192.168.0.100:8000/auth/login",
								  loginInfo)
			  .then((response) => response.json())
			  .then((json) => {
				  console.log(json);
				  setUser(json.user);
				  localStorage.setItem('@App:user',
									   JSON.stringify(json.user));

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

// process.env.REACT_APP_AUTH_LOGIN


// Example POST method implementation:
async function postData(url = '', data = {}) {
	const headersreq = {'Content-Type': 'application/x-www-form-urlencoded',
						'Access-Control-Allow-Origin':'192.168.0.100:3000',
						'Access-Control-Allow-Methods':'POST,PATCH,OPTIONS',
						'Upgrade-Insecure-Requests': '1',};

	const response = await fetch(url, {
		method: 'POST',
		mode: 'cors',
		cache: 'no-cache',
		credentials: 'same-origin',
		headers: headersreq,
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
		body: new URLSearchParams(data)
	});
	return response;
}


export default AuthContext;
