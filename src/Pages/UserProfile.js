import React from "react";
import { useParams } from "react-router-dom";

const UserProfile = () => {
	let { username } = useParams();
	return <div>This is a Profile Page for {username}</div>;
};

export default UserProfile;
