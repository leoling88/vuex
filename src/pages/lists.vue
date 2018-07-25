<template>
	<div >
        <v-listshot></v-listshot>
	</div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
import listhot from  '@/components/listhot'
export default {
    name: 'lists',
    data() {
        return {

        }
    },
    components: {
      'v-listshot': listhot
    },
    computed:{
       // ...mapGetters(['listshot'])         
    }
}

</script>