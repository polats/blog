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

	<!-- Facebook Meta Tags -->
	<meta property="og:url" content="https://polats.com">
	<meta property="og:type" content="website">
	<meta property="og:title" content="@polats (Paul Gadi)">
	<meta property="og:description" content="Writing on Web 3.0 Game Development">
	<meta property="og:image" content="https://polats.com/blog/gamingguild.jpg">
	
	<!-- Twitter Meta Tags -->
	<meta name="twitter:card" content="summary_large_image">
	<meta property="twitter:domain" content="polats.com">
	<meta property="twitter:url" content="https://polats.com">
	<meta name="twitter:title" content="@polats (Paul Gadi)">
	<meta name="twitter:description" content="Writing on Web 3.0 Game Development">
	<meta name="twitter:image" content="https://polats.com/blog/gamingguild.jpg">

</svelte:head>

<div class="container">
  <h2>👋 Hi, I'm Paul.</h2>
  <figure>
    <img src='paul-about.jpg' alt='About Pic'>
  </figure>
  <p>Thanks for checking out the site!</p>
  <p>I started out as a mobile game developer during a time when there were no app stores, we used Java MIDP to make them, and they had to be less than 64kb :D 
  <p>I've started up and joined a few other game companies since then.  I'm currently the CTO of 
  <a href="https://outplay.games/" target="_blank">OPGames</a>, an open-source game platform company building tools to help game developers
  navigate this new landscape called <a href="https://kernel.community/module-3/lock-it-open/" target="_blank">Web 3.0.</a></p>

  <p>I'm a <a href="https://kernel.community/" target="_blank">KERNEL</a>
  <a href="https://gitcoin.co/blog/announcing-kernel/" target="_blank">Genesis Block</a> Fellow, currently leading the 
  <a href="https://web3.gg/" target="_blank">Gaming Guild</a>. KERNEL has taught me that it’s our responsibility 
  to understand the social and economic effects of the systems that we create. 
  Knowing this, we should strive to build games that will benefit the world.
  </p>

  Site powered by <a href="https://sapper.svelte.dev" target="_blank">Sapper</a>.
  Template by <a href="https://github.com/Charca/sapper-blog-template" target="_blank">Maxi Ferreira</a>.

</div>
