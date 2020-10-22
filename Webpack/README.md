# Webpack Stuff

Included are files that are useful examples or templates previously used in webpack
projects. Follow the steps below to set up a webpack project, then use what you like.

## Webpack Proj Setup

- $ mkdir webpack-demo
- $ cd webpack-demo
- $ npm init _Answer Questions accordingly_
- $ npm install webpack webpack-cli --save-dev

This will get us basic framework, now we need to add
config file to tell webpack how to bundle our code we will write.

 ### Setup basic project structure
 ```
 webpack-demo
 - package.json
 |- webpack.config.js
 |- /dist
   |- main.js
   |- index.html
 |- /src
   |- index.js
 |- /node_modules
```
 - Copy webpack.config.js and customize to your needing, but this will establish basic
 bundle procedure and things to include. Below is basically what is setting it up.

```
const path = require('path');
module.exports = {
 entry: './src/index.js',
 output: {
   filename: 'main.js',
   path: path.resolve(__dirname, 'dist'),
 },
};
```

Now we can run $ npm webpack or npx webpack --config webpack.config.js,
The former will auto detect the config file latter explicit showing we can specifiy.

A configuration file allows far more flexibility than simple CLI usage. We can specify
loader rules, plugins, resolve options and many other enhancements this way. See the
configuration documentation to learn more

We can use Scripts in package.json to automate various tasks we might do repeatedly
while working on a project, see our package.json as a template and elaborate from there.

Once integrated. npm run start for test server, npm run build to build into dist. 
