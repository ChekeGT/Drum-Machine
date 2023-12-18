<script>
    import { audioBank, selectedKey } from "../store";

    function handleClick(){
        audioBank.set($audioBank == 'piano' ? 'heater' : 'piano')
    }
    $: selectedKey.set($audioBank)
</script>

<div class="control">
    <p>Bank</p>
    <div class="select">
        <button on:click={handleClick} class={`inner ${$audioBank == 'piano' ? 'right' : 'left'}`}></button>
    </div>
</div>

<style lang="sass">
    .control
        p
            font-weight: bold
            font-size: 1.3rem
        .select
            margin: auto
            border: 1px solid black
            width: 50px
            height: 20px
            padding: 1px
            background: black
            .inner
                width: 23px
                height: 15px
                background: blue
                border: 1px solid black
                cursor: pointer
    
    .right
        float: right
    .left
        float: left
</style>