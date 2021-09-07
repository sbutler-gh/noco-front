<script>
import { onMount } from "svelte";


    let congress = "Congress";

    onMount(() => {

        setTimeout(function() {congress = "Manchin"},1500);
        setTimeout(function() {congress = "Synema"},3000);
        setTimeout(function() {congress = "Gottheimer"},4500);
        setTimeout(function() {congress = "McConnell"},6000);
        setTimeout(function() {congress = "Paul"},7500);
        setTimeout(function() {congress = "Pelosi"},9000);
        setTimeout(function() {congress = "Congress"},10500);


    })
    </script>

<div class="p-8 md:w-5/12 md:m-auto">
<h1 class="text-4xl font-bold italic text-center mt-10 mb-8">What Can <span class="underline">{congress}</span> <br> Do For You?</h1>

<p class="text-lg text-center">Some Congressmen think they're serving you by pinching pennies in the upcoming Reconcilliation bill.</p>

<p class="text-lg text-center mb-10">Here's what they can really do ...</p>

<h2 class="text-xl text-center font-semibold mt-4">1. Cut your electricity bills and create local jobs with a Clean Electricity Standard.</h2>
<h2 class="text-xl text-center font-semibold bg-green-300">+ It'll lower your healthcare costs too, by cleaning up local air pollution.</h2>

<h2 class="text-xl text-center font-semibold">2. Increase community wealth through climate resilience initiatives.</h2>
<h2 class="text-xl text-center font-semibold bg-green-300">+ An ounce of prevention is worth a pound of cure.  We can get that cure, and save ourselves a whole lot on floods and fires in the years to come — if Congress votes for it.</h2>

<h2 class="text-xl text-center font-semibold">3. Shift to local economies, and better jobs close to home, by cutting out highway expansion.</h2>
<h2 class="text-xl text-center font-semibold bg-green-300">+ More highways mean more commutes — and more traffic. <br><br> Instead, Congress can put the billions in highway expansions towards local economies — making life better for everyone.  <br><br> Neigbhorhoods you can live in.  Diverse small businesses.  Greater wealth, better futures.</h2>

<h2 class="text-xl text-center font-semibold">Want Congress to make this happen for you?</h2>
<h2 class="text-xl text-center font-semibold">Let them know about it!</h2>

<h2 class="text-xl text-center font-semibold"><span class="">📞 <a href="tel:2023181885" class="underline text-blue-500">Call 202-318-1885</a></span> to connect with your representatives, and ask for three things:</h2>
<h2 class="text-xl text-center font-semibold"><span class="bg-green-300">1. A Clean Electricity Standard</span> and <span class="bg-green-300">Clean Energy Tax Credits</span>, to save money on your electricity bill and create local jobs.</h2>
<h2 class="text-xl text-center font-semibold"><span class="bg-green-300">2. Climate resilience initiatives</span>, to save future spending and build community wealth.</h2>
<h2 class="text-xl text-center font-semibold bg-green-300">3. Invest in <span class="bg-green-300">local economies</span>, not highways.</h2>

<h2 class="text-xl text-center font-semibold m-auto flex mt-8">
<svg width="70" height="32" viewBox="0 0 140 64" xmlns="http://www.w3.org/2000/svg" fill="#68e8b6">
    <path d="M30.262 57.02L7.195 40.723c-5.84-3.976-7.56-12.06-3.842-18.063 3.715-6 11.467-7.65 17.306-3.68l4.52 3.76 2.6-5.274c3.717-6.002 11.47-7.65 17.305-3.68 5.84 3.97 7.56 12.054 3.842 18.062L34.49 56.118c-.897 1.512-2.793 1.915-4.228.9z" fill-opacity=".5">
        <animate attributeName="fill-opacity"
             begin="0s" dur="1.4s"
             values="0.5;1;0.5"
             calcMode="linear"
             repeatCount="indefinite" />
    </path>
    <path d="M105.512 56.12l-14.44-24.272c-3.716-6.008-1.996-14.093 3.843-18.062 5.835-3.97 13.588-2.322 17.306 3.68l2.6 5.274 4.52-3.76c5.84-3.97 13.592-2.32 17.307 3.68 3.718 6.003 1.998 14.088-3.842 18.064L109.74 57.02c-1.434 1.014-3.33.61-4.228-.9z" fill-opacity=".5">
        <animate attributeName="fill-opacity"
             begin="0.7s" dur="1.4s"
             values="0.5;1;0.5"
             calcMode="linear"
             repeatCount="indefinite" />
    </path>
    <path d="M67.408 57.834l-23.01-24.98c-5.864-6.15-5.864-16.108 0-22.248 5.86-6.14 15.37-6.14 21.234 0L70 16.168l4.368-5.562c5.863-6.14 15.375-6.14 21.235 0 5.863 6.14 5.863 16.098 0 22.247l-23.007 24.98c-1.43 1.556-3.757 1.556-5.188 0z" />
</svg> <span class="ml-3">Waiting on you to call <a href="tel:2023181885" class="underline text-blue-500">202-318-1885</a></span>!</h2>

<details class="text-center mt-10"><summary class="text-xl text-center" style="list-style: none;"><span class="rounded hover:bg-green-200 focus:bg-green-200 active:bg-green-200 bg-gray-200 p-4 shadow cursor-pointer">I called Congress!</span></summary>
    <h2 class="text-xl text-center font-semibold mt-8">Amazing work!  Now share <a href="https://whatcancongressdo.com" class="underline text-blue-500">whatcancongressdo.com</a> with people in your local community and neighborhood, so they can call Congress too.  <br><br> (And make sure to send it on to folks in West Virginia, Arizona, and New Jersey too — where it could make a <em>big</em> difference!)</h2>

</details>


</div>

<style>
    h2, p {
        margin-bottom: 1rem;
    }
</style>