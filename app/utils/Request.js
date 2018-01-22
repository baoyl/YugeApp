const syncRequest = require('sync-request');

require("whatwg-fetch");

const checkStatus = response => {
	if (response.status >= 200 && response.status < 300) {
		return response
	} else {
		const error = new Error(response.statusText)
		error.response = response
		throw error
	}
};

const parseJSON = response => {
	return response.json()
};

const async = async(url, data) => {
	let options = {
		credentials : 'include',
		headers : {
			"content-type" : "application/x-www-form-urlencoded;charset=utf-8"
		}
	};
	options.method = "post";
	let body = "data=" + JSON.stringify(data);
	if (body) {
		options.body = body;
    }
	let response = fetch(url, options);
	return response.then(checkStatus).then(parseJSON);

};

module.exports = {
	async : async
};