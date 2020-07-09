<!-- eslint-disabl e-->
<template>
  <div class="perguntas-wrapper">
    <div class="perguntas">
      <div class="left">
        <div class="topics">
          <div class="topic" @click="goToTopic(t.id)" v-for="t in topicos" :key="t.id">
            <div class="text">{{t.topic}}</div>
          </div>
        </div>
        <svg
          class="icon-faqs"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="310"
          height="310"
          viewBox="0 0 310 310"
        >
          <defs>
            <clipPath id="clip-path">
              <rect
                id="Rectangle_31"
                data-name="Rectangle 31"
                width="310"
                height="310"
                transform="translate(284 895)"
                fill="#e6e6e6"
                stroke="#707070"
                stroke-width="1"
              />
            </clipPath>
          </defs>
          <g id="icon" transform="translate(-284 -895)" clip-path="url(#clip-path)">
            <g id="question" transform="translate(277.055 888.048)">
              <path
                id="Path_16"
                data-name="Path 16"
                d="M126.462,194.28h-52.7A64.446,64.446,0,0,0,9.173,257.605c-1.961,10.565-4.618,29.038,1.961,35.617,17.777,17.144,58.012,23.723,88.947,23.723,31.631,0,71.17-6.579,88.947-23.723,6.579-6.579,3.986-25.052,1.961-35.617C190.421,222.621,161.446,194.28,126.462,194.28Zm54.09,89.01c-12.526,12.526-43.525,20.434-79.711,20.434-36.249,0-67.881-7.908-79.711-19.8-1.329-2.657-7.655-74.207,52.7-77.18,13.728-.7,53.394,0,53.394,0,59.151.063,54.659,74.587,53.33,76.548Z"
                fill="#e6e6e6"
              />
              <path
                id="Path_17"
                data-name="Path 17"
                d="M99.449,182.386c28.974,0,52.7-23.723,52.065-52.128A51.8,51.8,0,0,0,99.449,78.129c-28.342,0-52.065,23.723-52.065,52.128A51.8,51.8,0,0,0,99.449,182.386Zm0-91.035c21.762,0,39.539,17.777,39.539,38.907s-17.777,38.907-39.539,38.907S59.91,151.387,59.91,130.258,77.75,91.351,99.449,91.351Z"
                fill="#e6e6e6"
              />
              <path
                id="Path_18"
                data-name="Path 18"
                d="M160.118,6.959v95.653h20.434v46.814l46.814-46.814h89.58V6.959Zm144.3,83.127H222.684L193.71,119.124V90.086H173.276V20.181H304.42Z"
                fill="#e6e6e6"
              />
              <path
                id="Path_19"
                data-name="Path 19"
                d="M237.235,38.59a3.545,3.545,0,0,1,3.29-1.961,7.138,7.138,0,0,1,2.657.633,9.9,9.9,0,0,1,1.329,3.986,5.59,5.59,0,0,1-1.329,3.986l-5.251,5.947c-1.329,1.961-2.657,3.29-3.29,4.618s-.633,3.29-.633,5.251V67H245.9V61.744c0-1.329,0-2.657.633-3.29l2.657-2.657,3.986-3.986c0-.633.633-1.329,1.329-1.961.633-.633,1.329-1.329,1.329-1.961.633,0,.633-.633,1.329-1.961.633-.633.633-2.657.633-4.618,0-4.618-1.328-8.6-4.618-11.2-3.29-2.657-7.275-3.986-12.526-3.986-4.618,0-9.236,1.329-12.526,4.618-3.29,2.657-5.251,7.275-5.947,12.526h13.159a22.355,22.355,0,0,1,1.9-4.681Z"
                fill="#e6e6e6"
              />
              <path
                id="Path_20"
                data-name="Path 20"
                d="M240.525,69.589a7.313,7.313,0,0,0-5.251,1.961,7.417,7.417,0,0,0-1.961,5.251,7.313,7.313,0,0,0,1.961,5.251,6.471,6.471,0,0,0,5.251,1.961,7.313,7.313,0,0,0,5.251-1.961,7.417,7.417,0,0,0,1.961-5.251,7.313,7.313,0,0,0-1.961-5.251A7.706,7.706,0,0,0,240.525,69.589Z"
                fill="#e6e6e6"
              />
            </g>
          </g>
        </svg>
      </div>
      <div class="right">
        <div class="topic-wrapper" v-for="(t, index) in topicos" :key="t.id">
          <div class="header">
            <div class="text">{{t.topic}}</div>
          </div>
          <div class="content">
            <div class="question" v-for="p in topicos[index].perguntas" :key="p.id">
              <div class="quest" @click="openQuestion(p.id)" :data-topic-id="p.id">
                <div class="text">{{p.pergunta}}</div>
                <div class="icon">
                  <svg
                    class="arrow"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 4.743 7.308"
                  >
                    <defs>
                      <clipPath id="a">
                        <rect width="4.743" height="7.308" fill="none" />
                      </clipPath>
                    </defs>
                    <g clip-path="url(#a)">
                      <path
                        d="M3.654,4.743,0,1.088,1.088,0,3.654,2.566,6.22,0,7.308,1.088Z"
                        transform="translate(0 7.308) rotate(-90)"
                        fill="#707070"
                      />
                    </g>
                  </svg>
                </div>
              </div>
              <div class="answer">
                <div v-html="p.resposta" class="text"></div>
              </div>
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
      topicos: [
        {
          id: "1",
          topic: "topico 1",
          perguntas: [
            {
              id: "1",
              pergunta: "pergunta",
              resposta: "resposta"
            }
          ]
        }
      ]
    };
  },
  methods: {
    openQuestion(id) {
      var pergunta = $('*[data-topic-id="' + id + '"]');
      $(".quest").css("font-weight", "400");
      $(".arrow").removeClass("rotate");
      if (pergunta.parent().find(".answer").hasClass("active")) {
        $(".active").slideUp(0);
        $(".active").removeClass("active");
      } else {
        $(".active").slideUp(0);
        $(".active").removeClass("active");
        pergunta.parent().find(".answer").slideDown(0);
        pergunta.css("font-weight", "bold");
        pergunta.parent().find(".answer").addClass("active");
        pergunta.children().find(".arrow").addClass("rotate");
      }
    },
    goToTopic(id) {
      var topico = $('*[data-topic-id="' + id + '"]');
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: topico.offset().top - 90
        },
        100
      );
    }
  },
  mounted() {
    var map = Array.prototype.map;
    var vm = this;

    axios
      .get("https://www.harmonizando.com/data_api/getFaqs.php")
      .then(resp => {
        const data = resp.data;
        var result = data.split("||");
        var topics = JSON.parse(result[2]);
        var tps = [];

        var o = {};
        var result = topics.reduce(function(r, el) {
          var e = el.faqs_id.slice(0, 2);
          if (!o[e]) {
            o[e] = {
              id: el.faqs_id,
              topic: el.faqs_topico,
              perguntas: []
            };
            r.push(o[e]);
          }
          o[e].perguntas.push({
            id: el.faqs_perguntas_id,
            pergunta: el.faqs_perguntas_pergunta,
            resposta: el.faqs_perguntas_resposta
          });
          return r;
        }, []);

        vm.$data.topicos = result;
      });
  }
};
</script>

