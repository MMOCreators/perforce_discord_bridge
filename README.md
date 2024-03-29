# Perforce <-> Discord Bridge
This is a stand-alone service, for monitoring Perforce Server. When it finds a new Update it stores it then sends a Webhook Notification.


## Why this was Created?
I couldn't find anything that was current and up2date for Perforce <-> Discord bridging. Made this for everyone who needs it.

## Kubernetes
* `/chart` contains a Helm Chart for Kubernetes Helm Deployment

## Docker
* `docker-compose.yml` easy testing Deployment

## Configuration
* `.env`
```env
DISCORD_URL=https://discord.com/api/webhooks/123412341234/fakehash
P4_USER=user
P4_PASSWD=pass
P4_PORT=ssl:1.1.1.1:1666
SAVE_FILE=./P4data.json
CRON_TIME=00 */1 * * * *
CRON_TIMEZONE=America/Los_Angeles
DISCORD_FOOTER=Perforce Discord Webhook
```

## Docker Compose
```ps
PS C:\perforce_discord_webhook> docker-compose up --force-recreate
Creating network "perforce_discord_webhook_default" with the default driver
Creating perforce_discord_webhook_p4watcher_1 ... done
Attaching to perforce_discord_webhook_p4watcher_1
p4watcher_1  | P4Data file does not exist..
p4watcher_1  |  Creating now.
p4watcher_1  | File(/src/P4data.json) was created successfully.
p4watcher_1  |  Added Trust for the stored P4PORT
p4watcher_1  |  Authenticated with Perforce Server
p4watcher_1  | New Data Found, Webhook Sent: Thu Aug 19 2021 05:09:00 GMT+0000
```

