<script>
    let technologicalProgression = "Stone";

    import { Currency, Factory } from "$lib/clicker.js";
    import CurrencyItem from "$lib/CurrencyItem.svelte";
    import FactoryItem from "$lib/FactoryItem.svelte";

    let causeUpdate = () => {
        currencies = { ...currencies };
        upgrades = { ...upgrades };
    };

    let currencies = {
        research: new Currency("TECH", causeUpdate, "research"),
        stone: new Currency("ROCK", causeUpdate, "stone"),
        wood: new Currency("WOOD", causeUpdate, "wood"),
        land: new Currency("LAND", causeUpdate, "land"),
        dirt: new Currency("DIRT", causeUpdate, "dirt"),
    };

    currencies.research.perClick = 1;
    currencies.stone.delay = 3000;

    let upgrades = {
        scientist: new Factory(
            "Scientist",
            {
                research: 15,
            },
            {
                research: {
                    perClick: 0,
                    delay: 1,
                    perDelay: 1,
                },
            },
            1.1,
            causeUpdate
        ),
        miner: new Factory(
            "Miner",
            {
                stone: 10,
            },
            {
                stone: {
                    perClick: 0,
                    delay: 1,
                    perDelay: 1,
                },
            },
            1.1,
            causeUpdate
        ),
        rockfinding: new Factory(
            "Rock Finding",
            {
                research: 15,
            },
            {
                stone: {
                    perClick: 0.1,
                    delay: 1,
                    perDelay: 0,
                },
            },
            1.1,
            causeUpdate,
            true
        ),
        stonetools: new Factory(
            "Stone Tools",
            {
                research: 100,
                stone: 50,
            },
            {
                stone: {
                    perClick: 0.1,
                    delay: 1,
                    perDelay: 0,
                },
            },
            1.1,
            causeUpdate,
            true
        ),
    };
</script>

<h1>{technologicalProgression} Age</h1>
<a
    on:click={() => {
        for (let currency in currencies) {
            currencies[currency].click();
        }
    }}><img src="/research.svg" /></a
>
<p>Click to <b>Research</b></p>

<section class="row">
    {#each Object.values(currencies) as currency}
        <CurrencyItem {currency} />
    {/each}
</section>

{#each Object.values(upgrades) as upgrade}
    <FactoryItem factory={upgrade} {currencies} />
{/each}
