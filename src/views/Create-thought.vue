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
                    <div class="col-md-3 emotion" v-for="(emotion, index) in thought.emotions" :key="index">
                        <circle-slider
                                progressColor="#17a2b8 "
                                knobColor="#17a2b8"
                                circleColor="#ccc"
                                v-model="emotion.percent"
                                :side="150"
                                :min="0"
                                :max="100"
                                :step-size="5"
                                :circle-width-rel="20"
                                :progress-width-rel="10"
                                :knob-radius="10"
                        ></circle-slider>
                        {{emotion.name}} {{emotion.percent}}%
                    </div>
                </div>
            </div>
            <div slot="page3">
                <h4 style="text-align: center;">Добавяне на автоматични мисли</h4>
                <br>
                <p style="text-align: center">Добавете всички автоматични мисли които изникнаха в главата ви в дадената
                    ситуация.</p>
                <div class="my-3">
                    <b-btn v-b-popover.hover="'“Дори съпругата ми вече не се нуждае от мен.” – тъга 50% \n “Всички си прекараха по-добре, защото мен не нямаше сред тях.” – тъга 90%'"
                           title="Автоматични мисли:">
                        Виж пример
                    </b-btn>
                </div>
                <div class="form-group">
                    <label for="addAutomaticThought">Автоматична мисъл</label>
                    <textarea placeholder="Добави автоматична мисъл" id="addAutomaticThought" class="form-control"
                              rows="3" v-model="automaticThoughText"></textarea>
                </div>
                <div class="form-group">
                    <label>Посочете коя от емоциите които изпитвате е породена от тази автоматична мисъл</label>
                    <br>
                    <div v-if="emotion.percent" v-for="(emotion, index) in thought.emotions">
                        <label><input v-model="automaticThoughtEmotion" :value="emotion" type="radio"
                                      name="automaticThoughtEmotion">
                            {{emotion.name}} - {{emotion.percent}}%</label>
                    </div>
                </div>
                <div class="form-group">
                    <button @click="addAutomaticThought()" class="btn btn-info">Добави</button>
                </div>
                <div v-for="(automaticThought, index) in thought.automaticThoughts" :key="index">
                    <p>{{automaticThought.content}} | {{automaticThought.emotion.name}} -
                        {{automaticThought.emotion.percent}}%</p>
                </div>
            </div>
            <div slot="page4">
                <h4 style="text-align: center;">Идентифициране на автоматични мисли</h4>
                <br>
                <!--<p style="text-align: center">Добавете всички автоматични мисли които изникнаха в главата ви в дадената-->
                <!--ситуация.</p>-->
                <div v-for="(automaticThought, index) in thought.automaticThoughts" :key="index">
                    <p :class="{'hot': automaticThought.hot}">{{automaticThought.content}} |
                        {{automaticThought.emotion.name}} -
                        {{automaticThought.emotion.percent}}%</p>
                </div>
            </div>
            <div slot="page5">
                <h4 style="text-align: center;">Помощни въпроси</h4>
                <br>
                <div class="form-group">
                    <label>Какво ме накара да се (страхувам, гневя, срамувам, обвинявам, уплаша, раздразня, натъжа…) в
                        тази
                        ситуация?</label>
                    <textarea placeholder="Добави автоматична мисъл" class="form-control"
                              rows="3" v-model="thought.helpQuestions.question1"></textarea>
                </div>
                <div class="form-group">
                    <label>И какво (плашещо, дразнещо, срамно, натъжаващо…) има в това?</label>
                    <textarea placeholder="Добави автоматична мисъл" class="form-control"
                              rows="3" v-model="thought.helpQuestions.question2"></textarea>
                </div>
                <div class="form-group">
                    <label>Какво ми мина през ума непосредствено преди да се почувствам по този начин?</label>
                    <textarea placeholder="Добави автоматична мисъл" class="form-control"
                              rows="3" v-model="thought.helpQuestions.question3"></textarea>
                </div>
                <div class="form-group">
                    <label>Какво си казах, което ми даде енергията да се почувствам по този начин?</label>
                    <textarea placeholder="Добави автоматична мисъл" class="form-control"
                              rows="3" v-model="thought.helpQuestions.question4"></textarea>
                </div>
                <div class="form-group">
                    <label>Какво си казах по повод случилото се? Случилото се ме накара да си помисля какво за себе
                        си?</label>
                    <textarea placeholder="Добави автоматична мисъл" class="form-control"
                              rows="3" v-model="thought.helpQuestions.question5"></textarea>
                </div>
                <div class="form-group">
                    <label>Какво ми говори това за мен, ако е истина? Ако допусна, че това е истина, какво ми говори
                        това на мен? А какво им говори на другите за мен?</label>
                    <textarea placeholder="Добави автоматична мисъл" class="form-control"
                              rows="3" v-model="thought.helpQuestions.question6"></textarea>
                </div>
                <div class="form-group">
                    <label>Какво се страхувам, че би могло да се случи, ако това, което си мисля е истина?</label>
                    <textarea placeholder="Добави автоматична мисъл" class="form-control"
                              rows="3" v-model="thought.helpQuestions.question7"></textarea>
                </div>
                <div class="form-group">
                    <label>И тогава, какво би могло да се случи? (последваш един и същ въпрос)</label>
                    <textarea placeholder="Добави автоматична мисъл" class="form-control"
                              rows="3" v-model="thought.helpQuestions.question8"></textarea>
                </div>
                <div class="form-group">
                    <label>Какво значение има това за мен, моя живот, за моето бъдеще?</label>
                    <textarea placeholder="Добави автоматична мисъл" class="form-control"
                              rows="3" v-model="thought.helpQuestions.question9"></textarea>
                </div>
                <div class="form-group">
                    <label>Какво е най-лошото нещо, което би могло да се случи, ако това е истина?</label>
                    <textarea placeholder="Добави автоматична мисъл" class="form-control"
                              rows="3" v-model="thought.helpQuestions.question10"></textarea>
                </div>
                <div class="form-group">
                    <label>Какво по-лошо от това бих могъл/а да си помисля за себе си в тази ситуация?</label>
                    <textarea placeholder="Добави автоматична мисъл" class="form-control"
                              rows="3" v-model="thought.helpQuestions.question11"></textarea>
                </div>
                <div class="form-group">
                    <label>Какво е значението на това, какво другите хора чувстват и мислят за мен?</label>
                    <textarea placeholder="Добави автоматична мисъл" class="form-control"
                              rows="3" v-model="thought.helpQuestions.question12"></textarea>
                </div>
                <div class="form-group">
                    <label>Какво другите биха си помислили за човек, който мисли по начина, по който аз мисля?</label>
                    <textarea placeholder="Добави автоматична мисъл" class="form-control"
                              rows="3" v-model="thought.helpQuestions.question13"></textarea>
                </div>
                <div class="form-group">
                    <label>Като цяло, какво значение има това за другия / другите хора?</label>
                    <textarea placeholder="Добави автоматична мисъл" class="form-control"
                              rows="3" v-model="thought.helpQuestions.question14"></textarea>
                </div>
                <div class="form-group">
                    <label>Какви образи или спомени ми изникнаха в тази ситуация?</label>
                    <textarea placeholder="Добави автоматична мисъл" class="form-control"
                              rows="3" v-model="thought.helpQuestions.question15"></textarea>
                </div>
                <div class="form-group">
                    <label>Какво си помислих малко преди да направя това, което направих в тази ситуация?</label>
                    <textarea placeholder="Добави автоматична мисъл" class="form-control"
                              rows="3" v-model="thought.helpQuestions.question16"></textarea>
                </div>
                <div class="form-group">
                    <label>Какво си помислих малко преди да не направя това, което ми се искаше да направя в тази
                        ситуация?</label>
                    <textarea placeholder="Добави автоматична мисъл" class="form-control"
                              rows="3" v-model="thought.helpQuestions.question17"></textarea>
                </div>
                <div class="form-group">
                    <label>Какво си помислих веднага след като не реагирах своевременно в тази ситуация?</label>
                    <textarea placeholder="Добави автоматична мисъл" class="form-control"
                              rows="3" v-model="thought.helpQuestions.question18"></textarea>
                </div>
                <div class="form-group">
                    <label>Какво си помислих, малко преди тялото ми да реагира така?</label>
                    <textarea placeholder="Добави автоматична мисъл" class="form-control"
                              rows="3" v-model="thought.helpQuestions.question19"></textarea>
                </div>
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
                    emotions: [
                        {
                            name: 'Страх',
                            percent: 0
                        },
                        {
                            name: 'Притеснение',
                            percent: 0
                        },
                        {
                            name: 'Унижение',
                            percent: 0
                        },
                        {
                            name: 'Паника',
                            percent: 0
                        },
                        {
                            name: 'Болка',
                            percent: 0
                        },
                        {
                            name: 'Гняв',
                            percent: 0
                        },
                        {
                            name: 'Апатия',
                            percent: 0
                        },
                        {
                            name: 'Тъга',
                            percent: 0
                        }
                    ],
                    automaticThoughts: [],
                    helpQuestions: {
                        question1: '',
                        question2: '',
                        question3: '',
                        question4: '',
                        question5: '',
                        question6: '',
                        question7: '',
                        question8: '',
                        question9: '',
                        question10: '',
                        question11: '',
                        question12: '',
                        question13: '',
                        question14: '',
                        question15: '',
                        question16: '',
                        question17: '',
                        question18: '',
                        question19: '',
                    }
                },
                automaticThoughText: '',
                automaticThoughtEmotion: null,
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
                    },
                    {
                        label: '',
                        slot: 'page5',
                    },
                ],
            }
        },
        computed: {
            user() {
                return this.$store.getters.loggedUser;
            }
        },
        methods: {
            addAutomaticThought() {
                let automaticThought = {
                    content: this.automaticThoughText,
                    emotion: this.automaticThoughtEmotion,
                    hot: false
                };
                this.automaticThoughText = '';
                this.automaticThoughtEmotion = null;
                this.thought.automaticThoughts.push(automaticThought);
            },
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

                if (currentPage === 2) {
                    this.calculateHotThought();
                }

                return true; //return false if you want to prevent moving to next page
            },
            calculateHotThought() {
                console.log('calculation hot thought');
                let max = null;
                for (let i = 0; i < this.thought.automaticThoughts.length; i++) {
                    if (!max) {
                        max = this.thought.automaticThoughts[0];
                    } else {
                        if (this.thought.automaticThoughts[i].emotion.percent >= max.emotion.percent) {
                            max = this.thought.automaticThoughts[i];
                        }
                    }
                }
                max.hot = true;
                this.$forceUpdate();
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