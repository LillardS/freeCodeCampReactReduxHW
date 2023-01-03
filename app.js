// Redux

// Problem 1

const reducer = (state = 5) => {
    return state;
  }
  
  // Redux methods are available from a Redux object
  // For example: Redux.createStore()
  // Define the store here:
  
  const store = Redux.createStore(reducer);

// Problem 2

const store = Redux.createStore(
    (state = 5) => state
  );
  
  // Change code below this line
  
  let currentState = store.getState();

// Problem 3

// Define an action here:

let action = {
    type: 'LOGIN'
  }

// Problem 4

const action = {
    type: 'LOGIN'
  }
  // Define an action creator here:
  
  function actionCreator(action) {
    return action
  }

// Problem 5

const store = Redux.createStore(
    (state = {login: false}) => state
  );
  
  const loginAction = () => {
    return {
      type: 'LOGIN'
    }
  };
  
  // Dispatch the action here:
  
  store.dispatch(loginAction());

// Problem 6

const defaultState = {
    login: false
  };
  
  const reducer = (state = defaultState, action) => {
    // change code below this line
    if (action.type === "LOGIN") {
      return {
        login: true
      };
    } else {
      return state;
    }
    // change code above this line
  };
  
  const store = Redux.createStore(reducer);
  
  const loginAction = () => {
    return {
      type: "LOGIN"
    };
  };

// Problem 7

const defaultState = {
    authenticated: false
  };
  
  const authReducer = (state = defaultState, action) => {
    // change code below this line
    switch (action.type) {
      case "LOGIN":
        return {
          authenticated: true
        };
  
      case "LOGOUT":
        return {
          authenticated: false
        };
  
      default:
        return defaultState;
    }
    // change code above this line
  };
  
  const store = Redux.createStore(authReducer);
  
  const loginUser = () => {
    return {
      type: "LOGIN"
    };
  };
  
  const logoutUser = () => {
    return {
      type: "LOGOUT"
    };
  };

// Problem 8

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const defaultState = {
  authenticated: false
};

const authReducer = (state = defaultState, action) => {

  switch (action.type) {

    case LOGIN:
      return {
        authenticated: true
      }

    case LOGOUT:
      return {
        authenticated: false
      }

    default:
      return state;

  }

};

const store = Redux.createStore(authReducer);

const loginUser = () => {
  return {
    type: LOGIN
  }
};

const logoutUser = () => {
  return {
    type: LOGOUT
  }
};

// Problem 9

const ADD = 'ADD';

const reducer = (state = 0, action) => {
  switch(action.type) {
    case ADD:
      return state + 1;
    default:
      return state;
  }
};

const store = Redux.createStore(reducer);

// Global count variable:
let count = 0;

// Change code below this line
function add(){
count += 1;
}
store.subscribe(add);
// Change code above this line

store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);
store.dispatch({type: ADD});
console.log(count);

// Problem 10

const INCREMENT = 'INCREMENT';
const DECREMENT = 'DECREMENT';

const counterReducer = (state = 0, action) => {
  switch(action.type) {
    case INCREMENT:
      return state + 1;
    case DECREMENT:
      return state - 1;
    default:
      return state;
  }
};

const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const authReducer = (state = {authenticated: false}, action) => {
  switch(action.type) {
    case LOGIN:
      return {
        authenticated: true
      }
    case LOGOUT:
      return {
        authenticated: false
      }
    default:
      return state;
  }
};

const rootReducer = Redux.combineReducers({
  count: counterReducer,
  auth: authReducer
}); // Define the root reducer here

const store = Redux.createStore(rootReducer);

// Problem 11

const ADD_NOTE = 'ADD_NOTE';

const notesReducer = (state = 'Initial State', action) => {
  switch(action.type) {
    // Change code below this line

      case ADD_NOTE:
      return action.text;

    // Change code above this line
    default:
      return state;
  }
};

const addNoteText = (note) => {
  // Change code below this line
  
    return {
    type: ADD_NOTE,
    text: note
  };

  // Change code above this line
};

const store = Redux.createStore(notesReducer);

console.log(store.getState());
store.dispatch(addNoteText('Hello!'));
console.log(store.getState());

// Problem 12

const REQUESTING_DATA = "REQUESTING_DATA";
const RECEIVED_DATA = "RECEIVED_DATA";

const requestingData = () => {
  return { type: REQUESTING_DATA };
};
const receivedData = data => {
  return { type: RECEIVED_DATA, users: data.users };
};

