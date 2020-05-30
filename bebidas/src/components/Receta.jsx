import React, { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";

import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
	const top = 50;
	const left = 50;

	return {
		top: `${top}%`,
		left: `${left}%`,
		transform: `translate(-${top}%, -${left}%)`,
	};
}

const useStyles = makeStyles((theme) => ({
	paper: {
		position: "absolute",
		width: 400,
		backgroundColor: theme.palette.background.paper,
		boxShadow: theme.shadows[5],
		padding: theme.spacing(2, 4, 3),
	},
}));

const Receta = ({ receta }) => {
	//Config. del modal de material ui
	const [modalStyle] = useState(getModalStyle);
	const [open, setOpen] = useState(false);

	const classes = useStyles();

	const handleOpen = () => {
		setOpen(true);
	};

	const handleClose = () => {
		setOpen(false);
	};

	const { informacion, guardarIdReceta, guardarReceta } = useContext(
		ModalContext
	);

	//Muestra y formatea ingredientes

	const mostrarIngredientes = (informacion) => {
		let ingredientes = [];
		for (let index = 1; index < 16; index++) {
			if (informacion[`strIngredient${index}`]) {
				ingredientes.push(
					<li>
						{informacion[`strIngredient${index}`]}
						{informacion[`strMeasure${index}`]}
					</li>
				);
			}
        }
        
        return ingredientes
	};

	return (
		<div className="col-md-4 mb-3">
			<div className="card">
				<h2 className="card-header">{receta.strDrink}</h2>

				<img
					className="card-img-top"
					src={receta.strDrinkThumb}
					alt={`Imagen de ${receta.strDrink}`}
				/>

				<div className="card-body">
					<button
						className="btn btn-primary btn-block"
						onClick={() => {
							guardarIdReceta(receta.idDrink);
							handleOpen();
						}}
					>
						Ver Receta
					</button>

					<Modal
						open={open}
						onClose={() => {
							guardarIdReceta(null);
							guardarReceta({});
							handleClose();
						}}
					>
						<div style={modalStyle} className={classes.paper}>
							<h2>{informacion.strDrink}</h2>
							<h3 className="mt-4">Instrucciones</h3>
							<p>{informacion.strInstructions}</p>

							<img
								className="img-fluid my-4"
								src={informacion.strDrinkThumb}
								alt={informacion.strDrink}
							/>

							<h3>Ingredientes y cantidades</h3>
							<ul>{mostrarIngredientes(informacion)}</ul>
						</div>
					</Modal>
				</div>
			</div>
		</div>
	);
};

export default Receta;
