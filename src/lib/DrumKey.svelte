<script>
    export let key;
    export let audio;
    export let name;
    let animation = false;
    function isPlaying(audio){
        return !audio.paused
    }
    function makeAnimation(){        
        animation = true
        setTimeout(() => {
            animation = false
        }, 75)
    }
    function playAudio(){
        if (isPlaying(audio)){
            audio.currentTime = 0
        }
        audio.play()
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
<button class={`drum-machine-key ${animation ? 'animation' : ''}`} id={name} on:click={handleClick}>{key.toUpperCase()}</button>
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
    .animation
        background-color: orange
        height: 77px
        margin-top: 3px
        box-shadow: orange 0px 3px
    
</style>