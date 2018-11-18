<template>
    <div class="register">
        Create thought
        <button class="btn btn-info" @click="createThought()">Изпрати</button>
    </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'create-thought',
        components: {},
        data() {
            return {}
        },
        computed: {
            user() {
                return this.$store.getters.loggedUser;
            }
        },
        methods: {
            createThought() {
                let self = this;
                this.$store.dispatch('createThought', {
                    test: 'ako',
                    userUid: self.user.uid
                }).then(function (done) {
                    console.log('thought added.');
                    self.$router.push({name: 'diary', params: {success: true}})
                })
            }
        },
        created() {
            let self = this;
        }
    }
</script>

<style scoped>

</style>