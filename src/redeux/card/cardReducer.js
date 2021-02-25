import path from '../../components/path/path';

const INNITIAL_STATE = [
	{
		imgSrc: `${path}/images/blog/blog-1.jpg`,
		subtitle: 'DRIVING TIPS',
		title: "Driving instructor caught without driver's license during lesson",
		timeStamp: 'Nov 18, 2019 03 Comment',
	},
	{
		imgSrc: `${path}/images/blog/blog-2.jpg`,
		subtitle: 'DRIVING TIPS',
		title: "Driving instructor caught without driver's license during lesson",
		timeStamp: 'Nov 18, 2019 03 Comment',
	},
	{
		imgSrc: `${path}/images/blog/blog-3.jpg`,
		subtitle: 'DRIVING TIPS',
		title: "Driving instructor caught without driver's license during lesson",
		timeStamp: 'Nov 18, 2019 03 Comment',
	},
	{
		imgSrc: `${path}/images/blog/blog-4.jpg`,
		subtitle: 'DRIVING TIPS',
		title: "Driving instructor caught without driver's license during lesson",
		timeStamp: 'Nov 18, 2019 03 Comment',
	},
	{
		imgSrc: `${path}/images/blog/blog-5.jpg`,
		subtitle: 'DRIVING TIPS',
		title: "Driving instructor caught without driver's license during lesson",
		timeStamp: 'Nov 18, 2019 03 Comment',
	},
	{
		imgSrc: `${path}/images/blog/blog-6.jpg`,
		subtitle: 'DRIVING TIPS',
		title: "Driving instructor caught without driver's license during lesson",
		timeStamp: 'Nov 18, 2019 03 Comment',
	},
];

const cardReducer = (state = INNITIAL_STATE, action) => {
	switch (action.type) {
		default:
			return state;
	}
};

export default cardReducer;
