<template>
	<div class="travel-list">
        <listhot v-for="(item,index) in travelLists" :travel="item"></listhot>
	</div>
</template>
<script>
import listhot from '@/components/listhot'
import { mapGetters } from 'vuex'
export default {
    props: {
        travelLists: Array
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
        ...mapGetters(['NewsHot'])
    },
    mounted(){
        
    },
    methods: {
        
    }
}

</script>