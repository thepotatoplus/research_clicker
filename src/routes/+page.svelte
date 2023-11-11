<script>
    import Button from "$lib/Button.svelte";
</script>

<section class="left">
    <h1 class="row">
        <img src="/potatoplusplus.svg" alt='icon' /> 
        <p>Welcome to Potato++</p>
    </h1>
    <p>
        Potato++ is a website where two brothers make games and put them here so people can
        play them.
    </p>
    <h1>Games</h1>
    <section class='row'>
        <Button href='researchclicker' content='Research Clicker' icon='/research.svg' />
    </section>
    <h1>Credits</h1>
    <section class='row'>
        <Button href='https://github.com/thepotatoplus' content='Torin' />
        <Button href='https://github.com/dravenmonti' content='Draven' />
        <Button href='https://github.com/dravenmonti/ppp' content='Source Code' />
    </section>

</section>
