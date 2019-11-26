<template>
  <div class="countdown">
    <div class="block">
      <p class="digit">{{ days | two_digits }}</p>
      <p class="text">{{ $t('days') }}</p>
    </div>
    <div class="block">
      <p class="digit">{{ hours | two_digits }}</p>
      <p class="text">{{ $t('hours') }}</p>
    </div>
    <div class="block">
      <p class="digit">{{ minutes | two_digits }}</p>
      <p class="text">{{ $t('minutes') }}</p>
    </div>
    <div class="block">
      <p class="digit">{{ seconds | two_digits }}</p>
      <p class="text">{{ $t('seconds') }}</p>
    </div>
  </div>
</template>

<script>

export default {
  mounted() {
    window.setInterval(() => {
      this.now = Math.trunc((new Date()).getTime() / 1000);
    },1000);
  },
  props: {
    date: {
      type: String
    }
  },
  data() {
    return {
      now: Math.trunc((new Date()).getTime() / 1000)
    }
  },
  computed: {
    dateInMilliseconds() {
      return Math.trunc(Date.parse(this.date) / 1000)
    },
    seconds() {
      return (this.dateInMilliseconds - this.now) % 60;
    },
    minutes() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60) % 60;
    },
    hours() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60) % 24;
    },
    days() {
      return Math.trunc((this.dateInMilliseconds - this.now) / 60 / 60 / 24);
    }
  }
}
</script>

<style>
  .countdown {
    display: flex;
    width: 100%;
  }

  .block {
    display: flex;
    flex-direction: column;
    margin: 20px;
  }

  .text {
    color: #4cb957;
    /*font-family: 'Roboto Condensed', serif;*/
    font-weight: 400;
    margin-top:10px;
    margin-bottom: 10px;
    text-align: center;
  }

  .digit {
    color: #636363;
    font-weight: 100;
    /*font-family: 'Roboto', serif;*/
    margin: 10px;
    text-align: center;
  }

  @media screen and (max-width: 700px) {
    .digit {
      font-size: 25px;
      font-weight: bold;
    }

    .text {
      font-size: 15px;
    }
  }

  @media screen and (min-width: 700px) {
    .digit {
      font-size: 130px;
    }

    .text {
      font-size: 25px;
    }
  }
</style>
