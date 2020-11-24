

* In this project you can find a team to help you with a project. I use Gravatar to add icons. A user can create, delete or update a profile. A user can add or delete experience. You can also delete the account. Users are allowed to see other profiles. You can create a new post or remove a post. You can like, unlike a post and add or remove a comment. You have email/password authentication.

* about:
  - To run this project you need to change process.env.DEV_TEAM from (./src/services/axios.js) with your environment variable or url. 
  - I created this project using create-react-app tool.
  - I used react hooks to handle custom functionality that gets executed during the different phases of a component.
  - I used redux to manage the app state.
  - I used react props system and redux to pass data through components.
  - This project uses gravatar images.
  - I run this project in heroku using a buildpack, --buildpack https://github.com/mars/create-react-app-buildpack.git.

* dependencies:
    - "axios" // used to handle server req
    - "moment" // a JavaScript date library for parsing, validating, manipulating, and formatting dates
    - node-sass // used to compile .scss files to css.
    - "normalize.css" // used for better cross-browser consistency.
    - "react-redux" // It lets your React components read data from a Redux store, and dispatch actions to the store to update data.
    - "react-router-dom" // used to navigate between different components.
    - "redux" // a predictable state container for JavaScript applications
    - "redux-devtools-extension" // used to visualize actions and state changes that take place in a redux application.
    - "redux-thunk" // a middleware used to handle async actions
