<script>
  export let todos
  export const focus = () => headingEl.focus()

  let headingEl

  $: totalTodos = todos.length
  $: completedTodos = todos.filter(todo => todo.completed).length
</script>

<h2 id="list-heading" bind:this={headingEl} tabindex="-1">{completedTodos} out of {totalTodos} items completed</h2>