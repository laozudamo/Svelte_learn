<script>

  export let title = '这是标题'

  let msg = '这是哈哈的组件'

  let num = 1

  $: document.title = title;

  // $: {
	// 	console.log(`the current title is ${title}`);
	// }
</script>

<div>
  <h3>哈哈哈</h3>
  <h4>{msg}</h4>

  <button on:click={() => num += 1}>{num}</button>

  {title}
</div>

<style>
</style>
