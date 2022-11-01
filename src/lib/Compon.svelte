<script>
  import { createEventDispatcher } from 'svelte'
  const dispatch = createEventDispatcher()
  const passVal = () => {
    dispatch("passTheVal", 222)
  }

</script>

<h3>我是component里面的内容</h3>
<button on:click={passVal}>子传父</button>