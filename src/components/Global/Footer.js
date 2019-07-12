//Dependencies
import React, {Component} from 'react';
import propTypes from 'prop-types';

//Assets
import './css/Footer.css';

  class Footer extends Component{
    static propTypes ={
      copyRight: propTypes.string
    };
    render(){
      const {copyRight="&copy; React 2017"}= this.props;
      return (
        <div className="Footer">
            <p dangerouslySetInnerHTML={{__html:copyRight}}/>
        </div>
      );
    }

}

export default Footer;
