<script>
    import { onMount } from "svelte";
    import { topics_store } from "$lib/stores.js";
import TopicCard from "$lib/TopicCard.svelte";

    getTopics();

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
    "url": formData.get('opening_artifact'),
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
        "opening_artifact": formData.get('opening_artifact'),
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
    
    </script>
    
    <div class="w-8/12 m-auto text-center">
    <h3>Make Real</h3>
    
    <details class="mt-4" open><summary>Distribute Topic</summary>
    
        <form on:submit|preventDefault={shareArtifactFromTopic}>
            <label for="title" class="leading-7 text-sm text-gray-600">Title</label>
            <input name="title" style="" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" type="text" placeholder="A general description of the topic you're exploring">
            <label for="opening_artifact" class="leading-7 text-sm text-gray-600">Artifact (Rich Language — Audio, Video, Image, GIF, etc.)</label>
            <input name="opening_artifact" type="url" class="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" placeholder="youtube.com/...">
            <button class="mt-2 text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">Distribute</button>
        </form>
    
    </details>

    <h3 class="text-lg font-bold mt-4">Topics</h3>
    <div>
    {#if $topics_store?.length > 0}
        {#each $topics_store as topic}
        <TopicCard topic={topic}></TopicCard>
        {/each}
    {/if}
    </div>
    
    <!-- <details class="mt-4"><summary>Share Artifact</summary>
    
    
    </details> -->

</div>
    
    
    <style>
    body {
        background: 'grey';
    }
    </style>