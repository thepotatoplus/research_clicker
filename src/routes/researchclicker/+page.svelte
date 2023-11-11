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
        upgrade_test: new Factory(
            "UpgradeTest",
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
            causeUpdate,
            true
        ),
    };
</script>

<h1>You are in the {technologicalProgression} Age</h1>
<a
    on:click={() => {
        currencies.research.click();
    }}><img src="/hammer.svg" /></a
>
{#each Object.values(currencies) as currency}
    <CurrencyItem {currency} />
{/each}

{#each Object.values(upgrades) as upgrade}
    <FactoryItem factory={upgrade} {currencies} />
{/each}
