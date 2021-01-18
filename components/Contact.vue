<template>
    <div class="has-background-black is-full">        
        <div class="container is-flex-wrap-wrap	is-vcentered is-align-content-center">
            <div class="columns is-full">
                <div class="column">
                    <h1 class="is-full title is-1 is-desktop  has-text-centered drunk_widebold has-text-white">
                        Cuentanos tu experiencia
                    </h1>
                    <h2 class="subtitle is-5 m-0 has-text-centered sans_regular has-text-white description">
                        Don't miss out on our great offers & Receive deals from all our
                        top restaurants via e-mail.
                    </h2>
                </div>            
            </div>            
            
            <div class="columns is-full">
                <div class="column">
                    <input type="text" class="is-full">
                    <input type="text" class="is-full">
                </div>
                <div class="column">
                    <textarea name="" id="" cols="30" rows="10"></textarea>
                    <button type="submit" class="has-text-black">Enviar comentarios</button>
                </div>
            </div>            
        </div>
    </div>
</template>

<style lang="scss" scoped>
    input {
        width: 100%;
        height: 40px;
        border: 1px solid white;
        margin-bottom: 10px;
        background-color: rgba(0,0,0,0);
        border-radius: 5px;
    }    
    textarea {
        width: 100%;
        border: 1px solid white;
        margin-bottom: 10px;
        background-color: rgba(0,0,0,0);
        border-radius: 5px;
    }
    button {
        background-color: $yellow;
        height: 40px;
        width: 150px;
        border-radius: 5px;
        border: none;
    }
</style>