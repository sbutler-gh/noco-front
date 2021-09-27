<script>
    import { onMount } from "svelte";
    import { selected_topic_store, topics_store } from "$lib/stores.js";
import TopicCard from "$lib/TopicCard.svelte";
import '../app.css';
import OpenedTopicModal from "$lib/OpenedTopicModal.svelte";

    getTopics();

    let opened_topic_modal = false;

    async function getTopics() {

        const myHeaders = new Headers();

        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('xc-token', 'hYIxUCPsWRKc2q3_L0HXWHqpP3gEnPvKN9lhFY_D');

        const response = await fetch('http://nocodb-production-58e5.up.railway.app/nc/making_things_real_rest_Eu7R/api/v1/topics', {
                method: 'GET',
                withCredentials: true,
                headers: myHeaders
                })

        if (response.ok) {
            let response_json = await response.json();
            console.log(response_json);

            $topics_store = response_json;
            console.log($topics_store);
        }
    }

    async function shareArtifactFromTopic(e) {

    console.log(e);

    var formData = new FormData(e.target);

    const myHeaders = new Headers();

    myHeaders.append('Content-Type', 'application/json');
    myHeaders.append('xc-token', 'hYIxUCPsWRKc2q3_L0HXWHqpP3gEnPvKN9lhFY_D');

    console.log([...formData]);
    console.log(formData.get('title'));

    let body_submission = {
    "title": formData.get('title'),
    "url_embed": formData.get('opening_artifact'),
    }

    console.log(body_submission);
    console.log(typeof body_submission);

    const response = await fetch('http://nocodb-production-58e5.up.railway.app/nc/making_things_real_rest_Eu7R/api/v1/artifacts', {
            method: 'POST',
            body: JSON.stringify(body_submission),
            withCredentials: true,
            headers: myHeaders
            })

    if (response.ok) {
        
        let response_json = await response.json();
        console.log(response_json);

        shareTopic(e);
    }
}
    
    async function shareTopic(e) {

        console.log(e);
    
        var formData = new FormData(e.target);

        const myHeaders = new Headers();

        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('xc-token', 'hYIxUCPsWRKc2q3_L0HXWHqpP3gEnPvKN9lhFY_D');

        console.log([...formData]);
        console.log(formData.get('title'));

        let body_submission = {
        "title": formData.get('title'),
        "opening_artifact_embed": formData.get('opening_artifact'),
        }

        console.log(body_submission);
        console.log(typeof body_submission);
    
        const response = await fetch('http://nocodb-production-58e5.up.railway.app/nc/making_things_real_rest_Eu7R/api/v1/topics', {
                method: 'POST',
                body: JSON.stringify(body_submission),
                withCredentials: true,
                headers: myHeaders
                })

        if (response.ok) {
            
            let response_json = await response.json();
            console.log(response_json);
        }
    }

    function handleMessage() {
        console.log('message recieved');
        opened_topic_modal = true;
    }

    function closeModal() {
        console.log('message recieved');
        opened_topic_modal = false;
    }
    
    </script>

    {#if opened_topic_modal}
    <OpenedTopicModal topic={$selected_topic_store} on:message={closeModal}></OpenedTopicModal>

    {/if}
    
    <div class="m-auto text-center">
    <h3 class="text-2xl mb-4 mt-4">Make Real</h3>
    
    <details class="bg-white mt-4 rounded shadow border p-4 md:p-5 w-12/12 md:w-5/12" style="margin: auto;" open><summary class="">Distribute Topic</summary>
    
        <form on:submit|preventDefault={shareArtifactFromTopic}>
            <label for="title" class="block mt-4 leading-7 text-sm text-gray-600">Describe the topic you're exploring or thinking about</label>
            <textarea name="title" style="" class="mb-4 w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" type="text" placeholder="How to better manifest preferrable future states ..."></textarea>
            <label for="opening_artifact" class="block mt-4 leading-7 text-sm text-gray-600">Embed a <em>rich language</em> artifact (video, audio, image, gif, meme) to share your perspective.</label>
            <textarea name="opening_artifact" type="text" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="<iframe> .... </iframe>"></textarea>
            <p for="opening_artifact" class="mb-4 leading-7 text-sm text-gray-600 text-left">You can copy + paste embed code snippets from services like YouTube, Vimeo, Giphy, and Imgur.</p>
            <button class="mt-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Distribute</button>
        </form>
    
    </details>

    <hr class="mt-4 w-6/12 mx-auto">
    <h3 class="text-lg font-bold mt-4">Topics</h3>
    <div>
    {#if $topics_store?.length > 0}
        {#each $topics_store as topic}
        <TopicCard topic={topic} on:message={handleMessage}></TopicCard>
        {/each}
    {/if}
    </div>

    <!-- {#if opened_topic_modal}
    <OpenedTopicModal topic={$selected_topic_store}></OpenedTopicModal>
    {/if} -->
    
    <!-- <details class="mt-4"><summary>Share Artifact</summary>
    
    
    </details> -->

</div>
    
    
    <style>
    body {
        background: #f3f4f6;
    }
    </style>