<script>
    export let key;
    export let audio;
    export let name;
    function handleKeyDown(e){
        if (e.key.toLowerCase() == key.toLowerCase()){
            audio.play()
        }
    }
</script>

<svelte:window on:keydown={handleKeyDown}/>
<button class="drum-machine-key" id={name} on:click={audio.play()}>{key.toUpperCase()}</button>

<style lang="sass">
    .drum-machine-key
        background-color: grey
        border: 0
        box-shadow: black 3px 3px 5px
        border-radius: 5px
        text-align: center
        font-size: 1.5rem
        font-weight: bold
        width: 100px
        height: 80px
        cursor: pointer
</style>