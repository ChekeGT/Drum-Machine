<script>
    import { onMount } from "svelte";
    import { selectedKey } from "../store";

    let volume = 100
    onMount(() =>{
        selectedKey.set('')
    })

    $: selectedKey.set(`Volume: ${volume}%`)
</script>
<input type="range" bind:value={volume}>
<style lang="sass">
    input[type="range"] 
        -webkit-appearance: none
        appearance: none
        width: 100%
        cursor: pointer
        outline: none
    
    input[type="range"]::-webkit-slider-runnable-track 
        height: 100%
        background: #424242
        border-radius: 16px
    

    input[type="range"]::-moz-range-track
        height: 100%
        background-color: #424242
        border-radius: 0
        

        
    input[type="range"]::-webkit-slider-thumb
        // removing default appearance 
        -webkit-appearance: none
        appearance: none
        height: 30px
        width: 15px
        background: blue
        border: 1px solid blue
        border-radius: 0
    input[type="range"]::-moz-range-thumb
        height: 30px
        width: 8px
        background: blue
        border: 1px solid blue
        border-radius: 0
</style>