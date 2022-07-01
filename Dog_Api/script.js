// const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
// const catBtn = document.getElementById('change-cat');
// const catImg = document.getElementById('cat');


// const getCats = async () => {
//     try {
//         const data = await fetch(BASE_URL);
//         const json = await data.json();
//         return json.webpurl;
//     } catch (e) {
//         console.log(e.message);
//     }
// };

// const loadImg = async () => {
//     catImg.src = await getCats();
// };

// catBtn.addEventListener('click', loadImg);

// loadImg();

const BASE_URL_CAT = 'https://aws.random.cat/meow?ref=apilist.fun';

const getCats = async () => {
	try {
		const data = await fetch(BASE_URL_CAT);
		const json = await data.json();
		return json.file;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImgcat = async () => {
	const img = document.getElementById('cat');
	img.src = await getCats();
};

loadImgcat();

const btncat = document.getElementById('change-cat');
btncat.addEventListener('click', loadImgcat);


//------------------------------------------
const BASE_URL_DOG = 'https://dog.ceo/api/breeds/image/random';


const getDogs = async () => {
	try {
		const data1 = await fetch(BASE_URL_DOG);
		const json1 = await data1.json();
		return json1.message;
	} catch (e) {
		console.log(e.message);
	}
};

const loadImgdog = async () => {
	const img = document.getElementById('dog');
	img.src = await getDogs();
};

loadImgdog();

const btndog = document.getElementById('change-dog');
btndog.addEventListener('click', loadImgdog);