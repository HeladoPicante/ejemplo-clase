// const getData = async (url) => {
//     try {
//         const response = await fetch(url);

//         if(!response.oek){
//             throw new Error(`Response status: ${response.status}`);
//         }

//         const result = await response.json();
//         return result
//     } catch(error){
//         return error
//     };
// };

// export { getData };

const getData = async (url, params = {}) => {
	try {
		const searchParams = new URLSearchParams();
		Object.keys(params).forEach(key => {
			searchParams.append(key, params[key]);
		});

		const response = await fetch(`${url}?${searchParams}`);
		if (!response.ok) {
			throw new Error(`Response status: ${response.status}`);
		}

		const result = await response.json();
		return result;
	} catch (error) {
		return error;
	}
};

export { getData };