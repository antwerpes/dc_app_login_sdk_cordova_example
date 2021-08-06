DocCheck App Login SDK Example Cordova
==============================

This example app will demonstrate the usage of the [DocCheck App Login SDK](https://github.com/antwerpes/dc_app_login_sdk_cordova) for iOS and Android through Ionic and Cordova.

Configuration
------------

#### LoginId

Change the login Id either within the `home.page.html`

```html
...
<ion-input value="2000000016698" #loginIdInput></ion-input>
...
```

or within the app in the displayed input field.

#### Bundle Identifier / Application Identifier

Make sure that the apps bundle/application identifier matches the bundle/application identifier used during configuration of your credentials for the DocCheck App Login. 


Installation
------------

Install all dependencies for the Ionic project through the package manager NPM
```shell
npm install
```

Add the platform of your choice through the ionic or cordova command line tools (approach can vary based on the command line setup)
```shell
npx ionic cordova platform add ios # will add the ios platform to the project

npx ionic cordova platform add android # will add the android platform to the project
```

Build the Ionic project and copy the relevant files to the platform folders
```shell
npx ionic cordova preprare ios # will add the files to the ios platform

npx ionic cordova preprare android # will add the files to the android platform
```

Open the platform specific code editor and build the project for the platform.

#### iOS

```shell
xed platform/ios # will use the xcode command line tools to open the project
open platforms/ios/App\ Login\ Test.xcworkspace  # manually opens the project in case xcode command line tools are not available
```

#### Android
Use Android Studio to open and build the project.