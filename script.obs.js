{
    "name": "Quizizzd",
    "description": "Made by Beast#6968, Cyjanek#8892 with big help from lldvee#5852",
    "version": "1.2",
    "background": {
        "scripts": [ "./src/background/script.js" ],
        "persistent": true
    },
    "options_page": "./src/options/index.html",
    "browser_action": {
        "default_popup": "./src/popup/index.html",
        "default_title": "Quizizzd"
    },
    "permissions": [
        "tabs",
        "webRequest",
        "storage",
        "<all_urls>"
    ],
    "manifest_version": 2
}
