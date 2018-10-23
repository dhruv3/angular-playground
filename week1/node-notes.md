# Node Notes

* Initializing package.json
  ```bash
  npm init
  ```
  Follow along the prompts and answer the questions as follows: accept the default values for most of the entries, except set the entry point to index.html.
* Install an NPM module, lite-server, that allows you to run a Node.js based development web server and serve up your project files:
  ```bash
  npm install lite-server --save-dev
  ```
* Set "start" and "lite" in your package.json:
  ```js
  "scripts": {
    "start": "npm run lite",
    "test": "echo \"Error: no test specified\" && exit 1",
    "lite": "lite-server"
  }
  ```
* Start the development server by typing the following at the prompt:
  ```bash
  npm start
  ```
