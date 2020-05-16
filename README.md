# Client Side Routing w/ React Router v. 5

Topics:

* React Router
* Using Link and NavLink to navigate to specific routes
* Passing Route Parameters
* Passing props to components rendered by the Router

## Instructions

- [ ] **Fork** this repository, then clone your fork.
- [ ] **NOTE** You have 2 servers that you will be running here so read these instructions carefully.
- [ ] **In the root of this directory**: Run `npm install` to download dependencies.
- [ ] Run the server using `npm start` or `node server.js`. (Don't worry too much about this process, you'll get used to doing this and it will be explained more in the future).
- [ ] In a separate terminal cd into the `client` folder and run `npm install` to download dependencies.
- [ ] Still inside the `client` folder run `npm start` to run the client application.

- [ ] Once your application is up and running on the client, you should see a browser window that looks like this at `localhost:3000` (although the port number will be different if 3000 is being used).

  ![Movies Home](https://ibin.co/3xhmmHVl9BKF.png)

### Part 1

- [ ] Wrap your app with the router.
- [ ] Inside your App file add two routes.
  - [ ] one route for `/` that loads the `MovieList` component. **This component will need the movies injected into it via props**.
  - [ ] one route that will take an `id` parameter after`/movies/` (ex: `/movies/2`, `/movies/3` where the id is dynamic). This route should load the `Movie` component.

### Part 2

- [ ] Make it so that the card in `MovieList` is a link, this should direct the user to the `/movies/{id of movie here}` URL, where `:id` is the id of the individual movie.
- [ ] When a user clicks on a movie card they should be taken to `/movies/{id of movie here}` to see the details for the selected movie.
- [ ] You will need to modify line 13 of `Movie.js` in order to accept the correct id for the movie selected.
- [ ] Add functionality so the `Home` button on the `SavedList` component navigates back to home.
- [ ] You should now be able to navigate back and forth between the individual movies and the home screen.

## Stretch Goals

If you have completed Parts 1 & 2 feel free to move on to these stretch goals.

### Refactor so that our code is DRY

- [ ] You may notice that we are using essentially the same exact JSX code in the `Movie` component and the `MovieDetails` component in `MovieList.js` create a new component in `MovieCard.js` that returns this JSX code. Then remove the old code from `Movie` and `MovieDetails` and instead return the new `MovieCard` component.

### Add `Save Movie` functionality

- [ ] You will notice there is a 'Saved Movies' component that we are not currently using. In this step you will add the functionality to save a movie. You will need to pass the `addToSavedList` function to the `Movie` component. Once you have done that you will need to add a click handler to the save button. You will need to uncomment lines 24-27 in `Movie.js` to complete this. 

### Turn your Saved Movie list into `Link`s

- [ ] Your list of saved movies should be links to the movie itself. Study and understand what the `saveMovie` function is doing.

### Turn your Saved Movie `Link`s into `NavLink`s

- [ ] Navlink

# Client Side Routing w/ React Router v. 5
> **Client-side routing** is a JavaScript managed routing option. It offers control over your site URL & content without necessarily having to wait for a server to respond with content. It is designed to mimic the appearance of traditional multi page websites.

> What is **server-side routing?** It’s the way the web has worked for decades. Every link click & change of the address bar is a new request to a remote server. Every page load includes all page design elements, which must be re-downloaded. Including headers, navigation, sidebars, footers, etc. The server side routing method is not very efficient.

Overview
**What is Routing?**
> Being able to access information based on a URL is not only a powerful tool at our disposal as end-users and developers, but it is also a standard. Routing is essential for handling a communication piece between computers. Routing is the way we navigate through websites and web applications today. When we click on a link on any web app or website, we are routing to a URL and requesting some information that lives somewhere else. You do this every day - just type www.google.com in a web browser, and you’ve utilized routing to get resources from a server.

**What is a Server?**
> Before we talk about the how of routing, we need a solid definition of the what. In computer science, the term “server” refers to centralized resources on a network. These servers are physical devices, usually housed with other servers in large warehouses, that run the “behind the scenes” work of the internet like data storage. When you route, you’re routing to a server.

> Websites and Web-applications all rely heavily on information that is controlled by a server. We can’t get away from them, even when we hear buzz-words like “serverless” servers (hint: they’re not really server-less) we still rely on machines that communicate across channels to deliver content to us as end-users. Imagine if every time you clicked on something on a website, you had to request a resource from a server, and then the server had to go and retrieve that resource, and then that server had to send back some HTML/CSS and eventually some JavaScript in order to display the data on the screen. For a long time, this was how the web worked.This hasn’t entirely gone away, but we now have a slightly better way of doing things.

This image does a really good job of showing some of the key differences between Client-side (traditional) and Server-side(SPA) routing.

[Traditional client-server vs SPA](https://imagebin.ca/40yMWdOcgBfd/IC690875.png)

Server-Side Routing
When we request information from a server (by clicking on a link or button), that server then sends back the document that was requested. For example, we click on a link and our URL changes to match the request, then the server goes and finds a template or some HTML file and sends it back across the world wide web to deliver that content to the user.

All of this is handled and achieved on the server, and there are a few things that happen here. First, the server will refresh the web page that we’re looking at. This is because a new request was made for information, and the information given was a bunch of DOM elements, so we have to re-paint the web page. The information requested will be the only information given, no more, and no less. Because of this, we get the opportunity to load smaller portions of the webpage as opposed to requesting/loading the entire thing the whole time the way that we do in Client-Side Routing.

When you (the client) request a lot of information, your computer and subsequent internet-related devices run through a lot of protocols. The process can be really slow, especially when bandwidth is an issue.

Client-Side Routing
Now that we know about how things used to be done, we can talk about modern routing. Javascript and the other tools that we get to work with within Javascript are super sophisticated. Because of the arrival of tools like Google Chrome’s V8 Engine, we can do a lot of things that weren’t previously possible. One of those new patterns is using JavaScript to maintain state (or memory) within our applications and use that memory to tell the Browser what to display when a resource is requested.

When Routing is handled internally by the JavaScript that is already on the page, we achieve what is known as Client-side routing. And this tool is how we get things done today, especially in React! And the best part about this is that the page won’t refresh! The data is just there, displayed when we ask for it. How this works is that when a user clicks on a requested resource, instead of the client asking for that resource from the server via a URL, JavaScript will prevent this. We then get the resource (state) that is already available to us rendered out, and when using react, this happens beautifully through component-based architecture.

Follow Along
Read through this medium article here. Look at the image above as you read for a visual representation of how both server-side routing and client-side routing work.

Challenge
On your own, write down some of the pros and cons for both server-side routing and client-side routing, and then write a paragraph of what you like about both, and which you would prefer to use and why. Submit this to your TL via slack.

Learn to set up routes within a React Application using the Router, Route and Link components
Overview
React Router
React Router is declarative style routing for React applications. React Router is a versatile tool because it can be used for React and React Native as well. The best part of React Router is that it pushes the envelope for what a router should be on the client. Since it was built for use within a React ecosystem, it uses a Reactive & Declarative context. This means we get a much more dynamic routing experience when building and designing our Routes within our React Apps.

Route
Routes are a way of getting to a destination. A route can specify which components to render on the page, and in what order, as we’ve seen before.

To set up React Router, you need to declare what components will be mounted when certain URL paths are met. This step happens after we’ve wrapped our Root component in the Router or BrowserRouter component. The best part of React Router is that you can do this at pretty much any point during your development process, whereas previously you had to declare your routes early on in the development cycle. What this allows us to do is figure out more important things without allowing routing to get in the way. React Router is a super useful tool for this reason!

Once you have React Router installed by using npm install react-router-dom, you can import the Route Component and use it within your application.

Copy
import { Route } from 'react-router-dom';
The Route component declares what components will be mounted based on what URL's the user requests. The best part about this process is that we get a chance to do this in a very “React” way. Lets picture a component Users that will display a list of users in your system when the URL www.coolestapp.com/users is requested. The Route component takes in a few props; the first is the URL path where the Route component will trigger. Next is the component prop. This is the component that you want React to mount when the URL matches the requested path. So in our case, when /users is requested, the Users component will be mounted.

Copy
<Route path="/users" component={Users} />
This route will take us to the users component whenever the /users URL is requested within our application. You may be thinking to yourself at this point, is that really it? The answer is: yes, it is! It’s really simple to declare routes and components that will be mounted when the routes are requested. It’s almost like your Route components ask you this question every single time you set one up: what component do you want mounted when a user asks for what URL path?

If you use this tool, you’ll hit each piece of your application, and how a user might interact with each component.

Now let’s see this all in action in a larger portion of an application. Picture an app that has 3 major components that will need to be rendered as part of a Navigation system: Home, Contact, and About. Each of these three components will need to be rendered when a user requests the "/", "/contact" and "/about" paths in our app. So, let us refer to our question above: what component do you want mounted when a user asks for what URL path? In our case, we want the following:

A user requests / so we will mount the Home component A user requests /contact so we shall mount the Contact component A user requests /about so let us render the About component

Now that we have a framework let’s practice with it.

Copy
<Route path="/" component={Home}/>
<Route path="/contact" component={Contact}/>
<Route path="/about" component={About}/>
The exact prop
And there we have it, we have successfully declared our Routes within our application. But we have a bit of a problem. A problem that is easily solved. If you’re looking at the React Router documentation, you may have already come across the exact prop, which is provided to us by the React Router API. This prop is a very important feature of the Route Component. It comes to us because of the way that the package was built. Let’s consider how this whole thing works.

When it comes down to it, we are using an API that already exists for us as web developers. And that is the History API that is built into our web browser. If the URL / and /about are both requested, and we have an algorithm to match the characters in the sequence /, /about. Both the / and /12 will match. Because of the way this is set up, if we request the route /about, then both the Home Component and the About Component will be rendered. React Router anticipates this, and the exact prop to the Route component solves the problem.

By placing exact on a <Route /> component, you are saying that the specific path will only trigger if it matches exactly the path requested. This defaults to false, so by simply including the exact prop on your Route component, it will set it to true and only mount our Home component when the specific path / is requested and not when /about is requested. Here is a link to the docs. And here is an example of how this will work.

Copy
<Route exact path="/" component={Home}/>
<Route path="/contact" component={Contact}/>
<Route path="/about" component={About}/>
This is the same as before only now our Home component route has the exact prop added to it. We have now solved the problem.

Link
The link component can be included just like any other component in your application. This will produce an anchor tag that will link to a pre-defined component of your choice. Remember, if we set up our routes properly, we’ll be able to use the anchor component to navigate our browsers to the path where a component can be mounted. We can think of our Route component as the boat on the ocean, and the Link as the wind and sails that make that boat move.

Copy
import { Link } from 'react-router-dom'

<Link to="/about">About</Link>
As is the case with all of the components that we get from React Router, Link will take a few props that we can use to control the component and allow it to work for us.

The first thing that Link takes as a prop (and most important) is the to props. Notice in the above code block that to is a string that looks like a URL. This is just like the href="/about" attribute on the anchor tag. This is how we navigate with React Router.

Switch
We won’t use it here, but in many online tutorials you will see the use of switch. If a route matches multiple routes enclosed in a switch statement, the browser will only render the first component it comes across. This can come in handy when considering nested routes and the like.

Follow Along
For the next four objectives we are going to work on an avengers app together.

Setting up React Router
Before we start we will need to install React Router and set up our directory. To install React Router, all we have to do is use npm to download the package. In the past, we used to include the entire react-router package, but today we get to specify which target we’re building for (Web or Native). Because we’re building for web, we’re going to target the react-router-dom package and include it into one of our applications.

Copy
npm install react-router-dom
Once you have it installed, all you need to do is include it as a package like any other npm package we’ve used to date. In addition, we’ll want to import React, ReactDOM, and our App component.

Copy
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import App from "./App";
Now we’ll use Router as our Base component that will wrap our entire app. We’ll do this by wrapping our <App /> component that we pass to ReactDOM.render. This way, what renders from App is controlled with <Router> as opposed to rendering everything in App.

Copy
ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById("root")
);
Route
Now we can set up routes for our Avenger’s app. We want to have a home page, and a list page. Later we’ll add an Avenger page. So our app routes are going to be organized something like this:

Copy
A user requests `/` so we will mount the `Home` component
A user requests `/avengers` so we will mount the `AvengerList` component
Next, we need to create a components directory. Inside that folder, we need a Home.js file and an AvengersList.js file. For now, just render a header element with “Home” and “Avenger List” in the respective components.

Add this to your .css file to use my styles, or style it up how you’d like on your own.

Add this data to your app and display the list of Avengers in the list component.

Import those new components into App.js. Let’s create the routes for our app. We will need to import the Route component. Our app imports should look something like this:

Copy
import React from "react";
import { Route } from "react-router-dom";
import AvengersList from "./Components/AvengersList";
import Home from "./Components/Home";
import "./styles.css";
Now we want to render two routes - home and avengers. For the home route we need to include the exact parameter to specify that any additional text after the "/" shouldn’t route to home. Go ahead and test with and without exact to see the difference here.

Copy
<Route exact path="/" component={Home}/>
<Route path="/avengers" component={AvengerList}/>
Before moving on, go to both URLs and make sure the components are rendering correctly.

Feel free to build out your Home component however you would like.

Adding Links
The next thing we want to do is incorporate links. We’ll do that by adding a nav bar.

We’ll use Link to make a way to route to the Home component and the AvengerList component.

First we need to add Link to our imports.

Copy
import { Route, Link } from "react-router-dom";
Then we’ll add the navigation bar to our App.

Copy
<ul className="navbar">
  <li><Link to="/">Home</Link></li>
  <li><Link to="/avengers">Avengers</Link></li>
</ul>
Try out the links to make sure they work, and then style the nav bar. Once that is done, go to your AvengerList component and add a Link somewhere in the mapped list of avengers that will route you to the AvengerPage. To show an example, I’ll do it here on the header element. You’ll notice that I am using an interpolated string so that we can build out the URL dynamically using the avenger’s id.

Copy
<Link to={`/avengers/${avenger.id}`}>
  <h3>{avenger.name}</h3>
</Link>
Take a minute to inspect your navbar and your wrapped header elements in the dev tools. Look for the anchor tags that get rendered by the Link component.

Our final App.js before hooks should look something like this:

Copy

import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import AvengersList from "./Components/AvengersList";
import Home from "./Components/Home";
import "./styles.css";

const App = () => {
  return (
    <Router>
      <nav className="navbar">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/avengers">Avengers</Link>
        </li>
      </nav>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/avengers" component={AvengersList} />
        </Switch>
      </div>
    </Router>
  );
};

export default App;

Challenge
Start up a new React app called friends, install react-router-dom and get it wired up to use React Router. Inspect your app in the browser with the React tools and make sure you see your app wrapped in the Router component (reference the image above).
In your friends app, add a new Home component and Friends component. Then add a route for each component. Test your app in the browser to make sure both apps are rendering at the correct route. Build out your Home component and then render out a list of friends data in the Friends component.
Make a navbar on the friends app. In the list component, add a Link component to the mapped list of friends to give us a way to route to the individual friend page.
Learn to use Router's useParam hook to add dynamic Routes to an application
Overview
React’s newest update, 5.1, released late in 2019 supports hooks. This is really helpful for routing, so we’ll spend the next few objectives exploring use cases of some common hooks.

useParam
The useParam hook relies on props to pass new and changing data into the app. Parameters are placeholders in a URL that represent some changing data. When we’ve set up routes in the past we’ve written some route like ` <Route path=”/employee` that corresponds to some component, but what if we want to load different data depending on the URL?

The useParam hook allows us to create dynamic routes that will render content based on the URL. So, instead of requiring that all routes are written out ahead of time, the URL determines what renders on the page. For example, a url "website.com/johnSmith" would render data about John Smith, while "website.com/janeDoe" would render data about Jane Doe - neither have to be specified in your code. The browser “matches” the URL to the data, thus the name. If no data is found, it throws an errorIn some ways this provides access to search parameters in the URL. Before React Router 5.1 this was only possible using match.params.

In order to use a parameter in routing we need to assign the route with a colon in App.js or wherever else the routes are defined. So, ` <Route path=”/employee becomes <Route path=”/:employee. With that simple change we can use the useParam` hook to create dynamic routes.

A real life example of this is Twitter. It would be crazy to imagine that every time a user makes a new profile, a new line of code has to be written. Instead, Twitter routes look something like this:

Copy
<Route path='/:handle' component={Profile} />
The path is specified with a : and the component will load accordingly.

Follow Along
Let’s return to our avengers app and created dynamic routes with useParam such that ourapp.com/avengers/Thor will render information about an avenger from our data.js file, in this case, Thor.

App.js
We don’t need to import UseParams in App.js, but we do need to make some changes here. Importantly, we need to pass data to avengersList and set up our routes such that they will accept any hero parameter.

Copy
<div className="App">
        <Switch>
          {/* we can use Route to render child components instead of having to use the component prop. This way we can easily pass down props to our components.  */}
          <Route path="/avengers/:hero">
            {/* Passing our data to avenger's list */}
            <Avenger key={hero.id} hero={hero} />
          </Route>
          <Route path="/avengers/">
            <AvengersList hero={hero} />
            {/* Passing our data to avenger's list */}
          </Route>

          {/* You can also render a component with the component prop if you do not need to pass any additional props to your component */}
          <Route path="/" component={Home} />
        </Switch>
      </div>
AvengerList.js
In our AvengerList.js file, we’ll need to import useParams and set up the parameter for Avenger.

Copy
import React from "react";
import { useParams } from "react-router-dom";

After that, we can edit our Avenger function to match the hero data to the route specified in the URL. JavaScript will look at the hero id and match it to the id in data.js.

Copy
function Avenger({ hero }) {
  // console.log("Props", props);
  const params = useParams();
  // we can use this hook to grab information about the way React Router matched this route

  // we want to match the hero to the route
  const heros = hero.find(item => item.id === Number(params.hero));
  return (
    <div className="character-card">
      <h2>{heros.name}</h2>
      <p>{heros.nickname}</p>
      <p>{heros.description}</p>
      <img src={heros.thumbnail} alt="random avengers img" />
    </div>
  );
}
export default Avenger;
Once this is in place you should be able to visit a site such that ourapp.com/avengers/3 will render information about Captain America. Similarly, ourapp.com/avengers/4 should match and render information about Spiderman, and so on. Play around with this feature using different URL routes before moving on.

Challenge
Create a dynamic route in your Friends application with useParams

Learn to use Router's useRouteMatch hook to add nested Routes to an application
Overview
The next hook we’ll look at is useRouteMatch. This hook lets you add nested routes to your application such that you can change a single parameter in the URL without having to change the whole thing. This way you could easily have a website.com/about/employee1/employee-details URL and website.com/about/employee2/employee-details URL, with only one specified route in your code.

In the example above, if we wanted to change our route such that “about” was “our story” or any different string, it wouldn’t break our webpage.

In previous versions of React Router, developers used a workaround to manually sort and match routes. For illustration purposes though, this example of such highly redundant code is still pretty relevant.

Copy
import { useRouteMatch } from 'react-router-dom'

function App() {
  const {path, url} = useRouteMatch();

  return (
    <li>
      <Link to = {`/about/employee1/employee-details`></Link>
      <Link to = {`/about/employee2/employee-details`></Link>
      <Link to = {`/about/employee3/employee-details`></Link>
      <Link to = {`/about/employee4/employee-details`></Link>
    </li>

    <Switch>
        <Route path = {`/about/employee1/employee-details`></Link>
        <Route path = {`/about/employee2/employee-details`></Link>
        <Route path = {`/about/employee3/employee-details`></Link>
        <Route path = {`/about/employee4/employee-details`></Link>
        <employee-details/>
        </Route>
        </Switch>
  )
}
With react router 5.1, we can simply reference ${url} in place of redundant links. The resulting code is cleaner and less prone to error.Study the following example before moving on.

Copy
import { useRouteMatch } from 'react-router-dom'

function App() {
  const {path, url} = useRouteMatch();

  return (
    <li>
      <Link to = {`${url}/employee-details`></Link>
    </li>

    <Switch>
        <Route path = {`${path}/employee-details`}>
        <employee-details/>
        </Route>
        </Switch>

  )
}
Follow Along
Let’s add the useRouteMatch hook to our Avenger’s app to dynamically route to multiple avengers.

As usual, we need to import the hook in our App.js file like so:

Copy
import { useRouteMatch } from "react-router";
Then, we can declare a variable called match and give it the value of the route path to follow. That might look something like this:

Copy
  const { path, url } = useRouteMatch();
The only thing we need to add to our lists is the {url} to our <NavLink> elements such that anyurl.com/anything/hero/movies will be a valid URL. By adding this we are telling React to first render information about the hero, then, when the movies parameter is added (manually or via button click), to load the list of movies that the hero is in. We don’t need to write a new route for each hero, we can simply use {url} to specify that the same route can be used for any hero.

Copy
  // path: "/avengers/:hero"
  // url: "/avengers/1"
  const heros = hero.find(item => item.id === Number(params.hero));
  return (
    <div className="characters-list-wrapper">
      <div className="character-card">
        <h2>{heros.name}</h2>
        <p>{heros.nickname}</p>
        <p>{heros.description}</p>
        <img src={heros.img} alt="random avengers img" />
        <nav className="nav-buttons">
        // replace 
          <NavLink to={`${url}/movies`}>Movie List</NavLink>
        </nav>
        <Route path={`${path}/movies`}>
          <Movies movielist={heros} />
        </Route>
      </div>
    </div>
  );
}
export default Avenger;
Before moving on, check your work by looking over the complete Avenger’s Example on CodeSandbox.

Challenge
Create a nested route in your Friends application with useParams

Learn to use Router's useHistory hook to programmatically navigate to other routes
Overview
The final hook we’ll look at today allows us to create dynamic elements (buttons, text, etc.) whose function changes based on a user’s history.

For example, in a storefront webpage, we could create a button called “return to last item” that would return to the last item the user viewed (wither that be a T-shirt, or a pair of shoes), rather than a default list of items or home page.

The hook we will use to accomplish this is called useHistory.

For example, code that looks like this would render the last component the user visited when the button is clicked.

Copy
import { useHistory } from 'react-router-dom'

function BackButton({ children }) {
  let history = useHistory()
  return (
    <button type="button" onClick={() => history.goBack()}>
      {children}
    </button>
  )
}
This is useful for navigation, among other things.

Follow Along
In the AvengerList component, you have rendered a list of Avengers, and you’re using the Link component to route to the AvengerPage route. Let’s change that to use the history object instead. Wherever you would like - on the wrapping div, or a button - add an onClick event handler that invokes a function to goBack.

As usual our first steps will be to 1) import useHistory and 2) declare it as a variable.

Copy
// import useHistory
import { useHistory } from "react-router"

//globally declare hook
const history = useHistory();
Once we’re set up with that we can add a button to our Avenger’s List component such that when clicked, the button will return to the last page.

Copy
//add button to return statement
return (
    <div>
      <h1>
        Avenger: </h1>
       <h1> {name} {nickname}</h1>
      <button type="button" onClick={() => history.goBack()}>
        Go Back
      </button>
    </div>
  );
}
Once this code is properly implemented you should be able to navigate between your Home and Avengers pages and use Go Back to route to your last visited page.
