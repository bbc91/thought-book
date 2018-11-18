<template>
    <div class="register">
        <h4>Добавяне на мисъл</h4>
            <vue-good-wizard
                    finalStepLabel="Изпрати"
                    nextStepLabel="Напред"
                    previousStepLabel="Назад"
                    :steps="steps"
                    :onNext="nextClicked"
                    :onBack="backClicked">
                <div slot="page1">
                    <h4>Step 1</h4>
                    <p>This is step 1</p>
                </div>
                <div slot="page2">
                    <h4>Step 2</h4>
                    <p>This is step 2</p>
                </div>
                <div slot="page3">
                    <h4>Step 3</h4>
                    <p>This is step 3</p>
                </div>
                <div slot="page4">
                    <h4>Step 4</h4>
                    <p>This is step 4</p>
                </div>
            </vue-good-wizard>
    </div>
</template>

<script>
    // @ is an alias to /src
    // import HelloWorld from '@/components/HelloWorld.vue'
    import {GoodWizard} from 'vue-good-wizard';

    export default {
        name: 'create-thought',
        components: {
            'vue-good-wizard': GoodWizard,
        },
        data() {
            return {
                steps: [
                    {
                        label: '',
                        slot: 'page1',
                    },
                    {
                        label: '',
                        slot: 'page2',
                    },
                    {
                        label: '',
                        slot: 'page3',
                    },
                    {
                        label: '',
                        slot: 'page4',
                        options: {
                            // nextDisabled: true, // control whether next is disabled or not
                        },
                    }
                ],
            }
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
            },
            nextClicked(currentPage) {
                console.log('next clicked', currentPage);

                if (currentPage === this.steps.length - 1) {
                    this.createThought();
                }

                return true; //return false if you want to prevent moving to next page
            },
            backClicked(currentPage) {
                console.log('back clicked', currentPage);
                return true; //return false if you want to prevent moving to previous page
            }
        },
        created() {
            let self = this;
        }
    }
</script>

<style scoped>

</style>