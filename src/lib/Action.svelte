<script>
  import { onMount } from 'svelte'
  import { elasticOut} from 'svelte/easing'
  export let bar
  function theAction(node, bar) {
    console.log(node)
    return {
      destroy() {
        console.log('移除')
        // node已从DOM中移除
      },

      update(bar) {
        console.log('更新', bar)
        // `bar` 已发生变更
      },
    }
  }

  function handleKeydown(event) {
		console.log(`pressed the ${event.key} key`);
	}

  function whoosh(node, params) {
    const existingTransform = getComputedStyle(node).transform.replace(
      'none',
      ''
    )
    return {
      delay: params.delay || 0,
      duration: params.duration || 400,
      easing: params.easing || elasticOut,
      css: (t, u) => `transform: ${existingTransform} scale(${t})`,
    }
  }

  let visible = true
</script>
<div>
  <button use:theAction={bar} on:click={() => visible = !visible }>{visible}</button>
  {#if visible}
    <div in:whoosh>fades in and out</div>
  {/if}
</div>

<svelte:window on:keydown={handleKeydown}/>

