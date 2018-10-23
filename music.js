const GoogleHomeNotifier = require('@shooontan/google-home-notifier');
 
const options = {
  ip: '192.168.1.45',
  lang: 'fr-FR'
};

const [mp3Url = null] = process.argv;

if(!mp3Url) throw new Error('MP3 url required');

(async () => {
  const notifier = GoogleHomeNotifier(options);
  await notifier.create();
 
  await notifier.play(mp3Url);
})();
