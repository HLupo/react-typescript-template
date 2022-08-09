import { FC } from "react";
import Counter from "../../components/Counter/Counter";
import "./Home.css";

const Home: FC = () => {
  return (
    <div className={"Home"}>
      <h1>{"Home view"}</h1>
      <div className={"CounterContainer"}>
        <Counter />
      </div>
    </div>
  );
};

export default Home;
