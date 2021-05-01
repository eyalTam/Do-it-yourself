import { Link } from 'react-router-dom'
import './SideDrawer.css'

const SideDrawer = () => {
    return (
        <div className="drawer_container">
            <div className="drawer_menu">
                <Link className="h4" to="training-options">Training Options</Link>
                <Link className="h4" to="trainers-reviews">Trainers Reviews</Link>
            </div>
        </div>
    )
}

export default SideDrawer;