import React from 'react';

class HeaderComponent extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
           
        }
    }


    render(){
        return(
            <div>
                <header>
                    <nav className="navbar navbar-expand-md nav-dark bg-dark">
                         <div><a className="navbar-brand">User Management App</a></div>
                    </nav>
                </header> 
            </div>
        )
            
    }
}

export default HeaderComponent