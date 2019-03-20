<template>
  <div class="leads-container">
    <div class="leads-text">Content</div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component
export default class Leads extends Vue {
  get name() {
    return 'User Name';
  }

  get roles() {
    return 'User Role';
  }
}
</script>

<style lang="scss" scoped>
.leads {
  &-container {
    margin: 30px;
  }

  &-text {
    font-size: 30px;
    line-height: 46px;
  }
}
</style>
