import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";

import {
  FemNftPreviewCard,
  FemProductCard,
  FemRatingComponent,
  FemOrderSummary,
  FemStatsPreviewCard,
  Fem3ColCard,
  FemIntroSignupForm,
  FemInteractiveCard,
  FemAdviceGenerator,
  FemIntroSection,
  FemTestimonialSlider,
} from "./pages";

//----------------------------------------------------------

const AppRoutes = () => {
  return (
    <div className="flex flex-col h-full bg-home-bg bg-contain">
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
          <Route
            path="fem-intro-signup-form"
            element={<FemIntroSignupForm />}
          />
          <Route path="fem-interactive-card" element={<FemInteractiveCard />} />
          <Route path="fem-advice-generator" element={<FemAdviceGenerator />} />
          <Route path="fem-intro-section" element={<FemIntroSection />} />
          <Route
            path="fem-testimonial-slider"
            element={<FemTestimonialSlider />}
          />
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
