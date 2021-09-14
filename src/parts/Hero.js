import React from "react";
import Fade from "react-reveal/Fade";

import ImageHero from "assets/images/img-hero.jpg";
import ImageHero_ from "assets/images/img-hero-frame.jpg";
import IconCities from "assets/icons/ic_cities.svg";
import IconTravelers from "assets/icons/ic_travelers.svg";
import IconTreasures from "assets/icons/ic_treasures.svg";

import Button from "elements/Button";

import formatNumber from "utils/formatNumbers";

export default function Hero(props) {
	function showMostPicked() {
		window.scrollTo({
			top: props.refMostPicked.current.offsetTop - 30,
			behavior: "smooth",
		});
	}

	return (
		<Fade bottom>
			<section className="container pt-4">
				<div className="row align-items-center">
					<div className="col-auto pr-5" style={{ width: 530 }}>
						<h1 className="font-weight-bold line-height-1 mb-3">
							Forget Busy Work <br />
							Start Next Vacation
						</h1>
						<p
							className="mb-4 font-weight-light text-gray-500 w-75"
							style={{ lineHeight: "170%" }}
						>
							We provide what you need to enjoy your holiday with family, Time
							to make another memorable moments.
						</p>
						<Button
							className="btn px-5"
							hasShadow
							isPrimary
							onClick={showMostPicked}
						>
							Show Me Now
						</Button>

						<div className="row" style={{ marginTop: "80px" }}>
							<div className="col-auto" style={{ marginRight: 30 }}>
								<img
									width="36"
									height="36"
									src={IconTravelers}
									alt={`${props.data.travelers} Travelers`}
								/>
								<h6 className="mt-3">
									{formatNumber(props.data.travelers)}{" "}
									<span className="text-gray-500 font-weight light">
										Travelers
									</span>
								</h6>
							</div>
							<div className="col-auto" style={{ marginRight: 30 }}>
								<img
									width="36"
									height="36"
									src={IconTreasures}
									alt={`${props.data.treasures} Treasures`}
								/>
								<h6 className="mt-3">
									{formatNumber(props.data.treasures)}{" "}
									<span className="text-gray-500 font-weight light">
										Treasures
									</span>
								</h6>
							</div>
							<div className="col-auto">
								<img
									width="36"
									height="36"
									src={IconCities}
									alt={`${props.data.cities} Cities`}
								/>
								<h6 className="mt-3">
									{formatNumber(props.data.cities)}{" "}
									<span className="text-gray-500 font-weight light">
										Cities
									</span>
								</h6>
							</div>
						</div>
					</div>
					<div className="col-6 pl-5">
						<div style={{ width: 480, height: 400 }}>
							<img
								src={ImageHero}
								alt="Room with couches"
								className="img-fluid position-absolute"
								style={{ margin: "-40px 0 0 -70px", zIndex: 1 }}
							/>
							<img
								src={ImageHero_}
								alt="Room with couches frame"
								className="img-fluid position-absolute"
								style={{ margin: "0 -15px -15px -40px" }}
							/>
						</div>
					</div>
				</div>
			</section>
		</Fade>
	);
}
