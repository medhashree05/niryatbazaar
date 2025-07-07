import React from 'react';
import './Header.css';
import { Link } from "react-router-dom";
import { CiGlobe } from "react-icons/ci";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import { MdFlag, MdWidthFull } from "react-icons/md";
import { GrCart } from "react-icons/gr";
import { FaFacebook } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { FaLinkedin } from "react-icons/fa";
import d1 from '../assets/d1.webp';
import d2 from '../assets/d2.jpeg';
import d3 from '../assets/d3.jpeg';
import d4 from '../assets/d4.jpeg';
import d5 from '../assets/d5.jpeg';
import d6 from '../assets/d6.jpeg';
import d7 from '../assets/d7.jpeg';
import d8 from '../assets/d8.jpeg';
import d9 from '../assets/d9.jpeg';
import d10 from '../assets/d10.jpeg';
import d11 from '../assets/d11.jpeg';
import d12 from '../assets/d12.jpeg';
import d13 from '../assets/d13.jpeg';
import d14 from '../assets/d14.jpeg';
import { FaMedal } from "react-icons/fa6";
import { FaTag } from "react-icons/fa6";
import { CiAlarmOn } from "react-icons/ci";
import { AiOutlineSafetyCertificate } from "react-icons/ai";
import { RiMoneyDollarCircleFill } from "react-icons/ri";
import { RiShipFill } from "react-icons/ri";
import { FaTools } from "react-icons/fa";
import AI from '../assets/AI.png';
import helper from '../assets/helper.jpg';
import extension from '../assets/extension.png';
import Create from '../Pages/Create.js';
import Sign from '../Pages/Sign.js';
import bgImage from '../assets/background_1.avif';


