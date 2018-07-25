<template>
	<div class="travel-list">
        <listhot v-for="(item,index) in listshot" :travel="item" ></listhot>
	</div>
</template>
<script>

import { mapGetters } from 'vuex'
import listhot from  '@/components/listhot'
export default {
    props: {
        listshot: Array
    },
    components: {
        listhot
    },
    data() {
        return {

        }
    },
    created() {


    },
    computed: {
        ...mapGetters(['listshot'])

    },
    mounted(){
        
    },
    methods: {
        
    }
}

</script>