import * as utils from "./filenameUtils.js"

// filename generated will be as follows: song_title - chart_difficulty - chart_type
export function generateFilename(imageUrl){

	// format the imageUrl
	const img_element = document.querySelector(`img[src="${imageUrl}"]`);

	// find the parent div "m_10 p_5 f_0" of the image
	const image_container = img_element.closest('.m_10.p_5.f_0');

	// array to collect the needed infos for filenaming
	const filename_datas = [];

	if (image_container){
		console.log("am inside thhe if statement");
		// find the needed infos for filename
		const song_title_element = 	image_container.querySelector('[class="black_block w_430 m_3 m_b_5 p_5 t_l f_15 break"]');
		const song_title = song_title_element ? song_title_element.textContent.trim() : "";
		let chart_difficulty = image_container.querySelector('[class="h_16 f_l"]');
		let chart_type = image_container.querySelector('[class="music_kind_icon f_r"]');

		// pass these to the filenameUtils for easier parsing
		if (chart_difficulty){
			chart_difficulty = chart_difficulty.getAttribute('src');
			chart_difficulty = utils.chartDifficulty(chart_difficulty);
		}

		if (chart_type){
			chart_type = chart_type.getAttribute('src');
			chart_type = utils.chartType(chart_type);
		}
		console.log(song_title, chart_difficulty, chart_type);

		// concatenate it into the array
		filename_datas.push(song_title);
		filename_datas.push(chart_difficulty);
		filename_datas.push(chart_type);
	}

	console.log("sent url: ", imageUrl, " collected: ", filename_datas);
	// finally make the filename
	const filename = filename_datas.join(' - ') + '.jpg';

	return filename
}