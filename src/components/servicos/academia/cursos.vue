<template>
  <div class="cursos-lista">
    <h1>{{ tema }}</h1>
    <div class="container">
      <h2 v-if="isEmpty" style="text-align: center; width: 100%;">{{message}}</h2>
      <div v-else class="curso" v-for="(curso, id) in cursos" :key="id">
        <router-link :to="curso.ref">
          <div class="title">{{ curso.title }}</div>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";

export default {
  data() {
    return {
      isEmpty: false,
      message: "",
      tema: "",
      cursos: [
        {
          id: "",
          title: "titulo",
          img_src: "",
          ref: ""
        }
      ]
    };
  },
  methods: {
    getCursos() {
      var map = Array.prototype.map;
      var vm = this;

      axios
        .get("https://www.harmonizando.com/data_api/getServicos.php")
        .then(resp => {
          const data = resp.data;
          var result = data.split("||");
          var cursos = JSON.parse(result[3]);
          var its = [];

          var location = window.location.href;
          var split_url = location.split("/");
          var ref = split_url[split_url.length - 1];

          function titleCase(str) {
            var splitStr = str.toLowerCase().split(" ");
            for (var i = 0; i < splitStr.length; i++) {
              // You do not need to check if i is larger than splitStr length, as your for does that for you
              // Assign it back to the array
              splitStr[i] =
                splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
            }
            // Directly return the joined string
            return splitStr.join(" ");
          }

          if (cursos.includes(ref) == false) {
            var tema = titleCase(ref);
            tema = tema.replace("-", " ");
            tema = tema.replace("-", " ");
            tema = titleCase(tema);

            vm.$data.tema = tema;
            vm.$data.isEmpty = true;
            vm.$data.message = "Não há eventos.";
          } else {
            vm.$data.isEmpty = false;
          }

          map.call(cursos, function(c) {
            if (c.servicos_temas_ref == ref) {
              vm.$data.isEmpty = false;
              its.push({
                id: c.servicos_temas_topicos_id,
                title: c.servicos_temas_topicos_title,
                img_src:
                  "https://beta.harmonizando.com/docs/images/main/" +
                  c.__images_file,
                ref: `/servicos/academia/cursos/${c.servicos_temas_ref}/${c.servicos_temas_topicos_ref}`
              });
              vm.$data.tema = c.servicos_temas_title;
            }
          });

          vm.$data.cursos = its;
        });
    }
  },
  mounted() {
    this.getCursos();
  }
};
</script>

<style lang="scss" scoped>
@function pxToEm($value) {
  $point: ($value * 3) / 4;
  $yem: $point / 12;

  @return $yem * 1rem;
}

.cursos-lista {
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0 pxToEm(130);
  align-items: center;

  @media only screen and (min-width: 1200px) and (max-width: 1919px) {
    padding: 0 pxToEm(80);
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    padding: 0 pxToEm(60);
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding: 0 pxToEm(40);
  }

  @media only screen and (min-width: 600px) and (max-width: 767px) {
    padding: 0 pxToEm(20);
  }

  @media only screen and (max-width: 599px) {
    padding: 0 pxToEm(20);
  }

  h1 {
    margin: pxToEm(50) 0;

    @media only screen and (max-width: 767px) {
      margin: pxToEm(30) 0;
    }
  }

  .container {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    max-width: pxToEm(1700);
    width: 100%;
    margin: 0 pxToEm(60);

    @media only screen and (min-width: 992px) {
      margin: 0 pxToEm(20);
    }

    .curso {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 49%;
      height: pxToEm(100);

      @media only screen and (max-width: 767px) {
        flex-direction: column;
        width: 100%;
        margin-top: pxToEm(30);
      }

      .title {
        font-size: pxToEm(28);

        @media only screen and (max-width: 767px) {
          text-align: center;
        }
      }
    }
  }
}
</style>
