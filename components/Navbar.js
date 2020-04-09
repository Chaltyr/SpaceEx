import Link from 'next/link'
import '../bulma-0.8.0/bulma-0.8.0/css/bulma.css'

const linkStyle = {
    marginRight: 15,
    color:"red"
  }

export default function Header() {
    return (
        
        <nav class="navbar" role="navigation" aria-label="main navigation" >
            <div class="navbar-brand">
                <a class="navbar-item" href="/about">
                    <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" />
                </a>  
                
                
                <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>
            
            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <Link href="/">
                        <a class="navbar-item" style={linkStyle} >
                            Home
                        </a>
                    </Link>
                    
                
                    <a class="navbar-item">
                        Documentation
                    </a>
                
                    <div class="navbar-item has-dropdown is-hoverable">
                        <a class="navbar-link">
                            More
                        </a>
                
                        <div class="navbar-dropdown">
                            <a class="navbar-item">
                                About
                            </a>
                            <a class="navbar-item">
                                Jobs
                            </a>
                            <a class="navbar-item">
                                Contact
                            </a>
                            <hr class="navbar-divider"/>
                            <a class="navbar-item">
                                Report an issue
                            </a>
                        </div>
                    </div>
                </div>
            
                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button is-primary">
                                <strong>Sign up</strong>
                            </a>
                            <a class="button is-light">
                              Log in
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </nav>    
            
    );
    
  }
  
  