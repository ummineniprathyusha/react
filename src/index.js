import React from 'react'
import ReactDOM from 'react-dom/client'

// let heading = React.createElement('h1',{class:'Heading'},'Heading in React')
// let para = React.createElement('p',{class:'Heading'},'para in React')
// let conatiner = React.createElement('div',{},heading,para)

let ele = document.getElementById('root')
let rootEle = ReactDOM.createRoot(ele)
rootEle.render(<div>
  <h1>heading</h1>
  <p>para</p>
</div>)

//JSX- Javascript XML