<template>
  <div class="newsletter">
    <div class="content">
      <div class="copy">Subscreva a nossa Newsletter!</div>
      <form id="newsletterForm" class="form" @submit.prevent>
        <div class="input">
          <input type="email" name="email" id="email" placeholder="Insira o seu e-mail." />
        </div>
        <button class="cta-wrapper" @click="signNewsletter" form="newsletterForm">
          <div class="cta">
            <div class="txt">subscrever</div>
          </div>
        </button>
      </form>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
export default {
  methods: {
    signNewsletter() {
      function checkEmail($email) {
        var filter = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,3}$/;
        return filter.test($email);
      }

      $("#email").attr("placeholder", "Insira o seu e-mail.");

      var data = {
        email: $("#email").val()
      };

      var erro;
      var controlPhone = false;
      if (data.email == "") {
        $("#email").focus();
        erro = "Introduza o seu e-mail.";
        $("#email").attr("placeholder", erro);
      } else {
        var verifyEmail = checkEmail(data.email);
        if (verifyEmail) {
          controlPhone = true;
          $("#email").attr("placeholder", "");
        } else {
          $("#email").focus();
          erro = "O e-mail inserido não é valido.";
          $("#email").attr("placeholder", erro);
        }
      }

      if (controlPhone != false) {
        $("#email").val("");
        $.ajax({
          url:
            "https://www.harmonizando.com/data_api/newsletter/newsletter.php",
          type: "POST",
          data: data,
          dataType: "json",
          success: function(response) {
            if (response.error) {
              $("#email").addClass("error");
              $("#email").attr("placeholder", response.error);
              setTimeout(function() {
                $("#email").focus();
                $("#email").removeClass("error");
                $("#email").attr("placeholder", "Insira o seu e-mail.");
              }, 2000);
            } else {
              $("#email").removeClass("error");
              $("#email").attr("placeholder", response.success);
            }
          }
        });
      }

      return true;
    }
  }
};
</script>

<style lang="scss" scoped>
@function pxToEm($value) {
  $point: ($value * 3) / 4;
  $yem: $point / 12;

  @return $yem * 1rem;
}

.newsletter {
  height: pxToEm(120);
  padding: 0 pxToEm(130);
  background-color: #f6f6f6;
  display: flex;
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

  @media only screen and (max-width: 767px) {
    padding: 0 pxToEm(20);
  }

  .content {
    position: relative;
    max-width: pxToEm(1400);
    width: 100%;
    margin: auto;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    .copy {
      font-size: pxToEm(32);
      color: #707070;

      @media only screen and (min-width: 600px) and (max-width: 767px) {
        font-size: pxToEm(24);
      }

      @media only screen and (max-width: 600px) {
        font-size: pxToEm(20);
      }
    }

    .form {
      display: flex;
      justify-content: space-between;
      max-width: pxToEm(820);
      width: 100%;

      .input {
        display: flex;

        @media only screen and (max-width: 767px) {
          width: 100%;
        }

        input {
          width: pxToEm(520);
          height: pxToEm(60);
          border-radius: pxToEm(10);
          border: none;
          font-size: pxToEm(22);
          padding-left: pxToEm(20);

          @media only screen and (max-width: 767px) {
            // max-width: pxToEm(520);
            width: 100%;
          }

          &:focus {
            outline: none !important;
          }

          &.error::-webkit-input-placeholder {
            color: red;
          }

          &.error {
            &:focus {
              outline: none !important;
              border: pxToEm(1) solid red;
              box-shadow: 0 0 pxToEm(10) #719ece;
            }
          }
        }
      }

      .cta-wrapper {
        width: pxToEm(260);
        height: pxToEm(65);
        cursor: pointer;
        border: none;
        background: none;
        font-size: pxToEm(20);
        font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;

        @media only screen and (max-width: 767px) {
          width: pxToEm(220);
        }

        &:focus {
          outline: none;
        }

        .cta {
          width: pxToEm(260);
          height: pxToEm(65);
          background-color: #91c569;
          border-radius: pxToEm(10);
          display: flex;
          align-items: center;
          justify-content: center;

          @media only screen and (max-width: 767px) {
            max-width: pxToEm(150);
          }

          .txt {
            text-transform: uppercase;
            color: #fff;
            font-weight: bold;
          }
        }
      }
    }
  }
}
</style>
