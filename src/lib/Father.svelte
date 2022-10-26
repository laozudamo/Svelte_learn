<script>
  let name = ''
  let selected = 'a'
</script>

<div>
  <input type="number" bind:value={name} />
  输入的值是{name}

  <select bind:value={selected}>
    <option value="a">a</option>
    <option value="b">b</option>
    <option value="c">c</option>
  </select>
</div>
