<script context="module">
import Bio from "../components/Bio.svelte"

  export function preload({ params, query }) {
    return this.fetch(`blog.json`).then(r => r.json()).then(posts => {
      return { posts };
    });
  }
</script>

<script>
  export let posts;
</script>

<style>
  h2,
  .post-item-footer {
    font-family: Rubik, sans-serif;
    font-weight: 700;
  }

  .post-item-date {
    color: #AAA;
    text-align: left;
    text-transform: uppercase;
    margin-right: 16px;
  }

  hr {
    margin: 60px auto;
  }
</style>

<svelte:head>
  <title>@polats (Paul Gadi)</title>

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
  {#each posts as post, index}
    {#if index}
      <hr />
    {/if}
    <div class="post-item">
      <h2>
        <a rel='prefetch' href='blog/{post.slug}'>
          {post.title}
            {#if post.image}
            <p>
            <img src={post.image} alt={post.image} />
            </p>
            {/if}
        </a>
      </h2>
      <p>{post.excerpt}</p>
      <div class="post-item-footer">
        <span class="post-item-date">— {post.printDate}</span>
      </div>
    </div>
  {/each}
</div>
