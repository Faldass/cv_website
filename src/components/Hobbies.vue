<template>
    <div class="container">
      <div class="row">
        <div class="col-md-3" v-for="(item, index) in hobbies" :key="index">
          <div class="loisir-image" @mouseover="item.showInfo = true" @mouseleave="item.showInfo = false">
            <img :src="require(`@/assets/img/${item.img}`)" alt="Loisir" class="img-fluid loisir-image" />
            <div class="loisir-info" v-if="item.showInfo">
              <h5>{{ item.title }}</h5>
              <p>{{ item.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
<script>
    export default {
        name: 'pictureFrame',
        data() {
            return {
                hobbies: [
                    {
                        title: "Basketball",
                        img: "basketball.png",
                        description: "En club",
                        showInfo: false,
                    },
                    {
                        title: "Cartomagie",
                        img: "cartomagie.jpg",
                        description: "En club",
                        showInfo: false,
                    },
                    {
                        title: "7ème art",
                        img: "7art.jpg",
                        description: "En club",
                        showInfo: false,
                    },
                    {
                        title: "Beatbox",
                        img: "beatbox.jpg",
                        description: "Loopstation",
                        showInfo: false,
                    },
                    {
                        title: "Informatique",
                        img: "informatique.jpg",
                        description: "Développement back-end",
                        showInfo: false,
                    },
                    {
                        title: "Mangas",
                        img: "manga.png",
                        description: "En club",
                        showInfo: false,
                    },
                    {
                        title: "Hypnose",
                        img: "hypnose.jpg",
                        description: "En club",
                        showInfo: false,
                    },
                    {
                        title: "Méditation",
                        img: "meditation.jpg",
                        description: "En club",
                        showInfo: false,
                    },
                ],
            };
        },
    };
</script>
  
  <style scoped>
.loisir-image {
  position: relative;
  height: 15rem;
  margin-bottom: 20px;
}

.loisir-image:hover .loisir-info {
  display: block;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.7);
  padding: 10px;
  text-align: center;
}
  </style>
  