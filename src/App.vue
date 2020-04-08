<template>
  <div id="app">
    <ChatBox v-if="show" :hide="hide" :messages="messages" :me="me" :my-friend="myFriend" />
    <ChatList />
  </div>
</template>

<script>
import ChatList from "./components/ChatList.vue";
import ChatBox from "./components/ChatBox.vue";
import messages from "./data/messages";
import users from "./data/users";

export default {
  name: "App",
  components: {
    ChatList,
    ChatBox
  },
  data() {
    return {
      messages,
      show: true,
      hide: true
    };
  },
  computed: {
    me() {
      return users[0];
    },
    myFriend() {
      return users[1];
    }
  },
  mounted() {
    const chatbox = JSON.parse(localStorage.getItem("chatbox"));
    if (chatbox) {
      this.hide = chatbox.hide;
    }
  }
};
</script>

<style scoped lang="scss">
#app {
  margin: 0;
  padding: 0;
}
</style>
