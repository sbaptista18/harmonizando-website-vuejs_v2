<template>
  <div class="contactos">
    <div class="content">
      <div class="row">
        <div class="title">O Centro Harmonizando à distância de um clique!</div>
      </div>
      <div class="row ctas">
        <div class="cta-wrapper">
          <router-link to="/marcar-consulta">
            <div class="cta green">
              <div class="txt">marcar consulta</div>
            </div>
          </router-link>
        </div>

        <div class="cta-wrapper">
          <router-link to="/contactos">
            <div class="cta white">
              <div class="txt">contacte-nos</div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {};
</script>

<style lang="scss" scoped>
@function pxToEm($value) {
  $point: ($value * 3) / 4;
  $yem: $point / 12;

  @return $yem * 1rem;
}

.contactos {
  height: pxToEm(275);
  display: flex;
  flex-direction: row;
  padding: 0 pxToEm(130);
  background-color: #f6f6f6;

  @media only screen and (min-width: 1200px) and (max-width: 1919px) {
    padding: 0 pxToEm(80);
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    padding: 0 pxToEm(60);
    height: pxToEm(225);
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding: 0 pxToEm(40);
    height: pxToEm(225);
  }

  @media only screen and (min-width: 600px) and (max-width: 767px) {
    padding: 0 pxToEm(20);
    height: pxToEm(225);
  }

  @media only screen and (max-width: 600px) {
    padding: 0 pxToEm(20);
    height: pxToEm(225);
  }

  .content {
    position: relative;
    max-width: pxToEm(1400);
    width: 100%;
    margin: pxToEm(60) auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      margin: pxToEm(40) auto;
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
      margin: pxToEm(40) auto;
    }

    @media only screen and (min-width: 600px) and (max-width: 767px) {
      margin: pxToEm(40) auto;
    }

    @media only screen and (max-width: 600px) {
      margin: pxToEm(40) auto;
    }

    .row {
      max-width: pxToEm(880);
      width: 100%;

      .title {
        font-size: pxToEm(40);
        color: #707070;
        text-align: center;

        @media only screen and (max-width: 600px) {
          font-size: pxToEm(28);
          margin-bottom: pxToEm(10);
        }
      }

      &.ctas {
        display: flex;
        justify-content: space-between;
        max-width: pxToEm(700);

        @media only screen and (max-width: 600px) {
          max-width: pxToEm(500);
        }

        .cta-wrapper {
          width: pxToEm(260);
          height: pxToEm(60);

          @media only screen and (max-width: 600px) {
            width: pxToEm(200);
            height: pxToEm(60);
          }

          .cta {
            width: pxToEm(260);
            height: pxToEm(60);
            border-radius: pxToEm(10);
            display: flex;
            align-items: center;
            justify-content: center;

            @media only screen and (max-width: 600px) {
              width: pxToEm(200);
              height: pxToEm(60);
            }

            &.green {
              background-color: #91c569;

              .txt {
                color: #fff;
              }
            }

            &.white {
              background-color: #fff;
              border: pxToEm(4) solid #e6dbce;

              .txt {
                color: #e6dbce;
              }
            }

            .txt {
              font-size: pxToEm(20);
              text-transform: uppercase;
              font-weight: bold;

              @media only screen and (max-width: 600px) {
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
