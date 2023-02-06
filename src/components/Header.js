import React from "react";


class Header extends React.Component {
    render() {
        return (
            <header class="masthead">
            <div class="container px-4 px-lg-5 d-flex h-100 align-items-center justify-content-center">
                <div class="d-flex justify-content-center">
                    <div class="text-center">
                        <h1 class="mx-auto my-0 text-uppercase">Fuerteventura</h1>
                        <h2 class="text-white-50 mx-auto mt-2 mb-5">Isla de Senderos</h2>
                        <a class="btn btn-primary" href="#rutas">Ver Rutas</a>
                    </div>
                </div>
            </div>
        </header>
        )
    }
}
export default Header;