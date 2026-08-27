import { Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { CheckOutPage } from "./pages/CheckoutPage";
import { OrdersPage } from "./pages/OrdersPage";
import { TrackingPage } from "./pages/TrackingPage";
import "./App.css";
function App() {
  return (
    <Routes>
      <Route index element={<HomePage />} />
      <Route path="checkout" element={<CheckOutPage />} />
      <Route path="orders" element={<OrdersPage />} />
      <Route path="track" element={<TrackingPage />} />
    </Routes>
  );
}

export default App;

//<Routes>= tells react all the pages
// that are in our website
//<Route> = a page
// path ='/' empty slash shows homepage url is empty
//element = which element or component to display
//index = path="/" used in <Route path="/" element={<HomePage />}></Route>
