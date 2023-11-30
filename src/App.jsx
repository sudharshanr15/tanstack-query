import { QueryClientProvider, QueryClient } from "@tanstack/react-query"
import { ReactQueryDevtools } from "@tanstack/react-query-devtools"
import {Routes, Route} from "react-router-dom"
import Home from "./Home"
import Posts from "./Posts"

const queryClient = new QueryClient()

function App(){
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/core" element={<Posts />} />
      </Routes>
      <ReactQueryDevtools />
    </QueryClientProvider>
  )
}

export default App