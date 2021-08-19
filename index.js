require('dotenv').config()


var moment = require('moment-timezone');
moment().tz(process.env.CRON_TIMEZONE).format();

var CronJob = require('cron').CronJob;
const path = require('path')

var P4Handler = require('perforce_discord_webhook_module');
const Perforce = new P4Handler(process.env.P4_PASSWD,process.env.P4_USER,process.env.P4_PORT,path.join(__dirname, process.env.SAVE_FILE),process.env.CRON_TIMEZONE,process.env.DISCORD_URL);

var job = new CronJob(process.env.CRON_TIME, function() {
    Perforce.runCron().then((sent) => {
        if (sent) {
            console.log(`New Data Found, Webhook Sent: ${moment()}`)
        }
    }).catch((err) => {
        console.error(err);
    })
}, null, true, process.env.CRON_TIMEZONE);

Perforce.loadConfig().then(() => {
    return Perforce.login().then(() => {
        job.start();
    });
}).catch((err) => {
    console.error(err);
    throw err;
})

