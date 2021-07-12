<template>
  <div class="search-box">
    <input
      v-model="searchText"
      type="text"
      name="txtSearch"
      placeholder="Search..."
      class="search-bar"
      @keyup.enter="onSearchBarEnter"
    >
  </div>
</template>

<script>
export default {
  name: "SearchBox",
  data(){
    return {
      searchText: ""
    }
  },
  methods: {
    onSearchBarEnter(){
      const searchBarEle = document.getElementsByClassName('search-bar')[0];
      searchBarEle.value = "";
      this.$emit('onSearch',this.searchText);
    }
  }
}
</script>

<style>
  .search-box{
    width: 100%;
    margin-bottom: 20px;
  }
  .search-box .search-bar{
    width: 70%;
    margin: 0 auto;
    display: block;
    padding: 15px;

    color: #313131;
    font-size: 20px;
    background: rgba(255, 255, 255, 0.6);

    appearance: none;
    outline: none;
    border: none;
    border-radius: 0 16px 0 16px;
    box-shadow: 0 0 8px rgba(15, 15, 15,0.5);
    transition: ease-in-out .3s;
    
  }
  .search-box .search-bar:focus{
    background: rgba(255, 255, 255, 0.9);
    box-shadow: 0 0 16px rgba(0, 0, 0, 0.5);

    border-radius: 16px 0 16px 0;
  } 

@media screen and (min-width: 900px){
  .search-box .search-bar{
    width: 50%;
  }
}

@media screen and (min-width: 1250px){
  .search-box .search-bar{
    width: 35%;
  }
}

</style>