<template>
  <div class="hello">
      {{ msg }}
  </div>
  <TestButton :msg='msg'></TestButton>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import TestButton from 'vue3-lib/src/components/testbutton/index';

export default defineComponent({
  name: 'PrimeTest',
  components: {
      TestButton
  },
  data() {
      const msg = "Hello Prime";
      return {
          msg
      }
  }
});
</script>

<style scoped>
div.hello {
  color: #42b983;
}
</style>
