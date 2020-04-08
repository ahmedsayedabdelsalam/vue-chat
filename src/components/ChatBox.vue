<template>
  <div :class="{hidden: hide}" class="chat-box">
    <div class="header">{{myFriend.name}}</div>
    <div class="body">
      <span v-for="message in messages" :key="message.id">
        <span class="mine" v-if="message.sender_id === me.id">{{message.body}}</span>
        <span class="theres" v-else>{{message.body}}</span>
      </span>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    me: {
      type: Object,
      required: true
    },
    myFriend: {
      type: Object,
      required: true
    },
    messages: {
      type: Array
    }
  },
  computed: {
    ...mapGetters(["hide"])
  }
};
</script>

<style scoped lang="scss">
.chat-box {
  border: 1px solid #ccc;
  width: 300px;
  position: absolute;
  bottom: 0;
  height: 350px;
  overflow: hidden;

  .header {
    background-color: #f00;
    color: #fff;
    font-weight: bold;
    font-size: 20px;
    height: 45px;
    line-height: 45px;
    padding: 0 20px;
  }

  .body {
    overflow: scroll;
    max-height: 305px;

    .mine {
      background-color: rgb(63, 63, 207);
      color: #fff;
      display: block;
      margin: 10px 0;
      width: 280px;
      float: left;
    }

    .theres {
      background-color: #080;
      color: #fff;
      display: block;
      margin: 10px 0;
      width: 280px;
      float: right;
    }
  }
}

.hidden {
  height: 45px;
}
</style>