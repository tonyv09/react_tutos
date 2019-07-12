//Dependencias
import React, {Component} from 'react';
import propTypes from 'prop-types';

//assets
import logo from './images/logo.svg';
import './css/Header.css';

  class Header extends Component{
    static propTypes={
      title:propTypes.string.isRequired,
      items:propTypes.array.isRequired
    };
    render(){
      console.log(this.props);
      const {title, items} = this.props;
      return (
        <div className="Header">
          <div className="Logo">
            <img src={logo} alt="logo" />
            <h1>{title}</h1>
            <ul className="Menu">
              {items && items.map((item,key) => <li key={key}> {item.title } </li>)}
            </ul>
          </div>
        </div>
      );
    }

}

export default Header;
