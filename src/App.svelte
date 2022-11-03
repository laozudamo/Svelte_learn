<script>
  import Test from './lib/Test.svelte'
  import List from './lib/List.svelte'
  import IF from './lib/IF.svelte'
  import Ht from './lib/HT.svelte'
  import Children from './lib/Children.svelte'
  import Father from './lib/Father.svelte'
  import Action from './lib/Action.svelte'
  import Hoverable from './lib/Slot.svelte'
  import Compon from './lib/Compon.svelte'
  // const user = {
  //   name: 'jack',
  //   age: 18,
  //   sex: '男',
  // }
  // let jack ="212"
  let i = 3
  let pro = '222'
  console.log(pro)

  function getVal(v) {
    console.log(v.detail)
    console.log(v)
  }

  import UseStore from './lib/useStore.svelte'
</script>

<main>
  <!-- <h3>嘻嘻嘻</h3> -->
  <!-- props传递参数 -->
  <!-- <Test answer={'这是传递的值'}></Test>
  <Test /> -->

  <!-- <List /> -->

  <!-- <IF></IF> -->

  <!-- <Ht></Ht> -->

  <!-- <Children {...user} /> -->

  <!-- <Father bind:jack /> -->
  <!-- <button on:click={() => (i += 1)}>{i}</button> -->

  <!-- <Action bar={i} /> -->

  <!-- 测试向插槽传入参数 -->

  <!-- <Hoverable let:hovering={active}>
    <div class:active>console.log(active)</div>
  </Hoverable>

  <Compon on:passTheVal={getVal}></Compon> -->


  <!-- store的使用 -->
  <UseStore></UseStore>
</main>

<style>
</style>
