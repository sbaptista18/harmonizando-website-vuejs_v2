<!--eslint-disable-->
<template>
  <div class="contactos">
    <div class="content">
      <div class="row">
        <div class="left">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3113.4369804955586!2d-9.357156848282257!3d38.70777526560248!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd1ecfea3ecf393b%3A0xc63910222f5b6225!2sHarmonizando!5e0!3m2!1spt-PT!2spt!4v1593341402059!5m2!1spt-PT!2spt"
            width="100%"
            height="100%"
            frameborder="0"
            style="border:0;"
            allowfullscreen
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        </div>
        <div class="right">
          <div class="copy">
            <div class="morada">
              <div class="title">Morada</div>
              <div class="text" v-html="morada"></div>
            </div>
            <div class="contacts">
              <div class="title">Contactos</div>
              <div class="text">
                <div class="subtitle">Telefone</div>
                <div v-html="tlf"></div>
                <div class="subtitle">E-mail</div>
                <div>
                  <a v-html="email" href="mailto:harmonizando@gmail.com"></a>
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
import axios from "axios";

export default {
  data() {
    return {
      morada: "",
      tlf: "",
      email: ""
    };
  },
  mounted() {
    axios
      .get("https://www.harmonizando.com/data_api/getContactos.php")
      .then(resp => {
        const data = resp.data;
        this.morada = data[0].contactos_morada;
        this.tlf = data[0].contactos_tlf;
        this.email = data[0].contactos_email;
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

.contactos {
  height: pxToEm(740);
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

  @media only screen and (min-width: 600px) and (max-width: 767px) {
    padding: 0 pxToEm(20);
  }

  @media only screen and (max-width: 599px) {
    padding: 0 pxToEm(20);
    height: auto;
  }

  .content {
    position: relative;
    max-width: pxToEm(1400);
    width: 100%;
    margin: pxToEm(50) auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

    @media only screen and (min-width: 992px) and (max-width: 1199px) {
      margin: 0 auto;
    }

    @media only screen and (min-width: 768px) and (max-width: 991px) {
      margin: 0 auto;
    }

    @media only screen and (min-width: 600px) and (max-width: 767px) {
      margin: 0 auto;
    }

    @media only screen and (max-width: 599px) {
      margin: 0 auto;
    }

    .row {
      @media only screen and (min-width: 1200px) and (max-width: 1919px) {
        display: flex;
        height: 100%;
      }

      @media only screen and (min-width: 992px) and (max-width: 1199px) {
        display: flex;
        height: 100%;
        width: 100%;
      }

      @media only screen and (min-width: 768px) and (max-width: 991px) {
        display: flex;
        height: 100%;
        width: 100%;
      }

      @media only screen and (min-width: 600px) and (max-width: 767px) {
        display: flex;
        height: 100%;
        width: 100%;
      }

      @media only screen and (max-width: 599px) {
        display: flex;
        height: 100%;
        flex-direction: column;
        width: 100%;
      }

      .left {
        width: pxToEm(875);
        height: pxToEm(640);
        background-color: #f3f3f3;
        left: 0;
        position: absolute;
        background-size: cover;

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          position: relative;
          width: 100%;
          margin: 0 pxToEm(40);
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          position: relative;
          width: 100%;
          margin: 0 pxToEm(40);
        }

        @media only screen and (min-width: 600px) and (max-width: 767px) {
          position: relative;
          width: 100%;
          margin: 0 pxToEm(40);
        }

        @media only screen and (max-width: 599px) {
          position: relative;
          width: 100%;
          height: 50%;
        }
      }

      .right {
        position: absolute;
        width: pxToEm(500);
        height: pxToEm(400);
        background-color: #fff;
        border-radius: pxToEm(10);
        box-shadow: pxToEm(10) pxToEm(11) pxToEm(17) rgba(0, 0, 0, 0.1);
        top: pxToEm(40);
        right: 0;
        padding: pxToEm(35) pxToEm(50);

        @media only screen and (min-width: 1200px) and (max-width: 1919px) {
          max-width: pxToEm(600);
          width: 100%;
          height: auto;
        }

        @media only screen and (min-width: 992px) and (max-width: 1199px) {
          position: relative;
          width: 100%;
          background-color: #fff;
          border-radius: 0;
          padding: 0;
          box-shadow: none;
          top: 0;
          margin: 0;
        }

        @media only screen and (min-width: 768px) and (max-width: 991px) {
          position: relative;
          width: 100%;
          background-color: #fff;
          border-radius: 0;
          padding: 0;
          box-shadow: none;
          top: 0;
          margin: 0;
        }

        @media only screen and (min-width: 600px) and (max-width: 767px) {
          position: relative;
          width: 100%;
          height: 100%;
          background-color: #fff;
          border-radius: 0;
          padding: 0;
          box-shadow: none;
          top: 0;
          margin: 0;
        }

        @media only screen and (max-width: 599px) {
          position: relative;
          width: 100%;
          height: auto;
          background-color: #fff;
          border-radius: 0;
          padding: 0;
          box-shadow: none;
          top: 0;
          margin: 0;
        }

        .copy {
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-between;

          @media only screen and (max-width: 767px) {
            justify-content: flex-start;
          }

          @media only screen and (max-width: 599px) {
            flex-direction: row;
            justify-content: space-around;
            margin: pxToEm(50) 0;
          }

          > div {
            @media only screen and (max-width: 599px) {
              display: flex;
              flex-direction: column;
            }

            .title {
              font-size: pxToEm(20);
              font-weight: bold;
              text-transform: uppercase;
              color: #000;
            }

            .text {
              font-size: pxToEm(18);
              color: #707070;

              @media only screen and (max-width: 599px) {
                line-height: 1.1em;
                // text-align: center;
              }

              .subtitle {
                font-weight: bold;
                margin-top: pxToEm(25);
              }
            }
          }
        }
      }
    }
  }
}
</style>
