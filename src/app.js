const rpc = require('discord-rpc');
const settings = require('../resources/settings.json');
const RPC = new rpc.Client({
    transport: 'ipc'
});

RPC.on('ready', () => {
    RPC.setActivity({
        state: settings.state,
        details: settings.details,
        startTimestamp: settings.timestamp ? new Date() : undefined,
        largeImageKey: settings.large_image.image,
        largeImageText: settings.large_image.text,
        smallImageKey: settings.small_image.image,
        smallImageText: settings.small_image.text,
        buttons: [{
            label: settings.buttons.button_1.text,
            url: settings.buttons.button_1.link
        }, {
            label: settings.buttons.button_2.text,
            url: settings.buttons.button_2.link
        }],
        instance: true
    }).then(() => {
        console.log('Your Discord Rich Presence has been updated.');
    });
});

RPC.login({
    clientId: settings.clientId
});