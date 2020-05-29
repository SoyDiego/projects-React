import React, {Fragment} from 'react'

const Cancion = ({letra}) => {

    return (
        letra.length !== 0 &&

        <Fragment>
            <h2>Letra Canción</h2>
            <p className="letra">
                {letra}
            </p>
        </Fragment>
    )
}

export default Cancion
