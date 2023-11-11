<script>
    export let factory = {};
    export let currencies = {};

    let costs = '';
    $: {
        if (factory.costs) {
            costs = Object.entries(factory.costs).map(x => x.join(': ')).join(', ')
        }
    }

</script>

<style>
    a {
        text-decoration: none;
    }
</style>

<a href="#" on:click={() => factory.buy(currencies)}>
    {factory.amount}x {factory.name} (<b>COSTS</b> | {costs}) {factory.canUse ? '' : '(LOCKED)'}
</a>
