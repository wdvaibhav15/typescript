import { useState } from "react";

export function Counter() {

    const [count, setCount] = useState<number>(0);

    return (
        <>
        <p>Cups ordered: {count}</p>
        <button onClick={() => setCount((count) => count + 1)}>Order one more cup </button>
        <div>
            <button onClick={() => setCount(0)}>Clear All Orders</button>
        </div>
         </>
    )
}