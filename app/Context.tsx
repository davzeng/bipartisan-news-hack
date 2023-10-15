import { useState } from "react";

var context = "AI Context may take a minute or so to appear."

export default function Context() {
    const [state, setState] = useState(true);
    return(
        <div>{context}</div>
    );
}