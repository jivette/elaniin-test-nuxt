<template>
    <div class="slider">
        <div class="container">
            <div class="columns is-desktop is-vcentered reverse-columns">
                <div class="column">
                    <h1 class="is-full title m-0 is-1 is-desktop  has-text-left drunk_widebold has-text-black">
                        Un nuevo sabor esta en 
                    </h1>
                    <h1 class="title is-1 is-desktop has-text-left highlight-title drunk_widebold has-text-black">
                        la ciudad
                    </h1>
                    <h2 class="subtitle is-5 has-text-left sans_regular has-text-black description">
                        Estamos a punto de descubrir un mundo lleno de sabores y de emociones inigualables.
                    </h2>
                    <p class="subtitle is-5 has-text-left is-flex is-vcentered syne_bold has-text-black">
                        Encuentranos
                        <img src="../assets/images/arrow-right.png" width="20" height="20"/>
                    </p>
                </div>
                <div class="column">
                    <img src="../assets/images/hamburger.png" width="100%"/>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .slider {
        background-image: url("../assets/images/vector.png");
        height: 90vh;
        width: 100%;
        background-size: contain;
        background-repeat: no-repeat;
        background-position: right top;
        background-color: $white;

        .columns {
            width: 100%;
        }
        .highlight-title {
            position: relative;
            z-index: 1;
            &:before {
                content: ' ';
                position: absolute;
                width: 60%;
                height: 80%;
                bottom: -5px;
                background: $yellow;
                z-index: 0;
                mix-blend-mode: color-burn;
                margin-left: -15px;
                @media(max-width: 767px) { /* <== You can change this break point as per your  needs */
                    width: 90%
                }
            }
        }
        .description {
            opacity: 0.4;
            margin: 10px;
        }
        @media(max-width: 767px) { /* <== You can change this break point as per your  needs */
            .reverse-columns {
                flex-direction: column-reverse;
                display: flex;
            }
        }
    }
</style>