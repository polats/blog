<style>
  figure {
    float: right;
    margin: -3em -7em 2em 2em;
    max-width: 400px;
  }

  figure img {
    border-radius: 8px;
  }

  @media (max-width: 1020px) {
    figure {
      float: none;
      margin: 0 auto 2em;
    }
  }
</style>

<svelte:head>
  <title>About</title>
</svelte:head>

<div class="container">
  <h2>👋 Hi, I'm Paul.</h2>
  <figure>
    <img src='paul-about.jpg' alt='About Pic'>
  </figure>
  <p>Thanks for checking out the site!</p>
  <p>I started out as a mobile game developer during a time when there were no app stores, we used Java MIDP to make them, and they had to be less than 64kb :D 
  <p>I've started and joined a few other game companies since then. Currently I'm CTO of 
  <a href="https://outplay.games/" target="_blank">OPGames</a>, an open-source game platform company building tools for game developers to 
  navigate this new landscape called <a href="https://kernel.community/module-3/lock-it-open/" target="_blank">Web 3.0.</a></p>

  <p>I'm a <a href="https://kernel.community/" target="_blank">KERNEL</a>
  <a href="https://gitcoin.co/blog/announcing-kernel/" target="_blank">Genesis Block</a> Fellow, currently leading the 
  <a href="https://web3.gg/" target="_blank">Gaming Guild</a>. KERNEL has taught me that it’s our responsibility 
  to understand the social and economic effects of the systems that we create. 
  Knowing this, I hope to help create games that will benefit the world.
  </p>

  Powered by <a href="https://sapper.svelte.dev" target="_blank">Sapper</a>.
  Template by <a href="https://github.com/Charca/sapper-blog-template" target="_blank">Maxi Ferreira</a>.

</div>
