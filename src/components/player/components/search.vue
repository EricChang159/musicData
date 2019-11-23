<template>
    <!-- <div id="searchBar"> -->
        <div class="searchbar-box">
            <div>name:{{information.name}}</div>
            <div>album:{{information.album.name}}</div>
            <div class="search-data-image" :style="background"></div>
        </div>
    <!-- </div> -->
</template>
<style>
.search-data-image{
    width:160px;
    height:160px;
}

</style>
<script>
    export default {
        data() {
            return {
                backgroundImage:''
            }
        },
        props:['information'],
        computed: {
            background(){
                this.backgroundImage = this.information.album.images[0].url
                console.log(this.information.album.images[0].url)
                return {
                    background:`url(${this.backgroundImage})`,
                    backgroundSize:'cover'
                }
            }
        },
    }
</script>