import { useState } from "react";
import Landing from "./Components/Landing/Landing";
function App() {
const [cart, setCart] = useState(0)

  return (
    <>
      <Landing/>
    </>
  )
}

export default App
