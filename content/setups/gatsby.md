---
title: "Gatsby"
metaTitle: "Setting up Gatsby"
metaDescription: "Setting up Gatsby"
---

I had some issues setting up Gatsby on my laptop so here are some notes I used to get it going. There is some items I still need to capture on how my whole setup works so there may be some initial steps missing.


# Why use a container for editing?
I use a Windows laptop regularly and was planning on using Ubuntu 20.04 LTS on WSL2. I got it set up but it was really slow and the basic build took more than 10 minutes. I also wanted to keep the blog seperate from other efforts adn considered a container to be the way to go to make it easier. I also had proxmox already running and it was fast and simple to set up.

# The setup

## Prerequisites
 * [Setup a container for single use tasks]() **Doc to be written**

## Install curl
`sudo apt-get install curl`

## Install nvm
Source: [nvm github](https://github.com/nvm-sh/nvm)  
  
It is good practice to first read the code at https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh before running the following command. It is a real security risk to just trust a command like this because it runs the commands in the file without scrutiny and you are placing all your trust in the person providing the link to not be a bad actor.

`curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.3/install.sh | bash`

Source your .bashrc to make nvm available  
`. ~/.bashrc`

## Node and npm
`nvm install node --lts`

Source your .bashrc to make node and npm available  
`. ~/.bashrc`


## Install gatsby
`npm install -g gatsby-cli`

# Troubleshooting

If a command is not found after installing it, try loggin out and in for it to be loaded into your profile

# End

