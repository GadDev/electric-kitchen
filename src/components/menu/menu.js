import React, { useState } from "react"
import Breakfast from "./breakfast"
import Lunch from "./lunch"
import HotDrinks from "./hot-drinks"
import ColdDrinks from "./cold-drinks"

const Menu = () => {
	const [menuCategory, setMenuCategory] = useState("hotDrinks")
	let SelectedCategory
	if (menuCategory === "hotDrinks") {
		SelectedCategory = HotDrinks
	} else if (menuCategory === "coldDrinks") {
		SelectedCategory = ColdDrinks
	} else if (menuCategory === "breakfast") {
		SelectedCategory = Breakfast
	} else if (menuCategory === "lunch") {
		SelectedCategory = Lunch
	}

	return (
		<section className="menu">
			<h2>Our Menus</h2>
			<ul className="menu-headers">
				<li className="menu-header">
					<button
						onClick={() => setMenuCategory("hotDrinks")}
						tabIndex="0"
					>
						Hot Drinks
					</button>
				</li>
				<li className="menu-header">
					<button
						onClick={() => setMenuCategory("coldDrinks")}
						tabIndex="-1"
					>
						Cold Drinks
					</button>
				</li>
				<li className="menu-header">
					<button
						onClick={() => setMenuCategory("breakfast")}
						tabIndex="-2"
					>
						Breakfast
					</button>
				</li>
				<li className="menu-header">
					<button
						onClick={() => setMenuCategory("lunch")}
						tabIndex="-3"
					>
						Lunch
					</button>
				</li>
			</ul>
			<SelectedCategory />
		</section>
	)
}

export default Menu
