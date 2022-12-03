import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import RatingComponent from './rating_component/rating-component'
import './index.css'
import RenderCircles from './render_circles/renderCirclesComponent'
import AdviceGenerator from './advice_generator/adviceGeneratorComponent'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    {/* <RatingComponent /> */}
    {/* <RenderCircles /> */}
    <AdviceGenerator />
  
  </React.StrictMode>
)
