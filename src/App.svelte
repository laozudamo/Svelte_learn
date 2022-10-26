<script>
  // import { each } from 'svelte/internal'
  // import Counter from './lib/Counter.svelte'
  import Test from './lib/Test.svelte'
  // import { onMount, beforeUpdate, tick, setContext, afterUpdate, onDestroy } from 'svelte'

  // let disabled = true

  // onMount(() => {
  //   console.log('the component has mounted')
  // })

  // beforeUpdate(async () => {
	// 	console.log('the component is about to update');
	// 	await tick();
	// 	console.log('the component just updated');
	// });

  // const list = [
  //   {
  //     name: 'jack',
  //     id: '1',
  //   },
  //   {
  //     name: 'marry',
  //     id: '2',
  //   },
  //   {
  //     name: 'lucy',
  //     id: '3',
  //   },
  // ]

  // function clickBtn() {
  //   console.log('这是渲染的按钮')
  // }

  // function hoverThing() {
  //   console.log('触发hoverThing')
  // }

  // let age = 100

  // const todos = [
  //   {
  //     name: 'as',
  //     id: 1,
  //   },
  //   {
  //     name: 'ts',
  //     id: 1,
  //   },
  //   {
  //     name: 'asd',
  //   },
  // ]

  // let string = `here's some <strong>HTML!!!</strong>`;
</script>

<main>

  <!-- props传递参数 -->
  <Test answer={'这是传递的值'}></Test>
  <Test />


  <!-- {@html string} -->
  <!-- <Test tyepe={disabled} answer={42} />
  <h3>不是要为爱情奋不顾身;</h3>

  <h1>这是循环的样例</h1>
  {#each list as item, i}
    <li>名字:{item.name} ID:{item.id} 索引{i}</li>
  {/each}

  {#if disabled}
    <button on:click={clickBtn}> 这是条件渲染的按钮</button>
  {/if}

  {#if disabled}
    <p>too hot!</p>
  {/if}

  <div class="card">
    <Counter />
  </div>

  {#if age < 40}
    <p>小于40</p>
  {:else if age < 80}
    <p>小于80</p>
  {:else}
    <p>大于80</p>
  {/if}

  {#each todos as item, i}
    {item.id}
  {:else}
    <p>jack</p>
  {/each}

  <div on:focus={hoverThing}>
    触发HOVER事件
  </div> -->


</main>

<style>
</style>
