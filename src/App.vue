<template>
    <nav>
        <router-link to="/">Home</router-link> | <router-link :to="{ name: 'workers' }">Workers</router-link>|
        <router-link :to="{ name: 'candidates' }">Candidates</router-link>|
        <router-link :to="{ name: 'assignments' }">Assignments</router-link>
    </nav>
    <router-view />
</template>

<style lang="scss">
@import '@/assets/style';
#app {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    // text-align: center;
    color: #2c3e50;
}

nav {
    padding: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;

    a {
        font-weight: bold;
        color: #2c3e50;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}
</style>
