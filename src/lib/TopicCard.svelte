<script>
import { onMount } from "svelte";
import {selected_topic_store} from "$lib/stores.js"
import OpenedTopicModal from "./OpenedTopicModal.svelte";

import { createEventDispatcher } from 'svelte';

const dispatch = createEventDispatcher();


    export let topic;

    let opened_topic = false;

    let calendar = "loading ...";
    // The function :)

    // onMount(() => {
    //     topic.sync_calendar_times = 
    //     let calendar_raw = topic.sync_calendar_times;
    //     calendar_raw = calendar_raw.replace("\n", String.Empty);
    //     calendar = calendar_raw.replace(`^(\|[^\n]+\|\r?\n)((?:\|:?[-]+:?)+\|)(\n(?:\|[^\n]+\|\r?\n?)*)?$`);
    // });

    function openTopic() {
      console.log('opening topic');

      $selected_topic_store = topic;
      
      opened_topic = true;
        dispatch('message', {
        text: 'Hello!'
      });
    }
</script>

<div on:click={openTopic} class="container p-1 mx-auto flex md:w-6/12">
    <div class="bg-white rounded-lg p-8 m-auto w-full mt-10 md:mt-0 relative z-10 shadow-md text-center">

    {topic.title}
    <div class="mt-4 m-auto flex md:w-min">
      {@html topic.opening_artifact_embed}
    </div>
    <!-- <div class="m-auto">
      {@html topic.sync_calendar_times}
    </div> -->
</div>
</div>
<!-- 
{#if opened_topic}
<OpenedTopicModal topic={topic}></OpenedTopicModal>
{/if} -->