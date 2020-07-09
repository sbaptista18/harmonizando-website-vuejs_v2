<!-- eslint-disable -->
<template>
  <div class="actividades-agendadas">
    <div class="bg"></div>
    <!-- <recaptcha ref="recaptcha" @verify="submit"></recaptcha> -->

    <div class="row">
      <h1>Actividades Agendadas</h1>
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
                <label :for="'insc-nome-' + curso.curso_id">Nome</label>
                <input :id="'insc-nome-' + curso.curso_id" type="text" />
              </div>
              <div class="form-group">
                <label :for="'insc-contacto-' + curso.curso_id">Contacto</label>
                <input :id="'insc-contacto-' + curso.curso_id" type="text" />
              </div>
              <div class="form-group">
                <label :for="'insc-email-' + curso.curso_id">Email</label>
                <input :id="'insc-email-' + curso.curso_id" type="email" />
              </div>
              <div class="form-group">
                <!-- <label :for="'insc-captcha-' + curso.curso_id">Captcha</label> -->
                <!-- <div :id="'insc-captcha-' + curso.curso_id" class="g-recaptcha" :data-sitekey="sitekey" @verify="submit"></div> -->
                <!-- <recaptcha :id="'insc-captcha-' + curso.curso_id" ref="recaptcha" ></recaptcha> -->
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

    <div class="modal-captcha">
      <div id="insc-captcha" class="g-recaptcha" :data-sitekey="sitekey" @verify="submit"></div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import axios from "axios";
import moment from "moment";
import Recaptcha from '../includes/Recaptcha'

