import React from "react";
import styled from "@emotion/styled";
import formatDistanceToNow from "date-fns/formatDistanceToNow";
import {es} from 'date-fns/locale'

const Imagen = styled.img`
	width: 200px;
`;

const DetallesProducto = ({ producto }) => {
	const {
		id,
		comentarios,
		creado,
		descripcion,
		empresa,
		nombre,
		url,
		urlImagen,
		votos,
	} = producto;
	return (
		<li>
			<div>
				<div>
					<Imagen src={urlImagen} />
				</div>

				<div>
					<h1>{nombre}</h1>
					<p>{descripcion}</p>
					<div>
						<img
							src="/static/img/comentario.png"
							alt="Comentario"
						/>
						<p>{comentarios.length} Comentarios</p>
					</div>

					<p>
						Publicado hace: {formatDistanceToNow(new Date(creado),{locale: es})}
					</p>
				</div>
			</div>

			<div>
                <div>
                    &#9650;
                    <p>{votos} Votos</p>
                </div>
            </div>
		</li>
	);
};

export default DetallesProducto;
