<template>
  <div class="row">
    <div class="row__col">
      <div class="name">
        <img src="./../../assets/icons/user.svg" alt="user" />
        <h2>{{currentUser.name}}</h2>
        <span>({{currentUser.username}})</span>
      </div>
      <div class="company">
        <h3>Company:</h3>
        <p>
          <span>Name:</span>
          {{currentUser.company.name}}
        </p>
        <p>
          <span>Catch Phrase:</span>
          {{currentUser.company.catchPhrase}}
        </p>
        <p>
          <span>Field:</span>
          {{currentUser.company.bs}}
        </p>
      </div>

      <div class="contacts">
        <h3>Contacts:</h3>
        <a :href="'tel:' + currentUser.phone" class="contacts__item">
          <img src="./../../assets/icons/call.svg" alt="phone" />
          {{currentUser.phone}}
        </a>
        <a :href="'mailto:' + currentUser.email" class="contacts__item">
          <img src="./../../assets/icons/email.svg" alt="envelop" />
          {{currentUser.email}}
        </a>
        <a :href="'http://' + currentUser.website" target="_blank" class="contacts__item">
          <img src="./../../assets/icons/world.svg" alt="world" />
          {{currentUser.website}}
        </a>
      </div>
      <div class="address">
        <h3>Address:</h3>
        <p>{{currentUser.address.street}}, {{currentUser.address.suite}}, {{currentUser.address.city}}</p>
        <p>Latitude: {{currentUser.address.geo.lat}}, Longitude: {{currentUser.address.geo.lng}}</p>
        <br />
        <div>
          <GmapMap
            :center="{lat: currentUser.address.geo.lat * 1, lng: currentUser.address.geo.lng * 1}"
            :zoom="3"
            map-type-id="terrain"
            style="width: 100%; height: 300px"
          >
            <GmapMarker
              :position="{lat: currentUser.address.geo.lat * 1, lng: currentUser.address.geo.lng * 1}"
              :clickable="false"
              :draggable="false"
            />
          </GmapMap>
        </div>
      </div>
    </div>
    <div class="row__col">
      <div class="portrait">
        <div class="wrap">
          <img :src="currentUser.image.src.portrait" alt="portrait" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "userFull",
  computed: mapGetters(["currentUser"]),
  created() {
    this.initCurrentUser(this.$route.params.id);
  },
  methods: {
    ...mapActions(["initCurrentUser"]),
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.row {
  display: flex;
  &__col {
    flex: 1;
    &:first-of-type {
      margin-right: 4rem;
    }
  }
}
.portrait {
  position: relative;
  background: #f6faff;
  transition: all 1s;
  &:after,
  &:before {
    content: " ";
    width: 3rem;
    height: 3rem;
    position: absolute;
    transition: all 1s;
    z-index: 99;
    opacity: 0.7;
  }
  &:after {
    top: -0.3rem;
    left: -0.3rem;
    border-top: 1.5rem solid #64a0fd;
    border-left: 1.5rem solid #64a0fd;
  }
  &:before {
    bottom: -0.3rem;
    right: -0.3rem;
    border-bottom: 1.5rem solid #fdc164;
    border-right: 1.5rem solid #fdc164;
  }
  &:hover {
    &:before,
    &:after {
      width: 100%;
      height: 100%;
    }
    .wrap {
      border-top-right-radius: 0;
      border-bottom-left-radius: 0;
      transition: all 1s;
      img {
        transform: scale(1.1);
      }
    }
  }
  .wrap {
    width: 100%;
    height: 100%;
    overflow: hidden;
    border-top-right-radius: 3rem;
    border-bottom-left-radius: 3rem;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    img {
      display: block;
      width: 100%;
      height: auto;
      transition: 1s;
    }
  }
}
.name {
  display: flex;
  align-items: center;
  margin-bottom: 3rem;
  img {
    display: block;
    width: 3rem;
    height: auto;
    margin-right: 1rem;
  }
  h2 {
    text-transform: uppercase;
    white-space: nowrap;
  }
  span {
    margin-left: 1rem;
    font-size: 2rem;
    color: #64a0fd;
    font-weight: 400;
    text-transform: capitalize;
  }
}
h3 {
  margin-bottom: 1rem;
}
.company {
  margin-bottom: 3rem;
  p {
    margin-bottom: 0.5rem;
  }
  span {
    color: #64a0fd;
  }
}
.contacts {
  margin-bottom: 3rem;
  &__item {
    display: flex;
    text-decoration: none;
    color: #222;
    margin-bottom: 0.5rem;
    &:hover {
      transform: scale(1.01);
    }
    img {
      display: block;
      width: 2rem;
      height: 2rem;
      margin-right: 1rem;
    }
  }
}
</style>
