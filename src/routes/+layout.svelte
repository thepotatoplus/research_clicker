<slot />

<style>
    :global(:root) {
        --black: rgb(15, 15, 15);
        --gray: rgb(54, 53, 61);
        --light-gray: rgb(142, 170, 192);
        --white: rgb(240, 246, 253);
        color: var(--white);

        font-family: sans-serif;
    }

    :global(a) {
        color: var(--light-gray);
    }

    :global(body) {
        background: var(--black);
        min-height: 100vh;

        display: flex;
        align-items: center;
        flex-direction: column;
    }

    :global(.row, .left) {
        display: flex;
        justify-content: start;
        flex-direction: column;
        width: 50vw;
        min-width: 290px;
    }
</style>
