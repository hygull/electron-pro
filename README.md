# electron-pro

An electron apps holder repository which contains a rich set of example electron applications

## Electron

Electron is an open source library developed by GitHub for building cross-platform desktop applications with HTML, CSS, and JavaScript. 

Electron accomplishes this by combining Chromium and Node.js into a single runtime and apps can be packaged for Mac, Windows, and Linux.

See documentation at [https://www.tutorialspoint.com/electron/electron_installation.htm](https://www.tutorialspoint.com/electron/electron_installation.htm).

## Versions

#### npm & node

```
rishikesh agrawani@DESKTOP-8AATOO4 MINGW64 /d/projects/Others/electron-pro/apps (master)
$ node --version
v8.9.4

rishikesh agrawani@DESKTOP-8AATOO4 MINGW64 /d/projects/Others/electron-pro/apps (master)
$ npm --version
5.6.0
```

#### Chrome 

```
Version 64.0.3282.167 (Official Build) (64-bit)
```

## Start

* mkdir hello-world-app

* cd hello-world-app

* npm init

* npm install -g electron-prebuilt

* electron --version

```
rishikesh agrawani@DESKTOP-8AATOO4 MINGW64 /d/projects/Others/electron-pro/apps/hello-world-app (master)
$ electron --version

v1.4.13
```

Read the documentation and enjoy creating desktop applications.

## Example

index.html

```html
<!DOCTYPE html>
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<title>Electron - Hello world</title>
	<style type="text/css">
		h1 {
			color: green;
			font-family: tahoma;
		}

		h2 {
			color: blue;
			font-family: courier;
		}
	</style>
</head>
<body>
	<center>
		<h1>Electron</h1>
		<h2>Rishikesh Agrawani</h2>
	</center>
</body>
</html>
```

main.js

```javascript
const {app, BrowserWindow} = require("electron")
const path = require("path")
const url = require("url")

function createWindow() {
	win = new BrowserWindow({height:500, width:500})

	win.loadURL(url.format({
		pathname: path.join(__dirname, "index.html"),
		protocol: "file:",
		slashes: true
	}))

	console.log(path.join(__dirname, "index.html"))

	console.log(url.format({
		pathname: path.join(__dirname, "index.html"),
		protocol: "file:",
		slashes: true
	}))

	console.log(url.format({
		pathname: path.join(__dirname, "index.html"),
		protocol: "file:",
		slashes: false
	}))

	console.log(url.format({
		pathname: path.join(__dirname, "index.html"),
		protocol: "http:///",
		slashes: false
	}))

	console.log(url.format({
		pathname: path.join(__dirname, "index.html"),
		protocol: "file:",
	}))
}

app.on("ready", createWindow)

```

On terminal

```
rishikesh agrawani@DESKTOP-8AATOO4 MINGW64 /d/projects/Others/electron-pro/apps/hello-world-app (master)
$ electron ./main.js

D:\projects\Others\electron-pro\apps\hello-world-app\index.html
file:///D:\projects\Others\electron-pro\apps\hello-world-app\index.html
file:D:\projects\Others\electron-pro\apps\hello-world-app\index.html
http:///:D:\projects\Others\electron-pro\apps\hello-world-app\index.html
file:D:\projects\Others\electron-pro\apps\hello-world-app\index.html

```