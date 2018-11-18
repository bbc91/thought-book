<template>
    <div class="register">
        <h4 class="page-heading">Добавяне на мисъл</h4>
        <vue-good-wizard
                finalStepLabel="Изпрати"
                nextStepLabel="Напред"
                previousStepLabel="Назад"
                :steps="steps"
                :onNext="nextClicked"
                :onBack="backClicked">
            <div slot="page1">
                <h4 style="text-align: center;">Ситуация</h4>
                <br>
                <p><strong>С кого бях? Къде бях? Кога беше това? Какво правех?</strong></p>
                <p>Но най-важното в ситуацията е да идентифицираме <strong>Активиращият стимул</strong> – онзи конкретен
                    момент, в който се отключва цялото ни негативно преживяване – и по-конкретно емоционалната
                    компонента на това преживяване. </p>
                <p><strong style="color: red;"><i>Например:</i></strong><i> Бях на сбирка на анонимните алкохолици на
                    седмичната ни среща. Когато се прибрах у дома, се оказа, че имаме гости – дъщеря ми с 5 годишната ми
                    внучка и те ведно с жена ми бяха в изключително радостно настроение.</i></p>
                <div class="form-group">
                    <textarea class="form-control" rows="5" v-model="thought.situation"></textarea>
                </div>
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
                thought: {
                    situation: ''
                },
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