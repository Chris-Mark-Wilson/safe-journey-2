## SafeJourney

A lone person tracking safety app, so your friends can track your journey home.

Create an account, along with all your friends, login and select your destination either from an address, establishment or simply tap on the map. 

As soon as you start your journey a notification is sent to all your friends and they can immediately view your location in real time as you make your way to your destination. Your start point and destination is also shown along with a route generated by google maps dependent on whether you're walking or driving.

When you get home your journey is cancelled and your friends know you're home safe.

To add a friend simply type in their phone number and if they have signed up and are in the database, they will be added to your friends list.

<img src='./assets/scr2.jpg' width='200'><img src='./assets/scr3.jpg' width='200'><img src='./assets/scr4.jpg' width='200'><img src='./assets/scr5.jpg' width='200'><img src='./assets/scr6.jpg' width='200'><img src='./assets/scr7.jpg' width='200'>

API key for google map api's is stored in app.json - fix

required - root file named .env containing API_KEY=..your google maps api key with directions enabled

`````
You will need this data in app.json in root:
{
    "expo": {
      "name": "SafeJourney",
      "slug": "SafeJourney",
      "version": "1.0.0",
      "orientation": "portrait",
      "icon": "./assets/icon.png",
      "userInterfaceStyle": "light",
      "splash": {
        "image": "./assets/splash.png",
        "resizeMode": "contain",
        "backgroundColor": "#FFFFFF"
      },
      "assetBundlePatterns": [
        "**/*"
      ],
      "ios": {
        "supportsTablet": true
      },
      "android": {
        "config": {
          "googleMaps": {
            "apiKey": "**your maps api key goes here**"
          }
        },
        "adaptiveIcon": {
          "foregroundImage": "./assets/adaptive-icon.png",
          "backgroundColor": "#FFFFFF"
        },
        "package": "com.bigsegs.SafeJourney"
      },
      "web": {
        "favicon": "./assets/favicon.png"
      }
    }
  }