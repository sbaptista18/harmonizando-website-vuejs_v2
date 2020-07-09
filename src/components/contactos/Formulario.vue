<!--eslint-disable-->
<template>
  <div class="formulario">
    <div class="content">
      <div class="left">
        <div class="plane" :style="{'background-image': 'url(' + plane + ')'}"></div>
      </div>
      <div class="right">
        <div class="form-wrapper">
          <div class="form-title">Faça-nos chegar a sua mensagem!</div>
          <div class="form">
            <div class="form-group">
              <input type="text" placeholder="Nome" />
            </div>
            <div class="form-group">
              <input type="text" placeholder="Apelido" />
            </div>
            <div class="form-group">
              <input type="email" placeholder="E-mail" />
            </div>
            <div class="form-group textarea">
              <textarea placeholder="Mensagem" cols="30" rows="10"></textarea>
            </div>
            <div class="form-group cta">
              <button class="submit-msg">Enviar</button>
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
import plane from "../../assets/plane.png";

export default {
  data() {
    return {
      plane: plane
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

.formulario {
  padding: 0 pxToEm(130);
  height: pxToEm(740);
  background-color: #fafafa;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

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

  .content {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    max-width: pxToEm(1400);
    height: 100%;

    @media only screen and (max-width: 767px) {
      flex-direction: column;
      align-items: center;
    }

    > div {
      width: 50%;
      height: 100%;
      display: flex;

      @media only screen and (max-width: 767px) {
        justify-content: center;
        width: 100%;
      }
    }

    .left {
      align-items: center;

      @media only screen and (max-width: 767px) {
        margin-top: pxToEm(50);
      }

      // @media only screen and (max-width: 599px) {
      //   display: none;
      // }

      .plane {
        width: pxToEm(330);
        height: pxToEm(330);
        background-size: cover;
        background-repeat: no-repeat;

        @media only screen and (max-width: 767px) {
          width: pxToEm(220);
          height: pxToEm(220);
        }
      }
    }

    .right {
      justify-content: flex-end;

      .form-wrapper {
        width: 100%;
        margin: pxToEm(60) 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        .form-title {
          font-size: pxToEm(36);
          color: #707070;
          margin-bottom: pxToEm(20);
        }

        .form {
          height: pxToEm(580);
          display: flex;
          flex-direction: column;

          .form-group {
            width: 100%;
            height: pxToEm(50);
            margin-bottom: pxToEm(20);

            &.textarea,
            &.cta {
              height: auto;
            }

            input {
              width: 95%;
              height: 100%;
              border: 1px solid #707070;
              border-radius: pxToEm(10);
              font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
              padding: 0 pxToEm(15);
              font-size: pxToEm(20);
            }

            textarea {
              width: 95%;
              height: pxToEm(200);
              border: 1px solid #707070;
              border-radius: pxToEm(10);
              font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
              padding: pxToEm(15);
              font-size: pxToEm(20);
            }

            .submit-msg {
              width: pxToEm(260);
              height: pxToEm(60);
              border-radius: pxToEm(10);
              border: none;
              color: #fff;
              text-transform: uppercase;
              font-weight: bold;
              background-color: #91c569;
              font-size: pxToEm(20);
              font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

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
</style>
