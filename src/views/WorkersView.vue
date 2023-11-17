<template>
    <div class="workers__container">
        <h2 class="title">Наші любі працівники</h2>
        <h4 class="subtitle">Ім'я - Посада</h4>
        <ul class="workers__list list">
            <li v-for="(worker, index) in getWorkersList" :key="worker.id" class="workers__item item">
                <div class="workers__info info">{{ worker.name }} - {{ worker.positionName }}</div>
                <div class="workers__action action">
                    <button class="workers__button button-action" @click="onEdit(worker.id)">Змінити дані</button>
                    <button class="workers__button button-action" @click="removeWorker(index)">Видалити</button>
                </div>
            </li>
        </ul>
        <router-link :to="{ name: 'worker' }" class="button"> Додати працівника </router-link>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
    name: 'WorkersView',

    computed: {
        ...mapGetters('workers', ['getWorkersList']),
        ...mapGetters('fields', ['getFieldsList']),
    },

    created() {
        this.setFieldsList()
        this.setWorkersList()
    },

    methods: {
        ...mapActions('workers', ['setWorkersList', 'removeWorker']),
        ...mapActions('fields', ['setFieldsList']),
        onEdit(id) {
            this.$router.push({
                name: 'worker',
                params: {
                    workerId: id,
                },
            })
        },
    },
}
</script>

<style lang="scss" scoped>
</style>