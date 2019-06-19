import React from "react";
import Header from "./Header";
const Users = () => {
	return(
		<div>
		    <Header />
			<ul class="list-group">
				{["John","rony", "smith", "tonny", "michel"].map((user, ids) => {
					return <li key={ids} class="list-group-item">{user}</li>;
				})}
			</ul>
		</div>
	);
};
export default Users;