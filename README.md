#Why this repo exists

One of my tutorials about Letsencrypt was read over 1,500 times and received many comments. So I decided to publish an updated tutorial in this repo. Web app is deployed at: https://getdrizzle.com/

If you are looking for tutorial on how to deploy Node app from Github to AWS Elastic Beanstalk, check up this repository:
https://github.com/tima101/Weather-deploy-tutorial

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



#Adding mupx to your app






#Deploying




#How to upload main-app.css file to AWS S3
Style file, main-app.css, is distributed via AWS S3, this reduces intitial load time.
To upload modified file to S3, follow below instructions:

1. Go to `./private` folder
2. run `gulp build` command

Make sure that you create and fill out aws.json file. Look for example file aws.json.example
