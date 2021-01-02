<script>
  import Header from '../components/Header.svelte';

  export let segment;
</script>

<style>
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100%;
    min-height: 100vh;
  }

  main {
    flex: 1;
    position: relative;
    margin: 0 auto;
    max-width: 1400px;
    background-color: white;
    padding: 1em 2em;
    box-sizing: border-box;
    width: 100%;
    display: flex;
    flex-direction: column;
  }

  footer {
    color: #AAA;
    font-size: 1em;
    font-family: Rubik, sans-serif;
    margin: 1em auto;
    max-width: 1400px;
    padding: 1em 2em;
    text-align: center;
    width: 100%;
  }
</style>

<div class="layout">
  <Header {segment}/>

  <main>
    <slot></slot>
  </main>

  <footer>
    <span>
      &copy; {new Date().getFullYear()} Paul Gadi |
      <a href="https://outplay.games" target="_blank">OPGames</a> |
      <a href="https://game3js.com" target="_blank">game3.js</a> |
      <a href="https://kernel.community" target="_blank">🌱 KERNEL</a> |
      @polats on <a href="https://www.twitter.com/polats" target="_blank">twitter, </a>
      <a href="https://www.github.com/polats" target="_blank">github, </a>
      <a href="https://www.medium.com/polats" target="_blank">medium, </a>
      <a href="https://www.dev.to/polats" target="_blank">dev.to </a>
    </span>
  </footer>
</div>
