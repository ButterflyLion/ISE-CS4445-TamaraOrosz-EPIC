import { useAppDispatch, useAppSelector } from "../app/hooks";
import { incremented } from "../features/counter/counter-slice";

function About() {
    const count = useAppSelector((state) => state.counter);
    const dispatch = useAppDispatch();

  return (
    <div>
      <h1>About</h1>
      <button onClick={() => dispatch(incremented())}>
        count is {count.value}
      </button>
    </div>
  );
}

export default About;
