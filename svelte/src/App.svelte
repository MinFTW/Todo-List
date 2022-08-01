<script>
  import Todos from './lib/Todos.svelte'
  import Alert from './lib/Alert.svelte'
  import { todos } from './stores.js'
</script>

<Alert />
<Todos bind:todos={$todos} />
