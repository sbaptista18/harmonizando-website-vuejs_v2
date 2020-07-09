<template>
  <div class="cursos">
    <div class="curso" v-for="(curso, id) in cursos" :key="id">
      <h1>{{ curso.title }}</h1>
      <div class="content">
        <div class="left">
          <img class="imagem" :src="curso.img_src" />
        </div>
        <div class="right">
          <div class="description">
            <div v-html="curso.content" class="txt"></div>
          </div>
          <div class="target" v-show="!isEmpty">
            <div class="label">Destinatários</div>
            <div v-html="curso.target" class="txt"></div>
          </div>
          <div class="duration" v-show="!isEmpty">
            <div class="label">Duração</div>
            <div v-html="curso.duration" class="txt"></div>
          </div>
          <!-- <div class="date" v-show="!isEmpty">
            <div class="label">Data</div>
            <div v-html="curso.date" class="txt"></div>
          </div> -->
          <div class="energy" v-show="!isEmpty">
            <div class="label">Energia de Troca</div>
            <div v-html="curso.energy" class="txt"></div>
          </div>
          <!-- <div class="preco" v-show="!isEmpty">
            <div class="label">Preço</div>
            <div v-html="curso.preco" class="txt"></div>
          </div> -->
          <div class="formador">
            <div class="label">Formador(es)</div>
            <div class="txt">{{ curso.formadores }}</div>
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
      isEmpty: false,
      cursos: [
        {
          id: "",
          title: "titulo",
          content: "content",
          target: "target",
          duration: "duration",
          date: "date",
          energy: "energy",
          preco: "preco",
          formadores: "formadores",
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
          var cursos_topicos = JSON.parse(result[3]);
          var its = [];

          var location = window.location.href;
          var split_url = location.split("/");
          var ref = split_url[split_url.length - 1];

          map.call(cursos_topicos, function(c) {
            if (c.servicos_temas_topicos_ref == ref) {
              if (c.servicos_temas_topicos_destinatarios == "") {
                vm.$data.isEmpty = true;
              }

              if (c.servicos_temas_topicos_duracao == "") {
                vm.$data.isEmpty = true;
              }

              if (c.servicos_temas_topicos_date == "") {
                vm.$data.isEmpty = true;
              }

              if (c.servicos_temas_topicos_energia_troca == "") {
                vm.$data.isEmpty = true;
              }

              if (c.servicos_temas_topicos_price == "") {
                vm.$data.isEmpty = true;
              }

              its.push({
                id: c.servicos_temas_topicos_id,
                title: c.servicos_temas_topicos_title,
                content: c.servicos_temas_topicos_text,
                target: c.servicos_temas_topicos_destinatarios,
                duration: c.servicos_temas_topicos_duracao,
                date: c.servicos_temas_topicos_date,
                energy: c.servicos_temas_topicos_energia_troca,
                preco: c.servicos_temas_topicos_price,
                formadores: c.formadores_name,
                img_src:
                  "https://beta.harmonizando.com/docs/images/main/" +
                  c.__images_file
              });
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

.cursos {
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

  .curso {
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
        .imagem {
          width: pxToEm(450);
        }
      }

      .right {
        margin-left: pxToEm(15);
        display: flex;
        justify-content: space-between;
        flex-direction: column;

        > div {
          flex: 1 1 auto;

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
