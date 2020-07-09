<!-- eslint-disable -->
<template>
  <div  
  class="g-recaptcha" 
  :data-sitekey="sitekey">
  </div>
</template>

<script>
/* eslint-disable */
export default {
  data () {
    return {
      sitekey: '6Lc4pN0UAAAAAC6PIg6TzCAahFzoHJYJqBkmtT9z',
      widgetId: 0
    }
  },
  methods: {
    execute () {
      window.grecaptcha.execute(this.widgetId)
    },
    reset () {
      window.grecaptcha.reset(this.widgetId)
    },
    render () {
      if (window.grecaptcha) {
        this.widgetId = window.grecaptcha.render(document.querySelector('.g-recaptcha'), {
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
    }
  },
  mounted () {
    // render the recaptcha widget when the component is mounted
    this.render()
  }
}
</script>
