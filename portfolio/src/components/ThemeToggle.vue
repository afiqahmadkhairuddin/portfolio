<template>
    <div class="control">
    <label class="switch is-medium">
      <input type="checkbox" @change="toggleTheme">
      <span class="check"></span>
    </label>
  </div>
</template>
  
  <script>
  export default {
    data() {
      return {
        theme: localStorage.getItem('theme') || 'light',
      };
    },
    mounted() {
      document.documentElement.setAttribute('data-theme', this.theme);
    },
    methods: {
      toggleTheme() {
        this.theme = this.theme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', this.theme);
        localStorage.setItem('theme', this.theme);
      },
    },
  };
  </script>
  