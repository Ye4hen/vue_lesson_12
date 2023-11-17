<template>
    <div class="filter__container">
        <h2 class="filter__title">{{ title }}</h2>
        <div class="filter__items">
            <div class="filter__item editor-item">
                <label class="subtitle">
                    ПІБ
                    <input v-model="filterObj.name" type="text" />
                </label>
                <label class="subtitle">
                    Посада
                    <input v-model="filterObj.positionName" type="text" />
                </label>
            </div>
        </div>
        <button class="button" @click="onReset">Reset</button>
        <div v-if="errorMessage" class="err-mesg">{{ errorMessage }}</div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'CandidatesFilter',
    props: {
        title: {
            type: String,
            default: 'Filters',
        },
    },
    data() {
        return {
            filterObj: {},
        }
    },
    computed: {
        ...mapGetters('candidates', ['errorMessage']),
    },
    watch: {
        filterObj: {
            handler(newValue) {
                this.updateFilter(newValue)
            },
            deep: true,
        },
    },

    methods: {
        ...mapActions('candidates', ['updateFilter']),
        onReset() {
            this.filterObj = {}
        },
    },
}
</script>

<style lang="scss" scoped>
</style>