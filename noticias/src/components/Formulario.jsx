import React from "react";
import styles from "./Formulario.module.css";
import useSelect from "../hooks/useSelect";

const Formulario = () => {

    const OPCIONES = [
			{ value: "General", label: "General" },
			{ value: "business", label: "Negocios" },
			{ value: "entertainment", label: "Entretenimiento" },
			{ value: "health", label: "Salud" },
			{ value: "science", label: "Ciencia" },
			{ value: "sports", label: "Deportes" },
			{ value: "technology", label: "Tecnología" }
		];

    //Utilizando custom hook
    const [categoria, SelectNoticias] = useSelect('general', OPCIONES)

	return (
        <div 
            className={`row ${styles.buscador}`}>
            <div 
                className="col s12 m8 offset-m2"
            >
				<form onSubmit="">
					<h2 className={styles.heading}>Encuentra noticias por categoría:</h2>

                    <SelectNoticias/>

					<div className="input-field col s12">
						<input
							type="submit"
							className={`btn-large amber darken-2 ${styles.btn_block}`}
							value="Buscar"
						/>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Formulario;
