<template>
    <div id="player-test">
        <input type="text" v-model="searchBar.keyWord">
        <div>
                先做點擊會顯示畫面出來(顯示方法待討論)，
                然後在search 時畫面反白，並在下方提供搜尋提示或是結果，
                歷史搜尋記錄功能。
                顯示方法待討論。
        </div>
    <div class="search-data">
        <div class="searchbar-component" v-for="(inf,index) in searchBar.searchData"
            key:index
        >
            <searchBar :information="inf"></searchBar>
        </div>
    </div>
        
    </div>
</template>
<style>
.search-data{
    display: flex;
    flex-wrap: wrap;
    padding-bottom:20px;
}
.searchbar-component{
    flex:1 1;
}

</style>
<script>
import searchBar from './components/search.vue'
export default {
    components:{
        searchBar,
    },
    data(){
        return{
            userData:{
                accessToken:'a',
                headers:{
                'Accept': 'application/json',
                'Content-Type': 'application/x-www-form-urlencoded',
                }
            },
            searchBar:{
                keyWord:'',
                host:'https://api.kkbox.com/v1.1/search?',
                searchData:[]
            }
        }
    },
    watch:{
        'searchBar.keyWord':{
            handler(newName,oldName){
                // console.log(this.searchBar.keyWord)
                var url;
                if(this.searchBar.keyWord != ''){
                    var type='track&album'
                    url=`${this.searchBar.host}q=${this.searchBar.keyWord}&type=${type}&territory=TW`
                    console.log(url)
                }
                if(url){
                    clearTimeout(this.timer)
                    this.timer = setTimeout(()=>{
                        this.axios.get(url,{headers:this.userData.headers})
                        .then(result=>{
                            this.searchBar.searchData = result.data.tracks.data
                            console.log(result.data)
                        })
                        .catch(error => console.log(error))
                    },1000)
                }
            }
        }
    },
    // computed: {
    //     keyWordSearch(){
           
    //     }
    // },
    mounted() {
        let vm = this
        let url = 'https://api.kkbox.com/v1.1/search?q=%E8%AA%AA%E8%AC%8A&type=track&territory=TW&limit=1&offset=0'
        vm.axios.get('https://murmuring-plains-30748.herokuapp.com/api')
        .then(data=>{
            vm.userData.accessToken = data.data.access_token
            vm.userData.headers.Authorization = `Bearer ${vm.userData.accessToken}`
            // vm.axios.get(url,{headers:vm.userData.headers})
            // .then(result=>console.log(result.data))
        })
        
    }
}
</script>
                


