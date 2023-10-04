<template>        
    <template v-if="section === null">
        <section class="container p-5" v-for="(section, index) in sections" :key="index">
            <div class="text-start mb-5">
                <h2 class="fs-2"><fa :icon="section.icon"/> {{ section.title.toUpperCase() }}</h2>
            </div>
            <component :is="section.component"/>
        </section>
    </template>
    <template v-else>
        <section class="container p-5">
            <div class="text-start mb-5">
                <h2 class="fs-2"><fa :icon="section.icon"/> {{ section.title.toUpperCase() }}</h2>
            </div>
            <component :is="section.component"/>
        </section>
    </template>
</template>

<script>
    import accordionDiplomas from '@/components/Accordion.vue';
    import pictureFrame from '@/components/Hobbies.vue'
// @ is an alias to /src
    export default {
        name: 'HomeView',
        props: {
        },
        components: {
            accordionDiplomas,
            pictureFrame,
        },
        computed: {
            section() {
            const sectionName = this.$route.params.sectionName;
                if (sectionName !== 'profil') {
                    const selectedSection = this.sections.find(section => section.title === sectionName);
                    return selectedSection || null; 
                } else {
                    return null; 
                }
            },
        },
        data(){
            return{
                sections: [
                    {
                        title: "presentation",
                        icon: ['far', 'circle-user'],
                    },
                    {
                        title: "competences",
                        icon: ['fas', 'list-check'],
                    },
                    {
                        title: "diplomes",
                        icon: ['fas', 'graduation-cap'],
                        component: 'accordionDiplomas',
                    },
                    {
                        title: "experiences",
                        icon: ['fas', 'briefcase'],
                    },
                    {
                        title: "portfolio",
                        icon: ['far', 'folder'],
                    },
                    {
                        title: "loisirs",
                        icon: ['fab', 'dribbble'],
                        component: 'pictureFrame',
                    },
                    {
                        title: "contact",
                        icon: ['far', 'envelope'],
                    },
                ],
            }
        },
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