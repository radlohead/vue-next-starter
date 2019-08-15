<template>
  <section class="container">
    <h1>about page</h1>
  </section>
</template>
<script>
export default {
  asyncData() {
    console.log(process.server); // false이면 csr이라는 의미
  }
};
</script>