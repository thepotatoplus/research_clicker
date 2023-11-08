<script>
let researchpoints = 1000000;
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

let wood = 10000;
let woodUnlocked = 0;
let wps = 0;
let wooddelay = 10;
let woodperdelay = 0;
let lumberjackCost = 3;
let lumberjackAmount = 0;
let lumberjackwoodperdelay = 1;
let lumberjackUpgrades = 0;

setInterval(function() {
  researchpoints += rpps
  clickbonus = rpps * clickbonuspercent / 100
  Totalrppc = Math.round(rppc + clickbonus)
  wps = woodperdelay / wooddelay
},1000)

setInterval(function() {
    wood += woodperdelay
},wooddelay * 1000)
</script>

<a on:click={() => researchpoints += Totalrppc}><img src="/hammer.svg"/></a>
<a>{researchpoints} research points</a>
<a>You currently gain {Totalrppc} research point(s) per click.</a>
<a>You currently gain {rpps} research point(s) per second.</a>
<a>Your clicks gain {clickbonuspercent}% of your research points per second.</a>
<h1>Resources</h1>
{#if woodUnlocked == 1}
    <a>{wood} wood | {wps} wood/second ({woodperdelay} wood/{wooddelay} second(s))</a>
{/if}
<h1>Buildings and Workers</h1>
<h2>Research</h2>
{#if researchpoints >= scientistCost}
    <a on:click={()=> {researchpoints -= scientistCost ; scientistAmount += 1 ; scientistCost = Math.round(scientistCost * 1.2); rpps += scientistrpps}}>Scientist - +{scientistrpps} research point(s) per second - {scientistCost} Research Points - You currently have {scientistAmount} scientist(s).</a>
    {:else}
    Scientist - +{scientistrpps} research point(s) per second - {scientistCost} Research Points - You currently have {scientistAmount} scientist(s).
{/if}
{#if woodUnlocked == 1}
    <h2>Wood</h2>
    {#if wood >= lumberjackCost}
        <a on:click={()=> {wood -= lumberjackCost ; lumberjackAmount += 1 ; lumberjackCost = Math.round(lumberjackCost * 1.2); woodperdelay += lumberjackwoodperdelay}}>Lumberjack - +{lumberjackwoodperdelay} wood per {wooddelay} seconds - {lumberjackCost} wood - You currently have {lumberjackAmount} lumberjack(s).</a>
        {:else}
        Lumberjack - +{lumberjackwoodperdelay} wood per {wooddelay} seconds - {lumberjackCost} wood - You currently have {lumberjackAmount} lumberjack(s).
    {/if}
{/if}

<h1>Technologies ({currentUpgrades}/7 technologies)</h1>
{#if researchpoints > 9999 && rppcUpgrades >= 1 && scientistrpccupgrades >= 1 && wood >= 250 && scientistAmount >= 20 && clickbonusupgrades == 0}
    <a on:click={()=> {researchpoints -= 10000 ; clickbonuspercent += 1 ; wood -= 250 ; clickbonusupgrades += 1}}>Wool Beds - Beds made using wool from sheep. Gives +1% Click Bonus due to more comfortable living conditions. - 10k Research Points, 250 Wood</a>
    {:else if rppcUpgrades >= 1 && scientistrpccupgrades >= 1 && scientistAmount >= 20 && clickbonusupgrades == 0}
        Wool Beds - Beds made using wool from sheep. Gives +1% Click Bonus due to more comfortable living conditions. - 10k Research Points, 250 Wood
{/if}
<a></a>
{#if researchpoints > 4 && rppcUpgrades == 0}
    <a on:click={()=> {researchpoints -= 5 ; rppc += 1 ; rppcUpgrades += 1 ; currentUpgrades += 1}}>Stronger Hammers - +1 research point per click - 5 Research Points</a>
    {:else if rppcUpgrades == 0}
        Stronger Hammers - +1 research point per click - 5 Research Points
{/if}
<a></a>
{#if researchpoints > 2499 && rppcUpgrades > 0 && scientistAmount > 19 && scientistrpccupgrades == 0}
    <a on:click={()=> {researchpoints -= 2500 ; woodperdelay += 1 ; woodUnlocked = 1 ; scientistrpccupgrades += 1 ; rppc += 10 ; currentUpgrades += 1 ; scientistrpps *= 2 ; rpps += scientistAmount * scientistrpps / 2}}>Better Tools - +10 research points per click, scientists give double research points per second, unlocks wood harvesting - 2500 Research Points</a>
    {:else if rppcUpgrades > 0 && scientistAmount >19 && scientistrpccupgrades == 0}
        Better Tools - +10 research points per click, scientists give double research points per second, unlocks wood harvesting - 2500 Research Points
{/if}
<a></a>
{#if scientistAmount > 4 && researchpoints > 49 && scientistUpgrades == 0}
    <a on:click={()=> {researchpoints -= 50 ; scientistUpgrades += 1 ; scientistrpps *= 2 ; currentUpgrades += 1; rpps += scientistAmount * scientistrpps / 2}}>Better Scientific Method - Scientists give one more research point per second - 50 Research Points</a>
    {:else if scientistAmount > 4 && scientistUpgrades == 0}
        Better Scientific Method - Scientists give double research points per second - 50 Research Points
{/if}
<a></a>
{#if scientistAmount > 9 && researchpoints > 499 && scientistUpgrades == 1 && wood >= 50}
    <a on:click={()=> {researchpoints -= 500 ; wood -= 50 ; scientistUpgrades += 1 ; scientistrpps *= 2 ; currentUpgrades += 1; rpps += scientistAmount * scientistrpps / 2}}>Wooden Armor - Scientists are protected from the environment, giving double the research points per second - 500 Research Points, 50 Wood</a>
    {:else if scientistAmount > 9 && scientistUpgrades == 1}
        Wooden Armor - Scientists are protected from the environment, giving double the research points per second - 500 Research Points, 50 Wood
{/if}
<a></a>
{#if scientistAmount > 14 && researchpoints > 999 && scientistUpgrades == 2}
    <a on:click={()=> {researchpoints -= 1000 ; scientistUpgrades += 1 ; scientistrpps *= 2 ; rpps += scientistAmount * scientistrpps / 2; currentUpgrades += 1}}>Smarter Scientists - Scientists gain double research points per second - 1000 Research Points</a>
    {:else if scientistAmount > 14 && scientistUpgrades == 2}
        Smarter Scientists - Scientists gain double research points per second - 1000 Research Points
{/if}
<a></a>
{#if lumberjackAmount > 4 && researchpoints > 4999 && lumberjackUpgrades == 0}
    <a on:click={()=> {researchpoints -= 5000 ; lumberjackUpgrades += 1 ; wooddelay -= 2 ; currentUpgrades += 1}}>Sharper Axes - -2 wood production time - 5000 Research Points</a>
    {:else if lumberjackAmount > 4 && lumberjackUpgrades == 0}
        Sharper Axes - -2 wood production time - 5000 Research Points
{/if}
<a></a>
<h1>Achievements</h1>
{#if scientistAmount > 9}
    Science Team - You have hired at least 10 scientists.
{/if}
<a></a>
{#if scientistAmount > 99}
    The Science Guy - You have hired at least 100 scientists.
{/if}
<a></a>
