import React from "react";
import styles from "./Formulario.module.css";

const Formulario = () => {
	return (
        <div 
            className={`row ${styles.buscador}`}>
            <div 
                className="col s12 m8 offset-m2"
            >
				<form onSubmit="">
					<h2 className={styles.heading}>Encuentra noticias por categoría:</h2>
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
