<template>
    <div class="container">
        <candidates-list title="Наші кандидати" subTitle="ПІБ - Посада" />
        <candidates-filter title="Фільтри" />
    </div>
</template>

<script>
import CandidatesList from './CandidatesList.vue'
import CandidatesFilter from './CandidatesFilter.vue'
export default {
    name: 'CandidatesManager',
    components: { CandidatesList, CandidatesFilter },
}
</script>

<style lang="scss" scoped>
</style>