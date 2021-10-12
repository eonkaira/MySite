$(document).ready(function(){ 
 
  $(".primaryContained").on('click', function(){
  $(".comment").addClass("commentClicked");
});//end click
$("textarea").on('keyup.enter', function(){
  $(".comment").addClass("commentClicked");
});//end keyup
});//End Function

new Vue({
  el: "#app",
  data:{
     title: 'Add a comment',
    newItemName: '',
    newItemComment:'',
    item: [],
  },
  methods:{
    addItem  (){
    this.item.push(this.newItemName, this.newItemComment);
      this.newItemName = "";
      this.newItemComment
    }
}

});