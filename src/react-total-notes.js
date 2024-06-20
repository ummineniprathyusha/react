                                REACT      --  Questions & Answers 
                                
        Questions:

1)What is React ?
2) What is JSX ?
3) What is Babel ?
4) What is component ?
5) What is return ?
6) What is render() ?
7) What are Export & Import ?
8) What is props ?
9) What is State ?
10) What are Hooks ?
11) What is props Drilling ?
12) what is Flower braces {} ?
13) What is State Lifting ?
14) What is Diffing ?
15) What is Reconciliation ?
16) What is Key ?
17) What is Rountig ?
18) What is Lazy loading ?
19) What is Custom Hooks ?
20) What is HOC (Higher Order Component) ?



1) What is React ?
Ans: 
    React is a javascript library, to build user interfaces, particularly for single-page applications. 
    it is a open-source library. 
    it helps developers to create fast & interactive web applications for breaking down the UI into small & reusable components. 
    it efficiently updates & renders the right components when data changes, it is easy to develop & manage complex user interfaces. 

2) What is JSX ?
Ans: 
   JSX - javascript XML, is a syntax extension that looks like HTML used in JS. 
         it allows to write HTML code within your JS, making it easier to create & visiulize the structure of your user interface. 

   Ex:- const myElement = <h1>I Love JSX</h1>;
        const root = ReactDOM.createRoot(document.getElementById('root'));
        root.render(myElement);

3) What is Babel ?
Ans: 
   React uses JSX, which is not standard js. 
   Babel transforms JSX into Regular JS function calls that browsers can understand. 
   
   Ex:- <h1>Hello,World!</h1>
           into 
        React.createElement("h1",null,"Hello, world!"). 

4) What is component ?
Ans:
    In React, a component is like a small, reusable piece of a web page. 
    components are like functions that return HTML elements.
    they are independent and reusable bits of code. 
    they serve the same purpose as JS in isolation & return HTML. 
    components are like Componets (first letter Caps). 
    they are 2 types of components: 
    1)Function component:
    2)Class component:
    
    1)Function Component: A function component also returns a HTML, & behaves much as way as Class component, 
                            but they can be written using less code, are easier to understand.                     

                    Ex:-   function Car(){
                              return <h1>I am a Car</h1>
                           }

    2) Class Component: A Class component must include extends React.Componet statement. 
                        this statement creates an inheritance to React.component, & gives your component access to React.Component's function. 
                        this also requires a render() method, this method returns HTML. 

                    Ex:- class Car extends React.Component {
                        render(){
                            return <h2>I am a Car </h2>
                        }
                    }

5) What is return ?
Ans: 
    The return statement stops the execution of a function and returns a value.
    In return only one parent element it will take.
    After return statement if we write any code it will not take..it shows error.
    If we want to write any code after return by using this "()", &  we can write code inside () this. 
    In return JSX code .
    It also take only one container element in it. 

    In React, the return keyword is used within functional components to specify what should be rendered to the DOM.
    In a functional component, you define a function that returns JSX (JavaScript XML), which describes the UI. 
    The return statement is crucial because it determines what the component will render.

  Ex:- 
  export default function User(){
    return(
        <div>
        <h1>Welcome to React</h1>
        <p>Lets learn about react more...</p>
        </div>
    )
}

6) What is render() ?
Ans:
     The render() method is then called to define the React component that should be rendered.
     There is another folder in the root directory of your React project, named "public". In this folder, there is an index.html file.
     You'll notice a single <div> in the body of this file. This is where our React application will be rendered.
     Ex:
     const container = document.getElementById('root');
     const root = ReactDOM.createRoot(container);
     root.render(<p>Hello</p>);

     Ex:
     <body>
     <div id="root"></div>
   </body>
     Rendor has only one parent element.
     It write only in ().
     After render we cant write code.. error.
     In React, render is a crucial concept that involves displaying or updating the user interface (UI) by transforming the React components into actual DOM elements
     React components are ultimately rendered to the DOM using the ReactDOM.render method. 
     This method takes two arguments: the React element to render and the DOM element to render into.



