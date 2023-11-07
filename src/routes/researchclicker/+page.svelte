<script>
let clicks = 0;
let rppc = 1;
let rpps = 0;
let rppcUpgrades = 0;
let rppsUpgrades = 0;
let currentUpgrades = 0;
let scientistCost = 15;
let scientistrpps = 1;
let scientistAmount = 0;
let scientistUpgrades = 0;
let currentAchievements = 0;
let scientistrpccupgrades = 0;
let clickbonusupgrades = 0;
let clickbonuspercent = 0;
let clickbonus = rpps * clickbonuspercent;
let Totalrppc = rppc + clickbonus;
setInterval(function() {
  clicks += rpps
  clickbonus = rpps * clickbonuspercent / 100
  Totalrppc = Math.round(rppc + clickbonus)
},1000)
</script>

<a on:click={() => clicks += Totalrppc}><img src="/hammer.svg"/></a>
<a>{clicks} research points</a>
<a>You currently gain {Totalrppc} research point(s) per click.</a>
<a>You currently gain {rpps} research point(s) per second.</a>
<a>Your clicks gain {clickbonuspercent}% of your research points per second.</a>
<h1>Buildings and Workers</h1>
{#if clicks >= scientistCost}
    <a on:click={()=> {clicks -= scientistCost ; scientistAmount += 1 ; scientistCost = Math.round(scientistCost * 1.2); rpps += scientistrpps}}>Scientist - +{scientistrpps} research point(s) per second - {scientistCost} Research Points - You currently have {scientistAmount} scientist(s).</a>
    {:else}
    Scientist - +{scientistrpps} research point(s) per second - {scientistCost} Research Points - You currently have {scientistAmount} scientist(s).
{/if}

<h1>Upgrades ({currentUpgrades}/6 upgrades)</h1>
{#if clicks > 9999 && rppcUpgrades >= 1 && scientistrpccupgrades >= 1 && scientistAmount >= 20 && clickbonusupgrades == 0}
    <a on:click={()=> {clicks -= 10000 ; clickbonuspercent += 1 ; clickbonusupgrades += 1}}>Wool Beds - Beds made using wool from sheep. Gives +1% Click Bonus due to more comfortable living conditions. - 10k Research Points</a>
    {:else if rppcUpgrades >= 1 && scientistrpccupgrades >= 1 && scientistAmount >= 20}
        Wool Beds - Beds made using wool from sheep. Gives +1% Click Bonus due to more comfortable living conditions. - 10k Research Points
{/if}
<a></a>
{#if clicks > 4 && rppcUpgrades == 0}
    <a on:click={()=> {clicks -= 5 ; rppc += 1 ; rppcUpgrades += 1 ; currentUpgrades += 1}}>Stronger Hammers - +1 research point per click - 5 Research Points</a>
    {:else if rppcUpgrades == 0}
        Stronger Hammers - +1 research point per click - 5 Research Points
{/if}
<a></a>
{#if clicks > 2499 && rppcUpgrades > 0 && scientistAmount > 19 && scientistrpccupgrades == 0}
    <a on:click={()=> {clicks -= 2500 ; scientistrpccupgrades += 1 ; rppc += 10 ; currentUpgrades += 1 ; scientistrpps *= 2 ; rpps += scientistAmount * scientistrpps / 2}}>Better Tools - +10 research points per click, scientists give double research points per second - 2500 Research Points</a>
    {:else if rppcUpgrades > 0 && scientistAmount >19 && scientistrpccupgrades == 0}
        Better Tools - +10 research points per click, scientists give double research points per second - 2500 Research Points
{/if}
<a></a>
{#if scientistAmount > 4 && clicks > 49 && scientistUpgrades == 0}
    <a on:click={()=> {clicks -= 50 ; scientistUpgrades += 1 ; scientistrpps *= 2 ; currentUpgrades += 1; rpps += scientistAmount * scientistrpps / 2}}>Better Scientific Method - Scientists give one more research point per second - 50 Research Points</a>
    {:else if scientistAmount > 4 && scientistUpgrades == 0}
        Better Scientific Method - Scientists give double research points per second - 50 Research Points
{/if}
<a></a>
{#if scientistAmount > 9 && clicks > 499 && scientistUpgrades == 1}
    <a on:click={()=> {clicks -= 500 ; scientistUpgrades += 1 ; scientistrpps *= 2 ; currentUpgrades += 1; rpps += scientistAmount * scientistrpps / 2}}>Wooden Armor - Scientists are protected from the environment, giving double the research points per second - 500 Research Points</a>
    {:else if scientistAmount > 9 && scientistUpgrades == 1}
        Wooden Armor - Scientists are protected from the environment, giving double the research points per second - 500 Research Points
{/if}
<a></a>
{#if scientistAmount > 14 && clicks > 999 && scientistUpgrades == 2}
    <a on:click={()=> {clicks -= 1000 ; scientistUpgrades += 1 ; scientistrpps *= 2 ; rpps += scientistAmount * scientistrpps / 2; currentUpgrades += 1}}>Smarter Scientists - Scientists gain double research points per second - 1000 Research Points</a>
    {:else if scientistAmount > 14 && scientistUpgrades == 2}
        Smarter Scientists - Scientists gain double research points per second - 1000 Research Points
{/if}
<a></a>
<h1>Achievements</h1>
{#if scientistAmount > 9}
    Science Team - You have hired at least 10 scientists.
{/if}
<a></a>
{#if scientistAmount > 499}
    The Science Guy - You have hired at least 500 scientists.
{/if}
<a></a>
