<script>
    export let topic;
    import { createEventDispatcher, onMount } from 'svelte';

    const dispatch = createEventDispatcher();

    let calendar_styling = `<style type="text/css">
.tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>`;

    let last_target;

    onMount(() => {

        topic.sync_calendar_times = calendar_styling + topic.sync_calendar_times;

    })

function closeModal() {
      console.log('closing modal');

    //   $selected_topic_store = [];
        dispatch('message', {
        text: 'Hello!'
      });
    }

    function handleCalendarClick(e) {

        if (e.target.localName != "input") {
            if (last_target?.firstChild && last_target != e.target ) {
            last_target.removeChild(last_target.firstChild);
             }

        const newInput = document.createElement("input");
        newInput.style.border = "solid 1px grey";

        console.log(e);
        console.log(e.target);
        e.target.appendChild(newInput);

        last_target = e.target;
        // e.target.style.background = "yellow";

        }
    }
</script>

<!-- <div class="absolute w-screen h-screen z-100 bg-black"></div> -->
<div class="sticky top-4 h-full w-full" style="z-index: 50; background: black;">
<div class="z-100 w-8/12 m-auto text-center p-4" style="z-index: 100;">
    <div class="bg-white p-10 relative">
    <span class="absolute top-3 left-3" on:click={closeModal}>Close</span>
    <h3 class="mt-4 text-xl">{topic.title}</h3>
    <div class="mt-4 m-auto flex md:w-min">
      {@html topic.opening_artifact_embed}
    </div>

    <div on:click={handleCalendarClick} class="mt-8 mb-6 m-auto md:w-min">
        <p class="block mb-2">When are you available to talk about this?</p>
        <p class="block mb-2">Timezone: CET</p>
        {@html topic.sync_calendar_times}
      </div>
    </div>
</div>
</div>

<style>
    .tg {
      border-collapse: collapse;
      border-spacing: 0;
    }
.tg td{
  border-color: black;
  border-style: solid;
  border-width: 1px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}
.tg th{
  border-color: black;
  border-style: solid;
  border-width: 1px;
  font-family: Arial, sans-serif;
  font-size: 14px;
  font-weight: normal;
  overflow: hidden;
  padding: 10px 5px;
  word-break: normal;
}
.tg .tg-0pky {
  border-color: inherit; 
  text-align: left; 
  vertical-align: top
  }
</style>