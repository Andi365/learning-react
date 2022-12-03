import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import RatingComponent from './rating_component/rating-component'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <RatingComponent />
    {/* <App /> */}
  </React.StrictMode>
)
