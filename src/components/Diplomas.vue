<template>
    <section class="container p-5">
        <div class="text-start mb-5">
            <h2 class="fs-1"><fa :icon="['fas', 'graduation-cap']"/> Diplômes</h2>
        </div>
        <div class="shadow ">
            <div
            v-for="(item, index) in diplomas"
            :key="index"
            class="accordion-item"
            >
                <div class="accordion-header" @click="toggleSection(index)">
                    <span><strong>{{ item.title }}</strong> - {{ item.school }} - {{ item.date }}</span>
                    <span class="fs-4">{{ isOpen(index) ? '-' : '+' }}</span>
                </div>
                <article v-if="isOpen(index)" class="accordion-content">
                    {{ item.description }}
                </article>
            </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'diplomasValid',
        data() {
            return {
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
                openSection: null,
            };
        },
        methods: {
            toggleSection(index) {
                if (this.openSection === index) {
                    this.openSection = null;
                } else {
                    this.openSection = index;
                }
            },
            isOpen(index) {
                return this.openSection === index;
            },
        },
    };
</script>

<style scoped>
    .accordion-item {
        border-bottom: 1px solid #424242;
    }

    .accordion-header {
        cursor: pointer;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 15px;
        background-color: #36393f;
    }
    .accordion-content {
        padding: 10px;
        background-color: #202225;
        border-top: 1px solid #424242;
        border-bottom: 1px solid #424242;
        padding: 30px 40px;
    }

    section{
        background-color: #202225;
        box-shadow: 0 0 15px 5px rgba(1,1,1,.2);
        color: whitesmoke;
    }
</style>
