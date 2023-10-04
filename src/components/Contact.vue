<template>
    <div class="container">
        <form class="contact-form shadow">
            <div class="row">
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="nom">Nom</label>
                        <input type="text" class="form-control" id="nom" placeholder="Votre nom" required />
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="form-group">
                        <label for="prenom">Prénom</label>
                        <input type="text" class="form-control" id="prenom" placeholder="Votre prénom" required />
                    </div>
                </div>
            </div>
            <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" placeholder="Votre adresse email" required />
            </div>
            <div class="form-group">
                <label for="objet">Objet</label>
                <input type="text" class="form-control" id="objet" placeholder="L'objet de votre message"/>
            </div>
            <div class="form-group">
                <label for="message">Message</label>
                <textarea class="form-control" id="message" rows="5" placeholder="Votre message" required></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Envoyer</button>
        </form>
    </div>
</template>
<script>
    export default {
        name: 'contactMail',
        data() {
            return {
            };
        },
        methods: {
        }
    };
</script>
<style scoped>
    .container {
        max-width: 600px;
        padding: 20px;
    }

    .contact-form {
        background-color: #36393f;
        padding: 20px;
        border-radius: 5px;
    }

    .form-group {
        margin-bottom: 15px;
    }

    label {
        font-weight: bold;
    }

    .btn-primary {
        background-color: #007bff;
        color: #fff;
        border: none;
        padding: 10px 20px;
        border-radius: 5px;
        cursor: pointer;
    }

    .btn-primary:hover {
        background-color: #0056b3;
    }
</style>
  