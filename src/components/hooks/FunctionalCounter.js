import { useState } from "react";
function FunctionalCounter() {

    const [counter, setCounter] = useState(0)

    const increment = () => {
        setCounter(counter + 1)
    }

    return (
        <div>
            <div>Counter : {counter}</div>
            <div>
                <button onClick={increment}>Click Me</button>
            </div>
        </div>
    )


}

export default FunctionalCounter