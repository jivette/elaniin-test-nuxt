<template>
    <nav class="navbar" role="navigation">
        <div class="container is-widescreen">
            <div class="navbar-brand">
                <a class="navbar-item" href="https://bulma.io">
                <p class="drunk_widebold brand">Foodies</p>
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu">
                <div class="navbar-start">
                    <a class="navbar-item" href="#about-us">
                        Acerca de
                    </a>
                    <a class="navbar-item" href="#restaurants">
                        Restaurantes
                    </a>
                    <a class="navbar-item">
                        Menú
                    </a>
                    <a class="navbar-item">
                        Contáctanos
                    </a>
                </div>
            </div>
        </div>
    </nav>
</template>
<style  lang="scss" scoped>
    nav.navbar {
        position: fixed;
        top: 0;
        width: 100%;
        background-color: rgba(0,0,0,0);

        .brand {
            font-size: 27px;
        }
    }
</style>