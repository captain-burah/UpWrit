<template>
    <div class=" mx-5">
        Rows is: {{ rows }}
        <div v-if="loading">
            Data is loading ....
        </div>
        <div v-else>
            <div class="row py-2" 
                v-for="row in rows" 
                :key="'row' + row"
            >
                <div class="col d-flex align-items-stretch" 
                    v-for="(classs, column) in classesInRow(row)"
                    :key="'row' + row + column"
                >
                    <class-list-item v-bind="classs"></class-list-item>
                </div>
                <div class="col" v-for="p in placeholdersInRow(row)" :key="'row' + p">
                </div>
            </div>
        </div>
        
    </div>
</template>

<script>
import ClassListItem from "./ClassListItem";

export default ({
    components: {
        ClassListItem
    },

    data() {
        return {    
            classes: null,
            loading: false,
            columns: 4
        };
    },
    computed: {
        rows () {
            return this.classes === null 
            ? 0 
            : Math.ceil(this.classes.length / this.columns);
        }
    },
    methods: {
        classesInRow(row) {
            return this.classes.slice((row - 1) * this.columns, row * this.columns);
        },
        placeholdersInRow(row) {
            return this.columns - this.classesInRow(row).length;
        },
    },

    created() {
        this.loading = true;
        // const request = axios
        // .get("/api/bookables")
        // .then(response => {
        //     this.bookables = response.data.data;
        //     this.loading = false;
        // });


        // ----------- JS POMISE FUNCTIONS ---------
        // const variablePromise = new Promise((resolve, reject) => {
        //     console.log(resolve);
        //     console.log(reject);
        //     setTimeout(() => resolve('Hello'), 3000);
        // })
        // .then(result => "Hello Again " + result)
        // .then(result => console.log(result))
        // .catch(result => console.log(`Error ${result}`));
        // console.log(variablePromise);

        // -------------SETTIMEOUT FUNCTION----------
        setTimeout(() => {
            this.classes = 
            [
                {
                    title: "Physics",
                    instructor: "Tuan Burah",
                },
                {
                    title: "Accounting",
                    instructor: "Tuan Burah",
                },
                {
                    title: "Combined Mathematics",
                    instructor: "Tuan Burah",
                },
                {
                    title: "Media",
                    instructor: "Tuan Burah",
                },
                {
                    title: "English",
                    instructor: "Tuan Burah",
                },
                {
                    title: "Physics",
                    instructor: "Tuan Burah",
                },
                {
                    title: "Accounting",
                    instructor: "Tuan Burah",
                },
                {
                    title: "Combined Mathematics",
                    instructor: "Tuan Burah",
                },
                {
                    title: "Media",
                    instructor: "Tuan Burah",
                },
                {
                    title: "English",
                    instructor: "Tuan Burah",
                },
                {
                    title: "English",
                    instructor: "Tuan Burah",
                },
                {
                    title: "English",
                    instructor: "Tuan Burah",
                },
            ];
            this.loading = false;

        }, 3000);

    },
    
})
</script>
<style scoped> 
    .backdrop {
        color: #000200;
        border-radius: 10px;
        background: rgba(255,255,255,0.1);
        backdrop-filter: saturate(150%) blur(10px);
    }
</style>
