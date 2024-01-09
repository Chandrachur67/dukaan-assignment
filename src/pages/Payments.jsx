import Navbar from '../components/Navbar'
import Feed from '../components/Feed'
import './Payments.css'

const Payments = () => {
  return (
    <div className="payments">
        <Navbar className="navbar" />
        <Feed className="feed" />
    </div>
  )
}

export default Payments