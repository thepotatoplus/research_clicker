<style>
    .button {
        background: var(--gray);
        color: var(--white);
        text-decoration: none;
        width: 128px;
        padding: 10px;
        border-radius: 10px;
        text-align: center;
        display: inline-block;
        margin: 10px;

        transition: transform 0.3s;
    }

    .hover-true {
        transform: scale(1.2);
    }
</style>

<script>
    export let href, content;

    let hover = false;
</script>

<a class='button hover-{hover}' href={href} on:mouseover={() => hover = true} on:mouseleave={() => hover = false}>{content}</a>