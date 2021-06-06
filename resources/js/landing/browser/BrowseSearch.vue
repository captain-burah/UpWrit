<template>
    <div >
        <div class="row d-flex justify-content-center">
            <form class="form-inline ">
                <label class="my-1 mr-2 sr-only" for="Level">Level</label>
                <select 
                    class="custom-select my-1 mr-sm-2" 
                    id="Level"
                    name="level"
                    v-model="level"
                    v-on:keyup.enter="search"
                >
                    <option selected>Choose Level</option>
                    <option value="alevel">Advance Level</option>
                    <option value="olevel">Ordinary Level</option>
                    <option value="igcse-alevel">IGCSE Advance Level</option>
                    <option value="igcse-olevel">IGCSE Ordinary Level</option>
                </select>

                <label class="my-1 mr-2 sr-only" for="Batch">Level</label>
                <select 
                    class="custom-select my-1 mr-sm-2"
                    id="Batch"
                    name="batch"
                    v-model="batch"
                    v-on:keyup.enter="search"
                >
                    <option selected>Choose Batch</option>
                    <option value="">2024</option>
                </select>

                <label class="my-1 mr-2 sr-only" for="Subject">Subject</label>
                <select 
                    class="custom-select my-1 mr-sm-2" 
                    id="Subject"
                    name="subject"
                    v-model="subject"
                    v-on:keyup.enter="search"
                >
                    <option selected>Choose Subject</option>
                    <option value=""></option>
                </select>

                <label class="my-1 mr-2 sr-only" for="Location">Location</label>
                <select 
                    class="custom-select my-1 mr-sm-2" 
                    id="Location"
                    name="location"
                    v-model="location"
                    v-on:keyup.enter="search"
                >
                    <option selected>Choose Location</option>
                    <option value=""></option>
                </select>

                <button 
                    type="submit" 
                    class="btn btn-primary "
                    v-on:click="search" 
                    :disabled="loading"
                >Search</button>
            </form>
        </div>
        <div class="row pt-4">
                <div class="col-md-2"></div>
                <div class="col-md-8">
                    <h2>Search</h2>
                    <router-view></router-view>
                </div>
                <div class="col-md-2"></div>
            </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            courses: null,
            loading: false,
        };
    },
    methods: {
        
    },
}
</script>