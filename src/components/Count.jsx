import { logCount } from "../utils/logCount";
import { useCountStore } from "../stores/useCountStore";

export const Count = () => {
  const { count, increment, decrement, reset } = useCountStore();

  return (
    <div>
          <h2>Count</h2>
          <p>Count: {count}</p>
          <button onClick={increment}>Increment</button>
          <button onClick={decrement}>Decrement</button>
          <button onClick={reset}>Reset</button>
          <button onClick={logCount}>Log</button>
    </div>
  );
};
