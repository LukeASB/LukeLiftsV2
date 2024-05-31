const EmailListSection: React.FC = () => {
    return (
		<div id="join">
			<div className="container my-3 pb-3 sectionMinHeight">
				<section className="container my-5">
					<div className="row align-items-center">
					<div className="col-md-6">
						<h1>STAY UPDATED</h1>
						<h2>Join Up For a Free LukeLifts Program</h2>
						<p>Join the LukeLifts community to get FREE access to a LukeLifts program.</p>
						<p>Enter your email below to sign up today for FREE</p>
					</div>
					<div className="col-md-6">
						<form>
							<div className="mb-3">
							<input
								type="email"
								className="form-control"
								placeholder="Enter your email"
								aria-label="Enter your email"
								required
							/>
							</div>
							<div>
							<button className="btn btn-primary" type="submit">GET FREE PROGRAM NOW</button>
							</div>
						</form>
					</div>
					</div>
				</section>
			</div>
		</div>
    );
}

export default EmailListSection;