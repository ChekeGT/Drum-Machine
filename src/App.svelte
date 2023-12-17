<script>
    import DrumKey from "./lib/DrumKey.svelte";
    import PowerButton from "./lib/PowerButton.svelte";
    import SelectedKey from "./lib/SelectedKey.svelte";
    class buttonObj {
        constructor (key, name){
            this.key = key
            this.audio = new Audio(`https://s3.amazonaws.com/freecodecamp/drums/${name}.mp3`)
            this.name = name
        }
    }

    const heaterButtons = [
        new buttonObj('q', 'Heater-1'),
        new buttonObj('w', 'Heater-2'),
        new buttonObj('e', 'Heater-3'),
        new buttonObj('a', 'Heater-4_1'),
        new buttonObj('s', 'Heater-6'),
        new buttonObj('d', 'Dsc_Oh'),
        new buttonObj('z', 'Kick_n_Hat'),
        new buttonObj('x', 'RP4_KICK_1'),
        new buttonObj('c', 'Cev_H2')
    ]
</script>

<main>
    <div id="general-container">
        <div id="drum-machine">
            <div class="buttons-container">
            {#each heaterButtons as button}
                <DrumKey {...button}/>
            {/each}
            </div>
            <div>
                <PowerButton/>
                <SelectedKey/> 
            </div>
        </div>
    </div>
</main>

<style lang="sass">
    #general-container
        width: 100vw
        height: 100vh
        background: grey
        display: flex
        justify-content: center
        align-items: center
        #drum-machine
            outline: 5px solid orange
            width: 660px
            text-align: center
            background-color: #b3b3b3
            min-height: 316px
            display: grid
            grid-template-columns: 1.5fr 1fr
            .buttons-container
                width: 332px
                height:  272px
                margin: auto auto
                display: grid
                gap: 0.5rem
                grid-template-columns: repeat(3, 1fr) 
</style>