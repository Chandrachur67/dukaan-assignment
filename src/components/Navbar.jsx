import { useState } from 'react';
import image from '../assets/image.png';
import { Link } from "react-router-dom";
import './Navbar.css'
import Avatar from '@mui/material/Avatar';
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined';
import WidgetsOutlinedIcon from '@mui/icons-material/WidgetsOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import BarChartOutlinedIcon from '@mui/icons-material/BarChartOutlined';
import CampaignOutlinedIcon from '@mui/icons-material/CampaignOutlined';
import PaymentsOutlinedIcon from '@mui/icons-material/PaymentsOutlined';
import DiscountOutlinedIcon from '@mui/icons-material/DiscountOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ElectricBoltOutlinedIcon from '@mui/icons-material/ElectricBoltOutlined';
import AccountBalanceWalletOutlinedIcon from '@mui/icons-material/AccountBalanceWalletOutlined';


const Navbar = () => {
  const [selected, setSelected] = useState(1);

  const handleOptionClick = (id) => {
    setSelected(id);
  }

  return (
    <div className="navbar">
        <div className="top">
            <div className="userDetails">
                <div className='details'>
                    <Avatar src={image} style={{ borderRadius: "4px" }} />
                    <div className="nameAndLink">
                        <p className="name">Nishayan</p>
                        <Link to='/' className='link'>Visit Store</Link>
                    </div>
                </div>
                <div className="dropDown">
                    <KeyboardArrowDownOutlinedIcon />
                </div>
            </div>

            <div className="options">
                <Option 
                    id={1} 
                    iconImage={HomeOutlinedIcon} 
                    optionName="Home"
                    selected={selected === 1} 
                    onClick={handleOptionClick} 
                />
                <Option 
                    id={2} 
                    iconImage={AssignmentOutlinedIcon} 
                    optionName="Orders"
                    selected={selected === 2} 
                    onClick={handleOptionClick} 
                />
                <Option 
                    id={3} 
                    iconImage={WidgetsOutlinedIcon} 
                    optionName="Products"
                    selected={selected === 3} 
                    onClick={handleOptionClick} 
                />
                <Option 
                    id={4} 
                    iconImage={LocalShippingOutlinedIcon} 
                    optionName="Delivery"
                    selected={selected === 4} 
                    onClick={handleOptionClick} 
                />
                <Option 
                    id={5} 
                    iconImage={CampaignOutlinedIcon} 
                    optionName="Marketing"
                    selected={selected === 5} 
                    onClick={handleOptionClick} 
                />
                <Option 
                    id={6} 
                    iconImage={BarChartOutlinedIcon} 
                    optionName="Analytics"
                    selected={selected === 6} 
                    onClick={handleOptionClick} 
                />
                <Option 
                    id={7} 
                    iconImage={PaymentsOutlinedIcon} 
                    optionName="Payments"
                    selected={selected === 7} 
                    onClick={handleOptionClick} 
                />
                <Option 
                    id={9} 
                    iconImage={DiscountOutlinedIcon} 
                    optionName="Discounts"
                    selected={selected === 9} 
                    onClick={handleOptionClick} 
                />
                <Option 
                    id={10}
                    iconImage={PeopleAltOutlinedIcon}
                    optionName="Audiance"
                    selected={selected === 10} 
                    onClick={handleOptionClick} 
                />
                <Option 
                    id={11}
                    iconImage={ColorLensOutlinedIcon}
                    optionName="Appearance"
                    selected={selected === 11} 
                    onClick={handleOptionClick} 
                />
                <Option 
                    id={12}
                    iconImage={ElectricBoltOutlinedIcon}
                    optionName="Plugins"
                    selected={selected === 12} 
                    onClick={handleOptionClick} 
                />
            </div>
        </div>
        <div className="bottom">
            <div className='icon'>
                <AccountBalanceWalletOutlinedIcon />
            </div>
            <div className="details">
                <p className='text'>Available Credits</p>
                <p className='amount'>200</p>
            </div>
        </div>
    </div>
  )
}

const Option = ({ id, iconImage: Icon, optionName, selected, onClick }) => {
    return (
      <div className={`option ${selected ? 'selected' : ''}`} onClick={() => onClick(id)}>
        <Icon />
        <p>{optionName}</p>
      </div>
    );
  };

export default Navbar