<template>
  <div>
    <div class="cta__holder">
      <button @click="showForm = !showForm" class="cta">Join Our Team</button>
    </div>
    <transition name="fade">
      <div v-if="showForm" class="form-holder">
        <form @submit.prevent v-click-outside="onClickOutside">
          <h3>Join Our Team</h3>
          <p>Tell as about you self!</p>
          <div :class="{ 'error': $v.name.$error }">
            <input v-model.trim="$v.name.$model" type="text" placeholder="Name" />
            <div v-if="$v.name.$error">
              <div class="hint" v-if="!$v.name.required">Field is required</div>
              <div
                class="hint"
                v-if="!$v.name.minLength"
              >Name must have at least {{$v.name.$params.minLength.min}} letters.</div>
            </div>
          </div>

          <div :class="{ 'error': $v.email.$error }">
            <input v-model.trim="$v.email.$model" type="text" placeholder="Email" />
            <div v-if="$v.email.$error">
              <div class="hint" v-if="!$v.email.required">Field is required</div>
              <div class="hint" v-if="!$v.email.email">Invalid email format</div>
            </div>
          </div>

          <div :class="{ 'error': $v.text.$error }">
            <textarea v-model.trim="$v.text.$model" placeholder="Message"></textarea>
            <div v-if="$v.text.$error">
              <div class="hint" v-if="!$v.text.required">Field is required</div>
              <div
                class="hint"
                v-if="!$v.text.minLength"
              >Message must have at least {{$v.text.$params.minLength.min}} letters.</div>
            </div>
          </div>

          <button type="submit" @click="submit" :disabled="submitStatus === 'PENDING'" class="btn">
            Send
            <img src="./../../assets/icons/right-arrow.svg" alt="arrow" />
          </button>
          <p class="status" v-if="submitStatus === 'OK'">Thanks for your submission!</p>
          <p class="status" v-if="submitStatus === 'ERROR'">Please fill the form correctly.</p>
          <p class="status" v-if="submitStatus === 'PENDING'">Sending...</p>
        </form>
      </div>
    </transition>
  </div>
</template>

<script>
import vClickOutside from "v-click-outside";
import { required, minLength, email } from "vuelidate/lib/validators";
export default {
  name: "Form",
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      showForm: false,
      name: "",
      email: "",
      text: "",
      submitStatus: null,
    };
  },
  validations: {
    name: {
      required,
      minLength: minLength(2),
    },
    email: {
      required,
      email,
    },
    text: {
      required,
      minLength: minLength(20),
    },
  },
  methods: {
    submit() {
      this.$v.$touch();
      if (this.$v.$invalid) {
        this.submitStatus = "ERROR";
      } else {
        // do your submit logic here
        this.submitStatus = "PENDING";
        setTimeout(() => {
          const data = {
            name: this.name,
            email: this.email,
            message: this.text,
          };
          console.log(data);

          this.submitStatus = "OK";
          this.email = "";
          this.name = "";
          this.text = "";
          this.$v.$reset();
        }, 500);
      }
    },
    onClickOutside() {
      this.showForm = false;
    },
  },
};
</script>

<style lang="scss" scoped>
.cta {
  background: linear-gradient(to right, gold, darkorange);
  color: white;
  width: 22rem;
  height: 5rem;
  text-align: center;
  font-size: 2.4rem;
  border: 1px solid #3e85f2;
  border-radius: 2em;
  transform: perspective(500px) rotateY(-15deg);
  text-shadow: 3px 2px 1px rgba(0, 0, 0, 0.2);
  position: relative;
  overflow: hidden;
  transition: 0.5s;
  cursor: pointer;
  outline: none;
  box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background: linear-gradient(to right, transparent, white, transparent);
    top: 0;
    left: -100%;
    transition: 0.5s;
  }
  &:hover {
    box-shadow: 2px 0 0 5px #3e85f2a3;
    transform: perspective(500px) rotateY(15deg);
    text-shadow: -3px 2px 1px rgba(0, 0, 0, 0.2);
    box-shadow: -2px 0 0 5px#3e85f2a3;
    &::before {
      left: 100%;
    }
  }
  @media (max-width: 768px) {
    font-size: 2rem;
    width: 18rem;
    height: 4rem;
  }
  &__holder {
    position: fixed;
    z-index: 999;
    bottom: 2rem;
    right: 2rem;
  }
}
.form-holder {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #00000070;
  form {
    max-width: 40rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    background: #edeef2;
    padding: 2rem;
    border-radius: 1rem;
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    @media (max-width: 768px) {
      margin: 0 1.5rem;
    }
    h3,
    p {
      text-align: center;
    }
    input,
    textarea {
      margin-top: 2rem;
      width: 100%;
      padding: 0.5rem 0;
      outline: none;
      border: none;
      border-bottom: 1px solid grey;
      box-shadow: 0 0 #64a0fd;
      transition: 0.2s;
      background: #edeef2;
      &:focus {
        border-bottom: 1px solid #64a0fd;
        box-shadow: 0 0.1rem #64a0fd;
      }
    }
    textarea {
      max-width: 100%;
      width: 100%;
      max-height: 10rem;
      height: 10rem;
    }
    .error {
      input,
      textarea {
        border-bottom: 1px solid red;
        box-shadow: 0 0.1rem red;
      }
      .hint {
        color: #f2513e;
        font-size: 1.4rem;
      }
    }
    .status {
      margin-top: 1rem;
    }
    .btn {
      margin: 2rem auto 0;
    }
  }
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>