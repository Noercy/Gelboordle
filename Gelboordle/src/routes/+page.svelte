<script>
	import Counter from './Counter.svelte';
	import RandomImage from './RandomImage.svelte';
	import TagInput from './TagInput.svelte';
</script>

<svelte:head>
	<title>Home</title>
	<meta name="description" content="Svelte demo app" />
</svelte:head>
<h1>Geelbordle</h1>
<section>
	
	<RandomImage />
	<div class="TagInput">
		<TagInput />
	</div>
	
	
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		flex: 0.6;
	}

	h1 {
		width: 100%;
	}

	.TagInput {
		padding: 5em;
	}


</style>
