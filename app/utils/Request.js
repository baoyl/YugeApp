var syncRequest = require('sync-request');

require("whatwg-fetch");

var checkStatus = function(response) {
	if (response.status >= 200 && response.status < 300) {
		return response
	} else {
		var error = new Error(response.statusText)
		error.response = response
		throw error
	}
};

var parseJSON = function parseJSON(response) {
	return response.json()
};

var async = async(url, data) => {
	var options = {
		credentials : 'include',
		headers : {
			"content-type" : "application/x-www-form-urlencoded;charset=utf-8"
		}
	};
	options.method = "post";
	var body = "data=" + JSON.stringify(data);
	if (body) {
		options.body = body;
    }
	var response = fetch(url, options);
	return response.then(checkStatus).then(parseJSON);

};

module.exports = {
	async : async
};