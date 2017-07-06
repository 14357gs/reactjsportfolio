import React from 'react';
import './Footer.css';

//import Home from '../../Components/Home';
//import Clients from '../../Components/Clients';
//import Education from '../../Componnets/Education';
//

class Footer extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
        active: this.props.active,
    }
  }



  render() {
      return(
          <div className={'footer'}>
                    <ul>
                       <li className="Home"><a href="#">  <span>Home</span></a></li>
                       <li className="Education"><a href="#" data-target=".tab-education" data-toggle="collapse"><span>Education</span></a></li>
                       <li className="Clients"><a href="#" data-target=".tab-clients" data-toggle="collapse"><span>Clients</span></a></li>
                       <li className="Contactme"><a href="#" data-target=".tab-contactme" data-toggle="collapse"> <span>Design Center</span></a></li>
                       <li className="Hobbies"><a href="#" data-target=".tab-hobbies" ><span>Hobbies</span></a></li>
                       <li className="Aboutme"><a href="#" data-target=".tab-aboutme" data-toggle="tab" ><span>Aboutme</span></a></li>
                    </ul>
            </div>
        )
    }
}

export default Footer;
