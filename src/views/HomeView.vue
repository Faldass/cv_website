<template>
    <section class="container p-5" v-for="(section, index) in sections" :key="index">
        <div class="text-start mb-5">
            <h2 class="fs-1"><fa :icon="section.icon"/> {{ section.title }}</h2>
        </div>
        <component :is="section.component"/>
    </section>
</template>

<script>
    import accordionDiplomas from '@/components/Accordion.vue';
// @ is an alias to /src
    export default {
        name: 'HomeView',
        props: {
        },
        components: {
            accordionDiplomas
        },
        data(){
            return{
                sections: [
                    {
                        title: "Diplômes",
                        icon: ['fas', 'graduation-cap'],
                        component: 'accordionDiplomas',
                    },
                    {
                        title: "Compétences",
                        icon: ['fas', 'list-check'],
                    },
                ]
            }
        }
    }
</script>

<style scoped>
    section{
        background-color: #202225;
        box-shadow: 0 0 15px 5px rgba(1,1,1,.2);
        color: whitesmoke;
        margin-bottom: 40px;
    }
</style>