cordova.define('cordova/plugin_list', function(require, exports, module) {
module.exports = [
    {
        "id": "cordova-plugin-dialogs.notification",
        "file": "plugins/cordova-plugin-dialogs/www/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-dialogs.notification_android",
        "file": "plugins/cordova-plugin-dialogs/www/android/notification.js",
        "pluginId": "cordova-plugin-dialogs",
        "merges": [
            "navigator.notification"
        ]
    },
    {
        "id": "cordova-plugin-background-fetch.BackgroundFetch",
        "file": "plugins/cordova-plugin-background-fetch/www/BackgroundFetch.js",
        "pluginId": "cordova-plugin-background-fetch",
        "clobbers": [
            "window.BackgroundFetch"
        ]
    },
    {
        "id": "com.transistorsoft.cordova.background-geolocation.BackgroundGeolocation",
        "file": "plugins/com.transistorsoft.cordova.background-geolocation/www/BackgroundGeolocation.js",
        "pluginId": "com.transistorsoft.cordova.background-geolocation",
        "clobbers": [
            "window.BackgroundGeolocation"
        ]
    }
];
module.exports.metadata = 
// TOP OF METADATA
{
    "cordova-plugin-dialogs": "1.3.1",
    "cordova-plugin-background-fetch": "4.0.0",
    "com.transistorsoft.cordova.background-geolocation": "2.2.0"
};
// BOTTOM OF METADATA
});