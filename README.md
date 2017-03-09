#Why this repo exists

One of my tutorials about Letsencrypt was read over 1,500 times and received many comments. So I decided to publish an updated tutorial in this repo. Web app is deployed at: https://getdrizzle.com/

If you are looking for tutorial on how to deploy Node app from Github to AWS Elastic Beanstalk, check up this repository:
https://github.com/tima101/Weather-deploy-tutorial

#Setting up Letsencrypt on your droplet

-Create Ubuntu droplet (latest version) on Digital Ocean.

-Log in into your server via terminal. Digital Ocean will email you a temporary password.
Log in by using: `ssh root@xxx.xxx.xxx.xxx`. Set new password, use 16+ characters.

-Install Letsencrypt:
`apt-get install git

git clone https://github.com/letsencrypt/letsencrypt

cd letsencrypt`

#Expired certificate




#Adding mupx to your app






#Deploying




#How to upload main-app.css file to AWS S3
Style file, main-app.css, is distributed via AWS S3, this reduces intitial load time.
To upload modified file to S3, follow below instructions:

1. Go to `./private` folder
2. run `gulp build` command

Make sure that you create and fill out aws.json file. Look for example file aws.json.example
