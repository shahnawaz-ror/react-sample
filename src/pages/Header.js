  import React from "react";
  import {Link} from "react-router-dom";

  const Header = props => (
    <nav class="navbar navbar-inverse">
      <div class="container-fluid">
        <div class="navbar-header">
          <Link to="/" class="navbar-brand">Multipurpose site</Link>
        </div>
        <ul class="nav navbar-nav">
          <li><Link to="/" class="active">Home</Link></li>
          <li><Link to="/users">Users</Link></li>
          <li><Link to="/about_us">About us</Link></li>
          <li><Link to="/contact_us">Contact Us</Link></li>
          <li><Link to="/faq">Faq's</Link></li>
        </ul>
      </div>
    </nav>
  );
export default Header;