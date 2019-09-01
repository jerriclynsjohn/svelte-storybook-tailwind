<script>
	import Nav from './components/nav.svelte';
	let menuItems = [
		{link: "#", name: "Docs"},
		{link: "#", name: "Home"},
		{link: "#", name: "Blog"}
	];
</script>

<Nav menuItems="{menuItems}"/>