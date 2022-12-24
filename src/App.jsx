import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import { FemProductCard } from "./pages";

//----------------------------------------------------------

const AppRoutes = () => {
  return (
    <div className="flex flex-col h-full bg-bunker-gray-900">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="fem-product-card" element={<FemProductCard />} />
        </Route>
      </Routes>
    </div>
  );
};

function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default App;