<template>
  <section>
    <h3>Counter: {{ counter }}</h3>
    <h3 data-testid="square-label">Square: {{ squareCounter }}</h3>
    <div>
      <button @click="counter++">+1</button>
      <button @click="counter--">-1</button>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { useCounter } from '../composables/UseCounter';
interface Props {
  value: number;
}
const props = defineProps<Props>();
const { counter, squareCounter } = useCounter(props.value);
</script>
<style scoped>
.btn {
  @apply p-5 bg-blue-500 rounded hover:bg-blue-700;
}
</style>
