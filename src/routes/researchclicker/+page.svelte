<script>
    const technologicalProgression = "Stone";

    import { Currency, Factory } from "$lib/clicker.js";
    import CurrencyItem from "$lib/CurrencyItem.svelte";
    import FactoryItem from "$lib/FactoryItem.svelte";

    let causeUpdate = () => {
        currencies = { ...currencies };
        upgrades = { ...upgrades };
    };

    let currencies = {
        stone: new Currency("Stone", causeUpdate),
        wood: new Currency("Wood", causeUpdate),
        research: new Currency("Research", causeUpdate),
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
                    perClick: 1,
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
                research: 15,
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
    };
</script>

<h1>You are in the {technologicalProgression} Age</h1>
<a
    on:click={() => {
        for (let currency in currencies) {
            currencies[currency].click();
        }
    }}><img src="/hammer.svg" /></a
>
{#each Object.values(currencies) as currency}
    <CurrencyItem {currency} />
{/each}

{#each Object.values(upgrades) as upgrade}
    <FactoryItem factory={upgrade} {currencies} />
{/each}
