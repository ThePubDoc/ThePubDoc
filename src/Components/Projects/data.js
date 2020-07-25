export const projects = [
	{
		name: 'Coub',
		description:
			'A replica of coub.com with the functionality of trimming, looping and adding audios to videos. The app is made with ReactJS having REST API written in NodeJS.',
		url: 'https://github.com/thepubdoc/coub',
		image:
			'https://raw.githubusercontent.com/thepubdoc/thepubdoc/master/src/Components/Projects/Images/coub.png',
		tech: ['NodeJS', 'Express', 'ReactJS', 'MongoDB', 'ffmpeg', 'AWS S3'],
	},
	{
		name: 'Medium Crawler',
		description:
			'A web app to crawl medium.com by tags. Crawling time for blogs was decreased for next time from 4000-5000ms to about 2-4 ms by saving them to MongoDB collection.',
		url: 'https://github.com/ThePubDoc/medium-crawler',
		image:
			'https://raw.githubusercontent.com/thepubdoc/thepubdoc/master/src/Components/Projects/Images/medium.png',
		tech: ['NodeJS', 'Express', 'MongoDB', 'Cheerio'],
	},
	{
		name: 'Email Client',
		description:
			'A web app to send bulk mails to multiple contacts. Contacts can be uploaded from .csv file. The mailer is designed using AWS SES service and REST API is written in NodeJS.',
		url: 'https://github.com/ThePubDoc/email-client',
		image:
			'https://raw.githubusercontent.com/thepubdoc/thepubdoc/master/src/Components/Projects/Images/email-client.png',
		tech: ['NodeJS', 'Express', 'MongoDB', 'AWS SES'],
	},
];
