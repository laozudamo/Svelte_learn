<script>
  const arr = [1, 2, 3, 4, 5, 6, 7]

  const arrb = [
    {
      name: 'jack',
      id: 9,
    },
    {
      name: 'lucy',
      id: 2,
    },
    {
      name: 'shelby',
      id: 3,
    },
  ]

  const arrc = []

  const obj = {
    name: 'jack',
    age: 18,
    phones: [
      {
        id: 1,
        name: '华为',
      },
      {
        id: 2,
        name: '苹果',
      },
      {
        id: 2,
        name: '小米',
      },
    ],
  }


</script>

<main>
  <!-- each进行遍历 -->
  {#each arr as item, i}
    <li>{item} _ {i}</li>
  {/each}

  <!-- 你也可以在 each 块中任意的使用解构和遍历 -->
  {#each arrb as { id, name }}
    <li>{name} -- {id}</li>
  {/each}

  <!-- 使用:else语句 -->
  {#each arrc as { id, name }}
    <li>{id}</li>
  {:else}
    <h5>没有数据</h5>
  {/each}
</main>

<style>
</style>
