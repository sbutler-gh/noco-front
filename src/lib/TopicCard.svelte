<script>
import { onMount } from "svelte";


    export let topic;

    let calendar = "loading ...";
    // The function :)

    // onMount(() => {
    //     let calendar_raw = topic.sync_calendar_times;
    //     calendar_raw = calendar_raw.replace("\n", String.Empty);
    //     calendar = calendar_raw.replace(`^(\|[^\n]+\|\r?\n)((?:\|:?[-]+:?)+\|)(\n(?:\|[^\n]+\|\r?\n?)*)?$`);
    // });
</script>

<div class="container px-5 py-5 mx-auto flex">
    <div class="bg-white rounded-lg p-8 m-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">

    {topic.title}
    <iframe src={topic.opening_artifact} />
    {@html topic.sync_calendar_times}
</div>
</div>

<style>
    .tg  {border-collapse:collapse;border-spacing:0;}
.tg td{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  overflow:hidden;padding:10px 5px;word-break:normal;}
.tg th{border-color:black;border-style:solid;border-width:1px;font-family:Arial, sans-serif;font-size:14px;
  font-weight:normal;overflow:hidden;padding:10px 5px;word-break:normal;}
.tg .tg-0pky{border-color:inherit;text-align:left;vertical-align:top}
</style>