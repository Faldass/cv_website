<template>
    <section class="container border">
        <div class="border">
            <h2><fa :icon="['fas', 'graduation-cap']"/> Diplômes</h2>
        </div>
        <div 
            v-for="(diploma, index) in diplomas" :key="index"
        >
            <article class="row border align-items-center" @click="toggleAside(index)">
                <fa :icon="['fas', 'pencil']" class="col fa-2x"></fa>
                <p class="col-11 m-auto d-flex">
                    <strong>{{diploma.title}}</strong> - {{diploma.school}} - {{diploma.date}}
                </p>
            </article>
            <aside class="col border slide" :class="{ open: openIndex === index }">
                <p class="py-4">{{ diploma.description }}</p>
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
    article {
        cursor: pointer; 
        transition: background-color 0.3s ease-in-out;
    }

    article:hover {
        background-color: #f0f0f0; 
    }

    .slide {
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.3s ease-in-out;
    }

    .open {
        max-height: 200px; /* Réglez la hauteur maximale d'affichage */
    }
</style>
