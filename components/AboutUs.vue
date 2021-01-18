<template>
    <div  class="columns is-vcentered section-2" id="about-us">        
        <div  class="column container-background">
            <img src="../assets/images/bg_2.png" alt="" width="100%">
            <div class="legend">
                <h1 class="title m-0 is-2 is-desktop  has-text-right drunk_widebold has-text-white">
                    LA COMIDA ES 
                </h1>
                <h1 class="title is-2 is-desktop has-text-right highlight-title drunk_widebold has-text-yellow">
                    NUESTRO ARTE
                </h1>
            </div>                 
        </div>
        <div  class="column p-6">
            <p class="subtitle is-5 has-text-left is-flex is-vcentered syne_bold has-text-black">
                ¿Quién es Foodies?
            </p>
            <h2 class="subtitle is-5 has-text-left sans_regular has-text-black description">
                Elit irure ad nulla id elit laborum nostrud mollit irure. Velit reprehenderit sunt nulla 
                enim aliquip duis tempor est culpa fugiat consequat culpa consectetur Lorem. Reprehenderit 
                dolore culpa irure eiusmod minim occaecat et id minim ullamco. 
            </h2>
            <p class="subtitle is-5 has-text-left is-flex is-vcentered syne_bold has-text-black">
                Contáctanos
                <img src="../assets/images/arrow-right.png" width="20" height="20"/>
            </p>
        </div>
    </div>
</template>
<style  lang="scss" scoped>
    .section-2{
        margin-top: 60px;
        .container-background {
            position: relative;
            .legend {
                bottom: 61px;
                right: 40px;
                position: absolute;
            }
            .has-text-yellow {
                color: $yellow;
            }        
        }
        .description {
            font-size: 18px;
            opacity: 0.4;
        }        
    }
</style>