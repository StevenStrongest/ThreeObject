import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Acordion extends Component{
    constructor(props){
        super(props);
        this.state = {
            isCollapsed: true
        }
        this.ShowContent = this.ShowContent.bind(this);
    }

    ShowContent(){ 
        this.setState({
            isCollapsed: !this.state.isCollapsed
        })
    }

    render(){
        const {header, children} = this.props;
        const {isCollapsed} = this.state;
        return(            
            <div className="Accordion">
                <div onClick={this.ShowContent} className="heading">
                    <h2>{header}</h2>
                </div>
                {!isCollapsed && <div className="content">
                    {children}
                </div>}
            </div>
        );
    }
}

Acordion.propTypes = {
header: PropTypes.string
};

export default Acordion;