7) What are Export & Import ?
Ans:- 
     Import: 
     In React, an import statement is used to bring in functions, objects, or primitive values from other files into the current file. 
     It allows you to use components, functions, or variables that have been defined and exported in other files.
     It imports only 1 default import. 
     Syntax  :   import MyComponent from './MyComponent'

     Named Import:  This imports one or more named exports from a file.
                    It must have {} curly braces while importing a file. 
     Syntax   :   import { add, subtract } from './utils
     Ex:
     import React from 'react'
     import ReactDOM from 'react-dom/client'
     import {User} from './User'

     Export:
     Definition: 
     In React, an export statement is used to make functions, objects, or primitive values available to other files. 
     It allows you to define components, functions, or variables in one file and use them in another.

     Default Export: 
     This exports a single value from a file. 

     Syntax : export default ComponentName

     Named Export :  This exports multiple values from a file, allowing you to import them individually by name.
                     the calling function defintely in {}.
     Syntax:  export const add = (a, b) => a + b
     Ex:
     export default function User(){
        return(
            <div>
            <h1>Welcome to React</h1>
            <p>Lets learn about react more...</p>
            </div>
        )
      }
    Example:  ---- total basic export & import example: 
// index.js
import React, { useCallback, useEffect, useMemo, useReducer, useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'    ------------//imported App 

let ele = document.getElementById('root')
let rootEle = ReactDOM.createRoot(ele)
rootEle.render(
  {App()}  // while we see js code then write in  react as use {}.
)

// App.js
    import User from "./User";
    import { Person } from "./User";
import { useContext } from "react"
    export default function App(){   ------// exported App 
// here we can call function in 3 ways:
// 1) <User/> -> self closing tag
// 2) <User></User> ->open & close tag
// 3)  {User()}
    return (
        <User/> //best practice (calling function  user component)
    )
}


8) What is props ?
Ans: 
    Props:
         In React, "props" (short for "properties") are a way to pass data from a parent component to a child component. 
         Props are read-only, meaning that a child component cannot modify the props it receives.

    Parent Component: 
        This is the component that will pass data to the child component via props.

    Child Component: 
        This component will receive the data (props) from the parent and use it to render content.

    Ex:-
    function Car(props) {
        return <h2>I am a { props.brand }!</h2>;
      }
      
      const myElement = <Car brand="Ford" />;


9) What is State ?
Ans: 
    State:  
          State in React is used to manage data that changes over time within a component.
    Ex:
     

