import Link from 'next/link'
import Head from 'next/head'
import '../bulma-0.8.0/bulma-0.8.0/css/bulma.css'

const linkStyle = {
    marginRight: 15,
    color:"red"
  }

export default function Nav() {
	return (    
		<nav className="navbar" id="navbar  " role="navigation" aria-label="main navigation" >
			<Head>
				<link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;1,700&display=swap" rel="stylesheet" />
			</Head>
			<div className="navbar-brand">
				<a className="navbar-item" href="/">
					<img src="/spacex_logo_white.png" alt=""  />
				</a>  
															
				<a role="button" className="navbar-burger burger " aria-label="menu" aria-expanded="false" data-target="navbarBasicExample"  >
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
						<span aria-hidden="true"></span>
				</a>
			</div>
					
			<div id="navbarBasicExample" className="navbar-menu">
				<div className="navbar-start">		
					<a className="navbar-item" href="/rocket/falcon1">
						Falcon 1
					</a>

					<a className="navbar-item" href="/rocket/falcon9">
						Falcon 9
					</a>

					<a className="navbar-item" href="/rocket/falconheavy">
						Falcon Heavy
					</a>

					<a className="navbar-item" href="/rocket/starship">
						Starship
					</a>
				
					<div className="navbar-item has-dropdown is-hoverable">
						<a className="navbar-link">
								More
						</a>
			
						<div className="navbar-dropdown">
							<Link href="/about" disable="true">
								<a className="navbar-item">
									About
								</a>
							</Link>

							<a className="navbar-item" href="https://github.com/Chaltyr/SpaceEx">
									Github
							</a>

							<a className="navbar-item" href="https://www.linkedin.com/feed/">
									LinkedIn
							</a>
						</div>
				</div>
			</div>
					
			</div>
				<style jsx global>{`
						.navbar {
								background-color: black;
								font-family: 'Space Mono', monospace;
						}

						.navbar-item {
								color:white;
								transition: 0.5s;

						}
						
						.navbar-item:hover {
								text-decoration: underline;
								background-color: #3e8e41;
								color: white;
				
						}

						.navbar-link {
								color:white;
						}

						.navbar-dropdown {
								background-color: black;
						}

						.navbar-start {
								background-color: black;
						}
				`}
			</style>
		</nav>    			
	);	
}
  
  