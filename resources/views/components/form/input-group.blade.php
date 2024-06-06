<div class="input-icon">
    <input type="text" value="{{ request()->q }}" class="form-control" placeholder="Search…" name="q" id="searchIt"
        onkeyup="FsearchIt()">
    <span class="input-icon-addon">
        <svg xmlns="http://www.w3.org/2000/svg" class="icon" width="24" height="24" viewBox="0 0 24 24"
            stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
            <circle cx="10" cy="10" r="7"></circle>
            <line x1="21" y1="21" x2="15" y2="15"></line>
        </svg>
    </span>
</div>


<script>
    function FsearchIt() {
        let x = document.getElementById("searchIt");
        // x.value = x.value.toUpperCase();
        setTimeout(() => {
            document.getElementById("searchItForm").submit();
        }, 2000);

    }
</script>
