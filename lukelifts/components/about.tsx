'../public/css/globals.css';

const About: React.FC = () => {
    return (
      	<div id="about">
			<section className="container my-3 pb-3 sectionMinHeight sectionBorder">
				<div className="row align-items-center">
					<div className="col-md-8">
						<h1>WELCOME TO LUKELIFTS</h1>
						<p>I&apos;m Luke SB, and I&apos;m a certified Personal Trainer.</p>
						<p>I help people with their fitness related challenges and achieve extraordinary goals.</p>
					</div>
					<div className="col-md-4 text-center">
					<img
						src="../assets/profile.jpg"
						alt="Profile"
						className="rounded-circle img-fluid"
						style={{ width: '150px', height: '150px' }}
					/>
					</div>
				</div>
        	</section>
		</div>
      );
}

export default About;