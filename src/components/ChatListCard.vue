<template>
  <div class="chat-list-card">
    <b>{{chat.name}}</b>
    <p>{{chat.last_message}}</p>
    <span>{{chat.last_message_at}}</span>
  </div>
</template>

<script>
export default {
  props: {
    chat: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.chat-list-card {
  border: 1px solid #ccc;
}
</style>