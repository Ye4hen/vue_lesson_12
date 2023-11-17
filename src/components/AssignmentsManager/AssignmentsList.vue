<template>
    <div class="asgn__container">
        <h2 class="asgn__title title">{{ title }}</h2>
        <div class="asgn__body list">
            <div v-if="getFilledAssignmentsList.length" class="asgn__subtitles">
                <h4 class="subtitle asgn__subtitle">Працівник</h4>
                <h4 class="subtitle asgn__subtitle">Кандидат</h4>
                <h4 class="subtitle asgn__subtitle">День</h4>
            </div>
            <ol class="asgn__list list">
                <li v-for="(assignment, index) in getFilledAssignmentsList" :key="assignment.id" class="asgn__item">
                    <div>{{ assignment.workerName }}</div>
                    <div>{{ assignment.candidateName }}</div>
                    <div>{{ assignment.workingDay }}</div>
                    <button class="button-action" @click="deleteAssignment(index)">Видалити</button>
                </li>
            </ol>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'AssignmentsList',
    props: {
        title: {
            type: String,
            default: 'Assignments',
        },
    },

    computed: {
        ...mapGetters('assignments', ['getFilledAssignmentsList', 'workingDaysList']),
        ...mapGetters('workers', ['getWorkersList']),
        ...mapGetters('candidates', ['getCandidatesList']),
    },
    created() {
        this.setFieldsList()
        this.setWorkersList()
        this.setCandidatesList()
        this.setWorkingDaysList()
    },

    methods: {
        ...mapActions('fields', ['setFieldsList']),
        ...mapActions('workers', ['setWorkersList']),
        ...mapActions('candidates', ['setCandidatesList']),
        ...mapActions('assignments', ['setWorkingDaysList', 'deleteAssignment']),
    },
}
</script>

<style lang="scss" scoped>
</style>