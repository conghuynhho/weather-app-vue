<template>
  <div class="weather-box">
    <div class="weather-location">
      <div class="city">
        {{ weatherData.name }}, {{ weatherData.sys.country }}
      </div>
      <div class="date">
        {{ date }}
      </div>
    </div>
    <div class="weather-details">
      <div class="temp">
        {{ Math.round(weatherData.main.temp) }}&deg;c
      </div>
      <div class="weather">
        {{ weatherData.weather[0].main }}
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "WeatherBox",
  props: {
    weatherData: {
      type: Object,
      default(){
        return {};
      }
    }
  },
  data(){
    return {
      date: this.dateBuilder()
    }
  },
  methods: {
    dateBuilder(){
      let d = new Date();
      // let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
      // let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

      const options = {
        weekday: 'long',
        month: 'long',
        year: 'numeric',
        day: 'numeric',
      };
      let result = d.toLocaleString('en-US',options);
      
      // let day = days[d.getDay()];
      // let date = d.getDate();
      // let month = months[d.getMonth()];
      // let year = d.getFullYear();

      console.log(result);
      return result;
      // return `${day} ${date} ${month} ${year}`;
    }
  }
}
</script>

<style>
  .weather-box{
    color: #fff;
    text-align: center;
  }

  .weather-location .city{
    font-size: 32px;
    font-weight: bold;
    text-shadow: 2px 3px rgba(0, 0, 0, 0.25);
  }

  .weather-box .date{
    font-style: italic;
    margin-top: 5px;
    font-size: 20px;
    font-weight: 300;
  }

  .weather-details .temp{
    font-size: 100px;
    font-weight: 900;
    text-shadow: 5px 6px rgba(0, 0, 0, 0.35);

    display: inline-block;
    padding: 60px 90px;
    margin: 30px 0;
    border-radius: 5px;

    background: rgba(255, 255, 255, 0.35);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.35);
  }
  .weather-details .weather{
    font-size: 48px;
    font-style: italic;
    font-weight: 700;
    text-shadow: 2px 5px rgba(0, 0, 0, 0.25);
  }
</style>