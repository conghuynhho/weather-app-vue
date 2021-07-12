<template>
  <div
    id="weather-app"
    :class="classObject"
  >
    <main>
      <SearchBox
        @onSearch="updateQuery"
      />
      <Weatherbox
        v-if="weather.main != undefined"
        :weather-data="weather"
      />
    </main>
  </div>
</template>

<script>
import SearchBox from './components/SearchBox.vue'
import Weatherbox from './components/WeatherBox.vue'
import axios from 'axios'

export default {
  name: 'WeatherApp',
  components: {
    SearchBox,
    Weatherbox
  },
  data(){
    return {
      apiKey: "d4b0b07b7d30cea07dbf04ca93926016",
      url_base: "http://api.openweathermap.org/data/2.5/",
      query: "",
      weather: {}
    }
  },
  computed:{
    classObject(){
      return {
        warmbg: this.weather.main != undefined && Math.round(this.weather.main.temp) > 18,
        coldbg: this.weather.main != undefined && Math.round(this.weather.main.temp) <= 18,
      }
    }
  },
  watch: {
    query: function() {
      axios
      .get(`${this.url_base}weather?q=${this.query}&units=metric&appid=${this.apiKey}`)
      .then(res => {
        this.setApiResult(res);
      })
      .catch(err => {
        this.clearWeatherData();
        console.log('API ERROR', err);
      })
    }
  },
  methods:{
    updateQuery(value){
      this.query = value;
    },
    setApiResult(result){
      console.log(result);
      this.weather = result.data;
    },
    clearWeatherData(){
      this.weather = {};
    }
  }
}

</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#weather-app {
  background-size: cover;
  background-position: bottom;
  transition: ease-in-out .3s;

  font-family: montserrat,sans-serif;
}
.coldbg{
  background: url('./assets/cold-bg.jpg');
}
.warmbg{
  background: url('./assets/warm-bg.jpg');
}
main{
  min-height: 100vh;
  padding: 20px;
  
  background: linear-gradient(to bottom, rgba(0,0,0,0.2), rgba(0,0,0,0.7));
}
</style>
