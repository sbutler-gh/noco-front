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

        if (e.target.localName != "input" && e.target.innerText.match(`^(?!.*[0-9])`) && e.target.localName != "th") {

            if (document.getElementById('cell_form')) {
                document.getElementById('cell_form').remove();
            }
            // if (last_target?.firstChild) {
            // // last_target.removeChild(last_target.firstChild);
            // // last_target.removeChild(last_target.firstChild);
            //  }
        
        const cellForm = document.createElement("form");
        // cellForm.onsubmit = handleCalendarCellSubmit;
        cellForm.id = "cell_form";

        const newInput = document.createElement("input");
        newInput.style.border = "solid 1px grey";
        newInput.id = "cell_input";
        newInput.value = e.target.innerText;
        const submitButton = document.createElement('button');
        submitButton.id = "cell_submit";
        // submitButton.style.border = "solid 1px grey";
        submitButton.style.background = "#007cff";
        submitButton.innerText = "Save";
        submitButton.style.color = "white";
        submitButton.style.marginLeft = "auto";
        submitButton.style.marginTop = "3px";
        submitButton.style.display = "block";
        submitButton.style.borderRadius = "5px";
        submitButton.style.padding = "3px";
        // submitButton.classList = "rounded block ml-auto mt-1 text-white bg-blue-500"
        // newInput.appendChild(submitButton);
        submitButton.type = 'button';
        submitButton.onclick = handleCalendarCellSubmit;

        // const cancelButton = document.createElement('button');
        // cancelButton.id = "cell_cancel";
        // // submitButton.style.border = "solid 1px grey";
        // cancelButton.style.background = "lightgrey";
        // cancelButton.innerText = "x";
        // cancelButton.style.color = "black";
        // cancelButton.style.marginLeft = "auto";
        // cancelButton.style.marginTop = "3px";
        // cancelButton.style.display = "block";
        // cancelButton.style.borderRadius = "5px";
        // cancelButton.style.padding = "3px";
        // cancelButton.onclick = function() {
        //     last_target.removeChild(last_target.firstChild);
        // }


        console.log(e);
        console.log(e.target);
        cellForm.appendChild(newInput);
        // cellForm.appendChild(cancelButton);
        cellForm.appendChild(submitButton);
        e.target.appendChild(cellForm);
        // e.target.appendChild(newInput);
        // e.target.appendChild(submitButton);

        last_target = e.target;
        // e.target.style.background = "yellow";

        }
    }

    function handleCalendarCellSubmit(e) {
        console.log(e);
        let cell_input = document.getElementById('cell_input');
        console.log(cell_input.value);
        console.log(last_target);
        let cell_text = cell_input.value;
        last_target.textContent = cell_input.value;

        sendUpdatedCalendarToDB();
        // document.getElementById('cell_form').remove();
        // cell_input.value;
        // last_target.removeChild(last_target.firstChild);
        // last_target.appendChild(cell_text);

        // console.log(docu)
        // console.log(e.target);
    }

    async function sendUpdatedCalendarToDB() {

        let new_calendar = document.getElementById('calendar_table').outerHTML;

        console.log(new_calendar);

        const myHeaders = new Headers();

        myHeaders.append('Content-Type', 'application/json');
        myHeaders.append('xc-token', 'hYIxUCPsWRKc2q3_L0HXWHqpP3gEnPvKN9lhFY_D');

        let body_submission = {
        "sync_calendar_times": new_calendar
        }

        console.log(body_submission);
        console.log(typeof body_submission);
    
        const response = await fetch(`https://nocodb-production-58e5.up.railway.app/nc/making_things_real_rest_Eu7R/api/v1/topics/${topic.id}`, {
                method: 'PUT',
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

<!-- <div class="absolute w-screen h-screen z-100 bg-black"></div> -->
<div class="sticky top-4 h-full w-full" style="z-index: 50; background: black;">
<div class="z-100 w-8/12 m-auto text-center p-4" style="z-index: 100;">
    <div class="bg-white p-10 relative">
    <span class="absolute top-3 left-3" on:click={closeModal}>Close</span>
    <h3 class="mt-4 text-xl">{topic.title}</h3>
    <div class="mt-4 m-auto flex md:w-min">
      {@html topic.opening_artifact_embed}
    </div>

    <div class="mt-8 mb-6 m-auto md:w-min">
        <p class="block mb-2">When are you available to talk about this? <a href={topic.meeting_room} class="text-underline text-blue-500">(Meeting Room)</a></p>
        <p class="block mb-2">Initial your name in the calendar blocks below. (Timezone: CET)</p>
        <div on:click={handleCalendarClick}>
        {@html topic.sync_calendar_times}
        </div>
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