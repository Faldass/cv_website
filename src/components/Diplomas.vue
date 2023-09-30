<template>
    <section class="container p-5">
        <div class="title mb-5">
            <h2><fa :icon="['fas', 'graduation-cap']"/> Diplômes</h2>
        </div>
        <div 
            v-for="(diploma, index) in diplomas" :key="index"
            class="accordion"
        >
            <article class="row" @click="toggleAside(index)">
                <fa :icon="['fas', 'pencil']" class="col fa-2x"/>
                <p class="col-11 m-auto d-flex">
                    <strong>{{diploma.title}}</strong> - {{diploma.school}} - {{diploma.date}}
                </p>
            </article>
            <aside class="col slide" :class="{ open: openIndex === index }">
                <p>{{ diploma.description }}</p>
            </aside>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'diplomasValid',
        data(){
            return{
                diplomas: [
                    {
                        title: "Développeur Web et mobile Bac+2",
                        school: "ADRAR",
                        date: "Juillet 2021 à Juillet 2022",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore placeat rerum adipisci. Quasi dignissimos ad nisi amet, fugiat, quaerat, explicabo fuga incidunt illo quisquam numquam qui quam quis placeat quod!"
                    },
                    {
                        title: "Bac pro SEN",
                        school: "Lycée Eugène Montel",
                        date: "Septembre 2012 à Juillet 2015",
                        description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Labore placeat rerum adipisci. Quasi dignissimos ad nisi amet, fugiat, quaerat, explicabo fuga incidunt illo quisquam numquam qui quam quis placeat quod!"
                    }
                ],
                openIndex: null
            }
        },
        methods: {
            toggleAside(index) {
                if (this.openIndex === index) {
                    this.openIndex = null; // Ferme l'aside si l'article est déjà ouvert
                } else {
                    this.openIndex = index; // Ouvre l'aside de l'article cliqué
                }
            }
        }
    };
</script>

<style scoped>

    /*Gère le slide qui affiche les infos diplome */
    article {
        cursor: pointer; 
        transition: background-color 0.3s ease-in-out;
        border-bottom: 1px solid #424242;
    }
    article:hover {
        background-color: grey; 
    }
    .slide {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-in-out;
    }
    .open {
        max-height: 200px; /* Réglez la hauteur maximale d'affichage */
    }

    /* Cadre du composant */
    section{
        background-color: #202225;
        box-shadow: 0 0 15px 5px rgba(1,1,1,.2);
        color: whitesmoke;
    }
    /* Cadre accordéon */
    .accordion{
        box-shadow: 0 0 15px 5px rgba(1,1,1,.2);
    }

    /* Titre du composant */
    .title{
        width: 100%;
        text-align: left;
    }
    h2 {
        font-size: 40px;
    }
</style>
