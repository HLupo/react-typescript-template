import { FC, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsLoading } from "../../store/reducers/appSlice";

import { RootState } from "../../store/store";

import "./App.css";

const App: FC = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector((state: RootState) => state.app.isLoading);

  useEffect(() => {
    console.log("App rendered");
  }, []);

  return (
    <div className={"App"}>
      <button
        type={"button"}
        onClick={() => dispatch(setIsLoading(!isLoading))}
      >
        {isLoading ? "Stop loading" : "Start loading"}
      </button>
      <h1>{isLoading.toString()}</h1>
    </div>
  );
};

export default App;
