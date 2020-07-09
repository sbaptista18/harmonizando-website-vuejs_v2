<template>
  <div class="actividades">
    <div class="row" v-for="(actividade, id) in actividades" :key="id">
      <div class="wrapper">
        <div
          :class="{'right': actividade.id % 2 === 0, 'left': actividade.id % 2 !== 0}"
          :style="{ 'background-image': 'url(' + actividade.img_src + ')' }"
        ></div>
        <div :class="{'left': actividade.id % 2 === 0, 'right': actividade.id % 2 !== 0}">
          <div class="copy">
            <div class="title">{{ actividade.title }}</div>
            <div class="text">{{ actividade.text }}</div>
            <div class="cta-wrapper">
              <router-link :to="actividade.ref">
                <div class="cta">
                  <div class="txt">Saber mais ></div>
                </div>
              </router-link>
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

export default {
  data() {
    return {
      actividades: [
        {
          id: "",
          title: "title",
          text: "texto",
          img_src: "src",
          ref: ""
        }
      ]
    };
  },
  mounted() {
    var map = Array.prototype.map;
    var vm = this;
    axios
      .get("https://www.harmonizando.com/data_api/getAgendaActividades.php")
      .then(resp => {
        const data = resp.data;
        var result = data.split("||");
        var actividades = JSON.parse(result[1]);
        var its = [];
        map.call(actividades, function(d) {
          var text = d.agenda_text;
          // remove HTML p tag
          var div = document.createElement("div");
          div.innerHTML = text;
          var txt = div.textContent || div.innerText || "";
          its.push({
            id: d.assortment_table_id,
            title: d.agenda_title,
            text: txt,
            img_src:
              "https://beta.harmonizando.com/docs/images/main/" +
              d.__images_file,
            ref: "/agenda/" + d.agenda_ref
          });
        });

        vm.$data.actividades = its;
      });
  },
  methods: {
    getDynamicRoutes(url) {
      axios
        .get(url)
        .then(resp => {
          const data = resp.data;
          const items = [];
          for (let key in data) {
            const item = data[key];
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
        path: `/agenda/${route.agenda_ref}`,
        name: `${route.agenda_title}`,
        component: this.lazyLoad(`${route.agenda_ref}`)
      };

      this.$router.addRoutes([newRoute]);
      this.$router.options.routes.push({
        path: `/agenda/${route.agenda_ref}`,
        name: `${route.agenda_title}`,
        component: this.lazyLoad(`${route.agenda_ref}`)
      });
    },
    lazyLoad(view) {
      return () => import(`@/components/agenda/${view}.vue`);
    }
  },
  created() {
    this.getDynamicRoutes(
      "https://www.harmonizando.com/data_api/getUrlsActividades.php"
    );
  }
};
</script>

<style lang="scss" scoped>
@function pxToEm($value) {
  $point: ($value * 3) / 4;
  $yem: $point / 12;

  @return $yem * 1rem;
}

.actividades {
  height: auto;
  display: flex;
  flex-direction: column;

  .row {
    height: pxToEm(530);
    padding: 0 pxToEm(130);
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    background-color: #fff;

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
      height: auto;
    }

    &:nth-child(1) {
      .wrapper {
        max-width: pxToEm(1400);
        width: 100%;
        height: 100%;
        margin: auto;
        position: absolute;

        @media only screen and (min-width: 1200px) and (max-width: 1919px) {
          display: flex;
          height: 100%;
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          display: flex;
          height: 100%;
          position: relative;
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          display: flex;
          height: 100%;
          position: relative;
        }

        @media only screen and (min-width: 600px) and (max-width: 767px) {
          display: flex;
          height: 100%;
          position: relative;
        }

        @media only screen and (max-width: 599px) {
          display: flex;
          height: 100%;
          flex-direction: column;
          position: relative;
        }

        .left {
          width: pxToEm(800);
          height: pxToEm(415);
          background-color: #f3f3f3;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          position: absolute;
          background-size: cover;
          background-position: center;

          @media only screen and (min-width: 992px) and (max-width: 1199px) {
            position: relative;
            width: 100%;
            margin: 0 pxToEm(40) 0 0;
          }

          @media only screen and (min-width: 768px) and (max-width: 991px) {
            position: relative;
            width: 100%;
            margin: 0 pxToEm(40) 0 0;
          }

          @media only screen and (min-width: 600px) and (max-width: 767px) {
            position: relative;
            width: 100%;
            margin: 0 pxToEm(40) 0 0;
          }

          @media only screen and (max-width: 599px) {
            position: relative;
            width: 100%;
            margin: 0 pxToEm(40) 0 0;
            top: 0;
            transform: translateY(0);
          }
        }

        .right {
          position: absolute;
          width: pxToEm(535);
          height: pxToEm(280);
          background-color: #fff;
          border-radius: pxToEm(10);
          box-shadow: pxToEm(10) pxToEm(11) pxToEm(17) rgba(0, 0, 0, 0.1);
          top: 50%;
          transform: translateY(-50%);
          right: 0;
          padding: pxToEm(40) pxToEm(60);

          @media only screen and (min-width: 1200px) and (max-width: 1919px) {
            max-width: pxToEm(600);
            width: 100%;
            height: auto;
          }

          @media only screen and (min-width: 992px) and (max-width: 1199px) {
            position: relative;
            width: 100%;
            background-color: transparent;
            border-radius: 0;
            padding: 0;
            box-shadow: none;
          }

          @media only screen and (min-width: 768px) and (max-width: 991px) {
            position: relative;
            width: 100%;
            background-color: transparent;
            border-radius: 0;
            padding: 0;
            box-shadow: none;
          }

          @media only screen and (min-width: 600px) and (max-width: 767px) {
            position: relative;
            width: 100%;
            height: 100%;
            background-color: transparent;
            border-radius: 0;
            padding: 0;
            box-shadow: none;
          }

          @media only screen and (max-width: 599px) {
            position: relative;
            width: 100%;
            height: auto;
            background-color: transparent;
            border-radius: 0;
            padding: 0;
            box-shadow: none;
            margin-bottom: pxToEm(40);
            top: 0;
            transform: translateY(0);
          }

          .copy {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            @media only screen and (max-width: 767px) {
              justify-content: center;
              align-items: center;
            }

            @media only screen and (max-width: 599px) {
              margin-top: pxToEm(30);
            }

            .title {
              font-size: pxToEm(40);
              color: #707070;
            }

            .subtitle {
              font-size: pxToEm(18);
              color: #707070;
              margin-top: 10px;
            }

            .text {
              font-size: pxToEm(22);
              color: #707070;
              line-height: 1.5em;
              margin: 0;

              @media only screen and (min-width: 600px) and (max-width: 767px) {
                text-align: center;
              }

              @media only screen and (max-width: 599px) {
                line-height: 1.1em;
                text-align: center;
              }
            }

            .cta-wrapper {
              width: pxToEm(170);
              margin-top: pxToEm(10);
              align-self: flex-end;

              @media only screen and (max-width: 767px) {
                align-self: center;
                margin-top: pxToEm(30);
              }

              .cta {
                width: pxToEm(170);
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
        }
      }
    }

    &:nth-child(2) {
      background-color: #fafafa;

      .wrapper {
        max-width: pxToEm(1400);
        width: 100%;
        height: 100%;
        margin: auto;
        position: absolute;

        @media only screen and (min-width: 1200px) and (max-width: 1919px) {
          display: flex;
          height: 100%;
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          display: flex;
          height: 100%;
          position: relative;
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          display: flex;
          height: 100%;
          position: relative;
        }

        @media only screen and (min-width: 600px) and (max-width: 767px) {
          display: flex;
          height: 100%;
          position: relative;
        }

        @media only screen and (max-width: 599px) {
          display: flex;
          height: 100%;
          flex-direction: column;
          position: relative;
        }

        .left {
          position: absolute;
          width: pxToEm(535);
          height: pxToEm(280);
          background-color: #fff;
          border-radius: pxToEm(10);
          box-shadow: pxToEm(10) pxToEm(11) pxToEm(17) rgba(0, 0, 0, 0.1);
          top: 50%;
          transform: translateY(-50%);
          left: 0;
          padding: pxToEm(40) pxToEm(60);

          @media only screen and (min-width: 1200px) and (max-width: 1919px) {
            max-width: pxToEm(600);
            width: 100%;
            height: auto;
          }

          @media only screen and (min-width: 992px) and (max-width: 1199px) {
            position: relative;
            width: 100%;
            background-color: transparent;
            border-radius: 0;
            padding: 0;
            box-shadow: none;
            margin: 0;
          }

          @media only screen and (min-width: 768px) and (max-width: 991px) {
            position: relative;
            width: 100%;
            background-color: transparent;
            border-radius: 0;
            padding: 0;
            box-shadow: none;
            margin: 0;
          }

          @media only screen and (min-width: 600px) and (max-width: 767px) {
            position: relative;
            width: 100%;
            height: 100%;
            background-color: transparent;
            border-radius: 0;
            padding: 0;
            box-shadow: none;
            margin: 0;
          }

          @media only screen and (max-width: 599px) {
            position: relative;
            width: 100%;
            height: auto;
            background-color: transparent;
            border-radius: 0;
            padding: 0;
            box-shadow: none;
            margin: 0;
            margin-bottom: pxToEm(40);
            top: 0;
            transform: translateY(0);
          }

          .copy {
            height: 100%;
            display: flex;
            flex-direction: column;
            justify-content: space-between;

            @media only screen and (max-width: 767px) {
              justify-content: center;
              align-items: center;
            }

            @media only screen and (max-width: 599px) {
              margin-top: pxToEm(30);
            }

            .title {
              font-size: pxToEm(40);
              color: #707070;
            }

            .subtitle {
              font-size: pxToEm(18);
              color: #707070;
              margin-top: pxToEm(10);
            }

            .text {
              font-size: pxToEm(22);
              color: #707070;
              line-height: 1.5em;
              margin-top: pxToEm(10);

              @media only screen and (min-width: 600px) and (max-width: 767px) {
                text-align: center;
              }

              @media only screen and (max-width: 599px) {
                line-height: 1.1em;
                text-align: center;
              }
            }

            .cta-wrapper {
              width: pxToEm(170);
              margin-top: pxToEm(10);
              align-self: flex-end;

              @media only screen and (max-width: 767px) {
                align-self: center;
                margin-top: pxToEm(30);
              }

              .cta {
                width: pxToEm(170);
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
        }

        .right {
          width: pxToEm(800);
          height: pxToEm(415);
          background-color: #f3f3f3;
          right: 0;
          top: 50%;
          transform: translateY(-50%);
          position: absolute;
          padding: 0;
          box-shadow: none;
          border-radius: 0;
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;

          @media only screen and (min-width: 992px) and (max-width: 1199px) {
            position: relative;
            width: 100%;
            margin: 0 pxToEm(40) 0 0;
          }

          @media only screen and (min-width: 768px) and (max-width: 991px) {
            position: relative;
            width: 100%;
            margin: 0 pxToEm(40) 0 0;
          }

          @media only screen and (min-width: 600px) and (max-width: 767px) {
            position: relative;
            width: 100%;
            margin: 0 pxToEm(40) 0 0;
          }

          @media only screen and (max-width: 599px) {
            position: relative;
            width: 100%;
            margin: 0 pxToEm(40) 0 0;
            top: 0;
            transform: translateY(0);
          }
        }
      }
    }

    // &:nth-child(2) {
    //   background-color: #fafafa;

    //   .wrapper {
    //     .left {
    //       position: absolute;
    //       width: pxToEm(535);
    //       height: pxToEm(280);
    //       background-color: #fff;
    //       border-radius: pxToEm(10);
    //       box-shadow: pxToEm(10) pxToEm(11) pxToEm(17) rgba(0, 0, 0, 0.1);
    //       top: 50%;
    //       transform: translateY(-50%);
    //       left: 0;
    //       padding: pxToEm(40) pxToEm(60);

    //       .copy {
    //         height: 100%;
    //         display: flex;
    //         flex-direction: column;
    //         justify-content: space-between;

    //         .title {
    //           font-size: pxToEm(40);
    //           color: #707070;
    //         }

    //         .subtitle {
    //           font-size: pxToEm(18);
    //           color: #707070;
    //           margin-top: pxToEm(10);
    //         }

    //         .text {
    //           font-size: pxToEm(22);
    //           color: #707070;
    //           line-height: 1.5em;
    //           margin-top: pxToEm(10);
    //         }

    //         .cta-wrapper {
    //           width: pxToEm(170);
    //           margin-top: pxToEm(10);
    //           align-self: flex-end;

    //           .cta {
    //             width: pxToEm(170);
    //             height: pxToEm(50);
    //             border-radius: pxToEm(10);
    //             background-color: #91c569;
    //             display: flex;
    //             align-items: center;
    //             justify-content: center;

    //             .txt {
    //               font-size: pxToEm(20);
    //               color: #fff;
    //             }
    //           }
    //         }
    //       }
    //     }

    //     .right {
    //       width: pxToEm(800);
    //       height: pxToEm(415);
    //       background-color: #f3f3f3;
    //       right: 0;
    //       top: 50%;
    //       transform: translateY(-50%);
    //       position: absolute;
    //       padding: 0;
    //       box-shadow: none;
    //       border-radius: 0;
    //       background-repeat: no-repeat;
    //       background-size: cover;
    //       background-position: center;
    //     }
    //   }
    // }

    // .wrapper {
    //   max-width: pxToEm(1400);
    //   width: 100%;
    //   height: 100%;
    //   margin: auto;
    //   position: absolute;

    //   .left {
    //     width: pxToEm(800);
    //     height: pxToEm(415);
    //     background-color: #f3f3f3;
    //     left: 0;
    //     top: 50%;
    //     transform: translateY(-50%);
    //     position: absolute;
    //     background-size: cover;
    //     background-position: center;
    //   }

    //   .right {
    //     position: absolute;
    //     width: pxToEm(535);
    //     height: pxToEm(280);
    //     background-color: #fff;
    //     border-radius: pxToEm(10);
    //     box-shadow: pxToEm(10) pxToEm(11) pxToEm(17) rgba(0, 0, 0, 0.1);
    //     top: 50%;
    //     transform: translateY(-50%);
    //     right: 0;
    //     padding: pxToEm(40) pxToEm(60);

    //     .copy {
    //       height: 100%;
    //       display: flex;
    //       flex-direction: column;
    //       justify-content: space-between;

    //       .title {
    //         font-size: pxToEm(40);
    //         color: #707070;
    //       }

    //       .subtitle {
    //         font-size: pxToEm(18);
    //         color: #707070;
    //         margin-top: pxToEm(10);
    //       }

    //       .text {
    //         font-size: pxToEm(22);
    //         color: #707070;
    //         line-height: 1.5em;
    //         margin-top: pxToEm(10);
    //       }

    //       .cta-wrapper {
    //         width: pxToEm(170);
    //         margin-top: pxToEm(10);
    //         align-self: flex-end;

    //         .cta {
    //           width: pxToEm(170);
    //           height: pxToEm(50);
    //           border-radius: pxToEm(10);
    //           background-color: #91c569;
    //           display: flex;
    //           align-items: center;
    //           justify-content: center;

    //           .txt {
    //             font-size: pxToEm(20);
    //             color: #fff;
    //           }
    //         }
    //       }
    //     }
    //   }
    // }
  }
}
</style>
