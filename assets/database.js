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
	update:function(documentID,section,index,newData){
		api.GET(documentID,function(response){
			let array = response.data[0][section].posts
			console.log(array[index]);
			array[index]=newData;
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
	create:function(documentID,section,newData){
		api.GET(documentID,function(response){
			let array = response.data[0][section].posts
			array.push(newData);
			api.PUT(documentID,response.data,function(){
				alert('The quote has been added. Please go back to the home page');
			});
		});
	},
	createS:function(documentID,newData){
		api.GET(documentID,function(response){
			let array = response.data[0]
			//array.push(newData);
			console.log(newData);
			console.log(response.data[0]);
			array[newData] = [];
			api.PUT(documentID,response.data,function(){
				alert('The quote has been added. Please go back to the home page');
			});
		});
	},
}