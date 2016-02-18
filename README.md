React Tutorial
=======================================

## What is React
- React is a Javascript UI library created by some developers at Facebook and Instagram. 
- It can be considered the V in MVC
- It was built to solve one problem: building large (front end) applications with data that changes over time.

## Why React
- React helps you split a complex application, into small simple and understandable parts.
- React introduces a new paradigm to UI development, which makes the inner working of your front-end app a lot more predictable.

## When to use React
- If you're dealing with a lot of DOM maniplutation
- If you're dealing with a lot of 'state management' of the front-end, for instance: chat applications
- If you wish to separate the front end ('single-page-app') from your backend ('json rest api')

## How
Instead of manipulation the DOM directly, each component renders a piece of html. Each component automatically re-renders, whenever something within that component changes.

Before we would do stuff like this:
```html
<!-- index.html -->
<ul id="items"></ul>
<button id="button">Add Item</button>
```
```javascript
// main.js
var list = document.getElementById('items');
var button = document.getElementById('button');
button.addEventListener("click", function(){
	var listItem = document.createElement('li');
	table.appendChild(listItem);
	// etc...
);
```

When using React we don't touch the DOM directly. Like other (front-end) frameworks we use templates (sort of). But instead of bringing logic to a new template language, we put the html in JS (we'll explain this code later, don't worry about it too much):

```javascript
class Main extends React.Component {
   render() {
        return (
	        <div>
	            <ul>
					{this.state.players.map(renderPlayer)}
	            </ul>
	            <button id="button" >Add Item</button>
            </div>
        );
    }
    renderPlayer(player){
	    return <li>{player.name}</li>
	}
}
```

