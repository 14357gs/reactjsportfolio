import React from 'react';
import './Header.css';

//import Home from '../../Components/Home';
//import Clients from '../../Components/Clients';
//import Education from '../../Componnets/Education';
//

class Header extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
        active: this.props.active,
    }
  }

  componentDidMount() {
      //console.log('Header', this);

  }

  componentWillReceiveProps(nextProps) {

      //console.log('next Props Header:', nextProps);
  }

  render() {
      return(
          <div className={'bottomnav'}>
              <nav className={'navbar'}>
                <div className="container">
                  <div className={"col-md-12 primary"}>
                    <ul className='nav navbar-nav' onClick={this.megaNavTabsClick}>
                        <li className="Home"><span>Home</span></li>
                        <li className="Education"><span>Education</span></li>
                        <li className="Clients"><span>Client</span></li>
                        <li className="Contactme"><span>Contactus</span></li>
                        <li className="Hobbies"><span>Hobbies</span></li>
                        <li className="Aboutme"><span>Aboutme</span></li>
                        <li className="support"><span>Support</span></li>
                        <li className="Home"><a href="#"  <span>Home</span></Link></li>
                       <li className="Education"><a href="#" data-target=".tab-education" data-toggle="collapse"><span>Education</span></a></li>
                       <li className="Clients"><a href="#" data-target=".tab-clients" data-toggle="collapse"><span>Clients</span></a></li>
                       <li className="Contactme"><a href="#" data-target=".tab-contactme" data-toggle="collapse" <span>Design Center</span></a></li>
                       <li className="community"><a href="#" data-target=".tab-" ><span>Community</span></a></li>
                       <li className="education"><a href="#" data-target=".tab-education" data-toggle="tab" ><span>Education</span></a></li>
                       <li className="support"><a href="#" data-target=".tab-support" data-toggle="tab" ><span>Support</span></a></li>
                    </ul>
                  </div>
                </div>
              </nav>
            </div>
        )
    }
}

export default Header;
