// helps parsing the DOMs for file names

export function chartType(url){
	if (url === "https://maimaidx-eng.com/maimai-mobile/img/music_standard.png"){
		return "Standard";
	}
	else if (url === "https://maimaidx-eng.com/maimai-mobile/img/music_dx.png"){
		return "DX";
	}
	else{
		console.log("invalid chart type url")
		return " ";
	}
}

export function chartDifficulty(url){
	if (url === "https://maimaidx-eng.com/maimai-mobile/img/diff_remaster.png"){
		return "ReMaster";
	}
	else if (url === "https://maimaidx-eng.com/maimai-mobile/img/diff_master.png"){
		return "Master";
	}
	else if (url === "https://maimaidx-eng.com/maimai-mobile/img/diff_expert.png"){
		return "Expert";
	}
	else if (url === "https://maimaidx-eng.com/maimai-mobile/img/diff_advanced.png"){
		return "Advanced";
	}
	else if (url === "https://maimaidx-eng.com/maimai-mobile/img/diff_basic.png"){
		return "Basic";
	}
	else{
		console.log("invalid difficulty url")
		return " ";
	}
}