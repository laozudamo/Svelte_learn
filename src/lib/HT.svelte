<script>
  const string = `<h3>这是插入的HTML</h3>`

  const user = {
    name: 'jack',
    age: 18,
  }

  let num = 2

  function changeName() {
    user.name = '王杰克'
  }

  function hoverThing() {
    console.log('hoverThing')
  }

  function focusThing() {
    console.log('focusThing')
  }

  function mouseEnter() {
    console.log('mouseEnter')
  }

  function mouseLeave() {
    console.log('mouseLeave')
  }
  function dblclick() {
    console.log('dblclick')
  }
</script>

<!-- {@debug num} -->

<div>
  {@html string}
  <h1>Hello {user.name}! 年龄: {user.age}</h1>

  <button on:click={changeName}>改变用户的名字</button>
  <button on:click={() => (num += 1)}>{num}</button>

  <div>Hover</div>

  <div
    style="background-color:pink; height: 300px; width: 300px"
    on:mouseleave={mouseLeave}
    on:mouseenter={mouseEnter}
    on:dblclick={dblclick}
  >
    hello
  </div>
  <!-- 使用 on:指令来监听DOM事件。 -->
</div>
