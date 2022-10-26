<script>
  import Test from './lib/Test.svelte'
  import List from './lib/List.svelte'
  import IF from './lib/IF.svelte'
  import Ht from './lib/HT.svelte'
  import Children from './lib/Children.svelte'
  import Father from './lib/Father.svelte'

  const user = {
    name: 'jack',
    age: 18,
    sex: '男',
  }
  let jack ="212"
</script>

<main>
  <h3>嘻嘻嘻</h3>
  <!-- props传递参数 -->
  <!-- <Test answer={'这是传递的值'}></Test>
  <Test /> -->

  <List />

  <!-- <IF></IF> -->

  <!-- <Ht></Ht> -->

  <!-- <Children {...user} /> -->

  <!-- <Father bind:jack /> -->
</main>

<style>
</style>
