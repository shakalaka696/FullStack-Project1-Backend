import { BrowserRouter, Route, Routes } from "react-router-dom"


function App() {
 
  return (
    <>
    <BrowserRouter basename="/">
      <Routes>
        <Route path="/login" element={<div>Login page</div>}></Route>
      </Routes>
    </BrowserRouter>
     
    <h1>Hello world</h1>
</>
  )
}

export default App
