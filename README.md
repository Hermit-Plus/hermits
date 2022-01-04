# Hermits

## Hermit Plus

We all love the hermits and love the amazing things they do in Minecraft. This app is a celebration of them and endeavors to bring them all together in one place for you to enjoy. The look and feel is to mimic streaming services we all love, like Disney Plus or Netflix. My goal is to enhance the pleasure of watching the hermits, make it easier to follow the stories and characters, and help introduce new fans to new characters.

![Hermit Plus](https://github.com/Hermit-Plus/hermits/tree/main/client/public/images/hermit-screenshot.png)

Hermit Plus has many phases of construction and is a work in progress. It will still be some time before just the basic app is up for consumption.

## Introduction

Who uses YouTube? We all do. Over the years there has been pushing and pulling to change to change it and it continues to make progress. YouTube, for what it is, is fine. We have learned to use it and we approach it as the platform it is. We have become accustom to it's little quirks, sharp edges, and outdated look and feel. I don't mind the advertisements and if I wanted, I could pay and get rid of them. I don't mind the distractions of the sidebar of videos. I don't mind the searching for what I want to watch. It is all part of the YouTube experience.

That being said, there are some things that I watch, that is strictly YouTube content, where all that mess really gets in the way of my enjoying the content. Prime example is the Hermits of Hermitcraft. There are nearly 30 Hermits, all with there very unique personalities, build styles, and look and feel. With the newest season, season 8, they are all huddled together on a little stretch of land, forcing them to work and interact with each other. This presents a unique point of view from each of the Hermits even when dealing with the same situation. I love it, but YouTube tends to get in my way. It is not YouTube's fault. It is not the Hermits fault. There just simply should be a better way to watch some things on YouTube.

Introducing Hermit Plus. Think Netflix for Hermits. This app is a combination of concepts from Disney Plus and HBO Max to role the Hermits into one easy to watch and navigate platform. Hermit Plus is not trying or wanting to compete, replace, or interfere with YouTube, it just uses several, public url's and presents the information in a different, more focused, we think, better way.

Here you can easily find Hermits. Review Hermit information, fan art, listen to music featured in the videos and much more. On the video pages you may find a list of the main Hermits in that video. This makes watching the videos from every perspective so much easier.

We run the YouTube url through the React Player. This means that you still get adds and access to YouTube. If you would rather watch through YouTube or want to see something directly from the channel, no problem. Using the React Player also means that we can present both video and audio in several formats which enables us to grow as the Hermits grow.

## Set Up

The app is built with ReactJs. Currently I am focused on building and designing the front end. I am using json-server for this. json-server will serve up the data file I created so I can easily add and remove parts and pieces as I need. To get set up with this project;

- clone the repo - or download zip.
- once you have the repo set up run "npm i" in the client folder to install the dependencies.
- To get up and running, in your terminal, cd into the client folder and **"npm run serve"** to start the json-server. The server will present to port 8001 and currently looks at the hermits.json data file.
- to change the port, look at the serve script in package.json
- get the app running on port 3000 with **"npm run start"**.
