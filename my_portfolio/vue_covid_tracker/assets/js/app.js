const url = "https://coronavirus-19-api.herokuapp.com/countries/philippines";

const vm = new Vue({
        el: '#app',
        data: {
          results: []
        },
        mounted() {


          this.interval = setInterval(() => {
            axios.get(url).then(response => { 
            this.results = response.data
              console.log(this.results);
            /* do something */
          });
        }, 3000 );

            
        }

      });