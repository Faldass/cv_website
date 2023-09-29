<template>
    <section class="container border">
        <div class="section-titre border">
            <h2><fa :icon="['fas', 'graduation-cap']"/> Diplômes</h2>
        </div>
        <div>
            <article class="row border align-items-center" id="articleElement">
                <fa :icon="['fas', 'pencil']" class="col fa-2x"></fa>
                <p class="col-11 m-auto d-flex"><strong>Développeur Web et mobile Bac +2</strong> - ADRAR TOULOUSE - Juillet 2021 à Juillet 2022</p>
            </article>
            <aside class="col border slide" id="asideElement">
                <p class="py-4">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore placeat rerum adipisci. Quasi dignissimos ad nisi amet, fugiat, quaerat, explicabo fuga incidunt illo quisquam numquam qui quam quis placeat quod!</p>
            </aside>
        </div>
    </section>
</template>

<script>
    export default{
        name: 'diplomasValid'
    }

    document.addEventListener('DOMContentLoaded', function() {
        const articleElement = document.getElementById('articleElement');
        const asideElement = document.getElementById('asideElement');

        articleElement.addEventListener('click', function() {
            if (asideElement.style.maxHeight) {
                asideElement.style.maxHeight = null;
            } else {
                asideElement.style.maxHeight = asideElement.scrollHeight + "px";
            }
        });
    });

</script>

<style scoped>
.slide {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.3s ease-in-out;
}

/* .section-titre {
    width: 100%;
    display: table;
    text-align: left;
    margin-bottom: 40px;
    position: relative;
}
.section-titre h2 {
    z-index: 2;
    font-size: 40px;
    padding: 15px 0;
    line-height: .65;
    margin-bottom: 20px;
    text-transform: capitalize;
    font-weight: 700;
    position: relative;
} */
</style>