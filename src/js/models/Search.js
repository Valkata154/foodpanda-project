// Works on all browsers, not like fetch(), better at error handling
import axios from 'axios';
import { key, proxy }  from '../config';

export default class Search {
	constructor(query){
		this.query = query;
	}
	//ba3389f8be6960f3c210de54df5968d1
	async getResults(){
		try{
			const res = await axios(`${proxy}https://www.food2fork.com/api/search?key=${key}&q=${this.query}`);
			this.result = res.data.recipes;
			// console.log(this.result);
		} catch (error) {
			alert(error);
		}
	}
}

