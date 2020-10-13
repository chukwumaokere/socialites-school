<template>

<div class="card">
  <div v-if="image" class="card-image">
    <figure v-if="image" class="image is-4by3">
      <img v-if="image" :src="image" alt="Placeholder image">
    </figure> 
  </div>
  <div class="card-content">
    <div class="media">
      <div v-if="media" class="media-left">
        <figure v-if="media" class="image is-48x48">
          <img :src="media" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">{{title}}</p>
        <p class="subtitle is-6">{{subtitle}}</p>
      </div>
    </div>

    <div class="content">
      {{content}}
      <br>
      <time v-if="datetime" :datetime="datetime">{{datetime}}</time>
    </div>
  </div>
</div>
    <!--
    <div class="card">
  <div class="card-image">
    <figure class="image is-4by3">
      <img class="card-img" src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
    </figure>
  </div>
  <div class="card-content">
    <div class="media">
      <div class="media-left">
        <figure class="image is-48x48">
          <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
        </figure>
      </div>
      <div class="media-content">
        <p class="title is-4">John Smith</p>
        <p class="subtitle is-6">@johnsmith</p>
      </div>
    </div>

    <div class="content">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      Phasellus nec iaculis mauris. <a>@bulmaio</a>.
      <a href="#">#css</a> <a href="#">#responsive</a>
      <br>
      <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
    </div>
  </div>
</div>
-->
</template>

<script>
export default {
    props: {
        image: String,
        media: String,
        title: String,
        subtitle: String,
        content: String,
        datetime: String,
    }

}
</script>

<style scoped>
.hero.is-success .title, .hero.is-success .subtitle {
    color: rgb(74, 74, 74);
}
.card{
    margin: 1rem;
    border-radius: .25rem;
}
.card-img{ 
    border-radius: 0.25rem 0.25rem 0 0;
}
</style>