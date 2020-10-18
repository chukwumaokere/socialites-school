<template>
  <div class="card server-card">
      <div class="card-img-top"></div> 
      <div class="card-body">
          <h4 class="card-subtitle">{{subtitle}}</h4>
          <br> 
          <p class="card-subtitle-desc">{{subtitleDesc}}</p> 
          <h1 class="card-title"><span class="smol-dollar">$</span>{{price}}</h1> 
          <h5 class="card-text">{{text}}</h5> 
          <br> 
          <slot />
          <a @click="goTo('join'); setPlan(subtitle);" :class="'button ' + color">{{btnText}}</a>
          <br>
          <p v-if="helper" :class="'help ' + color ">{{helper}}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        color: String,
        subtitle: String,
        subtitleDesc: String,
        price: String,
        text: String,
        btnText: String,
        helper: String,
    },
    methods: {
        setPlan(type) {
            console.log('setting type to', type)
            this.$emit('set-type', type);
        }
    },
    setup(){
         const goTo = (el) => {
            document.getElementById(el).scrollIntoView({behavior: "smooth"});
        }
        return {
            goTo,
        }
    }
}
</script>

<style scoped>
.card.is-active{
    box-shadow: 0 8px 12px 0 rgba(122,122,122,0.9);
    transform: scale(1.07);
}
.card {
    position: relative;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    /* border: 1px solid rgba(0,0,0,.125);*/
    border: 0.1rem solid #f5f5f5;
    border-radius: .25rem;
    margin: 1.5rem .75rem;
}
.card-img-top {
    width: 100%;
    border-top-left-radius: calc(.25rem - 1px);
    border-top-right-radius: calc(.25rem - 1px);
}
.card-body {
    /* align-self: center; */
    text-align: center;
    flex: 1 1 auto;
    padding: 1.25rem;
}
.card-subtitle {
    margin-top: -.375rem;
    margin-bottom: 0;
}
.card-subtitle-desc {
    font-size: 1.15rem;
}
p {
    margin-top: 0;
    margin-bottom: 1rem;
}
p.help{
    margin-bottom: 0rem;
}
h1 {
    font-size: 4rem;
}
.card-title {
    margin-bottom: .75rem;
}
.h5, h5 {
    font-size: 1.25rem;
}
.h4, h4 {
    font-size: 1.5rem;
}
.smol-dollar{
    font-size: 1.5rem;
    vertical-align: super;
}
</style>