<script>
    import DrumKey from "./lib/DrumKey.svelte";
    import PowerButton from "./lib/PowerButton.svelte";
    import SelectedKey from "./lib/SelectedKey.svelte";
    import VolumeSlider from "./lib/VolumeSlider.svelte";
    import AudioTypeSelector from "./lib/AudioTypeSelector.svelte";
    import { audioBank } from "./store";
    class buttonObj {
        constructor (key, name){
            this.key = key
            this.audio = new Audio(`https://s3.amazonaws.com/freecodecamp/drums/${name}.mp3`)
            this.name = name
        }
    }

    let buttons

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
    const pianoButtons = [
        new buttonObj('q', 'Chord_1'),
        new buttonObj('w', 'Chord_2'),
        new buttonObj('e', 'Chord_3'),
        new buttonObj('a', 'Give_us_a_light'),
        new buttonObj('s', 'Dry_Ohh'),
        new buttonObj('d', 'Bld_H1'),
        new buttonObj('z', 'punchy_kick_1'),
        new buttonObj('x', 'side_stick_1'),
        new buttonObj('c', 'Brk_Snr')
    ]

    $: buttons = $audioBank == 'piano' ? pianoButtons : heaterButtons
</script>

<main>
    <div id="general-container">
        <div id="drum-machine">
            <div class="buttons-container">
            {#each buttons as button}
                <DrumKey {...button}/>
            {/each}
            </div>
            <div id="functionality-container">
                <PowerButton/>
                <SelectedKey/>
                <VolumeSlider/>
                <AudioTypeSelector/>
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
            #functionality-container
                display: flex
                flex-direction: column
                justify-content: space-between
                align-items: center
                padding: 1.5rem 0
</style>