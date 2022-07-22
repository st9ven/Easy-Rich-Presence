<div align="center">
<strong><h1>Easy Rich Presence</h1></strong>
</div>

# Requirements
Install [Node.js](https://nodejs.org/es/download/) v16.14.0 or above.

Run the `installer.bat` script to install all the necessary packages.

# How to install?

Create a new app on [Discord Developer Portal](https://discord.com/developers/applications).

![New App](/assets/NewApp.png)

Copy the application id you created earlier.

![Application ID](/assets/ApplicationID.png)

Add new images for large_image and small_image.

![Assets](/assets/Assets.png)

# Settings

Go to the `resources` folder and edit `settings.json`.

**NOTE**: In `ApplicationID` you will need to paste the application id you copied.

```json
{
    "clientId": "ApplicationID",

    "state": "Easy Rich Presence",
    "details": "Using steven.#3540 script",

    "timestamp": true,

    "large_image": {
        "image": "large",
        "text": "steven.#3540"
    },
    "small_image": {
        "image": "small",
        "text": "Easy Rich Presence"
    },

    "buttons": {
        "button_1": {
            "text": "Easy Rich Presence",
            "link": "https://github.com/st9ven/Easy-Rich-Presence"
        },
        "button_2": {
            "text": "Follow Me",
            "link": "https://github.com/st9ven"
        }
    }
}
```
