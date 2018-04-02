# node-apn-authkey
Apple push notifications using auth key (.p8)

#### Update this code and good to go
```javascript
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
```

#### Setup and run this scripts
```shell
/// run this command to install dependencies
$ npm install

/// run this command to send push notification
$ npm start
or
$ node send_push.js
```
