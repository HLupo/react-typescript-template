import "./Counter.css";
import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../store/store";
import { decrement, increment } from "../../store/reducers/counterSlice";

const Counter: FC = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state: RootState) => state.counter.counter);

  return (
    <div className={"Counter"}>
      <h1>{`${counter}`}</h1>
      <div className={"CounterButtons"}>
        <button type={"button"} onClick={() => dispatch(increment())}>
          <span>{"Increment"}</span>
        </button>

        <button type={"button"} onClick={() => dispatch(decrement())}>
          <span>{"Decrement"}</span>
        </button>
      </div>
    </div>
  );
};

export default Counter;