export default {
  data() {
    return {
      isEmpty: true,
      message: "",
      cursos: [
        {
          id: "",
          curso_id: "",
          title: "titulo",
          text: "texto actividade",
          date: "dia",
          time: "hora",
          price: "preço",
          formador: "formador",
          img_src: "",
          ref: ""
        }
      ],
      sitekey: '6Lc4pN0UAAAAAC6PIg6TzCAahFzoHJYJqBkmtT9z',
      widgetId: 0
    };
  },
  components: {
    Recaptcha
  },
  methods: {
    submit (response) {
      console.log(response)
    },
    // execute the recaptcha widget
    executeRecaptcha () {
      this.$refs.recaptcha.execute()
    },
    execute () {
      window.grecaptcha.execute(this.widgetId)
    },
    reset () {
      window.grecaptcha.reset(this.widgetId)
    },
    render () {
      if (window.grecaptcha) {
        this.widgetId = window.grecaptcha.render('insc-captcha', {
          sitekey: this.sitekey,
          // the callback executed when the user solve the recaptcha
          callback: (response) => {
            // emit an event called verify with the response as payload
            this.$emit('verify', response)
            // reset the recaptcha widget so you can execute it again
            this.reset() 
          }
        })
      }
    },
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
    },
    openModal() {
      $(".modal").css({ opacity: "1", pointerEvents: "all" }, 500);
      $('.bg').css({ opacity: '1', pointerEvents: "all" }, 500);
      $("body").css("overflow-y", "hidden");
      $("html").css("overflow-y", "hidden");
      $('.modal-captcha').css({ opacity: "1" })
      $('#insc-captcha').css({ 'pointer-events': "all" })
    },
    closeModal() {
      $(".modal").css({ opacity: "0", pointerEvents: "none" }, 500);
      $('.bg').css({ opacity: "0", pointerEvents: "none" }, 500);
      $("body").css("overflow-y", "auto");
      $("html").css("overflow-y", "auto");
      $('.modal-captcha').css({ opacity: "0" })
      $('#insc-captcha').css({ 'pointer-events': "none" })
    }
  },
  created() {
    this.getDynamicRoutes(
      "https://www.harmonizando.com/data_api/getAgendaActividades.php"
    );
  },
  mounted() {
    this.render()
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
          vm.$data.message = "Não há actividades futuras.";
        } else {
          vm.$data.isEmpty = false;
          map.call(cursos, function(d) {
            if (d.agenda_id == 2) {
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
                  curso_id: d.cursos_id,
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
              vm.$data.message = "Não há actividades futuras.";
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

.actividades-agendadas {
  height: auto;
  display: flex;
  flex-direction: column;
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



  .modal-captcha {
    width: pxToEm(900);
    height: pxToEm(500);
    z-index: 99999999;
    position: fixed;
    top: 50%;
    left: 50%;
    margin-right: -50%;
    transform: translate(-50%, -50%);
    border-radius: pxToEm(10);
    padding: pxToEm(50);
    opacity: 0;
    display: flex;
    align-items: flex-end;
    transition: all 0.5s;
    pointer-events: none;

    @media screen and (max-width: 599px) {
      width: 85%;
    }

      #insc-captcha {
        pointer-events: all;
        margin-bottom: 70px;

        @media only screen and (min-width: 1200px) and (max-width: 1919px) {
          margin-bottom: 40px;
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          margin-bottom: 40px;
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          margin-bottom: 20px;
        }

        @media only screen and (min-width: 600px) and (max-width: 767px) {
          margin-bottom: 10px;
        }

        @media screen and (max-width: 599px) {
          transform: scale(0.7);
          margin-left: -45px;
          margin-bottom: 10px;
        }
      }
  }

  .bg {
    position: absolute;
    background-color: rgba(255, 255, 255, 0.7);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    z-index: 99999;
    opacity: 0;
    pointer-events: none;
  }

  .row {
    display: flex;
    flex-direction: column;
    margin: 0 pxToEm(60);

    @media only screen and (min-width: 1200px) and (max-width: 1919px) {
      margin: 0 pxToEm(60);
    }

    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      margin: 0 pxToEm(40);
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
      margin: 0 pxToEm(40);
    }

    @media only screen and (min-width: 600px) and (max-width: 767px) {
      margin: 0 pxToEm(20);
    }

    @media only screen and (max-width: 599px) {
      margin: 0 pxToEm(20);
    }

    h1 {
      text-align: center;
    }

    > .text {
      margin: pxToEm(50) 0;
    }

    .actividades {
      display: flex;
      justify-content: space-between;
      margin: pxToEm(50) 0;

      @media only screen and (max-width: 767px) {
        flex-direction: column;
      }

      .actividade {
        display: flex;
        background-color: #fafafa;
        padding: pxToEm(35);
        width: 100%;
        max-width: 45%;
        margin: 0 pxToEm(5) 0 pxToEm(5);
        margin-bottom: pxToEm(20);

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          padding: pxToEm(25);
          height: auto;
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          padding: pxToEm(15);
          height: auto;
        }

        @media only screen and (max-width: 767px) {
          height: pxToEm(360);
          max-width: 93%;
        }

        @media only screen and (max-width: 599px) {
          max-width: 90%;
        }

        .left {
          .imagem {
            width: pxToEm(250);
            height: pxToEm(350);
            background-color: #cbcbcb;
            background-size: cover;
            background-position: center;
          }
        }

        .right {
          width: 100%;
          max-width: pxToEm(600);
          height: 100%;
          margin-left: pxToEm(30);
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          @media only screen and (min-width: 768px) and (max-width: 991px) {
            margin-left: pxToEm(20);
          }

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
            justify-content: flex-start;
            flex-wrap: wrap;

            .cta-wrapper {
              margin-bottom: pxToEm(10);
              margin-right: pxToEm(15);

              .cta {
                width: pxToEm(210);
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
          width: pxToEm(900);
          height: auto;
          background-color: #fff;
          z-index: 99999999;
          position: fixed;
          top: 50%;
          left: 50%;
          margin-right: -50%;
          transform: translate(-50%, -50%);
          border-radius: pxToEm(10);
          box-shadow: 0px 0px pxToEm(32) rgba(0, 0, 0, 0.3);
          padding: pxToEm(50);
          opacity: 0;
          display: flex;
          align-items: center;
          transition: all 0.5s;
          pointer-events: none;

          @media screen and (max-width: 599px) {
            width: 85%;
          }

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
