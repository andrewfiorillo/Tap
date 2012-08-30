function tap(selector, callback) {	
	var fire = false,
		touch = ('ontouchstart' in window),
		callback = callback ? callback : function() {},
		els
		
	if (typeof selector == "string")
		els = Array.prototype.slice.call(document.querySelectorAll(selector));
	else if (typeof selector == "object")
		els = [].concat(selector);
		
	els.forEach(function(el, i) {
		if (touch) {
			el.addEventListener('touchstart', function() { el.classList.add('active'); fire = true; });
			el.addEventListener('touchmove', function() { el.classList.remove('active'); fire = false; });
			el.addEventListener('touchend', function() {
				el.classList.remove('active');
				if (fire) callback.call(this);
				fire = false;
			});
		}
		else {
			el.addEventListener('mousedown', function() { el.classList.add('active'); fire = true; });
			el.addEventListener('mousemove', function() { el.classList.remove('active'); fire = false; });
			el.addEventListener('mouseup', function() {
				el.classList.remove('active');
				if (fire) callback.call(this);
				fire = false;
			});
		}
	});
}