10) What are Hooks ?
Ans: 
    Hooks:
          Hooks in React are functions that let you use state and other React features in functional components. 
          They were introduced in React 16.8 to allow functional components to have state and lifecycle methods, which previously were only possible in class components.

    Rules for hooks:
          Top-Level Only: Ensure hooks are called at the top level of your React function.
    Only in React Functions: 
          Use hooks within React functional components or custom hooks.
  Hooks:
        1)useState
        2)useEffect
        3)useContext
        4)useRef
        5)useReducer
        6)useCallback
        7)useMemo
    
    1) useState:
             This is a basic React hook, which allows a function component to maintain its own state and re-render itself based on the state changes. 
             The syntax of the useState is as follows − 
             import React, { useState } from "react";
             const [ <state>, <setState> ] = useState( <initialValue> )
           
             initialValue − Initial value of the state. 
                            state can be specified in any type (number, string, array and object).
             state − Variable to represent the value of the state.
             setState − Function variable to represent the function to update the state returned by the useState.

    2) useEffect:
                The  useEffect Hook allows you to perform side effects in your components.
                Some examples of side effects are: fetching data, directly updating the DOM, and timers.
                useEffect accepts two arguments. The second argument is optional.
                useEffect(<function>, <dependency>)
                1. No dependency passed:
                useEffect(() => {
                  //Runs on every render
                });

                2.An empty array:
                useEffect(() => {
                  //Runs only on the first render
                }, []);

                3. Props or state values
                useEffect(() => {
                 //Runs on the first render
                 //And any time any dependency value changes
                }, [prop, state]);

    3) useContext:
                The The useContext hook in React provides a way to access and share data across components without passing props down manually at every level. This is especially useful for global tate or themes. Let's break it down step by step with a simple example.
                Steps to use ‘useContext’:
                1.Create a Context
                2.Provide the Context Value
                3.Consume the Context Value

                First, create a context using the createContext function from React.

                import React, { createContext } from 'react';
                // Create a Context
                const MyContext = createContext();
                export default MyContext;
                Wrap your component tree with the context provider and supply a value.

                import React from 'react';
                import MyContext from './MyContext';
                import MyComponent from './MyComponent';

                const App = () => {
                return (
                     <MyContext.Provider value="Hello from context!">
                           <MyComponent />
                            </MyContext.Provider>
                          );
                          };

                export default App;
                Use the useContext hook to access the context value inside any component.
                import React, { useContext } from 'react';
                import MyContext from './MyContext';
                const MyComponent = () => {
                 const value = useContext(MyContext);
                  return <p>{value}</p>;
                  };
                  export default MyComponent;
                
    4) useRef:
            In React, useRef is a hook that allows you to create a reference to a DOM element 
            or a mutable value that persists across renders without causing a re-render when it changes.

            Accessing DOM Elements: 
                       You can use useRef to directly access a DOM element, similar to how you might use document.
                       getElementById in vanilla JavaScript.

            import React, { useRef } from 'react';
            const TextInput = () => {
              const inputRef = useRef(null);
              const focusInput = () => {
                inputRef.current.focus();
            };
            return (
                 <div>
                      <input ref={inputRef} type="text" />
                       <button onClick={focusInput}>Focus the input</button>
                        </div>
                     );
                     };

            export default TextInput;
            Storing Mutable Values: 
                        You can also use useRef to store any mutable value that you want to persist between renders without causing re-renders.

            import React, { useRef, useState } from 'react';
            const Counter = () => {
              const countRef = useRef(0);
                const [ignored, forceUpdate] = useState(0); 
                  const increment = () => {
                       countRef.current += 1;
                        console.log('Count:', countRef.current);
                        forceUpdate(ignored + 1);
                        };
                
                        it  allows to directly create a reference to the DOM element in the functional componenet. 
                        to access the DOM element in a more efficient way as comapred to simple refs. 
                        it has inbulit prop "ref". 
                        tag ni easyga select chesukovalantey useRef use chestham. 
                        "current.innerText" property. 
                        <input type="text" ref={data} className="border-pink-500 border-2"/>
                         undefined- ?
                        focus: useEffect(()=>{data.current.focus()},[])


            

    5) useReducer: 
                In React, useReducer is a hook that helps manage state in a component, 
                especially when the state logic is complex or involves multiple sub-values. 
                It's an alternative to useState.

                Here's a simple explanation of how useReducer works:
                State and Action: 
                       useReducer works with a state and actions that describe how to update that state.
                Reducer Function:  
                       You define a reducer function that takes the current state and an action, and returns a new state based on the action.
                Initial State: 
                       You provide an initial state for your state variable.
                Dispatch Function: 
                       useReducer returns the current state and a dispatch function. 
                       You use dispatch to send actions to the reducer to update the state.

                       it accepts any data types. 
                       function lo logic 
                       (state,input)=>
                       return chesedhi - [variable,dispath(function)]
                       useReducer(intialValue,0)



    6) useCallback: 




    7) useMemo:
             highly calculation memory, it returns a memorized value.
             it does not need to be recalculated. (within the useMemo)
             (component rerender aina eveerytime it will not execute)
               The useMemo hook in React is used to memoize a value,
                which means storing the result of a computation so that it does not need to be recalculated on every render.
                This can help improve the performance of your React components by preventing expensive calculations from being repeated unnecessarily.


11) What is props Drilling ?
Ans: 
   Prop drilling occurs when a prop needs to be passed through several layers of nested components to reach a deeply nested child component that actually needs the prop. 
   Each intermediary component in the hierarchy has to pass the prop down, even if it doesn't use the prop itself.


