<template>
    <div id="app">
        <!-- <play></play> -->
        <!-- <router-view /> -->
        <HomePage></HomePage>
        <playPage></playPage>
    </div>
</template>

<script>
    // import HomePage from './player/home-page.vue';
    import playPage from './player/playPage.vue'
export default {
    data(){
        return{

        }
    },
    metaInfo:{
        meta:[{
            name:'viewport',
            content:'width=device-width, initial-scale=1,user-scalable=no'
        }],
        
    },
    components:{
        // HomePage,
        playPage
    }
}
</script>

<style>
body{
    box-sizing: border-box;
}


</style>