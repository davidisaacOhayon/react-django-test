# React Django Integration

This project is mainly to experiment on implementing a javascript framework React with a Python web development framework, Django.


# Important 
Django will not be able to "render" the React modules directly without transpiling them into a universal format of javascript. We can
use a JS package called **babel** but this unfortunately can cause problems as babel by stock doesn't transpile our react modules in a format
that is understandable by django's web server.

Instead, in the same directory that contains all your javascript files, create a JS file named **webpack.config.js** and another file called **.babelrc**


## webpack.config.js
```javascript
// Note : This is a very Important configuration in order for us to transpile the react modules properly for them to run alongside the Django App.
// RUN : npx webpack --config webpack.config.js

// Developer Note - Make sure you edit first the original javascript modules then transpile them.
const path = require('path');

module.exports = {
  entry: { // List down each react module alongside their directory including './' 
    exampleFile : './path/to/file/exampleFile.js



  },
  output: {
    filename: '[name].js', // Name of outputted javascript file
    path: path.resolve(__dirname, 'FolderName'), // Output to what folder in the directory



  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['.jsx', '.js'],
  },
};
```


## .babelrc
```
 "presets": {"@babel/present-env, "@babel/preset-react"}
```


Once these are set, **CD** to the directory containing all react modules and run the command
```
npx webpack --config webpack.config.js
```

This may require you to install the **webpack package** just do that, though usually these things come preinstalled when you start a react project.

# API Handling with Javascript and Django
There is no direct way to allow Django's variables and such to be accessed through the react modules much like how we can pass them through a view function in django, into our templates.
This necessitates us to utilize an API handling function in the react modules in order for us to access a JSON-parsed version of the data being sent by Django.

## First, Set up Cross-Origin Resource Sharing
This will allow Django's APIs to be accessed by origins that run on different ports. According to my own knowledge as of now, despite the React and Django files being served on the same port and IP address, this is still necessary (Though in reality it shouldn't be if they're run on the same port.)

Run the following command
```
pip install django-cors-headers
```

**In the settings.py of the django project**

```python


# Configure the corsheaders to be recognized by django as an installed app and middleware.

INSTALLED_APPS = [
    "...",
    "corsheaders",
    "..."
]


MIDDLEWARE = [
   "...",
   "corsheaders.middleware.CorsMiddleWare",
   "..."
]

# Include all IP addresses that are allowed to access django's APIs.
# Keep the format : http://ipAddress:Port

CORS_ALLOWED_ORIGINS = [
    "http://localhost:1234",
    "http://127.0.0.1:8000"
]
```
 
**in the reactModule.js**
This is where we make use of a very powerful function called the fetch() api which will basically send a get request to a URL, and allow us to define a sequence of functions to perform via the .then((res) => { someFunction() }) 
function.

Do note that unless your django view function returns a JsonResponse(data) call, it will be necessary to parse the incoming data into a JSON format by writing **res.json()**

Here's an example of how we can use this.

```javascript
import react, {useEffect, useState} from 'react';
import ReactDOM from 'react-dom';

function SomeComponent(){
  const [data, setData] = useState(null)

  useEffect(() =>{
  fetch("Url/of/Django/API"); # This issues a GET Request from the Django Url that corresponds to a django URL in the urls.py 
  .then((res) =>{ ## 
     if(!res.ok){
        throw new Error("Response was not ok.");
     } else{
       return res.json(); // This parses the Data into a JSON format.
     }
   })
  .then((data) => setData(data))
  .catch((error) => console.error("There was an error", error));
  }, []);

  return(
  <div>{data.variable}</div>
  )



const root = ReactDOM.createRoot(document.getElementById('someRoot'));
root.render(SomeComponent())




```
