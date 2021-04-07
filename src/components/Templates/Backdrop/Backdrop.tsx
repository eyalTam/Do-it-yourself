import * as React from 'react'
import './Backdrop.css'

interface BackdropProps {
    clicked: () => void
}

const Backdrop: React.FC<BackdropProps> = ({clicked}) => {

    return <div className="backdrop" onClick={clicked}></div>
    };

export default Backdrop;