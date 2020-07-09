<!--eslint-disable-->
<template>
  <div class="politica-privacidade">
    <div class="wrapper">
      <h1>Política de Privacidade</h1>
      <div class="topicos">
        <div class="topico" v-for="(topico, id) in topicos" :key="id">
          <div class="title">{{topico.title}}</div>
          <div v-html="topico.text" class="text"></div>
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
      topicos: [
        {
          title: "title",
          text: "text"
        }
      ]
    };
  },
  mounted() {
    var map = Array.prototype.map;
    var vm = this;

    axios
      .get("https://www.harmonizando.com/data_api/getPoliticaPrivacidade.php")
      .then(resp => {
        const data = resp.data;

        var its = [];

        map.call(data, function(d) {
          its.push({
            title: d.politica_privacidade_title,
            text: d.politica_privacidade_content
          });
        });

        vm.$data.topicos = its;
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

.politica-privacidade {
  background-color: #fff;
  height: auto;
  padding: 0 pxToEm(130);

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
    height: auto;
  }

  @media only screen and (max-width: 599px) {
    padding: 0 pxToEm(20);
    height: auto;
  }

  .wrapper {
    margin: auto;
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: space-between;
    margin-top: pxToEm(50);
    max-width: pxToEm(1400);
    width: 100%;

    h1 {
      text-align: center;
    }

    .topicos {
      margin-top: pxToEm(50);
      display: flex;
      flex-direction: column;

      .topico {
        display: flex;
        flex-direction: column;
        margin-bottom: pxToEm(50);

        .title {
          font-size: pxToEm(28);
          font-weight: bold;
        }

        .text {
          margin-top: pxToEm(20);
        }
      }
    }
  }
}
</style>
