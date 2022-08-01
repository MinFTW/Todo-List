<script lang="ts">
  import type { TodoType } from "../types/todo.type";
  export let todos: TodoType[];
  export const focus = () => headingEl.focus()

  let headingEl: HTMLElement

  $: totalTodos = todos.length
  $: completedTodos = todos.filter(todo => todo.completed).length
</script>

<h2 id="list-heading" bind:this={headingEl} tabindex="{-1}">{completedTodos} out of {totalTodos} items completed</h2>