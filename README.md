##Setup

```
git clone https://github.com/HCanber/react-demo.git
cd react-demo
npm install
npm install -g webpack webpack-dev-server
```

##Run example app

```
webpack-dev-server
```

Open [http://localhost:8080/](http://localhost:8080/) in the browser.


##Make changes
Try make a change in `index.jsx` for example change

``` html
<Application title="Click the button"/>
```

to 

``` html
<Application title="Click the button NOW!"/>
```

The page in should be updated in the browser.

##Create bundle.js on disk

As `webpack-dev-server` does not save the bundle it creates, you need to run `webpack` to create `bundle/bundle.js`. 
Run the command:

```
webpack
```

You can also run it in watch mode:

```
webpack -w
```

