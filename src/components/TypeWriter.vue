<template>
  <p class="text-2xl text-primary font-bold mb-3 mt-2">
    I'm a {{ state.text }}
  </p>
</template>

<script setup lang="ts">
import { reactive } from 'vue';


const props = withDefaults(
  defineProps<{
    data: Array<string>;
    start?: number;
    enter?: number;
    end?: number;
    leave?: number;
  }>(),
  {
    data: () => [],
    start: 1000,
    enter: 100,
    end: 1800,
    leave: 50,
  },
);
const state = reactive({ text: '', complete: false, index: 0 });
addText();
function addText() {
  if (state.text.length < props.data[state.index].length && !state.complete) {
    state.text += props.data[state.index].charAt(state.text.length);
    setTimeout(addText, props.enter);
  }
  if (state.text.length === props.data[state.index].length) {
    state.complete = true;
    setTimeout(removeText, props.end);
  }
}
function removeText() {
  if (state.text.length > 0) {
    const t = state.text.split('');
    t.pop();
    state.text = t.join('');
    setTimeout(removeText, props.leave);
  }
  if (state.text.length === 0 && state.complete) {
    state.complete = false;
    if (state.index === props.data.length - 1) {
      state.index = 0;
    } else {
      state.index++;
    }
    setTimeout(addText, props.start);
  }
}


</script>

<style scoped></style>