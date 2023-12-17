<script>
    import { power } from "../store";

    export let key;
    export let audio;
    export let name;
    let animation = 0;
    function isPlaying(audio){
        return !audio.paused
    }
    function makeAnimation(){        
        animation = $power ? 1 : 2
        setTimeout(() => {
            animation = 0
        }, 75)
    }
    function playAudio(){
        if (isPlaying(audio)){
            audio.currentTime = 0
        }
        if ($power){
            audio.play()
        }
    }
    function handleKeyDown(e){
        if (e.key.toLowerCase() == key.toLowerCase()){
            makeAnimation()
           playAudio()
        }
    }
    function handleClick(){
        makeAnimation()
        playAudio()
    }
</script>

<svelte:window on:keydown={handleKeyDown}/>
<button class={`drum-machine-key ${animation ? animation == 1 ? 'animation1' : 'animation2' : ''}`} id={name} on:click={handleClick}>{key.toUpperCase()}</button>
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
    .animation1
        background-color: orange
        height: 77px
        margin-top: 3px
        box-shadow: orange 0px 3px
    .animation2
        background: grey
        height: 77px
        margin-top: 3px
        box-shadow: black 0 3px
    
</style>