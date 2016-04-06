#Tweetdeck Electron Wrapper

Tweetdeck decided to discontinue support for their desktop app. This simple app serves to correct that mistake.

## Known Issues
- Notifications
-- Notification popup windows/toast notifications don't work, and may never be implemented. Sounds do still work, however.
- Login appears to do nothing
-- When you first open the app and enter your info, pressing your enter key or clicking "log in" will not do anything. However, as long as you have the "remember me" box checked, if you then close and re-open the app, you'll be logged in as normal. Currently don't know why (if you do, feel free to let me know, or submit a pull request with the fix!).

---
## To Edit

To clone and run this repository you'll need [Git](https://git-scm.com) and [Node.js](https://nodejs.org/en/download/) (which comes with [npm](http://npmjs.com)) installed on your computer. From your command line:

```bash
# Clone this repository
git clone https://github.com/atom/electron-quick-start
# Go into the repository
cd electron-quick-start
# Install dependencies and run the app
npm install && npm start
```

## To Build
```bash
# run electron-packager in the current directory with appname, platform, arch, and Electron version parameters
electron-packager ./ AppName --platform=win32 --arch=ia32,x64 --version=0.36.0
```

Learn more about Electron and its API in the [documentation](http://electron.atom.io/docs/latest).

#### License [CC0 (Public Domain)](LICENSE.md)
