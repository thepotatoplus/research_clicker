<script>
let clicks = 0;
let rppc = 1;
let rppcUpgrades = 0
</script>
<a on:click={() => clicks += rppc}><img src="/hammer.svg"/></a>
<a>{clicks} research points</a>
<a>You currently gain {rppc} research points per click.</a>
<h1>Upgrades</h1>
{#if clicks > 4 && rppcUpgrades == 0}
    <a on:click={()=> {clicks -= 5 ; rppc += 1 ; rppcUpgrades = 1}}>Stronger Hammers - +1 research point per click - 5 Research Points</a>
    {:else if rppcUpgrades == 0}
        Stronger Hammers - +1 research point per click - 5 Research Points
{/if}