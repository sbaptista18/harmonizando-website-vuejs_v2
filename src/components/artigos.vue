
<template>
  <div class="artigos-wrapper">
    <h1>Artigos</h1>
    <div class="artigos">
      <div class="left">
        <div class="meses">
          <div class="mes" @click="goToYear(t.id)" v-for="t in anos" :key="t.id">
            <div class="text">{{t.valor}}</div>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="ano-wrapper" :data-ano-id="t.id" v-for="(t, index) in anos" :key="t.id">
          <div class="header">
            <div class="text">{{t.valor}}</div>
          </div>
          <div class="content" v-for="p in anos[index].meses" :key="p.id">
            <div class="topic">
              <div class="tp">
                <div class="text">{{p.mes}}</div>
              </div>
              <div class="topic-content">
                <div class="copy" v-for="d in anos[index].meses[index].topicos" :key="d.id">
                  <div class="imagem"></div>
                  <div class="text">
                    <div v-html="d.topic" class="title-topic"></div>
                    <div v-html="d.copy" class="copy-topic"></div>
                    <div v-html="d.date" class="date-topic"></div>
                  </div>
                </div>
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
export default {
  data() {
    return {
      anos: [
        {
          id: 2,
          valor: 2020,
          meses: [
            {
              id: 2,
              mes: "fevereiro",
              topicos: [
                {
                  id: 1,
                  topic: "topico 1",
                  copy: "conteudo 1",
                  date: "01-02-2020"
                },
                {
                  id: 2,
                  topic: "topico 2",
                  copy: "conteudo 2",
                  date: "28-02-2020"
                }
              ]
            },
            {
              id: 1,
              mes: "janeiro",
              topicos: [
                {
                  id: 1,
                  topic: "topico 1",
                  copy: "conteudo 1",
                  date: "01-01-2020"
                },
                {
                  id: 2,
                  topic: "topico 2",
                  copy: "conteudo 2",
                  date: "28-01-2020"
                }
              ]
            }
          ]
        },
        {
          id: 1,
          valor: 2019,
          meses: [
            {
              id: 2,
              mes: "fevereiro",
              topicos: [
                {
                  id: 1,
                  topic: "topico 1",
                  copy: "conteudo 1",
                  date: "01-02-2020"
                },
                {
                  id: 2,
                  topic: "topico 2",
                  copy: "conteudo 2",
                  date: "28-02-2020"
                }
              ]
            },
            {
              id: 1,
              mes: "janeiro",
              topicos: [
                {
                  id: 1,
                  topic: "topico 1",
                  copy: "conteudo 1",
                  date: "01-01-2020"
                },
                {
                  id: 2,
                  topic: "topico 2",
                  copy: "conteudo 2",
                  date: "28-01-2020"
                }
              ]
            }
          ]
        }
      ]
    };
  },
  methods: {
    goToYear(id) {
      var ano = $('*[data-ano-id="' + id + '"]');
      $([document.documentElement, document.body]).animate(
        {
          scrollTop: ano.offset().top - 90
        },
        100
      );
    }
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

.artigos-wrapper {
  background-color: $white;
  height: auto;
  padding: $pd-desktop;

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

  h1 {
    text-align: center;
  }

  .artigos {
    margin: auto;
    display: flex;
    height: 100%;
    justify-content: space-between;
    margin-top: pxToEm(50);
    max-width: pxToEm(1400);
    width: 100%;

    .left {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 30%;

      @media only screen and (max-width: 767px) {
        display: none;
      }

      .meses {
        width: 100%;

        .mes {
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
    }

    .right {
      width: 65%;

      @media only screen and (max-width: 767px) {
        width: 100%;
      }

      .ano-wrapper {
        max-width: pxToEm(950);
        width: 100%;

        @media only screen and (max-width: 767px) {
          max-width: 100%;
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
          display: flex;
          margin: pxToEm(40) 0px;

          .imagem {
            width: pxToEm(230);
            height: pxToEm(300);
            background-color: #cbcbcb;
          }

          .topic {
            margin: 0 0 pxToEm(20) 0;
            overflow: hidden;
            border-bottom: pxToEm(1) solid $dk-gray-3;
            transition: max-height 2s;
            user-select: none;
            width: 100%;

            &:last-child {
              border: none;
            }

            &.open {
              max-height: pxToEm(600);
            }

            .tp {
              height: auto;
              display: flex;
              align-items: center;
              justify-content: space-between;
              cursor: pointer;

              .text {
                font-size: pxToEm(26);
                font-weight: bold;
              }
            }

            .topic-content {
              display: flex;
              flex-direction: column;

              @media only screen and (max-width: 767px) {
                flex-direction: row;
                flex-wrap: wrap;
                justify-content: flex-start;
              }

              .copy {
                margin: pxToEm(20) 0;
                font-size: pxToEm(16);
                line-height: pxToEm(30);
                display: flex;

                @media only screen and (max-width: 767px) {
                  margin-right: pxToEm(50);
                  width: 45%;
                }

                @media only screen and (max-width: 599px) {
                  margin-right: pxToEm(50);
                  width: 100%;
                }

                .imagem {
                  width: pxToEm(230);
                  height: pxToEm(300);
                  background-color: #cbcbcb;
                }

                .text {
                  font-size: pxToEm(16);
                  margin-left: pxToEm(30);

                  .title-topic {
                    font-size: pxToEm(22);
                    font-weight: bold;
                  }

                  .copy-topic {
                  }

                  .date-topic {
                  }
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
