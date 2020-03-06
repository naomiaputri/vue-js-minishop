<template>
	<div class="flex flex-row">
		<!-- Menu -->
		<div class="bg-white p-4 flex w-2/3 overflow-auto" style="height: 830px;">
			<div class="w-full mx-auto flex-wrap flex flex-row">
				<div v-for="item in getProductByCategory" :key="item.id" @click="addToCarts(item)" class="flex flex-col p-2 w-1/3">
					<!-- gambar -->
					<div class="flex bg-center bg-cover bg-no-repeat w-full" :style='{paddingBottom: "56.25%", backgroundImage: "url(" + item.image + ")" }'></div>
					<!-- keterangan -->
					<div class="pt-2 bg-gray-50">
						<div class="text-sm font-bold py-2 px-6 text-gray-700"> {{item.name}} </div>
						<div class="text-sm font-bold pb-2 px-6 text-gray-700"> {{item.price}} </div>
						<div class="text-sm pb-2 px-6 text-gray-700"> {{item.description}} </div>
						<div class="cursor-pointer bg-gray-150 text-sm text-gray-700 font-bold text-center p-2 rounded m-4"> Add to cart</div>
					</div>

				</div>
			</div>
		</div>
		
		<!-- Sub Total -->
		<div class="bg-gray-100 flex w-1/3 overflow-auto" style="height: 830px;">
			<div class="m-6 w-full">
				<!-- button -->
				<div class="bg-gray-150 text-gray-700 justify-start font-bold text-center p-2 rounded cursor-pointer" @click="showBill=true"> Checkout </div>
				<!-- nominal -->
				<div class="flex flex-row my-4 justify-between">
					<div class="flex text-xl font-bold mr-4"> Total</div>
					<div class="flex text-xl font-bold text-white"> {{getTotalPrice()}} </div>
				</div>
				
				<!-- cart -->
				<div v-for="card in filterCarts" :key="card.id" class="bg-gray-50 mt-4">
					<div class="bg-gray-150 font-bold p-4 text-white"> {{card.name}} </div>
					<div class="flex p-4 font-bold justify-between">
						<div class="flex ">
							<div class="">{{card.price}}</div>
							<span class="mx-4"> x </span>
							<div class="">{{ getCartsCount(card) }}</div>
						</div>
						<div class="flex">{{ getSubTotal(card) }}</div>
					</div>
					<div class="flex p-2 justify-between">
						<div class="bg-gray-150 rounded text-white p-2 cursor-pointer">
							Cancel
						</div>
						<div class="flex flex-row">
							<div class="bg-gray-150 rounded px-4 mr-4 text-white p-2 cursor-pointer" @click="addToCarts(card)"> + </div>
							<div class="bg-gray-150 rounded px-4 text-white p-2 cursor-pointer"> - </div>
						</div>
					</div>
				</div>
			</div>
		</div>


		<!-- Payment -->
		<div class="absolute modal-mask" style="transform:translate(-50%, -50%); top:50%; left:50%;" v-if="showBill">
			<div class="bg-gray-100 mx-auto mt-48 rounded min-h-8 relative" style="width:500px; min-height: 300px;">
				<div class="font-bold py-4 text-center text-2xl text-gray-700"> Payment </div>
				<!-- Card -->
				<div v-for="card in filterCarts" :key="card.id" class="bg-gray-50 border-b text-base text-gray-600 justify-between flex flex-row p-4">
					<div>{{ card.name }}</div>
					<div class="flex ">
						<div class=""> {{ card.price }} </div>
						<span class="mx-4"> x </span>
						<div class="">{{ getCartsCount(card) }}</div>
					</div>
					<div class="flex">{{ getSubTotal(card) }}</div>
				</div>

				<!-- Total -->
				<div class="flex flex-row font-bold  justify-between  p-4 text-base text-gray-600"> 
					<div>Total</div>
					<div>{{getTotalPrice()}}</div>
				</div>

				<!-- Button -->
				<div class="absolute p-4 bottom-0 left-0">
					<div class="bg-gray-50 font-bold px-4 text-gray-600 p-2 cursor-pointer" @click="remove(); showBill=false"> Print Bill </div>
				</div>
				<div class="absolute p-4 bottom-0 right-0">
					<div class="bg-gray-50 font-bold px-4 text-gray-600 p-2 cursor-pointer" @click="showBill=false"> Cancel </div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
	name:'Body',
	data() {
		return {
			showBill: false
		}
	},
  computed: {
    ...mapGetters ({
			getProduct : 'getProducts',
			getCarts : 'getCarts',
			getActiveCategories : 'getActiveCategories'
		}),
		filterCarts() {
			return [...new Set(this.getCarts)]
		},
		getProductByCategory() {
			var activeCategories = this.getActiveCategories;
			return activeCategories == 'all' ? this.getProduct : this.getProduct.filter(ob=>ob.category===activeCategories)
		}
  },
	methods: {
		...mapActions({
			fetchProduct : 'fetchProducts',
			addToCarts : 'addToCarts',
			remove : 'remove'
    }),
		getCartsCount(a) {
			return this.getCarts.filter(ob=>ob.id===a.id).length
		},
		getTotalPrice() {
			return this.getCarts.reduce(function(a,b) {
				return a+b.price
			}, 0)  
		},
		getSubTotal(card) {
			return card.price * this.getCartsCount(card)
		}
	},
	created () {
    this.fetchProduct()

  },
	props: {
		items: Array,
	}
}
</script>

<style lang="stylus" scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #999999;
  display: table;
  transition: opacity 0.3s ease;
}
</style>