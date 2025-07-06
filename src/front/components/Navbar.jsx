import { Link, useLocation } from "react-router-dom";

// Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpaceAwesome } from '@fortawesome/free-brands-svg-icons'

export const Navbar = () => {
	const location = useLocation()

	return (
		<nav className="navbar navbar-light bg-light">
			<div className="container-fluid m-3">
				<Link to="/" className="text-decoration-none d-flex">
					<h2 className="navbar-brand ms-3 fs-4">
						<i class="fa-solid fa-house"></i>
					</h2>
				</Link>
				{location.pathname == "/" ? "" : 
					<div className="ms-auto">
						{location.pathname == "/login" ? 
							<Link to="/signup">
								<button className="btn btn-danger m-2">Sign Up</button>
							</Link>
							:
							<Link to="/login">
							<button className="btn btn-primary m-2">Log In</button>
						</Link>
						}
						
					</div>
				}
				
			</div>
		</nav>
	);
};