import "./recipe.css";
import style from "./recipe.module.css";

const Recipe = ({ title, calories, image, ingredients }) => {
	return (
		<div className={style.recipe}>
			<h1>{title}</h1>
			<ol>
				{ingredients.map((ing) => (
					<li>{ing.text}</li>
				))}
			</ol>
			<p>{calories}</p>
			<img className={style.imageyou} src={image} alt="recipe photo" />
		</div>
	);
};

export default Recipe;
