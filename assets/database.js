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
			console.log(section);
			let array = response.data[0][section].posts
			array[index].questions=newData;
			api.PUT(documentID,response.data,function(){
				window.location.href = "index.html?section="+section;
			});
		});
	},
	delete:function(documentID,section,index){
		api.GET(documentID,function(response){
			let array = response.data[0][section].posts
			array.splice(index,1);
			api.PUT(documentID,response.data,function(){
				window.location.href = "index.html?section="+section;
			});
		});
	},
	create:function(documentID,section,newData){
		api.GET(documentID,function(response){
			let array = response.data[0][section].posts
			console.log(response.data[0]);
			array.push(newData);
			api.PUT(documentID,response.data,function(){
				window.location.href = "index.html?section="+section;
			});
		});
	},
	createC:function(documentID,section,index,newData){
		api.GET(documentID,function(response){
			let array = response.data[0][section].posts[index].answers;
			array.push(newData);
			api.PUT(documentID,response.data,function(){
				location.reload();
			});
		});
	},
	deleteC:function(documentID,section,index,comIndex){
		api.GET(documentID,function(response){
			let array = response.data[0][section].posts[index].answers;
			array.splice(comIndex,1);
			api.PUT(documentID,response.data,function(){
				window.location.href = "detail.html?index="+index+"&section="+section;
			});
		});
	},
	updateC:function(documentID,section,index,cIndex,newData){
		api.GET(documentID,function(response){
			console.log(section);
			let array = response.data[0][section].posts[index].answers
			array[cIndex]=newData;
			api.PUT(documentID,response.data,function(){
				window.location.href = "detail.html?section="+section+"&index="+index;
			});
		});
	},
	createS:function(documentID,newData){
		api.GET(documentID,function(response){
			let array = response.data[0]
			//array.push(newData);
			console.log(newData);
			console.log(response.data[0]);
			array[newData] = {posts:[]};
			api.PUT(documentID,response.data,function(){
				window.location.href = "index.html?section="+newData;
			});
		});
	},
	deleteS:function(documentID,newData){
		api.GET(documentID,function(response){
			let array = response.data[0]
			delete array[newData];
			api.PUT(documentID,response.data,function(){
				location.reload();
			});
		});
	},
	updateS:function(documentID,oldSection,newSection){
		api.GET(documentID,function(response){
			let array = response.data[0]
			//array.push(newData);
			array[newSection] = array[oldSection];
			delete array[oldSection];
			api.PUT(documentID,response.data,function(){
				window.location.href = "index.html?section="+newSection;
			});
		});
	},
	getOK:function(documentID, hiddenInfo){
		api.GET(documentID,function(response){
			let array = Object.keys(response.data[0]);
			window.location.href = "index.html?section="+array[0];
		})
	}
}