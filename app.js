const app = new Vue({
el: "#app",
data () {
  return {
    search: '',
    customers: [
      { id: '1', name: 'Hari Antara', profile_pic: 'https://maxcdn.icons8.com/Share/icon/Cinema//avatar1600.png'},
      { id: '2', name: 'Huguain', profile_pic: 'https://maxcdn.icons8.com/Share/icon/Cinema//avatar1600.png'},
      { id: '3', name: 'Hambalang', profile_pic: 'https://maxcdn.icons8.com/Share/icon/Cinema//avatar1600.png'},
      { id: '4', name: 'Ganang', profile_pic: 'https://maxcdn.icons8.com/Share/icon/Cinema//avatar1600.png'}
  ]};
},
computed: {
  filteredCustomers () {
  	let self = this;
    return this.customers.filter(cust => {
      return cust.name.toLowerCase().indexOf(self.search.toLowerCase())>=0;});
     //return this.customers;
  }
}
});
