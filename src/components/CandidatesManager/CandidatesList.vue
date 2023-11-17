<template>
    <div class="cand__container">
        <h2 class="title">{{ title }}</h2>
        <h4 class="subtitle">{{ subTitle }}</h4>
        <div class="cand__body">
            <ul class="cand__list list">
                <li v-for="(cand, index) in getFilteredCandidatesList" :key="cand.id" class="cand__item item">
                    <div class="cand__info info">{{ cand.name }} - {{ cand.positionName }}</div>
                    <div class="cand__action action">
                        <button class="cand__button button-action" @click="onEdit(cand.id)">Змінити дані</button>
                        <button class="cand__button button-action" @click="removeCandidate(index)">Видалити</button>
                    </div>
                </li>
            </ul>
            <router-link :to="{ name: 'candidate' }" class="button"> Додати кандидата </router-link>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'CandidatesList',

    props: {
        title: {
            type: String,
            default: 'Наші любі кандидати',
        },
        subTitle: {
            type: String,
            default: "Ім'я - Посада",
        },
    },

    computed: {
        ...mapGetters('candidates', ['getFilteredCandidatesList']),
    },
    created() {
        this.setFieldsList()
        this.setCandidatesList()
    },

    methods: {
        ...mapActions('candidates', ['setCandidatesList', 'removeCandidate']),
        ...mapActions('fields', ['setFieldsList']),
        onEdit(id) {
            this.$router.push({
                name: 'candidate',
                params: {
                    candidateId: id,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
</style>