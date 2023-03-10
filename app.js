const quotes={
	documentID:'1080638234383630336',
	getSections:function(){
		//document.getElementById('quotes').innerHTML='Loading quotes, please wait...';
		database.index(quotes.documentID,function(items){
			var sectionArray = Object.keys(items[0]);
			var temp = document.getElementById('sections');
			for (var x = 0; x < sectionArray.length; x++)
			{
				temp.innerHTML += `<li><a href="index.html?section=${sectionArray[x]}">${sectionArray[x]}</a></li>`;
			}
			//temp.innerHTML += `<a class="nav-link" href="create.html">Ask a Question</a>`;
		});
	},
	index:function(section){
		document.getElementById('quotes').innerHTML='Loading quotes, please wait...';
		database.index(quotes.documentID,function(items){
			document.getElementById('quotes').innerHTML='';
			var postArray = items[0][section].posts;
			for(let i=0;i<postArray.length;i++){
				let quote=postArray[i];
				console.log(quote.questions);
				let el=document.createElement('div');
				el.innerHTML=`<div>
						<blockquote>
							<em><a href="detail.html?index=${i}&section=${section}">${quote.questions}</a></em>
						</blockquote>
						<hr />
					</div>`;
				document.getElementById('quotes').append(el);
			}
		});
	},
	detail:function(section, index){
		database.detail(quotes.documentID,section,index,function(item){
			document.getElementById('loading').style.display='none';
			for (let x = 0; x < item.answers.length; x++)
			{
				document.getElementById('quote-author').innerText+=item.answers[x]+`\n`;
			}
			document.getElementById('quote-text').innerText=item.questions;
			document.getElementById('btn-edit').setAttribute('href',`edit.html?index=${index}&section=${section}`);
							
			let deleteButton=document.getElementById('btn-delete');
			deleteButton.addEventListener('click',function(){
				database.delete(quotes.documentID,section,index);
			});
		});
	},
	create:function(){
		document.querySelector('form').addEventListener('submit',function(e){
			e.preventDefault();
			let section=document.querySelector('form select[name=section]');
			let question=document.querySelector('form textarea[name=question]');

			let newQuote={
				questions:question.value,
				answers:[]
			}
			database.create(quotes.documentID,section.value,newQuote);
		});
	},
	getSelection:function(){
		//document.getElementById('quotes').innerHTML='Loading quotes, please wait...';
		database.index(quotes.documentID,function(items){
			var sectionArray = Object.keys(items[0]);
			var temp = document.getElementById('dropSection');
			for (let x = 0; x < sectionArray.length; x++)
			{
				temp.innerHTML += `<option value="${sectionArray[x]}">${sectionArray[x]}</option>`;
			}
		});
	},
	update:function(index){
		database.detail(quotes.documentID,index,function(item){
			document.getElementById('loading').style.display='none';
			document.querySelector('form input[name=author]').value=item.author;
			document.querySelector('form textarea[name=quote]').value=item.quote;
			
			document.querySelector('form').addEventListener('submit',function(e){
				e.preventDefault();
				let author=document.querySelector('form input[name=author]');
				let quote=document.querySelector('form textarea[name=quote]');
				let newQuote={
					author:author.value,
					quote:quote.value
				}
				database.update(quotes.documentID,index,newQuote);
			});
		});
	}
}