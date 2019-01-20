<template>
<div class="container">
	<div class="row clearfix">
		<div class="col-md-12 column">
			<nav class="navbar navbar-default" role="navigation">
				<div class="navbar-header">
					 <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1"> <span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span></button> <a class="navbar-brand" href="#">Brand</a>
				</div>
				<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav">
						<li class="active">
							 <a href="#">Link</a>
						</li>
						<li>
							 <a href="#">Link</a>
						</li>
						<li class="dropdown">
							 <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown<strong class="caret"></strong></a>
							<ul class="dropdown-menu">
								<li>
									 <a href="#">Action</a>
								</li>
								<li>
									 <a href="#">Another action</a>
								</li>
								<li>
									 <a href="#">Something else here</a>
								</li>
								<li class="divider">
								</li>
								<li>
									 <a href="#">Separated link</a>
								</li>
								<li class="divider">
								</li>
								<li>
									 <a href="#">One more separated link</a>
								</li>
							</ul>
						</li>
					</ul>
					<form class="navbar-form navbar-left" role="search">
						<div class="form-group">
							<input type="text" class="form-control" />
						</div> <button type="submit" class="btn btn-default">Submit</button>
					</form>
					<ul class="nav navbar-nav navbar-right">
						<li>
							 <a href="#">Link</a>
						</li>
						<li class="dropdown">
							 <a href="#" class="dropdown-toggle" data-toggle="dropdown">Dropdown<strong class="caret"></strong></a>
							<ul class="dropdown-menu">
								<li>
									 <a href="#">Action</a>
								</li>
								<li>
									 <a href="#">Another action</a>
								</li>
								<li>
									 <a href="#">Something else here</a>
								</li>
								<li class="divider">
								</li>
								<li>
									 <a href="#">Separated link</a>
								</li>
							</ul>
						</li>
					</ul>
				</div>
			</nav>
			<div class="jumbotron">
				<h1>
					123456
				</h1>
				<p>
					This is a template for a simple marketing or informational website. It includes a large callout called the hero unit and three supporting pieces of content. Use it as a starting point to create something more unique.
				</p>
				<p>
					 <a class="btn btn-primary btn-large" href="#">Learn more</a>
				</p>
			</div>
		</div>
	</div>
	<div class="row clearfix">
		<div class="col-md-6 column">
			<form role="form" @submit.prevent="calendarInsertUpdate">
				<div class="form-group">
					 <label for="title">标题</label>
					 <input type="text" class="form-control" id="title" v-model="tblcal.title" />
				</div>
				<div class="form-group">
					 <label for="content">内容</label>
					 <input type="text" class="form-control" id="content" v-model="tblcal.content" />
				</div>
				<div class="form-group">
					 <label for="ifOK">是否完成</label>
					 <input type="text" class="form-control" id="ifOK" v-model="tblcal.ifOK" />
				</div>
				<div class="form-group">
					 <label for="importance">重要度</label>
					 <input type="text" class="form-control" id="importance" v-model="tblcal.importance" />
				</div>
				<div class="form-group">
					 <label for="finishDate">完成时间</label>
					 <input type="text" class="form-control" id="finishDate" v-model="tblcal.finishDate" />
				</div>
					<input type="text" class="form-control" id="id" v-model="tblcal.id" />							
				<div class="form-group">
					 <label for="exampleInputFile">File input</label><input type="file" id="exampleInputFile" />
					<p class="help-block">
						Example block-level help text here.
					</p>
				</div>
				<div class="checkbox">
					 <label><input type="checkbox" />Check me out</label>
				</div> <button type="submit" class="btn btn-default">Submit</button>
			</form>
		</div>
		<div class="col-md-6 column">
			<table class="table">
				<thead>
					<tr>
						<th>
							标题
						</th>
						<th>
							内容
						</th>
						<th>
							是否完成
						</th>
						<th>
							完成度
						</th>
						<th class="text-center">
							操作
						</th>						
					</tr>
				</thead>
				<tbody>
					<tr class="success" v-for="tblcalendar in tblcalendars">
						<td>
							{{tblcalendar.title}}
						</td>
						<td>
							{{tblcalendar.content}}
						</td>
						<td>
							{{tblcalendar.ifOK}}
						</td>
						<td>
							{{tblcalendar.importance}}
						</td>
						<td>
							<a href="javascript:void(0)" @click="calendarDelete(tblcalendar.id)">删除</a>
						</td>
						<td>
							<a href="javascript:void(0)" @click="calendarUpdate(tblcalendar)">更新</a>
						</td>						
					</tr>
				</tbody>
			</table>
		</div>
	</div>
</div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
		//定义初始化的数组
		tblcalendars: [],
		tblcal:{}
    }
  },
  methods:{
	  //查出所有
	calendarSelectAll(start){
	      this.$axios({
	        method:"post",
	        url: 'http://localhost:50000/calendarSelectAll?size=5&np='+start,
	        data: {
	//           np1:1,
			//   size1:5
	        }//向后端传递参数
	      }).then(res=>{
	        //alert(res.data)
	        this.tblcalendars=res.data
	      })
	    },
	calendarDelete(id){
	      this.$axios({
	        method:"post",
	        url: 'http://localhost:50000/calendarDelete?id='+id,
	        data: {
	//           np1:1,
			//   size1:5
	        }//向后端传递参数
	      }).then(res=>{
	        //alert(res.data)
	        vue.calendarSelectAll(1);
	      })
		// axios.delete('http://localhost:50000/calendarDelete?id='+id).then(function(response){
		// 	vue.calendarSelectAll(1);
		// });
	},
	calendarUpdate(tblcalendar){
		//window.alert(tblcalendar);
		this.tblcal=tblcalendar;
	},
	calendarInsertUpdate(){
		window.alert(this.tblcal.id);
		var url;
		console.log(this.tblcal);
		if(this.tblcal.id>0){
			//update
			url='http://localhost:50000/calendarUpdate?id='+this.tblcal.id;
		}
		else{
			//insert
			url='http://localhost:50000/calendarInsert';
		}
		//axios提交
	      this.$axios({
	        method:"post",
	        url: url,
	        data: this.tblcal, //向后端传递参数
			headers: {
				'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8'
			},
			transformRequest: [function (data) {
				let newData = '';
				for (let k in data) {
				if (data.hasOwnProperty(k) === true) {
					newData += encodeURIComponent(k) + '=' + encodeURIComponent(data[k]) + '&';
				}
				}
				return newData;
			}]		
	      }).then(res=>{
	        alert(res.data)
	       // vue.calendarSelectAll(1);
	      })		

	},
	calendarSelectOne(){

	}	  
  },
  mounted(){
    this.calendarSelectAll(1);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

