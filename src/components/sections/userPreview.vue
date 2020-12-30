<template>
  <div class="item">
    <div class="item__wrap">
      <div class="item__img">
        <Loader v-if="!('image' in user)" />
        <div
          v-else
          class="holder"
          v-bind:style="{ 'background-image': 'url(' + user.image.src.medium + ')' }"
        ></div>
      </div>
      <div class="item__info">
        <p class="name">{{user.name}}</p>
        <!-- <p class="item__company">
          <span>Company:</span>
          {{user.company.name}}
        </p>-->
        <div class="contacts">
          <a :href="'tel:' + user.phone" class="contacts__item">
            <img src="./../../assets/icons/call.svg" alt="phone" />
          </a>
          <a :href="'mailto:' + user.email" class="contacts__item">
            <img src="./../../assets/icons/email.svg" alt="envelop" />
          </a>
          <a :href="'http://' + user.website" target="_blank" class="contacts__item">
            <img src="./../../assets/icons/world.svg" alt="world" />
          </a>
        </div>
        <router-link :to="'/user/' + user.id" class="btn">
          More
          <img src="./../../assets/icons/right-arrow.svg" alt="arrow" />
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Loader from "./Loader";
export default {
  name: "userShort",
  components: {
    Loader,
  },
  props: {
    user: {
      type: Object,
    },
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.item {
  $className: item;
  display: block;
  width: 50%;
  padding: 0 1.5rem;
  margin-bottom: 2rem;
  &:hover {
    .#{$className}__wrap {
      box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25),
        0 10px 10px rgba(0, 0, 0, 0.22);
    }
    .#{$className}__img {
      .holder {
        transform: scale(1.01);
        filter: grayscale(0%);
      }
    }
  }
  @media (max-width: 768px) {
    width: 100%;
    max-width: 60rem;
    margin: 0 auto 3rem;
  }
  &__wrap {
    border-radius: 0.5rem;
    display: flex;
    height: 18rem;
    background: #fff3e2;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: 0.2s;
  }
  &__img {
    width: 45%;
    margin-right: 1rem;
    clip-path: polygon(0 0, 100% 0, 75% 100%, 0% 100%);
    .holder {
      width: 100%;
      height: 100%;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      filter: grayscale(100%);
      transition: 0.2s;
    }
  }
  &__info {
    width: 55%;
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    .name {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 2rem;
      margin-bottom: 1.5rem;
      @media (max-width: 768px) {
        font-size: 1.8rem;
      }
    }
    .contacts {
      display: flex;
      margin-bottom: 2rem;
      &__item {
        display: block;
        width: 2rem;
        margin-right: 1rem;
        img {
          display: block;
          width: 100%;
          height: auto;
          &:hover {
            transform: scale(1.1);
          }
        }
      }
    }
  }
}
</style>
