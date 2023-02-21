<script>
    import Header from '../sections/Header.svelte';
    import Footer from '../sections/Footer.svelte';

    import Body from '../sections/Body.svelte';
    import Graphics from '../sections/Graphics.svelte';

    import Container from '../utilities/Container.svelte';
</script>

<main class="flex h-auto flex-col justify-between bg-svelte-50 md:h-screen">
    <Header />
    <Container>
        <div class="flex flex-col justify-between gap-8 py-8 md:flex-row md:gap-0 md:py-0">
            <Body />
            <Graphics />
        </div>
    </Container>
    <Footer />
</main>
