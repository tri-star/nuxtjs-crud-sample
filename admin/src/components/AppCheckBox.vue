<script setup lang="ts">
import { reactive } from 'vue'

const props = withDefaults(
  defineProps<{
    checked?: boolean
  }>(),
  {
    checked: false,
  }
)

const { checked } = reactive(props)

const emits = defineEmits<{
  (e: 'update:checked', checked: boolean): void
}>()

const handleChanged = (e: Event) => {
  emits('update:checked', (e.target as HTMLInputElement).checked)
}
</script>

<template>
  <div class="container">
    <label class="checkbox">
      <input
        class="real-checkbox"
        type="checkbox"
        :checked="checked"
        @change="handleChanged($event)"
      />
      <span class="check-mark">
        <i class="material-icons icon">check</i>
      </span>
    </label>
  </div>
</template>

<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}

.checkbox {
  display: inline-block;
  width: 20px;
  height: 20px;
  position: relative;
}
.real-checkbox {
  /* display: none; */
  position: absolute;
  opacity: 0;
  display: inline;
}
.check-mark {
  @apply border border-main-content-border;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: inline-block;
  border-radius: 5px;
  background: theme('colors.main.content-bg');
  width: 20px;
  height: 20px;
  cursor: pointer;
  transition: background-color 0.5s ease;
  box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
}
.check-mark i.icon {
  opacity: 0.2;
  font-size: 16px;
  color: transparent;
  transition: opacity 0.3s 0.1s ease;
}
.check-mark:hover {
  background-color: color-mix(
    in srgb,
    theme('colors.secondary.main03'),
    white 80%
  );
}
.real-checkbox:checked + .check-mark {
  animation: check 0.3s cubic-bezier(0.895, 0.03, 0.685, 0.22) forwards;
}
.real-checkbox:checked + .check-mark .icon {
  opacity: 1;
  transform: scale(0);
  color: color-mix(in srgb, theme('colors.secondary.main03'), black 80%);
  animation: icon 0.4s cubic-bezier(1, 0.008, 0.565, 1.65) 0.1s 1 forwards;
}

.real-checkbox:focus + .check-mark {
  outline: 2px solid
    color-mix(in srgb, theme('colors.main.content-border'), white 50%);
}

@keyframes icon {
  from {
    opacity: 0;
    transform: scale(0.3);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes check {
  0% {
    width: 18px;
    height: 18px;
  }
  10% {
    width: 18px;
    height: 18px;
    /* opacity: 0.1; */
    /* background: rgba(0, 0, 0, 0.2); */
    /* border-width: 15px; */
    box-shadow: 0 1px 1px rgba(0, 0, 0, 0.25);
  }
  12% {
    width: 18px;
    height: 18px;
    /* opacity: 0.4; */
    /* background: rgba(0, 0, 0, 0.1); */
  }
  50% {
    width: 22px;
    height: 22px;
    /* background: #00d478; */
    /* opacity: 0.6; */
  }
  100% {
    width: 20px;
    height: 20px;
    background: color-mix(in srgb, theme('colors.secondary.main03'), white 50%);
    /* opacity: 1; */
    box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  }
}
</style>
