<script>
  // @ts-nocheck

  const isShow = true

  const id = 2

  const num = 4
</script>

<div>
  {isShow ? 'show' : 'hide'}

  {#if id === 3}
    <h3>id等于3</h3>
  {:else}
    <h4>id不等于3</h4>
  {/if}

  <!-- {#if expression}...{:else if expression}...{/if} -->
  {#if num < 5}
    <div>num小于 5</div>
  {:else if num < 8}
    <div>num 大于5 小于8</div>
  {:else}
    <div>num > 8</div>
  {/if}
</div>

<style>
</style>
