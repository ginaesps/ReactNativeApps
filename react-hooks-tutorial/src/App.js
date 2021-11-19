import React, {useState} from "react";
import {useForm} from "./useForm";
import {useFetch} from "./useFetch";
import { useEffect } from "react/cjs/react.development";

const App = () => {
  const [values, handleChange] = useForm({email: '', password: ''});
  const [count, setCount] = useState(() =>
    JSON.parse(localStorage.getItem("count"))
  );
  const {data, loading} = useFetch("http://numbersapi.com/43/trivia");
  //above line will return a true/false wheter the data is loading or not

  useEffect(() => {
    localStorage.setItem("count", JSON.stringify(count));
  }, [count]);

  return (
    <div>
      <div>{!data ? "loading..." :data}</div>
      <div>count: {count}</div>
      <button onClick={() => setCount(c=> c+1)}>increment</button>
      <input
        name="email"
        value={values.email}
        onChange={handleChange}/>
      <input
        name="password"
        type="password"
        value={values.password}
        onChange={handleChange}/>
    </div>
  );
}

export default App;
