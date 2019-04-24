<template>
	<div class="gl-loading-mask" :style="{backgroundColor:'rgba(255, 255, 255, '+opacity+')'}" v-show="visible">
		<div class="gl-loading-spinner">
    		<div class="carcontent" :style="{transform:'scale('+scale+')'}">
                <div class="car">
                    <div class="car_top1" :style="{backgroundColor:backgroundColor}"></div>
                    <div class="car_top2" :style="{backgroundColor:backgroundColor}"></div>
                    <div class="car_win1"></div>
                    <div class="car_win2"></div>
                    <div class="car_bottom1" :style="{backgroundColor:backgroundColor}"></div>
                    <div class="car_bottom2" :style="{backgroundColor:backgroundColor}">
                        <div class="name">{{name}}</div>
                    </div>
                    <div class="frontWheel">
                        <div class="frontfoot foot"></div>
                    </div>
                    <div class="endWheel">
                        <div class="endfoot foot"></div>
                    </div>
                    <div class="exhaust"></div>
                </div>
                <p class="message">{{message}}</p>
            </div>

		</div>
	</div>
</template>
<script>
	export default {
		data(){
			return {
                name:'GEELY',
                visible:false,
                message:'',
                backgroundColor:'#ff5000',
                opacity:0.8,
                scale:0.8
			}
		}

	}
</script>


