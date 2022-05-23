<template>
    <div class="one">
        One<br>
        <button @click="sendP">params</button>
        <h4>{{data}}</h4>
    </div>
</template>

<script>
export default {
    data(){
        return {
            data: 0
        }
    },
    methods: {
        sendP(){
            this.$router.push({
                name: 'Two',
                params: {
                    data: 9999
                }
            })
        }
    },
    created(){
        console.log(this.$route)
        this.data = this.$route.query.data ? this.$route.query.data : this.data
    }
}
</script>

<style lang="sass" scoped>

</style>