By building a tree of components, we can build a whole app. Let's have a look at Instagram, which uses React. On the top level we have three component: Header, Main, Footer:
![Top Level](https://lh3.googleusercontent.com/-oC1sHRDkPQU/VsMyZU7LfnI/AAAAAAAAAYQ/IXH2BgWMwfg/s0/instagram-1.png "instagram-1.png")

Within the Main, we have 5 components: Picture, User Info, Post Meta, Comment List and Post Actions:
![Main](https://lh3.googleusercontent.com/-kuLu-bF5gS8/VsMyigmIYXI/AAAAAAAAAYY/IanBfzkLbHk/s0/instagram-2.png "instagram-2.png")

Then there is a comment list which has the same component (let's call it "Comment Item"), multiple times.
![Comment List](https://lh3.googleusercontent.com/-Dy3SHX0dbfI/VsM0WEXt3NI/AAAAAAAAAYs/mHCwopJZMU0/s0/instagram-3.png "instagram-3.png")

The entire tree would look something like this:

```
- Header
	- Logo
	- Search Box
	- Current User
- Main
	- Post
		- Picture
		- User Info
			- Avatar
			- User Link
			- Follow
		- Post Meta
			- Post Likes
			- Post Time
		- Comment List
			- Comment (repeating)
				- User Link  (re-used from above)
				- Text
		- Post Actions
			- Like Button
			- Comment Box
			- More Actions
- Footer
	- Simple Site Map
	- Copyright
```

On a different screen, we would re-use the whole Post component:
![Post re-used in a Modal](https://lh3.googleusercontent.com/-Z3phBUOpRFA/VsM1vq0Pj_I/AAAAAAAAAZA/mVg9A_9GI6Q/s0/instagram-4.png "instagram-4.png")

Avatar, UserLink, Post Meta, Post Actions are re-used in the overview:
![Overview](https://lh3.googleusercontent.com/-vRd7-G4d9xA/VsM2A8DfpXI/AAAAAAAAAZM/TRNYm_rhPho/s0/instagram-5.png "instagram-5.png")

### When to create a component:
- When you have a piece of UI which can be re-used, 
	- Either in this application: Avatar UserLink, Post Meta
	- On in another application: Header, Footer
	- Everything is a component!

## Let's try it out!

### Get your environment ready
We will need NodeJS and npm for development. Make sure you have got NodeJS and npm installed: https://nodejs.org/en/download/package-manager/

We'll be using ES6, a new version of Javascript, this will be transformed to ES5 by a tool called Webpack, so that browsers can understand it.

## 1. Hello World in React
> We learn: React setup with Webpack, JSX and rendering.

1. Create a new directory 'react-tutorial'
2. Download the starter-kit from https://github.com/nextminds/react-starter (don't clone if you want to use your own repo, because we want to use these files as a start and don't want to use this repository).
3. We get:
	- index.html - our main entry html
	- src/App.js - our React application
	- src/index.js - our main entry JS, render our React application onto index.html
	- package.json - defines which third-party Javascript packages we want to install, including: React, Webpack (helps us during development), and other stuff
	- Other files are unimportant for now
4. Go to the terminal and type: `npm install`, this will install those packages in a directory called `node_modules`, we can later use these packages in our JS code.
5. Now type `npm start`
6. Open `http://localhost:3000/` in your browser. You should see: Hello World. This page is served by the Webpack development server. This development server automatically tracks changes to files and then serves them on this address. It also bundles all of our JS files together in one big file.
7. Back to the source. Open `index.html`.
	- All we see here is a `<div id='root'>` and a script tag, these is no "Hello World", which means the script tag must have something to do with it. The script-tag refers to `static/bundle.js`, which doesn't really exist in our filesystem. The Webpack development server knows that when we request this file, it should give us the latest version of the bundled together Javascript.
8. Now open `src/index.js`. This is our main entry point, meaning: this is where the Javascript starts. As you see here we import 'React' and 'ReactDOM', those are both libraries we installed earlier with `npm install`. We can now use those two libraries in this file. We also import `App` for `./App`, meaning we want to use the local App.js file within the file. Then we see:
	```
	ReactDOM.render(<App />, document.getElementById('root'));
	```
This line tells React to render the App.js within the `<div id='root'>` that we saw ealier in `index.html`. 
9. Now let's have a look at `App.js`. What do we see:
	- We import React to use in this file
	- We create a class called 'App' which extends `React.Component`. This means we create our own React Component called 'App'.
	- We define a `render` method on our App. This returns a bit of HTML, which will be rendered by React.
	- We export the App, meaning other files who import this file, will get the App Component (that part of the code in this file).
10. As you see we write html within Javascript while using React, we usually can't do this. We call this: JSX. Webpack translates this JSX (which the browser can't understand), to plain old Javascript (which the browser does understand).
11. You can edit the JSX in the render method to whatever html you want. Just be sure to always enclose everything with a single tag, such as a div:

	```javascript
	render() {
	    return (
			<div>
			  <h1>Welcome to React!</h1>
			  <p>A Javascript library for building awesome user 
			  interfaces.</p>
			  <a href="https://facebook.github.io/react/">Read 
			  more about React</a>
			</div>
		);
	}
	```
Source: https://github.com/nextminds/traineeship-react/releases/tag/1

## 2. Create a Counter Component
> We learn: re-use of components, this.state and event-handlers

We are now going to create a counter to use in our app. This counter will display a number which is incemented every time we click on a button. For this we are going to create a new React Component in a new file.

1. Create a new file called `Counter.js` inside `src/`
2. Copy the contents of App to this file, as we want to create a new component
3. Edit the file, so that we have a component called `Counter`, which displays a `h2` saying '0' and a `button` saying '+1'.

	```javascript
	import React from 'react';
	
	class Counter extends React.Component {
	    render() {
	        return (
	            <div>
	                <h2>0</h2>
	                <button>+1</button>
	            </div>
	        );
	    }
	}
	
	export default Counter;
	```
	
4. Now to use this Counter component in our App, we have to import it an render it:
	
	```javascript
	import React from 'react';
	import Counter from './Counter';
	
	class App extends React.Component {
	    render() {
	        return (
	            <div>
	                <h1>Counter</h1>
	                <Counter />
	            </div>
	        );
	    }
	}
	
	export default App;
	```
	
	> Custom components are always Capitalized, regular html elements are always completely in lower case!
	
5. Take a peek at the browser to see the result... The button is not working yet, for this, we need to write some code.
6. First we're going to setup `this.state` in Counter. The `state` of a React Component is a bit of data that can change over time. Every time it changes, the React Component will re-render, using that data. We need to set an initial state, for this we add a constructor to our class. We always need to say `super()` in constructors of classes which extend others.

	```javascript
    constructor(){
        super();
	
        this.state = {
            count: 0
        };
    }
	```
	
7. Now we can use `this.state.count` in our render method. If we change the count in the constructor to 1 or 100, it will render that instead of 0:
	
	```javascript
	    render() {
	        return (
	            <div>
	                <h2>{this.state.count}</h2>
	                <button>+1</button>
	            </div>
	        );
	    }
	```

8. The final trick is to listen to clicks on the button and change the counter state. First we add a click-listener to our button:
	
	```html
	<button onClick={ this.plusOne.bind(this) }>+1</button>
	```

	This means: when you click the button, perform the `plusOne` method of this class. We should now define a `plusOne` method which changes the `state`:
	
	```javascript
	plusOne() {
	    this.setState({
	        count: this.state.count + 1
	    });
	}
	```
	
	There you have it: the user clicks the button, the `plusOne` method is called, the state is changed, the counter is now 1 higher. After the state changes, React will automatically call the `render`, which will show the same html, with the new counter value.

> **Key Takeaway**
> Every time the state of a component changes, it rerenders

9. All React component are reusable, so we can go ahead and add 3 or more independent Counters to our app:
```
class App extends React.Component {
    render() {
        return (
            <div>
                <h1>3 Counters</h1>
                <Counter />
                <Counter />
                <Counter />
            </div>
        );
    }
}
```
Source: https://github.com/nextminds/traineeship-react/releases/tag/2

## 3. Make a Simple Score Board
> Props, callbacks, inter-component-communication

We are now going to turn these counters into a scoreboard app. This app will show a list of players with each their own score.

1. First we want to show these players and their counters in a table. Let's create a ScoreBoard component in ScoreBoard.js:
	```
	import React from 'react';
	
	class ScoreBoard extends React.Component {
	    render() {
	        return (
	            <table>
	                <tbody>
	                    
	                </tbody>
	            </table>
	        );
	    }
	}
	
	export default ScoreBoard;
	```
2. Now we create a Player component, which will fill the ScoreBoard later:
	
	```javascript
	import React from 'react';
	
	class Player extends React.Component {
	    constructor(){
	        super();
	
	        this.state = {
	            score: 0
	        };
	    }
	
	    plusOne() {
	        this.setState({
	            score: this.state.score + 1
	        });
	    }
	
	    render() {
	        return (
	            <tr>
	                <td>{this.props.name}</td>
	                <td>{this.state.score}</td>
	                <td>
	                    <button onClick={this.plusOne.bind(this)}>+1</button>
	                </td>
	            </tr>
	        );
	    }
	}
	
	export default Player;
	```

3. Now add a few Players to the ScoreBoard, we add their name as a **prop**:
	```html
	<table>
	    <thead>
           <tr>
                <td>Name</td>
                <td>Score</td>
                <td>+1</td>
            </tr>
        </thead>
        <tbody>
            <Player name="Benjamin" />
            <Player name="Wouter" />
            <Player name="Rory" />
        </tbody>
    </table>
	```
> **Key Takeaway**
> Every time the state of a component changes, it rerenders

4. Let's show a prize whenever a Player hits 10 points:

	```javascript
    renderPrize() {
        if(this.state.score >= 10){
            return <img src="http://goo.gl/u1KKqp" />
        }

        return null;
    }

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.state.score} {this.renderPrize()}</td>
                <td>
                    <button onClick={this.plusOne.bind(this)}>+1</button>
                </td>
            </tr>
        );
    }
	```

5. Now we want to communicate from our Children to the Parent, for this we use callbacks. Let's have the ScoreBoard display the last score. First change the plusOne method from the Player component:

	```javascript
   plusOne() {
        var newScore = this.state.score + 1;

        this.setState({
            score: newScore
        });

        this.props.onChange(this.props.name, newScore);
    }
	```
	Then listen to the onChange method in the ScoreBoard
	
	```javascript
	<Player name="Benjamin" onChange={this.onChangeScore.bind(this)} />
	```
	Then implement the onChangeScore method in the ScoreBoard
	
	```javascript
   onChangeScore(name, score){
        this.setState({
            message: name + " scored and has " + score + " points."
        });
    }
   ```
	
	Let's render that message below the table:
	
	```html
	<tfoot>
		<tr colSpan="3">
			<td>{this.state.message}</td>
		</tr>
	</tfoot>
	```
	*Note that: html attributes in React (JSX) should be written camelCased. So `colspan` becomes `colSpan` . For a full list see: https://facebook.github.io/react/docs/tags-and-attributes.html*
	
	We should also add a constructor to ScoreBoard to initialize this.state:
		
	```javascript	
    constructor(){
        super();

        this.state = {
            message: "There are no scores yet."
        };
    }
	```
	

	> **Key Takeaway**
	> Children can Communicate to their parents through callbacks. The parents are in charge.
	
source: https://github.com/nextminds/traineeship-react/releases/tag/3

## 4. Create an Interactive Scoreboard App
> We learn: rendering lists, data manipulation with Array.map, controlled components

Instead of adding multiple Player components manually in the ScoreBoard, we should generate these components based on data. Then we could also do things like: add new Players on the fly, sort players by highest score, etc.

1. Let's first create an array of players, and render a Player for each user:

	```javascript	
    constructor(){
        super();

        this.state = {
            message: "There are no scores yet.",
            players: [
                { name: "Benjamin", score: 0},
                { name: "Wouter", score: 0 },
                { name: "Rory", score: 0 }
            ]
        };
    }
	```
	and now loop through these by using Array.map. Array.map is an ES6 function that returns a new item for each item in an array. In this case: for each player in the this.state.players array, return a <Player /> Component to the render function:
	```javascript
    <tbody>
        {this.state.players.map(this.renderPlayer.bind(this))}
    </tbody>
	```
	and define the renderPlayer method on ScoreBoard:
	
	```javascript
   renderPlayer(player){
        return <Player 
            name={player.name} 
            score={player.score} 
            onChange={this.onChangeScore.bind(this)} 
            />;
    }
	```
	
	> **Key Takeaway**
	> ES6 function Array.map returns a new item for each item in an array. Use it to render lists.

2. But now we're not using the scores from the ScoreBoard, but still the scores in Player. It's better to have all our data in one place: the ScoreBoard. First, let's simplify the Player, so it doesn't use it's own `this.state.score`, but the passed down `this.props.score` . 

	```javascript
   constructor(){
        super();
    }
    
    plusOne() {
        this.props.onChange(this.props.name,  this.props.score + 1);
    }

    render() {
        return (
            <tr>
                <td>{this.props.name}</td>
                <td>{this.props.score} {this.renderPrize()}</td>
                <td>
                    <button onClick={this.plusOne.bind(this)}>+1</button>
                </td>
            </tr>
        );
    }
	```
3. But now the scores aren't working, because the scores passed down by ScoreBoard are always 0, and they never change. So whenever the Player component changes a score, we want the ScoreBoard component to save this value to its own state. For this we can re-use the onChangeScore callback and the Array.map function to create a new player list:

	```javascript
    onChangeScore(name, score){
        // create a new list of player by looping over the existing list
        // and replacing the player we want to change the score for
        var oldPlayers = this.state.players;
        var newPlayers = oldPlayers.map(function(player){
            if(player.name == name){
                return {
                    name: player.name,
                    score: score
                }
            }

            return player;
        });

        this.setState({
            message: name + " scored and has " + score + " points.",
            players: newPlayers
        });
    }
    ```

Ideas to make our app better:
- All the scores together and show the total score
- Use Array.sort in the render method of Scoreboard to sort players by score
- Color the highest score green, lowest red

Source: https://github.com/nextminds/traineeship-react/releases/tag/4

## 5. Implementing Add Functionality
> We learn: forms, refs, data manipulation, external data

But what if we want to add players on the fly, while running the application? Let's create a simple form to add a player.

1. Create a new Component called AddPlayer.js

	```javascript
	import React from 'react';
	
	class AddPlayer extends React.Component {
	
	    onSubmit(event){
	        // if we don't call event.preventDefault, the browser will think we want to submit the form
	        event.preventDefault();
	        this.props.onSubmit(this.refs.username.value);
	    }
	
	    render() {
	        return (
	            <form onSubmit={this.onSubmit.bind(this)}>
	                <label>Username</label>
	                <input ref="username" />
	                <button>Add Player</button>
	            </form>
	        );
	    }
	}
	
	export default AddPlayer;
	```

	> **Key Takeaway**
	> Whenever using events in React, remember to event.preventDefault(), or the browser may try to send a request to the server.
	
	> **Key Takeaway**
	> Use refs to reference html elements or React components that are rendered.
	
2. Add this component to our ScoreBoard.js and use the onSubmit callback:
		
	```javascript
	<AddPlayer onSubmit={this.onAddPlayer.bind(this)} />
	```
	and:
		
	```javascript
    onAddPlayer(username){
        var newPlayer = { name: username, score: 0 };
        var newPlayers = this.state.players.concat(newPlayer);
        this.setState({
            players: newPlayers
        });
    }
	```

3. Get the initial data from an external source

	```javascript
    constructor(){
        super();

        this.state = {
            message: "There are no scores yet.",
            players: []
        };
    }

    componentDidMount(){
        // the jQuery.get callback will create a new context (this), so we need to remember what 'this'
        var self = this;
        jQuery.get("http://nextminds.github.io/scoreboard.json", function(data){
            self.setState({
                players: data.players
            });
        });
    }
	```

source: https://github.com/nextminds/traineeship-react/releases/tag/5.3

More ideas:
- A remove button behind each Player to remove them
- Create an API with Rails and Post and Delete the changes to/form an external API
- Show a loading indicator (spinner) while the requests are done

** TODO TODO TODO ** 
explain how to build to a single JS file and use this JS file within your project.
** TODO TODO TODO ** 

-------------


## 6. Other features
Todo: just tell them about this stuff, no coding: zelf uitzoeken.
### Life cycle callbacks

### Styling in React and Webpack
- className instead of class property
- import styles with webpack: `require('./style.css')`

### React Transitions

### ReactTestUtils and Jest
- Write a test for the counter component: add props, check some rendering
- Write a test for the application component: simulate a click, check the score
- Write a test to check the form and data manipulation

###8. Virtual DOM, performance optimisations
- Explain virtual DOM
- Explain how shouldComponentUpdate and shallowCompare can help - performance
- Explain PureRenderMixin, javascript object references :o
- Immutable data

React-Router, Flux?