const handleAsync = () => {
  return function(dispatch) {
    // dispatch request action here

    dispatch(requestingData());

    setTimeout(function() {
      let data = {
        users: ["Jeff", "William", "Alice"]
      };
      // dispatch received data action here

      dispatch(receivedData(data));
    }, 2500);
  };
};

const defaultState = {
  fetching: false,
  users: []
};

const asyncDataReducer = (state = defaultState, action) => {
  switch (action.type) {
    case REQUESTING_DATA:
      return {
        fetching: true,
        users: []
      };
    case RECEIVED_DATA:
      return {
        fetching: false,
        users: action.users
      };
    default:
      return state;
  }
};

const store = Redux.createStore(
  asyncDataReducer,
  Redux.applyMiddleware(ReduxThunk.default)
);

// Problem 13

const INCREMENT = "INCREMENT"; // define a constant for increment action types
const DECREMENT = "DECREMENT"; // define a constant for decrement action types

// define the counter reducer which will increment or decrement the state based on the action it receives
const counterReducer = (state = 0, action) => {
  switch (action.type) {
    case INCREMENT:
      return state + 1;

    case DECREMENT:
      return state - 1;

    default:
      return state;
  }
};

// define an action creator for incrementing
const incAction = () => {
  return {
    type: INCREMENT
  };
};

// define an action creator for decrementing
const decAction = () => {
  return {
    type: DECREMENT
  };
};

// define the Redux store here, passing in your reducers
const store = Redux.createStore(counterReducer);

// Problem 14

const ADD_TO_DO = "ADD_TO_DO";

// A list of strings representing tasks to do:
const todos = [
  "Go to the store",
  "Clean the house",
  "Cook dinner",
  "Learn to code"
];

const immutableReducer = (state = todos, action) => {
  switch (action.type) {
    case ADD_TO_DO:
      // don't mutate state here or the tests will fail

      return state.concat(action.todo);
    // or return [...state, action.todo]

    default:
      return state;
  }
};

// an example todo argument would be 'Learn React',
const addToDo = todo => {
  return {
    type: ADD_TO_DO,
    todo
  };
};

const store = Redux.createStore(immutableReducer);

// Problem 15

const immutableReducer = (state = ["Do not mutate state!"], action) => {
    switch (action.type) {
      case "ADD_TO_DO":
        // Don't mutate state here or the tests will fail
        let arr = [...state, action.todo];
        return arr;
      default:
        return state;
    }
  };
  
  const addToDo = todo => {
    return {
      type: "ADD_TO_DO",
      todo
    };
  };
  
  const store = Redux.createStore(immutableReducer);

//   Problem 16

const immutableReducer = (state = [0, 1, 2, 3, 4, 5], action) => {
    switch (action.type) {
      case "REMOVE_ITEM":
        // don't mutate state here or the tests will fail
        return [
          ...state.slice(0, action.index),
          ...state.slice(action.index + 1, state.length)
        ];
      default:
        return state;
    }
  };
  
  const removeItem = index => {
    return {
      type: "REMOVE_ITEM",
      index
    };
  };
  
  const store = Redux.createStore(immutableReducer);

//   Problem 17

const defaultState = {
    user: "CamperBot",
    status: "offline",
    friends: "732,982",
    community: "freeCodeCamp"
  };
  
  const immutableReducer = (state = defaultState, action) => {
    switch (action.type) {
      case "ONLINE":
        return Object.assign({}, state, { status: "online" });
      default:
        return state;
    }
  };
  
  const wakeUp = () => {
    return {
      type: "ONLINE"
    };
  };
  
  const store = Redux.createStore(immutableReducer);

//   React & Redux

// Problem 1

class DisplayMessages extends React.Component {
    // change code below this line
    constructor(props){
      super(props);
      this.state={
        input:'',
        messages:[]
      }
    }
    // change code above this line
    render() {
      return <div />
    }
  };

// Problem 2

class DisplayMessages extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        input: '',
        messages: []
      }
    }
    // add handleChange() and submitMessage() methods here
    handleChange(event){
      this.setState({
        input: event.target.value,
        messages: this.state.messages
      })
    }
  
    submitMessage(){
      this.setState({
        input: '',
        messages: [...this.state.messages, this.state.input]
      })
    }
  
    render() {
      return (
        <div>
          <h2>Type in a new Message:</h2>
          { /* render an input, button, and ul here */ }
          <input onChange={this.handleChange.bind(this)} value={this.state.input}/>
          <button onClick={this.submitMessage.bind(this)}>Submit</button>
          <ul>
            {this.state.messages.map((x, i)=>{
              return <li key={i}>{x}</li>
            })}
          </ul>
          { /* change code above this line */ }
        </div>
      );
    }
  };

