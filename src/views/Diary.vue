<template>
    <div class="register">
        <b-alert :show="dismissCountDown"
                 dismissible
                 variant="success"
                 @dismissed="dismissCountDown=0"
                 @dismiss-count-down="countDownChanged">
            Успешно добавихте мисъл в дневника си!
        </b-alert>
        <h4 class="page-heading">Списък с мисли</h4>
        <router-link class="btn btn-info" to="/diary/create-thought">Добави мисъл</router-link>

        <div v-for="(thought, index) in thoughtsList" :key="index">{{thought.test}}</div>
    </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'diary',
        components: {},
        data() {
            return {
                dismissSecs: 3,
                dismissCountDown: 0
            }
        },
        computed: {
            thoughtsList() {
                return this.$store.getters.thoughtsList;
            }
        },
        methods: {
            countDownChanged(dismissCountDown) {
                this.dismissCountDown = dismissCountDown
            },
            showSuccess() {
                this.dismissCountDown = this.dismissSecs
            }
        },
        async created() {
            let self = this;

            if (this.$route.params.success) {
                this.showSuccess();
            }

            await self.$store.dispatch('fetchThoughts');

        }
    }
</script>

<style scoped>

</style>