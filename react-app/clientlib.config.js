// https://helpx.adobe.com/experience-manager/kt/sites/using/getting-started-spa-wknd-tutorial-develop/react/chapter-0.html
module.exports = {
    // default working directory (can be changed per 'cwd' in every asset option)
    context: __dirname,

    // path to the clientlib root folder (output)
    clientLibRoot: "./../ui.apps/src/main/content/jcr_root/apps/wknd-events/clientlibs",

    libs: {
        name: "react-app",
        allowProxy: true,
        categories: ["wknd-events.react"], // name of clientlib
        serializationFormat: "xml",
        jsProcessor: ["min:gcc"],
        dependencies:["wknd-events.grid"],
        assets: {
            js: [
                "build/static/**/*.js"
            ],
            css: [
                "build/static/**/*.css"
            ]
        }
    }
};