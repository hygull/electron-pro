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

/**
rishikesh agrawani@DESKTOP-8AATOO4 MINGW64 /d/projects/Others/electron-pro/apps/hello-world-app (master)
$ electron ./main.js

D:\projects\Others\electron-pro\apps\hello-world-app\index.html
file:///D:\projects\Others\electron-pro\apps\hello-world-app\index.html
file:D:\projects\Others\electron-pro\apps\hello-world-app\index.html
http:///:D:\projects\Others\electron-pro\apps\hello-world-app\index.html
file:D:\projects\Others\electron-pro\apps\hello-world-app\index.html

*/