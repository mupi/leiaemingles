var bonequinho = $('#bonequinho'),
	pLocs = [0, -52],
	curFrm = 0,
	lastStep=0;

skrollr.init({
	beforerender: function(o){
		// If the user has scrolled 50 pixels down
		// since the last time we shifted the background image,
		// we must be moving forward, so move to the next frame
		// in the spritesheet
		if(o.curTop > lastStep + 20) {
			if (curFrm>=2){ curFrm=-1; }
			bonequinho.css('background-position', pLocs[curFrm++] + 'px 0px');
			lastStep = o.curTop;
		// If the user has scrolled 50 pixels up,
		// we’re moving backwards, so move to the previous frame
		} else if(o.curTop < lastStep - 50) {
			if (curFrm<=0){ curFrm=2; }
			bonequinho.css('background-position', pLocs[curFrm--] + 'px 0px');
			lastStep = o.curTop;
		}
	}
});