https://www.cnblogs.com/TomXu/archive/2011/11/22/2256820.html
https://www.cnblogs.com/smallprogram/p/5968953.html
http://www.jb51.net/article/94372.htm
https://www.cnblogs.com/shanhe/p/KnockoutJsComponent.html

基本使用：
observable：监控基本数据类型
observableArray：监控引用数据类型（一般是指数组，只是监控数据个数，数组的每个值，数组的值是个对象的话，不会监控对象内部属性）
dependentObservable：动态设定某个简单属性的读写，可设置具体数据规则，是否生效等（里面可以写入依赖的其他属性）
	this.keyName(false);不生效

	//生效并设置新值
	this.keyName(true);
	this.keyName(value)


组件使用：
	<div data-bind='component: {name: "message-editor",params: { initialText: "Hello, world!" }}'>
	</div>
	
	name是组件名称，params是传入组件的参数
	
ko.components.register('message-editor', {
	viewModel: function(params) {
		this.text = ko.observable(params && params.initialText || '');
	},
	template: 'Message: <input data-bind="value: text" /> ' + '(length: <span data-bind="text: text().length"></span>)'
});
ko.applyBindings();
	
template语法：