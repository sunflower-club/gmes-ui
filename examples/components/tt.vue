<script type="text/javascript">
	export default {
		data(){
			return {

			}
		},
		props:{
			renderBody: {
	      type: Function,
	      default: function(){
	      	return function(){}
	      }
	    },
	  },
	  created(){
	  	console.log(typeof this.renderBody)
	  },
		render(h){
			const a = '222'
			return h('div',

				[h('div',{

				},[
					'hahaha'
				]),this.renderBody(h,a)]
			)
		}
	}
</script>
