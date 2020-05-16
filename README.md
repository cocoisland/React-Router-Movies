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

**What is Routing?**
> Being able to access information based on a URL is not only a powerful tool at our disposal as end-users and developers, but it is also a standard. Routing is essential for handling a communication piece between computers. Routing is the way we navigate through websites and web applications today. When we click on a link on any web app or website, we are routing to a URL and requesting some information that lives somewhere else. You do this every day - just type www.google.com in a web browser, and you’ve utilized routing to get resources from a server.

**What is a Server?**
> Before we talk about the how of routing, we need a solid definition of the what. In computer science, the term “server” refers to centralized resources on a network. These servers are physical devices, usually housed with other servers in large warehouses, that run the “behind the scenes” work of the internet like data storage. When you route, you’re routing to a server.

> Websites and Web-applications all rely heavily on information that is controlled by a server. We can’t get away from them, even when we hear buzz-words like “serverless” servers (hint: they’re not really server-less) we still rely on machines that communicate across channels to deliver content to us as end-users. Imagine if every time you clicked on something on a website, you had to request a resource from a server, and then the server had to go and retrieve that resource, and then that server had to send back some HTML/CSS and eventually some JavaScript in order to display the data on the screen. For a long time, this was how the web worked.This hasn’t entirely gone away, but we now have a slightly better way of doing things.

> This image does a really good job of showing some of the key differences between Client-side (traditional) and Server-side(SPA) routing.

![Traditional client-server vs SPA](https://imagebin.ca/40yMWdOcgBfd/IC690875.png)

**Server-Side Routing**
> When we request information from a server (by clicking on a link or button), that server then sends back the document that was requested. For example, we click on a link and our URL changes to match the request, then the server goes and finds a template or some HTML file and sends it back across the world wide web to deliver that content to the user.

> All of this is handled and achieved on the server, and there are a few things that happen here. First, the server will refresh the web page that we’re looking at. This is because a new request was made for information, and the information given was a bunch of DOM elements, so we have to re-paint the web page. The information requested will be the only information given, no more, and no less. Because of this, we get the opportunity to load smaller portions of the webpage as opposed to requesting/loading the entire thing the whole time the way that we do in Client-Side Routing.

> When you (the client) request a lot of information, your computer and subsequent internet-related devices run through a lot of protocols. The process can be really slow, especially when bandwidth is an issue.

**Client-Side Routing**
> Because of the arrival of tools like Google Chrome’s V8 Engine, we can do a lot of things that weren’t previously possible. One of those new patterns is using JavaScript to maintain state (or memory) within our applications and use that memory to tell the Browser what to display when a resource is requested.

> When Routing is handled internally by the JavaScript that is already on the page, we achieve what is known as Client-side routing. And this tool is how we get things done today, especially in React! And the best part about this is that the page won’t refresh! The data is just there, displayed when we ask for it. How this works is that when a user clicks on a requested resource, instead of the client asking for that resource from the server via a URL, JavaScript will prevent this. We then get the resource (state) that is already available to us rendered out, and when using react, this happens beautifully through component-based architecture.

> **React Router** is declarative style routing for React applications. React Router is a versatile tool because it can be used for React and React Native as well. The best part of React Router is that it pushes the envelope for what a router should be on the client. Since it was built for use within a React ecosystem, it uses a Reactive & Declarative context. This means we get a much more dynamic routing experience when building and designing our Routes within our React Apps.

> **Route** is a way of getting to a destination. A route can specify which components to render on the page, and in what order, as we’ve seen before.



> Example of App.js before hooks should look something like this:

```js
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
```

## useParam
> The useParam hook relies on props to pass new and changing data into the app. Parameters are placeholders in a URL that represent some changing data. 

```js
<Route path='/:handle' component={Profile} />
```

> The path is specified with a : and the component will load accordingly.

```js
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
```

> In our **AvengerList.js** file, we’ll need to import useParams and set up the parameter for Avenger.

```js
import React from "react";
import { useParams } from "react-router-dom";

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
```

> Once this is in place you should be able to visit a site such that ourapp.com/avengers/3 will render information about Captain America. Similarly, ourapp.com/avengers/4 should match and render information about Spiderman, and so on. Play around with this feature using different URL routes before moving on.

### useRouteMatch
> In previous versions of React Router, developers used a workaround to manually sort and match routes. For illustration purposes though, this example of such highly redundant code is still pretty relevant.

```js
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
```

> With react router 5.1, we can simply reference ${url} in place of redundant links. The resulting code is cleaner and less prone to error.Study the following example before moving on.

```js
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
```

Follow Along
Let’s add the useRouteMatch hook to our Avenger’s app to dynamically route to multiple avengers.

```js
// import the hook in our App.js file like so:
import { useRouteMatch } from "react-router";

// declare a variable called match and give it the value of the route path to follow. 
const { path, url } = useRouteMatch();

// The only thing we need to add to our lists is the {url} to our <NavLink> elements such that anyurl.com/anything/hero/movies will be a valid URL. By adding this we are telling React to first render information about the hero, then, when the movies parameter is added (manually or via button click), to load the list of movies that the hero is in. We don’t need to write a new route for each hero, we can simply use {url} to specify that the same route can be used for any hero.
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
```

### useHistory.
```js
import { useHistory } from 'react-router-dom'

function BackButton({ children }) {
  let history = useHistory()
  return (
    <button type="button" onClick={() => history.goBack()}>
      {children}
    </button>
  )
}
```
> This is useful for navigation, among other things.


