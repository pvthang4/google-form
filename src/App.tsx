import { FC, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PieChart from "./PieChart";
import GoogleForm from "./GoogleForm";
import BarChart from "./BarChart";

const App: FC = () => {
  return (
    <Fragment>
      <div style={{ "textAlign": "center" }}>
        <button
          onClick={() => (window.location.href = "/google-form")}
          className="button"
        >
          GoogleForm
        </button>
        <button
          onClick={() => (window.location.href = "/pie-chart")}
          className="button"
        >
          PieChart
        </button>
        <button
          onClick={() => (window.location.href = "/bar-chart")}
          className="button"
        >
          BarChart
        </button>
      </div>
      <BrowserRouter>
        <Routes>
          <Route path="/google-form" element={<GoogleForm />} />
          <Route path="/pie-chart" element={<PieChart />} />
          <Route path="/bar-chart" element={<BarChart />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};
export default App;
