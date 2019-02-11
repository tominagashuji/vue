app01 = new Vue({
    el: '#app01',
    data: {
      name: '',
      cource: '',
      acceptance_period: '',
      students: [
        {id: 1,
         name: '山田',
         cource: 'WEBエンジニアコース',acceptance_period: '02月'}
      ]
    },
    methods: {
      addStudent: function(name, cource, acceptance_period){
        var i = app01.students.length + 1
        app01.students.push({
            id: i,
            name: name,
            cource: cource,
            acceptance_period:acceptance_period})
        }
    }
})