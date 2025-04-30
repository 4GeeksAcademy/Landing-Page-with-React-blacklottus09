import React from 'react';

const Navbar = () => {
    return (
        <nav class="navbar navbar-expand-lg bg-dark" data-bs-theme="dark">
		<div class="container-fluid">
			<a class="navbar-brand " href="#" >Start Bootstrap</a>
			<button class="navbar-toggler " type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
			<span class="navbar-toggler-icon"></span>
			</button>
			<div class="collapse navbar-collapse" id="navbarSupportedContent">
			<ul class="navbar-nav ms-auto mb-2 mb-lg-0 d-flex">
				<li class="nav-item">
					<a class="nav-link active " aria-current="page" href="#">Home</a>
				</li>
				<li class="nav-item">
					<a class="nav-link " href="#">About</a>
				</li>
				<li class="nav-item">
					<a class="nav-link " href="#">Services</a>
				</li>
				<li class="nav-item">
					<a class="nav-link " href="#">Contact</a>
				</li>
			</ul>
			</div>
		</div>
		</nav>
    );
};

export default Navbar;