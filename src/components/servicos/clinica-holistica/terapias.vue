<template>
  <div class="terapias-lista">
    <h1>{{ tema }}</h1>
    <div class="container">
      <div class="curso" v-for="(terapia, id) in terapias" :key="id">
        <router-link :to="terapia.ref">
          <div class="title">{{ terapia.title }}</div>
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
      tema: "",
      terapias: [
        {
          id: "id",
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
          var terapias = JSON.parse(result[4]);
          var its = [];

          console.log(terapias)

          var location = window.location.href;
          var split_url = location.split("/");
          var ref = split_url[split_url.length - 1];

          map.call(terapias, function(c) {
            // if (c.servicos_temas_topicos_id == 2) {
              if (c.servicos_temas_ref == ref) {
                its.push({
                  id: c.servicos_temas_topicos_id,
                  title: c.servicos_temas_topicos_title,
                  img_src:
                    "https://beta.harmonizando.com/docs/images/main/" +
                    c.__images_file,
                  ref: `/servicos/clinica-holistica/terapias/${c.servicos_temas_ref}/${c.servicos_temas_topicos_ref}`
                });
                vm.$data.tema = c.servicos_temas_title;
              }
            // }
          });

          vm.$data.terapias = its;
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

.terapias-lista {
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0 pxToEm(130);
  align-items: center;

  @media only screen and (min-width: 1200px) {
    padding: 0 pxToEm(80);
  }

  @media only screen and (min-width: 992px) {
    padding: 0 pxToEm(60);
  }

  h1 {
    margin: pxToEm(50) 0;
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
      width: 50%;
      height: pxToEm(100);

      .title {
        font-size: pxToEm(28);
      }

      .cta-wrapper {
        .cta {
          width: pxToEm(260);
          height: pxToEm(50);
          background-color: #91c569;
          border-radius: pxToEm(10);
          display: flex;
          align-items: center;
          justify-content: center;

          .txt {
            color: #fff;
            font-weight: bold;
            font-size: pxToEm(15);
            text-transform: uppercase;
          }
        }
      }
    }
  }
}
</style>
