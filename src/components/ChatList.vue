<template>
  <div class="chat-list">
    <ChatListCard v-for="chat in chats" :key="chat.id" :chat="chat" />
  </div>
</template>

<script>
import ChatListCard from "./ChatListCard";
import chats from "../data/chatList";

export default {
  components: {
    ChatListCard
  },
  data() {
    return {
      chats
    };
  }
};
</script>

<style scoped lang="scss">
.chat-list {
  background-color: rgb(228, 249, 255);
  width: 250px;
  border: 1px solid #ccc;
  height: 100vh;
  float: right;
}
</style>