12) what is Flower braces {} ?
Ans:
    Flower braces {}:
                In React, curly braces {} are used for several purposes, primarily to embed JavaScript expressions within JSX. 
                JSX is a syntax extension for JavaScript that allows you to write HTML-like code inside JavaScript, and curly braces enable the inclusion of dynamic content and logic. 
                Here are the main reasons for using curly braces in React:

                Embedding JavaScript Expressions:
                                Insert variables, calculations, and other expressions directly into JSX.
                Conditional Rendering:
                                Use conditions to render different elements
                Looping:
                    Render lists of elements by looping through arrays.
                Inline Styles:
                    Apply inline styles using JavaScript objects.
                Event Handlers:
                    Attach event handlers to elements.


13) What is State Lifting ?
Ans:
    State Lifting:
                State lifting is the process of moving state from a child component to the nearest common ancestor (parent component) when multiple components need to share and synchronize that state.

14) What is Diffing ?
Ans:
    Diffing:  The process of comparing the old and new virtual DOMs to find changes.

    Purpose:  To efficiently update the actual DOM with the minimum number of changes.

15) What is Reconciliation ?
Ans:
   In React, reconciliation is the process of updating the actual DOM to match the virtual DOM. 
   This involves comparing the new virtual DOM tree with the previous one, determining what has changed, and efficiently updating the actual DOM to reflect those changes.


16) What is Key ?
Ans:
    In React, the key attribute is used to uniquely identify elements in a list. 
    It helps React keep track of each element between renders, enabling efficient updates and re-renders.

   Efficient Updates:  
            Keys help React identify which items have changed, been added, or removed.

17) What is Rountig ?
Ans:
    Routing in the context of web development and React refers to the process of navigating between different views or pages within a single application. 
    When a user clicks on a link or enters a URL, routing determines which part of the application should be displayed.
    Imagine you have a website with multiple sections, like a Home page, an About page, and a Contact page. 
    Routing is the mechanism that decides which section to show when the user interacts with the site.  
    For routing we install react-router-dom.

18) What is Lazy loading ?
Ans:
    In React, lazy loading is a technique to optimize the loading performance of your application by delaying the loading of components until they are needed. 
    This can significantly improve the initial load time of your app by splitting your code into smaller chunks that are loaded on demand.

    Dynamic Import: 
            Lazy loading involves using dynamic imports to load components only when they are required.
    Code Splitting: 
            This process splits your code into smaller bundles that can be loaded independently.
    React.lazy: 
            React provides a built-in function called React.lazy to facilitate lazy loading of components.
    Suspense: 
            React's Suspense component is used to show a fallback (like a loading spinner) while the lazy-loaded component is being fetched.


19) What is Custom Hooks ?
Ans: 
    React Custom Hooks are JavaScript functions starting with ‘use’ containing reusable logic.
    We know that hooks like useState, and useEffect are reusable components. 

    Sometimes we make components that we have to reuse again and again in the application. 
    In this case, we can convert the component to hooks by extracting logic from it.

    The main reason why you should be using Custom hooks is to maintain the concept of DRY(Don’t Repeat Yourself) in your React apps.
    Creating a custom hook is the same as creating a JavaScript function whose name starts with “use”. 

    It can use other hooks inside it, return anything you want it to return, take anything as parameters.


20) What is HOC (Higher Order Component) ?
Ans: 
    Higher-order components (HOCs) are a powerful feature of the React library. 
    They allow you to reuse component logic across multiple components.

    In React, a higher-order component is a function that takes a component as an argument and returns a new component that wraps the original component.

    HOCs allow you to add additional functionality to a component without modifying the component's code. 
    For example, you can use a HOC to add authentication or routing capabilities to a component or to apply a specific style or behavior to multiple components.

    HOCs can take additional arguments, which lets you customize the behavior of the HOC. 
    This makes them a flexible and reusable way to add functionality to your components.

