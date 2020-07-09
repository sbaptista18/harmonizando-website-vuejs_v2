<template>
  <div id="footer">
    <newsletter></newsletter>
    <div class="footer">
      <div class="content">
        <footer>
          <div class="section">
            <router-link to="/">
              <img :src="logo" alt="Harmonizando Logo Footer" />
            </router-link>

            <ul class="links-site">
              <li class="link">
                <router-link to="/sobre-nos">sobre nós</router-link>
              </li>
              <li class="link">
                <router-link to="/servicos">serviços</router-link>
              </li>
              <li class="link">
                <router-link to="/agenda">Agenda</router-link>
              </li>
              <li class="link">
                <router-link to="/marcar-consulta">marcar consulta</router-link>
              </li>
            </ul>
          </div>
          <div class="section">
            <p>Links úteis</p>
            <ul class="links-uteis">
              <!-- <li class="link">
                <router-link to="/termos-condicoes">Termos e Condições</router-link>
              </li> -->
              <li class="link">
                <router-link to="/perguntas-frequentes">Perguntas Frequentes</router-link>
              </li>
              <li class="link">
                <router-link to="/politica-privacidade">Política de Privacidade</router-link>
              </li>
            </ul>
          </div>
          <div class="section">
            <p>Morada</p>
            <div style="color: #707070;" v-html="morada"></div>
          </div>
          <div class="section">
            <p>Contactos</p>
            <div>
              <p>
                <span>Telefone:</span>
                <br />
                <span style="font-weight: 400; margin: 0;" v-html="tlf"></span>
                <br />
                <span>E-mail:</span>
                <br />
                <a v-html="email" href="mailto:harmonizando@gmail.com"></a>
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Logo from "../../assets/logo.png";
import Newsletter from "./Newsletter";
import axios from "axios";

export default {
  data() {
    return {
      logo: Logo,
      morada: "",
      tlf: "",
      email: ""
    };
  },
  components: {
    newsletter: Newsletter
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

#footer {
  position: relative;

  &.stikybottom {
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
  }
}

.footer {
  height: pxToEm(350);
  padding: 0 pxToEm(130);
  background-color: #e6dbce;

  @media only screen and (min-width: 1200px) and (max-width: 1919px) {
    padding: 0 pxToEm(80);
  }

  @media only screen and (min-width: 992px) and (max-width: 1199px) {
    padding: 0 pxToEm(60);
    height: auto;
  }

  @media only screen and (min-width: 768px) and (max-width: 991px) {
    padding: 0 pxToEm(40);
    height: auto;
  }

  @media only screen and (max-width: 767px) {
    padding: 0 pxToEm(20);
    height: auto;
  }

  .content {
    position: relative;
    max-width: pxToEm(1400);
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    footer {
      height: pxToEm(300);
      margin-top: pxToEm(50);
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: flex-start;

      @media only screen and (max-width: 600px) {
        flex-direction: column;
        height: auto;
      }

      .section {
        @media only screen and (max-width: 600px) {
          // width: 25%;
        }

        > a {
          img {
            @media only screen and (min-width: 992px) and (max-width: 1919px) {
              width: pxToEm(230);
            }

            @media only screen and (min-width: 768px) and (max-width: 991px) {
              width: pxToEm(230);
            }

            @media only screen and (max-width: 767px) {
              width: pxToEm(230);
            }
          }
        }
        > p {
          text-transform: uppercase;
          font-size: pxToEm(20);
          font-weight: bold;
          color: #000000;
        }

        .links-site {
          padding: 0;

          .link {
            list-style: none;
            text-transform: uppercase;
            font-size: pxToEm(20);
            font-weight: bold;
            margin-bottom: pxToEm(15);

            a {
              color: #000000;
            }
          }
        }

        .links-uteis {
          padding: 0;

          .link {
            list-style: none;
            font-size: pxToEm(20);
            margin-bottom: pxToEm(15);
          }
        }

        > div {
          p {
            color: #707070;
            font-size: pxToEm(20);

            span {
              font-weight: bold;
              display: inline-block;
              margin-top: pxToEm(15);
            }
          }
        }
      }
    }
  }
}
</style>
