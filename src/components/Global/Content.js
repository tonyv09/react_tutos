//import React from 'react';
//Dependencies
import React, {Component} from 'react';
import PropTypes from 'prop-types';

//Assets
import './css/Content.css';

  class Content extends Component{
    static PropTypes = {
      children:PropTypes.object.isRequired
    } ; 
    render(){
      const {body}=this.props;
      return (
        <div className="Content">
            <h1>Hola desde el componente Contenido</h1>
            {body}
        </div>
      );
    }

}

export default Content;
