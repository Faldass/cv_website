<template>
    <header class="container text-black py-3">
        <div class="d-flex align-items-center">
            <img src="@/assets/photoProfil.jpg" alt="Photo de profil" class="img-thumbnail profile-photo">
            <section>
                <h1 class="mb-10">Terzi Quentin <small class="text-muted">/ Développeur Web</small></h1>
                <nav class="nav-icons list-inline mt-3">
                    <router-link :to="{ name: 'home', params: { sectionName: 'profil' } }"><fa :icon="['far', 'circle-user']" class="fa-2x"/></router-link>
                    <router-link :to="{ name: 'home', params: { sectionName: 'competences' } }"><fa :icon="['fas', 'list-check']" class="fa-2x"/></router-link>
                    <router-link :to="{ name: 'home', params: { sectionName: 'diplomes' } }"><fa :icon="['fas', 'graduation-cap']" class="fa-2x"/></router-link>
                    <router-link :to="{ name: 'home', params: { sectionName: 'experiences' } }"><fa :icon="['fas', 'briefcase']" class="fa-2x"/></router-link>
                    <router-link :to="{ name: 'home', params: { sectionName: 'portfolio' } }"><fa :icon="['far', 'folder']" class="fa-2x"/></router-link>
                    <router-link :to="{ name: 'home', params: { sectionName: 'loisirs' } }"><fa :icon="['fab', 'dribbble']" class="fa-2x"/></router-link>
                    <router-link :to="{ name: 'home', params: { sectionName: 'contact' } }"><fa :icon="['far', 'envelope']" class="fa-2x"/></router-link>
                </nav>
            </section>
        </div>
    </header>
</template>

<script>
    export default{
        name: 'headerNav'
    }
</script>

<style scoped>
    header {
        /* background-color: #333; */
        /* height: 150px;
        max-height: 150px;
        width: 60%; */
        margin: 0 auto;
        display: flex;
        justify-content: center;
    }
    .profile-photo {
        width: 100px; 
        height: 120px; 
        border-radius: 50%;
        margin-right: 10px;
    }

    .nav-icons {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        justify-content: space-around;
        /* align-items: center; */
    }

    .nav-icons li {
        margin-right: 20px;
    }

    .nav-icons a {
        /* color: #fff; */
        text-decoration: none;
    }
</style>