<script>
    export let topic;
</script>

<div class="container px-5 py-5 mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 m-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">

    {topic.title}
    <iframe src={topic.opening_artifact} />
</div>
</div>