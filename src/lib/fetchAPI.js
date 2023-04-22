function fetchGetAPI (url, setState, setLoading) {

	const headersreq = {'Content-Type': 'application/x-www-form-urlencoded',
						'Upgrade-Insecure-Requests': '1',};
	var api = fetch(url, {
		method: 'GET',
		mode: 'cors',
		credentials: 'include',
		headers: headersreq,
		redirect: 'follow',
		referrerPolicy: 'no-referrer',
	})
		.then((response) => 
			response.json())
		.then((body) => {
			console.log("response", body.response);
			setState(body.response);
			setLoading(false);
		});
};

export default fetchGetAPI
