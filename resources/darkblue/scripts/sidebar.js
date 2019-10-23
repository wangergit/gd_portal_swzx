(function(Global) {
	var Main, Header, Content, Footer;
	
	function onResize() {
		Content.height(Main.innerHeight() - Header.outerHeight() - Footer.outerHeight());
	}
	
	$(function() {
		Main = $("#container");
		Header = $("#main_header");
		Content = $("#main_content");
		Footer = $("#main_footer");
		
		onResize();
		
		$(window).on("resize", onResize);
	});
	
})(this);