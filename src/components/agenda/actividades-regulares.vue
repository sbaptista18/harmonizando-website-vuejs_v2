<template>
  <div class="actividades-regulares">
    <div class="row">
      <h1>Actividades Regulares</h1>
    </div>

    <div class="row empty" v-if="isEmpty">
      <div class="text">{{ message }}</div>
    </div>
    <div class="row" v-else>
      <div class="actividades">
        <div class="actividade" v-for="(curso, id) in cursos" :key="id">
          <div class="left">
            <div class="imagem" :style="{'background-image': 'url(' + curso.img_src + ')'}"></div>
          </div>

          <div class="right">
            <div class="titulo">{{ curso.title }}</div>
            <div class="descricao">{{ curso.text }}</div>
            <div class="data-hora">
              Data:
              <span class="data">{{ curso.date }}</span>
              <br />Hora:
              <span class="hora">{{ curso.time }}</span>
            </div>
            <div class="preco">
              Preço:
              <span class="value">{{ curso.price }}</span>
            </div>
            <div class="formador">
              Formador:
              <span class="value">{{ curso.formador }}</span>
            </div>
            <div class="ctas">
              <router-link :to="curso.ref">
                <div class="cta-wrapper">
                  <div class="cta">
                    <div class="txt">Saiba Mais</div>
                  </div>
                </div>
              </router-link>

              <div class="cta-wrapper" @click="openModal()">
                <div class="cta">
                  <div class="txt">Inscreva-se aqui</div>
                </div>
              </div>
            </div>
          </div>

          <div class="modal">
            <div class="close-btn" @click="closeModal()">
              <div class="icon">
                <div class="line"></div>
                <div class="line"></div>
              </div>
            </div>
            <div class="content">
              <div class="title-modal">Inscrição - {{ curso.title }}</div>
              <div class="form-group">
                <label for="insc-nome">Nome</label>
                <input id="insc-nome" type="text" />
              </div>
              <div class="form-group">
                <label for="insc-contacto">Contacto</label>
                <input id="insc-contacto" type="text" />
              </div>
              <div class="form-group">
                <label for="insc-email">Email</label>
                <input id="insc-email" type="email" />
              </div>
              <div class="form-group">
                <label for="insc-email">Captcha</label>
                <input id="insc-captcha" type="text" />
              </div>
              <div class="form-group">
                <button class="cta">Submeter</button>
              </div>
              <input type="hidden" name="curso-id" :value="curso.curso_id" />
              <input type="hidden" name="curso-nome" :value="curso.title" />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import moment from "moment";

