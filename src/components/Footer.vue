<template>
    <footer class="container-fluid fixed-bottom border py-3 d-flex justify-content-between">
        <section class="col-2 border">
            <p><small>&copy;2023 </small>Quentin Terzi</p>
        </section>
        <section class="col-6 border d-flex justify-content-evenly align-items-center">
            <article>
                <fa :icon="['fas', 'phone']"></fa>
                <p>06.43.29.81.73</p>
            </article>
            <article>
                <fa :icon="['fas', 'at']" />
                <p >quentin.terzi@outlook.fr</p>
            </article>
            <article>
                <fa :icon="['fab', 'linkedin']" class="me-2"/>
                <fa :icon="['fab', 'github']" />
            </article>
        </section>
    </footer>
</template>

<script>
    export default{
        name: 'footerContact'
    }
</script>

<style>

</style>