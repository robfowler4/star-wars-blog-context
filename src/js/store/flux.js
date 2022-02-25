const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			planets: [],
			characters: [],
			favorites: [],
			// demo: [
			// 	{
			// 		title: "FIRST",
			// 		background: "white",
			// 		initial: "white"
			// 	},
			// 	{
			// 		title: "SECOND",
			// 		background: "white",
			// 		initial: "white"
			// 	}
			// ],
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadData: (url, params) => {
				fetch(url)
					.then((response) => {
						if (!response.ok) {
							throw Error(response.statusText);
						}
						return response.json();
					})
					.then((data) => {
						console.log("data", data);
						setStore({ [params]: data.results });
					})
					.catch((error) => {
						console.log("error", error);
					});
			},
			getFav: (favName) => {

				let newFavorites = getStore().favorites;

					let found = newFavorites.find(item => item == favName);

					if (found){
						newFavorites = newFavorites.filter((item) => item != favName)}
					else {
						newFavorites = [...newFavorites, favName]
					}
					setStore({favorites: newFavorites});
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;
