<template>
    <footer class="container-fluid fixed-bottom border py-3"> <!-- bleu -->
        <div class="row justify-content-between"> <!-- vert -->
            <section class="col-2 border align-self-center"> <!-- rouge -->
                <p><small>&copy;2023 </small>Quentin Terzi</p>
            </section>
            <section class="col-6 border"> <!-- Jaune -->
                <div class="row">
                    <article class="col border">
                        <fa :icon="['fas', 'phone']"></fa>
                        <p>06.43.29.81.73</p>
                    </article>
                    <article class="col border">
                        <fa :icon="['fas', 'at']" />
                        <p >quentin.terzi@outlook.fr</p>
                    </article>
                    <article class="col border align-self-center">
                        <fa :icon="['fab', 'linkedin']" class="me-2"/>
                        <fa :icon="['fab', 'github']" />
                    </article>
                </div>
            </section>
        </div>
    </footer>
</template>

<script>
    export default{
        name: 'footerContact'
    }
</script>

<style>

</style>