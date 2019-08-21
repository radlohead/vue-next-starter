<template>
  <section class="container">
    <h1>about page</h1>
  </section>
</template>
<script>
export default {
  asyncData() {
    console.log(process.server); // false이면 csr이라는 의미
  },
  head() {
    return {
      title: "커스텀 타이틀",
      meta: [
        { hid: "유니크한 아이디", name: "설명", content: "내가 커스텀한 설명" }
      ]
    };
  }
};
</script>