// Problem 3

// define ADD, addMessage(), messageReducer(), and store here:
const ADD = "ADD";
const addMessage = message => {
  return {
    type: ADD,
    message
  };
};
const messageReducer = (previousState = [], action) => {
  switch (action.type) {
    case ADD:
      return [...previousState, action.message];
      break;

    default:
      return previousState;
  }
};

const store = Redux.createStore(messageReducer);

// Problem 4

// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};



const store = Redux.createStore(messageReducer);

// React:

class DisplayMessages extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {  
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

const Provider = ReactRedux.Provider;

class AppWrapper extends React.Component {
  // Render the Provider below this line
      render() {
      return (
        <Provider store={store}>
          <DisplayMessages />
        </Provider>
      );
    }
  // Change code above this line
};

// Problem 5

const state = [];

// Change code below this line

const mapStateToProps = (state)=>{
  return {
    messages: state
  }
}


// Problem 6

const addMessage = (message) => {
    return {
      type: 'ADD',
      message: message
    }
  };
  
  // Change code below this line
  
  const mapDispatchToProps = (dispatch) => {
      return {
          submitNewMessage: (message)=>{
              dispatch(addMessage(message))
          }
      }
  }

// Problem 7

const addMessage = (message) => {
    return {
      type: 'ADD',
      message: message
    }
  };
  
  const mapStateToProps = (state) => {
    return {
      messages: state
    }
  };
  
  const mapDispatchToProps = (dispatch) => {
    return {
      submitNewMessage: (message) => {
        dispatch(addMessage(message));
      }
    }
  };
  
  class Presentational extends React.Component {
    constructor(props) {
      super(props);
    }
    render() {
      return <h3>This is a Presentational Component</h3>
    }
  };
  
  const connect = ReactRedux.connect;
  // Change code below this line
  
  const ConnectedComponent = connect(mapStateToProps, mapDispatchToProps) (Presentational)

//   Problem 8

// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: '',
      messages: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.setState((state) => {
      const currentMessage = state.input;
      return {
        input: '',
        messages: state.messages.concat(currentMessage)
      };
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.state.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};

// React-Redux:
const mapStateToProps = (state) => {
  return { messages: state }
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (newMessage) => {
       dispatch(addMessage(newMessage))
    }
  }
};

const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// define the Container component here:
const Container = connect(mapStateToProps,mapDispatchToProps)(Presentational)

class AppWrapper extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    // complete the return statement:
    return (
      <Provider store={store}>
        <Container />
      </Provider>
      );
  }
};

// Problem 9

// Redux:
const ADD = 'ADD';

const addMessage = (message) => {
  return {
    type: ADD,
    message: message
  }
};

const messageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD:
      return [
        ...state,
        action.message
      ];
    default:
      return state;
  }
};

const store = Redux.createStore(messageReducer);

// React:
const Provider = ReactRedux.Provider;
const connect = ReactRedux.connect;

// Change code below this line
class Presentational extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      input: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.submitMessage = this.submitMessage.bind(this);
  }
  handleChange(event) {
    this.setState({
      input: event.target.value
    });
  }
  submitMessage() {
    this.props.submitNewMessage(this.state.input);
    this.setState({
      input: ''
    });
  }
  render() {
    return (
      <div>
        <h2>Type in a new Message:</h2>
        <input
          value={this.state.input}
          onChange={this.handleChange}/><br/>
        <button onClick={this.submitMessage}>Submit</button>
        <ul>
          {this.props.messages.map( (message, idx) => {
              return (
                 <li key={idx}>{message}</li>
              )
            })
          }
        </ul>
      </div>
    );
  }
};
// Change code above this line

const mapStateToProps = (state) => {
  return {messages: state}
};

const mapDispatchToProps = (dispatch) => {
  return {
    submitNewMessage: (message) => {
      dispatch(addMessage(message))
    }
  }
};

const Container = connect(mapStateToProps, mapDispatchToProps)(Presentational);

class AppWrapper extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Container/>
      </Provider>
    );
  }
};

// Problem 10

/*
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

import rootReducer from './redux/reducers'
import App from './components/App'

const store = createStore(
  rootReducer,
  applyMiddleware(thunk)
);

ReactDOM.render(
  <Provider store={store}>
    <App/>
  </Provider>,
  document.getElementById('root')
);
*/

// Only change code below this line

console.log('Now I know React and Redux!');