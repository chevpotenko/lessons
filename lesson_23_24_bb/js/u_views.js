define(
	'u_views',
	[],

	function(){
		return function u_views(){

			App.Views.Task = Backbone.View.extend({
				tagName: 'li',
				className: 'item',

				events: {
					'click .btnDelete':'destroy',
					'click .title': 'select'
				},

				initialize: function(){
					this.model.on('change' , this.render, this);
					this.model.on('destroy', this.remove, this);
				},

				template: _.template($('#item').html()),

				render: function (){
					var template = this.template(this.model.toJSON());
					this.$el.html(template);
					return this
				},

				destroy : function(){
					$('.changeItem').val('');
					$('.btn').html('add').removeClass('btn--edit');
					this.model.destroy();
				},

				remove: function(){
					this.el.remove();
				},

				select: function(){
					var controlls = $('.controlls');
					var item =$(this.el).text();
					item = $.trim(item).slice(0, -1);
					controlls.find('input[type=text]').val(item);
					controlls.find('.btn').html('edit').addClass('btn--edit');
					idItem = this.model.cid;
				}
			});

			/*-----------------------------------------------------------*/

			App.Views.Tasks = Backbone.View.extend({
				tagName: 'ol',
				className: 'list',

				events:{
					'click .title':'setMarker'
				},

				initialize: function(){
					this.collection.on('add', this.addItem, this);
					this.collection.on('change', this.resetMarker, this);
				},

				render: function(){
					this.collection.each(this.build, this);
					return this;
				},

				build: function(task){
					var newTask = new App.Views.Task({model: task});
					this.$el.append(newTask.render().el);
					return this;
				},

				addItem: function(task) {
					var newTask = new App.Views.Task({model: task});
					this.$el.append(newTask.render().el);
				},
				setMarker: function(e){
					$(this.$el).find('.title').not($(e.currentTarget)).removeClass('title--edit');
					$(e.currentTarget).addClass('title--edit');
				},

				resetMarker: function(e){
					$(this.$el).find('.title').removeClass('title--edit');
				}
			});

			/*-----------------------------------------------------------*/

			App.Views.EditTask = Backbone.View.extend({
				el: '.controlls',
				events: {
					'click .btn': 'edit'
				},

				edit: function(e){
					var btn = $(this.el).find('.btn');
					var item =$(this.el).find('input[type=text]');
					if (btn.html() == 'add'){
						var itemTitle = item.val();
						item.val('');
						var newTask = new App.Models.Task({title: itemTitle}, {validate: true});
						if(newTask.validationError != 'Empty value') {
							this.collection.add(newTask);
						}
					}
					else{
						this.collection.get(idItem).set('title', item.val(),{validate: true});
						btn.html('add').removeClass('btn--edit');
						item.val('');
					}
				}
			})

		};
	}
);
