# My city (frontend)
### Version 1.0

### Begin
For running this project you need, download packages (angular, jquery etc) and run server.
The instructions below describes how run project.

### Installation
1.First at all, check your version npm
```sh
npm -v
```
if you see something like this: 1.4.28 go next,
else  Install NodeJs https://nodejs.org/en/ (Npm manager will be installed together with NodeJS). Restart your computer

2.Install Bower and Http-server globally (so that it may be run from the command line,like in paragraph 3)
```sh
npm install -g bower
npm install http-server -g
```

3. Install packages (angular, jquery....)
```sh
bower install
```
If you see ERRORS, at first check params in your .bowerrc file({ "directory" : "resources/bower_components"}).

###Run server
```sh
http-server
```
or
```sh
npm start
```
and go to http://127.0.0.1:8080