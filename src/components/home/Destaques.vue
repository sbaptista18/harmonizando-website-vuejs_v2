<!--eslint-disable-->
<template>
  <div class="destaques">
    <div class="content">
      <div class="row">
        <div class="destaque">
          <div class="imagem">
            <img :src="dummyImg" alt />
          </div>
          <div class="bottom">
            <div class="title">titulo destaque</div>
            <div class="cta-wrapper">
              <div class="cta">
                <div class="txt">saber mais ></div>
              </div>
            </div>
          </div>
        </div>

        <div class="destaque">
          <div class="imagem">
            <img :src="dummyImg" alt />
          </div>
          <div class="bottom">
            <div class="title">titulo destaque</div>
            <div class="cta-wrapper">
              <div class="cta">
                <div class="txt">saber mais ></div>
              </div>
            </div>
          </div>
        </div>

        <div class="destaque">
          <div class="imagem">
            <img :src="dummyImg" alt />
          </div>
          <div class="bottom">
            <div class="title">titulo destaque</div>
            <div class="cta-wrapper">
              <div class="cta">
                <div class="txt">saber mais ></div>
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
import img from "../../assets/dummy-img.jpg";

export default {
  data() {
    return {
      dummyImg: img
    };
  }
};
</script>

<style lang="scss" scoped>
@function pxToEm($value) {
  $point: ($value * 3) / 4;
  $yem: $point / 12;

  @return $yem * 1rem;
}

.destaques {
  height: pxToEm(600);
  display: flex;
  flex-direction: row;
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

  @media only screen and (max-width: 767px) {
    padding: 0 pxToEm(20);
    height: auto;
  }

  .content {
    position: relative;
    max-width: pxToEm(1400);
    width: 100%;
    margin: pxToEm(80) auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .row {
      height: 100%;
      display: flex;
      justify-content: space-between;

      @media only screen and (max-width: 600px) {
        flex-direction: column;
      }

      .destaque {
        width: pxToEm(400);
        height: 100%;
        background-color: #f3f3f3;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        border-radius: pxToEm(10);

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          width: pxToEm(350);
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          width: pxToEm(350);
        }

        @media only screen and (min-width: 600px) and (max-width: 767px) {
          width: pxToEm(330);
        }

        @media only screen and (max-width: 600px) {
          width: 100%;
          background-color: #fff;
          margin-bottom: pxToEm(40);
        }

        .imagem {
          width: 100%;
          height: pxToEm(284);
          background-color: #f3f3f3;
          border-radius: pxToEm(10) pxToEm(10) 0 0;
          overflow: hidden;
          display: flex;
          align-items: center;
          justify-content: center;

          @media only screen and (max-width: 600px) {
            background-color: #fff;
            height: 100%;
          }

          img {
            height: 100%;
            border-radius: pxToEm(10) pxToEm(10) 0 0;
          }
        }

        .bottom {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          height: 35%;
          width: 100%;

          .title {
            font-size: pxToEm(24);
          }

          .cta-wrapper {
            .cta {
              width: pxToEm(260);
              height: pxToEm(50);
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: #91c569;
              border-radius: pxToEm(10);

              @media only screen and (max-width: 600px) {
                width: pxToEm(200);
              }

              .txt {
                color: #fff;
                text-transform: uppercase;
              }
            }
          }
        }
      }
    }
  }
}
</style>
