import { useState } from 'react'
import Error404 from './pages/Error404'
import MyTeam from './pages/MyTeam'
import GlobalCss from './global.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <GlobalCss/>
      {/* <MyTeam/> */}
      <Error404 />
    </div>
  )
}

export default App
