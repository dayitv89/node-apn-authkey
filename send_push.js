const Config = {
	token: {
		key: './<your_file_name_like:your_p8_file_downloaded_from_apple.p8>',
		keyId: '<your_p8_key_id>',
		teamId: '<your_apple_team_id>'
	},
	production: false,
	appId: '<App_id_like:com.example.app>',
	deviceToken: '<app_push_token>',
	badge: 3,
	alert: {
		title: 'my title',
		subtitle: 'my subtitle',
		body: '\uD83D\uDCE7 \u2709 my body text message \u2709'
	},
	payload: { messageFrom: 'This is message payload.' },
	expire: Math.floor(Date.now() / 1000) + 3600, // Expires 1 hour from now.
	sound: 'ping.aiff'
};

const apn = require('apn');
const options = {
	token: Config.token,
	production: Config.production
};
const apnProvider = new apn.Provider(options);
const note = new apn.Notification();
note.topic = Config.appId;
note.expiry = Config.expire;
note.badge = Config.badge;
note.sound = Config.sound;
note.alert = Config.alert;
note.payload = Config.payload;

apnProvider
	.send(note, Config.deviceToken)
	.then(result => {
		console.log('success');
		console.log(JSON.stringify(result, null, 2));
		process.exit(0);
	})
	.catch(error => {
		console.error('error');
		console.error(JSON.stringify(error, null, 2));
		process.exit(0);
	});