<style lang="scss" scoped>
//colors
$white: #fff;
$black: #000;
$dk-gray-1: #393939;
$dk-gray-2: #464646;
$dk-gray-3: #707070;
$lt-gray: #f6f6f6;
$green: #91c569;

//paddings and margins
$pd-desktop: 0 390px;
$mg-desktop: 0 40px;

//circle
$circle: 50%;

@function pxToEm($value) {
  $point: ($value * 3) / 4;
  $yem: $point / 12;

  @return $yem * 1rem;
}

.perguntas-wrapper {
  background-color: $white;
  height: auto;
  padding: $pd-desktop;
  display: flex;

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

  .perguntas {
    display: flex;
    height: 100%;
    justify-content: space-between;
    margin: pxToEm(50) auto;
    max-width: pxToEm(1400);
    width: 100%;

    @media only screen and (max-width: 767px) {
      flex-direction: column;
    }

    > div {
      @media only screen and (max-width: 767px) {
        width: 100%;
      }
    }

    .left {
      display: flex;
      flex-direction: column;
      align-items: center;

      .topics {
        width: pxToEm(400);

        @media only screen and (max-width: 767px) {
          display: none;
        }

        .topic {
          width: 100%;
          height: pxToEm(50);
          background-color: $green;
          margin-bottom: pxToEm(10);
          display: flex;
          align-items: center;
          justify-content: flex-start;
          border-radius: pxToEm(10);
          cursor: pointer;

          .text {
            color: $white;
            font-size: pxToEm(20);
            margin-left: pxToEm(20);
          }
        }
      }

      .icon-faqs {
        margin-top: pxToEm(100);

        @media only screen and (max-width: 767px) {
          display: none;
        }
      }
    }

    .right {
      .topic-wrapper {
        width: pxToEm(800);

        @media only screen and (max-width: 767px) {
          width: 100%;
        }

        .header {
          height: pxToEm(50);
          background-color: $green;
          display: flex;
          align-items: center;
          justify-content: flex-start;
          border-radius: pxToEm(10);

          .text {
            color: $white;
            font-size: pxToEm(20);
            margin-left: pxToEm(20);
          }
        }

        .content {
          padding: 0 pxToEm(20);

          .question {
            margin: pxToEm(20) 0;
            overflow: hidden;
            border-bottom: 1px solid $dk-gray-3;
            transition: max-height 2s;
            user-select: none;
            max-height: pxToEm(600);

            &:last-child {
              border: none;
            }

            &.open {
              max-height: pxToEm(600);
            }

            .quest {
              height: pxToEm(60);
              display: flex;
              align-items: center;
              justify-content: space-between;
              cursor: pointer;

              .text {
                font-size: pxToEm(20);
              }

              .icon {
                width: pxToEm(20);
                height: pxToEm(20);
                border-radius: $circle;
                border: pxToEm(1) solid $dk-gray-3;
                display: flex;
                align-items: center;
                justify-content: center;

                .arrow {
                  width: pxToEm(4.7);
                  height: pxToEm(7.23);
                  transform: rotate(90deg);

                  &.rotate {
                    transform: rotate(-90deg);
                  }
                }
              }
            }

            .answer {
              margin: pxToEm(20) 0;
              font-size: pxToEm(16);
              line-height: pxToEm(30);
              display: none;

              .text {
                font-size: pxToEm(16);
              }
            }
          }
        }
      }
    }
  }
}
</style>
