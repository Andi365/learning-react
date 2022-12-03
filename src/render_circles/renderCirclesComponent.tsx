import { useState } from 'react'
import reactLogo from './assets/react.svg'
import '../App.css'

type point = {
  clientX: number;
  clientY: number;
}

function RenderCircles() {
  const [points, setPoints] = useState<point[]>([])
  const [prevPoints, setPrevPoints] = useState<point[]>([])

  function handleClick(event: React.MouseEvent<HTMLDivElement>) {
    const { clientX, clientY} = event;
    const newPoint = { clientX, clientY };
    setPoints([...points, newPoint]);
  }

  function handleUndo() {
    const newPoints = [...points];
    const newPrevPoint = newPoints.pop();
    
    if(!newPrevPoint) return;
    setPrevPoints([...prevPoints, newPrevPoint]);
    setPoints(newPoints)
  }

  function handleRedo() {
    const newPrevPoints = [...prevPoints];
    const recentPrevPoint = newPrevPoints.pop();

    if(!recentPrevPoint) return;
    setPoints([...points, recentPrevPoint])
    setPrevPoints(newPrevPoints)
  }

  return (
    <>
      <button disabled={points.length === 0} onClick={handleUndo}>Undo</button>
      <button disabled={prevPoints.length === 0} onClick={handleRedo}>Redo</button>
      <div className="App" onClick={handleClick}>
        {points.map((point: point, index: number) => (
        <div 
          key={index}
          className='point'
          style={{ 
            left: point.clientX,
            top: point.clientY
          }}
        >
        </div>
        ))}
      </div>
    </>
  )
}
export default RenderCircles
