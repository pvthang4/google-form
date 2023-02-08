import { FC, Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BarChart from "./core/components/Chart/BarChart";
import PieChart from "./core/components/Chart/PieChart";
import Form from "./core/components/Form";

const App: FC = () => {
  return (
    <Fragment>
      <div style={{ textAlign: "center" }}>
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
          <Route path="/google-form" element={<Form />} />
          <Route path="/pie-chart" element={<PieChart />} />
          <Route path="/bar-chart" element={<BarChart />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
};
export default App;
