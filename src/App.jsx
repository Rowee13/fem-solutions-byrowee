import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import {
  FemNftPreviewCard,
  FemProductCard,
  FemRatingComponent,
  FemOrderSummary,
  FemStatsPreviewCard,
  Fem3ColCard,
} from "./pages";

//----------------------------------------------------------

const AppRoutes = () => {
  return (
    <div className="flex flex-col h-full bg-bunker-gray-900">
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="fem-product-card" element={<FemProductCard />} />
          <Route path="fem-rating-component" element={<FemRatingComponent />} />
          <Route path="fem-nft-preview-card" element={<FemNftPreviewCard />} />
          <Route path="fem-order-summary" element={<FemOrderSummary />} />
          <Route
            path="fem-stats-preview-card"
            element={<FemStatsPreviewCard />}
          />
          <Route path="fem-3col-card" element={<Fem3ColCard />} />
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
