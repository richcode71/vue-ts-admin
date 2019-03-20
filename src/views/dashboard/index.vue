<template>
  <div class="dashboard-container">
    <div class="dashboard-text">Content</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Dashboard extends Vue {
  get name() {
    return 'User Name';
  }

  get roles() {
    return 'User Role';
  }
}
</script>

<style lang="scss" scoped>
.dashboard {
  &-container {
    margin: 30px;
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
