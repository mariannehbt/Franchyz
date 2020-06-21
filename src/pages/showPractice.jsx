import React, {useState, useEffect} from "react";
import {useParams} from "react-router-dom";

function PracticeShow() {
	let {practice_id} = useParams();
	console.log("slug" + practice_id);
	const [currentPractice, setCurrentPractice] = useState(null);

	useEffect(() => {
		setCurrentPractice(practice_id);
	});
	return <></>;
}

export default PracticeShow;
