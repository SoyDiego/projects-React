import React from 'react'
import Link from 'next/link'

const Navegacion = () => {
    return (
        <nav>
            <Link href="/inicio">Inicio</Link>
            <Link href="/populares">Populares</Link>
            <Link href="/inicio">Nuevo Producto</Link>
        </nav>
    )
}

export default Navegacion
