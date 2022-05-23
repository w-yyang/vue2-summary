<template>
    <div class="two">
        Two<br>
        <button @click="sendQ">query</button>
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
        sendQ(){
            this.$router.push({
                path: '/use/useRouter/one',
                query: {
                    data: 6666
                }
            })
        }
    },
    created(){
        this.data = this.$route.params.data ? this.$route.params.data : this.data
    }
}
/***
 * transition的切换变换只针对内部第一层元素，第二层元素无效
 */
</script>

<style lang="sass" scoped>

</style>