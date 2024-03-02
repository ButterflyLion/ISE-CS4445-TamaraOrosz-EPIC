import { useAppDispatch, useAppSelector } from "./app/hooks";
import { incremented } from "./features/counter/counter-slice";

import "./style.css";
import Dashboard from "./Dashboard";
import News from "./News";
import { config } from "./GraphConfig";

function App() {
  const count = useAppSelector((state) => state.counter);
  const dispatch = useAppDispatch();

  return (
    <div>
      <div className="card">
        <button onClick={() => dispatch(incremented())}>
          count is {count.value}
        </button>
      </div>
      <div>
        <News />
      </div>
      <div id="container">
        <Dashboard config={config} />
      </div>
    </div>
  );
}

export default App;
