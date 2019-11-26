<template>
  <div class="container">
    <div>
      <img src="/logo.png" alt="The logo" class="logo"/>
      <div class="countdown-container">
        <div class="countdown-wrapper">
          <Countdown date="2020-01-01 00:00:00"></Countdown>
        </div>
      </div>
      <h1 class="title">{{ $t('title') }}</h1>
      <h2 class="subtitle">{{ $t('subTitle') }}</h2>
      <div class="links">
        <p>{{ $t('mailingListJoin') }}</p>
        <br>
        <input :placeholder="$t('email')"
               type="text"
               v-model="email"/>
        <a
          href="#"
          class="button--brown"
          @click="submitEmail()"
        >
          {{ $t('submit') }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
  import Countdown from "~/components/Countdown.vue";
  import axios from 'axios';

  export default {
    components: {
      Countdown,
    },
    data: () => {
      return {
        email: '',
      }
    },
    methods: {
      submitEmail: function() {
        axios.post(`/api/mailing-list`, {
          email: this.email,
        });
      },
    },
  }
</script>

<style>
  .container {
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }

  .countdown-container {
    text-align: center;
  }

  .countdown-wrapper {
    display: inline-block;
  }

  .title {
    font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    display: block;
    font-weight: 300;
    color: #35495e;
    letter-spacing: 1px;
  }

  .subtitle {
    font-weight: 300;
    color: #526488;
    word-spacing: 5px;
    padding-bottom: 15px;
  }

  .links {
    padding-top: 15px;
  }

  input[type=text] {
    width: 300px;
    padding: 12px 20px;
    margin: 8px 0;
    display: inline-block;
    border: 1px solid #ccc;
    border-radius: 4px;
    box-sizing: border-box;
    font-size: 16px;
  }

  @media screen and (max-width: 700px) {
    .logo {
      width: 150px
    }

    .title {
      font-size: 50px;
    }

    .subtitle {
      font-size: 25px;
    }
  }

  @media screen and (min-width: 700px) {
    .logo {
      width: 350px
    }

    .title {
      font-size: 100px;
    }

    .subtitle {
      font-size: 50px;
    }
  }
</style>
