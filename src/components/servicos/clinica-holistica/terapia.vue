<template>
  <div class="terapias">
    <div class="terapia" v-for="(terapia, id) in terapias" :key="id">
      <h1>{{ terapia.title }}</h1>
      <div class="content">
        <div class="left">
          <img class="imagem" :src="terapia.img_src" />
          <div class="cta-wrapper">
            <div class="cta">
              <div class="txt">Marque já a sua consulta</div>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="description">
            <div v-html="terapia.content" class="txt"></div>
          </div>
          <div class="target">
            <div class="label">Destinatários</div>
            <div v-html="terapia.target" class="txt"></div>
          </div>
          <div class="duration">
            <div class="label">Duração</div>
            <div v-html="terapia.duration" class="txt"></div>
          </div>
          <div class="energy">
            <div class="label">Energia de Troca</div>
            <div v-html="terapia.energy" class="txt"></div>
          </div>
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
          title: "titulo",
          content: "content",
          target: "target",
          duration: "duration",
          energy: "energy",
          img_src: ""
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
          var terapias_topicos = JSON.parse(result[4]);
          var its = [];

          var location = window.location.href;
          var split_url = location.split("/");
          var ref = split_url[split_url.length - 1];

          map.call(terapias_topicos, function(c) {
            // if (c.servicos_temas_servicos_id == 2) {
            if (c.servicos_temas_topicos_ref == ref) {
              var desc;
              if (c.servicos_temas_topicos_text != "") {
                desc = c.servicos_temas_topicos_text;
              } else {
                desc = "-";
              }

              var tg;
              if (c.servicos_temas_topicos_destinatarios != "") {
                tg = c.servicos_temas_topicos_destinatarios;
              } else {
                tg = "-";
              }

              var dur;
              if (c.servicos_temas_topicos_duracao != "") {
                dur = c.servicos_temas_topicos_duracao;
              } else {
                dur = "-";
              }

              var en;
              if (c.servicos_temas_topicos_energia_troca != "") {
                en = c.servicos_temas_topicos_energia_troca;
              } else {
                en = "-";
              }

              its.push({
                id: c.servicos_temas_topicos_id,
                title: c.servicos_temas_topicos_title,
                content: desc,
                target: tg,
                duration: dur,
                energy: en,
                img_src:
                  "https://beta.harmonizando.com/docs/images/main/" +
                  c.__images_file
              });
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

.terapias {
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

  .terapia {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 pxToEm(60);

    @media only screen and (min-width: 992px) {
      margin: 0 pxToEm(20);
    }

    h1 {
      text-align: center;
      margin: pxToEm(30) 0;
    }

    .content {
      display: flex;
      flex-direction: row;
      margin-bottom: pxToEm(50);
      max-width: pxToEm(1400);

      @media only screen and (max-width: 1199px) {
        flex-direction: column;
        align-items: center;
      }

      > div {
        width: auto;
      }

      .left {
        align-items: center;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;

        .imagem {
          width: pxToEm(450);
        }
        .cta-wrapper {
          width: 100%;
          margin-top: pxToEm(10);
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;

          .cta {
            width: pxToEm(260);
            height: pxToEm(50);
            border-radius: pxToEm(10);
            background-color: #91c569;
            display: flex;
            align-items: center;
            justify-content: center;

            .txt {
              font-size: pxToEm(20);
              color: #fff;
            }
          }
        }
      }

      .right {
        margin-left: pxToEm(15);
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        > div {
          flex: 1 1 auto;
          margin: pxToEm(10) 0;

          &:first-child {
            margin-top: 0;
          }

          .label {
            font-size: pxToEm(20);
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
