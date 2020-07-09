<template>
  <div class="cursos">
    <div class="curso" v-for="(evento, id) in eventos" :key="id">
      <h1>{{ evento.title }}</h1>
      <div class="content">
        <div class="left">
          <div class="imagem" :style="{'background-image': 'url(' + evento.img_src + ')'}"></div>
        </div>
        <div class="right">
          <div class="descricao">
            Descrição:
            <span v-html="evento.content" class="tg"></span>
          </div>
          <div class="duration">
            Data:
            <span v-html="evento.date" class="dur"></span>
          </div>
          <div class="preco">
            Preço:
            <span v-html="evento.price" class="value"></span>
          </div>
          <div class="formador">
            Formador(es):
            <span v-html="evento.formadores" class="value"></span>
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
      eventos: [
        {
          id: "",
          title: "",
          content: "",
          date: "",
          price: "",
          formadores: "",
          img_src: ""
        }
      ]
    };
  },
  mounted() {
    var map = Array.prototype.map;
    var vm = this;
    axios
      .get("https://www.harmonizando.com/data_api/getAcademiaEventos.php")
      .then(resp => {
        const data = resp.data;
        var its = [];

        var location = window.location.href;
        var split_url = location.split("/");
        var evento_ref = split_url[split_url.length - 1];

        map.call(data, function(c) {
          if (c.eventos_ref == evento_ref) {
            its.push({
              id: c.eventos_id,
              title: c.eventos_title,
              content: c.eventos_content,
              date: c.eventos_data,
              price: c.eventos_price,
              formadores: c.formadores_name,
              img_src:
                "https://beta.harmonizando.com/docs/images/main/" +
                c.__images_file
            });
          }
        });

        vm.$data.eventos = its;
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

.eventos {
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

  .evento {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 0 pxToEm(60);

    h1 {
      text-align: center;
    }

    .content {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: pxToEm(50);

      .left {
        display: flex;
        align-items: center;
        justify-content: center;

        .imagem {
          width: pxToEm(800);
          height: pxToEm(600);
          background-size: contain;
          background-position: center;
          background-repeat: no-repeat;
        }
      }

      .right {
        width: 100%;
        max-width: pxToEm(600);
        height: 100%;
        margin-left: pxToEm(50);
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .titulo {
          font-size: pxToEm(28);
        }

        .descricao,
        .target,
        .duration,
        .preco,
        .formador {
          margin-top: pxToEm(10);
          font-weight: bold;

          > span {
            font-weight: normal;
          }
        }
      }
    }
  }
}
</style>
