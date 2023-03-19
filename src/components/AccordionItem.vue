<template>
    <div class="accordion-item">
      <button @click="isOpen = !isOpen">{{ title }}</button>
      <div v-show="isOpen">
        <slot></slot>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AccordionItem',
    props: {
      title: {
        type: String,
        required: true,
      },
      isOpen: {
        type: Boolean,
        default: false,
      },
    },
  };
  </script>
  
  <style scoped>
    .accordion-item {
        color: black;
    }

  .accordion-item button {
    background-color: white;
    border: solid grey;
    margin: auto;
    padding: 10px 0;
    width: 50%;
    cursor: pointer;
    color: black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .accordion-item button:focus {
    outline: none;
  }
  </style>
  