<script>
    const technologicalProgression = "Stone";

    import { Currency, Factory } from "$lib/clicker.js";
    import CurrencyItem from "$lib/CurrencyItem.svelte";

    let causeUpdate = () => {
        currencies = {...currencies};
    }

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
            [
                {
                    perClick: 0,
                    perDelay: 1,
                    rate: 0,
                },
            ]
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
    <CurrencyItem currency={currency}>
        {currency.amount}x {currency.name} ({currency.perClick} / click) ({currency.perDelay}
        / {currency.delay / 1000} sec)
    </CurrencyItem>
{/each}
