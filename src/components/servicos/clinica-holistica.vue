<template>
  <div class="clinica-topicos">
    <div class="cursos">
      <h1>Terapias</h1>
      <div class="container">
        <div class="curso" v-for="(terapia, id) in terapias" :key="id">
          <router-link :to="terapia.ref">
            <div class="title">{{ terapia.title }}</div>
          </router-link>
        </div>
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
      terapias: [
        {
          id: "",
          title: "",
          ref: ""
        }
      ]
    };
  },
  mounted() {
    var map = Array.prototype.map;
    var vm = this;
    axios
      .get("https://www.harmonizando.com/data_api/getServicos.php")
      .then(resp => {
        const data = resp.data;
        var result = data.split("||");
        var terapias = JSON.parse(result[2]);
        var its = [];

        map.call(terapias, function(c) {
          if (c.servicos_temas_servicos_temas_areas_id == 1) {
            its.push({
              id: c.servicos_temas_id,
              title: c.servicos_temas_title,
              ref: `/servicos/clinica-holistica/terapias/${c.servicos_temas_ref}`
            });
          }
        });

        vm.$data.terapias = its;
      });
  }
};
</script>

<style lang="scss" scoped>
@function pxToEm($value) {
  $point: ($value * 3) / 4;
  $yem: $point / 12;

  @return $yem * 1rem;
}

.clinica-topicos {
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0 pxToEm(130);
  align-items: center;
  margin-bottom: pxToEm(50);

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

  .cursos {
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0 pxToEm(60);

    @media only screen and (min-width: 992px) {
      margin: 0 pxToEm(20);
    }

    @media only screen and (max-width: 767px) {
      width: 100%;
    }

    h1 {
      text-align: center;
      margin: pxToEm(70) 0;
      font-size: pxToEm(40);

      @media only screen and (max-width: 767px) {
        margin: pxToEm(30) 0;
      }
    }

    .container {
      display: flex;
      justify-content: space-between;
      flex-wrap: wrap;
      max-width: pxToEm(1700);
      margin-top: pxToEm(70);

      @media only screen and (max-width: 767px) {
        flex-direction: column;
        width: 100%;
        margin-top: pxToEm(30);
      }

      .curso {
        display: flex;
        flex-direction: column;
        width: 50%;
        height: pxToEm(60);

        @media only screen and (max-width: 767px) {
          width: 100%;
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
}
</style>
