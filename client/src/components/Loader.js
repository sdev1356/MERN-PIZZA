import { useState } from "react";
import { SpinnerCircular } from 'spinners-react';
function Loader() {
    let [loading, setLoading] = useState(true);
    let [color, setColor] = useState("#ffffff");
    return (
        <div className="justify-content-center">
        <SpinnerCircular />
        </div>
    )
} 
export default Loader; 