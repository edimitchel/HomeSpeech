const GoogleHomeNotifier = require('@shooontan/google-home-notifier');
 
const options = {
  ip: '192.168.1.45',
  lang: 'fr-FR'
};

const [message = 'Hi !', lang = options.lang] = process.argv;

(async () => {
  const notifier = GoogleHomeNotifier(options);
  await notifier.create();
 
  await notifier.say(message, {
    lang,
  });
})();
