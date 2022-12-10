import  * as React from 'react'
import  ReactDom  from 'react-dom/client'
import SubCon from './components/subContainer'
import Nav from './components/Nav'
import './style/BasicStyle.css'
import './style/SubContainerStyle.css'
import './style/Nav.css'

let navigator = ReactDom.createRoot(document.querySelector('#nav'))
navigator.render(<Nav />)
let subContainer = ReactDom.createRoot(document.querySelector('.subContainer'))
subContainer.render(<SubCon />)


