import React from "react";
import PropTypes from 'prop-types'

const Noticia = ({ noticia }) => {
	const { urlToImage, url, title, description, source } = noticia;

    //Si no hay imagen, no la carga y se almacena en la variable
	const imagen = urlToImage && (
		<div className="card-image">
			<img src={urlToImage} alt={title} />
			<span className="card-title">{source.name}</span>
		</div>
	);

	return (
		<div className="col s12 l4">
			<div className="card">
                {/* Se muestra si la variable imagen tiene algo. */}
                {imagen}

				<div className="card-content">
					<h5>{title}</h5>
					<p>{description}</p>
				</div>

				<div className="card-action">
					<a
						href={url}
						target="_blank"
						rel="noopener noreferrer"
						className="waves-effect waves-light btn"
					>
						Ver Noticia Completa
					</a>
				</div>
			</div>
		</div>
	);
};

Noticia.propTypes = {
	noticia: PropTypes.object.isRequired,
};


export default Noticia;
