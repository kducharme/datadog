# React Guide
General tips to help with creating a react app

## Setup
Note — this is a create-react-app that uses SCSS
1. Do this
2. `npm install --save node-sass-chokidar`
3. `npm install --save npm-run-all`
4. Update package.JSON file to be:

```
{
  "name": "datadog",
  "version": "0.1.0",
  "private": true,
  "dependencies": {
    "node-sass-chokidar": "^1.3.0",
    "react": "^16.4.0",
    "react-dom": "^16.4.0",
    "react-router-dom": "^4.2.2",
    "react-scripts": "1.1.4"
  },
  "scripts": {
    "start-js": "react-scripts start",
    "start": "npm-run-all -p watch-css start-js",
    "build-js": "react-scripts build",
    "build": "npm-run-all build-css build-js",
    "test": "react-scripts test --env=jsdom",
    "eject": "react-scripts eject",
    "build-css": "node-sass-chokidar src/styles/index.scss -o public/",
    "watch-css": "npm run build-css && node-sass-chokidar src/styles/index.scss -o public/ --watch --recursive"
  },
  "devDependencies": {
    "npm-run-all": "^4.1.3"
  }
}
```

## JSON Server
If you want to spin up a fake API/DB quickly, use JSON server:
1. Create a new folder called `database`
2. Add a `db.json` file
3. Add your data
4. Launch the server with `json-server -p 4000 --watch db.json` (using port 4000 because React is using port 3000)

More info: [GitHub - typicode/json-server: Get a full fake REST API with zero coding in less than 30 seconds (seriously)](https://github.com/typicode/json-server)

## JSON Generator
[JSON Generator – tool for generating random JSON data](https://next.json-generator.com/)
Example file:
```
[
  {
    'repeat(50, 50)': {
      id: '{{objectId()}}',
      status: '{{random("OK", "Warn", "Alert", "No Data")}}',
      name: '{{random("Postgres CPU high", "ctx-pshard is running out of memory", "Unclean 			leader election detected", "Cluster is over-provisioned", "Cluster is running out of 			CPU", "Lamda CPU overloaded", "A kafka partition is not replicated")}}',
      type: '{{random("APM", "Composite", "Custom", "Event", "Host", "Integration", "Metric", 		"Network", "Outlier", "Process")}}',
      tags: '{{random("Kafka", "Amazon", "DevOps", "Front-End", "Google Cloud", "Web 					services", "Outlier", "Urgent", "Cluster", "Memory")}}',
      owner: '{{firstName()}} {{surname()}}',
    }
  }
]
```

## Fun Tips
* If you select a component in the React console, you can go to the regular console and type $r, which will show the full React component object

## Events
* Events are written in-line when writing JSX. Then, the actual event is written in the component outside of the render() method. An example:
```
class PageNavigation extends React.Component {
	  openModal() {
		console.log('you clicked me')
	  }
    render() {
        return (
            <div className='pageNav'>
                <button onCLick={this.openModal}>Click me</button>
            </div>
        )
    }
}
```

* To access `this` within a custom method, you need to use an arrow function to bind the value of `this` to the method. An example”

```
	  openModal = event => {
		console.log(this)
	  }
```

## JSX
* To utilize regular old JS while writing in JSX, wrap the code in `{ }`

## Stateless Functional Components
* If the component is just receiving props and returning JSX, you can use stateless functional components. An example of this is:

```
const Header = props => (
     <div className='filters__header'>
        <h2>{props.title}</h2>
    </div>
)
export default Header;
```

* You can take this a step further and de-structure the props to their own variable. This works really well with multiple props being passed in. An example:

```
const Header = ({ title, description }) => (
     <div className='filters__header'>
        <h2>{title}</h2>
		  <p>{description}</p>
    </div>
)
export default Header;
```

## State
* An object that lives within a component that stores the data that the component/its children needs.

## Props
* Props are how the data gets to the components. Compared to state, which is the home of the data, the props is the transportation (bus, car, etc.) to get the data to its destination
	* Similar to passing an argument to a function
* To pass in anything other than a string, wrap the props in { }. For example, if passing in an array, your code would be `fruit = { [‘banana’, ‘apple’] }`

## constructor()
* Method that runs whatever is inside of it before the component is mounted. To do this, you need to run super() first to run `React.Component` first. Example:

```
constructor() {
  super();
  console.log('about to create component');
}
```

* The key value of  the constructor() method is binding `this` to a method/event in your component. Example:

```
class PageNavigation extends React.Component {
	  constructor() {
	  	super();
		this.openModal = this.openModal.bind(this)
	  }
	  openModal() {
		console.log(this)
	  }
    render() {
        return (
            <div className='pageNav'>
                <button onCLick={this.openModal}>Click me</button>
            </div>
        )
    }
}
```

*  **NOTE:**You can use an arrow function to bind `this`. See Events above.

## render()
* To return multiple lines, add parentheses to return. Ex: `return (code here)`
To return multiple children, wrap in `<React.Fragment> /code here/ </React.Fragment>`
	* Use  `import React, { Fragment } from "react";` to just wrap in `<Fragment>` 

## componentDidMount()
* Checks whether or not the component is attached to virtual DOM. Example:
- - - -
```
componentDidMount() {
	console.log('mounted')
}
```