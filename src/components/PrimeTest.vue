<template>
  <div class="hello">
      {{ message }}
  </div>
  <TestButton :msg="message" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { TestButton } from 'vue3-lib/src/components/testbutton/index';

export default defineComponent({
  name: 'PrimeTest',
  components: {
      TestButton
  },
  data() {
      const message = "Hello Prime";
      return {
          message
      }
  }
});
</script>

<style scoped>
div.hello {
  color: #42b983;
}
</style>
