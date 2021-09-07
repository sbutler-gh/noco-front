<script>
import { onMount } from "svelte";


    let congress = "Congress";

    onMount(() => {

        setTimeout(function() {congress = "Manchin"},1500);
        setTimeout(function() {congress = "Synema"},3000);
        setTimeout(function() {congress = "Gottheimer"},4500);
        setTimeout(function() {congress = "McConnel"},6000);
        setTimeout(function() {congress = "Paul"},7500);
        setTimeout(function() {congress = "Pelosi"},9000);
        setTimeout(function() {congress = "Congress"},10500);


    })
    </script>

<div class="p-8 md:w-5/12 md:m-auto">
<h1 class="text-4xl font-bold italic text-center mt-10 mb-2">What Can <span class="underline">{congress}</span> <br> Do For You?</h1>

<p class="text-lg text-center">Some Congressmen think they're serving you by pinching pennies in the upcoming Reconcilliation bill.</p>

<p class="text-lg text-center">Here's what they can really do ...</p>

<h2 class="text-xl text-center font-semibold">1. Cut your electricity bills and create local jobs with a Clean Electricity Standard.</h2>
<h2 class="text-xl text-center font-semibold bg-green-300">+ It'll lower your healthcare costs too, by cleaning up local air pollution.</h2>

<h2 class="text-xl text-center font-semibold">2. Increase community wealth through climate resilience initiatives.</h2>
<h2 class="text-xl text-center font-semibold bg-green-300">+ An ounce of prevention is worth a pound of cure.  We can get that cure, and save ourselves a whole lot on floods and fires in the years to come — if Congress votes for it.</h2>

<h2 class="text-xl text-center font-semibold">3. Shift to local economies, and better jobs close to home, by cutting out highway expansion.</h2>
<h2 class="text-xl text-center font-semibold bg-green-300">+ More highways mean more commutes — and more traffic. <br><br> Instead, Congress can put the billions in highway expansions towards local economies — making life better for everyone.  <br><br> Neigbhorhoods you can live in.  Diverse small businesses.  Greater wealth, better futures.</h2>

<h2 class="text-xl text-center font-semibold">Want Congress to make this happen for you?</h2>
<h2 class="text-xl text-center font-semibold">Let them know about it!</h2>

<h2 class="text-xl text-center font-semibold"><span class="bg-green-300"> Call 202-318-1885 </span> to connect directly to your Congressional representatives, and ask for three things:</h2>
<h2 class="text-xl text-center font-semibold"><span class="bg-green-300">1. A Clean Electricity Standard</span> and <span class="bg-green-300">Clean Energy Tax Credits</span>, to save money on your electricity bill and create local jobs.</h2>
<h2 class="text-xl text-center font-semibold"><span class="bg-green-300">2. Climate resilience initiatives</span>, to save future spending and build community wealth.</h2>
<h2 class="text-xl text-center font-semibold bg-green-300">3. Invest in <span class="bg-green-300">local economies</span>, not highways.</h2>

<h2 class="text-xl text-center font-semibold">Then share this website with people in your local community and neighborhood.  And make sure to send it on to folks in West Virginia, Arizona, and New Jersey — where it could really count.</h2>


<h2 class="text-xl text-center font-semibold bg-green-300 m-auto">... Did you call yet?</h2>


</div>

<style>
    h2, p {
        margin-bottom: 1rem;
    }
</style>