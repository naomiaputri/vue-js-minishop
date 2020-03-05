import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export const store = new Vuex.Store({
	state: {
		categories : [],
		products : [],
		carts:[],
		activeCategories: 'all',
	},
	getters: {
		getCategories(state) {
			return state.categories 
		},
		getProducts(state) {
			return state.products
		},
		getCarts(state) {
			return state.carts
		},
		getActiveCategories(state) {
			return state.activeCategories
		},
	},
	actions: {
		fetchCategories ({commit}) {
      axios.get('http://localhost:3000/categories')
        .then(response => {
					commit ('fillCategories', response.data)  
				} 
			)
		},
		fetchProducts ({commit}) {
			axios.get('http://localhost:3000/products')
				.then(response => {
					commit ('fillProducts', response.data)
				} 
			)
		},
		addToCarts ({commit}, payload) {
			commit ('addToCarts', payload)
		},
		setActiveCategories({commit}, payload) {
			commit ('setActiveCategories', payload)
		},
		remove({commit}) {
			commit ('remove')
		}
	},
	mutations: {
		fillCategories (state, payload) {
			state.categories = payload
		},
		fillProducts (state, payload) {
			state.products = payload
		},
		addToCarts (state, payload) {
			state.carts.push(payload)
		},
		setActiveCategories (state, payload) {
			state.activeCategories = payload
		},
		remove (state) {
			state.carts = []
		}
	}
})