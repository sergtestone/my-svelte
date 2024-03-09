<svelte:head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@100;300;400;500;700;900&display=swap" rel="stylesheet">
</svelte:head>  

<script>
    import Navbar from '$lib/components/Navbar.svelte';
    import Footer from '$lib/components/Footer.svelte';
    import '../app.css';
</script>

<div class="layout">
    <Navbar />
        <div class="main">
            <slot />
        </div>
    <Footer />
</div>

<style>
    .main{
        min-height: 100vh;
    }
</style>