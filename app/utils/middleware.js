let REQUEST_ACTION_TYPE = "@@router/REQUEST-WITH-PROMISE";

let request = require("./Request");

let requestMiddleware = api => {
	return nextDispatch => {
		return action => {
			if (action.type == REQUEST_ACTION_TYPE) {
				let requestType = action.requestType || "async";
				let args = [ action.url, action.data || {} ];
				return request[requestType].apply(null, args).then(
						function(data) {
							return nextDispatch({
								type : action.syncType,
								data : data,
								url : action.url,
								param : action.data
							});
						});
			} else {
				return nextDispatch(action);

			}

		};

	};

};

exports.requestMiddleware = requestMiddleware;