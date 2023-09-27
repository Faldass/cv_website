<template>
    <header>
        <img src="@/assets\photoProfil.jpg" alt="Photo de profil" class="img-thumbnail profile-photo">
        <section>
            <h1>Terzi Quentin <small class="text-muted">/ Développeur Web</small></h1>
            <ul class="nav-icons">
                <li><a href="#"><fa :icon="['far', 'circle-user']" class="fa-3x"/></a></li>
                <li><a href="#"><fa :icon="['fas', 'list-check']" class="fa-3x"/></a></li>
                <li><a href="#"><fa :icon="['fas', 'graduation-cap']" class="fa-3x"/></a></li>
                <li><a href="#"><fa :icon="['fas', 'briefcase']" class="fa-3x"/></a></li>
                <li><a href="#"><fa :icon="['far', 'folder']" class="fa-3x"/></a></li>
                <li><a href="#"><fa :icon="['fab', 'dribbble']" class="fa-3x"/></a></li>
                <li><a href="#"><fa :icon="['far', 'envelope']" class="fa-3x"/></a></li>
            </ul>
        </section>
    </header>
</template>

<script>
    export default{
        name: 'headerNav'
    }
</script>

<style scoped>
    header {
        background-color: #333;
        height: 150px;
        max-height: 150px;
        width: 60%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        color: #fff;
    }
    .profile-photo {
        width: 80px; 
        height: 80px; 
        border-radius: 50%;
        margin-right: 20px;
    }

    .nav-icons {
        list-style: none;
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
    }

    .nav-icons li {
        margin-right: 20px;
    }

    .nav-icons a {
        color: #fff;
        text-decoration: none;
    }
</style>