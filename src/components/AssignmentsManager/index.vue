<template>
    <div>
        <assignments-list title="Призначення" />
        <assignment-selector />
    </div>
</template>

<script>
import AssignmentSelector from './AssignmentSelector.vue'
import AssignmentsList from './AssignmentsList.vue'
export default {
    name: 'AssignmentsManager',
    components: { AssignmentsList, AssignmentSelector },
}
</script>

<style lang="scss" scoped>
</style>