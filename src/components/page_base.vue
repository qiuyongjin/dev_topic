<template>
    <div class="page-base">
        <router-view/>
    </div>
</template>

<script>
    export default {
        name: 'page-base',
        data () {
            return {}
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .page-base {
        height: 100%;
        overflow-y: auto;
    }
</style>
