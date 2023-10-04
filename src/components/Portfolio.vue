<template>
    <div class="container">
        <div class="row">
            <div class="col-lg-4 col-md-6 col-sm-12 mb-4" v-for="(project, index) in projects" :key="index">
                <div class="card">
                    <img :src="project.image" class="card-img-top" alt="Project Image" />
                    <div class="card-body">
                        <h5 class="card-title">{{ project.title }}</h5>
                        <p class="card-text">{{ project.description }}</p>
                        <button class="btn btn-link" @click="showProjectDetails(index)">Voir plus</button>
                    </div>
                    <ul class="list-group list-group-flush">
                        <li class="list-group-item">
                            <strong>Technologies:</strong> {{ project.technologies.join(', ') }}
                        </li>
                        <li class="list-group-item" v-if="project.liveDemo != ''">
                            <a :href="project.liveDemo" target="_blank" class="btn btn-primary btn-block">Live Demo</a>
                        </li>
                        <li class="list-group-item">
                            <a :href="project.githubRepo" target="_blank" class="btn btn-secondary btn-block">GitHub
                                Repo</a>
                        </li>
                        <li class="list-group-item" v-if="project.resource != ''">
                            <a :href="project.resource" target="_blank" class="btn btn-secondary btn-block">Télécharger ressource</a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>

    <div class="modal" tabindex="-1" role="dialog" :class="{ 'show': showModal }">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">{{ selectedProject ? selectedProject.title : '' }}</h5>
          <button type="button" class="close" @click="closeProjectDetails">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <!-- Affichez ici les détails du projet -->
          <p>{{ selectedProject ? selectedProject.description : '' }}</p>
          <!-- Ajoutez d'autres détails ici -->
        </div>
        <!-- <div class="modal-footer">
          <button type="button" class="btn btn-secondary" @click="closeProjectDetails">Fermer</button>
        </div> -->
      </div>
    </div>
  </div>
</template>
  
<script>
    export default {
        name: "portfolioProject",
        data() {
            return {
                projects: [
                    {
                        title: "Projet 1",
                        description: "Description du projet 1.",
                        technologies: ["HTML", "CSS", "JavaScript"],
                        liveDemo: "",
                        githubRepo: "https://github.com/yourusername/project1",
                        image: require('@/assets/img/basketball.png'),
                        resource: "",
                    },
                    {
                        title: "Projet 2",
                        description: "Description du projet 2.",
                        technologies: ["React", "Node.js", "MongoDB"],
                        liveDemo: "https://example.com/demo2",
                        githubRepo: "https://github.com/yourusername/project2",
                        image: require('@/assets/img/cartomagie.jpg'),
                        resource: "",
                    },
                    // Ajoutez d'autres projets ici...
                ],
                selectedProject: null, // Stockez le projet sélectionné ici
                showModal: false, // Contrôle l'affichage de la modale
            };
        },
        methods: {
            showProjectDetails(index) {
                this.selectedProject = this.projects[index];
                this.showModal = true;
            },
            closeProjectDetails() {
                this.selectedProject = null;
                this.showModal = false;
            },
        },
    };
</script>
  
<style scoped>
.card {
    box-shadow: 0 4px 6px rgba(1, 1, 1,.2);
    transition: transform 0.3s;
}

.card-img-top {
    height: 12rem;
}

.card:hover {
    transform: translateY(-5px);
}

.card-title {
    font-size: 1.25rem;
    font-weight: bold;
}

.card-text {
    margin-bottom: 10px;
}

.btn-primary {
    background-color: #007bff;
    border-color: #007bff;
}

.btn-secondary {
    background-color: #6c757d;
    border-color: #6c757d;
    color: #fff;
}

.btn-primary:hover,
.btn-secondary:hover {
    background-color: #0056b3;
    border-color: #0056b3;
}

.btn-block {
    margin-top: 10px;
}

.container {
    padding: 40px;
}

.row {
    justify-content: center;
}
.modal {
  display: none;
  justify-content: center; /* Centre horizontalement */
  align-items: center; /* Centre verticalement */
  position: fixed;
  z-index: 1050;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  outline: 0;
  background-color: rgba(0, 0, 0, 0.5); /* Fond semi-transparent */
}

.modal.show {
  display: flex;
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 10px;
}

.modal-content {
  position: relative;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
  outline: 0;
}

.modal-header {
  padding: 1rem;
  border-bottom: 1px solid #e9ecef;
}

.modal-body {
  position: relative;
  flex: 1 1 auto;
  padding: 1rem;
  overflow-y: auto;
}

/* .modal-footer {
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: 1rem;
  border-top: 1px solid #e9ecef;
} */
</style>
  