export default {
  data() {
    return {
      isEmpty: true,
      message: "",
      cursos: [
        {
          id: "",
          title: "titulo",
          text: "texto actividade",
          date: "dia",
          time: "hora",
          price: "preço",
          formador: "formador",
          img_src: "",
          ref: ""
        }
      ]
    };
  },
  methods: {
    getDynamicRoutes(url) {
      axios
        .get(url)
        .then(resp => {
          const data = resp.data;
          var result = data.split("||");
          var cursos = JSON.parse(result[2]);
          const items = [];
          for (let key in cursos) {
            const item = cursos[key];
            items.push(item);
          }

          this.processData(items);
        })
        .catch(error => console.log(error));
    },
    processData(data) {
      data.forEach(this.createAndAppendRoute);
    },
    createAndAppendRoute(route) {
      let newRoute = {
        path: `/servicos/academia/cursos`,
        name: `${route.cursos_title}`,
        component: this.lazyLoad("cursos")
      };

      this.$router.addRoutes([newRoute]);
    },
    lazyLoad(view) {
      return () => import(`@/components/servicos/academia/${view}.vue`);
    }
  },
  created() {
    this.getDynamicRoutes(
      "https://www.harmonizando.com/data_api/getAgendaActividades.php"
    );
  },
  mounted() {
    var map = Array.prototype.map;
    var vm = this;
    axios
      .get("https://www.harmonizando.com/data_api/getAgendaActividades.php")
      .then(resp => {
        const data = resp.data;
        var result = data.split("||");
        var cursos = JSON.parse(result[2]);
        var its = [];
        if (cursos == "") {
          vm.$data.isEmpty = true;
          vm.$data.message = "Não há actividades regulares.";
        } else {
          vm.$data.isEmpty = false;
          map.call(cursos, function(d) {
            if (d.agenda_id == 1) {
              if (moment(d.agenda_cursos_date).isAfter(new Date())) {
                var text = d.agenda_cursos_content;
                var price = d.agenda_cursos_price;
                // remove HTML p tag
                var div = document.createElement("div");
                div.innerHTML = text;
                var txt = div.textContent || div.innerText || "";
                var div = document.createElement("div");
                div.innerHTML = price;
                var pr = div.textContent || div.innerText || "";

                its.push({
                  id: d.assortment_table_id,
                  title: d.agenda_cursos_title,
                  text: txt,
                  date: moment(d.agenda_cursos_date).format("DD-MM-YYYY"),
                  time: d.agenda_cursos_time,
                  price: pr,
                  formador: d.formadores_name,
                  img_src:
                    "https://beta.harmonizando.com/docs/images/main/" +
                    d.__images_file,
                  ref: `/servicos/academia/cursos/${d.cursos_temas_ref}/${d.cursos_ref}`
                });
              }
            } else {
              vm.$data.isEmpty = true;
              vm.$data.message = "Não há actividades regulares.";
            }
          });

          vm.$data.cursos = its;
        }
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

.actividades-regulares {
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 0 pxToEm(130);

  @media only screen and (min-width: 1200px) {
    padding: 0 pxToEm(80);
  }

  @media only screen and (min-width: 992px) {
    padding: 0 pxToEm(60);
  }

  .row {
    display: flex;
    flex-direction: column;
    margin: 0 pxToEm(60);

    @media only screen and (min-width: 992px) {
      margin: 0 pxToEm(20);
    }

    > .text {
      margin: pxToEm(50) 0;
    }

    .actividades {
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      margin: pxToEm(50) 0;

      .actividade {
        display: flex;
        background-color: #fafafa;
        padding: pxToEm(35);
        width: 100%;

        .left {
          .imagem {
            width: pxToEm(400);
            height: pxToEm(500);
            background-color: #cbcbcb;
            background-size: cover;
            background-position: center;
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

          .descricao {
            margin-top: pxToEm(10);
          }

          .data-hora,
          .preco,
          .formador {
            margin-top: pxToEm(10);
            font-weight: bold;

            > span {
              font-weight: normal;
            }
          }

          .ctas {
            display: flex;
            justify-content: space-between;

            .cta-wrapper {
              .cta {
                width: pxToEm(260);
                height: pxToEm(50);
                background-color: #91c569;
                border-radius: pxToEm(10);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;

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

        .modal {
          position: fixed;
          width: pxToEm(900);
          height: auto;
          background-color: #fff;
          z-index: 999;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          border-radius: pxToEm(10);
          box-shadow: 0px 0px pxToEm(32) rgba(0, 0, 0, 0.3);
          padding: pxToEm(50);
          opacity: 0;
          display: flex;
          align-items: center;
          transition: all 0.5s;
          pointer-events: none;

          .close-btn {
            border-radius: 50%;
            width: pxToEm(54);
            height: pxToEm(54);
            background-color: #91c569;
            position: absolute;
            right: pxToEm(30);
            top: pxToEm(30);
            cursor: pointer;

            .icon {
              height: 100%;
              width: 100%;

              > .line {
                height: pxToEm(2);
                width: pxToEm(20);
                background-color: #fff;
                position: absolute;
                top: 50%;
                left: 50%;
                transform: translateX(-50%) translateY(-50%);

                &:first-child {
                  transform: translateX(-50%) translateY(-50%) rotate(45deg);
                }

                &:last-child {
                  transform: translateX(-50%) translateY(-50%) rotate(-45deg);
                }
              }
            }
          }

          .content {
            width: 100%;
            height: auto;
            display: flex;
            flex-direction: column;

            .title-modal {
              font-size: pxToEm(28);
              font-weight: bold;
              margin-bottom: pxToEm(55);
            }

            .form-group {
              height: pxToEm(80);
              display: flex;
              flex-direction: column;
              margin-bottom: pxToEm(15);
              justify-content: flex-end;

              label {
                width: 100%;
                margin-bottom: pxToEm(10);
              }

              input {
                height: 100%;
              }

              .cta {
                width: pxToEm(260);
                height: pxToEm(50);
                background-color: #91c569;
                border-radius: pxToEm(10);
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;
                border: none;
                color: #fff;
                font-weight: bold;
                font-size: pxToEm(15);
                text-transform: uppercase;
                align-self: flex-end;
                margin-top: pxToEm(10);

                &:focus {
                  outline: none;
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
