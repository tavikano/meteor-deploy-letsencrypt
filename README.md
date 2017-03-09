#Why this repo exists

One of my tutorials about Letsencrypt was read over 1,500 times and received many comments. So I decided to publish an updated tutorial in this repo. Web app is deployed at: https://getdrizzle.com/

If you are looking for tutorial on how to deploy Node app from Github to AWS Elastic Beanstalk, check up this repository:
https://github.com/tima101/Weather-deploy-tutorial

If you are building Adblock Detector, check this repo: https://github.com/tima101/Native-adblock-detector

If you are building Paywall/Membership software, stay tuned, I am in the process of open-sourcing.

#Setting up Letsencrypt on your droplet

Create Ubuntu droplet (latest version) on Digital Ocean.

Log in into your server via terminal. Digital Ocean will email you a temporary password.
Log in by using: `ssh root@xxx.xxx.xxx.xxx`. Set new password, use 16+ characters.

Install Letsencrypt

`apt-get install git`

`git clone https://github.com/letsencrypt/letsencrypt`

Go to letsencrypt folder and issue certificate

`cd letsencrypt`

`./letsencrypt-auto certonly --standalone --email xxx@yourdomain.com -d yourdomain.com`

**Make sure that your domain has an A record pointing to the right IP address.**

Get your fullchain.pem and privkey.pem files. You will need them when you deploy your app with mupx tool. Go to etc/letsencrypt/live/yourdomain.com folder, download (I use Filezilla) fullchain.pem and privkey.pem, place them into your app folder, add their names to .gitignore file.

#Expired certificate

When certificate expires, you will get email from Letencrypt Expiry bot. Go to terminal and stop your app:

`mupx stop`

Then log in into server, go to letsencrypt folder and re-issue certificate:

`cd letsencrypt`

`./letsencrypt-auto renew --agree-tos`

Again, go to etc/letsencrypt/live/yourdomain.com folder, download your new fullchain.pem and privkey.pem, place them into your app folder (replace old ones).

#Adding mupx tool to your app

Go to your app folder, install mupx tool and fill out mup.json file:

`npm install -g mupx`

`mupx init`

mup.json file for this web app looks like this:
```
{
  // Server authentication info
  "servers": [
    {
      "host": "159.203.xxx.xxx",
      "username": "root",
      "password": "xxxxxxxxxxxxxxxxxxxxxxx",
      // or pem file (ssh based authentication)
      //"pem": "~/.ssh/id_rsa"
      "env": {}
    }
  ],

  // Install MongoDB in the server, does not destroy local MongoDB on future setup
  "setupMongo": false,

  // Show a progress bar during the upload of the bundle to the server. 
  // Might cause an error in some rare cases if set to true, for instance in Shippable CI
  "enableUploadProgressBar": true,

  // Application name (No spaces)
  "appName": "getdrizzle",

  // Location of app (local directory)
  "app": "/Users/Apps/Desktop/apps/appname",

  // Configure environment
  "env": {
    "PORT":80,
    "ROOT_URL": "https://getdrizzle.com",
    "MONGO_URL": "mongodb://xxxxxxxxx:xxxxxxxxxxxxx.mlab.com:43366,ds043366-a1.mlab.com:43366/drizzle?replicaSet=rs-ds043366",
    "MONGO_OPLOG_URL": "mongodb://oplog-reader:xxxxxxxxxxxxx-a0.mlab.com:43366/local?authSource=xxxxxxxxxxxxxxx",
    "MAIL_URL": "smtp://postmaster%40getdrizzle.com:xxxxxxxxxxxxxxxxxxxx@smtp.mailgun.org:587"
  },
  //SSL (see: Strategy/code)
  "ssl": {
    "certificate": "./fullchain.pem", 
    "key": "./privkey.pem",
    "port": 443 // 443 is the default value and it's the standard HTTPS port
  },

  // Meteor Up checks if the app comes online just after the deployment
  // before mup checks that, it will wait for no. of seconds configured below
  "deployCheckWaitTime": 180
}
```

#Deploying

We are almost ready to deploy. Make sure to install force-ssl package, so SSL is forced on production app only. On terminal, inside your app folder, run:

`meteor add force-ssl`

Then run:

`mupx setup`

You may get an error (depends on versions of mupx tool and droplet's Ubuntu): `Installing Docker: FAILED`. If so, on terminal, inside your app folder, log in your server `ssh root@xxx.xxx.xxx.xxx`. Install Docker: `wget -qO- https://get.docker.com/ | sudo sh`. Run `mupx setup` again.

Then run:

`mupx deploy`

If you use Meteor 1.3 or higher, you may get an mupx-specific error if you are using newest versions of Meteor.
To solve this problem go to:

`/usr/local/lib/node_modules/mupx/templates/linux/start.sh`

Edit start.sh file in 3 places, replace "meteorhacks" with "abernix". Save. Run `mupx setup` and `mupx deploy` again.

Done. App is deployed. Congrats.

#Scaling

To add extra balancers, change droplet's size. Say from 1 to 4 CPUs.

Go to terminal, run:

`meteor add meteorhacks:cluster`

Then run:

`export CLUSTER_WORKERS_COUNT=4`

Run `mupx setup` and `mupx deploy` again. Done.


#How to upload main-app.css file to AWS S3
Style file, main-app.css, is distributed via AWS S3, this reduces intitial load time.
To upload modified file to S3, follow below instructions:

1. Go to `./private` folder
2. run `gulp build` command

Make sure that you create and fill out aws.json file. Look for example file aws.json.example
