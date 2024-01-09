import './Header.css'
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import ChatIcon from '@mui/icons-material/Chat';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
  return (
    <div className='header'>
      <div className="left">
        <h5>Payments</h5>
        <div className="secondPart">
          <HelpOutlineOutlinedIcon style={{ width: '15px' }} />
          <p>How it works</p>
        </div>
      </div>
      <div className="middle">
      <div className="search-container">
        <SearchIcon src="search-icon.png" alt="Search Icon" className="search-icon" style={{ color: 'gray' }} />
        <input type="text" placeholder="Search features, tutorials, etc." className="search-input" />
      </div>
      </div>
      <div className="right">
        <div className="icon">
         <ChatIcon />
        </div>
        <div className="icon">
          <ArrowDropDownIcon />
        </div>
      </div>
    </div>
  )
}

export default Header