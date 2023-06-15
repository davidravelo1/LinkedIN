import { BrowserRouter, Routes, Route } from "react-router-dom"
import AppLayout from "./layout/AppLayout"
import Index from "./pages/Index"
import NewUser from "./pages/NewUser"

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AppLayout />} >
          <Route index element={<Index />} />
          <Route path="new" element={<NewUser />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