function Header() {
  const divStyle = {
  backgroundImage: `url(${bgImage})`,
  
};
  const images = [d1,d2,d3,d4,d5,d6,d7,d8,d9,d10,d11,d12,d13,d14];
  return (
    <div className='header-wrapper' >
      {/* Sticky top navbar */}
      <div className="navbar-sticky">
        <div className="navbar_1">
          <div className="logo">
            <Link to="/">NiryatBazaar</Link>
          </div>
          <div className="navbar_right">

  {/* Country Selector */}
  <div className="menu-tab-1">
     <div className="tab-trigger-1">
    <MdFlag /> US
  </div>
  <div className="tab-dropdown-1">
    <div className='tr1'>
    <h4>Specify your location</h4>
    <p>Shipping options and fees vary based on your location</p>
    <button className="btn-primary" style={{color:'black',backgroundColor:'black'}}><Link to='https://login.NiryatBazaar/newlogin/icbuLogin.htm?defaultActive=signIn&return_url=https%3A%2F%2Fwww.NiryatBazaar%2F&_lang=en_US'>Sign in to add address</Link></button>
    <div className="or-divider">Or</div>
    <select>
      <option>United States</option>
      {/* Add more countries */}
    </select>
    <input type="text" placeholder='ZIP code "10011" or "10011-0043"' />
    <button className="btn-primary">Save</button>
  </div>
</div>
  </div>

  {/* Language & Currency */}
  <div className="menu-tab-1">
     <div className="tab-trigger-1">
    <CiGlobe /> English
  </div>
  <div className="tab-dropdown-1">
     <div className='tr1'>
    <h4>Set language and currency</h4>
    <p>Select your preferred language and currency.</p>
    <label>Language</label>
    <select>
      <option>English</option>
      {/* Other languages */}
    </select>
    <label>Currency</label>
    <select>
      <option>USD - US Dollar</option>
      {/* Other currencies */}
    </select>
    <button className="btn-primary">Save</button>
  </div>
  </div>
  </div>

  {/* Shopping Cart */}
  <div className="menu-tab">
    <div className="tab-trigger">
    <FaShoppingCart />
  </div>
  <div className="tab-dropdown">
     <div className='tr'>
    <h4>Shopping cart</h4>
   <div className='tab-trigger'> 
    <GrCart style={{ color: 'black', fontSize: '24px' }}/> 
    </div>
    <p>Your cart is empty</p>
    <button className="btn-outline">Go to cart</button>
  </div>
  </div>
  </div>

  {/* Account */}
  <div className="menu-tab">
     <div className="tab-trigger">
    <FaUser /> Sign in
  </div>
  <div className="tab-dropdown">
     <div className='tr'>
    <h4>Welcome to NiryatBazaar!</h4>
    <button className="btn-primary" style={{color:'black',backgroundColor:'black'}}><Link to="/sign" >Sign in</Link></button>
    <p>Or, continue with:</p>
    <div className="social-icons">
      <FaFacebook style={{ color: 'black', fontSize: '24px' }}/>
      <FcGoogle style={{  fontSize: '24px' }}/>
      <FaLinkedin style={{ color: 'black', fontSize: '24px' }}/>
    </div>
    <p className="agreement-text">
      By signing in via social media, I agree to the <a href="/create">Membership Agreement</a> and <a href='/create'>Privacy Policy</a>.
    </p>
    <ul className="signin-links">
      <li>My NiryatBazaar</li>
      <li>Orders</li>
      <li>Messages</li>
      <li>RFQs</li>
      <li>Favorites</li>
      <li>Account</li>
      <li>Membership program</li>
    </ul>
  </div>
   </div>
  </div>

  {/* Create Account Button */}
  <Link to="/create" className="btn-create">Create account</Link>

  

</div>

        </div>
      </div>

      {/* Scrollable secondary navbar */}
      <div className="navbar_2">
        <div className="navbar2_left">
          <div className="menu-item ">
  All
  <div className="dropdown">
    <div className='d_1'>
    <div className="categories-left">
      <ul>
        <li>Beauty</li>
        <li>Sports & Entertainment</li>
        <li>MRO</li>
        <li>Automotive Supplies & Tools</li>
        <li>Industrial Machinery</li>
        <li>Consumer Electronics</li>
        <li>Jewelry, Eyewear & Watches</li>
      </ul>
    </div>
   
  </div>
  </div>
</div>

          <div className='menu-item '>
  Featured
  <div className='dropdown'>
    <div className='d_2'>
    <div className="featured-card">
      <FaMedal style={{ color: 'black', fontSize: '24px' }}/>
      <p>Top ranking</p>
    </div>
    <div className="featured-card">
      <FaTag style={{ color: 'black', fontSize: '24px' }}/>
      <p>New arrivals</p>
    </div>
    <div className="featured-card">
     <CiAlarmOn style={{ color: 'black', fontSize: '24px' }}/>
      <p>Top deals</p>
    </div>
    <div  className='featured-card-4'style={{display:'flex',flexDirection:'column',gap:'24px'}}>
      <p>Sample Center</p>
      <p>Online Trade Show</p>
      <p>Tips</p>
      <p>LIVE</p>
      <p>Global suppliers</p>
      
    </div>
  </div>
  </div>
</div>


         <div className='menu-item'>
  protections
  <div className='dropdown'>
   <div className='d_3'>
      <div className="dropdown-card">
        <AiOutlineSafetyCertificate/>
        <h4>Safe & easy payments</h4>
        <p>Secure payment methods to protect your transactions.</p>
      </div>
      <div className="dropdown-card">
        <RiMoneyDollarCircleFill/>
        <h4>Money-back policy</h4>
        <p>Refunds available for qualified disputes.</p>
      </div>
      <div className="dropdown-card">
        <RiShipFill/>
        <h4>Shipping & logistics</h4>
        <p>Reliable delivery options with tracking.</p>
      </div>
      <div className="dropdown-card">
       <FaTools/>
        <h4>After-sales protections</h4>
        <p>Support after purchase for eligible orders.</p>
      </div></div>
    
  </div>
</div>

        </div>

        {/*<div className="navbar2_right">
       
<div class="menu-item">
 AI  agent
  <div class="dropdown">
    <div class="dropdown-content">
      <img src= {AI} alt="AI Sourcing Agent" class="dropdown-image" />
      <div class="dropdown-text">
        <h2>Source smarter with <span style={{ color: '#004d99' }}>Accio</span></h2>
        <p>Leverage AI to find the perfect product match in seconds</p>
        <ul>
          <li>
            <strong>Matches from over 100 million products</strong><br/>
            with precision
          </li>
          <li>
            <strong>Handles queries 3 times as complex</strong><br/>
            in half the time
          </li>
          <li>
            <strong>Verifies and cross-validates</strong><br/>
            product information
          </li>
        </ul>
        <a href="/create" class="source-now-btn">Source now</a>
      </div>
    </div>
  </div>
</div>

<div class="menu-item">
  Buyer Central
  <div class="dropdown">
    <div class="dropdown-grid">
      <div>
        <h4>Get started</h4>
        <p><a href='/create'>What is NiryatBazaar</a></p>
      </div>
      <div>
        <h4>Why NiryatBazaar</h4>
        <p><a href="/create">How sourcing works</a></p>
        <p><a href="/create">Membership program</a></p>
      </div>
      <div>
        <h4>Trade services</h4>
        <p><a href='/create'>Order protections</a></p>
        <p><a href='/create'>Logistics Services</a></p>
        <p><a href='/create'>NiryatBazaar Business Credit</a></p>
        <p><a href='/create'>Inspection & Monitoring</a></p>
      </div>
      <div>
        <h4>Resources</h4>
        <p><a href='/create'>Success stories</a></p>
        <p><a href='/create'>Blogs</a></p>
        <p><a href='/create'>Industry reports</a></p>
        <p><a href='/create'>Help Center</a></p>
      </div>
      <div>
        <h4>Webinars</h4>
        <p><a href='/create'>Overview</a></p>
        <p><a href='/create'>Meet the peers</a></p>
        <p><a href='/create'>Ecommerce Academy</a></p>
        <p><a href='/create'>How to source</a></p>
      </div>
    </div>
  </div>
</div>

          <div class="menu-item">
  Help
  <div class="dropdown">
    <div class="dropdown-content">
      <div class="dropdown-text">
        <h2>Need help?</h2>
        <p>Get support for orders and resolve issues quickly</p>
        <ul>
          <li><strong>Open a dispute</strong><br/>Resolve product/order issues</li>
          <li><strong>Report IPR infringement</strong><br/>Protect your brand & content</li>
          <li><strong>Report abuse</strong><br/>Combat fraud and misconduct</li>
        </ul>
        <a href='/create' class="source-now-btn">Visit help center</a>
      </div>
      <img src={helper} alt="Help Center" class="dropdown-image" />
    </div>
  </div>
</div>
<div class="menu-item">
   Extension
  <div class="dropdown">
    <div class="dropdown-content">
      <img src={extension} alt="NiryatBazaar App" class="dropdown-image-ext" />
      <div class="dropdown-text">
        <h2>Get the NiryatBazaar App</h2>
        <p>Find products, chat with suppliers, and manage orders anywhere</p>
        <ul>
          <li><strong>App Store</strong><br/><a href='/create'>Download for iOS</a></li>
          <li><strong>Google Play</strong><br/><a href='/create'>Download for Android</a></li>
          <li><strong>NiryatBazaar Lens</strong><br/>Search visually with our Chrome extension</li>
        </ul>
        <a href='/create' class="source-now-btn">Explore tools</a>
      </div>
    </div>
  </div>
</div>

          <div className='menu-item supplier' >
            <Link to='https://register.NiryatBazaar/reg/form.htm?entrance=buyerHome'>supplier</Link>

          </div>
        </div>*/}
      </div>
    </div>
  );
}

export default Header;
