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
                <h4 style="text-align: center;">Чувства / Настроения </h4>
                <br>
                <p style="text-align: center">Дайте проценти на чувствата които изпивате в ситуацията.</p>
                <div class="row">
                    <div class="col-md-3 emotion">
                        <circle-slider
                                progressColor="#17a2b8 "
                                knobColor="#17a2b8"
                                circleColor="#ccc"
                                v-model="thought.emotions.fear"
                                :side="150"
                                :min="0"
                                :max="100"
                                :step-size="5"
                                :circle-width-rel="20"
                                :progress-width-rel="10"
                                :knob-radius="10"
                        ></circle-slider>
                        Страх {{thought.emotions.fear}}%
                    </div>
                    <div class="col-md-3 emotion">
                        <circle-slider
                                progressColor="#17a2b8 "
                                knobColor="#17a2b8"
                                circleColor="#ccc"
                                v-model="thought.emotions.worry"
                                :side="150"
                                :min="0"
                                :max="100"
                                :step-size="5"
                                :circle-width-rel="20"
                                :progress-width-rel="10"
                                :knob-radius="10"
                        ></circle-slider>
                        Притеснение {{thought.emotions.worry}}%
                    </div>
                    <div class="col-md-3 emotion">
                        <circle-slider
                                progressColor="#17a2b8 "
                                knobColor="#17a2b8"
                                circleColor="#ccc"
                                v-model="thought.emotions.humiliation"
                                :side="150"
                                :min="0"
                                :max="100"
                                :step-size="5"
                                :circle-width-rel="20"
                                :progress-width-rel="10"
                                :knob-radius="10"
                        ></circle-slider>
                        Унижение {{thought.emotions.humiliation}}%
                    </div>
                    <div class="col-md-3 emotion">
                        <circle-slider
                                progressColor="#17a2b8 "
                                knobColor="#17a2b8"
                                circleColor="#ccc"
                                v-model="thought.emotions.panic"
                                :side="150"
                                :min="0"
                                :max="100"
                                :step-size="5"
                                :circle-width-rel="20"
                                :progress-width-rel="10"
                                :knob-radius="10"
                        ></circle-slider>
                        Паника {{thought.emotions.panic}}%
                    </div>
                </div>
                <div class="row" style="margin-top: 15px; margin-bottom: 15px;">
                    <div class="col-md-3 emotion">
                        <circle-slider
                                progressColor="#17a2b8 "
                                knobColor="#17a2b8"
                                circleColor="#ccc"
                                v-model="thought.emotions.pain"
                                :side="150"
                                :min="0"
                                :max="100"
                                :step-size="5"
                                :circle-width-rel="20"
                                :progress-width-rel="10"
                                :knob-radius="10"
                        ></circle-slider>
                        Болка {{thought.emotions.pain}}%
                    </div>
                    <div class="col-md-3 emotion">
                        <circle-slider
                                progressColor="#17a2b8 "
                                knobColor="#17a2b8"
                                circleColor="#ccc"
                                v-model="thought.emotions.anger"
                                :side="150"
                                :min="0"
                                :max="100"
                                :step-size="5"
                                :circle-width-rel="20"
                                :progress-width-rel="10"
                                :knob-radius="10"
                        ></circle-slider>
                        Гняв {{thought.emotions.anger}}%
                    </div>
                    <div class="col-md-3 emotion">
                        <circle-slider
                                progressColor="#17a2b8 "
                                knobColor="#17a2b8"
                                circleColor="#ccc"
                                v-model="thought.emotions.apathy"
                                :side="150"
                                :min="0"
                                :max="100"
                                :step-size="5"
                                :circle-width-rel="20"
                                :progress-width-rel="10"
                                :knob-radius="10"
                        ></circle-slider>
                        Апатия {{thought.emotions.apathy}}%
                    </div>
                    <div class="col-md-3 emotion">
                        <circle-slider
                                progressColor="#17a2b8 "
                                knobColor="#17a2b8"
                                circleColor="#ccc"
                                v-model="thought.emotions.sadness"
                                :side="150"
                                :min="0"
                                :max="100"
                                :step-size="5"
                                :circle-width-rel="20"
                                :progress-width-rel="10"
                                :knob-radius="10"
                        ></circle-slider>
                        Тъга {{thought.emotions.sadness}}%
                    </div>
                </div>
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
                    situation: '',
                    emotions: {}
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