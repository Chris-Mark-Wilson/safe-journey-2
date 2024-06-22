## SafeJourney

Lone traveller safety app.

required - root file named .env containing EXPO_PUBLIC_API_KEY=..your google maps api key with directions enabled

API key for google map api's is also stored in app.json 

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