<template>
    <div class="container">
      <div class="row mt-4">
        <div
          class="col-lg-4 col-md-6 col-sm-12 mb-4"
          v-for="(skill, index) in skills"
          :key="index"
        >
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">{{ skill.name }}</h5>
              <div class="progress">
                <div
                  class="progress-bar"
                  role="progressbar"
                  :style="{ width: skill.level + '%' }"
                >
                  {{ skill.level }}%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'skillsInfo',
    data() {
      return {
        skills: [
          { name: 'HTML', level: 90 },
          { name: 'CSS', level: 85 },
          { name: 'JavaScript', level: 80 },
          { name: 'Python', level: 75 },
          { name: 'React', level: 70 },
          { name: 'Vue.js', level: 65 },
          { name: 'Node.js', level: 60 },
          { name: 'SQL', level: 55 },
          { name: 'Network Security', level: 50 },
          { name: 'Linux', level: 45 },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .card {
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s;
  }
  
  .card:hover {
    transform: translateY(-5px);
  }
  
  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
  }
  
  .progress {
    height: 25px;
    margin-top: 10px;
  }
  
  .progress-bar {
    text-align: center;
    line-height: 25px;
    font-weight: bold;
  }
  </style>
  