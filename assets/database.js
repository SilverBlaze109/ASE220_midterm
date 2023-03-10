const database={
	index:function(documentID,callback){
		api.GET(documentID,function(response){
			callback(response.data);
		});
	},
	detail:function(documentID,section,index,callback){
		api.GET(documentID,function(response){
			callback(response.data[0][section].posts[index]);
		});
	},
	update:function(documentID,index,newData){
		api.GET(documentID,function(response){
			response.data[index]=newData;
			api.PUT(documentID,response.data,function(){
				alert('The quote has been updated. Please go back to the home page');
			});
		});
	},
	delete:function(documentID,section,index){
		api.GET(documentID,function(response){
			let array = response.data[0][section].posts
			array.splice(index,1);
			api.PUT(documentID,response.data,function(){
				alert('The quote has been deleted. Please go back to the home page');
			});
		});
	},
	create:function(documentID,newData){
		api.GET(documentID,function(response){
			response.data.push(newData);
			api.PUT(documentID,response.data,function(){
				alert('The quote has been added. Please go back to the home page');
			});
		});
	},
}