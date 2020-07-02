(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.currentSoundStreamInMovieclip;
	this.actionFrames = [];
	this.soundStreamDuration = new Map();
	this.streamSoundSymbolsList = [];

	this.gotoAndPlayForStreamSoundSync = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.gotoAndPlay = function(positionOrLabel){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(positionOrLabel);
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		this.clearAllSoundStreams();
		this.startStreamSoundsForTargetedFrame(this.currentFrame);
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
		this.clearAllSoundStreams();
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
		this.clearAllSoundStreams();
	}
	this.startStreamSoundsForTargetedFrame = function(targetFrame){
		for(var index=0; index<this.streamSoundSymbolsList.length; index++){
			if(index <= targetFrame && this.streamSoundSymbolsList[index] != undefined){
				for(var i=0; i<this.streamSoundSymbolsList[index].length; i++){
					var sound = this.streamSoundSymbolsList[index][i];
					if(sound.endFrame > targetFrame){
						var targetPosition = Math.abs((((targetFrame - sound.startFrame)/lib.properties.fps) * 1000));
						var instance = playSound(sound.id);
						var remainingLoop = 0;
						if(sound.offset){
							targetPosition = targetPosition + sound.offset;
						}
						else if(sound.loop > 1){
							var loop = targetPosition /instance.duration;
							remainingLoop = Math.floor(sound.loop - loop);
							if(targetPosition == 0){ remainingLoop -= 1; }
							targetPosition = targetPosition % instance.duration;
						}
						instance.loop = remainingLoop;
						instance.position = Math.round(targetPosition);
						this.InsertIntoSoundStreamData(instance, sound.startFrame, sound.endFrame, sound.loop , sound.offset);
					}
				}
			}
		}
	}
	this.InsertIntoSoundStreamData = function(soundInstance, startIndex, endIndex, loopValue, offsetValue){ 
 		this.soundStreamDuration.set({instance:soundInstance}, {start: startIndex, end:endIndex, loop:loopValue, offset:offsetValue});
	}
	this.clearAllSoundStreams = function(){
		var keys = this.soundStreamDuration.keys();
		for(var i = 0;i<this.soundStreamDuration.size; i++){
			var key = keys.next().value;
			key.instance.stop();
		}
 		this.soundStreamDuration.clear();
		this.currentSoundStreamInMovieclip = undefined;
	}
	this.stopSoundStreams = function(currentFrame){
		if(this.soundStreamDuration.size > 0){
			var keys = this.soundStreamDuration.keys();
			for(var i = 0; i< this.soundStreamDuration.size ; i++){
				var key = keys.next().value; 
				var value = this.soundStreamDuration.get(key);
				if((value.end) == currentFrame){
					key.instance.stop();
					if(this.currentSoundStreamInMovieclip == key) { this.currentSoundStreamInMovieclip = undefined; }
					this.soundStreamDuration.delete(key);
				}
			}
		}
	}

	this.computeCurrentSoundStreamInstance = function(currentFrame){
		if(this.currentSoundStreamInMovieclip == undefined){
			if(this.soundStreamDuration.size > 0){
				var keys = this.soundStreamDuration.keys();
				var maxDuration = 0;
				for(var i=0;i<this.soundStreamDuration.size;i++){
					var key = keys.next().value;
					var value = this.soundStreamDuration.get(key);
					if(value.end > maxDuration){
						maxDuration = value.end;
						this.currentSoundStreamInMovieclip = key;
					}
				}
			}
		}
	}
	this.getDesiredFrame = function(currentFrame, calculatedDesiredFrame){
		for(var frameIndex in this.actionFrames){
			if((frameIndex > currentFrame) && (frameIndex < calculatedDesiredFrame)){
				return frameIndex;
			}
		}
		return calculatedDesiredFrame;
	}

	this.syncStreamSounds = function(){
		this.stopSoundStreams(this.currentFrame);
		this.computeCurrentSoundStreamInstance(this.currentFrame);
		if(this.currentSoundStreamInMovieclip != undefined){
			var soundInstance = this.currentSoundStreamInMovieclip.instance;
			if(soundInstance.position != 0){
				var soundValue = this.soundStreamDuration.get(this.currentSoundStreamInMovieclip);
				var soundPosition = (soundValue.offset?(soundInstance.position - soundValue.offset): soundInstance.position);
				var calculatedDesiredFrame = (soundValue.start)+((soundPosition/1000) * lib.properties.fps);
				if(soundValue.loop > 1){
					calculatedDesiredFrame +=(((((soundValue.loop - soundInstance.loop -1)*soundInstance.duration)) / 1000) * lib.properties.fps);
				}
				calculatedDesiredFrame = Math.floor(calculatedDesiredFrame);
				var deltaFrame = calculatedDesiredFrame - this.currentFrame;
				if(deltaFrame >= 2){
					this.gotoAndPlayForStreamSoundSync(this.getDesiredFrame(this.currentFrame,calculatedDesiredFrame));
				}
			}
		}
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.未命名1 = function() {
	this.initialize(img.未命名1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,983,363);


(lib._3 = function() {
	this.initialize(img._3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,92,161);


(lib._1png複製 = function() {
	this.initialize(img._1png複製);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,97,160);


(lib._5 = function() {
	this.initialize(img._5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,156);


(lib._8 = function() {
	this.initialize(img._8);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,71,125);


(lib.key01 = function() {
	this.initialize(img.key01);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,142);


(lib.key20 = function() {
	this.initialize(img.key20);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.key11 = function() {
	this.initialize(img.key11);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,142);


(lib.key30 = function() {
	this.initialize(img.key30);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.key21 = function() {
	this.initialize(img.key21);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,143);


(lib.key10 = function() {
	this.initialize(img.key10);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,127);


(lib.key41 = function() {
	this.initialize(img.key41);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,143);


(lib.key50 = function() {
	this.initialize(img.key50);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.key51 = function() {
	this.initialize(img.key51);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,143);


(lib.key60 = function() {
	this.initialize(img.key60);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.key61 = function() {
	this.initialize(img.key61);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,142);


(lib.key70 = function() {
	this.initialize(img.key70);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib._2 = function() {
	this.initialize(img._2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,102,155);


(lib.key80 = function() {
	this.initialize(img.key80);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.key81 = function() {
	this.initialize(img.key81);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,142);


(lib.key71 = function() {
	this.initialize(img.key71);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,138,142);


(lib.key91 = function() {
	this.initialize(img.key91);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,143,142);


(lib.keyx0 = function() {
	this.initialize(img.keyx0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,124,123);


(lib.key90 = function() {
	this.initialize(img.key90);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.keyx2 = function() {
	this.initialize(img.keyx2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,154,154);


(lib.key40 = function() {
	this.initialize(img.key40);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.keyx1 = function() {
	this.initialize(img.keyx1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,127);


(lib.key31 = function() {
	this.initialize(img.key31);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,141,142);


(lib.key00 = function() {
	this.initialize(img.key00);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,128);


(lib.Image_0 = function() {
	this.initialize(img.Image_0);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,128,129);


(lib._7 = function() {
	this.initialize(img._7);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,87,121);


(lib._6 = function() {
	this.initialize(img._6);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,79,114);


(lib._4png複製 = function() {
	this.initialize(img._4png複製);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,89,154);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.XICONBUTTON = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.keyx0();
	this.instance.setTransform(-28,-30,0.45,0.45);

	this.instance_1 = new lib.keyx2();
	this.instance_1.setTransform(-35,-35,0.45,0.45);

	this.instance_2 = new lib.keyx1();
	this.instance_2.setTransform(-29,-29,0.45,0.45);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).to({state:[{t:this.instance_2}]},1).to({state:[{t:this.instance_2}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35,-35,69.3,69.3);


(lib.答案1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#EC1019").s().p("AgPA6QgHgFABgLQAAgJAGgGQAGgIAJABQAKgBAHAIQAFAGABAJQAAALgHAGQgGAHgKAAQgJAAgGgIgAgPgZQgHgHABgKQAAgKAGgHQAGgGAJAAQAKAAAHAHQAFAHABAJQgBAKgGAHQgGAGgKAAQgJAAgGgGg");
	this.shape.setTransform(-61.6,3.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#EC1019").s().p("Ag/CIQgFgFgCgIQgHgagJgQQgEgGACgCQABgCAFABIAFAAQAfAFA2gTQAIgDAGADQAVALAGAFQAGAHgHAGQgJAGgKAUQAIAGAAADQAAADgEABQg2ACgZAFIgHAAIgBAFQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgCAAgFgFgAACBNIg9AKIAFAiQAcgDAjgIQAHgcgEgEQgCgCgEAAIgEABgAiJBCQBehJAJgpQABgFADAAQAFgBAKADQAKADACAFQAAACgGAJIADACQAtAiAcANIBFAXQAGACgBADQgBABgHABQgbAHgbgBQgOABgJgJQgmgighglQgPAQgDAFQg8BFgqAGIgDAAQgFAAAGgEgAg2ApQgJgGAMgDQAKAAAJgCIAOgEQALgFAJACQAKADADAEQACADgDADIgHACIgaAFQgIACgIAAQgKAAgJgEgAh6gmQALgQABAAQAegogHgdQgBgFAEgBQAIgCARALQAFAFgDAFIgJAPIAOgCQAWgHAJACQAKACACAEQACADgDACIgdAGQgWADgKgEIgBACQgMAXgXATQgHAHgGABIgCAAQAAAAgBAAQAAAAAAgBQAAAAAAgBQABgBAAgBgAAyguQgJgEgNgPQgFgEAAgEQAAgBAAgBQAAAAAAgBQAAgBABAAQAAAAAAAAQAEgBAFABIAFACQARAEAEANQABAFgDAEQgBAEgEAAIgCgBgAgyguQgJgEgIgKQgFgEAAgDQAAgBAAAAQAAgBAAgBQAAAAABAAQAAgBAAAAQADgBAEABIAOAEQAFAEACAGQABAFgCADQgCADgDAAIgBAAgAgPhBIAKgMQAZgfgEgaQgBgFADgBQAJgBAPALQAFAFgEAEIgKAPIAQgBQAdgGAGACQAKADACAEQABACgDADIgkAGQgRADgOgHQgLARgRANQgGAFgFAAIgCABQgBAAAAgBQAAAAAAAAQAAgBAAgBQAAAAAAgBg");
	this.shape_1.setTransform(-90.2956,1.8318);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 圖層_1
	this.txt = new cjs.Text("", "32px 'DFKai-SB'", "#EC1019");
	this.txt.name = "txt";
	this.txt.lineHeight = 34;
	this.txt.lineWidth = 88;
	this.txt.parent = this;
	this.txt.setTransform(-48.85,-13.65);

	this.timeline.addTween(cjs.Tween.get(this.txt).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.答案1, new cjs.Rectangle(-109,-15.6,150,37.2), null);


(lib.hitArea = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AlYFZIAAqxIKxAAIAAKxg");
	this.shape.setTransform(0.025,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.hitArea, new cjs.Rectangle(-34.4,-34.4,68.9,68.9), null);


(lib.dot = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#D05DC4").s().p("Ak3B6IAAjzIJvAAIAADzg");
	this.shape.setTransform(0,0.025);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.dot, new cjs.Rectangle(-31.2,-12.2,62.5,24.5), null);


(lib.quit = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["rgba(255,255,255,0.345)","rgba(255,255,255,0.098)"],[0,1],0,-8.5,0,8.5).s().p("AikBVIAAipIFJAAIAACpg");
	this.shape.setTransform(-0.05,-8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.lf(["#EEEEEF","#FFFFFF"],[0,1],5.6,5.6,-5.5,-5.5).s().p("AhFAqIAqgqIgqgpIAcgcIApApIAqgpIAcAcIgpApIApAqIgcAcIgpgqIgqAqg");
	this.shape_1.setTransform(0.0036,0.0138,1.5011,1.5431);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.rf(["#EF8200","#E50012","#A30000"],[0,0.549,1],10.9,-10.9,0,10.9,-10.9,30.4).s().p("AhqBrIAAjVIDVAAIAADVg");
	this.shape_2.setTransform(-0.054,-0.0112,1.5384,1.5385);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-16.5,-16.5,33,33);


(lib.ClipGroup_0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiDCFIAAkJIEGAAIAAEJg");
	mask.setTransform(13.15,13.275);

	// 圖層_3
	this.instance = new lib.Image_0();
	this.instance.setTransform(0,0,0.2057,0.2057);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_0, new cjs.Rectangle(0,0,26.3,26.6), null);


(lib.invisibleBtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#00FF00").s().p("Eg+fAsOMAAAhYbMB8/AAAMAAABYbg");
	this.shape.setTransform(400,283);
	this.shape._off = true;

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(3).to({_off:false},0).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,566);


(lib.an_CSS = function(options) {
	this.initialize();
	this._element = new $.an.CSS(options);
	this._el = this._element.create();
}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,100,22);

p._tick = _tick;
p._handleDrawEnd = _handleDrawEnd;
p._updateVisibility = _updateVisibility;
p.draw = _componentDraw;



(lib.元件21aaa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.key00();
	this.instance.setTransform(-8,-8,0.12,0.12);

	this.instance_1 = new lib.key01();
	this.instance_1.setTransform(-10,-10,0.14,0.14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,19.9);


(lib.元件19aaa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.key90();
	this.instance.setTransform(-8,-8,0.12,0.12);

	this.instance_1 = new lib.key91();
	this.instance_1.setTransform(-11,-10,0.14,0.14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-10,20,19.9);


(lib.元件18aaa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.key80();
	this.instance.setTransform(-8,-8,0.12,0.12);

	this.instance_1 = new lib.key81();
	this.instance_1.setTransform(-11,-10,0.14,0.14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-10,20,19.9);


(lib.元件17aaa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.key70();
	this.instance.setTransform(-8,-8,0.12,0.12);

	this.instance_1 = new lib.key71();
	this.instance_1.setTransform(-10,-10,0.14,0.14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,19.3,19.9);


(lib.元件16aaa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.key60();
	this.instance.setTransform(-8,-8,0.12,0.12);

	this.instance_1 = new lib.key61();
	this.instance_1.setTransform(-10,-10,0.14,0.14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,19.8,19.9);


(lib.元件15aaa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.key50();
	this.instance.setTransform(-8,-8,0.12,0.12);

	this.instance_1 = new lib.key51();
	this.instance_1.setTransform(-10,-10,0.14,0.14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,20);


(lib.元件14aaa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.key40();
	this.instance.setTransform(-8,-8,0.12,0.12);

	this.instance_1 = new lib.key41();
	this.instance_1.setTransform(-11,-11,0.14,0.14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11,-11,20,20);


(lib.元件13aaa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.key30();
	this.instance.setTransform(-8,-8,0.12,0.12);

	this.instance_1 = new lib.key31();
	this.instance_1.setTransform(-10,-10,0.14,0.14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,19.8,19.9);


(lib.元件12aaa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.key20();
	this.instance.setTransform(-8,-8,0.12,0.12);

	this.instance_1 = new lib.key21();
	this.instance_1.setTransform(-10,-10,0.14,0.14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,20);


(lib.元件11aaa = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.instance = new lib.key10();
	this.instance.setTransform(-8,-8,0.12,0.12);

	this.instance_1 = new lib.key11();
	this.instance_1.setTransform(-10,-10,0.14,0.14);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-10,-10,20,19.9);


(lib.元件5 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("Eg+fAsOMAAAhYbMB8/AAAMAAABYbg");
	this.shape.setTransform(400,283);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(0,0,800,566);


(lib.元件4 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("EgsDAKnQhkAAAAiIIAAw9QAAiIBkAAMBYHAAAQBkAAAACIIAAQ9QAACIhkAAg");
	this.shape.setTransform(6.825,19.4);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-285.1,-48.5,583.9000000000001,135.8);


(lib.元件3AAAA = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#009900").ss(1,1,1,3,true).p("Aj5AAIHzAA");

	this.timeline.addTween(cjs.Tween.get(this.shape).to({_off:true},5).wait(5));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-26,-1,52,2);


(lib.Path_3 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#9ED1CE","#9ED1CD","#9FCFCC","#9FCBC8","#9DC4C1","#9AB9B7","#92AAA9","#859695","#707979","#535554","#251C19","#231916"],[0.506,0.675,0.741,0.792,0.831,0.867,0.898,0.925,0.953,0.976,1,1],0,3.8,0,-3.5).s().p("AlTAnQgLAAgJgMQgIgLAAgQQAAgPAIgLQAJgMALAAIKnAAQAMAAAIAMQAIALAAAPQAAAQgIALQgIAMgMAAg");
	this.shape.setTransform(72.8,39.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_3, new cjs.Rectangle(36,36,73.6,7.700000000000003), null);


(lib.Path_2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#D6DF71","#D6DF71","#D3DC75","#CFD678","#C7CE7C","#BBC17F","#ABB07E","#969A78","#797B69","#56554E","#261C19","#231916"],[0.169,0.455,0.569,0.651,0.718,0.776,0.827,0.875,0.922,0.961,0.996,1],0,3.8,0,-3.5).s().p("AlTAnQgMAAgIgMQgIgLAAgQQAAgPAIgLQAIgMAMAAIKnAAQALAAAJAMQAIAMAAAOQAAAQgIALQgJAMgLAAg");
	this.shape.setTransform(72.825,39.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_2, new cjs.Rectangle(36,36,73.7,7.700000000000003), null);


(lib.Path_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#FBCB77","#FACC78","#F6C97A","#EEC67D","#E2BF80","#D2B582","#BDA780","#A29379","#817768","#59544E","#261C19","#231916"],[0.271,0.522,0.62,0.694,0.753,0.804,0.851,0.89,0.929,0.965,0.996,1],0,3.8,0,-3.5).s().p("AlTAnQgMAAgIgMQgIgLAAgQQAAgPAIgLQAIgMAMAAIKnAAQALAAAJAMQAIAMAAAOQAAAQgIALQgJAMgLAAg");
	this.shape.setTransform(72.825,39.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path_1, new cjs.Rectangle(36,36,73.7,7.700000000000003), null);


(lib.Path = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.lf(["#DDA1B0","#DCA1B0","#D9A1AF","#D4A1AE","#CC9FAB","#C09BA4","#AE939B","#99868B","#7C7073","#575152","#261C19","#231916"],[0.506,0.675,0.741,0.792,0.831,0.867,0.898,0.925,0.953,0.976,1,1],0,3.8,0,-3.5).s().p("AlTAnQgMAAgIgMQgIgLAAgQQAAgPAIgLQAIgMAMAAIKnAAQALAAAJAMQAIAMAAAOQAAAQgIALQgJAMgLAAg");
	this.shape.setTransform(72.825,39.85);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Path, new cjs.Rectangle(36,36,73.7,7.700000000000003), null);


(lib.輸入文字反應區 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s().p("AhvBsIAAjXIDfAAIAADXg");
	this.shape.setTransform(68.575,0);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0000FF").s().p("ACEBsIAAjXIDgAAIAADXgAljBsIAAjXIEJAAIAADXg");
	this.shape_1.setTransform(-0.025,0);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-35.6,-10.8,115.4,21.6);


(lib.輸入文字 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABshrIAADXIjXAAIAAjXg");

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhrBsIAAjXIDXAAIAADXg");

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape}]},3).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-11.8,-11.8,23.6,23.6);


(lib.隱藏答案b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.Path_2();
	this.instance.setTransform(0,18.55,1,1,0,0,0,72.8,39.9);
	this.instance.alpha = 0.6016;
	this.instance.filters = [new cjs.BlurFilter(7, 7, 1)];
	this.instance.cache(34,34,78,12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGBFIAAgZIgTALQgOAGgZAIIgEABQgGAAAAgGQAAgEADgCQAbgHAPgHQALgEAJgGIg5AAQgFAAAAgFQAAgFAFAAIA8AAIAAgIQAAgGAGAAQAGAAAAAGIAAAIIA9AAQAFAAAAAFQAAAFgFAAIg9AAQANAIAPAFQAVAIARAEQADABAAAEIgBAEQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgHAAIgdgLQgPgHgNgIIAAAZQAAAFgGAAQgGAAAAgFgAA7APIg2gOIgPAGQgNAEgQADIgZABQgHAAAAgFQAAgFAFAAQAcgCASgDIAIgCIgUgEQgJgCAAgFQAAgEAEgCIAIgGIgkAAQgFAAAAgFQAAgFAFAAIAvAAQAEgFADgGQACgEADAAQAGABAAAEIgBAEIgEAGIBFAAQAFAAAAAFQAAAFgFAAIgbAAIgDAEQgGAJgJAGIgCACIAvAIQAEACAAADQAAAGgFAAIgEAAgAgagQIgBABQAAAAAAABQAAAAAAAAQAAAAABAAQAAABABAAIAbAFIAGgDQAJgFAHgJIgmAAIgMAJgAA7gsIAAgFQAAgEgEAAIhvAAQgEAAAAAEIAAAEQAAAFgGAAQgFAAAAgFIAAgIQAAgKAKAAIA2AAIAAgEQAAgGAGAAQAFAAAAAGIAAAEIA7AAQAIAAAAAKIgBAJQgBAEgFAAQgFAAAAgEg");
	this.shape.setTransform(26.075,-5.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AguBIQgLAAAAgKIAAgfQAAgLALAAIBeAAQAKAAAAALIAAAfQAAAKgKAAgAguAiIAAAYQAAAEAEAAIBWAAQADAAAAgEIAAgYQAAAAAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAIhWAAQgBAAgBAAQAAAAgBABQAAAAAAABQgBABAAAAgAhLAFQAAgEADgBQAVgGAOgGQAPgIANgMQAFgEAEAAQAFAAAJAHQAKAJAOAIQANAGAWAGQADABAAADQgBAGgGAAIgEgBQgXgHgKgFQgOgIgOgLQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAIgCABQgPAOgQAIIgBABIABgBIABAAIA/AAQAEAAAAAEQAAAGgEAAIg/AAQgGAAAAgGIABgDQgMAGgQAFIgEABQgFgBgBgFgAgkgfIgEgQIAAgBIgLAAIgGAIQgEADgFADQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgEQAFgDADgDIAHgIIAEgLQABgEAEAAIAEABQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABIgBADIgCAFIAoAAQAFAAAAAFIAAABIAFgGQADgEACgFQABgEAFAAIAEABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAADIgDAFIAyAAQAEAAAAAFQAAAFgEAAIgcAAIAFANIAAADQABAEgGAAQgFAAgBgEQgCgJgDgGIAAgBIgSAAIgFAEIgIAHIgEABQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAFgCIgXAAIAEANIAAAEQAAAEgGAAQgEAAgBgEg");
	this.shape_1.setTransform(9,-5.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAIBHQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAGgFIgeAAQgIAAAAgJIAAg7QAAgIAIAAIAkAAQAEAAAAAEQAAAFgEAAIgOAAIAAANIAKAAQAJAAAAAIIAAAQQAAAJgJAAIgKAAIAAAMIAOAAIADABIAEgEQAFgHAEgHQgCgOgBgRIgCgdIg7AAQgEAAAAAFIAAAvQAAARgDALQgDAKgDAGQgCAEgDAAQgGgBAAgEIACgFIACgFIADgKQACgKAAgNIAAgBIgKAAIAAADIgCAQIgDAMIgFALQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgBgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBIAEgJIACgKIACgPIgEAAQgEAAAAgFQAAgFAEAAIAXAAIAAgMIgNAAQgJAAAAgJIAAgaQAAgFAEAAQAFAAAAAFIAAAXQAAAAAAABQABABAAAAQAAAAABABQABAAAAAAIAKAAIAAgUQAAgKAKAAIBAAAIAAgFQAAgFAFAAQAFAAAAAFIABAFIALAAIgHgEQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgEAEAAIAEABIAIAFQABABAAAAQAAAAABABQAAAAAAABQAAABAAAAIAAACQAAABABAAQAAAAAAABQAAAAABABQAAABAAABQAAAFgFAAIgRAAQABAgACANQAFgLAFgOQAAgDAFAAIADABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAIgBADQgFASgHANIgEAHIAEARQACAEACAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQACgDABgPQABgGAEAAQAFAAAAAGQgBATgEAJQgEAJgGAAQgFAAgEgGQgEgIgDgMIgFAHQgJAKgLAIQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBgAgOAuQAAAEADAAIAKAAIAAgMIgNAAgAgOAcIAaAAQABAAAAAAQABAAAAAAQAAgBABAAQAAgBAAgBIAAgIQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAIgaAAgAgOgEIAAAJIANAAIAAgNIgKAAQgBAAAAAAQgBABAAAAQgBABAAAAQAAABAAABgAgegwIAAgDIgjAAQgFAAAAgFQAAgFAFAAIAjAAIAAgFQAAgGAGAAQAFAAAAAGIAAAFIAjAAIAAgFQAAgGAFAAQAGAAAAAGIAAAFIApAAQAFAAAAAFQAAAFgFAAIgpAAIAAACQAAAGgGAAQgFAAAAgGIAAgCIgjAAIAAADQAAAGgFAAQgGAAAAgGg");
	this.shape_2.setTransform(-8.075,-5.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhGBDIAAh+QAAgKAJAAIAEAAIASAAQAHAAAAAIIgBAFIgJAdIgBAFIABAFQAGALACAGQABAGAAAHQAAAKgEAIQgGAIgLAAIgGgBIAAAdQAAAGgGAAQgEAAAAgGgAg8g3IAABSIAFABQAGAAADgFQADgEAAgGIgBgKQgCgGgHgMIgBgFIABgGIAJgfQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgLAAQgBAAAAAAQgBABAAAAQgBABAAAAQAAABAAABgAgHBDQgFgDAAgIIAAgOQAAgFAFAAQAGAAAAAFIAAAMQAAAEACABQADACANAAQANAAACgBQABAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBIAAgGQABgGAEAAQAGAAAAAIQAAALgCACQgBACgGABQgFACgPAAQgSAAgGgEgAgwBCIACgEQAJgLAHgMQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAFAAAAAFQAAADgCAEQgIAOgHAHIgEACQgGAAAAgFgAA8BBQgEgOgGgIIAAgCQAAgFAFAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAHAJAEAMIABADQAAAFgGAAQgDAAgCgDgAANA0IgCgMIgBgBQAAgEAFAAQADAAACADIADAMIAAACQAAAEgFAAQgFAAAAgEgAgQAgQgFAAAAgEQAAgEAFAAIA+AAQAEAAAAgEIAAgEIhKAAQgEAAAAgEQAAgEAEAAIBKAAIAAgDQAAgEgEAAIg+AAQgFAAAAgDQAAgEAFAAIBDAAQAJAAAAAHIAAAHIAGAAQAEAAAAAEQAAAEgEAAIgGAAIAAAIQAAAIgJAAgAgbgNQgEAAAAgFQAAgEAEAAIApAAIAAgIIgiAAQgEAAAAgEQAAgFAEAAIAJAAIgBgCIgDgLIgBgCQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIgGAAQgGAAAAgGQAAgEAFAAIAngBQAWgBAUgDQAFAAAAAGQAAAEgHABIgnADIACABIADAKIABACQAAAFgGAAQgEAAAAgFIgCgJIgBgBQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIgXABIABABIAFALIABAEIgBACIApAAIAAgBIABgDQAHgGAEgHQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQAFAAAAAEQAAADgCADIgIAJIANAAQAFAAAAAFQAAAEgFAAIgjAAIAAAIIAnAAQAFAAAAAEQAAAFgFAAg");
	this.shape_3.setTransform(-24.725,-5.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BFBF6D").s().p("AADALQgcgEgFgNIAQgGIAKAMQANAMAWAAIgFABQgLAAgMgCg");
	this.shape_4.setTransform(-34.675,9.355);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ADNAqQhhgWhrAAQhZAAiTApQhJAUg4AVIAAiCQABggAhgTQAkgWA9AAIG3AAQBuAAAfAWQARAMAAAnIAACCQhAgmhfgWg");
	this.shape_5.setTransform(-0.25,-10.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BFBF6D").s().p("AlUCOQgQgOAAgSIAAjJQAAghAOgOQAUgUA4AAIH1AAQBMAAAuAcQgngNgxAAIn2AAQg7AAgYAOQgWANAAAdIAADBQAAAMAOATQAPAVAOABQgbgCgSgPg");
	this.shape_6.setTransform(-2.925,-4.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjnCTQglAAgggHQgegIgVgMQAmAMAxAAIHvAAQA7AAAWgMQAUgLAAgcIAAi0QAAgKgOgPQgNgOgOgIQAgAKAMAIQARAKAAAPIAAC5QAAAhgNANQgTATg4AAg");
	this.shape_7.setTransform(3.775,-2.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#D6DF71").ss(0.5,0,0,2.6).p("AGWBnQAAAngPAPQgXAXhBAAIpdAAQhBAAgXgXQgPgPAAgnIAAjNQAAgnAPgPQAXgXBBAAIJdAAQBBAAAXAXQAPAPAAAng");
	this.shape_8.setTransform(0.025,-4.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFFFF","#D6DF71"],[0,1],0.6,-16.9,-0.6,16.8).s().p("AkuC0QhBAAgXgXQgPgPAAgnIAAjNQAAgnAPgPQAXgXBBAAIJdAAQBBAAAXAXQAPAPAAAnIAADNQAAAngPAPQgXAXhBAAg");
	this.shape_9.setTransform(0.025,-4.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGBMIAAgcIgWAMQgPAIgcAIIgEABQgHAAAAgHQAAgEAEgCQAegIAQgHQAMgFAKgGIg/AAQgFAAAAgGQAAgGAFAAIBDAAIAAgIQAAgGAGAAQAGAAAAAGIAAAIIBEAAQAGAAAAAGQAAAGgGAAIhDAAQAOAIAQAGQAYAIASAFQAEABAAAFIgBAEQgCADgDAAIgHgBIghgMQgQgHgPgJIAAAbQAAAGgGAAQgGAAAAgGgABBARIg7gPIgRAGQgOAFgSACQgQACgMAAQgHAAAAgGQAAgFAFAAQAggCATgEIAJgCIgWgFQgKgCAAgGQAAgDAEgDIAJgHIgnAAQgGAAAAgFQAAgGAGAAIAzAAQAFgFADgHQACgEAEAAQAGABAAAFIgBAEIgEAGIBMAAQAFAAAAAGQAAAFgFAAIgfAAIgCAFQgHAJgKAHIgCACIA0AKQAEABAAAEQAAAHgGAAIgEAAgAgdgSIgBACQAAAAAAAAQAAAAAAABQABAAAAAAQABAAAAAAIAeAHIAHgEQAJgGAIgKIgqAAIgNAKgABBgwIAAgGQAAgFgEAAIh7AAQgEAAAAAGIAAADQAAAGgGAAQgGAAAAgGIAAgIQAAgLALAAIA7AAIAAgFQAAgHAHAAQAGAAAAAHIAAAFIBAAAQAJAAAAALIgBAKQgBAEgGAAQgFAAAAgEg");
	this.shape_10.setTransform(28.575,-5.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgyBPQgNAAAAgLIAAgjQAAgLANAAIBmAAQAMAAAAALIAAAjQAAALgMAAgAgyAlIAAAaQAAAFADAAIBfAAQADAAAAgFIAAgaQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAgBAAIhfAAQAAAAgBAAQgBAAAAABQgBAAAAABQAAAAAAABgAhSAFQAAgEADgBQAXgGAQgIQAQgIAOgNQAFgFAFAAQAGAAAJAIQAMAJAPAJQAPAHAWAHQAEABAAADQAAAHgHAAIgFgBQgZgJgLgFQgPgJgPgMQgDgDgCAAQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBABQgPAOgUAKIACAAIBFAAQAGAAAAAEQAAAHgGAAIhFAAQgGAAAAgHQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABgBQgOAGgSAGIgEABQgGgBAAgGgAgngjQgCgKgDgHIAAgBIgMAAIgHAIQgDAEgGAEIgEABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAgBQAAAAABAAQAAgBAAAAIAIgHIAHgKQAEgFACgHQABgDAEAAIAFABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAADIgCAGIAsAAQAFAAAAAFIAAACIAGgHQADgFACgGQACgDAEAAIAFABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAADIgDAGIA2AAQAFAAAAAFQAAAGgFAAIgfAAIAGAOIABADQAAAFgHAAQgFAAgBgFQgCgKgDgGIAAgBIgUAAIgGAFQgEAEgFADIgEABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAFgDIgaAAIADAOIABAEQAAAFgGAAQgFAAAAgFg");
	this.shape_11.setTransform(9.8,-5.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAIBPQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAGgFIghAAQgIAAgBgKIAAhBQABgJAIAAIAoAAQAEAAAAAFQAAAFgEABIgPAAIAAANIALAAQAJABAAAHIAAATQAAAJgJAAIgLAAIAAAOIAPAAIADAAIAFgEQAFgHAFgIIgEgiIgCggIhBAAQgEAAAAAFIAAA1QAAARgEAMQgCAMgFAHQgCAEgDAAQgGAAAAgGIABgEIADgGIAEgLQACgMAAgNIAAgCIgLAAIAAADIgCASIgEAOQgCAGgDAGQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIAEgKIADgLIACgRIgFAAQgEAAAAgGQAAgEAEAAIAaAAIAAgOIgOAAQgLAAAAgKIAAgdQAAgFAFAAQAGAAAAAFIAAAZQAAABAAABQAAABAAAAQABABAAAAQABAAABAAIALAAIAAgWQAAgLALAAIBGAAIAAgFQAAgGAGAAQAFAAABAGIAAAFIAMAAIgHgEQgDgDABgCQAAgEAEAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABABIAJAEQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABIAAACQACABAAAFQABAFgGAAIgTAAQABAjACAPQAGgMAFgQQABgEAFAAIADACQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIgBADQgFAUgIAOIgFAIIAGATQACAFABAAQABAAAAgBQABAAAAAAQAAAAAAgBQABAAAAgBQACgDABgRQACgFAEAAQAGAAgBAFQgBAVgEAKQgEAKgIAAQgFAAgEgHQgFgIgDgNIgGAHQgJALgNAJIgDACQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBAAgAgQAyQAAAEAEABIAKAAIAAgOIgOAAgAgQAfIAdAAQABAAABAAQAAAAABgBQAAAAAAgBQAAgBAAAAIAAgJQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBAAgBAAIgdAAgAgQgFIAAAKIAOAAIAAgNIgKAAQgEgBAAAEgAghg0IAAgFIgnAAQgFABAAgGQAAgFAFAAIAnAAIAAgGQAAgHAGABQAGgBAAAHIAAAGIAmAAIAAgGQABgHAFABQAHgBAAAHIAAAGIAtAAQAFAAAAAFQAAAGgFgBIgtAAIAAAEQAAAFgHAAQgFAAgBgFIAAgEIgmAAIAAAFQAAAFgGABQgGgBAAgFg");
	this.shape_12.setTransform(-9,-5.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhNBKIAAiLQAAgLAKAAIAFAAIATAAQAIAAAAAJIgBAFIgKAgIgBAGIABAFQAHANACAGIABAOQAAAMgFAHQgGAKgMgBIgHgBIAAAhQAAAGgGAAQgFAAAAgGgAhCg9IAABbIAGABQAGAAADgGQAEgEAAgHIgCgLQgBgGgIgOIgBgFIABgHIAKgiQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAAAAAIgMAAQgEAAAAAEgAgHBKQgGgEAAgJIAAgOQAAgHAGABQAGgBAAAHIAAAMQAAAFACABQAEABAOABQAOAAADgBQABgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAIAAgGQAAgHAGAAQAFAAABAIQAAAMgDACQgBADgGABQgGABgQABQgUgBgGgDgAg0BIIABgEQALgLAHgPQABAAAAgBQAAAAABAAQAAgBABAAQABAAAAAAQAGAAAAAFQAAAEgCADQgJAQgIAIIgEACQgGgBAAgFgABDBHQgFgPgGgIIgBgDQAAgFAFAAQADAAACACQAHALAGANIAAADQAAAGgHAAQgDAAgBgEgAAOA5IgCgOIAAgBQAAgDAEAAQAEgBACAEQACAEABAIIAAADQAAAFgFAAQgFAAgBgFgAgSAjQgFAAAAgEQAAgFAFAAIBFAAQAEAAAAgEIAAgEIhRAAQgFAAAAgFQAAgFAFAAIBRAAIAAgDQAAgDgEAAIhFAAQgFgBAAgEQAAgDAFAAIBKAAQALgBAAAIIAAAHIAGAAQAFAAAAAFQAAAFgFAAIgGAAIAAAIQAAAJgLAAgAgdgOQgFgBAAgFQAAgEAFAAIAtAAIAAgJIgmAAQgFAAAAgFQAAgFAFAAIAKAAIgBgCIgEgMIgBgCQAAgBAAgBQABAAAAgBQAAAAAAAAQABgBAAAAIgHAAQgGAAAAgGQAAgFAFAAIArgBIAugEQAFAAAAAGQAAAFgHABIgrACIADACIADAMIAAACQAAAEgGAAQgEAAAAgEIgDgLIAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIgZABIACABIAFANIABADIgBADIAtAAIAAgCIABgDQAHgGAFgIQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAFAAAAAGQAAADgCADIgJAKIAPAAQAEAAAAAFQAAAFgEAAIgoAAIAAAJIAsAAQAFAAAAAEQAAAFgFABg");
	this.shape_13.setTransform(-27.325,-5.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9,p:{scaleX:1,scaleY:1,x:0.025,y:-4.325}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:0.025,y:-4.325}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:3.775,y:-2.925}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:-2.925,y:-4.475}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:-0.25,y:-10.125}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:-34.675,y:9.355}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{scaleX:1,scaleY:1,y:18.55}}]}).to({state:[{t:this.shape_9,p:{scaleX:1.1,scaleY:1.1,x:0.0115,y:-4.7479}},{t:this.shape_8,p:{scaleX:1.1,scaleY:1.1,x:0.0115,y:-4.7479}},{t:this.shape_7,p:{scaleX:1.1,scaleY:1.1,x:4.1364,y:-3.208}},{t:this.shape_6,p:{scaleX:1.1,scaleY:1.1,x:-3.2334,y:-4.9129}},{t:this.shape_5,p:{scaleX:1.1,scaleY:1.1,x:-0.291,y:-11.1278}},{t:this.shape_4,p:{scaleX:1.1,scaleY:1.1,x:-38.1577,y:10.2997}},{t:this.instance,p:{scaleX:1.1,scaleY:1.1,y:20.4}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_9,p:{scaleX:1,scaleY:1,x:0.025,y:-4.325}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:0.025,y:-4.325}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:3.775,y:-2.925}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:-2.925,y:-4.475}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:-0.25,y:-10.125}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:-34.675,y:9.355}},{t:this.instance,p:{scaleX:1,scaleY:1,y:18.55}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.7,-25.5,93.2,57.6);


(lib.隱藏題目b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.Path_3();
	this.instance.setTransform(0,18.55,1,1,0,0,0,72.8,39.9);
	this.instance.alpha = 0.6016;
	this.instance.filters = [new cjs.BlurFilter(7, 7, 1)];
	this.instance.cache(34,34,78,12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgvBEQgMAAABgMIAAhvQgBgMAMAAIBeAAQAMAAAAAMIAABvQAAAMgMAAgAgvA1QAAAEAFAAIBVAAQAFAAAAgEIAAgeIhfAAgAgvAMIBfAAIAAgdIhfAAgAgvg0IAAAYIBfAAIAAgYQAAgEgFAAIhVAAQgFAAAAAEg");
	this.shape.setTransform(26.1,-5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSBBQgQgEgLgGQgFgDgFgFQgDALgFAJQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQgGAAAAgFIABgEQAGgKACgNQACgLAAgMQAAgEAFAAQAFAAAAAFQAAALgBAJQAHAIAHADIABAAIAAgrIgdAAQgFAAAAgEQAAgGAFAAIBAAAQAEAAAAAGQAAAEgEAAIgZAAIAAARIAVAAQAFAAAAAGQAAAFgFAAIgVAAIAAAUIAQADQAPAEBCAAQAFAAAAAGQAAAFgGAAQhEAAgSgEgAA3AtIgKgJQgDgDAAgCIABgDIgQAAIABADQAAADgDACQgHAIgNAIIgCABQgEAAAAgHQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQALgGAIgJIgGAAQgIAAAAgJIAAg6QAAgIAIAAIAOAAIADgMIgaAAQgEAAAAgEQAAgFAEAAIA+AAQAFAAAAAFQAAAEgFAAIgZAAIgEAMIASAAQAKAAAAAIIAAA6QAAAJgKAAIgEAAQAJAJAJAFQAEABAAADQAAAHgHAAQgBAAgKgIgAAPAOQAAAEADAAIAgAAQAEAAAAgEIAAgIIgnAAgAAPgDIAnAAIAAgMIgnAAgAAPgiIAAAJIAnAAIAAgJQAAgDgEAAIggAAQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAAAABgAg2gPQgJAAAAgKIAAgjQAAgIAJAAIAnAAQAJAAAAAIIAAAjQAAAKgJAAgAg1geQAAAFAEAAIAdAAQAEAAAAgFIAAgHIglAAgAg1g3IAAAIIAlAAIAAgIQAAgEgEAAIgdAAQgEAAAAAEg");
	this.shape_1.setTransform(8.925,-4.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAIBHQgBAAAAgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAGgFIgeAAQgIAAAAgJIAAg7QAAgIAIAAIAkAAQAEAAAAAEQAAAFgEAAIgOAAIAAANIAKAAQAJAAAAAIIAAAQQAAAJgJAAIgKAAIAAAMIAOAAIADABIAEgEQAFgHAEgHQgCgOgBgRIgCgdIg7AAQgEAAAAAFIAAAvQAAARgDALQgDAKgDAGQgCAEgDAAQgGgBAAgEIACgFIACgFIADgKQACgKAAgNIAAgBIgKAAIAAADIgCAQIgDAMIgFALQgBABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAIgBgEQAAgBAAAAQAAgBABAAQAAgBAAAAQAAAAABgBIAEgJIACgKIACgPIgEAAQgEAAAAgFQAAgFAEAAIAXAAIAAgMIgNAAQgJAAAAgJIAAgaQAAgFAEAAQAFAAAAAFIAAAXQAAAAAAABQABABAAAAQAAAAABABQABAAAAAAIAKAAIAAgUQAAgKAKAAIBAAAIAAgFQAAgFAFAAQAFAAAAAFIABAFIALAAIgHgEQAAAAgBgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgEAEAAIAEABIAIAFQABABAAAAQAAAAABABQAAAAAAABQAAABAAAAIAAACQAAABABAAQAAAAAAABQAAAAABABQAAABAAABQAAAFgFAAIgRAAQABAgACANQAFgLAFgOQAAgDAFAAIADABQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAIgBADQgFASgHANIgEAHIAEARQACAEACAAQAAAAAAAAQABAAAAAAQAAgBABAAQAAAAAAgBQACgDABgPQABgGAEAAQAFAAAAAGQgBATgEAJQgEAJgGAAQgFAAgEgGQgEgIgDgMIgFAHQgJAKgLAIQgBAAAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAgBgAgOAuQAAAEADAAIAKAAIAAgMIgNAAgAgOAcIAaAAQABAAAAAAQABAAAAAAQAAgBABAAQAAgBAAgBIAAgIQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAIgaAAgAgOgEIAAAJIANAAIAAgNIgKAAQgBAAAAAAQgBABAAAAQgBABAAAAQAAABAAABgAgegwIAAgDIgjAAQgFAAAAgFQAAgFAFAAIAjAAIAAgFQAAgGAGAAQAFAAAAAGIAAAFIAjAAIAAgFQAAgGAFAAQAGAAAAAGIAAAFIApAAQAFAAAAAFQAAAFgFAAIgpAAIAAACQAAAGgGAAQgFAAAAgGIAAgCIgjAAIAAADQAAAGgFAAQgGAAAAgGg");
	this.shape_2.setTransform(-8.075,-5.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhGBDIAAh+QAAgKAJAAIAEAAIASAAQAHAAAAAIIgBAFIgJAdIgBAFIABAFQAGALACAGQABAGAAAHQAAAKgEAIQgGAIgLAAIgGgBIAAAdQAAAGgGAAQgEAAAAgGgAg8g3IAABSIAFABQAGAAADgFQADgEAAgGIgBgKQgCgGgHgMIgBgFIABgGIAJgfQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgLAAQgBAAAAAAQgBABAAAAQgBABAAAAQAAABAAABgAgHBDQgFgDAAgIIAAgOQAAgFAFAAQAGAAAAAFIAAAMQAAAEACABQADACANAAQANAAACgBQABAAABgBQAAAAAAAAQABgBAAAAQAAAAAAgBIAAgGQABgGAEAAQAGAAAAAIQAAALgCACQgBACgGABQgFACgPAAQgSAAgGgEgAgwBCIACgEQAJgLAHgMQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAQAFAAAAAFQAAADgCAEQgIAOgHAHIgEACQgGAAAAgFgAA8BBQgEgOgGgIIAAgCQAAgFAFAAQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAHAJAEAMIABADQAAAFgGAAQgDAAgCgDgAANA0IgCgMIgBgBQAAgEAFAAQADAAACADIADAMIAAACQAAAEgFAAQgFAAAAgEgAgQAgQgFAAAAgEQAAgEAFAAIA+AAQAEAAAAgEIAAgEIhKAAQgEAAAAgEQAAgEAEAAIBKAAIAAgDQAAgEgEAAIg+AAQgFAAAAgDQAAgEAFAAIBDAAQAJAAAAAHIAAAHIAGAAQAEAAAAAEQAAAEgEAAIgGAAIAAAIQAAAIgJAAgAgbgNQgEAAAAgFQAAgEAEAAIApAAIAAgIIgiAAQgEAAAAgEQAAgFAEAAIAJAAIgBgCIgDgLIgBgCQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAIgGAAQgGAAAAgGQAAgEAFAAIAngBQAWgBAUgDQAFAAAAAGQAAAEgHABIgnADIACABIADAKIABACQAAAFgGAAQgEAAAAgFIgCgJIgBgBQAAgBAAAAQAAgBABAAQAAAAAAgBQAAAAABAAIgXABIABABIAFALIABAEIgBACIApAAIAAgBIABgDQAHgGAEgHQAAAAABgBQAAAAAAgBQABAAAAAAQABAAAAAAQAFAAAAAEQAAADgCADIgIAJIANAAQAFAAAAAFQAAAEgFAAIgjAAIAAAIIAnAAQAFAAAAAEQAAAFgFAAg");
	this.shape_3.setTransform(-24.725,-5.025);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8FBEBC").s().p("AADALQgcgEgFgNIAPgGIALAMQANAMAWAAIgFABQgLAAgMgCg");
	this.shape_4.setTransform(-34.675,9.355);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ADNAqQhhgWhrAAQhaAAiSApQhJAUg3AVIAAiCQgBggAigTQAkgWA9AAIG3AAQBuAAAfAWQASAMAAAnIAACCQhAgmhggWg");
	this.shape_5.setTransform(-0.25,-10.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8FBEBC").s().p("AlUCOQgQgOAAgSIAAjJQAAghAOgOQAUgUA4AAIH1AAQBMAAAuAcQgngNgxAAIn2AAQg7AAgYAOQgWANAAAdIAADBQAAAMAOATQAPAVAOABQgbgCgSgPg");
	this.shape_6.setTransform(-2.925,-4.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjnCTQhLAAgtgbQAnAMAvAAIHwAAQA8AAAVgMQAUgLAAgcIAAi0QAAgKgOgPQgMgOgPgIQAgAKANAIQAQAKAAAPIAAC5QAAAhgNANQgTATg4AAg");
	this.shape_7.setTransform(3.75,-2.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#9ED1CE").ss(0.5,0,0,2.6).p("AGWBnQAAAngPAPQgXAXhBAAIpdAAQhBAAgXgXQgPgPAAgnIAAjNQAAgnAPgPQAXgXBBAAIJdAAQBBAAAXAXQAPAPAAAng");
	this.shape_8.setTransform(0,-4.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFFFF","#9ED1CE"],[0,1],0.6,-16.9,-0.6,16.8).s().p("AkuC0QhBAAgWgXQgQgPAAgnIAAjNQAAgnAQgPQAWgXBBAAIJdAAQBBAAAWAXQAQAPAAAnIAADNQAAAngQAPQgWAXhBAAg");
	this.shape_9.setTransform(0,-4.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgzBLQgNAAAAgNIAAh7QAAgNANAAIBnAAQANAAAAANIAAB7QAAANgNAAgAgzA6QAAAFAEgBIBfAAQAEABAAgFIAAghIhnAAgAgzANIBnAAIAAggIhnAAgAgzg5IAAAaIBnAAIAAgaQAAgFgEAAIhfAAQgEAAAAAFg");
	this.shape_10.setTransform(28.625,-5.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUBHQgSgEgLgGQgGgEgGgFQgDAMgFAJQgCADgDAAQgGAAAAgGIABgEQAGgLADgPQABgLAAgNQAAgFAGAAQAGAAAAAFQAAAMgCALQAIAIAIADIABABIAAgwIggAAQgFAAAAgFQAAgGAFAAIBGAAQAFAAAAAGQAAAFgFAAIgbAAIAAATIAXAAQAFAAAAAGQAAAGgFAAIgXAAIAAAWIASAEQAQADBJAAQAFABAAAGQAAAGgHAAQhKAAgUgFgAA9AyIgLgLQgDgDAAgCIAAgDIgSAAIABADQAAADgCACQgIAKgOAIIgDABQgFAAAAgHQAAgDACgBQAMgHAJgJIgHAAQgJAAAAgKIAAhAQAAgJAJAAIAPAAIAEgNIgdAAQgEAAAAgFQAAgFAEAAIBEAAQAGAAAAAFQAAAFgGAAIgbAAIgEANIAUAAQAKAAAAAJIAABAQAAAKgKAAIgFAAQAKAKAKAFQAEABAAAEQAAAHgHAAQgCAAgKgIgAAQAQQAAAEAEAAIAjAAQAEAAAAgEIAAgKIgrAAgAAQgDIArAAIAAgOIgrAAgAAQglIAAAKIArAAIAAgKQAAgEgEAAIgjAAQgEAAAAAEgAg7gRQgLAAAAgKIAAgnQAAgJALAAIAqAAQAKAAAAAJIAAAnQAAAKgKAAgAg7ghQAAAGAFAAIAgAAQAEAAAAgGIAAgIIgpAAgAg7g8IAAAIIApAAIAAgIQAAgFgEAAIggAAQgFAAAAAFg");
	this.shape_11.setTransform(9.725,-4.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAIBPQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBABAAQAAgBAAAAQABgBAAAAIAGgFIghAAQgIAAgBgKIAAhBQABgJAIAAIAoAAQAEAAAAAFQAAAFgEABIgPAAIAAANIALAAQAJABAAAHIAAATQAAAJgJAAIgLAAIAAAOIAPAAIADAAIAFgEQAFgHAFgIIgEgiIgCggIhBAAQgEAAAAAFIAAA1QAAARgEAMQgCAMgFAHQgCAEgDAAQgGAAAAgGIABgEIADgGIAEgLQACgMAAgNIAAgCIgLAAIAAADIgCASIgEAOQgCAGgDAGQgBAAAAAAQgBAAAAABQgBAAAAAAQgBAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBABAAIAEgKIADgLIACgRIgFAAQgEAAAAgGQAAgEAEAAIAaAAIAAgOIgOAAQgLAAAAgKIAAgdQAAgFAFAAQAGAAAAAFIAAAZQAAABAAABQAAABAAAAQABABAAAAQABAAABAAIALAAIAAgWQAAgLALAAIBGAAIAAgFQAAgGAGAAQAFAAABAGIAAAFIAMAAIgHgEQgDgDABgCQAAgEAEAAQABAAAAAAQABAAAAAAQABAAAAABQABAAABABIAJAEQAAABAAABQABAAAAABQAAAAAAABQAAAAAAABIAAACQACABAAAFQABAFgGAAIgTAAQABAjACAPQAGgMAFgQQABgEAFAAIADACQABAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIgBADQgFAUgIAOIgFAIIAGATQACAFABAAQABAAAAgBQABAAAAAAQAAAAAAgBQABAAAAgBQACgDABgRQACgFAEAAQAGAAgBAFQgBAVgEAKQgEAKgIAAQgFAAgEgHQgFgIgDgNIgGAHQgJALgNAJIgDACQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBAAgAgQAyQAAAEAEABIAKAAIAAgOIgOAAgAgQAfIAdAAQABAAABAAQAAAAABgBQAAAAAAgBQAAgBAAAAIAAgJQAAgBAAgBQAAAAAAgBQgBAAAAAAQgBAAgBAAIgdAAgAgQgFIAAAKIAOAAIAAgNIgKAAQgEgBAAAEgAghg0IAAgFIgnAAQgFABAAgGQAAgFAFAAIAnAAIAAgGQAAgHAGABQAGgBAAAHIAAAGIAmAAIAAgGQABgHAFABQAHgBAAAHIAAAGIAtAAQAFAAAAAFQAAAGgFgBIgtAAIAAAEQAAAFgHAAQgFAAgBgFIAAgEIgmAAIAAAFQAAAFgGABQgGgBAAgFg");
	this.shape_12.setTransform(-9,-5.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhNBKIAAiLQAAgLAKAAIAFAAIATAAQAIAAAAAJIgBAFIgKAgIgBAGIABAFQAHANACAGIABAOQAAAMgFAHQgGAKgMgBIgHgBIAAAhQAAAGgGAAQgFAAAAgGgAhCg9IAABbIAGABQAGAAADgGQAEgEAAgHIgCgLQgBgGgIgOIgBgFIABgHIAKgiQAAAAAAgBQAAAAAAAAQgBgBAAAAQgBAAAAAAIgMAAQgEAAAAAEgAgHBKQgGgEAAgJIAAgOQAAgHAGABQAGgBAAAHIAAAMQAAAFACABQAEABAOABQAOAAADgBQABgBAAAAQABAAAAgBQABAAAAAAQAAgBAAAAIAAgGQAAgHAGAAQAFAAABAIQAAAMgDACQgBADgGABQgGABgQABQgUgBgGgDgAg0BIIABgEQALgLAHgPQABAAAAgBQAAAAABAAQAAgBABAAQABAAAAAAQAGAAAAAFQAAAEgCADQgJAQgIAIIgEACQgGgBAAgFgABDBHQgFgPgGgIIgBgDQAAgFAFAAQADAAACACQAHALAGANIAAADQAAAGgHAAQgDAAgBgEgAAOA5IgCgOIAAgBQAAgDAEAAQAEgBACAEQACAEABAIIAAADQAAAFgFAAQgFAAgBgFgAgSAjQgFAAAAgEQAAgFAFAAIBFAAQAEAAAAgEIAAgEIhRAAQgFAAAAgFQAAgFAFAAIBRAAIAAgDQAAgDgEAAIhFAAQgFgBAAgEQAAgDAFAAIBKAAQALgBAAAIIAAAHIAGAAQAFAAAAAFQAAAFgFAAIgGAAIAAAIQAAAJgLAAgAgdgOQgFgBAAgFQAAgEAFAAIAtAAIAAgJIgmAAQgFAAAAgFQAAgFAFAAIAKAAIgBgCIgEgMIgBgCQAAgBAAgBQABAAAAgBQAAAAAAAAQABgBAAAAIgHAAQgGAAAAgGQAAgFAFAAIArgBIAugEQAFAAAAAGQAAAFgHABIgrACIADACIADAMIAAACQAAAEgGAAQgEAAAAgEIgDgLIAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAIgZABIACABIAFANIABADIgBADIAtAAIAAgCIABgDQAHgGAFgIQABAAAAgBQAAAAABgBQAAAAABAAQAAgBABAAQAFAAAAAGQAAADgCADIgJAKIAPAAQAEAAAAAFQAAAFgEAAIgoAAIAAAJIAsAAQAFAAAAAEQAAAFgFABg");
	this.shape_13.setTransform(-27.325,-5.05);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9,p:{scaleX:1,scaleY:1,x:0,y:-4.325}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:0,y:-4.325}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:3.75,y:-2.925}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:-2.925,y:-4.475}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:-0.25,y:-10.125}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:-34.675,y:9.355}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regY:39.9,scaleX:1,scaleY:1,x:0,y:18.55}}]}).to({state:[{t:this.shape_9,p:{scaleX:1.1,scaleY:1.1,x:-0.511,y:-4.7479}},{t:this.shape_8,p:{scaleX:1.1,scaleY:1.1,x:-0.511,y:-4.7479}},{t:this.shape_7,p:{scaleX:1.1,scaleY:1.1,x:3.6139,y:-3.208}},{t:this.shape_6,p:{scaleX:1.1,scaleY:1.1,x:-3.7284,y:-4.9129}},{t:this.shape_5,p:{scaleX:1.1,scaleY:1.1,x:-0.786,y:-11.1278}},{t:this.shape_4,p:{scaleX:1.1,scaleY:1.1,x:-38.6527,y:10.2997}},{t:this.instance,p:{regY:39.8,scaleX:1.1,scaleY:1.1,x:-0.5,y:20.3}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_9,p:{scaleX:1,scaleY:1,x:0,y:-4.325}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:0,y:-4.325}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:3.75,y:-2.925}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:-2.925,y:-4.475}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:-0.25,y:-10.125}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:-34.675,y:9.355}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regY:39.9,scaleX:1,scaleY:1,x:0,y:18.55}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.1,-25.5,93.1,57.6);


(lib.重新佈題b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.Path_1();
	this.instance.setTransform(0,18.55,1,1,0,0,0,72.8,39.9);
	this.instance.alpha = 0.6016;
	this.instance.filters = [new cjs.BlurFilter(7, 7, 1)];
	this.instance.cache(34,34,78,12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSBBQgQgEgLgGQgFgDgFgFQgDALgFAJQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQgGAAAAgFIABgEQAGgKACgNQACgLAAgMQAAgEAFAAQAFAAAAAFQAAALgBAJQAHAIAHADIABAAIAAgrIgdAAQgFAAAAgEQAAgGAFAAIBAAAQAEAAAAAGQAAAEgEAAIgZAAIAAARIAVAAQAFAAAAAGQAAAFgFAAIgVAAIAAAUIAQADQAPAEBCAAQAFAAAAAGQAAAFgGAAQhEAAgSgEgAA3AtIgKgJQgDgDAAgCIABgDIgQAAIABADQAAADgDACQgHAIgNAIIgCABQgEAAAAgHQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQALgGAIgJIgGAAQgIAAAAgJIAAg6QAAgIAIAAIAOAAIADgMIgaAAQgEAAAAgEQAAgFAEAAIA+AAQAFAAAAAFQAAAEgFAAIgZAAIgEAMIASAAQAKAAAAAIIAAA6QAAAJgKAAIgEAAQAJAJAJAFQAEABAAADQAAAHgHAAQgBAAgKgIgAAPAOQAAAEADAAIAgAAQAEAAAAgEIAAgIIgnAAgAAPgDIAnAAIAAgMIgnAAgAAPgiIAAAJIAnAAIAAgJQAAgDgEAAIggAAQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAAAABgAg2gPQgJAAAAgKIAAgjQAAgIAJAAIAnAAQAJAAAAAIIAAAjQAAAKgJAAgAg1geQAAAFAEAAIAdAAQAEAAAAgFIAAgHIglAAgAg1g3IAAAIIAlAAIAAgIQAAgEgEAAIgdAAQgEAAAAAEg");
	this.shape.setTransform(25.925,-4.825);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAEBDIAAhGIggAAQgEAAAAAEIAAA8QAAAFgGAAQgGAAAAgFIAAg9QgIAGgMAFQAAABgBAAQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBAAAAQgBgBAAgBQAAAAAAgBQAAAAAAgBQAAgBABAAQAAgBAAAAQABgBAAAAQAPgHAKgJQANgLAKgNIADgEIguAAQgGAAAAgGQAAgFAGAAIA0AAIAHgPQABgEAEAAQABAAAAAAQABAAAAABQAAAAAAAAQABAAAAABQABAAAAABQAAAAAAAAQABABAAABQAAAAAAABIgBADIgCAKIBEAAQAGAAAAAFQAAAGgGAAIhKAAIgHALQgHAJgIAIIAgAAIAAgQQAAgGAGAAQAGAAAAAGIAAAQIAmAAQAMAAAAALIAAA4QAAANgRAAQgJAAgLgEQgDgBAAgDQAAgHAEAAIAEABQAJADAEAAQAHAAAAgHIAAgvQAAgEgFAAIghAAIAABGQAAAGgGAAQgGAAAAgGg");
	this.shape_1.setTransform(8.825,-5.025);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgmBFIAAgjIgGAKIgOAQQgFAFgCAAQgGAAAAgFQAAgEADgCQAOgOAHgLQAFgHADgHIgUAAQgFAAAAgFQAAgFAFAAIAVAAIAAgOIgcAAQgFAAAAgGQAAgFAFAAIAmAAIABgBQAFgJAGgOQAAgBAAAAQABgBAAAAQABAAABAAQAAAAABAAIAFABQAAAAABAAQAAABAAAAQAAABABAAQAAAAAAABIgBADQgFALgGAIIAPAAQAEAAAAAFQAAAGgEAAIgZAAIAAAOIAUAAQAFAAAAAFQAAAFgFAAIgUAAIAAACIAUAaIACAFQAAAFgGAAQgDAAgCgDIgLgRIAAAkQAAAFgGAAQgFAAAAgFgAArBEIAAhVIgVAAIAAAJQAAAcgGAUQgFASgGAIQgDACgCAAQgGAAAAgGIACgEQAGgKAEgPQAFgSAAgXIAAgxQAAgIAJAAQAdAAAOgFQAGAAAAAFQAAAEgFABQgKAFgcAAQgEAAAAAFIAAAXIAtAAQAFAAAAAFQAAAFgFAAIgMAAIAABVQAAAFgHAAQgFAAAAgFgAgxgYIgJgOIgBgDQAAgFAFAAIADABQAFAGAEAIIACADQAAAFgGAAIgDgBgAhAgxQgFAAAAgGQAAgFAFAAIAZAAIAAgHQAAgGAFAAQAHAAAAAGIAAAHIAZAAQADAAAAAFQAAAGgDAAg");
	this.shape_2.setTransform(-7.975,-5.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhEBIQgFAAAAgFQAAgFAFgBIA9AAIAAgLIg0AAQgFABAAgGQAAgEAFgBIA0AAIAAgKIgsAAQgJAAAAgJIAAglQAAgJAJAAIAsAAIAAgJIg/AAQgFAAAAgGQAAgFAFAAIA/AAIAAgKIgyACQgGAAAAgGQAAgEAFgBIA4gCQAfgBAcgEQAEAAAAAGQAAAEgGABQgTADggABIAAALIBDAAQAFAAAAAFQAAAGgFAAIhDAAIAAAJIAvAAQAJAAAAAJIAAAlQAAAJgJAAIgvAAIAAAKIA4AAQAFABAAAEQAAAGgFgBIg4AAIAAALIA/AAQAFABAAAFQAAAFgFAAgAAEAUIAqAAQABAAAAAAQABgBAAAAQAAgBABAAQAAgBAAgBIAAgKIgtAAgAgxAQQAAABAAABQAAAAABABQAAAAAAABQABAAABAAIAnAAIAAgOIgqAAgAAEgCIAtAAIAAgJQAAgBAAgBQgBAAAAgBQAAAAgBAAQAAAAgBAAIgqAAgAgxgLIAAAJIAqAAIAAgMIgnAAQgBAAgBAAQAAAAAAAAQgBABAAAAQAAABAAABg");
	this.shape_3.setTransform(-24.975,-5.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#DFB66B").s().p("AADALQgcgEgFgNIAQgGIAKAMQANAMAWAAIgFABQgLAAgMgCg");
	this.shape_4.setTransform(-34.675,9.355);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ADNAqQhhgWhrAAQhZAAiTApQhJAUg4AVIAAiCQAAgfAigUQAkgWA9AAIG3AAQBuAAAfAWQASAMAAAnIAACCQhBgmhfgWg");
	this.shape_5.setTransform(-0.225,-10.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#DFB66B").s().p("AlUCOQgQgOAAgSIAAjJQAAghAOgOQAUgUA4AAIH1AAQBMAAAuAcQgngNgxAAIn2AAQg7AAgYAOQgWANAAAdIAADBQAAAMAOATQAPAVAOABQgbgCgSgPg");
	this.shape_6.setTransform(-2.925,-4.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjnCTQglAAgggHQgfgIgUgMQAlAMAxAAIHwAAQA7AAAWgMQATgLAAgcIAAi0QAAgKgNgPQgNgOgOgIQAfAKANAIQARAKAAAPIAAC5QAAAhgOANQgSATg4AAg");
	this.shape_7.setTransform(3.8,-2.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FBCB77").ss(0.5,0,0,2.6).p("AGWBnQAAAngPAPQgXAXhBAAIpdAAQhBAAgXgXQgPgPAAgnIAAjNQAAgnAPgPQAXgXBBAAIJdAAQBBAAAXAXQAPAPAAAng");
	this.shape_8.setTransform(0.025,-4.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFFFF","#FBCB77"],[0,1],0.6,-16.9,-0.6,16.8).s().p("AkuC0QhBAAgXgXQgPgPAAgnIAAjNQAAgnAPgPQAXgXBBAAIJdAAQBBAAAXAXQAPAPAAAnIAADNQAAAngPAPQgXAXhBAAg");
	this.shape_9.setTransform(0.025,-4.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUBHQgSgEgLgGQgGgEgGgFQgDAMgFAJQgCADgDAAQgGAAAAgGIABgEQAGgLADgPQABgLAAgNQAAgFAGAAQAGAAAAAFQAAAMgCALQAIAIAIADIABABIAAgwIggAAQgFAAAAgFQAAgGAFAAIBGAAQAFAAAAAGQAAAFgFAAIgbAAIAAATIAXAAQAFAAAAAGQAAAGgFAAIgXAAIAAAWIASAEQAQADBJAAQAFABAAAGQAAAGgHAAQhKAAgUgFgAA9AyIgLgLQgDgDAAgCIAAgDIgSAAIABADQAAADgCACQgIAKgOAIIgDABQgFAAAAgHQAAgDACgBQAMgHAJgJIgHAAQgJAAAAgKIAAhAQAAgJAJAAIAPAAIAEgNIgdAAQgEAAAAgFQAAgFAEAAIBEAAQAGAAAAAFQAAAFgGAAIgbAAIgEANIAUAAQAKAAAAAJIAABAQAAAKgKAAIgFAAQAKAKAKAFQAEABAAAEQAAAHgHAAQgCAAgKgIgAAQAQQAAAEAEAAIAjAAQAEAAAAgEIAAgKIgrAAgAAQgDIArAAIAAgOIgrAAgAAQglIAAAKIArAAIAAgKQAAgEgEAAIgjAAQgEAAAAAEgAg7gRQgLAAAAgKIAAgnQAAgJALAAIAqAAQAKAAAAAJIAAAnQAAAKgKAAgAg7ghQAAAGAFAAIAgAAQAEAAAAgGIAAgIIgpAAgAg7g8IAAAIIApAAIAAgIQAAgFgEAAIggAAQgFAAAAAFg");
	this.shape_10.setTransform(28.425,-4.825);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAFBKIAAhOIgkAAQgEAAAAAFIAABCQAAAGgHAAQgGAAAAgGIAAhDQgJAGgNAHIgEABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBAAIgBgFQAAgDACgCQAQgIALgJQAPgNAKgOIAEgFIgzAAQgGABAAgHQAAgFAGAAIA6AAIAHgRQACgEAEAAQABAAAAAAQABAAAAAAQAAABAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAABQAAAAAAABIgBAEIgDALIBMAAQAGAAAAAFQAAAHgGgBIhSAAIgIAMQgHAKgJAKIAkAAIAAgSQgBgHAHABQAGgBAAAHIAAASIAqAAQANAAAAAMIAAA+QAAAOgTAAQgJAAgMgFQgEgBAAgEQAAgHAFAAIAEABQAKADAFAAQAHAAAAgIIAAgzQAAgFgFAAIglAAIAABOQAAAGgGAAQgHAAABgGg");
	this.shape_11.setTransform(9.6,-5.05);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgqBLIAAgmIgHALQgHAKgIAIQgFAFgDABQgGgBAAgFQAAgFADgCQAQgPAIgNIAIgOIgWAAQgGAAAAgHQAAgEAGgBIAXAAIAAgPIgeAAQgGgBAAgFQAAgGAGAAIApAAIABgCQAGgKAGgPQABgCAEgBQADABACABQAAAAABABQAAAAAAABQAAAAABABQAAAAAAABIgBADIgLAVIAQAAQAEAAAAAGQAAAFgEABIgcAAIAAAPIAWAAQAGABAAAEQAAAHgGAAIgWAAIAAACIAXAcIABAFQAAAHgGgBQgEABgBgEIgNgTIAAAnQAAAGgGAAQgGAAAAgGgAAvBKIAAhcIgXAAIAAAKQAAAegGAWQgGATgHAJQgCADgDAAQgGAAgBgHIACgEQAHgLAEgQQAGgVAAgYIAAg2QAAgKAKAAQAgAAAPgGQAHAAAAAHQAAAEgFABQgMAFgeAAQgFAAAAAGIAAAZIAyAAQAFAAAAAFQAAAGgFABIgOAAIAABcQAAAGgHABQgGgBAAgGgAg2gbIgKgQIgBgDQAAgFAGgBIADACIAKAPIABAEQAAAGgGAAQAAAAgBgBQAAAAgBAAQAAAAAAAAQgBgBAAAAgAhGg2QgGgBAAgGQAAgFAGAAIAbAAIAAgIQAAgGAGAAQAHAAAAAGIAAAIIAbAAQAFAAAAAFQAAAGgFABg");
	this.shape_12.setTransform(-8.875,-5.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhLBPQgFAAAAgGQAAgFAFAAIBDAAIAAgMIg5AAQgGAAAAgGQAAgFAGAAIA5AAIAAgLIgwAAQgLAAAAgLIAAgpQAAgJALAAIAwAAIAAgLIhFAAQgFAAAAgGQAAgFAFAAIBFAAIAAgLIg3ACQgHAAAAgGQAAgGAGAAIA+gCQAigCAegEQAGAAAAAHQAAAEgHABQgWADgjACIAAAMIBKAAQAFAAAAAFQAAAGgFAAIhKAAIAAALIA0AAQAKAAAAAJIAAApQAAALgKAAIg0AAIAAALIA+AAQAFAAAAAFQAAAGgFAAIg+AAIAAAMIBGAAQAFAAAAAFQAAAGgFAAgAAEAWIAvAAQAAAAABgBQABAAAAAAQAAgBABgBQAAAAAAgBIAAgLIgyAAgAg2ASQAAAEADAAIArAAIAAgPIguAAgAAEgCIAyAAIAAgKQAAgBAAgBQgBAAAAgBQAAAAgBgBQgBAAAAAAIgvAAgAg2gMIAAAKIAuAAIAAgOIgrAAQgBAAAAAAQgBABAAAAQgBABAAAAQAAABAAABg");
	this.shape_13.setTransform(-27.575,-5.375);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9,p:{scaleX:1,scaleY:1,x:0.025,y:-4.325}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:0.025,y:-4.325}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:3.8,y:-2.925}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:-2.925,y:-4.475}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:-0.225,y:-10.125}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:-34.675,y:9.355}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{scaleX:1,scaleY:1,y:18.55}}]}).to({state:[{t:this.shape_9,p:{scaleX:1.1,scaleY:1.1,x:0.0115,y:-4.7479}},{t:this.shape_8,p:{scaleX:1.1,scaleY:1.1,x:0.0115,y:-4.7479}},{t:this.shape_7,p:{scaleX:1.1,scaleY:1.1,x:4.1639,y:-3.208}},{t:this.shape_6,p:{scaleX:1.1,scaleY:1.1,x:-3.2334,y:-4.9129}},{t:this.shape_5,p:{scaleX:1.1,scaleY:1.1,x:-0.2635,y:-11.1278}},{t:this.shape_4,p:{scaleX:1.1,scaleY:1.1,x:-38.1577,y:10.2997}},{t:this.instance,p:{scaleX:1.1,scaleY:1.1,y:20.4}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_9,p:{scaleX:1,scaleY:1,x:0.025,y:-4.325}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:0.025,y:-4.325}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:3.8,y:-2.925}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:-2.925,y:-4.475}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:-0.225,y:-10.125}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:-34.675,y:9.355}},{t:this.instance,p:{scaleX:1,scaleY:1,y:18.55}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.7,-25.5,93.2,57.6);


(lib.反應區b0 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.hitBox = new lib.hitArea();
	this.hitBox.name = "hitBox";
	this.hitBox.setTransform(-67.1,-243.15,1.9103,6.7218,0,0,0,-34.7,-34.8);
	this.hitBox.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.hitBox).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.反應區b0, new cjs.Rectangle(-66.6,-240.8,131.7,463.5), null);


(lib.使用說明help = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.close_btn.on("click", onMouseClick_help.bind(this));
		this.close_btn.on("pressup", onMouseUp_help.bind(this));
		
		function onMouseClick_help(evt) {
			
			this.visible=!this.visible;
			
			
		}
		function onMouseUp_help(evt) {
			
			
			
		}
		/* shield.useHandCursor = 0;
		*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_3
	this.close_btn = new lib.quit();
	this.close_btn.name = "close_btn";
	this.close_btn.setTransform(663.5,442.4);
	new cjs.ButtonHelper(this.close_btn, 0, 1, 1);

	this.timeline.addTween(cjs.Tween.get(this.close_btn).wait(1));

	// 圖層_6
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAZQgLgKAAgPQAAgNALgLQAKgLAOAAQAOAAALALQALALAAANQAAAPgLAKQgLAKgOAAQgOAAgKgKgAgNgNQgGAGAAAHQAAAJAGAFQAFAGAIAAQAIAAAGgGQAGgFAAgJQAAgHgGgGQgGgGgIAAQgIAAgFAGg");
	this.shape.setTransform(357.8,357.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ah7B2IAAjbQAAgSASAAIAHAAIAgAAQAOAAAAANQAAAEgCAGIgRAwIgBAIQAAAEADAFQAKATADAMQADAKAAANQAAARgJANQgKAOgTAAIgNgBIAAA0QAAAKgJAAQgKAAAAgKgAhohfIAACMIALADQAKAAAFgJQAFgHAAgLQAAgIgCgJQgDgLgLgVQgDgEAAgFIABgJIARgzQAAgDgEAAIgUAAQgGAAAAAFgAgMByQgHgCAAgHQAAgLAIAAIAGABQASAIAGAAQAFAAAAgQIAAhDIg8AAQgKAAAAgKQAAgJAKAAIA8AAIAAgjIgwAAQgKAAAAgJQAAgKAKAAIB1AAQAKAAAAAKQAAAJgKAAIgwAAIAAAjIA9AAQAKAAAAAJQAAAKgKAAIg9AAIAABPQAAAZgTAAQgPAAgXgKgABoBrQgPglgSgWIgCgFQAAgHAKAAQAEAAADAEQAWAaAPAgIABAIQAAAIgMAAQgFAAgDgHgAhHBiQAAgDACgEQAegYAVgcQADgGAEAAQAKAAAAAKQAAAFgEAHQgZAggXATQgEACgDAAQgLAAAAgKgABsg5QgbgLgLgHQgRgMgPgQQgDgDgDAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgSASgTAMQgQAJgVAJIgFAAQgIAAgBgKQAAgFAGgDQAZgJARgKQARgLAPgQQAFgHAGAAQAHAAAKALQANAMAQALQAQAKAaAJQAEADAAAFQAAAKgLAAIgFgBg");
	this.shape_1.setTransform(330.175,357.975);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AA3B2QgGgDgBgHQABgJAGgBIAHABQAYAGAHAAQAKAAAAgMIAAjOQAAgKAJAAQALAAAAAKIAADUQAAAZgdAAQgOAAgZgGgAAAB6QgGgDgBgGQABgLAGAAIACABIAIACQAGAAAAgLIAAheIgXAAIAABqQAAAIgKAAQgKAAABgIIAAhqIgSAAIAABqQAAAIgKAAQgKAAABgIIAAhqIgXAAIAAByQAAAKgKAAQgJAAAAgKIAAhyIgHAAQgJAAgBgJQABgKAJAAIAHAAIAAhQQAAgUAUAAIBlAAQATAAAAAUIAABQIAEAAQAKAAAAAKQAAAJgKAAIgEAAIAABpQAAATgXAAQgFAAgHgCgAgHgTIAXAAIAAhKQAAgHgEAAIgTAAgAgsgTIASAAIAAhRIgSAAgAhWhdIAABKIAXAAIAAhRIgTAAQgEAAAAAHgAA8A/IAAihQgBgKAKAAQAKAAAAAKIAAChQAAAKgKAAQgKAAABgKg");
	this.shape_2.setTransform(301.45,358.075);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgEBvQgJgDABgIQAAgKAJgBIAKABQAqAIAMAAQARAAAAgTIAAixIjEAAQgKAAABgLQgBgKAKAAIDsAAQAKAAAAAKQAAALgKAAIgSAAIAAC6QAAAggjAAQgbAAgqgJgAhUAxQgRAAAAgTIAAhOQAAgRARAAIBoAAQASAAAAARIAABOQAAATgSAAgAhRgmIAAA6QABAIAGAAIBUAAQAIAAgBgIIAAg6QABgGgIAAIhUAAQgGAAgBAGg");
	this.shape_3.setTransform(273.75,358.525);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAdB0IAAjfQAAgRATAAIA4AAQATAAAAARIAACwQAAAYgaAAQgOAAgSgHQgJgDABgHQgBgMAKAAIAHACQAOAFAIAAQAIAAAAgNIAAiaQAAgHgGAAIgrAAQgFAAAAAHIAADUQABAKgLAAQgLAAABgKgAgIBtIgJgUQgRAIgaAGQgWAGgeAFQgKgBAAgKQgBgLAKgBIAIgBIAAjCQAAgVAUAAIBGAAQARAAABASIAABiQgBASgRAAIhHAAIAABOIAQgEQAZgFAUgHQgJgQgIgMQgDgFAAgCQAAgJALAAQAFAAAEAFQAUAfAOAmIABAHQAAAJgMAAQgEAAgCgIgAhWgKIA/AAQAHAAAAgHIAAgeIhGAAgAhWhjIAAAgIBGAAIAAggQAAgGgHAAIgOAAIgpAAQgIAAAAAGg");
	this.shape_4.setTransform(245.35,358.375);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgRAdQAAgDACgCIAMgKQAFgGACgGQgCACgCgBQgHABgGgGQgFgFAAgIQAAgIAGgGQAFgFAHAAQAIAAAGAFQAFAGAAAIQAAAKgDAIQgGAQgQANQgDADgCAAQgGAAAAgGg");
	this.shape_5.setTransform(217.775,357.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AhaB3QgVAAAAgVIAAjGIgEAAQgJAAAAgJQAAgJAJAAIDoAAQAIAAAAAJQAAAJgIAAIjQAAIAAC/QAAAKAIAAIDFAAQAKAAAAAIQAAAKgKAAgAg8BSQgPAAAAgPIAAg2QAAgOAPAAIA2AAQAPAAAAAOIAAA2QAAAPgPAAgAg4AWIAAAkQAAAHAFAAIAkAAQAHAAAAgHIAAgkQAAgHgHAAIgkAAQgFAAAAAHgAApBRQgNAAAAgNIAAg5QAAgMANAAIA7AAQAOAAAAAMIAAA5QAAANgOAAgAAvAWIAAAjQAAAGAFAAIAlAAQAHAAAAgGIAAgjQAAgHgHAAIglAAQgFAAAAAHgAgzgTQgPAAAAgPIAAggQAAgPAPAAICIAAQAQAAAAAPIAAAgQAAAPgQAAgAgwg5IAAAOQAAAHAGAAIB2AAQAHAAAAgHIAAgOQAAgHgHAAIh2AAQgGAAAAAHg");
	this.shape_6.setTransform(189.625,357.925);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("ABNBrQgSgKgOgNQgHgGABgEQgBgLALAAQAEAAAEADQAfAYAeAMQAHADABAGQAAANgNAAQgFAAgfgRgAiBBwQAAgGAGgCQAogRAbgXQAFgCACAAQAKAAAAAKQAAAFgEAEQgZAXgqASIgGACQgNAAAAgMgAh3A6QgJAAgBgLQABgKAJAAIAUAAIAAiOQgBgSAUAAICiAAQATAAAAASIAACOIASAAQALAAgBAKQABALgLAAgAhOAlICfAAIAAgZIifAAgAhOgEICfAAIAAgXIifAAgAhOgsICfAAIAAgVIifAAgAhOhgIAAAOICfAAIAAgOQgBgIgHAAIiQAAQgIAAABAIg");
	this.shape_7.setTransform(637.85,310.075);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("Ah0BtQgKAAAAgKQAAgJAKAAIBqAAIAAizIhcAAQgKAAAAgKQAAgJAKAAIDOAAQAKAAAAAJQAAAKgKAAIhdAAIAACzIBqAAQAKAAAAAJQAAAKgKAAg");
	this.shape_8.setTransform(609.8,310.375);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("Ag1B4QgIgDAAgIQAAgKAIgBQAgAJAIAAQAGAAAFgCQAGgBADgEQAFgFAAgEIgBgMIiBAAQgIAAgBgKQABgJAIAAIB1AAIgBAAQgGgGgGgDQgBAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQABgKAKgBIAGACIADADIASgFIAOgFIAFgDQAAgDgEAAIhoAAQgIAAAAgIQAAgJAIAAIB9AAQAQAAABAMQgBADgEAEQgIAGgPAHQgOAHgOAEIAFAHIBcAAQAJAAAAAJQAAAKgJAAIhUAAIABAMQAAAKgHAKQgFAJgLAEQgJAEgMAAQgSAAgXgIgAh9AZIAAggQAAgOAOAAIAKAAIgFhSQgBgKAFgFQADgFALAAQASAAATgEQAJAAAAAKQAAAIgKACQgSACgOAAQgFAAAAAGIABAOIAfAAQAJAAgBAHQABAJgJAAIgdAAIAAARIAhAAQAHAAAAAIQAAAJgHAAIgfAAIABAOICiAAIADgPIggAAQgGAAgBgJQABgIAGAAIAiAAIABgRIglAAQgHAAAAgJQAAgIAHAAIAnAAIADgPQgBgDgFAAIgkAAQgHAAAAgJQAAgIAHAAIAtAAQAQAAAAAOIgLBXIAHAAQAMAAAGAIQAEAGABALQAAAJgCAMQgDAIgKAAQgKAAAAgKIADgSQABgIgJAAIjFAAQgHAAABAFIAAAXQgBAKgJAAQgKAAAAgKgAgmgiQAAgEAFgBIATgKIgPgHQgCgDAAgCQgBgIAJAAIAEABIAWAJIASgNIAGgCQAIAAABAIQgBAFgEADIgKAIIAMAIIADAGQAAAJgIAAQgFAAgDgDIgRgJQgMAHgPAGIgHACQgGAAgBgKgAgrhTQgBgEAFgCIAUgKIgOgHQgCgDAAgDQgBgHAIAAIAFABIAUAJQAKgHAHgIQAFgCACAAQAIAAAAAJQAAAEgFAEIgKAJIANAIIACAFQAAAJgIAAQgEAAgEgCIgPgJQgMAHgRAHIgEACQgIAAAAgKg");
	this.shape_9.setTransform(581.95,309.925);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("ABxB+QgVgOgMgMQgLgKgIgLIgGAHQgVAYgbAOIgHACQgLAAAAgLQAAgEAEgDQAegTASgUIAHgJQgGgNgHgTQgHgWgFgaQgFALgGAJQgDAEgEAAQgLAAAAgKIADgFQAOgZAFgeQAEgZAAgbQAAgJAJAAQAKAAAAAKIgBAbIBMAAQAKABAAAJQAAAKgKAAIgKAAQAAASgEAaQgEAegJAcQgHARgIANQAJANAOAMQAIAKAQAKQAIADAAAGQAAALgLAAIgDgBgAAjg7IgFAVIABAAQAGgBACAHQAHAiAHAVIAHARQAGgJADgMQAMggADg5IgwAAIgBALgAhdB7QgHgDgBgGQABgKAHAAQARAFAEAAQAEAAADgCQAEgCACgEQADgEAAgGQAAgLgBgJQgZAFgjADQgJAAAAgKQAAgHAIgBQAjgDAUgDIABgBIgBgDIgIgKIgBgEQAAgIAKgBIAEADIAFAGIAKgGIAIgIIADgFQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgsAAIgCgBQgNANgQAIQgEADgDAAQgEAAgCgDQgDgDAAgDQAAgFADgCQAYgPASgRQAKgLAJgLIg2AAQgJAAAAgIQAAgKAJABIAmAAIAAghIggAAQgJABAAgJQAAgJAJAAIAgAAIAAgUQAAgKAKAAQAKAAAAAKIAAAUIAXAAQAHABABAFIAHgUQADgGAHgBQAEABADACQACACAAAEIgBAGQgKAhgPAXIATAAQAIgBAAAKQAAAIgIAAIgeAAQgMARgOAOIAtAAQAOAAAAAJQAAAEgDAFQgFAIgKAJQgKAKgLAFQAWgDARgFIAFAAQAGgBABAIQAAAFgGADQgQAFgYAFQACAMAAALQAAAKgGALQgEAIgIAEQgHADgJAAQgKABgMgFgAg6gvIAIAAIAFgIQAHgLAGgOIgDAAIgXAAg");
	this.shape_10.setTransform(554,309.85);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhhB2QgTAAAAgTIAAjFQAAgTATAAIDCAAQAUAAAAATIAADFQAAATgUAAgAhfhYIAACxQAAAJAHAAICwAAQAIAAAAgJIAAixQAAgJgIAAIiwAAQgHAAAAAJgAgxA9QgRAAAAgRIAAhdQAAgQARAAIBhAAQARAAgBAQIAABdQABARgRAAgAgugmIAABHQAAAIAHAAIBMAAQAIAAAAgIIAAhHQAAgHgIAAIhMAAQgHAAAAAHg");
	this.shape_11.setTransform(525.9,309.875);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAwBzQgRgLgNgOIgGACQgfALgoAHQgvAJgHAAQgMgBAAgLQAAgIAJgBQBFgJAngMIAMgEQgMgVgHgcIhMAAQgSABgBgUIAAhSQABgSASAAIBDAAIAAgWQAAgKAKAAQALAAgBAKIAAAWIBaAAQAUAAAAASIAABSQAAAUgUgBIhSAAQAHAVANASIABACQAfgMAcgPQALgBAAALQAAAIgIADQgUAMgbALQAIAHAKAGQARAMALAAQALAAAEgIQAEgHAAgTQAAgKAKAAQALAAAAAKQgCAbgGAOQgIAOgRAAQgVAAgYgNgAABAEIBLAAQAJAAAAgHIAAgYIhWAAQABATABAMgAhZgDQAAAHAIAAIA+AAQgCgMgBgTIhDAAgAgDguIBYAAIAAgVQAAgJgJAAIhPAAIAAAegAhZhDIAAAVIBCAAIgBgeIg5AAQgIAAAAAJg");
	this.shape_12.setTransform(497.8,309.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ah0B7QgJgDAAgGQABgKAIAAIABAAQAJAEAEAAQAIAAABgJIAAg/IgSAIIgFAAQgKABAAgLQAAgIAJgCIAYgKIAAhCIgVAAQgIAAgBgKQABgJAIAAIAVAAIAAgrQAAgLAKAAQAJAAAAALIAAArIASAAQAIAAABAJQgBAKgIAAIgSAAIAAA2IAOgIIAEgCQAJAAABALQAAADgFADQgIAJgPAIIAABOQAAAXgcAAQgGABgIgFgAgDB2QgPgHAAgUIAAhLIgQAGQgKAAAAgNQABgFAFgBIAUgGIAAggQgBgJAKAAQAKAAgBAJIAAAZIAfgLIAAgpQAAgKAKAAQAKAAAAAKIAAAhIAugQQAPAAAAAQIAAA9QAAARgIAFQgIAGgMAAQgFAAgOgCQgIgDAAgGQAAgLAIAAIASADQAFAAADgEQACgDAAgHIAAgsQABgIgGAAIglAPIAABVQAAAKgKAAQgKAAAAgKIAAhNIgfAKIAABQQAAALAIACQAMAEAeAAQAeAAAMgCQAJgCACgEQADgEABgYQAAgKAJAAQAKAAAAALQAAAMgCAMQgDAQgMAHQgJAGgsAAQguAAgNgFgAgwgoQAAgDACgDQALgPAJgRQAJgRAHgZQABgGAGgBQADABADACQAEADAAAEIgBAGIgEAMIBxAAQAIAAAAAJQAAAJgIAAIh2AAIgHANQgJARgNAPQgEAEgCABQgLAAABgJg");
	this.shape_13.setTransform(469.85,309.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AheB1IAAiEIgNATQgFAFgDAAQgLAAAAgJQAAgEACgDQAPgVAMgbQANgbAHglQACgHAGAAQAFAAAEACQADAEAAAEIgBAHQgGAdgKAZIAACsQAAAKgKAAQgKAAAAgKgAAeB0IAAhQIhLAAQgKAAAAgKQAAgKAKAAIBLAAIAAhKIgqAAIgCAGQgKAWgNASQgFAEgCAAQgLAAAAgKQAAgDACgCQAMgRAJgWQAKgXAHgeQABgGAHAAQAFAAACACQADADAAAEIgBAHIgGAbIAiAAIAAgmQAAgKAJAAQALAAAAAKIAAAmIA6AAQAJAAABAKQgBAKgJAAIg6AAIAABKIBEAAQAKAAAAAKQAAAKgKAAIhEAAIAABQQAAAKgLAAQgJAAAAgKg");
	this.shape_14.setTransform(441.75,310.025);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhKB3IAAhHQgRAJgQAFIgGACQgKgBAAgKQAAgJAIgDQAWgHAOgHIAFgDIAAhLIgYAAQgDAYgHAWQgBAIgLAAQgIAAABgGQAAgFABgDQALglACg4QAAgJAIAAQAKAAAAALIgBAhIAWAAIAAgvQAAgKAKAAQAKAAAAAKIAAAvIARAAQAJAAAAAJQAAAJgJAAIgRAAIAAA/IAPgKIAFAAQAJAAAAAKQAAAEgFAFQgJAIgPAJIAABRQAAAJgKAAQgKAAAAgJgAApB4QgIgCABgIQgBgLAKAAQAWAGAHAAQAOAAAHgJQAGgMADgWQAGgjAAhZQAAgIgIAAIgJAAIgBAMQgDAjgOAkQgLAdgSAaQgSAagaAZQgEABgEAAQgEAAgDgDQgDgDAAgEQAAgGADgCQAcgZAPgVQARgXAKgcQAMgfAGgsIgZAAIAAADQgIAigKAWQgKAZgOAVQgLASgPAOQgDACgEAAQgEAAgDgDQgDgEAAgEQAAgEADgDQAPgOAMgQQALgUAKgXQAJgUAGgcIgXAAIgCAHQgHAbgPAUQgFAFgFAAQgMAAAAgLIADgFQARgUAFgWQAHgUACgdQAAgJAJAAQAKAAAAAJIgDAdIBiAAQAVAAgBASQAABYgGAzQgEAigLANQgMAMgXAAQgMAAgTgHg");
	this.shape_15.setTransform(413.4,309.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AhDB4IAAhjIgbAAIAAAjQAAAUgEATQgEAPgFAMQgEAGgFAAQgKgBAAgJIABgGQAIgPACgQQADgNAAgMIAAgjIgJAAQgIAAgBgKQABgJAIAAIA2AAIAAgkIghAAQgQAAAAgRIAAg7QgBgIAKAAQAIAAAAAIIAAA0QAAAGAHAAIAZAAIAAg/QAAgKALAAQAJAAABAKIAADrQgBAKgJAAQgLAAAAgKgAAdB5QgIgCAAgIQABgKAIgBIAHACQAdAGAJAAQAIAAAAgKIAAhEIhuAAQgKAAAAgJQAAgKAKAAIBuAAIAAgeQABgKAJAAQAMAAAAAKIAAAeIAQAAQAKAAgBAKQABAJgKAAIgQAAIAABLQAAAYgbAAQgTAAgegIgAASBVQgNgQgNgPIgCgFQAAgKAKAAQACAAADADQAPANANAQQACADAAADQgBAKgKAAQgDAAgDgCgAgkgJQAAgHAHgBQAegIAVgLIgXgLQgGgCAAgGQAAgIAIAAIAFABQAOAGATALIAAgBIATgNQgRgJgQgGQgGgBAAgGQAAgIAJAAIAGABQARAGAVALIAAAAIARgQQAEgHAAgEQAAAAAAAAQAAAAAAAAQAAgBgBAAQAAAAgBAAIhCAAIgBAAIgGAIQgHAJgJAHQgJAIgMAIQgFACgCAAQgEAAgDgDQgDgEABgEQAAgFAGgEQAMgHAJgHQAHgHAHgIIANgUQADgDAEAAQAEAAADACQACADABADIgBAFIBGAAQALAAABALQAAAMgKAPQgLARgcAVQgfAWgkAMQgTAHgIAAQgLAAABgKg");
	this.shape_16.setTransform(386.05,309.725);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ABtB6IhkgcQgKAGgNAEQgYAIgfAFQgcAFgTgBQgMAAAAgLQABgIAIAAQA1gDAigJIAJgEIgwgLQgSgEAAgLQAAgHAKgHIAWgQIhAAAQgKAAAAgJQAAgKAKAAIBXAAQAJgLAJgLIhNAAQgRAAAAgSIAAgmQAAgRARAAIAzAAIAAgUIhIAAQgKAAABgKQgBgIAKgBIDlAAQAJABAAAIQAAAKgJAAIhGAAIAAAUIAxAAQASAAAAARIAAAmQAAASgSAAIhcAAIgCAGQgEAIgHAIICEAAQAKAAAAAKQAAAJgKAAIguAAQAAAFgFAHQgLASgRAOIgKAHIBXAUQAIACABAHQgBANgKAAIgIgBgAg6A2QgCACAAACQAAAAAAABQAAAAABABQAAAAABAAQAAABABAAIA+ANIAQgJQASgNAOgWIhSAAQgMAMgRAMgAAtgeIApAAQAHAAAAgGIAAgYQAAgEgHgBIgpAAgAgWgeIAtAAIAAgjIgtAAgAhbg8IAAAYQAAAGAGAAIArAAIAAgjIgrAAQgGABAAAEgAgWhUIAtAAIAAgUIgtAAg");
	this.shape_17.setTransform(357.85,310.25);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AhwBxIAAg5QAAgTAVgBIBGAAIAHgSIhiAAQgJAAAAgKQAAgIAJAAIDgAAQAJAAAAAIQAAAKgJAAIhpAAIgHASIBdAAQATABAAATIAAAnQAAAagbAAQgMAAgRgFQgHgCAAgHQAAgKAIAAIAGABQANADAHAAQAKAAAAgLIAAgaQAAgJgIAAIgvAAIAAA4QAAAKgKAAQgKAAAAgKIAAg4IgqAAIAAA3QAAAKgKgBQgKABAAgKIAAg3IgpAAQgHAAAAAJIAAAxQAAAKgKAAQgKAAAAgKgAgJgNIAAg7IhYAAQgIAAAAAJIAAAWQAAAKgKAAQgKAAAAgKIAAgaQAAgXAWAAIBeAAIAAgPIhYAAQgIAAAAgJQAAgIAIAAIDBAAQAJAAAAAIQAAAJgJAAIhWAAIAAAPIBeAAQALAAAGAIQAFAGAAANQAAAJgCAMQgDAHgKAAQgJAAgBgKIAEgRQAAgKgJAAIhWAAIAAA7QAAAJgKAAQgJAAAAgJgAAfgMQgHAAAAgIQAAgIAHAAIAzAAQAHAAABAIQgBAIgHAAgAhSgMQgIAAAAgIQAAgIAIAAIAwAAQAHAAABAIQgBAIgHAAgAhRgpQgIAAAAgJQAAgIAIAAIAwAAQAIAAAAAIQAAAJgIAAgAAegqQgHAAAAgJQAAgIAHAAIAzAAQAIAAAAAIQAAAJgIAAg");
	this.shape_18.setTransform(329.8,310.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Ah4B1QgDgDAAgEQAAgEADgDQAOgJAKgJQAMgNAIgOQAJgOAHgTQABgIAIAAQAEABADACQADADAAADIgBAHQgGAVgKAPQgKAQgNANQgLAMgOAIQgDADgEAAQgEAAgDgEgABnBxQgZgPgZgnQgNgYAAgGQAAgJAKAAQAJAAACAIQAQApArAeQAEADAAAEQAAAGgBACQgDAFgGgBQgGABgFgGgAhXAHQgSgBAAgRIAAhaQAAgTASAAICsAAQAUAAAAATIAABaQAAARgUABgAhVhcIAABIQAAAHAHAAICaAAQAIAAAAgHIAAhIQAAgHgIAAIiaAAQgHAAAAAHg");
	this.shape_19.setTransform(301.825,310.65);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AhdB1IAAiEIgOATQgFAFgDAAQgMAAAAgJQAAgEACgDQAQgVAMgbQANgbAIglQABgHAGAAQAFAAADACQAFAEAAAEIgBAHQgIAdgJAZIAACsQAAAKgKAAQgJAAAAgKgAAeB0IAAhQIhLAAQgLAAABgKQgBgKALAAIBLAAIAAhKIgpAAIgDAGQgKAWgNASQgFAEgDAAQgLAAABgKQAAgDABgCQANgRAJgWQAKgXAHgeQACgGAFAAQAGAAACACQADADABAEIgCAHIgFAbIAhAAIAAgmQAAgKAKAAQAKAAABAKIAAAmIA4AAQALAAgBAKQABAKgLAAIg4AAIAABKIBCAAQAKAAAAAKQAAAKgKAAIhCAAIAABQQgBAKgKAAQgKAAAAgKg");
	this.shape_20.setTransform(273.75,310.025);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AhKB3IAAhHQgRAJgQAFIgGACQgKgBAAgKQAAgJAHgDQAXgHAOgHIAFgDIAAhLIgYAAQgEAYgGAWQgCAIgKAAQgHAAAAgGQgBgFACgDQALglACg4QAAgJAIAAQAKAAAAALIgBAhIAWAAIAAgvQAAgKAKAAQAKAAAAAKIAAAvIARAAQAJAAAAAJQAAAJgJAAIgRAAIAAA/IAPgKIAEAAQAKAAAAAKQAAAEgEAFQgKAIgPAJIAABRQAAAJgKAAQgKAAAAgJgAApB4QgHgCAAgIQAAgLAJAAQAVAGAIAAQAPAAAGgJQAGgMAEgWQAFgjAAhZQAAgIgIAAIgJAAIgBAMQgEAjgOAkQgKAdgSAaQgSAagbAZQgCABgFAAQgEAAgDgDQgDgDAAgEQAAgGADgCQAcgZAPgVQAQgXAKgcQANgfAFgsIgXAAIgBADQgIAigJAWQgLAZgOAVQgLASgPAOQgDACgEAAQgEAAgDgDQgDgEAAgEQAAgEADgDQAPgOALgQQANgUAJgXQAJgUAGgcIgXAAIgBAHQgIAbgPAUQgFAFgFAAQgMAAAAgLIADgFQARgUAFgWQAHgUACgdQAAgJAJAAQAKAAAAAJIgEAdIBjAAQAUAAAAASQABBYgHAzQgEAigMANQgMAMgWAAQgLAAgUgHg");
	this.shape_21.setTransform(245.4,309.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("Ah7B2IAAjbQAAgSASAAIAHAAIAgAAQAOAAAAANQAAAEgCAGIgRAwIgBAIQAAAEADAFQAKATADAMQADAKAAANQAAARgJANQgKAOgTAAIgNgBIAAA0QAAAKgJAAQgKAAAAgKgAhohfIAACMIALADQAKAAAFgJQAFgHAAgLQAAgIgCgJQgDgLgLgVQgDgEAAgFIABgJIARgzQAAgDgEAAIgUAAQgGAAAAAFgAgMByQgHgCAAgHQAAgLAIAAIAGABQASAIAGAAQAFAAAAgQIAAhDIg8AAQgKAAAAgKQAAgJAKAAIA8AAIAAgjIgwAAQgKAAAAgJQAAgKAKAAIB1AAQAKAAAAAKQAAAJgKAAIgwAAIAAAjIA9AAQAKAAAAAJQAAAKgKAAIg9AAIAABPQAAAZgTAAQgPAAgXgKgABoBrQgPglgSgWIgCgFQAAgHAKAAQAEAAADAEQAWAaAPAgIABAIQAAAIgMAAQgFAAgDgHgAhHBiQAAgDACgEQAegYAVgcQADgGAEAAQAKAAAAAKQAAAFgEAHQgZAggXATQgEACgDAAQgLAAAAgKgABsg5QgbgLgLgHQgRgMgPgQQgDgDgDAAQAAAAgBAAQAAABgBAAQAAAAAAAAQgBABAAAAQgSASgTAMQgQAJgVAJIgFAAQgIAAgBgKQAAgFAGgDQAZgJARgKQARgLAPgQQAFgHAGAAQAHAAAKALQANAMAQALQAQAKAaAJQAEADAAAFQAAAKgLAAIgFgBg");
	this.shape_22.setTransform(218.175,309.975);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AA4B2QgIgDABgHQgBgJAIgBIAGABQAYAGAHAAQAKAAAAgMIAAjOQAAgKAJAAQALAAgBAKIAADUQAAAZgcAAQgOAAgYgGgAAAB6QgHgDABgGQgBgLAHAAIADABIAHACQAGAAgBgLIAAheIgWAAIAABqQAAAIgLAAQgIAAgBgIIAAhqIgSAAIAABqQAAAIgKAAQgIAAgBgIIAAhqIgVAAIAAByQAAAKgKAAQgKAAAAgKIAAhyIgHAAQgKAAABgJQgBgKAKAAIAHAAIAAhQQAAgUAUAAIBkAAQAUAAAAAUIAABQIAFAAQAKAAgBAKQABAJgKAAIgFAAIAABpQAAATgWAAQgHAAgGgCgAgHgTIAWAAIAAhKQAAgHgCAAIgUAAgAgtgTIASAAIAAhRIgSAAgAhVhdIAABKIAVAAIAAhRIgSAAQgDAAAAAHgAA7A/IAAihQAAgKAKAAQAJAAAAAKIAAChQAAAKgJAAQgKAAAAgKg");
	this.shape_23.setTransform(189.45,310.075);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgHAHAAQAIAAAGAHQAFAFAAAHQAAAIgFAGQgGAGgIAAQgHgBgGgFg");
	this.shape_24.setTransform(166.125,318.05);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("Ag2BMQgHgNAAgMQAAgKALAAQAHAAACAJQABARALAJQAMAJARAAQAUAAALgLQALgLAAgUQAAglgjAAIgRAAQgKAAAAgIQAAgKAKAAIARAAQALAAAJgLQAKgMAAgQQAAgPgKgJQgJgJgRAAQgfAAgFAaQgCAIgIAAQgEAAgDgDQgEgDABgGQADgTAPgMQAPgLAXAAQAZAAAQAQQAPAOAAAXQAAAOgIAOQgGAMgKAHQAMAEAJAOQAIAPAAAOQAAAbgRARQgRASgcAAQglAAgRgdg");
	this.shape_25.setTransform(154.8,309.5);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgYAZQgLgKAAgOQAAgOALgLQALgLANABQAOgBALALQAKALAAAOQAAAOgKAKQgLALgOgBQgNABgLgLgAgNgNQgGAGAAAIQAAAHAGAGQAFAGAIAAQAIAAAGgGQAGgGAAgHQAAgIgGgGQgGgGgIAAQgIAAgFAGg");
	this.shape_26.setTransform(637.8,261.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("ABNB5QgbgCgagFQgOgEgMgEIgNAEQgaAHgeADQgdAEgUAAQgKgBAAgJQgBgIAIgBQA3gCAigHIAFgBIgFgDQgagOgSgWIgHAEQgKAHgNAFQgEACgDAAQgEAAgDgDQgCgDAAgFQAAgFAGgDQANgFAJgGIAQgLIANgOQADgEAFAAQADAAADADQADADAAADQAAAEgCAEIgEAEICqAAQAJAAAAAJQAAAKgJAAIgoAAIgEAFQgMAPgRALIgSAKIAYAEQASAEA6ABQAIAAAAAJQAAALgLAAQgQgBgbgDgAgRBSIANAGQAOgFALgGQAQgIANgOIhrAAQASARAWAKgAhfARIAAg0IgcACQgHAAAAgJQAAgGAHAAIALAAIAPgPQgOgLgOgJIgDgGQABgHAIAAIAFACIACABQAIgKAHgPQABgFAEAAQAEAAADACQADACAAADIgBAEQgIAQgKALIAMALIATgcQACgDADAAQAEAAACACQADACgBAEIgBAEQgJAPgLAPQgGAHgHAGQAOAAAOgCIgEgHIgBgDQAAgGAIAAQACAAACADQAHALADAPIACAFQgBAFgHAAQgEAAgCgEIgBgGIgUACIAAA2QgBAIgHAAQgIAAAAgIgABOAQIAAg2IgfAEQgIAAAAgJQAAgGAIAAIAMgBQAJgHAHgIQgNgLgOgJIgCgGQgBgIAJAAQACAAACADIAEACQAIgKAIgPQACgFAEAAQADAAAEACQADACAAADIgBAEQgKAQgKAMIALAKIAUgbQACgDAFAAQADAAADACQACACAAAEIgBAEIgXAcIgNANQANgBANgDIgDgFIgBgEQABgFAGAAQADAAADADQAGALAFANIABAGQAAAFgJAAQgDAAgCgEIgCgIIgTADIAAA5QAAAIgJAAQgGAAgBgIgAgbAVQgMAAAAgMIAAgXQAAgLAMAAIA2AAQALAAABALIAAAXQgBAMgLAAgAgXgIIAAAKQAAAFACAAIAqAAQACAAAAgFIAAgKQAAAAAAgBQAAgBAAAAQgBAAAAgBQgBAAAAAAIgqAAQAAAAgBAAQAAABgBAAQAAAAAAABQAAABAAAAgAAtAJIABgFQAFgLADgNQABgEAFAAQAJAAgBAFIgBAGQgCANgGAMQgCAEgGAAQgGAAAAgHgAiBAJIABgFQAFgKADgNQABgEAGAAQAHAAABAFIgBAGQgDANgEALQgDAEgFAAQgIAAAAgHgAByAKQgEgRgFgLIgBgDQABgFAGAAQADAAADADQAGAMAFAOIABAGQAAAGgJAAQgEAAgCgFgAg7AJQgEgPgFgJIAAgEQAAgFAGAAQADAAACADQAHALADAMIABAGQAAAGgJAAQgDAAgBgFgAgegkQgFAAAAgHQAAgGAFAAIA6AAQAGAAAAAGQAAAHgGAAgAgeg6QgFAAAAgHQAAgGAFAAIA6AAQAGAAAAAGQAAAHgGAAgAgnhRQgHAAAAgIQAAgGAHAAIBJAAQAHAAAAAGQAAAIgHAAgAgchoQgHAAABgIQgBgGAHAAIA3AAQAGAAAAAGQAAAIgGAAg");
	this.shape_27.setTransform(609.85,261.925);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AByB/QgagOgPgMQgOgLgJgMIgIAIQgaAYggAPIgIADQgMAAAAgLQAAgGAFgDQAlgSAXgWIAHgIQgJgNgHgRQgJgWgFgWQgGALgFAJQgFAFgEAAQgMAAAAgLIADgEQAPgaAIgbQAEgYADglQAAgJAJAAQAKAAAAAJIgBAWIBZAAQAKAAAAAKQAAAJgKABIgMAAQgBARgEAcQgGAggKAdQgJARgKAOQALANARAMQAMAJATAKQAIADAAAIQAAAMgLAAIgEgBgAASgzIgEAOQAFABACAFQAIAhAJAVQAFALAGAJQAIgMAGgPQAPghAEg7Ig7AAIgFAZgAiABmQAAgIAIgCIACAAIAAhrQAAgTAUAAIAtAAQAHAAAAgHIAAgtQAAgHgHAAIg3AAQgKAAAAgJQAAgKAKABIA/AAQATAAAAARIAAA8QAAASgTABIguAAQgHgBAAAIIAABfIASgGQAZgIATgLIAEgBQAJAAAAAIQAAAGgHAEQgPAKgbAJQgTAJgcAGQgIgBgBgKg");
	this.shape_28.setTransform(581.9,261.8);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AA9B1QgGgDAAgGQAAgMAHAAIAHABQAMAEAHAAQAIAAAAgMIAAh6QAAgLgMAAIgqAAIAACXQAAAKgKAAQgKAAAAgKIAAiXIgwAAIAACXQAAAKgKAAQgKAAAAgKIAAiXIgmAAQgLAAAAALIAACQQAAAKgLAAQgKAAAAgKIAAibQAAgTAVAAIA9AAIATgmIhqAAQgJAAAAgKQAAgJAJAAIDyAAQAKAAAAAJQAAAKgKAAIhzAAIgRAmIBsAAQAUAAAAATIAACSQAAATgbAAQgMAAgRgEg");
	this.shape_29.setTransform(553.9,262.375);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("Ah4B7QgHAAAAgIQAAgIAHAAIBwAAIAAgQIhcAAQgIAAABgJQgBgHAIAAIBcAAIAAgQIhRAAQgRAAAAgQIAAgqQAAgOARgBICzAAQARABAAAOIAAAqQAAAQgRAAIhPAAIAAAQIBaAAQAHAAAAAHQAAAJgHAAIhaAAIAAAQIBtAAQAIAAAAAIQAAAIgIAAgAALArIBHAAQAFAAAAgHIAAgHIhMAAgAhXAkQAAAHAGAAIBJAAIAAgOIhPAAgAALAOIBMAAIAAgGQAAgGgFAAIhHAAgAhXAIIAAAGIBPAAIAAgMIhJAAQgGAAAAAGgAh4gbQgHAAAAgIQAAgHAHAAIDwAAQAIAAAAAHQAAAIgIAAgAhcg2QgOAAAAgNIAAgrQAAgMAOAAIC5AAQAOAAAAAMIAAArQAAANgOAAgAhXhNQAAAHAGAAICjAAQAFAAAAgHIAAgGIiuAAgAhXhjIAAAEICuAAIAAgEQAAgHgFAAIijAAQgGAAAAAHg");
	this.shape_30.setTransform(525.8,262.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("ABuB7QgQgNgLgQIgJgMIgDAFQgRAXgVAPIgGACQgMAAAAgLQAAgFAFgDQAYgSANgVIAGgIIgGgOQgJgVgGgkIgEAIQgEAEgDAAQgMAAABgLIACgFQANgXAFgeQAEgXAAgaQAAgJAIAAQAKAAAAAJIgBAeIA6AAQAJgBAAAJQAAALgJAAIgJAAQAAAPgDAcQgDAdgIAcQgEAQgHAMIAKAQQAKAPARAPQAGAEAAAEQAAAMgLAAQgCAAgFgEgAA6g9QgCANgDALQAEACACAFQAHAnAIAZIAAABIAFgPQAJgfADg4IggAAIgBAGgAgCB7IgngQIgIAFQgPAGgTAEQgQADgMAAQgLgBAAgJQAAgIAIgBQAfgCATgGIgcgLQgJgDAAgIQAAgGAGgDIALgJIghAAQgJAAAAgIQAAgKAJABIAzAAIAJgOIgoAAQgRAAAAgQIAAgRQAAgRARAAIAoAAIAAgLIgmAAQgQAAAAgOIAAgQIgJAAQgHAAAAgHQAAgIAHAAIAJAAIAAgPQAAgOAQAAIAmAAIAAgJQAAgJAJAAQAJAAAAAJIAAAJIAnAAQAPAAAAAOIAAAPIAKAAQAIAAAAAIQAAAHgIAAIgKAAIAAAQQAAAOgPAAIgnAAIAAALIAnAAQARAAAAARIAAARQAAAQgRAAIgnAAIgCAGIgEAIIBHAAQAJgBAAAKQAAAIgJAAIgXAAIgCAHQgHANgJAKIgIAIIAZAKQAIACAAAGQAAAKgJABIgDgCgAhNBIQgBAAAAABQAAAAgBAAQAAAAAAABQAAAAAAABIACACIAhALIAMgIQAJgJAJgNIguAAIgRAOgAgnAMIAhAAQAHAAAAgHIAAgFQAAgIgHAAIghAAgAhhAAIAAAFQgBAHAHAAIAiAAIAAgUIgiAAQgHAAABAIgAgngxIAeAAQAGAAAAgIIAAgHIgkAAgAhcg5QAAAIAFAAIAeAAIAAgPIgjAAgAgnhPIAkAAIAAgGQAAgIgGAAIgeAAgAhchVIAAAGIAjAAIAAgOIgeAAQgFAAAAAIg");
	this.shape_31.setTransform(497.8,261.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AhHB1QAAgFAGgEQArgRAWgQIAGgFQgRgOgPgWQgOgUgIgWIgEALQgWA9gkArQgFAGgFAAQgMAAAAgLQAAgCAEgDQAngxASgyQAKggAFgoIg7AAQgKgBAAgKQAAgKAKAAIA+AAQACgMAAgMQAAgJAKAAQAKAAAAAJIgCAYICXAAQAKAAAAAKQAAAKgKABIiaAAQgCARgDARIB9AAQAOAAAAARQAAAIgGAOQgLAYgRAVQgMAPgNALQAPAJAVAIQATAKAgAJQAHADAAAHQAAALgLAAIgHgBQgmgOgWgMQgSgHgOgKIgCACQgeAZgqAQIgJADQgLAAAAgMgAgGAcQALARARANQAMgLALgMQAQgUAJgTQAEgIAAgEQAAgFgDAAIhoAAQAMAeAPATg");
	this.shape_32.setTransform(469.825,261.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AAEB0IABgFQAHgbADgZQAFgdAAgiIAAhnQgBgSATAAIBDAAQARAAABASIAADOQgBAZgcAAQgPAAgOgEQgIgCAAgJQAAgJAJAAIAYADQAMAAABgHIAAhBIhAAAIgEAiQgDAcgGAYQgCAJgKAAQgLAAABgKgAAogEIgBAQIBAAAIAAgtIg/AAgAAohhIAAAuIA/AAIAAguQAAgJgHAAIg1AAQgDAAAAAJgAh5BzIABgFQAHgZADgXQAFgbAAghIAAhtQAAgSASAAIA9AAQATAAgBASIAADOQAAAZgiAAQgNAAgLgEQgJgCAAgJQAAgJAJAAIAUADQASAAAAgHIAAhBIg6AAQgBATgDASQgCAZgHAXQgCAJgKAAQgLAAABgKgAhVACIAAAKIA5AAIAAgtIg5AAgAhVhhIAAAuIA5AAIAAguQAAgJgGAAIgvAAQgFAAABAJg");
	this.shape_33.setTransform(441.35,262.025);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AhDByQgIgCAAgIQABgKAIgBIAIABQAdAJAJAAQANAAAAgPIAAjJQAAgKAJABQALgBAAAKIAADRQAAAbgfABQgSAAgfgKgABoA/QgRhLgUguQgDgEAAgCQAAgJAKAAQAFABADAEQAaA2ARBCIABAJQAAAKgNAAQgGAAgDgIgAh9A9QAAgDACgEQAPgXAKgdQAMgcAIgpQACgGAFgBQAEABADACQAEACAAAFIgBAFQgIApgLAfQgLAdgOAZQgFAEgDAAQgMAAAAgKg");
	this.shape_34.setTransform(413.675,262.15);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("Ag1B9QgQAAAAgPIAAg9IgrAPQgEACgDAAQgEAAgDgDQgCgDAAgFQAAgFAGgDQAzgRAlgSIAZgMIhtAAQgJAAAAgJQAAgJAJAAIBkAAIAAgYIhLAAQgJAAAAgJQAAgJAJAAIBLAAIAAgKQAAgKAKAAQAKAAAAAKIAAAKIAwAAQAJAAAAAJIAAAEIAbgZQADgDAEAAQAEAAADACQADADAAAEQAAAEgDAEQgaAYgUAQIBCAAQAJAAAAAJQAAAJgJAAIhdAAQgXAQgZAMIgDABIBsAAQARAAAAAPIAABCQAAAPgRAAgAgwBlQAAAHAEAAIB3AAQAGAAAAgHIAAgPIiBAAgAgwA1IAAAQICBAAIAAgQQAAgGgGAAIh3AAQgEAAAAAGgAACgSIASAAIAHgFIAagTIgDAAIgwAAgAAmhNIAAgLIhRAAIAAALQAAAKgKAAQgKAAAAgKIAAgLIg3AAQgJAAAAgKQAAgJAJAAIA3AAIAAgHQAAgKAKAAQAKAAAAAKIAAAHIBRAAIAAgHQAAgKAKAAQAKAAAAAKIAAAHIA9AAQAJAAAAAJQAAAKgJAAIg9AAIAAALQAAAKgKAAQgKAAAAgKg");
	this.shape_35.setTransform(385.8,261.525);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AhMB0QAAgDAFgDQAMgGAJgKQAJgKAAgMIAAgxQAAgEgEAAIgMAAIgEAAQgBANgGAKQgJAOgQAAQgFAAgHgCIAAA+QAAAKgJAAQgJAAAAgKIAAjaQAAgRARAAIAHAAIAWAAQANAAAAANIgCAJIgKAsIAAAHQAAAEACAFQAJASACAMIACAJIAEAAIASAAQAQAAAAAOIAAA4QAAAGAKAJQAKAIANAFQARAEApAAIAtgCQALAAAAALQAAAKgLABIgqACQgtAAgUgGQgTgIgNgPIgCgCQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAABQgKAPgNAIQgHAGgEAAQgLAAAAgLgAhphfIAACCIAKAEQAIAAAEgIQAEgIABgJIgCgRQgCgLgKgUQgCgEAAgEIAAgJIAKgwQAAAAAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAIgMAAQgGAAAAAHgAA5BaQgGgCAAgFQAAgMAHAAIAHABQAOADAIABQAIAAAAgLIAAgIIhTAAIAAAbQAAAIgIAAQgIAAAAgIIAAhUQAAgRARgBIBSAAQASABAAARIAABFQAAAagYAAQgNgBgTgEgAAMArIBTAAIAAgRIhTAAgAAMAFIAAAIIBTAAIAAgIQABgGgFAAIhKAAQgEAAgBAGgAgogYQgKgMgKgKIgCgFQAAgJAKAAQACAAADADQAKAKAJALQACADAAADQAAAJgKgBQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBgBgAASgeQgIgBAAgHQAAgIAIAAIAmAAIAAgSIgaAAQgGAAgCgDQgMANgQAMQgEAEgDAAQgKAAAAgJQAAgDACgCQAVgNANgRIALgLIgdAAQgIAAAAgJQAAgHAIAAIApAAIAFgLQABgGAEAAQAFAAACACQADADAAADIgBAEIgCAFIA7AAQAIAAAAAHQAAAJgIAAIhEAAQgFAIgGAGIBEAAQAIAAAAAIQAAAIgIgBIgbAAIAAASIAlAAQAHAAABAIQgBAHgHABgAgehLIgVgYIgCgEQAAgKAKABQACAAADADQALAJAKANIABAFQAAAIgJAAIgFgBg");
	this.shape_36.setTransform(358.4,261.9);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AhNB+QgQAAgBgPIAAg5QABgOAQAAICaAAQARAAAAAOIAAA5QAAAPgRAAgAhKBmQAAAIAGAAICIAAQAFAAABgIIAAgNIiUAAgAhKA/IAAALICUAAIAAgLQgBgHgFAAIiIAAQgGAAAAAHgAheAVQgRAAAAgPIAAgoQAAgPARAAIC8AAQARAAAAAPIAAAoQAAAPgRAAgABCgZQACADAAAEQABADgDADIgLAOIgEADIAiAAQAGAAABgHIAAgYQgBgGgGAAIhLAAIAAAlIAVAAIAGgHQAHgLAFgLQAEgEAFAAQAFAAADADgAgygaQAIAKAGAMQADADAAACIgBAEIAYAAIAAglIhMAAQgFAAgBAGIAAAYQABAHAFAAIAlAAIgOgUIgDgFQAAgJAKAAQADAAADADgABtg5QgfgIgcgNIABAFQABAJgIAAIhZAAQgHAAAAgJQAAAAAAgBQAAgBAAAAQAAgBAAAAQABgBAAAAIgJADQgcALgXAGQgJADgDAAQgKgBAAgKQABgHAGgCQAsgLAWgJQAbgMAagQQAEgDAEAAQADAAAFADQAgAVAeALQASAIAmAIQAGACABAHQgBAKgJABIgPgDgAgFhmQgVANgSAJIBYAAIABAAQgSgJgRgLQgHgEgCAAQgDAAgDACg");
	this.shape_37.setTransform(329.85,261.425);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AhDB1QgJgDgBgIQABgMAJgBQAqANAKAAQAJgBAGgDQAJgDAFgIQAFgGAAgJQABgTgGgNIiEAAQgJgBAAgJQAAgJAJAAIB6AAIgEgHQgKgJgMgHQgDgBAAgBQAAgLAMgBQADAAAGAEIAFADIAAAAQAQgGAIgGQAMgHAJgIQAGgGAAgCQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIh+AAQgJAAAAgJQAAgIAJAAICPAAQAQAAAAAKQAAAGgGAIQgIALgSANQgQAMgSAJQAIAGAEAKIBbAAQAJAAAAAJQAAAJgJABIhSAAQAEAQAAAQQABAOgJAOQgIAMgNAGQgLAFgOABQgYAAgegLgAh7guIAAgeQAAgaAaAAIBYAAIAAgOQAAgKAJAAQALAAAAAKIAAAOIBfAAQALAAAHAJQAEAFAAANQAAAMgDAOQgDAIgKAAQgJAAAAgKQAEgSAAgFQAAgKgJAAIi/AAQgKAAAAAKIAAAcQAAAJgKABQgKgBAAgJg");
	this.shape_38.setTransform(301.8,261.75);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("ABuB7QgQgNgLgQIgJgMIgDAFQgRAXgVAPIgGACQgMAAAAgLQAAgFAFgDQAYgSANgVIAGgIIgHgOQgIgVgGgkIgEAIQgEAEgEAAQgLAAABgLIACgFQANgXAFgeQAEgXAAgaQAAgJAIAAQAKAAAAAJIAAAeIA5AAQAJgBAAAJQAAALgJAAIgJAAQAAAPgDAcQgDAdgIAcQgEAQgHAMIAKAQQALAPAQAPQAGAEAAAEQAAAMgLAAQgCAAgFgEgAA6g9QgCANgDALQAEACACAFQAGAnAJAZIAAABIAFgPQAJgfADg4IggAAIgBAGgAgCB7IgngQIgIAFQgPAGgTAEQgQADgMAAQgLgBAAgJQAAgIAIgBQAfgCATgGIgcgLQgJgDAAgIQAAgGAGgDIALgJIghAAQgJAAAAgIQAAgKAJABIAzAAIAJgOIgoAAQgRAAAAgQIAAgRQAAgRARAAIAoAAIAAgLIgmAAQgQAAAAgOIAAgQIgJAAQgHAAAAgHQAAgIAHAAIAJAAIAAgPQAAgOAQAAIAmAAIAAgJQAAgJAJAAQAJAAAAAJIAAAJIAnAAQAPAAAAAOIAAAPIAKAAQAIAAAAAIQAAAHgIAAIgKAAIAAAQQAAAOgPAAIgnAAIAAALIAnAAQARAAAAARIAAARQAAAQgRAAIgnAAIgCAGIgEAIIBHAAQAJgBAAAKQAAAIgJAAIgYAAIgBAHQgHANgJAKIgIAIIAZAKQAHACABAGQgBAKgIABIgDgCgAhNBIQAAAAgBABQAAAAgBAAQAAAAAAABQAAAAAAABIACACIAhALIAMgIQAJgJAIgNIgtAAIgRAOgAgnAMIAhAAQAHAAAAgHIAAgFQAAgIgHAAIghAAgAhhAAIAAAFQAAAHAGAAIAiAAIAAgUIgiAAQgGAAAAAIgAgngxIAeAAQAHAAgBgIIAAgHIgkAAgAhcg5QAAAIAFAAIAeAAIAAgPIgjAAgAgnhPIAkAAIAAgGQABgIgHAAIgeAAgAhchVIAAAGIAjAAIAAgOIgeAAQgFAAAAAIg");
	this.shape_39.setTransform(273.8,261.8);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AANB0QgIgEAAgGQAAgMALAAQAeANAQAAQATABAIgOQAHgOADgmQADgrAAg7QAAgLgKAAIhBAAQgGAWgKAQQgFAFgFAAQgLABAAgLQAAgCADgEQAKgQAFgRQADgRACgXQAAgJAKAAQAKAAAAAJIgDAbIBJAAQATABAAAVQAABBgDA1QgEAwgNAPQgNAPgZAAQgXAAgcgMgAhnB6QgTAAAAgTIAAioQAAgRATAAIAIAAIAIgMIANgdQADgEAGAAQAEAAADADQADADAAAEQAAAEgCADIgLAUIgEAIIAkAAQASAAAAARIAACoQAAATgSAAgAhmBeQAAAJAIAAIAxAAQAIAAAAgJIAAhHIhBAAgAhmg4IAAA8IBBAAIAAg8QAAgHgIgBIgxAAQgIABAAAHgAAnAyQgGgrgJgYIgCgGQAAgIAKAAQADAAAEAEQAMAdAIAlIABAIQAAAKgMAAQgGAAgDgHg");
	this.shape_40.setTransform(245.9,261.7);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AhSB3QgVAAAAgVIAAjDQAAgVAVAAICkAAQAWAAAAAVIAADDQAAAVgWAAgAhSBcQAAAIAGAAICXAAQAIAAAAgIIAAg0IilAAgAhSAVIClAAIAAg0IilAAgAhShbIAAApIClAAIAAgpQAAgIgIAAIiXAAQgGAAAAAIg");
	this.shape_41.setTransform(218,261.925);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgiBxQgbgGgSgKQgKgGgJgIQgFASgIAQQgDAEgEABQgKAAAAgKIACgGQAKgSAEgXQACgTAAgVQAAgIAJAAQAJABAAAIQAAATgCARQAMANANAFIABABIAAhMIgyAAQgJAAAAgIQAAgKAJABIBvAAQAIgBAAAKQAAAIgIAAIgqAAIAAAfIAkAAQAIAAAAAJQAAAJgIgBIgkAAIAAAjQAMAFAQACQAaAGBzAAQAJABAAAKQAAAJgLABQh2gBgigIgABgBPIgRgRQgFgFAAgCQAAgEACgCIgeAAQACACAAAEQAAAEgFADQgMAPgXANIgDACQgIAAAAgMQgBgDAEgCQATgLAOgPIgKAAQgQAAAAgQIAAhlQAAgPAQAAIAXAAIAGgUIguAAQgHAAgBgIQABgKAHABIBtAAQAIgBAAAKQAAAIgIAAIgsAAIgGAUIAfAAQARAAAAAPIAABlQAAAQgRAAIgHAAQAQAQAPAJQAHACAAAEQAAAMgLAAQgDAAgRgNgAAaAZQAAAHAGAAIA3AAQAHAAAAgHIAAgPIhEAAgAAagFIBEAAIAAgXIhEAAgAAag7IAAAPIBEAAIAAgPQAAgHgHABIg3AAQgGgBAAAHgAhfgcQgRAAAAgQIAAg9QAAgQARABIBDAAQARgBAAAQIAAA9QAAAQgRAAgAheg1QAAAJAHAAIAyAAQAIAAAAgJIAAgMIhBAAgAhehgIAAANIBBAAIAAgNQAAgIgIAAIgyAAQgHAAAAAIg");
	this.shape_42.setTransform(189.7,262.25);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgHAHABQAIgBAGAHQAFAFAAAHQAAAIgFAGQgGAGgIgBQgHAAgGgFg");
	this.shape_43.setTransform(166.125,270.05);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgbBoQgQAAgHgDQgMgFABgNQAAgdAQgSQAKgMAZgPQAcgQAHgHQAQgOAAgVQABgPgLgKQgLgJgSAAQgTAAgLAMQgJAMgBAQQAAAKgJAAQgKAAAAgKQAAgXAPgSQAQgTAcAAQAZAAAQAOQASAPAAAZQAAAcgTATQgJAIgfASQgVAMgJAJQgOAPAAAUQAAAEAPAAIBPAAQALAAgBAKQABAKgLAAg");
	this.shape_44.setTransform(154.8,261.375);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgYAZQgLgKABgPQgBgNALgLQALgLANAAQAOAAALALQALALgBANQABAPgLAKQgLAKgOAAQgNAAgLgKgAgNgNQgGAGAAAHQAAAJAGAFQAFAGAIAAQAIAAAGgGQAGgFAAgJQAAgHgGgGQgGgGgIAAQgIAAgFAGg");
	this.shape_45.setTransform(469.8,213.9);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("Ag1B4QgJgDAAgIQAAgKAJgBQAgAJAJAAQAFAAAGgCQAFgBAEgEQADgFAAgEIgBgMIh/AAQgKAAABgKQgBgJAKAAIB1AAIgBAAQgHgGgHgDQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQABgKAKgBIAGACIADADIARgFIAPgFIAFgDQAAgDgEAAIhoAAQgIAAAAgIQAAgJAIAAIB8AAQASAAgBAMQABADgFAEQgIAGgPAHQgNAHgQAEIAGAHIBdAAQAJAAAAAJQAAAKgJAAIhVAAIACAMQgBAKgGAKQgHAJgKAEQgJAEgLAAQgTAAgXgIgAh+AZIAAggQAAgOAPAAIALAAIgHhSQABgKAEgFQADgFAKAAQAUAAASgEQAIAAAAAKQAAAIgJACQgSACgNAAQgHAAAAAGIABAOIAhAAQAHAAABAHQgBAJgHAAIgfAAIABARIAhAAQAIAAAAAIQAAAJgIAAIgfAAIABAOICjAAIABgPIgeAAQgIAAABgJQgBgIAIAAIAgAAIACgRIglAAQgHAAAAgJQAAgIAHAAIAoAAIABgPQABgDgHAAIgjAAQgHAAAAgJQAAgIAHAAIAtAAQAQAAgBAOIgKBXIAIAAQALAAAGAIQAFAGgBALQAAAJgBAMQgDAIgJAAQgKAAAAgKIADgSQAAgIgJAAIjFAAQgGAAgBAFIAAAXQABAKgLAAQgKAAAAgKgAglgiQAAgEADgBIAUgKIgPgHQgDgDAAgCQABgIAHAAIAGABIAUAJIATgNIAGgCQAJAAAAAIQgBAFgDADIgMAIIAOAIIACAGQgBAJgHAAQgFAAgEgDIgQgJQgMAHgQAGIgFACQgIAAABgKgAgshTQABgEAEgCIAVgKIgQgHQgBgDgBgDQABgHAHAAIAFABIAVAJQAIgHAJgIQADgCACAAQAJAAAAAJQAAAEgEAEIgLAJIANAIIACAFQAAAJgIAAQgEAAgFgCIgNgJQgNAHgQAHIgGACQgIAAAAgKg");
	this.shape_46.setTransform(441.95,213.925);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("ABxB/QgVgOgNgNQgKgKgIgLIgGAHQgVAXgbAPIgHADQgLAAAAgMQAAgFAFgCQAdgSASgWIAIgJQgIgNgGgRQgHgYgFgZQgFALgGAJQgEAEgEAAQgKAAABgKIACgGQANgYAGgfQAEgYAAgbQAAgIAKgBQAKAAAAALIgBAbIBLAAQAKAAAAAKQAAAJgKABIgKAAQAAARgEAbQgEAdgKAcQgGAQgHAOQAIANANAMQAKAKAPAKQAIACAAAIQAAAKgLABIgDgBgAAjg7IgFAUIABAAQAGAAADAHQAGAhAHAWIAHARQAFgKAEgLQAMgfADg5IgvAAIgCAKgAhdB7QgHgCgBgIQABgJAHgBQARAGAEAAQADAAAEgCQAEgCADgEQACgFAAgEQAAgMgCgJQgYAEgjAEQgJAAAAgKQAAgHAIgBQAjgDATgDIACAAIgCgEIgHgLIgBgCQAAgKAKAAIAEACIAGAHIAJgHIAJgIIACgEQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgsAAIgCgBQgNAMgRAKQgDACgDAAQgEAAgCgDQgDgDAAgEQAAgEAEgCQAXgPARgRQALgKAJgMIg2AAQgJAAAAgJQAAgIAJgBIAmAAIAAgfIghAAQgIAAAAgJQAAgIAIAAIAhAAIAAgUQAAgLAKAAQAKAAAAALIAAAUIAXAAQAHAAABAEIAHgTQACgHAIAAQAEAAACADQADACAAAEIgBAGQgLAhgOAWIATAAQAIABAAAIQAAAJgIAAIgeAAQgMARgOAOIAtAAQAPAAAAAKQgBADgDAGQgFAHgKAKQgJAIgMAGQAXgDARgFIAEgBQAGABABAGQAAAGgGACQgPAGgaAFQADAMAAAMQAAAKgFAKQgFAIgIAEQgHADgJABQgKgBgMgEgAg6gwIAJAAIADgHQAIgLAGgNIgDAAIgXAAg");
	this.shape_47.setTransform(414,213.85);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("ABNBwQgWgIgSgKQgEgGAAgDQAAgKAKAAQACAAADACQAmATAnAKQAGACAAAGQAAALgLAAQgGAAglgNgAiCBvQAAgGAFgDQAugLAggPIAGgCQAKAAAAAJQAAAGgEAEQgbAPgxANIgHACQgMAAAAgMgAh0BCQgKAAAAgKQAAgJAKAAIAIAAIAAiPQgBgKAGgFQADgEALgBQAQAAARgHQAKAAAAAKQAAAJgKABQgPAFgMAAQgHAAAAAHIAAAfIAhAAQAJAAAAAJQAAAJgJAAIghAAIAAAlIAhAAQAJAAAAAIQAAAJgJAAIghAAIAAAjIA7AAIAAg5QAAgIAJAAQAKAAAAAIIAAA5IAaAAIAAhJQAAgIgHAAIgXAAQgQAAAAgPIAAhDQAAgIAKAAQAKAAAAAIIAAAPIArAAQAHAAAAAHQAAAJgHAAIgrAAIAAAaQAAAJAGAAIAUAAQATAAAAAQIAABRIA6AAIAAgjIgnAAQgIAAAAgJQAAgIAIAAIAnAAIAAglIgnAAQgIAAAAgJQAAgJAIAAIAnAAIAAgdQAAgIgJAAIgeAAQgIAAAAgKQAAgJAIAAIAlAAQAUAAAAATIAACQIAJAAQAKAAAAAJQAAAKgKAAg");
	this.shape_48.setTransform(385.8,213.975);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AhYB1IAAiNQgIAQgLAMQgFAFgDAAQgLAAAAgJQAAgDACgCQARgWANgbQANgcAKglQABgHAGAAQAFAAADACQADAEAAAEIgBAGQgGAYgIAVIAAC2QAAAKgKAAQgKAAAAgKgAAQB0IAAi6IgVAAIgJAVQgLAZgPAVQgFADgCAAQgLAAAAgJQAAgDACgCQAOgUAKgZQAMgaAIgiQABgHAGAAQAFAAACACQAEAEAAAEIgBAHIgFATIB1AAQAKAAAAAKQAAAKgKAAIhQAAIAAAsIBGAAQAKAAAAAKQAAAJgKAAIhGAAIAAAzIBGAAQAKAAAAAKQAAAKgKAAIhGAAIAAA0QAAAKgLAAQgKAAAAgKg");
	this.shape_49.setTransform(357.7,214.025);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AAWB1IAAg1IgVATQgQAOgeARIgGABQgJAAAAgLQAAgHAGgCQAhgPARgPQAMgIAKgLIg+AAQgJAAAAgKQAAgIAJgBIBCAAIAAgKQAAgKAJAAQALAAAAAKIAAAKIBDAAQAJABAAAIQAAAKgJAAIhCAAQAOAOARAKQAaAQAUAJQAHACAAAHQAAADgCAFQgDADgFAAQgEAAgEgCQgTgKgSgMQgPgKgPgOIAAAyQAAAKgLAAQgJAAAAgKgAh2B7QgIgDAAgHQABgJAHgBIADABIAPADQAGAAAAgKIAAhKIgQAFIgFACQgKAAAAgKQAAgJAIgCIAXgJIAAg6IgUAAQgKAAAAgKQAAgKAKAAIAUAAIAAgmQAAgKAJAAQALAAAAAKIAAAmIAQAAQAKAAAAAKQAAAKgKAAIgQAAIAAAxIAKgGIAEgCQAJABAAAKQABAEgEACQgIAGgMAHIAABZQAAAYgaAAQgGAAgMgDgAA2AHQgOAAAAgNIAAgeQAAgNAOAAIAuAAQAPAAAAANIAAAeQAAANgPAAgAA6gaIAAALQAAAHAGAAIAbAAQAGAAAAgHIAAgLQAAgIgGAAIgbAAQgGAAAAAIgAggAHQgOAAAAgNIAAgeQAAgNAOAAIApAAQAOAAAAANIAAAeQAAANgOAAgAgdgaIAAALQAAAHAHAAIAWAAQAFAAAAgHIAAgLQAAgIgFAAIgWAAQgHAAAAAIgAgMhAQgPAAAAgQIAAgbQAAgOAPAAIBaAAQAQAAAAAOIAAAbQAAAQgQAAgAgJhhIAAAHQAAAJAHAAIBGAAQAHAAAAgJIAAgHQAAgIgHAAIhGAAQgHAAAAAIg");
	this.shape_50.setTransform(329.8,213.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AhdB2IAAhoIgOALQgFAGgCgBQgMABAAgKQAAgEADgDQARgMANgNQAPgPAKgWQAAgGAGgBQAEAAADADQAEADAAAEIgCAFQgHAUgNAPIAAB7QAAAKgKAAQgKAAAAgKgAgFB2QgHgDAAgHQAAgLAIAAIAIABQAhAIALAAQAHAAABgQIAAh4IhWAAQgKAAAAgKQAAgKAKABICSAAQAKgBAAAKQAAAKgKAAIgoAAIAAB8QAAAhgfAAQgTAAgfgJgAh9gzQABgEACgDQAPgMAMgOQAMgPAJgVQABgGAGgBQAEABADACQADACABAEIgBAGQgJAVgNAQQgMAQgQAMQgEAFgCAAQgMAAAAgJgAgQhfQgKAAAAgKQAAgKAKAAIB4AAQALAAgBAKQABAKgLAAg");
	this.shape_51.setTransform(301.85,213.85);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AiAB1QABgHAHgCQATgIAIgFQAIgGAAgRIAAguQAAgFgFAAIgTAAQgKAAAAgKQAAgKAKAAIAdAAQAPAAAAAPIAAA4QABAMAOAJQAQAKAcAAIB8AAQALAAAAALQAAAKgLAAIh2AAQgUAAgSgFQgRgFgNgJIgEgCQAAAAgBAAQAAAAgBABQAAAAgBAAQAAAAgBABQgNAMgQAGQgIAEgEAAQgKAAgBgKgAgMBOQgWgBAAgUIAAhuIgQARQgDACgDAAQgEAAgDgCQgEgDABgEQAAgDABgCQATgTALgPQAMgQAKgVQABgHAFAAQAGAAACADQADADABAEQAAADgCADIgMAXIAvAAIABgCQAHgMAIgRQACgGAFAAQAFAAAEACQADAEAAADIgBAGQgGAMgHAKIA4AAQAJAAAAAJQAAAKgJAAIg4AAIAAAcIAxAAQAJAAAAAJQAAAJgJAAIgxAAIAAAeIAxAAQAJAAAAAIQAAAKgJAAIgxAAIAAAhIA4AAQALAAgBAJQABAKgLAAgAgNAzQAAAIAFAAIAvAAIAAghIg0AAgAgNAIIA0AAIAAgeIg0AAgAgNgoIA0AAIAAgcIg0AAgAhWgZIgSgOIgOgIQgDgEAAgDQAAgLAKAAQACAAAFADIAOAJQALAHAIAJQAEADAAACQgBAKgIAAQgGAAgEgDgAhLhSIgTgNIgPgIQgEgDABgEQAAgLAKAAQACAAAFADIAPAJQALAHAKAIQADADAAACQAAAKgJAAQgGAAgEgDg");
	this.shape_52.setTransform(273.85,213.7);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AhgByQgRAAAAgQIAAiRQAAgQARAAIBDAAIAOgfIhlAAQgKAAAAgJQAAgLAKABIDpAAQAKgBAAALQAAAJgKAAIhwAAIgMAfIBpAAQARAAAAAQIAACRQAAAQgRAAgAA7BeIAfAAQAFAAAAgFIAAh/QAAgGgFABIgfAAgAgjBeIBKAAIAAgjIhKAAgAhdgmIAAB/QAAAFAFAAIAhAAIAAiJIghAAQgFgBAAAGgAgjAoIBKAAIAAgiIhKAAgAgjgMIBKAAIAAgfIhKAAg");
	this.shape_53.setTransform(245.8,214.2);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("Ah7B+QgIAAAAgIQAAgIAIAAID1AAQAHAAAAAIQAAAIgHAAgAhaBhQgPAAAAgMIAAgtQAAgMAPAAICxAAQAPAAAAAMIAAAtQAAAMgPAAgAAHBUIBHAAQAEAAAAgIIAAgIIhLAAgAhVBMQAAAIAEAAIBGAAIAAgQIhKAAgAAHA4IBLAAIAAgHQAAgIgEAAIhHAAgAhVAxIAAAHIBKAAIAAgPIhGAAQgEAAAAAIgAh4AQQgHAAAAgIQAAgGAHAAIBsAAIAAgPIhgAAQgHAAAAgGQAAgHAHAAIBgAAIAAgNIhTAAQgKAAAAgIQAAgHAKAAIBTAAIAAgNIhvAAQgHAAAAgIQAAgHAHAAIBvAAIAAgNIhTAAQgKAAAAgHQAAgIAKAAIBTAAIAAgFQAAgKAKAAQAJAAAAAKIAAAFIBTAAQAPAAAAANIAAAPIAUAAQAHAAAAAHQAAAIgHAAIgUAAIAAAPQAAANgPAAIhTAAIAAANIBgAAQAHAAAAAHQAAAGgHAAIhgAAIAAAPIBvAAQAHAAAAAGQAAAIgHAAgAAHg2IBJAAQAGAAAAgIIAAgFIhPAAgAAHhSIBPAAIAAgFQAAgIgGAAIhJAAg");
	this.shape_54.setTransform(218.075,213.425);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("Ah9B1QAAgGAHgCQAOgIAEgGQAHgHAAgTIAAgpQAAgEgEAAIgTAAQgKAAAAgKQAAgKAKAAIAcAAQAOAAAAANIAAA0QABAOAOAKQARAMAdAAICCAAQAKAAAAAJQAAAKgKAAIh5AAQgWAAgTgGQgSgFgNgMIgEgCIgDADQgKANgMAIQgGAEgDAAQgLAAAAgKgAAmBgQgGgDAAgFQAAgJAHAAQAWAGAGAAQARgBAAgGIAAgHQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBAAgBAAIhLAAQgFAKgKAHQgKAGgUAFIgCABQgIAAAAgKQgBgFAGgDQAQgDAJgGQAHgFAEgHQAEgHABgKIgsAAQgIAAAAgIQAAgHAIAAIA+AAIAAgOQAAgJAJAAQAJAAAAAJIAAAOIBMAAQAIAAAAAHQAAAIgIAAIhfAAIgCAMIBPAAQAMAAAAAPIAAALQAAAUgiAAQgJAAgVgEgABoAPIACgPQAAgHgGAAIgnAAIAAABIAAADQAAAGAFAAIAWAAQAKgBAAAHQAAAIgKAAIgbAAQgRAAAAgRIAAgGIAAgBIglAAQAAAJgEAEQgFAKgKABQgIADgTAAQgGAAAAgHQAAgHAGAAIAUgCQAHgCACgDIADgGIgmAAQgEAAAAAEIAAAPQAAAIgJAAQgJAAAAgIIAAgSQAAgPAQAAIBBAAIAAgLIgsAAQgQgBAAgPIAAgwQAAgOAQAAIAlAAIABAAIAHgOQADgDAFAAQAEABADACQACACAAAEQAAAEgCACIgCACIA/AAQARAAAAAOIAAAwQAAAPgRABIg5AAIAAALIBIAAQAKAAAFAGQAEAFAAAKIgCAQQgCAHgIABQgJAAAAgJgAgcg1QAAAHADAAIBvAAQAEAAAAgHIAAgEIh2AAgAgchDIB2AAIAAgJIh2AAgAgchbIAAAFIB2AAIAAgFQAAgFgEAAIhvAAQgDAAAAAFgAhggaIgWgSQgHgDAAgFQAAgJALAAQADAAAEADQANAIAKAJQAEADAAAGQAAAIgJABQgEAAgDgDgAhUhTIgVgRQgHgEAAgEQAAgKALAAQADAAAEACIAWARQAEAFAAAEQAAAKgJgBQgEABgDgDg");
	this.shape_55.setTransform(189.9,213.55);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AhZB8QgJAAgBgKQABgKAJAAIBiAAIAAhmIg5AAIgDgBQgIAOgKAMQgSAYgYASQgDADgEAAQgEAAgDgEQgCgDgBgEQAAgFADgDQAYgTARgWQAUgaAPggQAFgKAFgLIhEAAQgKAAAAgKQAAgKAKAAIBLAAIAIgeQACgGAIAAQAEAAACACQAEACAAAEIgBAHIgGAVICCAAQAJAAABAKQgBAKgJAAIiJAAQgGASgIAPIgIARICPAAQAKAAAAAKQAAAJgKAAIhIAAIAABmIBYAAQAJAAABAKQgBAKgJAAg");
	this.shape_56.setTransform(637.55,165.225);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AhzB3QgKAAAAgKQAAgKAKAAIBoAAIAAgzIhaAAQgKAAAAgJQAAgKAKAAIBaAAIAAgcQAAgJAKAAQAKAAAAAJIAAAcIBbAAQAKAAAAAKQAAAJgKAAIhbAAIAAAzIBrAAQAKAAAAAKQAAAKgKAAgABjAFIgWgdQgDACgDAAIi5ALQgKAAAAgLQAAgLAKAAIAhgBIAshAIhLAAQgKAAAAgKQAAgKAKAAIDiAAQAKAAAAAKQAAAKgKAAIiBAAIgqA+IB2gHIgcgcQgEgDAAgEQAAgKAKAAQADAAAEACQAQAQAOAPQAUAVATAcIADAFQAAAJgJAAQgGAAgEgDg");
	this.shape_57.setTransform(609.8,165.975);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AhdB1IAAiEIgOATQgFAFgCAAQgNAAAAgJQAAgEACgDQAQgVAMgbQAMgbAJglQABgHAHAAQAEAAAEACQADAEAAAEIAAAHQgIAdgJAZIAACsQAAAKgKAAQgJAAAAgKgAAeB0IAAhQIhMAAQgKAAAAgKQAAgKAKAAIBMAAIAAhKIgqAAIgCAGQgKAWgNASQgFAEgDAAQgKAAgBgKQAAgDACgCQANgRAJgWQALgXAGgeQABgGAGAAQAGAAACACQAEADAAAEIgBAHIgGAbIAhAAIAAgmQAAgKAKAAQALAAgBAKIAAAmIA5AAQAKAAAAAKQAAAKgKAAIg5AAIAABKIBDAAQALAAAAAKQAAAKgLAAIhDAAIAABQQABAKgLAAQgKAAAAgKg");
	this.shape_58.setTransform(581.75,166.025);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AhKB3IAAhHQgRAJgQAFIgGACQgKgBAAgKQAAgJAHgDQAXgHAPgHIAEgDIAAhLIgYAAQgEAYgGAWQgBAIgLAAQgHAAgBgGQABgFABgDQALglACg4QAAgJAJAAQAJAAAAALIgBAhIAWAAIAAgvQAAgKAKAAQAKAAAAAKIAAAvIARAAQAJAAAAAJQAAAJgJAAIgRAAIAAA/IAPgJIAEgBQAKAAAAAKQAAAEgFAEQgKAJgOAJIAABRQAAAJgKAAQgKAAAAgJgAApB4QgHgCgBgIQAAgLAKAAQAVAGAIAAQAPAAAGgJQAHgMADgWQAFgjAAhZQAAgIgIAAIgJAAIgBAMQgEAjgOAkQgKAdgSAaQgSAagbAZQgDABgEAAQgEAAgDgDQgDgDAAgEQAAgFADgDQAcgZAPgVQARgXAJgcQANgfAFgsIgXAAIgBADQgIAigJAWQgLAZgOAVQgKASgQAOQgDACgEAAQgEAAgDgDQgDgEAAgEQAAgEAEgDQAPgOAKgQQANgUAJgXQAJgUAGgcIgXAAIgBAHQgJAbgOAUQgFAFgFAAQgMAAAAgLIADgFQAQgUAHgWQAGgUACgdQAAgJAJAAQAKAAAAAJIgEAdIBjAAQAUAAABASQAABYgHAzQgEAigMANQgLAMgXAAQgLAAgUgHg");
	this.shape_59.setTransform(553.4,165.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AANB0QgIgEAAgGQAAgMALAAQAeAOAQAAQATAAAIgOQAHgOADgnQADgpAAg8QAAgLgKAAIhBAAQgGAXgKAPQgFAGgFgBQgLAAAAgLQAAgBADgDQAKgRAFgRQADgQACgYQAAgJAKAAQAKAAAAAJIgDAcIBJAAQATAAAAAVQAABCgDA0QgEAwgNAOQgNAQgZAAQgXAAgcgMgAhnB5QgTAAAAgSIAAioQAAgRATAAIAHAAIAJgNIAOgcQADgEAFAAQAEAAADADQADADAAAEQAAAEgCADIgLAVIgEAHIAkAAQASAAAAARIAACoQAAASgSAAgAhmBeQAAAJAIAAIAxAAQAIAAAAgJIAAhHIhBAAgAhmg4IAAA8IBBAAIAAg8QAAgIgIAAIgxAAQgIAAAAAIgAAnAxQgGgqgJgXIgCgHQAAgIAKAAQADAAAEAFQAMAdAIAkIABAIQAAAKgMAAQgGAAgDgIg");
	this.shape_60.setTransform(525.9,165.7);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AhaB3QgVAAAAgVIAAjGIgEAAQgJAAAAgJQAAgJAJAAIDoAAQAIAAAAAJQAAAJgIAAIjQAAIAAC/QAAAKAIAAIDFAAQAKAAAAAIQAAAKgKAAgAg8BSQgPAAAAgPIAAg2QAAgOAPAAIA2AAQAPAAAAAOIAAA2QAAAPgPAAgAg4AWIAAAkQAAAHAFAAIAkAAQAHAAAAgHIAAgkQAAgHgHAAIgkAAQgFAAAAAHgAApBRQgNAAAAgNIAAg5QAAgMANAAIA7AAQAOAAAAAMIAAA5QAAANgOAAgAAvAWIAAAjQAAAGAFAAIAlAAQAHAAAAgGIAAgjQAAgHgHAAIglAAQgFAAAAAHgAgzgTQgPAAAAgPIAAggQAAgPAPAAICIAAQAQAAAAAPIAAAgQAAAPgQAAgAgwg5IAAAOQAAAHAGAAIB2AAQAHAAAAgHIAAgOQAAgHgHAAIh2AAQgGAAAAAHg");
	this.shape_61.setTransform(497.625,165.925);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("ABNBrQgRgKgQgNQgFgGgBgEQAAgLAMAAQADAAADADQAgAYAdAMQAJADgBAGQABANgMAAQgGAAgfgRgAiABwQAAgGAEgCQApgRAcgXQAEgCADAAQAJAAAAAKQAAAFgFAEQgYAXgqASIgGACQgMAAAAgMgAh2A6QgKAAAAgLQAAgKAKAAIATAAIAAiOQAAgSASAAICiAAQAUAAAAASIAACOIASAAQAKAAAAAKQAAALgKAAgAhPAlICfAAIAAgZIifAAgAhPgEICfAAIAAgXIifAAgAhPgsICfAAIAAgVIifAAgAhPhgIAAAOICfAAIAAgOQABgIgJAAIiPAAQgIAAAAAIg");
	this.shape_62.setTransform(469.85,166.075);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("Ah0BtQgKAAAAgKQAAgJAKAAIBqAAIAAizIhcAAQgKAAAAgKQAAgJAKAAIDOAAQAKAAAAAJQAAAKgKAAIhdAAIAACzIBqAAQAKAAAAAJQAAAKgKAAg");
	this.shape_63.setTransform(441.8,166.375);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("Ag1B4QgJgDAAgIQAAgKAJgBQAgAJAIAAQAGAAAGgCQAEgBAFgEQADgFAAgEIgBgMIh/AAQgKAAABgKQgBgJAKAAIB1AAIgBAAQgHgGgHgDQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAAAQAAgKALgBIAGACIADADIARgFIAPgFIAFgDQAAgDgEAAIhoAAQgIAAAAgIQAAgJAIAAIB8AAQARAAAAAMQAAADgEAEQgIAGgPAHQgNAHgPAEIAFAHIBdAAQAIAAABAJQgBAKgIAAIhVAAIACAMQgBAKgGAKQgHAJgKAEQgJAEgLAAQgTAAgXgIgAh9AZIAAggQAAgOAOAAIALAAIgHhSQABgKAEgFQADgFALAAQASAAATgEQAIAAAAAKQAAAIgJACQgSACgNAAQgHAAABAGIABAOIAgAAQAHAAAAAHQAAAJgHAAIgfAAIABARIAhAAQAHAAABAIQgBAJgHAAIgfAAIABAOICjAAIACgPIgfAAQgIAAABgJQgBgIAIAAIAgAAIACgRIglAAQgHAAAAgJQAAgIAHAAIAoAAIACgPQAAgDgHAAIgjAAQgHAAAAgJQAAgIAHAAIAtAAQAPAAAAAOIgKBXIAIAAQALAAAGAIQAEAGAAALQAAAJgBAMQgDAIgJAAQgLAAAAgKIAEgSQAAgIgJAAIjFAAQgGAAgBAFIAAAXQABAKgLAAQgKAAABgKgAglgiQAAgEADgBIAUgKIgPgHQgDgDAAgCQABgIAHAAIAGABIAUAJIATgNIAGgCQAJAAAAAIQAAAFgFADIgLAIIAOAIIACAGQgBAJgHAAQgFAAgEgDIgQgJQgMAHgQAGIgGACQgGAAAAgKgAgrhTQAAgEAEgCIAVgKIgQgHQgBgDAAgDQAAgHAHAAIAFABIAVAJQAIgHAJgIQAEgCABAAQAJAAAAAJQAAAEgEAEIgLAJIANAIIACAFQAAAJgIAAQgEAAgFgCIgNgJQgNAHgRAHIgEACQgJAAABgKg");
	this.shape_64.setTransform(413.95,165.925);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("ABxB+QgVgOgNgMQgKgKgIgLIgGAHQgVAYgbAOIgHACQgLAAAAgLQAAgEAFgDQAdgTASgUIAIgJQgIgNgGgTQgHgWgFgZQgFAKgGAJQgEAEgDAAQgKAAAAgKIACgFQAOgZAFgeQAEgZAAgbQAAgJAKAAQAJAAABAKIgBAbIBLAAQAKABAAAJQAAAKgKAAIgKAAQAAASgEAaQgEAegKAcQgGARgIANQAJANAOAMQAJAKAPAKQAIADAAAGQAAALgLAAIgDgBgAAjg7IgFAVIABAAQAGgBADAHQAGAiAHAVIAHARQAFgJAEgMQAMggADg5IgwAAIgBALgAhdB7QgHgDgBgGQABgKAHAAQARAFAEAAQADAAAEgCQAEgCADgEQACgEAAgGQAAgLgBgJQgZAFgjADQgJAAAAgJQAAgIAIgBQAjgDATgDIACgBIgCgDIgHgKIgBgEQAAgIAKgBIAEADIAFAGIAKgGIAIgIIADgFQAAAAAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgsAAIgCgBQgNANgQAIQgDADgEAAQgDAAgDgDQgDgDAAgDQAAgFAEgCQAXgPARgRQALgLAJgLIg2AAQgJAAAAgIQAAgKAJABIAmAAIAAghIggAAQgJABAAgJQAAgJAJAAIAgAAIAAgUQAAgKAKAAQAKAAAAAKIAAAUIAXAAQAHABABAEIAHgTQACgGAIgBQAEABADACQACACAAAEIgBAGQgKAhgPAXIATAAQAIgBAAAKQAAAIgIAAIgeAAQgMARgOAOIAtAAQAPAAAAAJQgBAEgDAFQgFAIgKAJQgJAKgMAGQAXgEARgFIAEgBQAGAAABAIQAAAFgGADQgPAFgZAFQACAMAAALQAAAKgFALQgFAIgIAEQgGADgKAAQgKABgMgFgAg6gvIAJAAIADgIQAIgLAGgOIgDAAIgXAAg");
	this.shape_65.setTransform(386,165.85);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AAwBzQgRgLgNgOIgGACQggALgoAHQguAJgHAAQgMgBAAgLQAAgIAJgBQBFgJAngMIAMgEQgNgVgGgcIhMAAQgSABAAgUIAAhSQAAgSASAAIBDAAIAAgWQAAgKAJAAQAMAAAAAKIAAAWIBZAAQAUAAAAASIAABSQAAAUgUgBIhRAAQAGAVAOASIABACQAegMAcgPQALgBAAALQAAAIgIADQgUAMgbALQAJAHAKAGQAQAMALAAQALAAADgIQAFgHAAgTQABgKAJAAQALAAAAAKQgCAbgHAOQgHAOgRAAQgVAAgYgNgAABAEIBMAAQAIAAAAgHIAAgYIhWAAQABATABAMgAhZgDQAAAHAIAAIA+AAQgCgMgBgTIhDAAgAgCguIBXAAIAAgVQAAgJgIAAIhQAAIABAegAhZhDIAAAVIBCAAIgBgeIg5AAQgIAAAAAJg");
	this.shape_66.setTransform(357.8,165.8);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("Ah1B7QgHgDAAgGQAAgKAHAAIADAAQAIAEADAAQAKAAgBgJIAAg/IgRAHIgEABQgLABAAgLQABgIAHgCIAYgKIAAhCIgTAAQgKAAABgKQgBgJAKAAIATAAIAAgrQAAgLAKAAQAKAAAAALIAAArIARAAQAKAAgBAJQABAKgKAAIgRAAIAAA2IAPgIIACgCQALAAgBALQAAADgDADQgKAJgOAIIAABOQAAAXgdAAQgFABgJgFgAgDB2QgQgHAAgUIAAhLIgOAGQgKAAAAgNQgBgFAGgBIATgGIAAggQABgJAJAAQAKAAAAAJIAAAZIAegLIAAgpQAAgKAKAAQAJAAAAAKIAAAhIAugRQAQAAAAARIAAA9QAAARgJAFQgHAGgLAAQgHAAgNgCQgHgDAAgGQAAgLAHAAIATADQAEAAADgEQACgDABgHIAAgsQgBgIgFAAIgmAPIAABVQAAAKgJAAQgKAAAAgKIAAhNIgeAKIAABQQAAALAHACQAMAEAdAAQAfAAANgCQAHgCADgEQAEgEgBgYQABgKAJAAQAKAAABAMQAAALgDAMQgCAQgMAHQgKAGgrAAQgvAAgNgFgAgxgoQAAgDACgDQAMgPAIgRQALgRAFgZQACgGAGgBQAEABADACQADADAAAEIgBAGIgEAMIBwAAQAJAAAAAJQAAAJgJAAIh2AAIgGANQgJARgMAPQgEAEgDABQgLAAAAgJg");
	this.shape_67.setTransform(329.85,165.75);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("ABkB5QgIgKgHgNQgGgQgEgQQgDgRgCggIAAgbQAAgKAJAAQAKAAAAAKIABArQABARADANQACAPADAIIAEAGQADAAABgPIACgbQACgHAHAAQAKAAAAAKIgBAUQgCAXgEASQgEAMgIAAQgEAAgFgFgAgoByQAAgKAJgBIAMgCIAAhvQAAgKAKAAQAKAAgBAKIAAAOIAtAAQAKAAAAAKQAAAKgKAAIgtAAIAAATIAtAAQAKAAAAAKQAAAJgKAAIgtAAIAAAjIALgDQAbgHAVgJIAEgBQAJAAAAAIQAAAHgGADQgRAJgdAJQgUAGgeAGQgKgBAAgKgAh/BxQAAgKAIgBIANgCIAAhuQAAgKAKAAQAKAAgBAKIAAAOIAtAAQALAAAAAKQAAAKgLAAIgtAAIAAATIAtAAQALAAAAAKQAAAJgLAAIgtAAIAAAhIADgBQAWgGAQgHIAEgBQAJAAAAAJQAAAGgGAEQgOAHgXAHQgRAGgZAFQgJgBAAgKgAhZgaQgTAAAAgTIAAgvQAAgKAEgDQAEgEALgBQAkgGAYgHIAJgCQAIAAABAKQgBAGgHACQgVAFgrAHQgFABgBAGIAAAJIBEAAQAHAAAAAIQAAAJgHAAIhEAAIAAALQABAHAHAAIChAAQAHAAAAgHIAAgLIhHAAQgHAAAAgJQAAgIAHAAIBHAAIAAgMQAAgHgHAAIg+AAQgHAAgBgJQABgJAHAAIBIAAQAQAAAAAPIAAA7QAAAQgQAAg");
	this.shape_68.setTransform(301.65,166.025);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgmB0IAAhzQAAgQASAAIBjAAQASAAAAAQIAABlQAAAWgcAAQgNAAgTgFQgGgDAAgGQAAgLAIAAIAGABQAOAEAHAAQANAAAAgLIAAgSIhjAAIAAApQABAJgKAAQgJAAAAgJgAgUA8IBjAAIAAgVIhjAAgAgUAJIAAAPIBjAAIAAgPQABgIgIAAIhVAAQgHAAAAAIgAh6BtIABgEQAMgaADgNQAGgUAFgaQABgGAFAAQAKAAAAALQgCAWgFAWQgGAWgKAUQgEAHgGAAQgKAAAAgJgABngCIACgYQABgIgJAAIiIAAQgGAAgBAGIAAAaQABAIgLAAQgJAAAAgIIAAgfQABgRASAAIAFAAIAAg6QgBgQATAAIBnAAQARAAAAAQIAAA6IAIAAQAKAAAGAHQAEAFAAAMQABALgDAPQgCAGgJAAQgKAAABgIgAAdhDIAAARIAxAAIAAgXIgtAAQgEAAAAAGgAgVhjIAAAxIAfAAIAAgXQAAgRAQAAIA0AAIAAgJQABgGgIAAIhWAAQgGAAAAAGgAhfgIQgNgPgOgOIgDgFQAAgLAMAAQADAAADAEQANALAMAQQACAEAAADQAAAJgLAAQgCAAgCgCgAhVhQQgLgOgNgOIgCgFQgBgLALAAQAEAAAEAEQAMALAKAOIADAHQAAAKgMAAQgCAAgDgCg");
	this.shape_69.setTransform(273.85,166.375);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("Ah4BvIABgFIAIgWQAEgQADgSQACgVAAgaIAAhoQAAgUATAAIBBAAIB2AAQAUAAABAUIAAC/QAAAfggAAQgUAAgXgHQgKgCAAgJQAAgLAKAAQAcAHAPAAQALAAAAgPIAAg1IhUAAIAABMQAAAJgLAAQgJAAABgJIAAhMIhPAAIgCAXQgCASgFAUIgIAWQgDAIgHAAQgKgBgBgKgAAQAMIBUAAIAAgvIhUAAgAhSADIAAAJIBPAAIAAgvIhPAAgAAQg1IBUAAIAAgpQgBgIgGAAIhNAAgAhShdIAAAoIBPAAIAAgxIhHAAQgHAAgBAJg");
	this.shape_70.setTransform(245.25,166.425);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AhgB4IAAiIIgOAVQgEAEgCAAQgLAAAAgIQAAgDACgDQANgWALgbQALgcAIglQABgHAGAAQAFAAAEADQADADAAAFIgBAGQgGAagHAWIAAC1QAAAKgKAAQgJAAAAgKgAhBByQAAgIAIgCQAegFAQgKIAAgBQgWgPgOgYQgDgDABgEQgBgKAKAAQADAAAEAFQARAZAUANIACgEQAKgQADgeIgyAAQgSAAAAgSIAAguQAAgRASAAIAzAAIAAgcIhGAAQgJAAAAgKQAAgJAJAAIBGAAIAAgQQAAgKAKAAQAJAAAAAKIAAAQIBNAAQAJAAgBAJQABAKgJAAIhNAAIAAAcIA0AAQATAAAAARIAAAuQAAASgTAAIg0AAQgDAogNAUQAPAGAUAEQAOADAuACQAKABAAAKQAAAMgMAAQgPgBgVgDQgWgCgVgGQgPgEgMgGQgUARgsAHQgLAAAAgLgAAnACIAAAFIAtAAQAGAAgBgGIAAgiQABgFgGAAIgtAAgAgdghIAAAiQAAAGAFAAIAsAAIAAgFIAAgoIgsAAQgFAAAAAFg");
	this.shape_71.setTransform(217.8,165.875);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AA7B6QgGgCAAgGQAAgLAHAAIAGABQAMAEAGAAQAKAAAAgMIAAgNIhfAAIAAAiQAAAKgKAAQgKAAAAgKIAAhsQAAgPAUAAIBhAAQASAAAAAPIAABcQAAAagcAAQgLAAgQgFgAgBBCIBfAAIAAgUIhfAAgAgBATIAAAKIBfAAIAAgKQAAgIgFAAIhWAAQgEAAAAAIgAhnB6QgQAAAAgPIAAg4QAAgQAQAAIAuAAQASAAAAAQIAAA4QAAAPgSAAgAhlA7IAAAoQAAAGAGAAIAeAAQAHAAAAgGIAAgoQAAgGgHAAIgeAAQgGAAAAAGgAhvAPQgIAAAAgJQAAgHAIAAIA+AAQAIAAAAAHQAAAJgIAAgAgcgWQgJAAAAgKQAAgJAJAAIA9AAIAAgRIgwAAQgJAAAAgJQAAgJAJAAIAwAAIAAgOIg3AAQgJgBAAgIQAAgJAJAAIA3AAIAAgIQAAgKAKAAQAKAAAAAKIAAAIIA8AAQAIAAAAAJQAAAIgIABIg8AAIAAAOIA2AAQAJAAAAAJQAAAJgJAAIg2AAIAAARIBDAAQAJAAAAAJQAAAKgJAAgAhvgYQgIAAAAgJQAAgJAIABIA+AAQAIgBAAAJQAAAJgIAAgAh3g8QgJAAAAgKQAAgJAJAAIBNAAQAJAAAAAJQAAAKgJAAgAhthjQgJAAAAgJQAAgJAJAAIA6AAQAJAAAAAJQAAAJgJAAg");
	this.shape_72.setTransform(190.1,165.8);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgNAOQgFgGAAgIQAAgHAFgFQAGgHAHAAQAIAAAGAHQAFAFAAAHQAAAIgFAGQgGAGgIAAQgHgBgGgFg");
	this.shape_73.setTransform(166.125,174.05);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AATBgIAAisIgnA3QgDADgFAAQgDAAgDgDQgDgCAAgFQAAgCADgFIAigwQAIgNAEgDQAGgFAJAAQALAAAAAQIAAC4QAAAJgJAAQgKAAAAgJg");
	this.shape_74.setTransform(153.525,165.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// 圖層_2
	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AgvCjIACgJQARgrAHgnQALgwAAg4IAAh3QAAgYAYgBICFAAQAZABAAAYIAAErQAAAYgrAAQgaAAgZgIQgLgEAAgMQAAgQANAAIAuAIQAQAAAAgIIAAhUIiBAAQgBAQgEAQQgHAtgOAnQgEAMgPAAQgPAAAAgNgAASggQAAAcgBAZIB9AAIAAhLIh8AAgAASiHIAAA2IB8AAIAAg2QAAgPgJAAIhsAAQgHAAAAAPgAiRBtQgaAAAAgaIAAjaQAAgZAaAAIBIAAQAbAAAAAZIAADaQAAAagbAAgAiPBIQAAAKAKABIAyAAQAIgBABgKIAAhaIhFAAgAiPh8IAABPIBFAAIAAhPQgBgKgIAAIgyAAQgKAAAAAKg");
	this.shape_75.setTransform(449.95,120.35);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgvCgIADgJQAngbANgkQAKgaAAgeIgLAAQgZAAAAgbIAAhAIAAgCIgJAIQgGAGgDAAQgPAAAAgMQAAgGACgDQARgQAMgUQANgTAIgbQACgJAJAAQAGAAAEADQAFAFAAAFIgBAJQgKAbgOAVIgCAFIAHAAIBqAAIAHAAIgIgOQgKgTgGgZQgCgIgIAAIgrAAQgMAAAAgOQAAgMAMAAIAyAAQAUgBAIAVQAIAeAKAUQAHANAKANIASATQAFAGAAAFQgBAMgNABQgEAAgGgFIgQgPIAAA+QAAAbgaAAIgJAAIAABeQAAAKAFAEQAFAFASAAQAOAAADgFQADgEAAgHIAAgaQABgOANgBQAOABABASQAAAogEAIQgCAIgJAFQgJAEgZABQgjAAgLgKQgKgJAAgYIAAhiIgeAAQAAAjgKAhQgPAngmAgQgFAGgIAAQgRAAAAgRgAAJgyIAAAvQAAAIAHAAIBYAAQAIAAAAgIIAAgvQAAgHgIgBIhYAAQgHABAAAHgAiQCrQgXAAAAgXIAAhPQAAgXAXAAIBCAAQAZAAAAAXIAABPQAAAXgZAAgAiMBRIAAA4QAAAJAHAAIAsAAQAJAAAAgJIAAg4QAAgLgJAAIgsAAQgHAAAAALgAiaASQgNAAAAgNQAAgLANAAIBXAAQANAAAAALQAAANgNAAgAiagnQgNAAAAgMQAAgNANAAIBXAAQANAAAAANQAAAMgNAAgAinhbQgNAAAAgNQAAgOANAAIBvAAQAMAAAAAOQAAANgMAAgAiZiTQgNAAAAgMQAAgNANAAIBTAAQAMAAAAANQAAAMgMAAg");
	this.shape_76.setTransform(410.175,120.25);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AirCfIACgIQAGgQAEgPQAGgXADgaQAEgeABglIAAiVQAAgcAbAAIBdAAICoAAQAdAAAAAcIAAESQAAAsgsAAQgdAAgigKQgNgDAAgNQAAgPANAAQAoAJAXAAQAPAAAAgVIAAhLIh4AAIAABrQAAAOgPAAQgOAAAAgOIAAhrIhvAAIgEAhQgCAZgIAcIgKAgQgGALgJAAQgPgBAAgOgAAXASIB4AAIAAhEIh4AAgAh0AEIAAAOIBuAAIAAhEIhuAAgAAXhMIB4AAIAAg7QgBgMgJAAIhuAAgAh0iFIAAA5IBuAAIAAhHIhkAAQgLAAABAOg");
	this.shape_77.setTransform(369.3,120.725);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AiKCrIAAjCIgTAdQgGAHgDAAQgQAAAAgNQAAgEADgEQATgfAPgmQAQgoALg1QACgKAJAAQAHAAAFAEQAFAEAAAHIgBAJQgJAmgKAeIAAEDQgBAOgOAAQgNAAAAgOgAhdCjQAAgLALgDQArgIAXgPIAAAAQgfgWgUgiQgEgEAAgGQAAgOAOAAQAFAAAEAGQAZAlAdASIADgFQANgYAFgqIhIAAQgaAAAAgaIAAhCQAAgZAaAAIBJAAIAAgnIhlAAQgMAAAAgOQAAgNAMAAIBlAAIAAgXQAAgOAOAAQAOAAAAAOIAAAXIBuAAQAMAAAAANQAAAOgMAAIhuAAIAAAnIBKAAQAcAAAAAZIAABCQAAAagcAAIhLAAQgEA4gSAdQAWAJAbAFQAUAFBDADQAOABAAAOQgBASgQAAQgVgBgfgFQgggCgegJQgUgHgSgIQgeAZg9AKQgQAAAAgQgAA4AEIAAAGIBAAAQAIAAAAgKIAAgvQAAgHgIgBIhAAAgAgpgvIAAAvQgBAKAHAAIA/AAIAAgGIAAg7Ig/AAQgHABABAHg");
	this.shape_78.setTransform(330.1,119.95);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f().s("#FFFFFF").ss(3,1,1).p("ACIiQIhTAAQgNAAAAgMQAAgMANAAIBTAAQAMAAAAAMQAAAMgMAAgAAnhyIBvAAQAMAAAAAMQAAAPgMAAIhvAAQgNAAAAgPQAAgMANAAgAA0AVQgNAAAAgNQAAgLANAAIBXAAQANAAAAALQAAANgNAAgACLg9QANAAAAANQAAAMgNAAIhXAAQgNAAAAgMQAAgNANAAgAhEiLIhtAAIAABHIB3AAIAAg7QAAgMgKAAgAixAaIB3AAIAAhEIh3AAgAjPgqIhvAAIAAA2QAAAHAAAHIBvAAgAjPiLIhkAAQgLAAAAAOIAAA5IBvAAgAg6CAIAAhLIh3AAIAABrQAAANgQAAQgOAAAAgNIAAhrIhwAAQgBAQgCARQgDAZgHAcQgGATgFANQgFALgJAAQgPgBgBgOQAAgCACgHQAGgPAEgPQAGgXAEgaQAEgeAAglIAAiVQAAgcAbAAIEGAAQAdAAAAAcIAAESQAAAsgsAAQgdAAghgKQgOgDAAgNQAAgPAOAAQAoAJAWAAQAPAAAAgVgAB1BKIgsAAQgHAAAAAKIAAA4QAAAJAHAAIAsAAQAJAAAAgJIAAg4QAAgKgJAAgACAAxQAZAAAAAXIAABPQAAAWgZAAIhCAAQgXAAAAgWIAAhPQAAgXAXAAgAmrh4IhuAAIAAAnIBKAAQAHAAAGACQAPAFAAASIAABCQAAATgPAGQgGABgHAAIhLAAQgEA4gSAdQAWAJAbAGQAQAEAtACQAMABAOAAQAOAAAAAPQAAASgRAAQgKgBgNgBQgNgBgPgCQghgDgdgKQgVgFgSgIQgeAYg+AKQgQAAAAgQQAAgLALgDQArgHAYgPIgBgBQgfgWgUghQgEgFAAgGQAAgOAOAAQAFAAAEAHQAZAkAeASQABgDACgCQAOgXAEgrIhIAAQgbAAAAgaIAAhCQAAgZAbAAIBJAAIAAgnIhlAAQgNAAAAgOQAAgNANAAIBlAAIAAgXQAAgOAOAAQAOAAAAAOIAAAXIBuAAQAMAAAAANQAAAOgMAAgAp7gvIAAAwQAAAJAGAAIBAAAQAAgDAAgDIAAg6IhAAAQgGAAAAAHgAnZg2IhAAAIAAA6QAAADAAADIBAAAQAIAAAAgJIAAgwQAAgHgIAAgALiiRIhtAAQgGAAAAAOIAAA2IB7AAIAAg2QAAgOgIAAgAJrisICFAAQAZAAAAAZIAAEsQAAAXgrAAQgaAAgZgIQgLgDAAgMQAAgQAMAAIAvAIQAPAAAAgIIAAhUIiAAAQgCAQgDAPQgIAtgOAnQgEANgPAAQgQAAAAgOQAAgBADgIQARgrAHgnQAKgwAAg4IAAh3QAAgZAaAAgAJtAaIB9AAIAAhMIh7AAIAAAWQAAAcgCAagAItBXQAAAagaAAIhIAAQgaAAAAgaIAAjaQAAgZAaAAIBIAAQAaAAAAAZgAHNh4IAABPIBEAAIAAhPQAAgKgJAAIgyAAQgJAAAAAKgAF0giQgEAAgGgFQgJgIgHgHIAAA+QAAAbgaAAIgJAAIAABeQAAAKAFAEQAFAFASAAQAOAAADgFQADgEAAgGIAAgaQABgPANgBQAOABABASQAAApgEAHQgCAIgJAFQgJAFgZAAQgjAAgLgKQgKgJAAgYIAAhiIgeAAQAAAkgKAgQgPAngnAfQgFAIgIAAQgRAAAAgSQAAgBADgIQAngbAOgjQAKgbAAgeIgLAAQgaAAAAgbIAAhAQAAgBAAgBQgEAEgFAEQgGAGgDAAQgPAAAAgMQAAgGACgDQARgQAMgTQANgUAJgbQACgJAJAAQAGAAAEAEQAFAEAAAGQAAADgBAFQgKAbgOAVQgCADgBADQADgBAFAAIBqAAQAEAAADABQgEgHgEgIQgKgTgGgZQgCgIgIAAIgrAAQgMAAAAgOQAAgMAMAAIAyAAQAUAAAIAUQAIAfAKATQAHANAKANQAGAHAMAMQAFAGAAAFQgBAMgNABgAHNgOIAABaQAAALAJAAIAyAAQAJAAAAgLIAAhagADYgvIAAAvQAAAIAHAAIBYAAQAIAAAAgIIAAgvQAAgHgIAAIhYAAQgHAAAAAHgAq9i0QAHAAAFADQAGAFAAAHQAAADgCAGQgIAmgLAeIAAEDQAAAOgOAAQgOAAAAgOIAAjCQgJAQgKAOQgGAGgDAAQgQAAAAgMQAAgEADgFQAUgfAPgmQAQgoALg1QABgKAJAAg");
	this.shape_79.setTransform(389.875,119.6);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#FFFFFF").s().p("ArcCrIAAjCIgTAdQgGAHgDAAQgQAAAAgNQAAgEADgEQAUgfAPgmQAQgoALg1QABgKAJAAQAHAAAFAEQAGAEAAAHIgCAJQgIAmgLAeIAAEDQAAAOgOAAQgOAAAAgOgAl1CnIACgJQAGgPAEgPQAGgXAEgaQAEgeAAglIAAiVQAAgcAbAAIEGAAQAdAAAAAcIAAESQAAArgsAAQgdABghgKQgOgDAAgNQAAgPAOAAQAoAJAWAAQAPAAAAgVIAAhMIh3AAIAABsQAAAOgQAAQgOAAAAgOIAAhsIhwAAIgDAiQgDAZgHAcIgLAgQgFALgJAAQgPgBgBgOgAixAZIB3AAIAAhDIh3AAgAk+AMIAAANIBvAAIAAhDIhvAAgAixhEIB3AAIAAg7QAAgMgKAAIhtAAgAk+h+IAAA6IBvAAIAAhHIhkAAQgLAAAAANgAIsCnIADgJQARgrAHgnQAKgwAAg5IAAh2QAAgYAagBICFAAQAZABAAAYIAAErQAAAYgrAAQgagBgZgHQgLgEAAgMQAAgPAMAAIAvAHQAPAAAAgHIAAhVIiAAAQgCAQgDAQQgIAtgOAnQgEAMgPAAQgQAAAAgNgAJvgdQAAAdgCAZIB9AAIAAhLIh7AAgAJviDIAAA2IB7AAIAAg2QAAgPgIAAIhtAAQgGAAAAAPgACfCjIADgJQAngcAOgiQAKgbAAgeIgLAAQgaAAAAgbIAAhAIAAgCIgJAIQgGAGgDAAQgPAAAAgMQAAgGACgEQARgPAMgUQANgTAJgbQACgJAJAAQAGAAAEADQAFAFAAAFIgBAJQgKAbgOAVIgDAFIAIAAIBqAAIAHAAIgIgOQgKgTgGgZQgCgIgIAAIgrAAQgMAAAAgOQAAgNAMABIAyAAQAUgBAIAVQAIAeAKAUQAHANAKANIASATQAFAGAAAFQgBAMgNABQgEAAgGgFIgQgPIAAA+QAAAbgaAAIgJAAIAABeQAAAKAFAEQAFAFASAAQAOAAADgFQADgEAAgHIAAgaQABgPANAAQAOABABASQAAAogEAIQgCAIgJAFQgJAEgZABQgjAAgLgKQgKgJAAgYIAAhiIgeAAQAAAjgKAhQgPAngnAgQgFAGgIAAQgRAAAAgRgADYgvIAAAvQAAAIAHAAIBYAAQAIAAAAgIIAAgvQAAgIgIAAIhYAAQgHAAAAAIgAqvCjQAAgLALgDQArgHAYgQIgBAAQgfgWgUgiQgEgEAAgGQAAgOAOAAQAFAAAEAGQAZAlAeASIADgFQAOgYAEgqIhIAAQgbAAAAgaIAAhCQAAgZAbAAIBJAAIAAgnIhlAAQgNAAAAgOQAAgNANAAIBlAAIAAgXQAAgOAOAAQAOAAAAAOIAAAXIBuAAQAMAAAAANQAAAOgMAAIhuAAIAAAnIBKAAQAHAAAGACQAPAEAAATIAABCQAAATgPAFQgGACgHAAIhLAAQgEA4gSAdQAWAJAbAFQAQAEAtADIAaABQAOAAAAAPQAAASgRAAIgXgCIgcgEQghgCgdgKQgVgFgSgJQgeAZg+AKQgQAAAAgQgAoZAEIAAAGIBAAAQAIAAAAgKIAAgvQAAgIgIAAIhAAAgAp7gvIAAAvQAAAKAGAAIBAAAIAAgGIAAg7IhAAAQgGAAAAAIgAA+CuQgXAAAAgYIAAhOQAAgXAXAAIBCAAQAZAAAAAXIAABOQAAAYgZAAgABCBUIAAA4QAAAJAHAAIAsAAQAJAAAAgJIAAg4QAAgKgJAAIgsAAQgHAAAAAKgAHLBxQgaAAAAgaIAAjaQAAgZAaAAIBIAAQAaAAAAAZIAADaQAAAagaAAgAHNBMQAAALAJAAIAyAAQAJAAAAgLIAAhaIhEAAgAHNh4IAABPIBEAAIAAhPQAAgKgJAAIgyAAQgJAAAAAKgAA0AVQgNAAAAgNQAAgLANAAIBXAAQANAAAAALQAAANgNAAgAA0gkQgNAAAAgMQAAgNANAAIBXAAQANAAAAANQAAAMgNAAgAAnhXQgNAAAAgPQAAgMANAAIBvAAQAMAAAAAMQAAAPgMAAgAA1iQQgNAAAAgMQAAgMANAAIBTAAQAMAAAAAMQAAAMgMAAg");
	this.shape_80.setTransform(389.875,119.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75}]}).wait(1));

	// 圖層_1
	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#FFFFFF").s().p("EAn2Ac1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAmIAc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAkaAc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAisAc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAg+Ac1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAfQc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAdic1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAb0c1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAaGc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAYYc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAWqc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAU8c1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgATOc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgARgc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAPyc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAOEc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAMWc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAKoc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAI6c1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAHMc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAFec1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgADwc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgACCc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAAUc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAhZc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAjHc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAk1c1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAmjc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAoRc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAp/c1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgArtc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAtbc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAvJc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAw3c1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAylc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA0Tc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA2Bc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA3vc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA5dc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA7Lc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA85c1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA+nc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEggVAc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgiDAc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgjxAc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEglfAc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgnNAc1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgo7Ac1QgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEApgAczQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBgBAAQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQAegCAcgKQAAAAABAAQAAgBABAAQAAABABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQABAAAAABQgBAAAAABQAAAAAAABQAAAAAAABQgBAAAAAAQAAABgBAAQAAAAgBAAQgcAKggADIgBAAIgDgCgEgprAc0QgggEgdgLQAAAAgBgBQAAAAgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQAAAAABAAQAbAMAfADQAAAAABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAAAAAABQABAAAAABQgBAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAIgEACIAAAAgEArJAcSQAAAAAAAAQgBgBAAAAQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAAAABgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQARgMAQgQIALgMQABgBAAAAQAAAAABAAQAAgBABAAQAAAAAAAAQABAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABgBAAQAAABAAAAIgMANQgQAQgTANIgDABIgBAAgEgrVAcLQgNgKgNgNIgRgTQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQAAAAAAAAQABAAABAAQAAAAAAABQABAAAAAAQABABAAAAIAQASQAMAMANAKQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAAAAAIgBAAIgDgBgEAsSAbAQAAgBgBAAQAAAAAAgBQgBAAAAgBQAAAAAAAAQAAgBAAAAQgBgBAAAAQABgBAAAAQAAgBAAAAQAOgaAFgdQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAAAQABgBAAAAQABAAAAAAQABgBAAAAQAAAAABABQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQgGAfgOAbQAAABgBAAQAAAAAAABQgBAAAAAAQgBABAAAAIgCAAIgCAAgEgsZAa4QAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBgBAAQgNgcgFgfQAAgBAAAAQAAgBABAAQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAABABAAQAEAeAMAaQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQAAAAgBAAIgCABIgCgBgEAspAZTQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgEgsvAZMQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAg9QAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABgBQABABAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAIAAA9QAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspAXlQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgEgsvAXeQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAg7QAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABgBQABABAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAA7QAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspAV2QgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgEgsvAVwQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAg7QAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABgBQABABAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAA7QAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBABQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspAUIQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgEgsvAUCQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAIAAA8QAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBABQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspASbQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgEgsvASUQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAg9QAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAIAAA9QAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspAQtQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgEgsvAQmQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAg8QAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABgBQABABAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAA8QAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspAO+QgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgEgsvAO4QAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAg7QAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABgBQABABAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAA7QAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBABQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspANQQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgEgsvANKQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAIAAA8QAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBABQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspALiQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgEgsvALcQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAg9QAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAIAAA9QAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspAJ1QgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgEgsvAJuQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAg9QAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABgBQABABAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAIAAA9QAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspAIHQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgEgsvAIAQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAg7QAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABgBQABABAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAA7QAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspAGYQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgEgsvAGSQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAg7QAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABgBQABABAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAA7QAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBABQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspAEqQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgEgsvAEkQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAIAAA8QAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBABQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspAC9QgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgEgsvAC2QAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAg9QAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAIAAA9QAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspABPQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgEgsvABIQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAg8QAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABgBQABABAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAA8QAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspgAfQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgEgsvgAlQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAg7QAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABgBQABABAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAA7QAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBABQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspgCNQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgEgsvgCTQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAIAAA8QAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBABQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspgD6QgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgEgsvgEBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAg9QAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAIAAA9QAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspgFoQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgEgsvgFvQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAg8QAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABgBQABABAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAA8QAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspgHWQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgEgsvgHdQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAg7QAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABgBQABABAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAA7QAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBABQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspgJFQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgEgsvgJLQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAg7QAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAA7QAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBABQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspgKzQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgEgsvgK5QAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAg9QAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAIAAA9QAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBABQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspgMgQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgEgsvgMnQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAg9QAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAIAAA9QAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspgOOQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgEgsvgOVQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAg8QAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABgBQABABAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAA8QAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspgP9QgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgEgsvgQDQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAg7QAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABgBQABABAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAA7QAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBABQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspgRrQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgEgsvgRxQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAg8QAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAIAAA8QAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBABQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspgTYQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABABQAAAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgEgsvgTfQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAg9QAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAAAIAAA9QAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspgVGQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgEgsvgVNQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAAAIAAg8QAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABgBQABABAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAA8QAAAAAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspgW0QgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAg8QAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABIAAA8QAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAgEgsvgW7QAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAg7QAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQABAAAAgBQABAAAAAAQABAAAAAAQAAAAABgBQABABAAAAQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAA7QAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBABQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAspgYjQgBAAAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIAAgwIAAgMQAAAAAAAAQAAgBAAAAQABgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQABAAAAAAQAAAAABAAQABAAAAAAQAAAAABAAQAAAAABAAQAAABABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAAAIAAAMIAAAwQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAAAQgBABAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAgBgEgsvgYpQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgpIAAgRQABAAAAgBQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAQAAgBABAAQAAABABAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQABAAgBABIAAAQIAAApQAAABAAAAQAAABAAAAQgBABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBAAAAAAQAAAAgBABQgBgBAAAAQAAAAgBAAQAAAAgBAAQAAgBgBAAgEAsigaPQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQgJgbgQgZQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQABgBAAAAQAAAAAAgBQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABABAAAAQABAAAAAAQAAABABAAQARAaAIAeQAAAAAAAAQABABAAAAQgBABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQgBABAAAAIgCAAIgCgBgEgsjgaUQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAAAQAAgBAAAAQAAgBgBAAQAAgBABAAQAAgBAAAAQAJgdARgaQABAAAAgBQAAAAABAAQAAAAABgBQAAAAABAAQAAAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABQABABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgRAYgJAcQAAABAAAAQAAAAgBABQAAAAAAAAQgBABAAAAIgCABIgCgBgEArngbuQgWgVgYgOQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAABQAaAOAWAWQAAAAABABQAAAAAAABQAAAAAAABQAAAAABAAQAAABgBAAQAAABAAAAQAAABAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAAAABQgBgBAAAAQgBAAAAAAQgBAAAAAAQgBgBAAAAgEgrlgbxQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAQAAgBAAAAQgBgBABAAQAAgBAAAAQAAgBAAAAQAAgBAAAAQABAAAAgBQAXgVAagNQAAAAABAAQAAAAABgBQAAAAABABQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAAAABQgBAAAAAAQAAABgBAAQgZANgVAUIgDABIgBAAgEAqNgcjQgcgHgeAAIg8AAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQAgAAAcAIQABAAAAAAQABAAAAABQAAAAABAAQAAABAAAAQABAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAABIgDAAIgBAAgEgqJgclQgBAAAAAAQgBgBAAAAQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAABAAQAAgBAAAAQABgBAAAAQAAAAABAAQAAgBABAAQAZgGAdAAIAGAAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAIgGAAQgbAAgZAGIgBAAIgCgBgEAmpgcqQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAk7gcqQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAjNgcqQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEAhfgcqQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAfx8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAeD8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAcV8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAan8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAY58qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAXL8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAVd8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgATv8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgASB8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAQT8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAOl8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAM38qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgALJ8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAJb8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAHt8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAF/8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAER8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgACj8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAA18qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAg48qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA7AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAim8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAkU8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAmC8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAnw8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgApe8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgArM8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAs68qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAuo8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAwW8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAyE8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgAzy8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA1g8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA3O8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA488qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA6q8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA8Y8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA+G8qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgA/08qQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEghigcqQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgjQgcqQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgk+gcqQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAABAAQAAABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgmsgcqQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAgEgoagcqQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQAAgBAAAAQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAAAAAQABAAAAgBQABAAAAAAQAAAAABAAIA8AAQABAAAAAAQAAAAABAAQAAABABAAQAAAAAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQAAABAAAAQAAAAAAABQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAABQgBAAAAAAQAAAAgBAAg");
	this.shape_81.setTransform(393.3,274.45);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#CCCCCC").s().p("EgspAftQhWAAg+g7Qg+g9AAhUMAAAg5CQAAhUA+g8QA+g7BWgBMBZSAAAQBXABA/A7QA9A8AABUMAAAA5CQAABUg9A9Qg/A7hXAAg");
	this.shape_82.setTransform(393.3,274.45);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#5A5A5A").s().p("EgspAftQhWAAg+g7Qg+g9AAhUMAAAg5CQAAhUA+g8QA+g7BWgBMBZSAAAQBXABA/A7QA9A8AABUMAAAA5CQAABUg9A9Qg/A7hXAAg");
	this.shape_83.setTransform(406.8,287.95);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_83},{t:this.shape_82},{t:this.shape_81}]}).wait(1));

	// 圖層_4
	this.instance = new lib.元件5("synched",0);
	this.instance.alpha = 0.5;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// shield
	this.shield = new lib.invisibleBtn();
	this.shield.name = "shield";
	new cjs.ButtonHelper(this.shield, 0, 1, 2, false, new lib.invisibleBtn(), 3);

	this.timeline.addTween(cjs.Tween.get(this.shield).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.使用說明help, new cjs.Rectangle(0,0,800,566), null);


(lib.使用說明b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.Path();
	this.instance.setTransform(0,18.55,1,1,0,0,0,72.8,39.9);
	this.instance.alpha = 0.6016;
	this.instance.filters = [new cjs.BlurFilter(7, 7, 1)];
	this.instance.cache(34,34,78,12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgSBBIABgEQAHgRACgQQAFgSAAgWIAAgwQAAgKAJAAIA1AAQAKAAAAAKIAAB3QAAAJgRAAQgLAAgKgCQgEgCAAgFQAAgGAFAAIATADQAGAAAAgDIAAgiIgzAAIgDANQgDASgEAQQgCAFgGAAQgGAAAAgGgAAIgMIgBAUIAyAAIAAgdIgxAAgAAIg1IAAAVIAxAAIAAgVQAAgGgEAAIgrAAQgCAAAAAGgAg5AsQgLAAAAgLIAAhWQAAgKALAAIAdAAQAKAAAAAKIAABWQAAALgKAAgAg5AcQAAAFAEAAIAUAAQAEAAAAgFIAAgjIgcAAgAg5gxIAAAgIAcAAIAAggQAAgEgEAAIgUAAQgEAAAAAEg");
	this.shape.setTransform(25.925,-4.875);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgSBAIABgEQAQgLAEgOQAEgKAAgMIgEAAQgKAAAAgLIAAgZIAAgBIgDAEIgEACQgGAAAAgFIABgEQAHgGAFgIQAFgIACgKQABgEAEAAIAEABQAAABABAAQAAABABAAQAAABAAAAQAAABAAAAIgBAEQgDALgGAIIgBACIADAAIAqAAIADAAIgDgFQgEgIgCgKQgBgDgDAAIgSAAQgFAAAAgGQAAgFAFAAIAUAAQAIAAADAIQAEAMAEAIIAHALIAHAHQAAABABAAQAAABAAAAQABABAAABQAAAAAAABQgBAEgFABQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAgBgBAAIgGgGIAAAYQAAALgLAAIgEAAIAAAlQAAAEADACQACACAHAAQAGAAABgCQAAAAAAgBQABAAAAgBQAAAAAAgBQAAgBAAAAIAAgLQAAgFAGgBQAFABAAAHQAAAQgBADQgBADgEACQgDACgKAAQgOAAgFgEQgEgDAAgKIAAgnIgLAAQAAAOgFANQgFAQgPAMQgCADgDAAQgHAAAAgHgAAEgTIAAATQAAAAAAAAQAAABAAAAQABABAAAAQABAAABAAIAiAAQABAAABAAQAAAAABgBQAAAAABgBQAAAAAAAAIAAgTQAAgBAAgBQgBAAAAgBQgBAAAAAAQgBAAgBAAIgiAAQgBAAgBAAQAAAAgBAAQAAABAAAAQAAABAAABgAg5BEQgJAAAAgJIAAgfQAAgJAJAAIAaAAQALAAAAAJIAAAfQAAAJgLAAgAg3AgIAAAXQAAAEADAAIARAAQAEAAAAgEIAAgXQAAgEgEAAIgRAAQgBAAgBABQAAAAAAAAQgBABAAABQAAAAAAABgAg9AHQgFAAAAgFQAAgEAFAAIAjAAQAFAAAAAEQAAAFgFAAgAg9gPQgFAAAAgFQAAgFAFAAIAjAAQAFAAAAAFQAAAFgFAAgAhCgjQgFAAAAgGQAAgFAFAAIAsAAQAFAAAAAFQAAAGgFAAgAg8g6QgGAAAAgFQAAgFAGAAIAhAAQAFAAAAAFQAAAFgFAAg");
	this.shape_1.setTransform(9.025,-4.925);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhEA/IABgDQADgGABgGIAEgTQABgMAAgPIAAg7QAAgMALAAIAmAAIBCAAQAMAAAAAMIAABtQAAARgSAAQgLAAgOgEQgFgBAAgFQAAgGAFAAQAQAEAJAAQAGAAAAgJIAAgeIgvAAIAAArQAAAFgHAAQgFAAAAgFIAAgrIgsAAIgBANIgFAVIgEANQgCAFgEAAQgFgBgBgGgAAKAHIAvAAIAAgbIgvAAgAguACIAAAFIAsAAIAAgbIgsAAgAAKgeIAvAAIAAgXQAAgFgEAAIgrAAgAgug1IAAAXIAsAAIAAgcIgoAAQgEAAAAAFg");
	this.shape_2.setTransform(-8.325,-4.725);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ag2BEIAAhNIgIAMQAAAAgBABQgBAAAAABQAAAAgBAAQAAAAgBAAQgGABAAgGIABgDQAIgMAGgPQAGgQAFgVQABgFADAAQABAAAAABQABAAABAAQAAAAABAAQAAABABAAQACACAAACIgBAEQgDAQgEALIAABnQAAAGgGAAQgFAAAAgGgAgkBCQAAgFAEgBQARgEAKgFQgNgJgIgNIgBgFQAAgGAFAAQABAAAAABQAAAAABAAQAAAAABABQAAAAABABQAJAOALAIIACgCQAFgJACgSIgcAAQgKAAAAgKIAAgZQAAgLAKABIAdAAIAAgRIgoAAQgFAAAAgFQAAgFAFAAIAoAAIAAgJQAAgGAFAAQAGAAAAAGIAAAJIAsAAQAFAAAAAFQAAAFgFAAIgsAAIAAARIAdAAQALgBAAALIAAAZQAAAKgLAAIgeAAQgBAXgHAMQAIADALACQAIADAbABQAFAAAAAFQAAAHgGAAIgVgCQgNgBgMgEIgPgFQgLAKgZADQgGAAAAgFgAAXACIAAACIAZAAQABAAABAAQAAAAABgBQAAAAABgBQAAgBAAgBIAAgSQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAgBAAIgZAAgAgQgSIAAASQAAABAAABQABABAAAAQAAABABAAQAAAAABAAIAZAAIAAgCIAAgXIgZAAQgBAAAAAAQgBAAAAABQAAAAgBABQAAAAAAABg");
	this.shape_3.setTransform(-25.025,-5.05);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#B48D9C").s().p("AADALQgcgEgFgNIAPgGIALAMQANAMAWAAIgFABQgLAAgMgCg");
	this.shape_4.setTransform(-34.675,9.355);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ADNAqQhhgWhrAAQhZAAiTApQhJAUg4AVIAAiCQABggAhgTQAkgWA9AAIG3AAQBuAAAfAWQARAMAAAnIAACCQhAgmhfgWg");
	this.shape_5.setTransform(-0.25,-10.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#B48D9C").s().p("AlUCOQgQgOAAgSIAAjJQAAghAOgOQAUgUA4AAIH1AAQBMAAAuAcQgngNgxAAIn2AAQg7AAgYAOQgWANAAAdIAADBQAAAMAOATQAPAVAOABQgbgCgSgPg");
	this.shape_6.setTransform(-2.925,-4.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjnCTQglAAgggHQgegIgVgMQAmAMAxAAIHvAAQA7AAAWgMQAUgLAAgcIAAi0QAAgKgOgPQgNgOgOgIQAgAKAMAIQARAKAAAPIAAC5QAAAhgNANQgTATg4AAg");
	this.shape_7.setTransform(3.775,-2.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#B48D9C").ss(0.5,0,0,2.6).p("AGWBnQAAAngQAPQgWAXhBAAIpdAAQhBAAgXgXQgPgPAAgnIAAjNQAAgnAPgPQAXgXBBAAIJdAAQBBAAAWAXQAQAPAAAng");
	this.shape_8.setTransform(0.025,-4.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFFFF","#DDA1B0"],[0,1],0.6,-16.9,-0.6,16.8).s().p("AkuC0QhBAAgXgXQgPgPAAgnIAAjNQAAgnAPgPQAXgXBBAAIJdAAQBBAAAWAXQAQAPAAAnIAADNQAAAngQAPQgWAXhBAAg");
	this.shape_9.setTransform(0.025,-4.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgUBIIABgEQAHgTADgRQAFgWAAgYIAAg0QAAgLAKAAIA7AAQALAAAAALIAACDQAAALgTgBQgMAAgLgDQgEgCAAgFQAAgHAFABIAVADQAGAAAAgDIAAgmIg4AAIgCAOQgEAUgFARQgCAGgGAAQgHgBAAgFgAAIgOIgBAXIA3AAIAAggIg2AAgAAIg7IAAAYIA2AAIAAgYQAAgGgEAAIgvAAQgDAAAAAGgAg/AwQgMAAAAgMIAAhfQAAgLAMAAIAgAAQALAAAAALIAABfQAAAMgLAAgAg+AgQAAAEAEAAIAWAAQAEAAAAgEIAAgoIgeAAgAg+g2IAAAjIAeAAIAAgjQAAgFgEAAIgWAAQgEAAAAAFg");
	this.shape_10.setTransform(28.425,-4.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgUBGIABgDQARgNAGgPQAEgMAAgNIgFAAQgLAAAAgLIAAgcIAAgBIgDAEQgBAAAAABQgBAAgBAAQAAABAAAAQgBAAAAAAQgHAAAAgFIABgFQAHgGAGgJQAGgJACgMQABgDAEAAQABAAAAAAQABAAABAAQAAAAABAAQAAABABAAQACACAAACIgBAFQgEALgGAJIgBADIADgBIAvAAIADABIgEgGQgEgJgDgLQAAgDgEgBIgTAAQgGABAAgHQAAgFAGAAIAWAAQAJAAADAJQAEANAEAJIAIAMIAIAIQAAAAABABQAAABAAAAQABABAAAAQAAABAAAAQgBAGgFABQgCAAgDgDIgHgGIAAAbQAAALgLAAIgEAAIAAAqQAAAEACACQACACAIAAQAGAAACgCQABgCAAgDIAAgLQAAgHAGAAQAGAAAAAIQAAASgBADQgBAEgEACQgEACgLAAQgPAAgFgEQgFgEAAgKIAAgsIgNAAQAAAQgEAOQgHARgQAOQgCADgDAAQgIAAAAgIgAAEgWIAAAVQAAAEADAAIAnAAQADAAAAgEIAAgVQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIgnAAQgBAAAAAAQgBAAAAAAQgBABAAAAQAAABAAAAgAg/BLQgKAAAAgKIAAgiQAAgLAKABIAdAAQALgBAAALIAAAiQAAAKgLAAgAg9AjIAAAZQAAAFADAAIAUAAQAEAAAAgFIAAgZQAAgEgEAAIgUAAQgDAAAAAEgAhDAIQgGAAAAgFQAAgFAGAAIAmAAQAGAAAAAFQAAAFgGAAgAhDgQQgGAAAAgGQAAgGAGAAIAmAAQAGAAAAAGQAAAGgGAAgAhJgnQgFAAAAgHQAAgFAFAAIAxAAQAFAAAAAFQAAAHgFAAgAhDhAQgFAAAAgFQAAgGAFAAIAlAAQAFAAAAAGQAAAFgFAAg");
	this.shape_11.setTransform(9.825,-4.95);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AhLBGIABgEIAFgNIADgWQACgNABgQIAAhBQAAgNAMAAIAoAAIBKAAQANAAgBANIAAB4QAAATgTAAQgMAAgPgEQgGgCgBgFQABgHAGAAQASAEAJAAQAGAAABgKIAAggIg0AAIAAAvQAAAGgIAAQgFAAAAgGIAAgvIgxAAIgBAOIgFAYIgEAOQgDAFgEAAQgHgBAAgGgAALAIIA0AAIAAgeIg0AAgAgzACIAAAGIAxAAIAAgeIgxAAgAALghIA0AAIAAgaQAAgFgFAAIgvAAgAgzg6IAAAZIAxAAIAAgfIgsAAQgEAAgBAGg");
	this.shape_12.setTransform(-9.25,-4.725);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("Ag8BLIAAhVIgJANQAAABgBAAQAAABgBAAQAAAAgBABQAAAAAAAAQgIAAABgGIABgDQAIgOAHgQQAHgSAEgXQABgFAFAAQADAAABACQADACAAADIgBAEQgDAQgFAOIAABxQAAAGgGAAQgGAAAAgGgAgpBIQAAgFAGgBQASgEALgGIgBgBQgNgJgKgPIgBgFQABgGAFAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQALAQAMAIIACgCQAGgKACgTIgfAAQgMAAAAgMIAAgcQAAgLAMAAIAfAAIAAgRIgsAAQgFAAAAgGQAAgGAFAAIAsAAIAAgKQAAgGAHAAQAFAAABAGIAAAKIAwAAQAGAAAAAGQAAAGgGAAIgwAAIAAARIAgAAQANAAAAALIAAAcQAAAMgNAAIghAAQgBAZgJAMQAKAEAMADQAJACAdABQAGAAABAHQAAAHgIAAIgXgCQgOgBgNgEQgJgDgIgDQgMAKgcAFQgHAAAAgHgAAZACIAAACIAcAAQADAAAAgEIAAgUQAAgBAAgBQAAAAAAAAQgBgBAAAAQgBAAgBAAIgcAAgAgRgUIAAAUQAAABAAABQAAABAAAAQAAABABAAQAAAAABAAIAbAAIAAgCIAAgZIgbAAQgBAAAAAAQgBAAAAABQAAAAAAAAQAAABAAABg");
	this.shape_13.setTransform(-27.6,-5.075);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9,p:{scaleX:1,scaleY:1,x:0.025,y:-4.325}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:0.025,y:-4.325}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:3.775,y:-2.925}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:-2.925,y:-4.475}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:-0.25,y:-10.125}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:-34.675,y:9.355}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{scaleX:1,scaleY:1,y:18.55}}]}).to({state:[{t:this.shape_9,p:{scaleX:1.1,scaleY:1.1,x:0.0115,y:-4.7479}},{t:this.shape_8,p:{scaleX:1.1,scaleY:1.1,x:0.0115,y:-4.7479}},{t:this.shape_7,p:{scaleX:1.1,scaleY:1.1,x:4.1364,y:-3.208}},{t:this.shape_6,p:{scaleX:1.1,scaleY:1.1,x:-3.2334,y:-4.9129}},{t:this.shape_5,p:{scaleX:1.1,scaleY:1.1,x:-0.291,y:-11.1278}},{t:this.shape_4,p:{scaleX:1.1,scaleY:1.1,x:-38.1577,y:10.2997}},{t:this.instance,p:{scaleX:1.1,scaleY:1.1,y:20.4}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_9,p:{scaleX:1,scaleY:1,x:0.025,y:-4.325}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:0.025,y:-4.325}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:3.775,y:-2.925}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:-2.925,y:-4.475}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:-0.25,y:-10.125}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:-34.675,y:9.355}},{t:this.instance,p:{scaleX:1,scaleY:1,y:18.55}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.7,-25.5,93.2,57.6);


(lib.數字鍵盤 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.close_btn.on("click", _close.bind(this));
		
		function _close(evt) {
			
			this.visible=false;
			this.parent.ua_1.visible=false;
			this.parent.ua_2.visible=false;
			this.parent.ua_3.visible=false;
			this.parent.ua_4.visible=false;
			this.parent.ua_5.visible=false;
			
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_1
	this.close_btn = new lib.XICONBUTTON();
	this.close_btn.name = "close_btn";
	this.close_btn.setTransform(99.5,6.65,0.3377,0.3377,0,0,0,0.6,0.5);
	new cjs.ButtonHelper(this.close_btn, 0, 1, 2, false, new lib.XICONBUTTON(), 3);

	this.btn_0 = new lib.元件21aaa();
	this.btn_0.name = "btn_0";
	this.btn_0.setTransform(-99.2,6.05,1.2007,1.2007,0,0,0,-0.1,0.1);
	new cjs.ButtonHelper(this.btn_0, 0, 1, 2);

	this.btn_1 = new lib.元件11aaa();
	this.btn_1.name = "btn_1";
	this.btn_1.setTransform(-79.35,6.05,1.2007,1.2007,0,0,0,-0.1,0.1);
	new cjs.ButtonHelper(this.btn_1, 0, 1, 2);

	this.btn_2 = new lib.元件12aaa();
	this.btn_2.name = "btn_2";
	this.btn_2.setTransform(-59.5,6.05,1.2007,1.2007,0,0,0,-0.1,0.1);
	new cjs.ButtonHelper(this.btn_2, 0, 1, 2);

	this.btn_3 = new lib.元件13aaa();
	this.btn_3.name = "btn_3";
	this.btn_3.setTransform(-39.65,6.05,1.2007,1.2007,0,0,0,-0.1,0.1);
	new cjs.ButtonHelper(this.btn_3, 0, 1, 2);

	this.btn_4 = new lib.元件14aaa();
	this.btn_4.name = "btn_4";
	this.btn_4.setTransform(-19.8,6.05,1.2007,1.2007,0,0,0,-0.1,0.1);
	new cjs.ButtonHelper(this.btn_4, 0, 1, 2);

	this.btn_5 = new lib.元件15aaa();
	this.btn_5.name = "btn_5";
	this.btn_5.setTransform(0.05,6.05,1.2007,1.2007,0,0,0,-0.1,0.1);
	new cjs.ButtonHelper(this.btn_5, 0, 1, 2);

	this.btn_6 = new lib.元件16aaa();
	this.btn_6.name = "btn_6";
	this.btn_6.setTransform(20.15,6.05,1.2007,1.2007,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.btn_6, 0, 1, 2);

	this.btn_9 = new lib.元件19aaa();
	this.btn_9.name = "btn_9";
	this.btn_9.setTransform(79.6,5.95,1.2007,1.2007);
	new cjs.ButtonHelper(this.btn_9, 0, 1, 2);

	this.btn_8 = new lib.元件18aaa();
	this.btn_8.name = "btn_8";
	this.btn_8.setTransform(59.85,6.05,1.2007,1.2007,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.btn_8, 0, 1, 2);

	this.btn_7 = new lib.元件17aaa();
	this.btn_7.name = "btn_7";
	this.btn_7.setTransform(40,6.05,1.2007,1.2007,0,0,0,0.1,0.1);
	new cjs.ButtonHelper(this.btn_7, 0, 1, 2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#66CCFF").s().p("ArqBoQg8ABAAg9IAAhXQAAg9A8ABIXVAAQA8gBAAA9IAABXQAAA9g8gBg");
	this.shape.setTransform(-104,-5.9,1.3537,1.3537,0,0,0,-76.6,-8.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape},{t:this.btn_7},{t:this.btn_8},{t:this.btn_9},{t:this.btn_6},{t:this.btn_5},{t:this.btn_4},{t:this.btn_3},{t:this.btn_2},{t:this.btn_1},{t:this.btn_0},{t:this.close_btn}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.數字鍵盤, new cjs.Rectangle(-111.1,-8.9,222,28.299999999999997), null);


(lib.Symbol6 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2
	this.hitBox = new lib.hitArea();
	this.hitBox.name = "hitBox";
	this.hitBox.setTransform(0,0,5.938,2.1863);
	this.hitBox.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.hitBox).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol6, new cjs.Rectangle(-204.5,-75.3,409.4,150.8), null);


(lib.顯示答案b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.Path_2();
	this.instance.setTransform(0,18.55,1,1,0,0,0,72.8,39.9);
	this.instance.alpha = 0.6016;
	this.instance.filters = [new cjs.BlurFilter(7, 7, 1)];
	this.instance.cache(34,34,78,12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003300").s().p("AgGBFIAAgZIgTALQgOAGgZAIIgEABQgGAAAAgGQAAgEADgCQAbgHAPgHQALgEAJgGIg5AAQgFAAAAgFQAAgFAFAAIA8AAIAAgIQAAgGAGAAQAGAAAAAGIAAAIIA9AAQAFAAAAAFQAAAFgFAAIg9AAQANAIAPAFQAVAIARAEQADABAAAEIgBAEQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgHAAIgdgLQgPgHgNgIIAAAZQAAAFgGAAQgGAAAAgFgAA7APIg2gOIgPAGQgNAEgQADIgZABQgHAAAAgFQAAgFAFAAQAcgCASgDIAIgCIgUgEQgJgCAAgFQAAgEAEgCIAIgGIgkAAQgFAAAAgFQAAgFAFAAIAvAAQAEgFADgGQACgEADAAQAGABAAAEIgBAEIgEAGIBFAAQAFAAAAAFQAAAFgFAAIgbAAIgDAEQgGAJgJAGIgCACIAvAIQAEACAAADQAAAGgFAAIgEAAgAgagQIgBABQAAAAAAABQAAAAAAAAQAAAAABAAQAAABABAAIAbAFIAGgDQAJgFAHgJIgmAAIgMAJgAA7gsIAAgFQAAgEgEAAIhvAAQgEAAAAAEIAAAEQAAAFgGAAQgFAAAAgFIAAgIQAAgKAKAAIA2AAIAAgEQAAgGAGAAQAFAAAAAGIAAAEIA7AAQAIAAAAAKIgBAJQgBAEgFAAQgFAAAAgEg");
	this.shape.setTransform(26.075,-5.075);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003300").s().p("AguBIQgLAAAAgKIAAgfQAAgLALAAIBeAAQAKAAAAALIAAAfQAAAKgKAAgAguAiIAAAYQAAAEAEAAIBWAAQADAAAAgEIAAgYQAAAAAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAIhWAAQgBAAgBAAQAAAAgBABQAAAAAAABQgBABAAAAgAhLAFQAAgEADgBQAVgGAOgGQAPgIANgMQAFgEAEAAQAFAAAJAHQAKAJAOAIQANAGAWAGQADABAAADQgBAGgGAAIgEgBQgXgHgKgFQgOgIgOgLQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAIgCABQgPAOgQAIIgBABIABgBIABAAIA/AAQAEAAAAAEQAAAGgEAAIg/AAQgGAAAAgGIABgDQgMAGgQAFIgEABQgFgBgBgFgAgkgfIgEgQIAAgBIgLAAIgGAIQgEADgFADQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgEQAFgDADgDIAHgIIAEgLQABgEAEAAIAEABQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABIgBADIgCAFIAoAAQAFAAAAAFIAAABIAFgGQADgEACgFQABgEAFAAIAEABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAADIgDAFIAyAAQAEAAAAAFQAAAFgEAAIgcAAIAFANIAAADQABAEgGAAQgFAAgBgEQgCgJgDgGIAAgBIgSAAIgFAEIgIAHIgEABQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAFgCIgXAAIAEANIAAAEQAAAEgGAAQgEAAgBgEg");
	this.shape_1.setTransform(9,-5.25);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003300").s().p("AgiA+QgEgCAAgEQAAgGAFAAIAEABQARAGAFAAQAFAAAAgIIAAhCIg/AAQgGAAAAgGQAAgGAGAAICDAAQAGAAAAAGQAAAGgGAAIg5AAIAABEQAAASgSAAQgJAAgQgHgAhFA6IACgEQAPgZAIgdQABgDAEAAQAGAAAAAEIgBAEQgIAegPAYQgCAEgDAAQgHAAAAgFgAA8A5QgNghgNgTIgCgEQAAgEAHAAQACAAADADQAQAXALAcIABAFQAAAFgHAAQgEAAgBgEgAg2g4QgGAAAAgGQAAgGAGAAIBuAAQAFAAAAAGQAAAGgFAAg");
	this.shape_2.setTransform(-7.975,-4.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003300").s().p("ABABDQgHgEgHgLIgEgJIABgEIgRAAQACACAAAEQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgIAMgOAIIgDABQgFABAAgHQAAgDACgCQANgHAJgMIgFAAQgJAAAAgIIAAhDQAAgJAJABIAMAAIADgOIgZAAQgFAAAAgFQAAgGAFAAIA8AAQAFAAAAAGQAAAFgFAAIgXAAIgEAOIAQAAQAKgBAAAJIAABDQAAAIgKAAIgCAAIABADQAEALALAHQABABAAAAQABABAAAAQAAABABAAQAAABAAABIgBADQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgDAAgCgDgAAUAaQAAABAAABQABAAAAABQAAABABAAQAAAAABAAIAeAAQADAAAAgEIAAgNIgkAAgAAUADIAkAAIAAgOIgkAAgAAUgfIAAAKIAkAAIAAgKQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIgeAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAABAAABgAgtBBQAAgOgBgEIAAgEQAAgDAEgBQAEAAABAFQADAJAAALQAAAFgGAAQgFAAAAgEgAhIBBIABgFQAFgIACgJQABgDADgBQAFAAAAAFIAAADQgDAKgEAJQgBADgDAAQgGAAAAgEgAgVA8QgDgKgDgGIgBgDQAAgDAEAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAFAIAEAJIAAADQAAAGgGAAQgDAAgBgFgAgEA0QgDgHgDgFIgBgCQAAgEAFgBQAAAAAAABQABAAAAAAQAAAAABABQAAAAAAABQAEAGADAGIABADQAAAEgEAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBgAgoAhIgBgDIgCABIgYAEQgEAAAAgFQAAgEAEAAIABAAIAIgNIgBgBIgHgIIgFgEIgCgDQAAgEAEAAIACABQAGgIAEgIQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAEAAAAAEIgBAFIgJAOIAAAAIAGAGIAJgSQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABABAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAIAAADIAAAAIACAAIACAAQAGgHADgHQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAEAAAAADIgCAGQgEAHgEAFIABABIAHAGIAJgRQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABgBIADABIACADIgBACQgJAQgKAOIAQgCIgCgFIAAgDQAAgDAEAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAABIAGARIAAADQAAADgFAAQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAgBgBgBIAAgDIgCAAIgbAEIAAACQAAAEgFAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBgBgBgAg3AYIALgCIgBgCIAAgCQAAgEAEAAIADACIAEAHIACAAIABAAIAAgBIAIgKIgIgJIgHgFIgBgDQgHAQgJANgAg7gbQgJAAAAgJIAAgZQAAgIAJAAIAyAAQAJAAAAAIIAAAZQAAAJgJAAgAg6gpQAAAFAEAAIAoAAQAEAAAAgFIAAgDIgwAAgAg6g4IAAADIAwAAIAAgDQAAgEgEAAIgoAAQgEAAAAAEg");
	this.shape_3.setTransform(-25.125,-4.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#BFBF6D").s().p("AADALQgcgEgFgNIAQgGIAKAMQANAMAWAAIgFABQgLAAgMgCg");
	this.shape_4.setTransform(-34.675,9.355);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ADNAqQhhgWhrAAQhZAAiTApQhJAUg4AVIAAiCQABggAhgTQAkgWA9AAIG3AAQBuAAAfAWQARAMAAAnIAACCQhAgmhfgWg");
	this.shape_5.setTransform(-0.25,-10.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#BFBF6D").s().p("AlUCOQgQgOAAgSIAAjJQAAghAOgOQAUgUA4AAIH1AAQBMAAAuAcQgngNgxAAIn2AAQg7AAgYAOQgWANAAAdIAADBQAAAMAOATQAPAVAOABQgbgCgSgPg");
	this.shape_6.setTransform(-2.925,-4.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjnCTQglAAgggHQgegIgVgMQAmAMAxAAIHvAAQA7AAAWgMQAUgLAAgcIAAi0QAAgKgOgPQgNgOgOgIQAgAKAMAIQARAKAAAPIAAC5QAAAhgNANQgTATg4AAg");
	this.shape_7.setTransform(3.775,-2.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#D6DF71").ss(0.5,0,0,2.6).p("AGWBnQAAAngPAPQgXAXhBAAIpdAAQhBAAgXgXQgPgPAAgnIAAjNQAAgnAPgPQAXgXBBAAIJdAAQBBAAAXAXQAPAPAAAng");
	this.shape_8.setTransform(0.025,-4.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFFFF","#D6DF71"],[0,1],0.6,-16.9,-0.6,16.8).s().p("AkuC0QhBAAgXgXQgPgPAAgnIAAjNQAAgnAPgPQAXgXBBAAIJdAAQBBAAAXAXQAPAPAAAnIAADNQAAAngPAPQgXAXhBAAg");
	this.shape_9.setTransform(0.025,-4.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003300").s().p("AgGBMIAAgcIgWAMQgPAIgcAIIgEABQgHAAAAgHQAAgEAEgCQAegIAQgHQAMgFAKgGIg/AAQgFAAAAgGQAAgGAFAAIBDAAIAAgIQAAgGAGAAQAGAAAAAGIAAAIIBEAAQAGAAAAAGQAAAGgGAAIhDAAQAOAIAQAGQAYAIASAFQAEABAAAFIgBAEQgCADgDAAIgHgBIghgMQgQgHgPgJIAAAbQAAAGgGAAQgGAAAAgGgABBARIg7gPIgRAGQgOAFgSACQgQACgMAAQgHAAAAgGQAAgFAFAAQAggCATgEIAJgCIgWgFQgKgCAAgGQAAgDAEgDIAJgHIgnAAQgGAAAAgFQAAgGAGAAIAzAAQAFgFADgHQACgEAEAAQAGABAAAFIgBAEIgEAGIBMAAQAFAAAAAGQAAAFgFAAIgfAAIgCAFQgHAJgKAHIgCACIA0AKQAEABAAAEQAAAHgGAAIgEAAgAgdgSIgBACQAAAAAAAAQAAAAAAABQABAAAAAAQABAAAAAAIAeAHIAHgEQAJgGAIgKIgqAAIgNAKgABBgwIAAgGQAAgFgEAAIh7AAQgEAAAAAGIAAADQAAAGgGAAQgGAAAAgGIAAgIQAAgLALAAIA7AAIAAgFQAAgHAHAAQAGAAAAAHIAAAFIBAAAQAJAAAAALIgBAKQgBAEgGAAQgFAAAAgEg");
	this.shape_10.setTransform(28.575,-5.125);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003300").s().p("AgyBPQgNAAAAgLIAAgjQAAgLANAAIBmAAQAMAAAAALIAAAjQAAALgMAAgAgyAlIAAAaQAAAFADAAIBfAAQADAAAAgFIAAgaQAAgBAAAAQAAgBAAAAQgBgBAAAAQgBAAgBAAIhfAAQAAAAgBAAQgBAAAAABQgBAAAAABQAAAAAAABgAhSAFQAAgEADgBQAXgGAQgIQAQgIAOgNQAFgFAFAAQAGAAAJAIQAMAJAPAJQAPAHAWAHQAEABAAADQAAAHgHAAIgFgBQgZgJgLgFQgPgJgPgMQgDgDgCAAQAAAAAAAAQAAAAgBABQAAAAgBAAQAAAAgBABQgPAOgUAKIACAAIBFAAQAGAAAAAEQAAAHgGAAIhFAAQgGAAAAgHQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABgBQgOAGgSAGIgEABQgGgBAAgGgAgngjQgCgKgDgHIAAgBIgMAAIgHAIQgDAEgGAEIgEABQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQgBgBAAAAQAAgBABAAQAAgBAAgBQAAAAABAAQAAgBAAAAIAIgHIAHgKQAEgFACgHQABgDAEAAIAFABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAADIgCAGIAsAAQAFAAAAAFIAAACIAGgHQADgFACgGQACgDAEAAIAFABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAADIgDAGIA2AAQAFAAAAAFQAAAGgFAAIgfAAIAGAOIABADQAAAFgHAAQgFAAgBgFQgCgKgDgGIAAgBIgUAAIgGAFQgEAEgFADIgEABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAIAFgDIgaAAIADAOIABAEQAAAFgGAAQgFAAAAgFg");
	this.shape_11.setTransform(9.8,-5.275);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003300").s().p("AglBEQgFgCAAgEQAAgHAGAAIAEABQATAHAFAAQAGAAAAgJIAAhJIhGAAQgGAAAAgHQAAgGAGAAICRAAQAGAAAAAGQAAAHgGAAIg/AAIAABLQAAAUgUAAQgKAAgRgIgAhMA/IACgEQAQgbAJggQABgDAFAAQAHAAAAAEIgBAFQgJAggRAbQgCAEgEAAQgHAAAAgGgABCA/QgOgkgPgVIgCgFQAAgEAHAAQADAAADADQASAZAMAfIABAFQAAAGgIAAQgEAAgBgEgAg8g+QgGAAAAgGQAAgHAGAAIB5AAQAHAAAAAHQAAAGgHAAg");
	this.shape_12.setTransform(-8.875,-4.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003300").s().p("ABGBKQgIgFgHgMQgEgIAAgBIABgEIgSAAQABACAAACQAAAEgCACQgKAMgQAJIgCABQgGAAAAgHQAAgDACgBQAPgJAJgMIgFAAQgKAAAAgKIAAhKQAAgKAKAAIANAAIAEgOIgcAAQgGAAABgGQgBgFAGgBIBBAAQAGABAAAFQAAAGgGAAIgYAAIgFAOIASAAQAKAAAAAKIAABKQAAAKgKAAIgDAAIACADQAEALANAIQAAABABAAQAAABAAAAQABABAAAAQAAABAAABIgBAEQgBACgDAAQgDAAgDgDgAAWAdQAAAEADAAIAhAAQAEAAAAgEIAAgOIgoAAgAAWAEIAoAAIAAgQIgoAAgAAWgiIAAALIAoAAIAAgLQAAgFgEAAIghAAQgDAAAAAFgAgxBHQAAgPgCgEIAAgEQAAgEAFAAQAEgBABAFQADAKABAMQAAAGgHAAQgFAAAAgFgAhQBHIACgFQAFgJACgJQABgEAFAAQAFgBAAAFIgBAEQgDALgEAKQgBADgEAAQgGAAgBgFgAgXBCQgDgLgEgHIAAgDQgBgEAFAAQABAAAAAAQAAAAABABQAAAAABAAQAAABABAAQAFAIAFALIAAADQAAAFgHABQgDgBgBgEgAgEA5QgEgIgDgEIgBgEQgBgEAGAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAEAHAEAHIAAADQAAAFgFgBQgCAAgBgDgAgsAlIgBgEIgCABIgbAEQgFABAAgGQAAgEAFAAIABAAIAJgPIgBgBIgIgJIgGgEQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDAEAAIADAAQAFgIAFgJQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQAGgBgBAFQAAADgBADIgKAOIAAABIAHAGIAKgTQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABAAAAAAIgBADIAAAAIACAAIADAAQAGgHAEgIQAAgBABgBQAAAAABgBQAAAAABAAQAAAAABAAQAEAAAAAEQAAADgBADIgJANIAAABIAIAHIAKgTQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAEABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIAAACQgJASgMAPIARgDIgCgFIAAgDQAAgDAFAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAABIAHASIAAAEQAAAEgGAAQgCAAgBgEIAAgEIgCABIgeAFIAAABQAAAFgFgBQgDABgCgEgAg9AbIANgDIgBgCIgBgCQAAgFAFAAQABAAAAABQAAAAABAAQAAAAABABQAAAAAAABIAFAIIABAAIABgBIABgBIAIgLIgJgKIgHgFIgBgDQgIARgKAPgAhBgfQgJABAAgKIAAgcQAAgIAJAAIA3AAQAJAAAAAIIAAAcQAAAKgJgBgAhAgtQAAAEAEAAIAsAAQAFAAAAgEIAAgFIg1AAgAhAg9IAAACIA1AAIAAgCQAAgFgFAAIgsAAQgEAAAAAFg");
	this.shape_13.setTransform(-27.75,-4.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgGBFIAAgZIgTALQgOAGgZAIIgEABQgGAAAAgGQAAgEADgCQAbgHAPgHQALgEAJgGIg5AAQgFAAAAgFQAAgFAFAAIA8AAIAAgIQAAgGAGAAQAGAAAAAGIAAAIIA9AAQAFAAAAAFQAAAFgFAAIg9AAQANAIAPAFQAVAIARAEQADABAAAEIgBAEQAAABgBAAQAAABgBAAQAAAAgBAAQgBAAAAAAIgHAAIgdgLQgPgHgNgIIAAAZQAAAFgGAAQgGAAAAgFgAA7APIg2gOIgPAGQgNAEgQADIgZABQgHAAAAgFQAAgFAFAAQAcgCASgDIAIgCIgUgEQgJgCAAgFQAAgEAEgCIAIgGIgkAAQgFAAAAgFQAAgFAFAAIAvAAQAEgFADgGQACgEADAAQAGABAAAEIgBAEIgEAGIBFAAQAFAAAAAFQAAAFgFAAIgbAAIgDAEQgGAJgJAGIgCACIAvAIQAEACAAADQAAAGgFAAIgEAAgAgagQIgBABQAAAAAAABQAAAAAAAAQAAAAABAAQAAABABAAIAbAFIAGgDQAJgFAHgJIgmAAIgMAJgAA7gsIAAgFQAAgEgEAAIhvAAQgEAAAAAEIAAAEQAAAFgGAAQgFAAAAgFIAAgIQAAgKAKAAIA2AAIAAgEQAAgGAGAAQAFAAAAAGIAAAEIA7AAQAIAAAAAKIgBAJQgBAEgFAAQgFAAAAgEg");
	this.shape_14.setTransform(26.075,-5.075);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AguBIQgLAAAAgKIAAgfQAAgLALAAIBeAAQAKAAAAALIAAAfQAAAKgKAAgAguAiIAAAYQAAAEAEAAIBWAAQADAAAAgEIAAgYQAAAAAAgBQAAgBgBAAQAAgBgBAAQAAAAgBAAIhWAAQgBAAgBAAQAAAAgBABQAAAAAAABQgBABAAAAgAhLAFQAAgEADgBQAVgGAOgGQAPgIANgMQAFgEAEAAQAFAAAJAHQAKAJAOAIQANAGAWAGQADABAAADQgBAGgGAAIgEgBQgXgHgKgFQgOgIgOgLQAAgBgBAAQAAgBgBAAQAAAAgBAAQgBgBAAAAIgCABQgPAOgQAIIgBABIABgBIABAAIA/AAQAEAAAAAEQAAAGgEAAIg/AAQgGAAAAgGIABgDQgMAGgQAFIgEABQgFgBgBgFgAgkgfIgEgQIAAgBIgLAAIgGAIQgEADgFADQAAABAAAAQgBAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIABgEQAFgDADgDIAHgIIAEgLQABgEAEAAIAEABQAAAAABABQAAAAAAABQAAAAAAABQABAAAAABIgBADIgCAFIAoAAQAFAAAAAFIAAABIAFgGQADgEACgFQABgEAFAAIAEABQAAAAAAABQAAAAABABQAAAAAAABQAAAAAAABIAAADIgDAFIAyAAQAEAAAAAFQAAAFgEAAIgcAAIAFANIAAADQABAEgGAAQgFAAgBgEQgCgJgDgGIAAgBIgSAAIgFAEIgIAHIgEABQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAgBAAQAAgBAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBIAFgCIgXAAIAEANIAAAEQAAAEgGAAQgEAAgBgEg");
	this.shape_15.setTransform(9,-5.25);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgiA+QgEgCAAgEQAAgGAFAAIAEABQARAGAFAAQAFAAAAgIIAAhCIg/AAQgGAAAAgGQAAgGAGAAICDAAQAGAAAAAGQAAAGgGAAIg5AAIAABEQAAASgSAAQgJAAgQgHgAhFA6IACgEQAPgZAIgdQABgDAEAAQAGAAAAAEIgBAEQgIAegPAYQgCAEgDAAQgHAAAAgFgAA8A5QgNghgNgTIgCgEQAAgEAHAAQACAAADADQAQAXALAcIABAFQAAAFgHAAQgEAAgBgEgAg2g4QgGAAAAgGQAAgGAGAAIBuAAQAFAAAAAGQAAAGgFAAg");
	this.shape_16.setTransform(-7.975,-4.775);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("ABABDQgHgEgHgLIgEgJIABgEIgRAAQACACAAAEQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgIAMgOAIIgDABQgFABAAgHQAAgDACgCQANgHAJgMIgFAAQgJAAAAgIIAAhDQAAgJAJABIAMAAIADgOIgZAAQgFAAAAgFQAAgGAFAAIA8AAQAFAAAAAGQAAAFgFAAIgXAAIgEAOIAQAAQAKgBAAAJIAABDQAAAIgKAAIgCAAIABADQAEALALAHQABABAAAAQABABAAAAQAAABABAAQAAABAAABIgBADQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgDAAgCgDgAAUAaQAAABAAABQABAAAAABQAAABABAAQAAAAABAAIAeAAQADAAAAgEIAAgNIgkAAgAAUADIAkAAIAAgOIgkAAgAAUgfIAAAKIAkAAIAAgKQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIgeAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAABAAABgAgtBBQAAgOgBgEIAAgEQAAgDAEgBQAEAAABAFQADAJAAALQAAAFgGAAQgFAAAAgEgAhIBBIABgFQAFgIACgJQABgDADgBQAFAAAAAFIAAADQgDAKgEAJQgBADgDAAQgGAAAAgEgAgVA8QgDgKgDgGIgBgDQAAgDAEAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAFAIAEAJIAAADQAAAGgGAAQgDAAgBgFgAgEA0QgDgHgDgFIgBgCQAAgEAFgBQAAAAAAABQABAAAAAAQAAAAABABQAAAAAAABQAEAGADAGIABADQAAAEgEAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBgAgoAhIgBgDIgCABIgYAEQgEAAAAgFQAAgEAEAAIABAAIAIgNIgBgBIgHgIIgFgEIgCgDQAAgEAEAAIACABQAGgIAEgIQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAEAAAAAEIgBAFIgJAOIAAAAIAGAGIAJgSQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABABAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAIAAADIAAAAIACAAIACAAQAGgHADgHQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAEAAAAADIgCAGQgEAHgEAFIABABIAHAGIAJgRQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABgBIADABIACADIgBACQgJAQgKAOIAQgCIgCgFIAAgDQAAgDAEAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAABIAGARIAAADQAAADgFAAQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAgBgBgBIAAgDIgCAAIgbAEIAAACQAAAEgFAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBgBgBgAg3AYIALgCIgBgCIAAgCQAAgEAEAAIADACIAEAHIACAAIABAAIAAgBIAIgKIgIgJIgHgFIgBgDQgHAQgJANgAg7gbQgJAAAAgJIAAgZQAAgIAJAAIAyAAQAJAAAAAIIAAAZQAAAJgJAAgAg6gpQAAAFAEAAIAoAAQAEAAAAgFIAAgDIgwAAgAg6g4IAAADIAwAAIAAgDQAAgEgEAAIgoAAQgEAAAAAEg");
	this.shape_17.setTransform(-25.125,-4.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9,p:{scaleX:1,scaleY:1,x:0.025,y:-4.325}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:0.025,y:-4.325}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:3.775,y:-2.925}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:-2.925,y:-4.475}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:-0.25,y:-10.125}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:-34.675,y:9.355}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{scaleX:1,scaleY:1,y:18.55}}]}).to({state:[{t:this.shape_9,p:{scaleX:1.1,scaleY:1.1,x:0.0115,y:-4.7479}},{t:this.shape_8,p:{scaleX:1.1,scaleY:1.1,x:0.0115,y:-4.7479}},{t:this.shape_7,p:{scaleX:1.1,scaleY:1.1,x:4.1364,y:-3.208}},{t:this.shape_6,p:{scaleX:1.1,scaleY:1.1,x:-3.2334,y:-4.9129}},{t:this.shape_5,p:{scaleX:1.1,scaleY:1.1,x:-0.291,y:-11.1278}},{t:this.shape_4,p:{scaleX:1.1,scaleY:1.1,x:-38.1577,y:10.2997}},{t:this.instance,p:{scaleX:1.1,scaleY:1.1,y:20.4}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_9,p:{scaleX:1,scaleY:1,x:0.025,y:-4.325}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:0.025,y:-4.325}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:3.775,y:-2.925}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:-2.925,y:-4.475}},{t:this.shape_5,p:{scaleX:1,scaleY:1,x:-0.25,y:-10.125}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:-34.675,y:9.355}},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.instance,p:{scaleX:1,scaleY:1,y:18.55}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.7,-25.5,93.2,57.6);


(lib.顯示題目b1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層 1
	this.instance = new lib.Path_3();
	this.instance.setTransform(0,18.55,1,1,0,0,0,72.8,39.9);
	this.instance.alpha = 0.6016;
	this.instance.filters = [new cjs.BlurFilter(7, 7, 1)];
	this.instance.cache(34,34,78,12);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#003366").s().p("AgvBEQgMAAABgMIAAhvQgBgMAMAAIBeAAQAMAAAAAMIAABvQAAAMgMAAgAgvA1QAAAEAFAAIBVAAQAFAAAAgEIAAgeIhfAAgAgvAMIBfAAIAAgdIhfAAgAgvg0IAAAYIBfAAIAAgYQAAgEgFAAIhVAAQgFAAAAAEg");
	this.shape.setTransform(26.1,-5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#003366").s().p("AgSBBQgQgEgLgGQgFgDgFgFQgDALgFAJQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQgGAAAAgFIABgEQAGgKACgNQACgLAAgMQAAgEAFAAQAFAAAAAFQAAALgBAJQAHAIAHADIABAAIAAgrIgdAAQgFAAAAgEQAAgGAFAAIBAAAQAEAAAAAGQAAAEgEAAIgZAAIAAARIAVAAQAFAAAAAGQAAAFgFAAIgVAAIAAAUIAQADQAPAEBCAAQAFAAAAAGQAAAFgGAAQhEAAgSgEgAA3AtIgKgJQgDgDAAgCIABgDIgQAAIABADQAAADgDACQgHAIgNAIIgCABQgEAAAAgHQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAAAQALgGAIgJIgGAAQgIAAAAgJIAAg6QAAgIAIAAIAOAAIADgMIgaAAQgEAAAAgEQAAgFAEAAIA+AAQAFAAAAAFQAAAEgFAAIgZAAIgEAMIASAAQAKAAAAAIIAAA6QAAAJgKAAIgEAAQAJAJAJAFQAEABAAADQAAAHgHAAQgBAAgKgIgAAPAOQAAAEADAAIAgAAQAEAAAAgEIAAgIIgnAAgAAPgDIAnAAIAAgMIgnAAgAAPgiIAAAJIAnAAIAAgJQAAgDgEAAIggAAQgBAAAAAAQgBAAAAABQgBAAAAABQAAAAAAABgAg2gPQgJAAAAgKIAAgjQAAgIAJAAIAnAAQAJAAAAAIIAAAjQAAAKgJAAgAg1geQAAAFAEAAIAdAAQAEAAAAgFIAAgHIglAAgAg1g3IAAAIIAlAAIAAgIQAAgEgEAAIgdAAQgEAAAAAEg");
	this.shape_1.setTransform(8.925,-4.825);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#003366").s().p("AgiA+QgEgCAAgEQAAgGAFAAIAEABQARAGAFAAQAFAAAAgIIAAhCIg/AAQgGAAAAgGQAAgGAGAAICDAAQAGAAAAAGQAAAGgGAAIg5AAIAABEQAAASgSAAQgJAAgQgHgAhFA6IACgEQAPgZAIgdQABgDAEAAQAGAAAAAEIgBAEQgIAegPAYQgCAEgDAAQgHAAAAgFgAA8A5QgNghgNgTIgCgEQAAgEAHAAQACAAADADQAQAXALAcIABAFQAAAFgHAAQgEAAgBgEgAg2g4QgGAAAAgGQAAgGAGAAIBuAAQAFAAAAAGQAAAGgFAAg");
	this.shape_2.setTransform(-7.975,-4.775);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#003366").s().p("ABABDQgHgEgHgLIgEgJIABgEIgRAAQACACAAAEQAAAAAAABQgBAAAAABQAAAAgBABQAAAAgBAAQgIAMgOAIIgDABQgFABAAgHQAAgDACgCQANgHAJgMIgFAAQgJAAAAgIIAAhDQAAgJAJABIAMAAIADgOIgZAAQgFAAAAgFQAAgGAFAAIA8AAQAFAAAAAGQAAAFgFAAIgXAAIgEAOIAQAAQAKgBAAAJIAABDQAAAIgKAAIgCAAIABADQAEALALAHQABABAAAAQABABAAAAQAAABABAAQAAABAAABIgBADQAAABgBAAQAAAAgBABQAAAAgBAAQgBAAAAAAQgDAAgCgDgAAUAaQAAABAAABQABAAAAABQAAABABAAQAAAAABAAIAeAAQADAAAAgEIAAgNIgkAAgAAUADIAkAAIAAgOIgkAAgAAUgfIAAAKIAkAAIAAgKQAAgBAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIgeAAQgBAAAAAAQgBAAAAAAQAAABgBAAQAAABAAABgAgtBBQAAgOgBgEIAAgEQAAgDAEgBQAEAAABAFQADAJAAALQAAAFgGAAQgFAAAAgEgAhIBBIABgFQAFgIACgJQABgDADgBQAFAAAAAFIAAADQgDAKgEAJQgBADgDAAQgGAAAAgEgAgVA8QgDgKgDgGIgBgDQAAgDAEAAQABAAAAAAQABAAAAAAQABAAAAAAQAAABABAAQAFAIAEAJIAAADQAAAGgGAAQgDAAgBgFgAgEA0QgDgHgDgFIgBgCQAAgEAFgBQAAAAAAABQABAAAAAAQAAAAABABQAAAAAAABQAEAGADAGIABADQAAAEgEAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBgAgoAhIgBgDIgCABIgYAEQgEAAAAgFQAAgEAEAAIABAAIAIgNIgBgBIgHgIIgFgEIgCgDQAAgEAEAAIACABQAGgIAEgIQAAAAAAgBQABAAAAAAQABgBAAAAQABAAAAAAQAEAAAAAEIgBAFIgJAOIAAAAIAGAGIAJgSQAAAAABAAQAAgBAAAAQABAAAAAAQABgBAAAAQABABAAAAQABAAAAAAQABAAAAAAQAAABABAAQAAAAAAABQABAAAAAAQAAAAAAABQAAAAAAAAIAAADIAAAAIACAAIACAAQAGgHADgHQABgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAEAAAAADIgCAGQgEAHgEAFIABABIAHAGIAJgRQAAAAABgBQAAAAABAAQAAAAABAAQAAAAABgBIADABIACADIgBACQgJAQgKAOIAQgCIgCgFIAAgDQAAgDAEAAQAAAAABAAQAAAAABAAQAAABAAAAQAAAAAAABIAGARIAAADQAAADgFAAQAAAAgBAAQAAAAAAAAQAAgBgBAAQAAgBgBgBIAAgDIgCAAIgbAEIAAACQAAAEgFAAQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAgBgBgBgAg3AYIALgCIgBgCIAAgCQAAgEAEAAIADACIAEAHIACAAIABAAIAAgBIAIgKIgIgJIgHgFIgBgDQgHAQgJANgAg7gbQgJAAAAgJIAAgZQAAgIAJAAIAyAAQAJAAAAAIIAAAZQAAAJgJAAgAg6gpQAAAFAEAAIAoAAQAEAAAAgFIAAgDIgwAAgAg6g4IAAADIAwAAIAAgDQAAgEgEAAIgoAAQgEAAAAAEg");
	this.shape_3.setTransform(-25.125,-4.75);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#8FBEBC").s().p("AADALQgcgEgFgNIAPgGIALAMQANAMAWAAIgFABQgLAAgMgCg");
	this.shape_4.setTransform(-34.675,9.355);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("ADNAqQhhgWhrAAQhZAAiTApQhJAUg4AVIAAiCQABggAhgTQAkgWA9AAIG3AAQBuAAAfAWQARAMAAAnIAACCQhAgmhfgWg");
	this.shape_5.setTransform(-0.25,-10.125);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#8FBEBC").s().p("AlUCOQgQgOAAgSIAAjJQAAghAOgOQAUgUA4AAIH1AAQBMAAAuAcQgngNgxAAIn2AAQg7AAgYAOQgWANAAAdIAADBQAAAMAOATQAPAVAOABQgbgCgSgPg");
	this.shape_6.setTransform(-2.925,-4.475);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AjnCTQhLAAgtgbQAnAMAvAAIHwAAQA8AAAVgMQAUgLAAgcIAAi0QAAgKgOgPQgMgOgPgIQAgAKANAIQAQAKAAAPIAAC5QAAAhgNANQgTATg4AAg");
	this.shape_7.setTransform(3.75,-2.925);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#9ED1CE").ss(0.5,0,0,2.6).p("AGWBnQAAAngPAPQgXAXhBAAIpdAAQhBAAgXgXQgPgPAAgnIAAjNQAAgnAPgPQAXgXBBAAIJdAAQBBAAAXAXQAPAPAAAng");
	this.shape_8.setTransform(0,-4.325);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#FFFFFF","#9ED1CE"],[0,1],0.6,-16.9,-0.6,16.8).s().p("AkuC0QhBAAgWgXQgQgPAAgnIAAjNQAAgnAQgPQAWgXBBAAIJdAAQBBAAAWAXQAQAPAAAnIAADNQAAAngQAPQgWAXhBAAg");
	this.shape_9.setTransform(0,-4.325);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#003366").s().p("AgzBLQgNAAAAgNIAAh7QAAgNANAAIBnAAQANAAAAANIAAB7QAAANgNAAgAgzA6QAAAFAEgBIBfAAQAEABAAgFIAAghIhnAAgAgzANIBnAAIAAggIhnAAgAgzg5IAAAaIBnAAIAAgaQAAgFgEAAIhfAAQgEAAAAAFg");
	this.shape_10.setTransform(28.625,-5.05);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#003366").s().p("AgUBHQgSgEgLgGQgGgEgGgFQgDAMgFAJQgCADgDAAQgGAAAAgGIABgEQAGgLADgPQABgLAAgNQAAgFAGAAQAGAAAAAFQAAAMgCALQAIAIAIADIABABIAAgwIggAAQgFAAAAgFQAAgGAFAAIBGAAQAFAAAAAGQAAAFgFAAIgbAAIAAATIAXAAQAFAAAAAGQAAAGgFAAIgXAAIAAAWIASAEQAQADBJAAQAFABAAAGQAAAGgHAAQhKAAgUgFgAA9AyIgLgLQgDgDAAgCIAAgDIgSAAIABADQAAADgCACQgIAKgOAIIgDABQgFAAAAgHQAAgDACgBQAMgHAJgJIgHAAQgJAAAAgKIAAhAQAAgJAJAAIAPAAIAEgNIgdAAQgEAAAAgFQAAgFAEAAIBEAAQAGAAAAAFQAAAFgGAAIgbAAIgEANIAUAAQAKAAAAAJIAABAQAAAKgKAAIgFAAQAKAKAKAFQAEABAAAEQAAAHgHAAQgCAAgKgIgAAQAQQAAAEAEAAIAjAAQAEAAAAgEIAAgKIgrAAgAAQgDIArAAIAAgOIgrAAgAAQglIAAAKIArAAIAAgKQAAgEgEAAIgjAAQgEAAAAAEgAg7gRQgLAAAAgKIAAgnQAAgJALAAIAqAAQAKAAAAAJIAAAnQAAAKgKAAgAg7ghQAAAGAFAAIAgAAQAEAAAAgGIAAgIIgpAAgAg7g8IAAAIIApAAIAAgIQAAgFgEAAIggAAQgFAAAAAFg");
	this.shape_11.setTransform(9.725,-4.825);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#003366").s().p("AglBEQgFgCAAgEQAAgHAGAAIAEABQATAHAFAAQAGAAAAgJIAAhJIhGAAQgGAAAAgHQAAgGAGAAICRAAQAGAAAAAGQAAAHgGAAIg/AAIAABLQAAAUgUAAQgKAAgRgIgAhMA/IACgEQAQgbAJggQABgDAFAAQAHAAAAAEIgBAFQgJAggRAbQgCAEgEAAQgHAAAAgGgABCA/QgOgkgPgVIgCgFQAAgEAHAAQADAAADADQASAZAMAfIABAFQAAAGgIAAQgEAAgBgEgAg8g+QgGAAAAgGQAAgHAGAAIB5AAQAHAAAAAHQAAAGgHAAg");
	this.shape_12.setTransform(-8.875,-4.775);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#003366").s().p("ABGBKQgIgFgHgMQgEgIAAgBIABgEIgSAAQABACAAACQAAAEgCACQgKAMgQAJIgCABQgGAAAAgHQAAgDACgBQAPgJAJgMIgFAAQgKAAAAgKIAAhKQAAgKAKAAIANAAIAEgOIgcAAQgGAAABgGQgBgFAGgBIBBAAQAGABAAAFQAAAGgGAAIgYAAIgFAOIASAAQAKAAAAAKIAABKQAAAKgKAAIgDAAIACADQAEALANAIQAAABABAAQAAABAAAAQABABAAAAQAAABAAABIgBAEQgBACgDAAQgDAAgDgDgAAWAdQAAAEADAAIAhAAQAEAAAAgEIAAgOIgoAAgAAWAEIAoAAIAAgQIgoAAgAAWgiIAAALIAoAAIAAgLQAAgFgEAAIghAAQgDAAAAAFgAgxBHQAAgPgCgEIAAgEQAAgEAFAAQAEgBABAFQADAKABAMQAAAGgHAAQgFAAAAgFgAhQBHIACgFQAFgJACgJQABgEAFAAQAFgBAAAFIgBAEQgDALgEAKQgBADgEAAQgGAAgBgFgAgXBCQgDgLgEgHIAAgDQgBgEAFAAQABAAAAAAQAAAAABABQAAAAABAAQAAABABAAQAFAIAFALIAAADQAAAFgHABQgDgBgBgEgAgEA5QgEgIgDgEIgBgEQgBgEAGAAQAAAAABAAQAAAAABABQAAAAAAAAQABABAAAAQAEAHAEAHIAAADQAAAFgFgBQgCAAgBgDgAgsAlIgBgEIgCABIgbAEQgFABAAgGQAAgEAFAAIABAAIAJgPIgBgBIgIgJIgGgEQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBQAAgDAEAAIADAAQAFgIAFgJQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQAGgBgBAFQAAADgBADIgKAOIAAABIAHAGIAKgTQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAAAQABABAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQABAAAAAAIgBADIAAAAIACAAIADAAQAGgHAEgIQAAgBABgBQAAAAABgBQAAAAABAAQAAAAABAAQAEAAAAAEQAAADgBADIgJANIAAABIAIAHIAKgTQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAEABQAAAAABAAQAAABAAAAQAAABAAAAQAAABAAAAIAAACQgJASgMAPIARgDIgCgFIAAgDQAAgDAFAAQAAAAAAAAQABAAAAAAQABABAAAAQAAAAAAABIAHASIAAAEQAAAEgGAAQgCAAgBgEIAAgEIgCABIgeAFIAAABQAAAFgFgBQgDABgCgEgAg9AbIANgDIgBgCIgBgCQAAgFAFAAQABAAAAABQAAAAABAAQAAAAABABQAAAAAAABIAFAIIABAAIABgBIABgBIAIgLIgJgKIgHgFIgBgDQgIARgKAPgAhBgfQgJABAAgKIAAgcQAAgIAJAAIA3AAQAJAAAAAIIAAAcQAAAKgJgBgAhAgtQAAAEAEAAIAsAAQAFAAAAgEIAAgFIg1AAgAhAg9IAAACIA1AAIAAgCQAAgFgFAAIgsAAQgEAAAAAFg");
	this.shape_13.setTransform(-27.75,-4.75);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("ADNAqQhhgWhrAAQhaAAiSApQhJAUg3AVIAAiCQgBggAigTQAkgWA9AAIG3AAQBuAAAfAWQASAMAAAnIAACCQhAgmhggWg");
	this.shape_14.setTransform(-0.786,-11.1278,1.1,1.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9,p:{scaleX:1,scaleY:1,x:0,y:-4.325}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:0,y:-4.325}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:3.75,y:-2.925}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:-2.925,y:-4.475}},{t:this.shape_5},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:-34.675,y:9.355}},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance,p:{regY:39.9,scaleX:1,scaleY:1,x:0,y:18.55}}]}).to({state:[{t:this.shape_9,p:{scaleX:1.1,scaleY:1.1,x:-0.511,y:-4.7479}},{t:this.shape_8,p:{scaleX:1.1,scaleY:1.1,x:-0.511,y:-4.7479}},{t:this.shape_7,p:{scaleX:1.1,scaleY:1.1,x:3.6139,y:-3.208}},{t:this.shape_6,p:{scaleX:1.1,scaleY:1.1,x:-3.7284,y:-4.9129}},{t:this.shape_14,p:{scaleX:1.1,scaleY:1.1,x:-0.786,y:-11.1278}},{t:this.shape_4,p:{scaleX:1.1,scaleY:1.1,x:-38.6527,y:10.2997}},{t:this.instance,p:{regY:39.8,scaleX:1.1,scaleY:1.1,x:-0.5,y:20.3}},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]},1).to({state:[{t:this.shape_9,p:{scaleX:1,scaleY:1,x:0,y:-4.325}},{t:this.shape_8,p:{scaleX:1,scaleY:1,x:0,y:-4.325}},{t:this.shape_7,p:{scaleX:1,scaleY:1,x:3.75,y:-2.925}},{t:this.shape_6,p:{scaleX:1,scaleY:1,x:-2.925,y:-4.475}},{t:this.shape_14,p:{scaleX:1,scaleY:1,x:-0.25,y:-10.125}},{t:this.shape_4,p:{scaleX:1,scaleY:1,x:-34.675,y:9.355}},{t:this.instance,p:{regY:39.9,scaleX:1,scaleY:1,x:0,y:18.55}}]},2).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.1,-25.5,93.1,57.6);


(lib.ClipGroup_17 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_2 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	mask.graphics.p("AiDCFIAAkJIEGAAIAAEJg");
	mask.setTransform(13.15,13.275);

	// 圖層_3
	this.instance = new lib.ClipGroup_0();
	this.instance.setTransform(13.2,13.2,1,1,0,0,0,13.2,13.2);

	var maskedShapeInstanceList = [this.instance];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ClipGroup_17, new cjs.Rectangle(0,0,26.3,26.6), null);


(lib.題目按鈕影片 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// 圖層_1
	this.instance = new lib.隱藏題目b1();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.隱藏題目b1(), 3);

	this.instance_1 = new lib.顯示題目b1();
	this.instance_1.setTransform(0,0,0.9,0.9);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.顯示題目b1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-46.1,-25.5,93.1,57.6);


(lib.j1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		createjs.Touch.enable(stage);
		var xx = this.x;
		var yy = this.y;
		var x_temp;
		var y_temp;
		var ff;
		var dd;
		//-------------------------
		var add = 1;
		var copy = "j1"; //複制影片名稱
		var pt_b1 = this.localToLocal(this.dot.x, this.dot.y, this.parent.b1.hitBox);
		var pt_b2 = this.localToLocal(this.dot.x, this.dot.y, this.parent.b2.hitBox);
		if (this.parent.b1.hitBox.hitTest(pt_b1.x, pt_b1.y)) {
			dd = "b1";
			add = 0;
		}
		if (this.parent.b2.hitBox.hitTest(pt_b2.x, pt_b2.y)) {
			dd = "b2";
			add = 0;
		}
		//----------------------------
		this.on("mousedown", onMouseDown.bind(this));
		this.on("pressmove", onMouseMove.bind(this));
		this.on("pressup", onMouseUp.bind(this));
		//------------------------------------
		function onMouseDown(evt) {
			x_temp = this.x;
			y_temp = this.y;
			var item = evt.currentTarget;
			item.offset = {
				x: 0,
				y: 0
			};
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
			item.scaleX = 0.8;
			item.scaleY = 0.8;
			this.parent.setChildIndex(item, this.parent.numChildren - 1);
			//---------------------------------
			var pt_b1 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b1.hitBox);
			var pt_b2 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b2.hitBox);
			if (this.parent.b1.hitBox.hitTest(pt_b1.x, pt_b1.y)) {
				ff = "b1";
			} else if (this.parent.b2.hitBox.hitTest(pt_b2.x, pt_b2.y)) {
				ff = "b2";
			}
			//--------------------------------------------
		}
		// mouse up event
		function onMouseUp(evt) {
			var item = evt.currentTarget;
			item.drag = false;
			//------------------------------------------------------------
			var pt_b1 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b1.hitBox);
			var pt_b2 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b2.hitBox);
			var pt_b0 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b0.hitBox);
			var pt_m1 = item.localToLocal(this.dot.x, this.dot.y, this.parent.m1.hitBox);
			if (this.parent.b1.hitBox.hitTest(pt_b1.x, pt_b1.y)) {
				//item.mouseEnabled = false;
				dd = "b1";
				if (add == 1) {
					var mm = new lib[copy]();
					mm.name = copy + "_" + String(this.parent.numChildren - 1);
					mm.x = xx;
					mm.y = yy;
					//alert(mm.name);
					this.parent.ArrAdd(mm.name);
					this.parent.addChild(mm);
					//this.scaleX = 0.8;
					//this.scaleY = 0.8;
					this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) + 1);
					this.parent.show_ans();
					add = 0;
				} else {
					if (ff != dd) {
						this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) - 1);
						this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) + 1);
						this.parent.show_ans();
					}
				}
				this.scaleX = 0.8;
				this.scaleY = 0.8;
			} else if (this.parent.b2.hitBox.hitTest(pt_b2.x, pt_b2.y)) {
				dd = "b2";
				if (add == 1) {
					var mm = new lib[copy]();
					mm.name = copy + "_" + String(this.parent.numChildren - 1);
					mm.x = xx;
					mm.y = yy;
					this.parent.ArrAdd(item.name);
					this.parent.addChild(mm);
					//this.scaleX = 0.8;
					//this.scaleY = 0.8;
					this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) + 1);
					this.parent.show_ans();
					add = 0;
				} else {
		
					if (ff != dd) {
						this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) + 1);
						this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) - 1);
						this.parent.show_ans();
					}
				}
				this.scaleX = 0.8;
				this.scaleY = 0.8;
			} else if (this.parent.m1.hitBox.hitTest(pt_m1.x, pt_m1.y) && add == 0) {
		
				this.x = x_temp;
				this.y = y_temp;
		
			} else if (this.parent.b0.hitBox.hitTest(pt_b0.x, pt_b0.y) && add == 0) {
				this.parent.ArrDel(item.name);
		
				if (dd == "b1") {
					this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) - 1);
					this.parent.show_ans();
				} else if (dd == "b2") {
					this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) - 1);
					this.parent.show_ans();
				}
				this.parent.show_ans();
				this.parent.removeChild(this);
		
			} else {
				item.x = xx;
				item.y = yy;
				this.parent.show_ans();
			}
		
		}
		// mouse move event
		function onMouseMove(evt) {
			var item = evt.currentTarget;
			if (item.drag) {
				var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_2
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.setTransform(0,0.8,0.2227,0.6051,0,0,0,0,0.1);
	this.dot.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// 圖層_1
	this.instance = new lib._8();
	this.instance.setTransform(-25,-44);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.j1, new cjs.Rectangle(-25,-44,49.7,87.5), null);


(lib.i1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		createjs.Touch.enable(stage);
		var xx = this.x;
		var yy = this.y;
		var x_temp;
		var y_temp;
		var ff;
		var dd;
		//-------------------------
		var add = 1;
		var copy = "i1"; //複制影片名稱
		var pt_b1 = this.localToLocal(this.dot.x, this.dot.y, this.parent.b1.hitBox);
		var pt_b2 = this.localToLocal(this.dot.x, this.dot.y, this.parent.b2.hitBox);
		if (this.parent.b1.hitBox.hitTest(pt_b1.x, pt_b1.y)) {
			dd = "b1";
			add = 0;
		}
		if (this.parent.b2.hitBox.hitTest(pt_b2.x, pt_b2.y)) {
			dd = "b2";
			add = 0;
		}
		//----------------------------
		this.on("mousedown", onMouseDown.bind(this));
		this.on("pressmove", onMouseMove.bind(this));
		this.on("pressup", onMouseUp.bind(this));
		//------------------------------------
		function onMouseDown(evt) {
			x_temp = this.x;
			y_temp = this.y;
			var item = evt.currentTarget;
			item.offset = {
				x: 0,
				y: 0
			};
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
			item.scaleX = 0.8;
			item.scaleY = 0.8;
			this.parent.setChildIndex(item, this.parent.numChildren - 1);
			//---------------------------------
			var pt_b1 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b1.hitBox);
			var pt_b2 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b2.hitBox);
			if (this.parent.b1.hitBox.hitTest(pt_b1.x, pt_b1.y)) {
				ff = "b1";
			} else if (this.parent.b2.hitBox.hitTest(pt_b2.x, pt_b2.y)) {
				ff = "b2";
			}
			//--------------------------------------------
		}
		// mouse up event
		function onMouseUp(evt) {
			var item = evt.currentTarget;
			item.drag = false;
			//------------------------------------------------------------
			var pt_b1 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b1.hitBox);
			var pt_b2 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b2.hitBox);
			var pt_b0 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b0.hitBox);
			var pt_m1 = item.localToLocal(this.dot.x, this.dot.y, this.parent.m1.hitBox);
			if (this.parent.b1.hitBox.hitTest(pt_b1.x, pt_b1.y)) {
				//item.mouseEnabled = false;
				dd = "b1";
				if (add == 1) {
					var mm = new lib[copy]();
					mm.name = copy + "_" + String(this.parent.numChildren - 1);
					mm.x = xx;
					mm.y = yy;
					//alert(mm.name);
					this.parent.ArrAdd(mm.name);
					this.parent.addChild(mm);
					//this.scaleX = 0.8;
					//this.scaleY = 0.8;
					this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) + 1);
					this.parent.show_ans();
					add = 0;
				} else {
					if (ff != dd) {
						this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) - 1);
						this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) + 1);
						this.parent.show_ans();
					}
				}
				this.scaleX = 0.8;
				this.scaleY = 0.8;
			} else if (this.parent.b2.hitBox.hitTest(pt_b2.x, pt_b2.y)) {
				dd = "b2";
				if (add == 1) {
					var mm = new lib[copy]();
					mm.name = copy + "_" + String(this.parent.numChildren - 1);
					mm.x = xx;
					mm.y = yy;
					this.parent.ArrAdd(item.name);
					this.parent.addChild(mm);
					//this.scaleX = 0.8;
					//this.scaleY = 0.8;
					this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) + 1);
					this.parent.show_ans();
					add = 0;
				} else {
		
					if (ff != dd) {
						this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) + 1);
						this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) - 1);
						this.parent.show_ans();
					}
				}
				this.scaleX = 0.8;
				this.scaleY = 0.8;
			} else if (this.parent.m1.hitBox.hitTest(pt_m1.x, pt_m1.y) && add == 0) {
		
				this.x = x_temp;
				this.y = y_temp;
		
			} else if (this.parent.b0.hitBox.hitTest(pt_b0.x, pt_b0.y) && add == 0) {
				this.parent.ArrDel(item.name);
		
				if (dd == "b1") {
					this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) - 1);
					this.parent.show_ans();
				} else if (dd == "b2") {
					this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) - 1);
					this.parent.show_ans();
				}
				this.parent.show_ans();
				this.parent.removeChild(this);
		
			} else {
				item.x = xx;
				item.y = yy;
				this.parent.show_ans();
			}
		
		}
		// mouse move event
		function onMouseMove(evt) {
			var item = evt.currentTarget;
			if (item.drag) {
				var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_2
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.setTransform(0,0.8,0.2432,0.7028,0,0,0,0,0.2);
	this.dot.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// 圖層_1
	this.instance = new lib._7();
	this.instance.setTransform(-31,-43);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.i1, new cjs.Rectangle(-31,-43,60.9,84.7), null);


(lib.h1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		createjs.Touch.enable(stage);
		var xx = this.x;
		var yy = this.y;
		var x_temp;
		var y_temp;
		var ff;
		var dd;
		//-------------------------
		var add = 1;
		var copy = "h1"; //複制影片名稱
		var pt_b1 = this.localToLocal(this.dot.x, this.dot.y, this.parent.b1.hitBox);
		var pt_b2 = this.localToLocal(this.dot.x, this.dot.y, this.parent.b2.hitBox);
		if (this.parent.b1.hitBox.hitTest(pt_b1.x, pt_b1.y)) {
			dd = "b1";
			add = 0;
		}
		if (this.parent.b2.hitBox.hitTest(pt_b2.x, pt_b2.y)) {
			dd = "b2";
			add = 0;
		}
		//----------------------------
		this.on("mousedown", onMouseDown.bind(this));
		this.on("pressmove", onMouseMove.bind(this));
		this.on("pressup", onMouseUp.bind(this));
		//------------------------------------
		function onMouseDown(evt) {
			x_temp = this.x;
			y_temp = this.y;
			var item = evt.currentTarget;
			item.offset = {
				x: 0,
				y: 0
			};
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
			item.scaleX = 0.8;
			item.scaleY = 0.8;
			this.parent.setChildIndex(item, this.parent.numChildren - 1);
			//---------------------------------
			var pt_b1 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b1.hitBox);
			var pt_b2 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b2.hitBox);
			if (this.parent.b1.hitBox.hitTest(pt_b1.x, pt_b1.y)) {
				ff = "b1";
			} else if (this.parent.b2.hitBox.hitTest(pt_b2.x, pt_b2.y)) {
				ff = "b2";
			}
			//--------------------------------------------
		}
		// mouse up event
		function onMouseUp(evt) {
			var item = evt.currentTarget;
			item.drag = false;
			//------------------------------------------------------------
			var pt_b1 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b1.hitBox);
			var pt_b2 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b2.hitBox);
			var pt_b0 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b0.hitBox);
			var pt_m1 = item.localToLocal(this.dot.x, this.dot.y, this.parent.m1.hitBox);
			if (this.parent.b1.hitBox.hitTest(pt_b1.x, pt_b1.y)) {
				//item.mouseEnabled = false;
				dd = "b1";
				if (add == 1) {
					var mm = new lib[copy]();
					mm.name = copy + "_" + String(this.parent.numChildren - 1);
					mm.x = xx;
					mm.y = yy;
					//alert(mm.name);
					this.parent.ArrAdd(mm.name);
					this.parent.addChild(mm);
					//this.scaleX = 0.8;
					//this.scaleY = 0.8;
					this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) + 1);
					this.parent.show_ans();
					add = 0;
				} else {
					if (ff != dd) {
						this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) - 1);
						this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) + 1);
						this.parent.show_ans();
					}
				}
				this.scaleX = 0.8;
				this.scaleY = 0.8;
			} else if (this.parent.b2.hitBox.hitTest(pt_b2.x, pt_b2.y)) {
				dd = "b2";
				if (add == 1) {
					var mm = new lib[copy]();
					mm.name = copy + "_" + String(this.parent.numChildren - 1);
					mm.x = xx;
					mm.y = yy;
					this.parent.ArrAdd(item.name);
					this.parent.addChild(mm);
					//this.scaleX = 0.8;
					//this.scaleY = 0.8;
					this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) + 1);
					this.parent.show_ans();
					add = 0;
				} else {
		
					if (ff != dd) {
						this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) + 1);
						this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) - 1);
						this.parent.show_ans();
					}
				}
				this.scaleX = 0.8;
				this.scaleY = 0.8;
			} else if (this.parent.m1.hitBox.hitTest(pt_m1.x, pt_m1.y) && add == 0) {
		
				this.x = x_temp;
				this.y = y_temp;
		
			} else if (this.parent.b0.hitBox.hitTest(pt_b0.x, pt_b0.y) && add == 0) {
				this.parent.ArrDel(item.name);
		
				if (dd == "b1") {
					this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) - 1);
					this.parent.show_ans();
				} else if (dd == "b2") {
					this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) - 1);
					this.parent.show_ans();
				}
				this.parent.show_ans();
				this.parent.removeChild(this);
		
			} else {
				item.x = xx;
				item.y = yy;
				this.parent.show_ans();
			}
		
		}
		// mouse move event
		function onMouseMove(evt) {
			var item = evt.currentTarget;
			if (item.drag) {
				var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_2
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.setTransform(0,0.85,0.2176,1.1959,0,0,0,0,0.1);
	this.dot.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// 圖層_1
	this.instance = new lib._6();
	this.instance.setTransform(-28,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.h1, new cjs.Rectangle(-28,-40,55.3,79.8), null);


(lib.g1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		createjs.Touch.enable(stage);
		var xx = this.x;
		var yy = this.y;
		var x_temp;
		var y_temp;
		var ff;
		var dd;
		//-------------------------
		var add = 1;
		var copy = "g1"; //複制影片名稱
		var pt_b1 = this.localToLocal(this.dot.x, this.dot.y, this.parent.b1.hitBox);
		var pt_b2 = this.localToLocal(this.dot.x, this.dot.y, this.parent.b2.hitBox);
		if (this.parent.b1.hitBox.hitTest(pt_b1.x, pt_b1.y)) {
			dd = "b1";
			add = 0;
		}
		if (this.parent.b2.hitBox.hitTest(pt_b2.x, pt_b2.y)) {
			dd = "b2";
			add = 0;
		}
		//----------------------------
		this.on("mousedown", onMouseDown.bind(this));
		this.on("pressmove", onMouseMove.bind(this));
		this.on("pressup", onMouseUp.bind(this));
		//------------------------------------
		function onMouseDown(evt) {
			x_temp = this.x;
			y_temp = this.y;
			var item = evt.currentTarget;
			item.offset = {
				x: 0,
				y: 0
			};
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
			item.scaleX = 0.8;
			item.scaleY = 0.8;
			this.parent.setChildIndex(item, this.parent.numChildren - 1);
			//---------------------------------
			var pt_b1 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b1.hitBox);
			var pt_b2 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b2.hitBox);
			if (this.parent.b1.hitBox.hitTest(pt_b1.x, pt_b1.y)) {
				ff = "b1";
			} else if (this.parent.b2.hitBox.hitTest(pt_b2.x, pt_b2.y)) {
				ff = "b2";
			}
			//--------------------------------------------
		}
		// mouse up event
		function onMouseUp(evt) {
			var item = evt.currentTarget;
			item.drag = false;
			//------------------------------------------------------------
			var pt_b1 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b1.hitBox);
			var pt_b2 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b2.hitBox);
			var pt_b0 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b0.hitBox);
			var pt_m1 = item.localToLocal(this.dot.x, this.dot.y, this.parent.m1.hitBox);
			if (this.parent.b1.hitBox.hitTest(pt_b1.x, pt_b1.y)) {
				//item.mouseEnabled = false;
				dd = "b1";
				if (add == 1) {
					var mm = new lib[copy]();
					mm.name = copy + "_" + String(this.parent.numChildren - 1);
					mm.x = xx;
					mm.y = yy;
					//alert(mm.name);
					this.parent.ArrAdd(mm.name);
					this.parent.addChild(mm);
					//this.scaleX = 0.8;
					//this.scaleY = 0.8;
					this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) + 1);
					this.parent.show_ans();
					add = 0;
				} else {
					if (ff != dd) {
						this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) - 1);
						this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) + 1);
						this.parent.show_ans();
					}
				}
				this.scaleX = 0.8;
				this.scaleY = 0.8;
			} else if (this.parent.b2.hitBox.hitTest(pt_b2.x, pt_b2.y)) {
				dd = "b2";
				if (add == 1) {
					var mm = new lib[copy]();
					mm.name = copy + "_" + String(this.parent.numChildren - 1);
					mm.x = xx;
					mm.y = yy;
					this.parent.ArrAdd(item.name);
					this.parent.addChild(mm);
					//this.scaleX = 0.8;
					//this.scaleY = 0.8;
					this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) + 1);
					this.parent.show_ans();
					add = 0;
				} else {
		
					if (ff != dd) {
						this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) + 1);
						this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) - 1);
						this.parent.show_ans();
					}
				}
				this.scaleX = 0.8;
				this.scaleY = 0.8;
			} else if (this.parent.m1.hitBox.hitTest(pt_m1.x, pt_m1.y) && add == 0) {
		
				this.x = x_temp;
				this.y = y_temp;
		
			} else if (this.parent.b0.hitBox.hitTest(pt_b0.x, pt_b0.y) && add == 0) {
				this.parent.ArrDel(item.name);
		
				if (dd == "b1") {
					this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) - 1);
					this.parent.show_ans();
				} else if (dd == "b2") {
					this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) - 1);
					this.parent.show_ans();
				}
				this.parent.show_ans();
				this.parent.removeChild(this);
		
			} else {
				item.x = xx;
				item.y = yy;
				this.parent.show_ans();
			}
		
		}
		// mouse move event
		function onMouseMove(evt) {
			var item = evt.currentTarget;
			if (item.drag) {
				var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_2
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.setTransform(0,0.7,0.2688,1.036,0,0,0,0,0.1);
	this.dot.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// 圖層_1
	this.instance = new lib._5();
	this.instance.setTransform(-30,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.g1, new cjs.Rectangle(-30,-39,58.5,78), null);


(lib.f1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		createjs.Touch.enable(stage);
		var xx = this.x;
		var yy = this.y;
		var x_temp;
		var y_temp;
		var ff;
		var dd;
		//-------------------------
		var add = 1;
		var copy = "f1"; //複制影片名稱
		var pt_b1 = this.localToLocal(this.dot.x, this.dot.y, this.parent.b1.hitBox);
		var pt_b2 = this.localToLocal(this.dot.x, this.dot.y, this.parent.b2.hitBox);
		if (this.parent.b1.hitBox.hitTest(pt_b1.x, pt_b1.y)) {
			dd = "b1";
			add = 0;
		}
		if (this.parent.b2.hitBox.hitTest(pt_b2.x, pt_b2.y)) {
			dd = "b2";
			add = 0;
		}
		//----------------------------
		this.on("mousedown", onMouseDown.bind(this));
		this.on("pressmove", onMouseMove.bind(this));
		this.on("pressup", onMouseUp.bind(this));
		//------------------------------------
		function onMouseDown(evt) {
			x_temp = this.x;
			y_temp = this.y;
			var item = evt.currentTarget;
			item.offset = {
				x: 0,
				y: 0
			};
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
			item.scaleX = 0.8;
			item.scaleY = 0.8;
			this.parent.setChildIndex(item, this.parent.numChildren - 1);
			//---------------------------------
			var pt_b1 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b1.hitBox);
			var pt_b2 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b2.hitBox);
			if (this.parent.b1.hitBox.hitTest(pt_b1.x, pt_b1.y)) {
				ff = "b1";
			} else if (this.parent.b2.hitBox.hitTest(pt_b2.x, pt_b2.y)) {
				ff = "b2";
			}
			//--------------------------------------------
		}
		// mouse up event
		function onMouseUp(evt) {
			var item = evt.currentTarget;
			item.drag = false;
			//------------------------------------------------------------
			var pt_b1 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b1.hitBox);
			var pt_b2 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b2.hitBox);
			var pt_b0 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b0.hitBox);
			var pt_m1 = item.localToLocal(this.dot.x, this.dot.y, this.parent.m1.hitBox);
			if (this.parent.b1.hitBox.hitTest(pt_b1.x, pt_b1.y)) {
				//item.mouseEnabled = false;
				dd = "b1";
				if (add == 1) {
					var mm = new lib[copy]();
					mm.name = copy + "_" + String(this.parent.numChildren - 1);
					mm.x = xx;
					mm.y = yy;
					//alert(mm.name);
					this.parent.ArrAdd(mm.name);
					this.parent.addChild(mm);
					//this.scaleX = 0.8;
					//this.scaleY = 0.8;
					this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) + 1);
					this.parent.show_ans();
					add = 0;
				} else {
					if (ff != dd) {
						this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) - 1);
						this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) + 1);
						this.parent.show_ans();
					}
				}
				this.scaleX = 0.8;
				this.scaleY = 0.8;
			} else if (this.parent.b2.hitBox.hitTest(pt_b2.x, pt_b2.y)) {
				dd = "b2";
				if (add == 1) {
					var mm = new lib[copy]();
					mm.name = copy + "_" + String(this.parent.numChildren - 1);
					mm.x = xx;
					mm.y = yy;
					this.parent.ArrAdd(item.name);
					this.parent.addChild(mm);
					//this.scaleX = 0.8;
					//this.scaleY = 0.8;
					this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) + 1);
					this.parent.show_ans();
					add = 0;
				} else {
		
					if (ff != dd) {
						this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) + 1);
						this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) - 1);
						this.parent.show_ans();
					}
				}
				this.scaleX = 0.8;
				this.scaleY = 0.8;
			} else if (this.parent.m1.hitBox.hitTest(pt_m1.x, pt_m1.y) && add == 0) {
		
				this.x = x_temp;
				this.y = y_temp;
		
			} else if (this.parent.b0.hitBox.hitTest(pt_b0.x, pt_b0.y) && add == 0) {
				this.parent.ArrDel(item.name);
		
				if (dd == "b1") {
					this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) - 1);
					this.parent.show_ans();
				} else if (dd == "b2") {
					this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) - 1);
					this.parent.show_ans();
				}
				this.parent.show_ans();
				this.parent.removeChild(this);
		
			} else {
				item.x = xx;
				item.y = yy;
				this.parent.show_ans();
			}
		
		}
		// mouse move event
		function onMouseMove(evt) {
			var item = evt.currentTarget;
			if (item.drag) {
				var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_2
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.setTransform(0,0.9,0.2014,0.7167,0,0,0,0,0.1);
	this.dot.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// 圖層_1
	this.instance = new lib._4png複製();
	this.instance.setTransform(-23,-38);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.f1, new cjs.Rectangle(-23,-38,44.5,77), null);


(lib.e1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		createjs.Touch.enable(stage);
		var xx = this.x;
		var yy = this.y;
		var x_temp;
		var y_temp;
		var ff;
		var dd;
		//-------------------------
		var add = 1;
		var copy = "e1"; //複制影片名稱
		var pt_b1 = this.localToLocal(this.dot.x, this.dot.y, this.parent.b1.hitBox);
		var pt_b2 = this.localToLocal(this.dot.x, this.dot.y, this.parent.b2.hitBox);
		if (this.parent.b1.hitBox.hitTest(pt_b1.x, pt_b1.y)) {
			dd = "b1";
			add = 0;
		}
		if (this.parent.b2.hitBox.hitTest(pt_b2.x, pt_b2.y)) {
			dd = "b2";
			add = 0;
		}
		//----------------------------
		this.on("mousedown", onMouseDown.bind(this));
		this.on("pressmove", onMouseMove.bind(this));
		this.on("pressup", onMouseUp.bind(this));
		//------------------------------------
		function onMouseDown(evt) {
			x_temp = this.x;
			y_temp = this.y;
			var item = evt.currentTarget;
			item.offset = {
				x: 0,
				y: 0
			};
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
			item.scaleX = 0.8;
			item.scaleY = 0.8;
			this.parent.setChildIndex(item, this.parent.numChildren - 1);
			//---------------------------------
			var pt_b1 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b1.hitBox);
			var pt_b2 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b2.hitBox);
			if (this.parent.b1.hitBox.hitTest(pt_b1.x, pt_b1.y)) {
				ff = "b1";
			} else if (this.parent.b2.hitBox.hitTest(pt_b2.x, pt_b2.y)) {
				ff = "b2";
			}
			//--------------------------------------------
		}
		// mouse up event
		function onMouseUp(evt) {
			var item = evt.currentTarget;
			item.drag = false;
			//------------------------------------------------------------
			var pt_b1 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b1.hitBox);
			var pt_b2 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b2.hitBox);
			var pt_b0 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b0.hitBox);
			var pt_m1 = item.localToLocal(this.dot.x, this.dot.y, this.parent.m1.hitBox);
			if (this.parent.b1.hitBox.hitTest(pt_b1.x, pt_b1.y)) {
				//item.mouseEnabled = false;
				dd = "b1";
				if (add == 1) {
					var mm = new lib[copy]();
					mm.name = copy + "_" + String(this.parent.numChildren - 1);
					mm.x = xx;
					mm.y = yy;
					//alert(mm.name);
					this.parent.ArrAdd(mm.name);
					this.parent.addChild(mm);
					//this.scaleX = 0.8;
					//this.scaleY = 0.8;
					this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) + 1);
					this.parent.show_ans();
					add = 0;
				} else {
					if (ff != dd) {
						this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) - 1);
						this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) + 1);
						this.parent.show_ans();
					}
				}
				this.scaleX = 0.8;
				this.scaleY = 0.8;
			} else if (this.parent.b2.hitBox.hitTest(pt_b2.x, pt_b2.y)) {
				dd = "b2";
				if (add == 1) {
					var mm = new lib[copy]();
					mm.name = copy + "_" + String(this.parent.numChildren - 1);
					mm.x = xx;
					mm.y = yy;
					this.parent.ArrAdd(item.name);
					this.parent.addChild(mm);
					//this.scaleX = 0.8;
					//this.scaleY = 0.8;
					this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) + 1);
					this.parent.show_ans();
					add = 0;
				} else {
		
					if (ff != dd) {
						this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) + 1);
						this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) - 1);
						this.parent.show_ans();
					}
				}
				this.scaleX = 0.8;
				this.scaleY = 0.8;
			} else if (this.parent.m1.hitBox.hitTest(pt_m1.x, pt_m1.y) && add == 0) {
		
				this.x = x_temp;
				this.y = y_temp;
		
			} else if (this.parent.b0.hitBox.hitTest(pt_b0.x, pt_b0.y) && add == 0) {
				this.parent.ArrDel(item.name);
		
				if (dd == "b1") {
					this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) - 1);
					this.parent.show_ans();
				} else if (dd == "b2") {
					this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) - 1);
					this.parent.show_ans();
				}
				this.parent.show_ans();
				this.parent.removeChild(this);
		
			} else {
				item.x = xx;
				item.y = yy;
				this.parent.show_ans();
			}
		
		}
		// mouse move event
		function onMouseMove(evt) {
			var item = evt.currentTarget;
			if (item.drag) {
				var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_2
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.setTransform(1.85,1.05,0.2355,0.7768,0,0,0,0,0.2);
	this.dot.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// 圖層_1
	this.instance = new lib._3();
	this.instance.setTransform(-23,-41);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.e1, new cjs.Rectangle(-23,-41,46,80.5), null);


(lib.d1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		createjs.Touch.enable(stage);
		var xx = this.x;
		var yy = this.y;
		var x_temp;
		var y_temp;
		var ff;
		var dd;
		//-------------------------
		var add = 1;
		var copy = "d1"; //複制影片名稱
		var pt_b1 = this.localToLocal(this.dot.x, this.dot.y, this.parent.b1.hitBox);
		var pt_b2 = this.localToLocal(this.dot.x, this.dot.y, this.parent.b2.hitBox);
		if (this.parent.b1.hitBox.hitTest(pt_b1.x, pt_b1.y)) {
			dd = "b1";
			add = 0;
		}
		if (this.parent.b2.hitBox.hitTest(pt_b2.x, pt_b2.y)) {
			dd = "b2";
			add = 0;
		}
		//----------------------------
		this.on("mousedown", onMouseDown.bind(this));
		this.on("pressmove", onMouseMove.bind(this));
		this.on("pressup", onMouseUp.bind(this));
		//------------------------------------
		function onMouseDown(evt) {
			x_temp = this.x;
			y_temp = this.y;
			var item = evt.currentTarget;
			item.offset = {
				x: 0,
				y: 0
			};
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
			item.scaleX = 0.8;
			item.scaleY = 0.8;
			this.parent.setChildIndex(item, this.parent.numChildren - 1);
			//---------------------------------
			var pt_b1 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b1.hitBox);
			var pt_b2 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b2.hitBox);
			if (this.parent.b1.hitBox.hitTest(pt_b1.x, pt_b1.y)) {
				ff = "b1";
			} else if (this.parent.b2.hitBox.hitTest(pt_b2.x, pt_b2.y)) {
				ff = "b2";
			}
			//--------------------------------------------
		}
		// mouse up event
		function onMouseUp(evt) {
			var item = evt.currentTarget;
			item.drag = false;
			//------------------------------------------------------------
			var pt_b1 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b1.hitBox);
			var pt_b2 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b2.hitBox);
			var pt_b0 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b0.hitBox);
			var pt_m1 = item.localToLocal(this.dot.x, this.dot.y, this.parent.m1.hitBox);
			if (this.parent.b1.hitBox.hitTest(pt_b1.x, pt_b1.y)) {
				//item.mouseEnabled = false;
				dd = "b1";
				if (add == 1) {
					var mm = new lib[copy]();
					mm.name = copy + "_" + String(this.parent.numChildren - 1);
					mm.x = xx;
					mm.y = yy;
					//alert(mm.name);
					this.parent.ArrAdd(mm.name);
					this.parent.addChild(mm);
					//this.scaleX = 0.8;
					//this.scaleY = 0.8;
					this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) + 1);
					this.parent.show_ans();
					add = 0;
				} else {
					if (ff != dd) {
						this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) - 1);
						this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) + 1);
						this.parent.show_ans();
					}
				}
				this.scaleX = 0.8;
				this.scaleY = 0.8;
			} else if (this.parent.b2.hitBox.hitTest(pt_b2.x, pt_b2.y)) {
				dd = "b2";
				if (add == 1) {
					var mm = new lib[copy]();
					mm.name = copy + "_" + String(this.parent.numChildren - 1);
					mm.x = xx;
					mm.y = yy;
					this.parent.ArrAdd(item.name);
					this.parent.addChild(mm);
					//this.scaleX = 0.8;
					//this.scaleY = 0.8;
					this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) + 1);
					this.parent.show_ans();
					add = 0;
				} else {
		
					if (ff != dd) {
						this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) + 1);
						this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) - 1);
						this.parent.show_ans();
					}
				}
				this.scaleX = 0.8;
				this.scaleY = 0.8;
			} else if (this.parent.m1.hitBox.hitTest(pt_m1.x, pt_m1.y) && add == 0) {
		
				this.x = x_temp;
				this.y = y_temp;
		
			} else if (this.parent.b0.hitBox.hitTest(pt_b0.x, pt_b0.y) && add == 0) {
				this.parent.ArrDel(item.name);
		
				if (dd == "b1") {
					this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) - 1);
					this.parent.show_ans();
				} else if (dd == "b2") {
					this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) - 1);
					this.parent.show_ans();
				}
				this.parent.show_ans();
				this.parent.removeChild(this);
		
			} else {
				item.x = xx;
				item.y = yy;
				this.parent.show_ans();
			}
		
		}
		// mouse move event
		function onMouseMove(evt) {
			var item = evt.currentTarget;
			if (item.drag) {
				var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_2
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.setTransform(0,0.8,0.2432,0.7112,0,0,0,0,0.3);
	this.dot.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// 圖層_1
	this.instance = new lib._2();
	this.instance.setTransform(-26,-39);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.d1, new cjs.Rectangle(-26,-39,51,77.5), null);


(lib.元件33 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// 圖層_1
	this.hitBox = new lib.hitArea();
	this.hitBox.name = "hitBox";
	this.hitBox.setTransform(-69.65,-81.85,8.405,6.7124,0,0,0,-34.5,-34.6);
	this.hitBox.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.hitBox).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.元件33, new cjs.Rectangle(-69.2,-80.8,579.5,462.8), null);


(lib.c1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		createjs.Touch.enable(stage);
		var xx = this.x;
		var yy = this.y;
		var copy = "c1"; //複制影片名稱
		var add = 1;
		this.key.visible = false;
		//----------------------------
		//this.ss.mouseEnabled = false;
		var scale = 2.5;
		//-----------------------
		this.on("mousedown", onMouseDown1.bind(this));
		this.on("pressmove", onMouseMove1.bind(this));
		this.on("pressup", onMouseUp1.bind(this));
		//------------------------------------
		function onMouseDown1(evt) {
		
			var item = evt.currentTarget;
		
		
			item.offset = {
				x: 0,
				y: 0
			};
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
			this.scaleX = 1;
			this.scaleY = 1;
			this.parent.setChildIndex(item, this.parent.numChildren - 1);
			this.parent.setChildIndex(this.parent.b0, this.parent.numChildren - 1);
		
		}
		// mouse up event
		function onMouseUp1(evt) {
		
			var item = evt.currentTarget;
		
			item.drag = false;
			//------------------------------------------------------------
			var pt_m1 = item.localToLocal(this.dot.x, this.dot.y, this.parent.m1.hitBox);
			var pt_b0 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b0.hitBox);
		
			if (this.parent.m1.hitBox.hitTest(pt_m1.x, pt_m1.y)) {
				//item.mouseEnabled = false;
				if (add == 1) {
					var mm = new lib[copy]();
					mm.name = copy + "_" + String(this.parent.numChildren - 1);
					mm.x = xx;
					mm.y = yy;
					this.scaleX = scale;
					this.scaleY = scale;
					this.parent.ArrAdd(mm.name);
					this.parent.addChild(mm);
					add = 0;
					this.ss.on("mousedown", onMouseDown.bind(this));
					this.ss.on("pressmove", onMouseMove.bind(this));
					this.ss.on("pressup", onMouseUp.bind(this));
					//---------------------------------
					var g1 = t_Down.bind(this); //綁定,給removeEventListener用
					var g2 = t_Up.bind(this); //綁定,給removeEventListener用			
					this.t_1_btn.name = "t_1_btn";
					this.t_2_btn.name = "t_2_btn";
					this.t_3_btn.name = "t_3_btn";
					this.t_4_btn.name = "t_4_btn";
					this.t_5_btn.name = "t_5_btn";
					this.t_1_btn.addEventListener("click", g1);
					this.t_2_btn.addEventListener("click", g1);
					this.t_3_btn.addEventListener("click", g1);
					this.t_4_btn.addEventListener("click", g1);
					this.t_5_btn.addEventListener("click", g1);
					this.t_1_btn.addEventListener("pressup", g2);
					this.t_2_btn.addEventListener("pressup", g2);
					this.t_3_btn.addEventListener("pressup", g2);
					this.t_4_btn.addEventListener("pressup", g2);
					this.t_5_btn.addEventListener("pressup", g2);
					//-------------------------------
					this.removeAllEventListeners("mousedown");
					this.removeAllEventListeners("pressmove");
					this.removeAllEventListeners("pressup");
				}
		    
			} else if (this.parent.b0.hitBox.hitTest(pt_b0.x, pt_b0.y) && add == 0) {
				this.scaleX = 1;
				this.scaleY = 1;
				this.parent.ArrDel(item.name);
				this.parent.removeChild(this);
			} else {
				this.scaleX = 1;
				this.scaleY = 1;
				item.x = xx;
				item.y = yy;
			}
		
		}
		// mouse move event
		function onMouseMove1(evt) {
		
			var item = evt.currentTarget;
			if (item.drag) {
				item.scaleX = 1;
				item.scaleY = 1;
				var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
		
		}
		
		
		//------------------------------------
		function onMouseDown(evt) {
			var item = evt.currentTarget;
			item = item.parent;
		
			item.offset = {
				x: 0,
				y: 0
			};
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
			this.parent.setChildIndex(item, this.parent.numChildren - 1);
			this.parent.setChildIndex(this.parent.b0, this.parent.numChildren - 1);
		
		
		}
		// mouse up event
		function onMouseUp(evt) {
			var item = evt.currentTarget;
			item = item.parent;
			item.drag = false;
			//------------------------------------------------------------
			var pt_m1 = item.localToLocal(this.dot.x, this.dot.y, this.parent.m1.hitBox);
			var pt_b0 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b0.hitBox);
		
			if (this.parent.m1.hitBox.hitTest(pt_m1.x, pt_m1.y)) {
				//item.mouseEnabled = false;
		
			} else if (this.parent.b0.hitBox.hitTest(pt_b0.x, pt_b0.y) && add == 0) {
		
				for (var i = 1; i <= 5; i++) {
					eval("this.t_" + i + "_btn").removeAllEventListeners("click");
					eval("this.t_" + i + "_btn").removeAllEventListeners("pressup");
				}
		
		
				this.ss.removeAllEventListeners("mousedown");
				this.ss.removeAllEventListeners("pressmove");
				this.ss.removeAllEventListeners("pressup");
		
				this.scaleX = 1;
				this.scaleY = 1;
				this.parent.ArrDel(item.name);
				this.parent.removeChild(this);
			} else {
				item.x = xx;
				item.y = yy;
			}
		
		}
		// mouse move event
		function onMouseMove(evt) {
			var item = evt.currentTarget;
			item = item.parent;
			if (item.drag) {
				var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
		
		}
		//-----------------
		var txt;
		for (var i = 1; i <= 5; i++) {
			eval("this.ua_" + i).visible = false;
		}
		function t_Down(evt) {
		
			var item = evt.currentTarget;
			var txt_temp = item.name.split("_");
			txt = txt_temp[0] + "_" + txt_temp[1];
			this.key.visible = true;
			//------------------------------
			this.ua_1.visible = false;
			this.ua_2.visible = false;
			this.ua_3.visible = false;
			this.ua_4.visible = false;
			this.ua_5.visible = false;
			this["ua_" + txt_temp[1]].visible = true;
			//-------------------------
			this[txt].text = "";
		
		}
		function t_Up(evt) {
			var item = evt.currentTarget;
		
		}
		//---------------
		//數字按鍵
		this.key.btn_0.name = "key.btn_0";
		this.key.btn_1.name = "key.btn_1";
		this.key.btn_2.name = "key.btn_2";
		this.key.btn_3.name = "key.btn_3";
		this.key.btn_4.name = "key.btn_4";
		this.key.btn_5.name = "key.btn_5";
		this.key.btn_6.name = "key.btn_6";
		this.key.btn_7.name = "key.btn_7";
		this.key.btn_8.name = "key.btn_8";
		this.key.btn_9.name = "key.btn_9";
		var g1 = _btn.bind(this); //綁定,給removeEventListener用		
		this.key.btn_0.addEventListener("click", g1);
		this.key.btn_1.addEventListener("click", g1);
		this.key.btn_2.addEventListener("click", g1);
		this.key.btn_3.addEventListener("click", g1);
		this.key.btn_4.addEventListener("click", g1);
		this.key.btn_5.addEventListener("click", g1);
		this.key.btn_6.addEventListener("click", g1);
		this.key.btn_7.addEventListener("click", g1);
		this.key.btn_8.addEventListener("click", g1);
		this.key.btn_9.addEventListener("click", g1);
		function _btn(evt) {
			var item = evt.currentTarget;
			var txt_temp = item.name.split("btn_");
			if (this[txt].text.length < 1) {
				this[txt].text = this[txt].text + txt_temp[1];
			}
		}
		//-------------------
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_2
	this.ss = new lib.輸入文字反應區();
	this.ss.name = "ss";
	this.ss.setTransform(22.35,4.5,0.72,0.72);
	new cjs.ButtonHelper(this.ss, 0, 1, 2, false, new lib.輸入文字反應區(), 3);

	this.timeline.addTween(cjs.Tween.get(this.ss).wait(1));

	// 圖層_9
	this.t_5 = new cjs.Text("", "22px 'AAA'", "#0000FF");
	this.t_5.name = "t_5";
	this.t_5.textAlign = "center";
	this.t_5.lineHeight = 26;
	this.t_5.lineWidth = 31;
	this.t_5.parent = this;
	this.t_5.setTransform(87.7,-1.15,0.5044,0.504);

	this.t_4 = new cjs.Text("", "22px 'AAA'", "#0000FF");
	this.t_4.name = "t_4";
	this.t_4.textAlign = "center";
	this.t_4.lineHeight = 26;
	this.t_4.lineWidth = 31;
	this.t_4.parent = this;
	this.t_4.setTransform(55.7,-1.15,0.5044,0.504);

	this.t_3 = new cjs.Text("", "22px 'AAA'", "#0000FF");
	this.t_3.name = "t_3";
	this.t_3.textAlign = "center";
	this.t_3.lineHeight = 26;
	this.t_3.lineWidth = 31;
	this.t_3.parent = this;
	this.t_3.setTransform(23.65,-1.15,0.5044,0.504);

	this.t_2 = new cjs.Text("", "22px 'AAA'", "#0000FF");
	this.t_2.name = "t_2";
	this.t_2.textAlign = "center";
	this.t_2.lineHeight = 26;
	this.t_2.lineWidth = 31;
	this.t_2.parent = this;
	this.t_2.setTransform(-10.95,-0.95,0.5044,0.504);

	this.t_1 = new cjs.Text("", "22px 'AAA'", "#0000FF");
	this.t_1.name = "t_1";
	this.t_1.textAlign = "center";
	this.t_1.lineHeight = 26;
	this.t_1.lineWidth = 31;
	this.t_1.parent = this;
	this.t_1.setTransform(-29.4,-1.15,0.5044,0.504);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t_1},{t:this.t_2},{t:this.t_3},{t:this.t_4},{t:this.t_5}]}).wait(1));

	// 圖層_8
	this.key = new lib.數字鍵盤();
	this.key.name = "key";
	this.key.setTransform(27.85,23.35,0.72,0.72);

	this.timeline.addTween(cjs.Tween.get(this.key).wait(1));

	// 圖層_7
	this.ua_5 = new lib.元件3AAAA();
	this.ua_5.name = "ua_5";
	this.ua_5.setTransform(88.95,11.55,0.3239,0.72,0,0,0,2.5,0.1);

	this.ua_4 = new lib.元件3AAAA();
	this.ua_4.name = "ua_4";
	this.ua_4.setTransform(56.55,11.55,0.3239,0.72,0,0,0,2.6,0.1);

	this.ua_3 = new lib.元件3AAAA();
	this.ua_3.name = "ua_3";
	this.ua_3.setTransform(25.35,11.55,0.3239,0.72,0,0,0,2.5,0.1);

	this.ua_2 = new lib.元件3AAAA();
	this.ua_2.name = "ua_2";
	this.ua_2.setTransform(-11,11.55,0.3239,0.72,0,0,0,-1.6,0.1);

	this.ua_1 = new lib.元件3AAAA();
	this.ua_1.name = "ua_1";
	this.ua_1.setTransform(-30.05,11.55,0.3239,0.72,0,0,0,-2,0.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.ua_1},{t:this.ua_2},{t:this.ua_3},{t:this.ua_4},{t:this.ua_5}]}).wait(1));

	// 圖層_1
	this.t_5_btn = new lib.輸入文字();
	this.t_5_btn.name = "t_5_btn";
	this.t_5_btn.setTransform(87.9,4.6,0.72,0.72,0,0,0,0.1,0);
	new cjs.ButtonHelper(this.t_5_btn, 0, 1, 2, false, new lib.輸入文字(), 3);

	this.t_4_btn = new lib.輸入文字();
	this.t_4_btn.name = "t_4_btn";
	this.t_4_btn.setTransform(55.7,4.7,0.72,0.72);
	new cjs.ButtonHelper(this.t_4_btn, 0, 1, 2, false, new lib.輸入文字(), 3);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("Ag4AHIAAgNIBxAAIAAANg");
	this.shape.setTransform(40.05,4.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag5AXIAAgNIBzAAIAAANgAg5gJIAAgNIBzAAIAAANg");
	this.shape_1.setTransform(72.25,4.7,0.72,0.72,0,0,0,0.3,0);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("Ag4AHIAAgNIBxAAIAAANg");
	this.shape_2.setTransform(6.95,4.1);

	this.t_3_btn = new lib.輸入文字();
	this.t_3_btn.name = "t_3_btn";
	this.t_3_btn.setTransform(23.85,4.7,0.72,0.72);
	new cjs.ButtonHelper(this.t_3_btn, 0, 1, 2, false, new lib.輸入文字(), 3);

	this.t_2_btn = new lib.輸入文字();
	this.t_2_btn.name = "t_2_btn";
	this.t_2_btn.setTransform(-10.95,4.7,0.72,0.72);
	new cjs.ButtonHelper(this.t_2_btn, 0, 1, 2, false, new lib.輸入文字(), 3);

	this.t_1_btn = new lib.輸入文字();
	this.t_1_btn.name = "t_1_btn";
	this.t_1_btn.setTransform(-29.1,4.7,0.72,0.72);
	new cjs.ButtonHelper(this.t_1_btn, 0, 1, 2, false, new lib.輸入文字(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.t_1_btn},{t:this.t_2_btn},{t:this.t_3_btn},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.t_4_btn},{t:this.t_5_btn}]}).wait(1));

	// dot
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.setTransform(26.8,4.85,2.1325,0.6362,0,0,0,0,0.3);
	this.dot.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.c1, new cjs.Rectangle(-51,-4.2,157.2,41.5), null);


(lib.ans = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// 圖層_3
	this.txt1 = new cjs.Text("33", "32px 'AAA'", "#FF0000");
	this.txt1.name = "txt1";
	this.txt1.textAlign = "center";
	this.txt1.lineHeight = 37;
	this.txt1.lineWidth = 54;
	this.txt1.parent = this;
	this.txt1.setTransform(-145.35,-156.2);

	this.txt2 = new cjs.Text("0", "28px 'AAA'", "#FF0000");
	this.txt2.name = "txt2";
	this.txt2.textAlign = "center";
	this.txt2.lineHeight = 33;
	this.txt2.lineWidth = 54;
	this.txt2.parent = this;
	this.txt2.setTransform(-145.45,-5.9);

	this.txt3 = new cjs.Text("33", "32px 'AAA'", "#FF0000");
	this.txt3.name = "txt3";
	this.txt3.textAlign = "center";
	this.txt3.lineHeight = 37;
	this.txt3.lineWidth = 54;
	this.txt3.parent = this;
	this.txt3.setTransform(-157.9,-46.2);

	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgEBJIgEgEIAAiJQAAAAAAgBQABAAAAgBQAAAAABgBQAAAAABgBIAFgBQACgBAFADIACABIAAACIAACJQgBADgCABIgGABIgEgBg");
	this.shape.setTransform(-254.593,-30.3776,1.4247,1.4247);

	this.instance = new lib.ClipGroup_17();
	this.instance.setTransform(-254.65,-34.6,1.425,1.425,0,0,0,13.1,13.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#231815").s().p("AgPAQQgHgHAAgJQAAgJAHgGQAHgHAIAAQAKAAAGAGQAHAHAAAJQAAAKgHAGQgGAHgKAAQgIAAgHgHgAgKgKQgEAEAAAGQAAAHAEAEQAFAEAFAAQAHAAAEgEQAEgFABgGQgBgGgEgEQgEgEgHAAQgGAAgEAEg");
	this.shape_1.setTransform(293.7259,-29.9819,1.4247,1.4247);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#231815").s().p("AgwBcIgBgSIAAgjQghAEgSAEIgMACQgEAAgGgEQgHgDABgCQgBgCAGgBQARAAAUgCIAlgFIAAgQIgXACIgCAAIAAACIgCABQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAgBgBQgCgEAAgDIgCgQQgBgMgCgGQgBgGgEgEIgBgBQAAgBAAgBQAAAAAAAAQAAgBABAAQAAAAABAAIAHABIABABQATgBAPgDIAAgSIgZACQgJAAgCgCQgDgCgBgCQABgBAHAAIAggEQgBgNgDgJIgBgDQAAgBABgBQAAgBAAAAQAAgBABAAQAAAAABAAIALABQAGADAAACIgBAEIgBARIAcgFQAEAAAEACQADABAAADQAAACgFABQgEACgYADIgHAAIAAARIAQgDIAQgEQACABAJAFQAJAEgBADIgBADQgDADgDAJIgJAgQgCAHgFAAQgDAAgCgGIgRABIgGABIAAAQIBDgGQADAAAIAEQAGAEAAADQAAADgFAAIgcgBQgaAAgZACIAAAFQABAUgCANQgCANgCADQgCAFgCAAQAAAAgCgFgAhJAJIAYgCIAAgQIgCAAIgQACIgIgBgAgNAGQADgHACgNIAAgCIgEABIgZAEIAAARIACgBIAOgCQAEAAAEADgAhNgfIACARIACgBIAYgCIAAgRQgQADgMAAgAglgjIAAAQIAQgEIAJABIAFACIACgOQAAgFgEAAgABSA+QgJgFABgFQgBgIAFgEQAFgEAGAAIAIAAQABAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIAAgHIgcADIgEgBIgCgDIAhgEIgBgHQAAgHgGgFQAAAAAAAAQAAAAABgBQAAAAABAAQABAAABAAQAHABAAACIACARIAUgBQAFAAABADQgBABAAAAQAAABgBAAQAAAAgBAAQgBABgBAAIgHgBIgOAAIAAAMQABAHgCAAQgJgEgDAAQgFAAgEAEQgDACgBAHQABADAGADQAEACAKAAQAFAAASgFQAAAAAAAAQAAAAABAAQAAAAAAABQAAAAAAABQAAACgJADQgKADgFAAQgIAAgJgDgABggHIgBgFIABgMIAAgMIgTALIgJAEQgBAAgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAMgGASgOQALgJAAgCIABgDIAEABQAAAAABABQAAAAABABQAAAAAAABQAAAAAAAAQAAABAAAAQAAABAAAAQgBABAAAAQgBABgBAAIgLAJQACAJAAAKIABAMQgBABAAABQAAABgBAAQAAABAAAAQgBAAAAAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAgBgABKguQAagRAAgGQAAgBABAAQAAgBAAAAQAAAAABAAQAAAAABAAIACABQABAAAAABQABAAAAABQAAAAAAABQAAAAAAAAQAAADgPAKQgOAIgDAAIgBAAg");
	this.shape_2.setTransform(254.7596,-30.0175,1.4247,1.4247);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#231815").s().p("AgLBSIgHgQQgRgBgPACIhFAEIgFgBQgBAJgDAAQgCAAgDgEQgEgGAAgHIABgIQADgLABgUQACgYAAgnQAAgTgDgJIgBgFQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAAAQAGAAADABIABABQAvgCAjgEIARgEIAIgBQAFAAAKAHQAFAEAAACIgCAEQgDAHAAAUQAAAwACAVIAAAkQAAAHgCAHQgFAGgDAAQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBgAh7A/QAigCAngDIAagCQADAAAGACIACACIACgDQABgHAAgtQAAgigDgcQgBgLgDgEIgGgBQgWAAgTADIgNABIAJACQAEABAAACIgBAJIAAADIANgEIADgBIAGACQABABAAAAQABABAAAAQABAAAAABQAAAAAAABQAAAAAAAAQAAAAgBABQAAAAgBAAQgBAAAAABQgFABgNACIgFABIgBANIAggGIAHACQAFAEAAABQABADgGAAIhFAHIgEABQgFAAgDgCQgEgCgBgBIAEgCIAigEIAAgMIgLABQgFAAgDgCIgCgDIAFgBIAPgCIAAgJIgCgFIgBgCQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAQgVACgIABIgLABIgBAAQgBBhgDAfgABRA9IADgDQAJgLAEgMQgBgCgFAAQgfAAgGAFIgFABQAAAAAAAAQgBgBAAAAQAAgBAAgBQgBAAAAgCQABgBAFgFQAFgFAAgKQAAAAAAAAQAAgBgBAAQAAgBgBAAQgBgBgBAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAgBIACgBIAhgCQAAAAAAgBQABAAAAgBQABAAAAAAQABAAAAAAIAEACQADADAAADQAAAAAAAAQAAABgBAAQAAAAAAAAQgBABAAAAQgFAEgGANIANgCIAEADQAEACAAACIgCACQgCABgDAGQgDAJgNALQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAgBgAA9AMIACAFQAAAHgHAIQAOgDAKABQAJgRAAgCQAAgBAAAAQAAAAgBgBQAAAAgBAAQAAAAgBAAQgTAAgGADgAhYA6IgBgGIABgBIAAgDIAAgLIAAgGIgRAHIgHACIgCAAQAIgEAFgFQALgJAEgEQAGgGABgDIABgBIgEAAIgBADIgCACIgDgCQgBgCAAgDIgDgNQgBgCgDgCIgBgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAGABIAdgGQABAAABAAQAAAAABAAQAAgBABAAQAAAAABgBIACAAIAHADQAGAEAAABIgCACQgEAEgBADIgEAEIAAABQABAAABABQAAAAABABQAAAAAAABQABAAAAAAIgCABIgTABIABAEIgMAMIgDADIACAEIAAANQAAABABABQAAAAAAAAQAAABAAAAQAAAAAAAAIANgFIACAAIgBACIgQAPQAAAAgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAgAhGgMIgNADIgBACIAAACIABAHIAYgCIADgLQAAgBgBAAQAAgBAAAAQgBAAgBAAQgBAAgBAAgAgpA0QgGgEgGgIIgNgPIgEgDIAGABIAJADIAFgGIAGgKQAAAAAAgBQAAAAAAAAQAAAAAAAAQAAgBABAAIAGAEIAEAEQAAABAAAAQAAAAAAABQgBAAAAAAQgBAAAAABIgSAJIADACQALAGACAFQACAFAAAEIAAADIgCABQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBgBgAB0AFIgBgDIACgCIAUgPIABABIgGAJQgJALgDABIgEgCgABdgTQgaABgMACQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgCgBAAgFQADgLABgTIgCgIIADgBIACACQABAAAAAAQAAABABAAQAAABAAAAQAAAAAAABIgDAhQAAAAAAABQAAABABAAQAAABAAAAQABAAAAAAIAkgBIABgIIgBgPQAAgKgEgGQAAAAAAgBQAAAAABAAQAAAAAAAAQABgBAAAAIAEABQABABAAAAQABAAAAABQABAAAAABQAAAAAAABIAAAEIACAjQAAAFgCAAQgDgBgCgDg");
	this.shape_3.setTransform(210.6164,-29.1962,1.4247,1.4247);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#231815").s().p("AgeBPQgtgUgTgGQgJgDgGAAQgLAAgKADIgFACQgCAAgEgEQgFgDAAgEQAAgBAAAAQAAAAABAAQAAgBAAAAQABAAAAAAIAJABIAagCIABAAIAAgGQAAgLgMgMQAAAAgBAAQAAgBAAAAQgBgBAAAAQAAAAAAgBIAKgRQAAAAgBgBQAAAAAAAAQAAgBgBAAQAAAAgBAAIgFACIgLACIgFgBQgFgBABgCQAAAAAAAAQAAgBABAAQAAAAABAAQABgBABAAQAMgDAMgGIAEgCQAEAAAHAEQADACAAADQAAACgDACIgTATIAFADQALAHAAAKQAAAGgDAEIgBADQAGAAAJAEQAhAMATADQAZADAvACQAHAAAAACQAAACgNAEQgeALgJAAQgFAAgPgGgAA0A+QATgLAOgQIgTgMIABgBQACAAAQAIIADACIACgDQAIgKAAgFQABgDgFAAIgbAEIgEgBIgDgDQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQARgBARgDIAFAAIADABQABAAABABQAAAAAAABQABAAAAABQAAAAAAABIgCACIgJAOIgFAIQANAHAGAGIAEAHQAAABAAAAQAAABAAAAQgBABAAAAQgBAAgBAAQgBAAgFgEQgHgIgLgHQgIAJgLAHQgNAIgFAAgAgRA2QgGgJgGgEIgBgDIAAAAIAMABQADAAADgEQADgGAAgJIgBgOIgVAEQgEAAgEgCIgEgDIgEAUQgEAMgGAEQgEADgCAAQgCAAgCgEQgEgIgFgIIAAAAQAJAFAEAAQABAAAAAAQAAAAABAAQAAgBABAAQAAgBABgBQACgFAFgSIACgWQAAgEgHAAIgCACIgEADIgBAAIgCAAQgDALgEAFQgEALgIAHQgHAHgFAAIgCAAIACgCQAHgHAGgNQAJgOADgMQADgLAAgGIgGABIgKgBIgCgDQAAgBAAAAQAAAAABAAQAAgBABAAQABAAAAAAIAVgEIABgBQgDgBgDgIIgGgNQAAAAABAAQAAAAAAgBQAAAAAAAAQABAAAAAAQADAAAGADQAFADABADIACAGQAAAFgCACIAJgEQADAAAFADQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAIgCADIgYAFIABABQAEADAAACIgBAEIgDAGIgBADIAEgBQAHgCADgCIABAAIAHADQAGACAAACIgCAEQgCAEgBAJIgCAJIADgBIAcgDQgCgGgEgDIgCgDQAAAAAAAAQAAAAABgBQAAAAAAAAQABAAAAAAIAFABIALgNIABgCQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAgBAAIgSAGIgDABIgFgCIgEgEQAAAAAAAAQAAAAAAgBQABAAAAAAQABAAABAAQAKAAAHgDQAHgBAGgDIACgBQAEAAAGAEQAHADgBAEQAAAAAAAAQAAABAAAAQgBAAAAABQgBAAgBAAIgNAIIgLAIQAEADACAFIAXgEIAGABQAGAEAAABQAAACgGAAIgaACQACAJAAAJQAAASgFAIQgFAHgEAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQgBgBAAAAgAB9AFIgBgDIACgCIAUgPIABABIgGAIQgIAMgEABIgEgCgAA4gjQgBgBgBAAQAAgBgBAAQAAgBAAAAQgBAAAAgBIADgBIAHABIAngDIAEgBIAHABQABABABAAQAAAAABABQAAAAAAAAQAAABAAAAQABADgFAAIgSgBIgSABIgOADQgDAAgCgCgAgogkIAAgCQAFgGAFgJIAHgRQABgGAAgGQABAAAAgBQAAAAAAgBQAAAAAAAAQABAAAAAAIAFABQAHAFgBADIgLATIAcgIIAGABQAEACABACQgBACgGADIgTADIgJABIgHgBIAAABQgFAGgGAFIgFADgAh2g0QgJgLAAgDQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAQAHAAAHADQAIAEADADQACADAAAEQABAIgHAAQgGAAgHgKg");
	this.shape_4.setTransform(163.8853,-29.1606,1.4247,1.4247);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#231815").s().p("AhFBYQgEgHAAgFIABgJIAEguQgJALgKAKQgMALgOAHQgMAHgSAEIAAAAQAAgBAAAAQAAAAABAAQAAgBABAAQABgBABAAQAagQANgLQAJgJASgUQADgFACgGIABgBIAAgrIgzAIQgFAAgFgDQgFgCgBgDIAFgBIA+gHIgBgEQAAgGgDgEIgBgDIgGABQgNACgIAAIgIAAQAAAAABgBQAAAAAAAAQABAAAAgBQABAAABAAQAVgEASgJQAJgDAIgHIAEgCQAEAAAFAFQAFAEAAACQAAACgFABIgdAIIAFACQAGAEgBAEIgBADIAAAEIAvgHIAHACQAHAFAAACQAAADgHAAQgcABgcADIAAAGIgBAnIAAABQAYAYARAMQAQALAgAMQAGACAAABQAAACgFAAQgPAEgPAAQgLAAgEgFQgOgOgggqIAABFQAAAEgEAHQgBAEgDAAQgCAAgBgFgAA2A7QAAgBABAAQAAgBAAAAQAAgBABAAQAAAAABgBQAIgGAKgRQAHgNAAgDIgBgHIACgBIAEABQAEADAAADIgCADIgYAlQAAABAAAAQAAAAAAABQAAAAABAAQAAAAABAAIAkgEIAEAAQAFADAAACQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAIgQgBQgUAAgOAFQgDAAgBgFgAiAATQgFgFgBgCQAAAAABgBQAAAAAAgBQAAAAABAAQAAAAABAAIAJABIAGgBIAVgFIAAgRIgBAAIgFABIgJADIgGABIgGgBQgFgCAAgBQAAgCAHgBQAIgBAIgDIACgBIAHABIgBgFIgCgGIgBgCQAAgBABAAQAAgBAAAAQABAAAAgBQABAAABAAQADAAAFACQABABAAAAQABAAAAABQABAAAAABQAAAAAAABIgCAeIAAAAQAFAAgBACQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAIgYAKIgIAEIgDACQgDAAgGgEgAgjAJQgFgFAAgGIABgVQAAgIgBgCIAAgDQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAABAAQAEAAAFACQABABAAAAQABAAAAABQABAAAAABQAAAAAAABIgCADQgCADAAAIIAZgIIAEABQADACAAACQAAACgFACIgQADIgMAAIAAAMQAAAEACABQABACAGAAQALAAAJgDIAGgCQADAAAEACQADACABADQAAACgGACQgMADgLAAQgPAAgGgFgAB6AHIAAgDIABgCIAUgPIABABIgFAJQgKALgDABIgEgCgABPgFIgBgFIABgGIABgGIgBgMIgTALIgJAEQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQANgHAQgNQAMgKAAgCQAAAAAAAAQAAgBAAAAQABAAAAgBQAAAAABAAIADABQAAAAABABQAAAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBABIgIAHIgCACQABAIAAALIABAMQgBABAAAAQgBABAAABQAAAAAAABQgBAAAAAAQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBgAA5gtQAbgQAAgGQAAgBABAAQAAgBAAAAQAAAAABgBQAAAAAAAAIADACIADADQgBACgPAKQgOAJgDAAg");
	this.shape_5.setTransform(118.8639,-29.5168,1.4247,1.4247);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#231815").s().p("AgoBSQgDgEAAgCIgCgNIgCgNIgFgIIgBgBQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIAHABIABAAIApgGIAFgBIADgBIAIAEQAHAFAAADIgCADQgFAGgCAGIgDAIIgBABQAFADAAACQAAAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAIgsADIAAABIgBAEIgDADQAAAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAgBgAgiAvIgEABIABACIACAUQAOgBAMgCIAJgBIADgWQAAgCgFAAgAhdBQQgHgJgJgIQAAgBgBAAQgBAAAAgBQAAAAgBgBQAAAAAAAAIABgBQAMADAEAAQABAAAAAAQABAAAAAAQAAgBABAAQAAgBAAAAIADgnQgNAKgKAKIgDACQgEAAgGgFQgFgEAAgCQAAgBAAAAQAAAAABAAQAAgBAAAAQAAAAABAAIAIgDIAfgRIAAgaIgTACQgHAAgDgBQAAgBgBAAQgBgBAAAAQAAgBgBAAQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAABAAQABAAABAAIAZgFIACAAIgBgjIgCgMQgCgCAAgDQAAgEAEAAQADAAAJAEQAGAFAAADIgCAEQgDAHgBALIgBATIAGgCQADAAAFACQABABABAAQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAQgBAAgBAAIgOAEIgBAWIAJgFQAGgEACAAQABAAAAAAQAAAAAAABQABAAAAAAQAAAAAAABIgDADQgFAFgLAIIABAzQAAAIgEAHQgDAGgBAAQgDAAgDgFgABlA/IgCgFQACgKAAgTQgKgMgNgHQAAAAgBAAQgBAAAAgBQAAAAgBAAQAAgBAAAAIADgDIACgBQACAAAEAEIARAQQANgKAFgHQABgBAAgBQAAAAABAAQAAgBABAAQAAAAAAAAIAEABIACADQAAADgEABIgUAQIABAdQgBAIgDAAQAAAAgBAAQAAAAAAgBQgBAAAAAAQAAgBAAAAgAhOAiIABgCQALgGAQgRQAKgKAIgOQADgEAAgIQAAgFADAAIAGACQAIAGAAAEIgCACIAIAFQATAPALAFQAKAGAXAGQABAAAAABQABAAAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBABAAAAQAAAAgBAAQAAABgBAAQgSAFgGAAQgEAAgEgCQgGgDgUgXIgMgKIgFgEIAAABIgPASQgKALgPAKQgOAIgFAAQAAAAAAAAQgBAAAAgBQAAAAAAAAQAAAAAAAAgAgnAUIgDgEQAAAAAAAAQABAAAAAAQAAgBABAAQABAAAAAAQAIAAAJgDIAMgCQAEAAAEACQABAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABAAAAQAAAAAAAAQAAAAAAAAQAAABgBAAQgEABgHABIgRACQgHAAgDgBgABtgKIgCgGIAAgBIAFABQAEAAAEgKQAEgMAAgGQAAgEgEAAIgOABQgHATgPAMQgHAGgCAAIAAgBQATgRAFgSIgSAEQAAAAgBAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQAAgCAEgDQACgBAFgHQAEgFAAgEQAAgBABAAQAAgBAAAAQAAgBAAAAQAAAAABAAIADABIACAEQAAABgGAIIgEAGIABAAIAigDIADABQAAAAABABQAAABAAAAQABABAAAAQAAABAAAAIgCAHQgCAJgFANQgGAKgEABQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAgBgAgogiIgDgIIgCABIgLAHQgDAAgGgEIgFgHQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIAJABIAOgDQgEgMgCgBQgCgDAAgCQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAABAAQAFAAAFADQABAAABABQAAAAABAAQAAABAAAAQAAAAAAABIAAAIIABAEIAJgDIADAAQABAAABAAQABAAAAAAQABAAAAABQAAAAAAAAQAAABAAAAQAAABgBAAQAAABgBAAQAAAAgBAAIgMAGIACANQAAAEgCABQgEgBgBgGgAgHggIAFgQIgBAAIgBABQgCAAgEgDIgEgDQAAAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAIALgCIAAgEQABgKAAgGIgBgFQAAAAABgBQAAgBABAAQAAAAABgBQAAAAABAAQADAAAEADQAFADAAADIgGAQIANgDIAIACQAFACAAABQAAABAAAAQAAABgBAAQAAAAgBABQgBAAgBAAIgIABIgOACIgEABIgHAPIgFAEg");
	this.shape_6.setTransform(70.245,-29.2319,1.4247,1.4247);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#231815").s().p("AgTBTQgHgFgVgbIgEAFQgLAKgUAJQgPAGgLAAQgHAAABgCIACgBQAQgFASgJQAQgKAIgLIgPgUQgHgJgGgDQgLAVgLALQgPAQgOAIQgJAEgEAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQAAAAgBgBQAWgRALgPQAMgMANgaQAHgOAFgPIgbACQgIAAgFgCIgDgDQAAgDALAAIAigEIABgEQAGgRAAgOIAAgJQAAgBAAAAQAAgBABAAQAAAAAAAAQABAAABAAQADAAAHADQAGAFAAACIgCAFIgGATIgDAKIAHgBQAXgEALgDIAHgBQAEAAAFACQAEACAAACQAAAEgHABQgNADgaAEIgTACQgGARgFAMIAWgCIAVgGIAEgBIALAEQAFACAAADIgCADIgIALQgJATgHAKIAKAIQARAPApAKQAFABgBACQAAABAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgVAFgPAAQgJAAgEgDgAhJAHIAZAcIAIgRQAFgKgBgFQAAgBAAAAQAAgBAAAAQAAAAgBAAQAAgBgBAAgAAxA/QAUgLAOgQIgUgMIABgBQACAAARAJIACABIACgCQAJgMgBgEQAAgBAAAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgcADIgEgBIgCgCQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAQASgBARgDIAEAAIAEABQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBACQgEAEgFAKIgGAIQAMAGAHAIQAFAEAAACQAAABgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgCAAgEgEQgLgKgIgFQgHAJgMAHQgNAIgEAAgACCAHIgLgWIAAAAIACACQALALABAAIAMgLQAAgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAIAAAAIgLAWQAAABgBAAQAAABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAAAgBgAA1giQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBIABgBIAIABIAngCIAEgBIAIABQAAAAABAAQAAABABAAQAAAAAAABQABAAAAAAQAAABgBABQAAAAAAAAQgBABgBAAQAAAAgBAAIgTgBIgfAEQgDAAgDgCg");
	this.shape_7.setTransform(27.9662,-29.3387,1.4247,1.4247);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#231815").s().p("AgCBOIgUgVIABgBIASADQAAAAAAgBQABAAAAAAQAAgBAAgBQAAgBAAgBQABgMAAgmIgaAFIgIgBIAAAAIgBAGQgBATgJASQgEAJgMALQgGAGgDAAIAAgBQAQgWAGgXQAFgTAAgrQgCgegDgFIgDgFQAAAAABgBQAAAAAAgBQABAAABAAQABAAABAAQADAAAGACIACABIARgDIASgHIAKAFQAHAFAAACIgCAEQgDAIAAASIABBXQAAAQgEAHQgEAJgDAAQgBAAgCgDgAgjACIACgBIATgDIACgBIAJABIACABIAAgcIgZAFIgHgBIgBAAgAgQhDIgRAEIAAABIgBAEIAAAbIADAAIAQgEIADgBIAIABIADABIAAgZIgBgIIgEgBgAhWBKIgUgSIAAgBIAEABIAOAAQAAAAABAAQAAAAAAgBQABAAAAgBQABgBAAgBQABgIABgoIgRAEIgGABQgFAAgBgBIgBAAIgBAFQAAASgJAQQgDAJgLAKQgGAGgCAAIgBgBQAOgTAEgXQAFgRABgqQgBgagEgFIgCgEQAAgBAAAAQAAgBABAAQAAAAABgBQABAAABAAIAJACIAEACIAZgHIAEgCQACAAAIAFQAGAEAAACQAAACgCADQgDAGAAARQAAApABALIAAAdQAAAPgDAHQgFAIgEAAQAAAAAAAAQgBgBAAAAQgBAAAAgBQgBAAAAgBgAhwACIABAAQAHgBAGgCIADgBIAIABIAEABIAAgYIgVAEIgHgBgAhhg9IgNADIAAABIgBAFIAAAZIABAAIAMgDIADgBIAIABIAEABIgBgYQAAgGgBgCQgBAAAAAAQgBgBAAAAQgBAAAAAAQAAAAgBAAgAA1A1QAAAAABgBQAAAAAAgBQABAAAAAAQABgBABAAQAGgGAMgSQAIgMgBgEIAAgGQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIAEACQAEADAAACIgdApQAAAAAAABQAAAAABAAQAAAAAAABQABAAABAAIAogFIAFABQADACAAACQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgRgBQgWABgPAFQgEgBAAgFgAB9ACIgBgCIACgDIAUgPIABABIgGAIQgJAMgDABIgEgCgAA0gJQAWgMALgJIgSgKIABgCIATAJQAMgMAAgGQAAAAAAAAQAAAAgBgBQAAAAgBAAQgBAAgBAAQgGAAgMADIgKACIgCgCQAAgDAEgCQAFgEADgFQADgFAAgCIAAgDQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIADABQAAABABAAQAAAAAAABQAAAAAAABQABAAAAABQAAACgJALIABACIAbgDQADAAACAEQAAABgEADQgDACgBAEQgEAHgGAFIAOAJQAIAGgBAEQAAABAAAAQAAABAAAAQAAAAAAAAQgBABAAAAQgDAAgFgGQgGgFgKgHQgNALgXAIQAAAAAAAAQAAAAAAAAQAAAAAAgBQgBAAAAAAg");
	this.shape_8.setTransform(-17.8388,-28.7332,1.4247,1.4247);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#231815").s().p("AA4BVQAAgBAAgBQAAAAAAgBQABAAAAgBQABAAAAAAIAKgFQADgCANgMQgPACgNAGQgEAAAAgEQAAgBAAAAQABgBAAAAQAAgBABAAQABAAAAgBQAGgDAIgKQAHgJABgFIgBgEIABgBIAFACQABABAAAAQABABAAAAQAAABABAAQAAABAAAAQAAAAAAABQgBAAAAABQAAAAAAABQgBAAAAABIgTAVIADAAIAWgDQAIgIAAgEIABgFIAEADIADAFQAAABAAAAQAAABgBAAQAAAAgBABQgBAAgBAAIgHAHIgYAVQAAAAAAAAQABABAAAAQAAAAABAAQAAAAABAAIAVgEIgIgHIACgCQADAAAIAHQAIAFAAAFQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgEABgDgFIgCgDIgbAFIgJADQgDAAgBgDgAhIBQQgIgLgJgIIgEgDQAAgBAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIARADQABAAABAAQAAAAABAAQAAAAABgBQAAAAAAgBIACgSQACgZAAgmQAAgWgBgMQgBgHgCgEIgBgGQAAgDAEAAQAFAAAIAEQAIAFAAAEIgCAFQgEAGAAALQgDATAAAtIABAoQAAAKgFAHQgFAGgCAAQgDABgDgGgAiRAmIACgCIAMgRQAGgIAFgMQADgHAAgGQAAgBAAgBQABAAAAgBQAAAAABAAQAAgBABAAIAFADQAIAFAAAEIgFAGQgIAOgIAIQgIAJgHADIgHAEgAAIAgQgFgDgIgPQgLgRgGgHQgEgFAAgBIABAAIAHABIASALQALAJAEAHQADAHAAAIIgBAGQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgFgDgAB/AgIgLgUIAAgBIADACIAMAJIAMgJQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAABAAIAAABQAAACgLASQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAgBgBAAgAA1AAIgDgDQAAAAAAAAQAAAAAAAAQABAAAAAAQAAgBABAAIAIABIAlgCIAEgCIAIACQAAAAABAAQABAAAAABQAAAAABABQAAAAAAAAQAAABgBAAQAAABAAAAQgBAAgBAAQAAAAgBAAIgkABIgNACQgDAAgDgCgABOglIgCgFIABgEIABgjIgVAEIgFgBIgDgDQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAdAAAWgEQAAAAABAAQAAAAABAAQAAABABAAQABAAAAABIADACQgBACgDAAQgFgBgFAAIgNABIABAoQAAAHgDAAQgBAAAAgBQAAAAgBAAQAAAAAAgBQgBAAAAgBg");
	this.shape_9.setTransform(-62.5397,-29.1962,1.4247,1.4247);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#231815").s().p("AheBTQgEgJABgEIACgKQAEgPABgxQAAgJgCgGIgFAHQgKAMgOAKQgIAHgEgBIAAAAIACgDQAMgLAMgRQAMgQAIgTQAGgOAAgKQAAAAAAgBQAAgBABAAQAAgBAAAAQABAAAAAAQACAAAEACQAJAGAAADQAAACgEADIgEAJQgHAOgJALIADAEQAHAIgBADIgBAHIgBAmIAAAnQAAAFgEAHQgBAFgDAAQgCAAgDgGgAAWBPIgJgOIhBAFIgBABQgBAIgCAAQgDABgDgFQgCgGAAgFIABgHQACgHABgTQABgRAAglQABgRgEgHIgBgDQAAgBAAgBQAAAAAAAAQABgBAAAAQABAAABAAQAFAAADACIACACQAYgCAggHQAPgFAEAAQACAAAGAEQAIAEAAAFIgCAIIgCA0IACAzQABAJgFAHQgFAGgDABQgDgBgCgEgAgjgtIgOADQgBBSgCAWQAggCAQgDIASgDQADAAAGADIABABIABgDQABgKAAggIAAg4QAAgHgFAAIgGAAQgSAAggAFgABXBGQgJgFAAgFQAAgHAEgEQAFgFAGAAIAJAAQAAAAABAAQAAAAAAgBQAAAAAAgBQAAgBAAAAIAAgIQgSACgJACIgEgCIgCgDIAhgDIgBgHQgBgIgFgEQAAAAAAgBQAAAAABAAQAAAAABAAQABgBAAAAQAGABABADIACARIAVgBQADAAACADQgBACgEAAIgGgBIgPAAIAAAMQAAAHgBAAQgIgDgDAAQgHAAgCADQgFADAAAGQABAEAGADQAEABAKAAQAGAAARgFQAAAAAAAAQABAAAAABQAAAAAAAAQAAABAAABQAAACgIACQgKAEgGAAQgJAAgHgEgAgfAwIgCgGIgCgKIgBgMQAAgDgEgDIgBgBQAAgBABAAQAAAAAAgBQABAAAAAAQABAAABAAIAEABIAFABIACAAIADAAIAEgWIgNACQgGAAgDgCQgBAAAAgBQgBAAAAAAQAAAAAAgBQAAAAgBgBQABAAAAAAQAAAAABgBQAAAAABAAQABAAABAAIAVgDIABgPIgCgIIgBgCQAAgBAAAAQAAgBABAAQAAAAABAAQABAAABAAQADAAAGADQAFADAAADIgCACQgCAEgBAGIAAAEIAJgDIADgBQACABAFACQABAAABABQAAAAABABQAAAAAAAAQABABAAAAQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAgBABIgVADIgFAVIAKgBQABAAABgBQAAAAABAAQAAAAABAAQAAgBAAAAIACgBIAHAEQAGAEAAABIgCADQgEAEgCAGIgDAIIADAEIgCAAIgJABIgWACIgBAEQAAAAAAABQgBAAAAAAQAAAAAAAAQgBAAAAAAgAgOAPIgMAEIgBAAIABATIAQgDIAHgBIADgSQAAAAgBAAQAAgBAAAAQgBAAgBAAQgBgBgBAAIgJABgABbgCQgFgMgFgFQgEgFgBgBIADgEQAOgWAAgDIgBgEIACgCIAEABIACADQAAADgQAXIgCAFIACAEQAOAPAAAEQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBgBgAB0gDQgGgLgGgHQgDgDAAgBIACgFQAPgWAAgCIgBgDQAAAAAAAAQAAAAAAgBQABAAAAAAQABAAAAAAIAEABIADADIgSAXIgCAGQAAAAAAAAQAAABABAAQAAABABAAQAAAAABABQANAPAAAEQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBAAAAgABfhJQgCgCgBgEQABgEACgCQACgDAEAAQADAAAEADQADADAAADQAAADgDADQgDAEgEAAQgEAAgCgEg");
	this.shape_10.setTransform(-111.2297,-30.4785,1.4247,1.4247);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#231815").s().p("AglBZIgSgSIAAgBIARACQADAAACgDQACgHAAgbIgFACIgHABIgaADIgHAAQgCANgHALQgGAIgJAGQgGAEgCAAIgBgBQAOgOAFgRQAEgMABgfQgCgIgBgDQgFAIgMAMQgOANgNAGQgJAEgEAAIgCgBQAXgRAJgKQALgKALgUQAEgGAGgPIgnAHQgFAAgFgDQgGgCAAgDQAAAAAAAAQAAAAABgBQAAAAABAAQABAAAAAAIA4gHIACgGQAEgPAAgKIAAgKQAAAAAAgBQABAAAAAAQAAgBABAAQAAAAABAAQAEAAAHAEQAFAEAAADIgCAEIgJAaIBCgLQACAAAFADQAJAEAAADQAAADgHAAQgdABgmAEIgLABQgJAVgGAJIAdgDIAXgGQADAAAHAEQAHAEAAACQAAADgCACQgEAGAAARIACAtQAAAOgEAIQgHAIgDAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQgBAAgBgBgAhLAiIAggGIAIABIAEACIAAgUIgFACIggAFIgGgBgAhKgGIAAAAIABACIgBAHIAAAIIAfgGIAIABIAEABIAAgLIgCgGIgEgBgAAwA9QASgKAQgRIgUgMIABgBQACAAARAIIADACIABgDQAJgMgBgDQAAgBAAAAQAAgBAAAAQgBAAgBgBQAAAAgBAAIgcAEIgEgBIgCgDQAAAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQASgBARgDIADAAIAFABQAAAAABABQAAAAABABQAAAAAAABQAAAAAAABIgCACQgDAFgFAJIgGAIQALAGAIAHQAFAFAAACQAAABgBAAQAAABAAAAQgBABAAAAQgBAAAAAAQgCAAgEgEQgLgLgIgEQgJAJgKAHQgNAIgEAAgACBAFIgMgWIAAgBQAAAAABAAQAAABABAAQAAAAABABQAAAAABABQAKALABAAIAMgLQAAgBABAAQAAgBABAAQAAAAABgBQAAAAABAAIAAABIgMAWQAAAAgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAA0gkQgBgBAAAAQgBgBAAAAQgBgBAAAAQAAAAAAgBIABgBIAIABIAngDIAEgBIAIABQAAABABAAQAAAAABABQAAAAAAAAQABABAAAAQAAABgBAAQAAABAAAAQgBAAgBABQgBAAgBAAIgSgBIgfAEQgEAAgCgCg");
	this.shape_11.setTransform(-206.6865,-29.0182,1.4247,1.4247);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.instance},{t:this.shape},{t:this.txt3},{t:this.txt2},{t:this.txt1}]}).wait(1));

	// 圖層_2
	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#231815").s().p("AgDAvIgCgCIAAhYQAAgBAAAAQAAAAAAgBQABAAAAAAQAAgBAAAAIAEgBQACAAACACIACACIAABXQAAABgBAAQAAABAAAAQAAAAgBABQAAAAAAAAIgEABg");
	this.shape_12.setTransform(-234.2376,9.2329,1.4998,1.4998);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#F5B1A2").s().p("Ag7A8QgZgZAAgjQAAgiAZgZQAZgZAiAAQAjAAAZAZQAZAZAAAiQAAAjgZAZQgZAZgjAAQgiAAgZgZg");
	this.shape_13.setTransform(-234.2269,9.1291,1.5,1.5);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#231815").s().p("AgMBHQgDgDAAgFQAAgGADgDQAEgDAEAAQAFAAACADQAEADAAAGQAAAFgEADQgDADgEAAQgEAAgEgDgAgGAjQAAgXAFgKQAEgJALgKQAMgMAAgLQAAgMgIgHQgIgIgLAAQgLAAgHAGQgJAIAAAHQAAACAFADQAGAEAAADQAAAFgDACQgCADgFAAQgFAAgDgEQgDgEAAgGQAAgKAFgIQAEgHAKgGQAJgEAKAAQALAAAJAEQAJAFAFAHQAFAIAAAJQAAAIgDAHQgEAHgOALQgMAJgEAJQgDAKAAAOg");
	this.shape_14.setTransform(88.7072,51.1523,1.4998,1.4998);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#231815").s().p("AgQBIQgEgDgUgYIgDADQgMAKgPAGQgPAGgIAAQgGAAAAgBIADgBQAQgGAMgHQAQgJAGgJIgOgSQgEgGgHgEQgIARgLALQgMAOgNAHQgIAEgDAAIgCgBQAUgQAJgMQALgLAKgWQAGgKAFgPQgPACgJAAQgHAAgDgCQgBAAgBgBQAAAAAAgBQgBAAAAAAQAAgBAAAAQAAgCAJAAIAegEIABgDQAFgQAAgLIAAgEIgBgEQAAAAABgBQAAAAAAgBQABAAAAAAQAAAAABAAQACAAAHAEQAFADAAACIgBAFQgDAGgCAKIgDAIIAGgBIAdgFIAGgCIAIADQADABAAADQAAACgGABQgJADgYADIgRACQgEAOgGAMIAUgDIASgFIADAAIAKADQAEACAAACIgCADIgHAJQgGAPgIALIAJAGQAQANAiAJQABAAABABQABAAAAAAQABABAAAAQAAABAAAAQAAABAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAQgWAFgJAAQgGAAgFgDgAg/AGIAWAYIAHgOQAEgJAAgEQAAgBAAAAQAAgBgBAAQAAAAAAgBQgBAAAAAAgAArA3QARgKAMgNIgRgLIABgBQACAAAOAHIACACIACgDQAHgKAAgDQAAAAAAgBQAAAAgBgBQAAAAgBAAQAAAAgBAAIgYADIgDgBIgDgCQAAgBABAAQAAAAABAAQAAgBAAAAQABAAAAAAQAOAAAQgDIAEAAIADABQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIgBACIgNATQALAGAGAGQAEAEAAACQAAAAAAABQAAAAgBABQAAAAgBAAQAAABgBAAQgCAAgDgEIgPgOQgJAJgIAFQgLAHgEAAgABxAGIgKgTIAAgBIADADQAJAKABAAIANgNIAAABQAAACgKARQAAAAAAABQgBAAAAABQgBAAAAAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAAugdIgCgDIABgBIAHABIAhgDIAEgBIAGABQABABABAAQAAAAABAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAABgBAAQgBAAgBAAIgfAAIgMACg");
	this.shape_15.setTransform(54.9617,51.2273,1.4998,1.4998);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#231815").s().p("AgBBEIgPgPIgDgDIABgBIAPACIACgEQABgIAAgkIgDABIgFABIgPADIgHgBIAAAAIgBAFQAAAQgIAQQgFAKgJAIQgFAFgDAAIAAgBQAOgSAEgVQAFgSAAgkQgBgZgDgFIgCgEQAAgBAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAIABIADACIAOgDIAQgGIAIAEQAGADAAADIgCAEQgCAHAAAQIAABLQAAAMgDAIQgDAHgDAAQAAAAgBAAQAAAAAAAAQAAgBAAAAQgBgBAAAAgAgeABIACAAIAQgCIACgBIAHABIADABIAAgZIgWAFIgGgBIgBgBgAgNg6IgPADIAAABIgBAEIAAAXIACAAIAOgDIADgBIAHABIADABIgBgWIgBgHIgDgBgAhLBAIgOgNQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAIABgBIAPABQAAAAAAAAQABgBAAAAQABgBAAAAQAAgBABgBQABgGAAgjIgTAEIgGgBIgBAAIAAAFQgBAQgHANQgEAIgJAJIgGAFIgBgBQAMgRAEgUQAEgQAAgiQAAgYgDgEIgCgDQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAIABIADACIAMgDIAKgEIADgBIAJAEQAFADAAACIgBAEQgDAGAAAPIABBGQAAAMgDAHQgEAHgDAAIgEgDgAhhACIABAAQAFgBAHgCIACAAIAHABIADAAIAAgVIgHACIgLACIgGgBgAhTg1IgMADIAAABIgBAEIAAAWIABAAIANgEIAHABIADABIgBgVQAAgFgBgBQAAgBAAAAQAAAAgBAAQAAgBgBAAQAAAAgBAAgAAvAuQAAAAAAAAQAAgBAAAAQABgBAAAAQABAAAAgBQAHgGAJgOQAHgLAAgDIgBgGQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAABAAIAEABQADADAAACIgCADIgXAgQAAABAAAAQAAAAAAAAQABABAAAAQABAAAAAAIAjgEIAEABQADABAAADQAAAAAAAAQAAAAAAAAQgBABAAAAQgBAAAAAAIgQgBQgUABgMAEQgCgBAAgEgABtACIgBgCIABgCIASgOIAAABQAAACgEAGQgJAKgCAAQAAAAgBAAQAAAAgBAAQAAAAAAgBQgBAAAAAAgAAugIQASgKAJgIIgPgJIABgBIARAHQAKgLAAgEQAAAAAAAAQAAAAgBgBQAAAAgBAAQgBAAgBAAIgPACQgFADgEAAQAAAAAAAAQgBgBAAAAQAAAAAAAAQAAgBAAAAQAAgDADgCQAEgCADgFQADgFAAgCIAAgCQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAABAAIACABIABADIgHAMIABABIASgBIAFgBQABAAABAAQAAAAABABQAAAAAAABQABAAAAABIgDAEIgEAFQgDAGgFAEIAMAIQAGAGAAADQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgDAAgEgEQgEgFgKgGQgKAJgUAIg");
	this.shape_16.setTransform(13.1922,51.7522,1.4998,1.4998);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#231815").s().p("AAwBJQAAAAAAgBQAAAAAAAAQABgBAAAAQABAAAAgBIAJgEIAOgMQgPACgKAEQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAFgCAHgKQAGgJAAgDIAAgEIAAAAQABAAAAAAQABAAAAAAQABAAABABQAAAAABABQAAAAABABQAAAAABAAQAAABAAAAQAAABAAAAIgCADQgGAGgJANIACAAIATgDQAHgHAAgEIABgDIADACQADADAAACQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAgBAAIgbAYIACABIASgDIgGgGQAAgBAAAAQAAAAAAAAQAAgBABAAQAAAAAAAAQACAAAIAGQAGAFAAADQAAABAAAAQAAABAAAAQAAAAgBABQAAAAgBAAQgCAAgDgEIgCgDIgXAFIgIACQgDAAgBgDgAg/BGQgJgNgGgEIgCgEIABAAQALADAEAAQAAAAABAAQAAAAABAAQAAgBABAAQAAgBAAAAIACgQQACgYAAgeQAAgXgBgGQgBgGgCgEIgBgFQAAgDAEAAQADAAAJAEQAGAFAAADIgCADQgCAEgCALQgCAbAAAdIABAjQAAAIgEAGQgEAGgCAAQgDAAgDgEgAh9AhIABgCIALgPQAFgHAEgKQADgFAAgGQAAgBAAgBQAAAAAAgBQABAAAAAAQAAAAABAAQACAAADACQAHAEAAAEIgFAFQgHAMgGAHQgGAFgHAFIgHAEgAAHAcQgEgEgHgMIgPgUQgEgEAAgCIABgBIAGACIAQAJQAKAIADAGQACAHAAAGIgBAFQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCgABuAbIgKgRIAAgBIADACIAKAIIAKgIIADgCIAAABIgKARQAAAAgBABQAAAAAAAAQgBAAAAABQAAAAgBAAgAAuAAIgDgCQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIAHABIAggDIAEgBIAGABQABAAAAABQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAgBABIgQgBIgPABIgLACIgFgCgABDggIgBgEIABgEIABgeIgMACIgHABIgEgBIgDgCQAAgBAAAAQABAAAAAAQAAgBABAAQABAAAAAAQATAAAZgDIAEABIACACQAAABAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgEgBgFAAIgLABIABAiQgBAGgCAAIgDgCg");
	this.shape_17.setTransform(-27.5274,51.3773,1.4998,1.4998);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#231815").s().p("AhRBIIgDgLIACgJQAEgOAAgqQAAgGgCgGIgEAGQgJAKgLAJQgHAFgDAAIgBAAIACgCQAKgLALgOQAJgMAIgTQAFgKAAgKQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQADAAACACQAHAEAAADQAAABAAAAQAAABAAAAQgBABAAAAQgBABAAAAIgFAIIgNAWIADADIAFAJIgBAGQgBAGAAAcIgBAhQAAAFgCAGQgBAEgCAAQgDAAgCgFgAATBEIgHgMIg3AFIgCAAIgBABQAAAHgDAAQgCAAgCgEQgDgFAAgFIABgGIADgWQACgOAAghQAAgOgDgHIgCgDQAAAAAAgBQABAAAAAAQAAAAABgBQAAAAABAAQAEAAADACIACABQAVgCAbgFIARgEQACAAAEADQAHAEAAADIgBAHQgBAHAAAmIABAtQAAAHgEAHQgDAFgEAAQgCAAgCgEgAgegmIgMABQgBBEgCAXQARgBAZgEIAPgCIAIACIABABIAAgDQACgHAAgdIgBgwQAAgGgDAAIgGgBQgNAAgeAGgABLA9QgHgEAAgFQAAgHADgDQAEgEAGAAIAIABQAAAAAAAAQABgBAAAAQAAgBAAAAQAAgBAAgBIAAgGQgOABgKACIgEgBIgCgDIADgBIAagCIAAgGQgCgGgEgEQAAgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAQAGABAAACIABAPIATgBQAEAAAAADQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIgGgBIgMAAIAAALQAAAFgBAAIgKgDQgFAAgDADQgDACAAAGQAAADAFADQAEABAJAAQAFAAAOgEQABAAAAAAQAAAAAAAAQABABAAAAQAAAAAAABQAAACgIACQgJADgEAAQgHAAgIgDgAgbApIgBgEIgDgTQgBgEgCgCIgBgBQAAAAAAAAQABgBAAAAQAAAAABAAQAAAAABAAIAEAAIADACIACAAIAEgBIACgSIgKAAQgHAAgBgBIgDgCIAFgBIARgDIABgMQAAgEgBgDIgBgCQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAQAEAAAEACQAEADAAACIgBACQgCADAAAGIgBAEIAKgDQADAAAEACQABAAAAAAQABABAAAAQAAAAABABQAAAAAAAAQAAABAAAAQgBAAAAAAQAAABgBAAQAAAAgBAAIgPADIgEABIgEASIAMgDIACAAIAGACQAFADAAACIgBACQgEAFgCAEIgCAGIgBABIADADIgBABIgVACIgHAAIAAADIgCACIgCgCgAgXAQIAAAAIAAARIAVgDIACgQQAAAAAAgBQgBAAAAAAQgBgBAAAAQgBAAgBAAgABQgBQgGgLgEgEQgDgDAAgCIACgEQAMgTAAgCIgBgFIACgBIACABQABABABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAADgOATIgCAFIACADQAMANAAAEQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAIgDgBgABkgDQgEgIgGgHQAAgBgBAAQAAgBgBAAQAAgBAAAAQAAgBAAAAIACgEQAMgSAAgDIAAgCQAAAAAAAAQAAgBAAAAQAAAAABAAQAAAAAAAAIADABIADADIgPAUIgCAEIADADQALAMAAAEQAAABAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAgBQAAAAgBgBgABSg/QgCgCAAgDQAAgEACgCQADgCADAAQADAAADACQACADAAADQAAADgCACQgCADgEAAQgEAAgCgDg");
	this.shape_18.setTransform(-71.9965,50.1775,1.4998,1.4998);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#231815").s().p("AgTBAQgGgGgIgLIgHAGQgMAKgHABIgIACIgFgBIASgLQAIgGAIgJIgMgcIgnAFQAFAEAAACIgEAFIgBADIARAGQADACACADIADAHQAAAEgEAAIgEgBIgIgIQgGgHgFgDIgGAIQgGAKgJAFQgIAGgDAAIgBgBIABgBQAFgEAKgNQAFgHAFgLQACgDAAgFIgCABIgFAAIgGgCIgDgEQAAgBAAAAQAAgBABAAQAAAAABAAQAAAAABAAIAOAAIArgFQgGgUgHgmQgBgLgEgHIgCgEQAAgBAAgBQABAAAAgBQABAAAAAAQABAAABAAIAKADQADABAAADIAAAFIAAAJQAAARADASQADAOAFALIABAAIAVgDQACAAAFACIADADQAAACgHAAIgXADIALAWIAHgKIACgFIACgCQACAAADADQAEADAAADQAAACgDACIgMAMIALAMQANALAFAAQACAAABgGIADgNIACgDQAAAAAAAAQAAAAABAAQAAABAAAAQAAABAAAAQABAWABAGIACAEQAAAEgFAAQgNAAgRgPgAAqAeIgCgDIABAAIAHAAIAigCIAEgBIAHABQAAAAABAAQAAAAABABQAAAAAAAAQAAABAAAAQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgQAAIgRABIgMACQgCAAgDgCgAAAAMQgDgCgHgMIgBgCQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQADAAACABQAGACAEACQADADAAAGQAAAFgFAAQgBAAAAAAQgBAAAAAAQgBgBAAAAQAAAAAAgBgABtAGIgKgTIAAgBIADADIAKAKIANgNIAAABQAAACgKARQAAAAgBABQAAAAAAABQgBAAAAAAQgBAAAAAAQgBAAAAAAQAAAAgBAAQAAgBAAAAQgBAAAAgBgAhrAAQgDgCAAgCQAAgBAAAAQAAAAAAgBQAAAAABAAQAAAAAAgBQAEgBAFgHIAJgLQgJABAAABIgKAEQgBAAAAAAQgBAAAAgBQgBAAAAgBQAAAAgBgBIgCgFQAAgBAAAAQAAAAAAgBQABAAAAAAQABgBABAAQAGgDAHgOQAHgJABgJQAAgBAAgBQABAAAAgBQAAAAABgBQAAAAABAAQACAAADADQAEADAAADQAAABgEAEIgSAXIgCADIABAAIAIgBIAIgBIABgBQAEgGACgHQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAAAAAIAEAEIADAFQAAACgCACIgZAcIACABIARgFIACAAIgDgHIgBgCIACAAIAEABIAHAEQADAEAAAEQAAAGgEAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAAAIgDgFIgBAAQgVAIgEACQAAABgBAAQAAAAAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQAAgBgBAAQAAAAgBgBQgBAAAAgBgABLgIIAAgXIgSAKIgDACQgBAAAAgBQgBAAAAgBQgBAAAAgBQAAAAAAgBIACgDQABgDAAgMQAAgFgCgCQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIAEAAQAAABABAAQAAAAAAABQABAAAAAAQAAABAAAAIgBADQgBADAAAKQAAABAAAAQAAAAAAAAQABABAAAAQAAAAAAAAIARgGIAAgSQAAgEgDgEQAAAAAAgBQAAAAAAgBQABAAAAAAQAAAAABAAIADABIADADIAAADQgBAEAAASIABAZQgBAGgBAAQgDAAgBgGgAgqgJQgDgDAAgCIACgCQADgCAFgHIAJgMIgOAFIgDACQgBAAAAAAQgBgBAAAAQgBgBAAAAQAAgBgBgBQgCgCAAgDQAAAAAAgBQAAAAABAAQAAgBAAAAQABAAAAgBQAEgDAGgMQAGgKAAgHQAAgBAAAAQAAgBABAAQAAAAAAgBQABAAAAAAQACAAAEADQAEADAAADIgSAbIABABIAGgBIAIgBQAEgGABgHQABAAAAgBQAAAAAAgBQAAAAABAAQAAAAAAAAIAFADIACAFQAAABAAAAQAAABAAABQAAAAgBABQAAAAgBABIgWAaQAAABAAAAQAAAAAAAAQAAAAABAAQAAAAAAAAIATgFIgEgIIABAAIAEABIAJAFQACAEAAAGQAAAFgDAAQAAAAgBAAQAAgBAAAAQgBAAAAgBQAAAAgBgBQgCgBgCgFQgVAHgEADIgDACQAAAAgBAAQAAgBgBAAQAAAAgBgBQAAAAgBgBg");
	this.shape_19.setTransform(-110.2415,51.2273,1.4998,1.4998);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#231815").s().p("ABGBLIgBgEQABgIAAgPQgJgKgKgFIgCgCIABgCIACgBIAFACIAPAOQAMgKAEgEIACgCIADABIACACQAAABAAAAQAAABgBAAQAAABgBAAQgBAAgBABQgKAGgHAGIABAWQgBAHgCAAIgCgBgAg8BGQgDgGAAgFIACgIQAEgRAAgPIABgtQAAgMgCgGIgCgDQgSABgYAFIgHABIgKgCQgHgDAAgCQAAgCAFgBQAUAAAQgCIAwgEQAYgCANgDIAGgBQACAAAIAEQAHADAAADQAAADgKAAIg9ABQACACABADIgBAXIAAAHQAPADANAEQAGADAEADQACADACAFQgBAEgEAAIgEgBQgKgEgGgFIgRgKIgCA8QgBAKgCAJQgCAFgBAAQgCAAgEgGgABrARIgBgCIABgDIADgBQAAAAABAAQAAAAAAAAQABAAAAABQABAAAAABIANAOIgBABgAAxAAIgDgCQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAIAHABIAhgDIADgBIAHABQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQAAAAgBAAQgBAAgBABIgQgBIgPABIgLACIgFgCgABGggIgBgEIABgEIAAgeIgLACIgHABIgEgBQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAABAAQASAAAZgDIAEABIACACQAAABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAIgJgBIgLABIABAiQAAAGgDAAIgDgCg");
	this.shape_20.setTransform(-152.3484,51.3773,1.4998,1.4998);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#231815").s().p("AABBIQgGgMgGgEIgCgEIABAAIAMAEQAAAAABgBQAAAAABAAQAAgBABAAQAAgBAAgBIACgQQABgcABggQAAgYgBgIIgCgLIgBgEQAAgBAAgBQAAgBAAAAQABgBAAAAQABAAABAAQADAAAHAFQAHACAAAEIgCAFQgEAGAAAKQgCAdAAAeIABApQAAAGgEAHQgDAGgCAAQgCAAgEgEgAhOBEQgDgGAAgEIABgHIADgUIABgMIgNAPQgJAJgJAFQgHADgNAFIAAAAIACgDQATgMAIgJQAJgIAJgNIAFgJIAAghIgaAEIgFABIgHgCQgBAAgBgBQAAAAgBAAQAAgBgBAAQAAgBAAAAIACgBIAngGIAAgDIgDgIIgBgCIAAgBIgCAAQgKAEgHAAIgDgBIADgBQAFgCAPgHQALgHAEgFIADgBQADAAAEAEQAFADAAABQAAADgFABIgVAGIAHAEQAEACAAAEIgBAEIAWgDIAGACQAFACAAACQAAABAAAAQgBABAAAAQgBAAgBAAQAAABgCAAIgdACIAAAFQgCAYAAAOIAAAEIABAAIAPAHQALAHADAEQACAFAAAEIgBAEIgCACIgEgCQgGgEgGgIIgNgOIAAAoQAAAEgDAFQgBAEgDAAgAAyAuQAAgBAAAAQAAgBAAAAQABAAAAgBQABAAAAgBQAHgFAIgPQAHgLgBgDIAAgFQAAgBAAAAQAAAAAAgBQABAAAAAAQAAAAABAAIADACQAEABgBADIgXAjQAAABAAAAQAAAAABABQAAAAAAAAQABAAAAAAIAfgEIAFABQADACAAACIgCABIgPAAQgSABgMADQgCgBAAgDgAgQAVIgBgDIAAgEIAAghIgDgOIAAgDQABAAAAgBQAAAAAAAAQAAgBAAAAQABAAAAAAIAGABQABAAAAABQABAAAAAAQABABAAAAQAAABAAAAIAAA0IgBAEIgCACQgBAAAAAAQgBAAAAAAQAAgBgBAAQAAgBgBgBgAh3ATIgCgFQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIAQgDIALgDIgBgNIAAAAIgMACIgEABIgGgBQAAAAgBAAQAAAAgBAAQAAgBAAAAQgBAAAAAAQAAgCAGgBIALgEIACgBIAGABIAAgDIgDgHQAAAAABgBQAAAAAAgBQABAAAAAAQABAAABAAIAFABQABABABAAQAAAAABABQAAAAAAABQABAAAAAAIgCAHIAAARIACAAIACgBIAAABIgBACQgEADgJAEIgMAHIgFABIgGgCgAg3AKQgDgFAAgHIAAgOIgBgHIgBgDQAAAAAAgBQAAAAAAAAQABAAAAAAQAAgBABAAIAIACQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAABIgBACQgBADgCALIATgHIAEABQAAABABAAQABABAAAAQABAAAAAAQAAABAAAAQAAACgEACIgLACIgLABIABAIQAAABABAAQAAAAAAABQABAAAAAAQAAAAABAAQAHAAAGgDIAEgBQADAAACABQABABABAAQAAABABAAQAAABAAAAQABABAAAAQAAABgBAAQAAABAAAAQgBAAAAABQgBAAgBAAQgHADgIAAQgKAAgEgEgABtgKIgCgCIACgDQABAAAAgBQAAAAABAAQAAAAAAAAQABAAAAAAIACACIAOAPIgBABQgBAAgRgMgAAtgGQAGgGAEgKQAEgGAAgJQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAAAgBQAAAAAAAAQAAAAAAAAQABAAAAAAIAFABIAUgBQACAAACgEIABgGQAAgBAAgBQAAAAAAgBQAAAAgBAAQAAgBAAAAIgcAEIgFgBIgBgCQAAAAAAAAQAAAAABgBQAAAAABAAQAAAAABAAIAbgDIAGAAIAFABQAAAAABABQAAAAAAAAQABAAAAABQAAAAAAAAIgFAMQgCAFgDAAIgXACQgDARgGAGQgGAJgDAAg");
	this.shape_21.setTransform(-194.0429,51.8647,1.4998,1.4998);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#231815").s().p("Ah5A9QgGgEAAgBQAAgBABAAQAAgBAAAAQABAAABAAQABAAABAAIA+gGIgBhgQgBgHgCgCIgBgDQAAgEAEAAQAGAAAHADQAGADAAAEIgCAFIgEAYIAAANIAigJIAGACQAFADAAACQAAADgHAAIgVAEIgKAAIgHAAIgBA2IA+gFQADAAAHADQAGAEAAADQAAADgEAAIgagBQgRAAgiADQghADgRADIgKACQgDAAgGgEgABTA2QgFAAgCgCQgFgDAAgIIABgOIgBACQgGAMgLAIIgIAFIgCgCQALgJAHgHQAFgHACgHIgPADQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAgBgBAAQAAAAAAgBQgBAAAAAAQAAAAAAgBQAAAAAAAAIACgBIASgBIACgMIgCgFQAAgBAAAAQAAAAAAAAQABgBAAAAQAAAAABAAIADABQAAAAABAAQAAABABAAQAAABAAAAQAAAAAAABIgCAJIAAAGIAPgCQAHAAAAADQAAAAgBABQAAAAgBAAQAAABgBAAQgBAAgBAAIgFgBIgMABIACAFIgBAOQAAAFACABQACACAEAAIAQgBQABAAAAAAQABAAAAABQABAAAAAAQAAABAAAAQAAAEgFAAgABtgGIgCgDIACgDIACgBIADACIAOAQIgBAAQgCAAgQgLgAAsgDQAHgFAEgLQADgGAAgJIgBgEQAAAAAAAAQAAgBABAAQAAAAAAAAQAAAAAAAAQAEACACAAIATgCQAEAAAAgDIACgHQAAgBAAgBQAAAAgBgBQAAAAAAAAQgBAAAAAAIgbAEIgGgCIAAgBQAAgBAAAAQAAAAAAAAQABgBAAAAQABAAAAAAIAbgCIAHgBIAEABQAAABABAAQABAAAAABQAAAAABAAQAAAAAAABIgCACIgDAJQgCAFgEAAIgXACQgCAQgGAHQgHAJgCAAg");
	this.shape_22.setTransform(225.393,8.8579,1.4998,1.4998);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#231815").s().p("AgpBQIgBguQgXADgWAEQgHACgDAAQgDAAgGgDQgFgEAAgBQAAgDAEABIAggDIAhgEIAAgOIgWACIAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAIgDgCQgCgDAAgEIgCgNIgCgPQgBgFgEgEIgBgBQAAgBAAAAQABgBAAAAQAAAAAAAAQABgBAAAAQAFAAABACIABAAIAegEIAAgPIgWACQgHAAgDgBQAAgBgBAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAIgBIAbgDQAAgIgDgKIgBgEQAAgBAAAAQAAgBAAAAQAAgBABAAQAAAAABAAIAKACQAFABAAACIgBAFQgBAEAAAJIAYgEIAHABQADACAAADQAAABgEABIgZAEIgFABIAAAPIAOgEIANgDIAKAFQAHAEAAACIgCADQgCADgDAHIgHAcQgCAGgEAAQgDAAgCgFIgUABIAAAOIAJAAIAxgFQADAAAGADQAGAEAAACQAAAEgFAAIgKgBIgOgBQgPAAgdADIAAADIgBAeQgBAKgCADQgBABAAABQAAABgBAAQAAABgBAAQAAAAAAAAgAg/AIIAVgCIAAgOIgCAAIgOACIgHgBgAgLAFQACgEACgMIABgCIgEABIgWADIAAAOIACAAIANgCQACAAAEACgAhDgbIACAPIACAAIAVgDIAAgOQgOADgLgBgAgfgeIgBANIAPgCIAHAAIAEACIABgMQAAgFgCAAgABHA2QgHgFAAgFQAAgFAEgEQAEgEAFAAIAIABQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAgBIAAgGQgNABgLACIgEgBIgBgEIACAAIAbgDIgBgFQgBgGgFgFQAAAAAAAAQABAAAAgBQABAAAAAAQABAAABAAQAFABAAACIACAOIASgBQABAAABABQAAAAABAAQAAABABAAQAAABAAAAQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIgHgCIgMABIABALQAAAFgCAAIgKgDQgFAAgDADQgDADAAAEQAAAEAGADQAEABAIAAQAFAAAOgFQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAABQAAACgIABQgJADgEAAQgHAAgIgCgABTgGIgBgEIACgKIgBgLIgRAKIgHADQgBAAAAAAQAAAAgBAAQAAAAAAgBQAAAAAAAAQANgHAMgKQAKgHAAgDIABgCIADABQAAAAABAAQAAABABAAQAAAAAAABQAAAAAAAAQAAABAAABQAAAAAAAAQgBABAAAAQgBAAgBAAIgHAHIgCABQACAIAAAJIAAAKQAAABAAABQgBABAAAAQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQgBgBAAgBgABAgoQAXgPAAgFQAAAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAIADABIABAEQAAACgNAIQgNAIgCAAIgBgBg");
	this.shape_23.setTransform(182.1237,8.7454,1.4998,1.4998);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#231815").s().p("AgKAUQAMgJAAgKQAAgBgEgCQgJgCAAgHQAAgEADgEQADgEAEABQAFgBAFAFQADAEAAAGQAAAKgFAIQgGAIgIAGg");
	this.shape_24.setTransform(148.9031,8.8954,1.4998,1.4998);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#231815").s().p("AgpBQIgBguQgXADgWAEQgHACgDAAQgEAAgFgDQgFgDAAgCQAAgBAAAAQAAgBABAAQAAAAABAAQABAAABAAQAKgBAWgCIAhgEIAAgOIgWACIAAABQAAAAgBABQAAAAAAAAQAAABgBAAQAAAAAAAAIgDgCIgCgHIgEgcQgBgFgEgEIgBgBQAAgBAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQAFAAABACIABAAIAegEIAAgPIgWACQgHAAgDgBQAAgBgBAAQgBgBAAAAQAAgBgBAAQAAgBAAAAQAAgBAHgBIAcgDQgBgKgCgIIgBgEQAAgBAAAAQAAgBAAAAQABgBAAAAQAAAAABAAQAFAAAEACQAGABAAACIgBAFIgBANIAYgEIAHABQADACAAADQAAABgEABQgHACgSACIgFABIAAAPIAbgHIAKAFQAHAEAAACIgCADQgCADgDAHIgHAcQgCAGgFAAQgCAAgCgFIgUABIAAAOIAJAAIAxgFQADAAAGADQAGAEAAACQAAAEgFAAIgKgBIgOgBQgPAAgdADIgBAhQgBAKgCADQgBABAAABQAAABgBAAQAAABgBAAQAAAAAAAAQgBAAAAAAQAAAAAAgBQgBAAAAgBQAAgBAAgBgAg/AIIAVgCIAAgOIgDAAIgNACIgHgBgAgLAFQACgEACgMIABgCIgaAEIAAAOIACAAIANgCQACAAAEACgAhDgbIACAPIACAAIAVgDIAAgOQgOADgLgBgAgfgeIgBANIAPgCIAHAAIAEACIABgMQAAgFgDAAgABHA2QgHgFAAgFQAAgFAEgEQADgEAGAAIAIABQAAAAAAgBQABAAAAAAQAAgBAAAAQAAgBAAgBIAAgGQgNABgLACIgEgBIgCgEIADAAIAbgDIgBgFQgCgHgEgEQAAAAAAAAQAAAAABgBQAAAAABAAQABAAABAAQAFABAAACIACAOIASgBQAEAAAAADQAAABAAAAQgBABAAAAQgBAAAAAAQgBABAAAAIgHgCIgMABIAAALQAAAFgBAAQgHgDgDAAQgFAAgDADQgDADAAAEQAAAEAGADQAEABAIAAQAFAAAOgFQABAAAAABQAAAAAAAAQABAAAAABQAAAAAAABQAAACgIABQgJADgEAAQgHAAgIgCgABTgGIgBgEIABgKIAAgLIgRAKIgHADQgBAAAAAAQgBAAAAAAQAAAAgBgBQAAAAAAAAQAOgHAMgKQAKgHAAgDIABgCIADABQAAAAABABQAAAAABAAQAAAAAAABQAAAAAAAAQAAABAAABQAAAAgBAAQAAABAAAAQgBAAgBAAIgHAHIgCABQACAIAAAJIAAAKQAAABgBABQAAABAAAAQgBABAAAAQAAAAAAAAQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAgBAAgBgABAgoQAXgPAAgFQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAIADABIABAEQAAACgNAIQgNAIgCAAIgBgBg");
	this.shape_25.setTransform(113.0578,8.7454,1.4998,1.4998);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#231815").s().p("ABGBLIgBgEQABgIAAgPQgKgKgJgFIgDgCIACgCIADgBIAEACIAPAOQAMgKAEgEIACgCIADABIACACQAAABAAAAQAAABgBAAQAAABgBAAQgBAAgBABIgRAMIABAWQgBAHgCAAIgCgBgAg8BGQgCgGAAgFIABgIQAEgRAAgPIABgtQAAgMgDgGIgBgDQgSABgYAFIgHABIgKgCQgHgDAAgCQAAAAABgBQAAAAAAgBQABAAABAAQAAgBABAAQAVAAAPgCIAwgEQAZgCANgDIAGgBQACAAAIAEQAHAEAAACQAAADgKAAIg9ABQACACABADIgBAXIAAAHQAPADANAEQAGADAEADQACADABAFQAAAEgEAAIgFAAIgPgKQgHgEgKgGIgCA8QgBAMgCAHQgCAFgBAAQgCAAgEgGgABsARIgCgCIACgDIACgBQAAAAABAAQAAAAABAAQAAABAAAAQABAAAAABIANAOIgBABgAAxAAIgDgCQAAAAAAgBQAAAAAAAAQABAAAAAAQAAAAAAAAIAHABIAhgDIADgBIAHABQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABQAAAAgBAAQAAAAgBABQgBAAgBAAIgQgBIgPABIgLACQgDAAgCgCgABHggIgCgEIABgEIABgeIgMACIgGABIgFgBQgBAAAAgBQgBAAAAAAQAAgBAAAAQgBAAAAAAQAAgBABAAQAAAAAAAAQABgBAAAAQABAAAAAAQAUAAAYgDIAEABIACACQAAABAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgJgBIgLABIAAAiQAAAGgCAAQAAAAgBAAQAAAAAAAAQgBgBAAAAQAAAAAAgBg");
	this.shape_26.setTransform(73.5755,8.8579,1.4998,1.4998);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#231815").s().p("AgQBIQgFgEgTgXIgEAEQgJAIgRAHQgPAGgIAAQgGAAAAgBIACgBQAPgEAOgJQAPgJAHgJIgOgSQgGgHgFgDQgJARgKAMQgOANgLAHIgLAEIgCgBQAUgQAJgMQAKgKALgXIAKgZIgXACQgIAAgDgCIgCgDQAAgCAJAAIAegEIABgDQAFgTAAgHIgBgJQAAAAAAgBQABAAAAgBQAAAAABAAQAAAAABAAQACAAAHAEQAFADAAACIgCAFIgFAQIgDAIIAGgBQARgCANgDIAFgCQADAAAGADQADABAAADQAAACgGABQgKADgXADIgRACIgKAaQAKgBAJgCIATgFIADAAIAKADQADACAAACIgBADIgHAJQgJASgFAIIAJAGQAQANAiAJQAEABAAACQAAAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAQgUAFgLAAQgHAAgEgDgAg/AGIANAPIAJAJIAHgOIAEgNQAAgBAAAAQgBgBAAAAQAAAAgBgBQAAAAgBAAgAArA3QASgLALgMIgRgLIABgBQACAAAOAHIACACIACgDQAHgKAAgDQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBAAgBAAIgXADIgDgBQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAQANAAARgDIADAAIAEABQABAAAAABQABAAAAABQAAAAAAAAQAAABAAAAIgBACQgEAEgEAIIgFAHIARAMIAEAGQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQgCAAgDgEIgQgOQgGAIgLAHQgLAGgEAAgABwAGIgJgTIAAAAIACACIALAKIAKgKQAAgBABAAQAAAAAAgBQABAAAAAAQAAAAABAAIAAAAIgKATQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIgEgCgAAugdIgDgDIACgBIAHABIAhgDIAEgBIAGABQABABAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIggAAIgLACIgFgBg");
	this.shape_27.setTransform(32.2185,8.7079,1.4998,1.4998);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#231815").s().p("AgCBEIgRgSIABgBIAPACIACgEQABgKAAgiIgIACIgPADIgHgBIAAAAIgBAFQgBARgIAPQgEAKgJAIQgGAFgCAAIgBgBQAOgRAFgWQAFgPAAgnQgBgZgDgFIgDgEQAAgBABAAQAAAAAAgBQABAAAAAAQABAAABAAIAIABIACACIAPgDIAQgGQABAAAHAEQAGADAAADQAAAAAAABQAAABgBAAQAAABAAAAQAAABgBAAQgDAGAAARIABBLQAAANgDAHQgDAHgDAAIgDgCgAgeABIACAAIAPgCIADgBIAHABIADABIAAgZIgEABIgEABIgOADIgHgBIAAAAgAgNg6IgPADIgBABIAAAEIAAAXIACAAIAOgDIACgBIAIABIADABIgBgWIgBgHQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAAAAAgAhLBAIgRgPIABgBIAPABQAAAAABAAQAAgBAAAAQABgBAAAAQAAgBAAgBQACgGAAgjIgPADIgEABIgHgBIgBAFQAAAPgHAOQgFAJgIAIIgHAFIAAgBQAMgSAEgTQAEgPAAgjQgBgYgDgEIgCgDQAAgBAAAAQABAAAAgBQABAAAAAAQABAAABAAIAIABIADACIALgDIALgEIADgBIAJAEQAFADAAADIgCADQgCAHAAAOIABBGQAAALgDAIQgFAHgCAAQgBAAAAAAQgBgBAAAAQgBAAAAgBQAAAAgBgBgAhhACIABAAIANgDIAIABIADAAIAAgVIgHACIgHABIgEABIgHgBgAhUg1IgLADIAAABIgBAEIgBAWIACAAIALgDIABgBIAIABIADABIgBgVIgBgGIgDgBgAAuAuQAAAAAAAAQABgBAAAAQAAgBABAAQAAAAABgBQAHgGAJgOQAHgMAAgCIgBgGIABgBIAEABQAEADAAACIgCADIgXAgQAAABAAAAQAAAAAAAAQABABAAAAQAAAAABAAIAigEIAFABQADACAAACQAAAAAAAAQAAAAgBAAQAAABgBAAQAAAAgBAAIgPgBQgVABgLAEQgDAAAAgFgABsACIAAgCIABgCIARgOIABABIgFAIQgIAKgCAAgAAugIQATgLAIgHIgPgJQAAAAAAAAQAAgBAAAAQAAAAAAAAQABAAAAAAIARAHQAKgKAAgFQAAAAAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgQACQgFADgDAAIgCgCQAAgDAEgCQADgCADgFQADgFAAgCIAAgCQAAAAAAgBQABAAAAAAQAAAAAAAAQABAAAAAAIADABIABADIgHAMIABACIASgCIAFgBQABAAABAAQAAAAABABQAAAAAAABQABAAAAABQAAABAAAAQgBAAAAABQAAAAgBABQAAAAgBABIgEAFQgDAFgGAFIANAIQAGAGAAADQAAABAAAAQAAAAAAABQAAAAgBAAQAAAAAAAAQgDAAgEgEQgFgFgJgGQgLAJgUAIg");
	this.shape_28.setTransform(-9.551,9.2329,1.4998,1.4998);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#231815").s().p("AAwBJQAAAAAAgBQAAAAABgBQAAAAAAAAQABgBAAAAIAJgEIAOgMQgQACgJAEQgBAAAAAAQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAQABgBAAAAQAAAAABgBQAAAAABAAQAEgCAIgKQAGgIAAgEIAAgEIAAAAIAFACQABAAAAABQABAAAAAAQAAABABAAQAAABAAAAIgCADIgQATIACAAIATgDQAHgHAAgEIABgDIADACQADADAAACQAAAAAAAAQAAABgBAAQAAAAgBABQAAAAgBABIgbAXIACABIASgDIgGgGIABgCQACAAAIAGQAHAFAAADQAAABgBAAQAAABAAAAQgBAAAAABQAAAAAAAAQgDAAgDgEIgCgDIgXAFQgFAAgDACQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBgAg+BGQgIgLgHgGQgBgBgBAAQAAgBgBAAQAAgBAAAAQAAAAAAgBIABAAQALADAEAAQABAAAAAAQABAAAAAAQABgBAAAAQAAAAABgBIACgQQABgYAAgeIgBgdIgCgKIgCgFQAAgDAEAAQAEAAAIAEQAGAEAAAEIgCADQgCAFgBAKQgCATAAAlIAAAjQAAAIgEAGQgEAGgCAAQgCAAgDgEgAh9AhIABgCIALgPQAFgIAEgJQADgFAAgGQAAgBAAgBQAAAAAAgBQABAAAAAAQABAAAAAAIAFACQAHAEAAAEIgCACIgCADQgKAPgEAEQgIAIgFADIgGADgAAHAcQgEgEgHgMQgJgNgGgHQgDgEAAgCIAAAAIAGABQAKAFAGAFQAKAHADAGQADAGAAAHQAAADgCACQAAABAAAAQAAAAgBABQAAAAgBAAQAAAAgBAAQgCAAgCgCgABuAbIgKgRIAAgBIADACQAJAIABAAIALgIIACgCIAAABQAAACgJAPQgBAAAAABQAAAAgBAAQAAAAgBABQAAAAgBAAgAAuAAIgDgCQAAAAAAgBQAAAAABAAQAAAAAAAAQAAAAABAAIAHABIAggDIAEgBIAGABQABAAAAABQABAAAAAAQAAAAABABQAAAAAAABQAAAAAAABQgBAAAAAAQgBAAAAABQgBAAgBAAIgPgBIgQABIgLACQgDAAgCgCgABDggIgBgEIABgEIABgeIgMACIgGABIgFgBIgCgCQAAgBAAAAQAAAAAAAAQABgBAAAAQABAAAAAAQATAAAZgDIAEABIACACQAAABAAAAQAAABgBAAQAAAAgBAAQgBAAAAAAQgEgBgFAAIgLABIABAiQAAAGgDAAg");
	this.shape_29.setTransform(-50.3456,8.8579,1.4998,1.4998);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#231815").s().p("AhQBIQgEgHAAgEIACgJQADgMAAgsQAAgGgBgGIgFAGQgKAMgKAHQgGAFgDAAIgBAAIABgCQALgLAKgOQALgPAHgQQAFgKAAgKQAAAAAAgBQAAAAAAgBQABAAAAAAQABAAAAAAQADAAACACQAHAEAAAEIgCADQgDADgBAFIgOAWIADADQAFAHAAACIgBAGIgBAiIAAAhIgDALQgCAEgCAAQgCAAgBgFgAATBEIgIgMIg4AFIAAABQgBAHgDAAQgBAAgDgEQgDgFAAgFIABgGQACgGABgQIABgvQAAgOgCgGIgBgEQAAAAAAgBQAAAAAAAAQABAAAAgBQABAAAAAAQAFAAADACIABABQAXgCAZgFIARgEIAGADQAIAEAAADIgCAHIgCAtIACAtQAAAIgEAGQgDAFgEAAQgCAAgCgEgAgfgmIgLABQAABAgCAbQAZgCAQgDIAPgCIAIACIABABIAAgDIABgkIAAgwQAAgGgDAAIgGgBQgNAAgfAGgABLA9QgIgEAAgFQAAgGAFgEQAEgEAFAAIAIABQAAAAAAAAQAAgBABAAQAAgBAAAAQAAgBAAgBIAAgGQgOABgKACIgEgBIgBgDIACgBIAbgCIgBgGQgBgGgFgEQAAgBAAAAQAAAAABAAQAAgBABAAQABAAAAAAQAGABAAACIABAPIASgBQAFAAAAADQAAAAgBABQAAAAAAAAQgBABAAAAQgBAAgBAAIgGgBIgNAAIABALQAAAFgBAAIgKgDQgFAAgDADQgDADAAAFQAAADAFADQAFABAIAAQAFAAAOgEQAAAAABAAQAAAAAAAAQAAAAAAABQAAAAAAABQAAACgHACQgJADgEAAQgIAAgHgDgAgaApIgCgEIgDgTIgDgGIgBgBQAAAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAFAAIAEACIABAAIAEgBIADgSIgLABQgGAAgCgCIgCgCIADgBIASgDIABgMIgBgHIgBgCQAAgBAAAAQAAgBABAAQAAAAABAAQABAAAAAAQADAAAFACQAFADAAACIgCACQgCACgBAHIAAAEIAKgDQAEAAADACQABAAAAAAQABABAAAAQAAAAAAABQAAAAAAABIgDABIgOADIgEABIgEASIAMgDIACAAIAGACQAFADAAACIgCACQgDAEgBAFIgDAGIgBABIADADQAAAAAAAAQAAAAAAAAQgBABAAAAQAAAAgBAAIgUACIgHAAIgBADIgBACgAgMANIgLADIgBAAIABARIAUgDIADgQQAAAAgBAAQAAgBAAAAQgBAAAAAAQgBAAgBAAIgIAAgABQgBQgEgJgGgGQgDgDgBgCIACgEQANgUAAgBIgBgFIACgBIACABQABABABAAQAAAAABABQAAAAAAAAQABABAAAAQAAACgPAUQgBABAAAAQAAABgBABQAAAAAAABQAAAAAAABIACADQAMANAAAEIgCABIgDgBgABkgDQgGgLgDgEQgBgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIACgEQAMgTAAgCIgBgCQAAAAABAAQAAgBAAAAQAAAAAAAAQABAAAAAAIAEABIACADQgBABgOATIgCAEIACADQAMANAAADQAAABgBAAQAAABAAAAQAAAAgBAAQAAAAgBAAQAAAAAAAAQgBAAAAAAQgBAAAAgBQgBAAAAgBgABSg/QgCgDAAgCQAAgDACgDQAEgCACAAQADAAACACQADADABADQgBADgDACQgCADgDAAQgDAAgDgDg");
	this.shape_30.setTransform(-94.7772,7.6581,1.4998,1.4998);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#231815").s().p("AgfBNIgRgQIABAAIADAAIALABQABAAAAAAQABgBAAAAQABAAAAgBQABAAAAgBQACgEAAgZIgEACIgdAEIgGgBQgBAMgHAJQgEAHgIAFQgFAEgDAAIAAgBQAMgMAEgPQAEgLAAgaIgCgKQgHAKgIAHQgMAMgMAFQgHADgDAAIgCAAQAUgPAHgIQALgKAJgQIAJgTIgiAGQgFAAgFgCQgFgDAAgBIAEgCIAvgGIACgFQAEgNAAgIIAAgFIAAgEQAAAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQACAAAHAEQAFADAAACIgCAEIgIAWIA4gJIAHACQAIAFAAACQAAADgHAAQgeABgbADIgKABIgMAaIAZgDIAPgEIAEgBQACAAAHAEQAFADAAACIgBAEQgDAFAAAPIACAnQAAAMgEAHQgGAHgDAAQgBAAAAAAQAAgBgBAAQAAAAAAgBQgBAAAAgBgAhBAdIAYgEIADAAIAIAAIADACIAAgRIgEABIgUADIgIABIgFAAgAhAgFIABACIgBAGIAAAGIAXgEIADgBIAIABIADABIAAgJQAAgEgBgBIgDgBgAAqA1QASgLALgMIgRgLIABgBQACAAAOAHIACACIACgDQAHgKAAgDQAAAAAAgBQgBAAAAgBQgBAAAAAAQgBAAgBAAIgXADIgDgBQgBAAAAAAQgBgBAAAAQAAAAgBgBQAAAAAAAAQAAgBAAAAQABAAAAAAQAAgBABAAQAAAAABAAQAOAAAQgDIADAAIAEABQABAAAAABQABAAAAAAQAAABAAAAQAAABAAAAIgBACQgEAEgEAIIgFAHIARAMIAEAGQAAAAAAABQgBAAAAABQAAAAgBAAQAAABgBAAQgCAAgDgEIgQgOQgGAIgLAHQgLAGgEAAgABvAEIgJgTIAAAAIACACIALAKIAKgKIADgCIAAAAIgKATQgBAAAAABQAAAAgBABQAAAAAAAAQgBAAAAAAIgEgCgAAtgfIgDgDIACgBIAHABIAhgDIAEgBIAGABQABABAAAAQABAAAAAAQAAABABAAQAAAAAAABQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAgBAAIggAAIgLACg");
	this.shape_31.setTransform(-193.5555,9.0079,1.4998,1.4998);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12}]}).wait(1));

	// 圖層_4
	this.instance_1 = new lib.元件4("synched",0);
	this.instance_1.setTransform(3.85,-11.15);
	this.instance_1.alpha = 0.8008;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.ans, new cjs.Rectangle(-281.3,-158.2,584,234.39999999999998), null);


(lib.a1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		createjs.Touch.enable(stage);
		var xx = this.x;
		var yy = this.y;
		var x_temp;
		var y_temp;
		var ff;
		var dd;
		//-------------------------
		var add = 1;
		var copy = "a1"; //複制影片名稱
		var pt_b1 = this.localToLocal(this.dot.x, this.dot.y, this.parent.b1.hitBox);
		var pt_b2 = this.localToLocal(this.dot.x, this.dot.y, this.parent.b2.hitBox);
		if (this.parent.b1.hitBox.hitTest(pt_b1.x, pt_b1.y)) {
			dd = "b1";
			add = 0;
		}
		if (this.parent.b2.hitBox.hitTest(pt_b2.x, pt_b2.y)) {
			dd = "b2";
			add = 0;
		}
		//----------------------------
		this.on("mousedown", onMouseDown.bind(this));
		this.on("pressmove", onMouseMove.bind(this));
		this.on("pressup", onMouseUp.bind(this));
		//------------------------------------
		function onMouseDown(evt) {
			x_temp = this.x;
			y_temp = this.y;
			var item = evt.currentTarget;
			item.offset = {
				x: 0,
				y: 0
			};
			var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
			item.offset.x = pt.x - item.x;
			item.offset.y = pt.y - item.y;
			item.drag = true;
			item.scaleX = 0.8;
			item.scaleY = 0.8;
			this.parent.setChildIndex(item, this.parent.numChildren - 1);
			//---------------------------------
			var pt_b1 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b1.hitBox);
			var pt_b2 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b2.hitBox);
			if (this.parent.b1.hitBox.hitTest(pt_b1.x, pt_b1.y)) {
				ff = "b1";
			} else if (this.parent.b2.hitBox.hitTest(pt_b2.x, pt_b2.y)) {
				ff = "b2";
			}
			//--------------------------------------------
		}
		// mouse up event
		function onMouseUp(evt) {
			var item = evt.currentTarget;
			item.drag = false;
			//------------------------------------------------------------
			var pt_b1 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b1.hitBox);
			var pt_b2 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b2.hitBox);
			var pt_b0 = item.localToLocal(this.dot.x, this.dot.y, this.parent.b0.hitBox);
			var pt_m1 = item.localToLocal(this.dot.x, this.dot.y, this.parent.m1.hitBox);
			if (this.parent.b1.hitBox.hitTest(pt_b1.x, pt_b1.y)) {
				//item.mouseEnabled = false;
				dd = "b1";
				if (add == 1) {
					var mm = new lib[copy]();
					mm.name = copy + "_" + String(this.parent.numChildren - 1);
					mm.x = xx;
					mm.y = yy;
					//alert(mm.name);
					this.parent.ArrAdd(mm.name);
					this.parent.addChild(mm);
					//this.scaleX = 0.8;
					//this.scaleY = 0.8;
					this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) + 1);
					this.parent.show_ans();
					add = 0;
				} else {
					if (ff != dd) {
						this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) - 1);
						this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) + 1);
						this.parent.show_ans();
					}
				}
				this.scaleX = 0.8;
				this.scaleY = 0.8;
			} else if (this.parent.b2.hitBox.hitTest(pt_b2.x, pt_b2.y)) {
				dd = "b2";
				if (add == 1) {
					var mm = new lib[copy]();
					mm.name = copy + "_" + String(this.parent.numChildren - 1);
					mm.x = xx;
					mm.y = yy;
					this.parent.ArrAdd(item.name);
					this.parent.addChild(mm);
					//this.scaleX = 0.8;
					//this.scaleY = 0.8;
					this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) + 1);
					this.parent.show_ans();
					add = 0;
				} else {
		
					if (ff != dd) {
						this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) + 1);
						this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) - 1);
						this.parent.show_ans();
					}
				}
				this.scaleX = 0.8;
				this.scaleY = 0.8;
			} else if (this.parent.m1.hitBox.hitTest(pt_m1.x, pt_m1.y) && add == 0) {
		
				this.x = x_temp;
				this.y = y_temp;
		
			} else if (this.parent.b0.hitBox.hitTest(pt_b0.x, pt_b0.y) && add == 0) {
				this.parent.ArrDel(item.name);
		
				if (dd == "b1") {
					this.parent.ans.txt1.text = String(Number(this.parent.ans.txt1.text) - 1);
					this.parent.show_ans();
				} else if (dd == "b2") {
					this.parent.ans.txt2.text = String(Number(this.parent.ans.txt2.text) - 1);
					this.parent.show_ans();
				}
				this.parent.show_ans();
				this.parent.removeChild(this);
		
			} else {
				item.x = xx;
				item.y = yy;
				this.parent.show_ans();
			}
		
		}
		// mouse move event
		function onMouseMove(evt) {
			var item = evt.currentTarget;
			if (item.drag) {
				var pt = item.parent.globalToLocal(evt.stageX, evt.stageY);
				item.x = pt.x - item.offset.x;
				item.y = pt.y - item.offset.y;
			}
		}
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// dot
	this.dot = new lib.dot();
	this.dot.name = "dot";
	this.dot.setTransform(0,-1,0.2077,0.7638,0,0,0,0,-0.2);
	this.dot.alpha = 0.0117;

	this.timeline.addTween(cjs.Tween.get(this.dot).wait(1));

	// 圖層_1
	this.instance = new lib._1png複製();
	this.instance.setTransform(-24,-40);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.a1, new cjs.Rectangle(-24,-40,48.5,80), null);


(lib.答案按鈕影片 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		this.stop();
	}
	this.frame_1 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(1));

	// 圖層_1
	this.instance = new lib.顯示答案b1();
	new cjs.ButtonHelper(this.instance, 0, 1, 2, false, new lib.顯示答案b1(), 3);

	this.instance_1 = new lib.隱藏答案b1();
	this.instance_1.setTransform(0,0,0.9,0.9);
	new cjs.ButtonHelper(this.instance_1, 0, 1, 2, false, new lib.隱藏答案b1(), 3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance}]}).to({state:[{t:this.instance_1}]},1).wait(1));

	this._renderFirstFrame();

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-45.7,-25.5,93.2,57.6);


(lib.topic1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.stop();
		createjs.Touch.enable(stage); 
		
		this.help.visible = false;
		this.sum_ans.visible = false;
		this.ans.txt1.text="15";
		this.ans.txt2.text = "0";
		this.ans.txt3.text = String(Number(this.ans.txt1.text)+Number(this.ans.txt2.text));
		this.temp = [];
		//------------------
		//記錄所有影片坐標
		this.oo = function () {
			//記錄所有影的座標
			for (var i = 1; i <= 3; i++) {
				this["a" + i + "x"] = eval("this.a" + i).x;
				this["a" + i + "y"] = eval("this.a" + i).y;
				this["d" + i + "x"] = eval("this.d" + i).x;
				this["d" + i + "y"] = eval("this.d" + i).y;		
				this["e" + i + "x"] = eval("this.e" + i).x;
				this["e" + i + "y"] = eval("this.e" + i).y;
				this["h" + i + "x"] = eval("this.h" + i).x;
				this["h" + i + "y"] = eval("this.h" + i).y;		
				this["g" + i + "x"] = eval("this.g" + i).x;
				this["g" + i + "y"] = eval("this.g" + i).y;
				this["f" + i + "x"] = eval("this.f" + i).x;
				this["f" + i + "y"] = eval("this.f" + i).y;	
				//----------------
				this.temp.push("a"+i);
				this.temp.push("d"+i);
				this.temp.push("e"+i);
				this.temp.push("h"+i);
				this.temp.push("g"+i);
				this.temp.push("f"+i);
				//----------------------------
				this["a"+i].name = "a"+i;
				this["d"+i].name = "d"+i;
				this["e"+i].name = "e"+i;
				this["h"+i].name = "h"+i;
				this["g"+i].name = "g"+i;
				this["f"+i].name = "f"+i;
				//console.log(this["a" + i + "x"]);
			}
			for (var i = 1; i <= 2; i++) {
				this["j" + i + "x"] = eval("this.j" + i).x;
				this["j" + i + "y"] = eval("this.j" + i).y;		
				this["i" + i + "x"] = eval("this.i" + i).x;
				this["i" + i + "y"] = eval("this.i" + i).y;	
				//---------------------------
				this.temp.push("j"+i);
				this.temp.push("i"+i);
				//-------------------------------
				this["j"+i].name = "j"+i;
				this["i"+i].name = "i"+i;		
			}
			for (var i = 1; i <= 1; i++) {
				this["c" + i + "x"] = eval("this.c" + i).x;
				this["c" + i + "y"] = eval("this.c" + i).y;
				//-----------------------
				this.temp.push("c"+i);
				//-------------
				this["c"+i].name = "c"+i;	
				//console.log(this["a" + i + "x"]);
			}
			
		
		}
		this.oo();
		//--------------------------
		//help
		this.help_btn.on("click", onMouseClick_help.bind(this));
		this.help_btn.on("pressup", onMouseUp_help.bind(this));
		
		function onMouseClick_help(evt) {
			this.setChildIndex(this.help, this.numChildren - 1);
			this.help.visible = !this.help.visible;
		}
		function onMouseUp_help(evt) {
		
		}
		
		//重新建立所有影片
		this.init = function () {
			temp = [];
			var scale=0.8;
			this.ans.txt1.text = "15";
			this.ans.txt2.text = "0";
			this.show_ans();
			//------------------------------
			for (var i = 1; i <= 1; i++) {
				var mm = new lib.a1();
				mm.name = this["a" + i];
				mm.scaleX = 1;
				mm.scaleY = 1;
				mm.x = this["a" + i + "x"];
				mm.y = this["a" + i + "y"];
				this.ArrAdd(this["a" + i]);
				this.addChild(mm);
			}
			for (var i = 2; i <= 3; i++) {
				var mm = new lib.a1();
				mm.name = this["a" + i];
				mm.scaleX = scale;
				mm.scaleY = scale;
				mm.x = this["a" + i + "x"];
				mm.y = this["a" + i + "y"];
				this.ArrAdd(this["a" + i]);
				this.addChild(mm);
			}
			//------------------
			for (var i = 1; i <= 1; i++) {
				var mm = new lib.c1();
				mm.name = this["c" + i];
				mm.scaleX = 1;
				mm.scaleY = 1;
				mm.x = this["c" + i + "x"];
				mm.y = this["c" + i + "y"];
				this.ArrAdd(this["c" + i]);
				this.addChild(mm);
			}
		
			//------------------------------
			for (var i = 1; i <= 1; i++) {
				var mm = new lib.d1();
				mm.name = this["d" + i];
				mm.scaleX = 1;
				mm.scaleY = 1;
				mm.x = this["d" + i + "x"];
				mm.y = this["d" + i + "y"];
				this.ArrAdd(this["d" + i]);
				this.addChild(mm);
			}
			for (var i = 2; i <= 3; i++) {
				var mm = new lib.d1();
				mm.name = this["d" + i];
				mm.scaleX = scale;
				mm.scaleY = scale;
				mm.x = this["d" + i + "x"];
				mm.y = this["d" + i + "y"];
				this.ArrAdd(this["d" + i]);
				this.addChild(mm);
			}
		
			//------------------------------
			for (var i = 1; i <= 1; i++) {
				var mm = new lib.e1();
				mm.name = this["e" + i];
				mm.scaleX = 1;
				mm.scaleY = 1;
				mm.x = this["e" + i + "x"];
				mm.y = this["e" + i + "y"];
				this.ArrAdd(this["e" + i]);
				this.addChild(mm);
			}
			for (var i = 2; i <= 3; i++) {
				var mm = new lib.e1();
				mm.name = this["e" + i];
				mm.scaleX = scale;
				mm.scaleY = scale;
				mm.x = this["e" + i + "x"];
				mm.y = this["e" + i + "y"];
				this.ArrAdd(this["e" + i]);
				this.addChild(mm);
			}
			//------------------------------
			for (var i = 1; i <= 1; i++) {
				var mm = new lib.j1();
				mm.name = this["j" + i];
				mm.scaleX = 1;
				mm.scaleY = 1;
				mm.x = this["j" + i + "x"];
				mm.y = this["j" + i + "y"];
				this.ArrAdd(this["j" + i]);
				this.addChild(mm);
			}
			for (var i = 2; i <= 2; i++) {
				var mm = new lib.j1();
				mm.name = this["j" + i];
				mm.scaleX = scale;
				mm.scaleY = scale;
				mm.x = this["j" + i + "x"];
				mm.y = this["j" + i + "y"];
				this.ArrAdd(this["j" + i]);
				this.addChild(mm);
			}
			
			//------------------------------
			for (var i = 1; i <= 1; i++) {
				var mm = new lib.i1();
				mm.name = this["i" + i];
				mm.scaleX = 1;
				mm.scaleY = 1;
				mm.x = this["i" + i + "x"];
				mm.y = this["i" + i + "y"];
				this.ArrAdd(this["i" + i]);
				this.addChild(mm);
			}
			for (var i = 2; i <= 2; i++) {
				var mm = new lib.i1();
				mm.name = this["i" + i];
				mm.scaleX = scale;
				mm.scaleY = scale;
				mm.x = this["i" + i + "x"];
				mm.y = this["i" + i + "y"];
				this.ArrAdd(this["i" + i]);
				this.addChild(mm);
			}
			//------------------
			
			for (var i = 1; i <= 1; i++) {
				var mm = new lib.h1();
				mm.name = this["h" + i];
				mm.scaleX = 1;
				mm.scaleY = 1;
				mm.x = this["h" + i + "x"];
				mm.y = this["h" + i + "y"];
				this.ArrAdd(this["h" + i]);
				this.addChild(mm);
			}
			for (var i = 2; i <= 3; i++) {
				var mm = new lib.h1();
				mm.name = this["h" + i];
				mm.scaleX = scale;
				mm.scaleY = scale;
				mm.x = this["h" + i + "x"];
				mm.y = this["h" + i + "y"];
				this.ArrAdd(this["h" + i]);
				this.addChild(mm);
			}
			//------------------
			for (var i = 1; i <= 1; i++) {
				var mm = new lib.g1();
				mm.name = this["g" + i];
				mm.scaleX = 1;
				mm.scaleY = 1;
				mm.x = this["g" + i + "x"];
				mm.y = this["g" + i + "y"];
				this.ArrAdd(this["g" + i]);
				this.addChild(mm);
			}
			for (var i = 2; i <= 3; i++) {
				var mm = new lib.g1();
				mm.name = this["g" + i];
				mm.scaleX = scale;
				mm.scaleY = scale;
				mm.x = this["g" + i + "x"];
				mm.y = this["g" + i + "y"];
				this.ArrAdd(this["g" + i]);
				this.addChild(mm);
			}
			//------------------
			
			for (var i = 1; i <= 1; i++) {
				var mm = new lib.f1();
				mm.name = this["f" + i];
				mm.scaleX = 1;
				mm.scaleY = 1;
				mm.x = this["f" + i + "x"];
				mm.y = this["f" + i + "y"];
				this.ArrAdd(this["f" + i]);
				this.addChild(mm);
			}
			for (var i = 2; i <= 3; i++) {
				var mm = new lib.f1();
				mm.name = this["f" + i];
				mm.scaleX = scale;
				mm.scaleY = scale;
				mm.x = this["f" + i + "x"];
				mm.y = this["f" + i + "y"];
				this.ArrAdd(this["f" + i]);
				this.addChild(mm);
			}
			//------------------	
			this.qa_btn.gotoAndStop(0);
			this.ans_btn.gotoAndStop(0);
			this.sum_ans.visible = false;
			this.ans.visible = true;
			//---------------------------
		}
		/*
		this.addEventListener("tick", fl_CustomMouseCursor.bind(this));
		function fl_CustomMouseCursor(evt) {	
			evt.remove();  	
			alert("ddd");
		
		}*/
		//-------------------------------------------
		//解答
		this.ans_btn.on("click", onMouseClick_ans.bind(this));
		this.ans_btn.on("pressup", onMouseUp_ans.bind(this));
		
		function onMouseClick_ans(evt) {
		
			this.show_ans();
			var item = evt.currentTarget;
			if (item.currentFrame == 0) {
				this.sum_ans.visible = !this.sum_ans.visible;
				item.gotoAndStop(1);
			} else {
				this.sum_ans.visible = !this.sum_ans.visible;
				item.gotoAndStop(0);
			}
		
		}
		function onMouseUp_ans(evt) {
		
		}
		
		//解答
		this.show_ans = function () {
		    this.ans.txt3.text = String(Number(this.ans.txt1.text)+Number(this.ans.txt2.text));
			this.sum_ans.txt.text = String(Number(this.ans.txt1.text)) + "個小朋友";
		
		}
		this.show_ans();
		//--------------------------------------
		this.qa_btn.on("click", onMouseClick_qa.bind(this));
		this.qa_btn.on("pressup", onMouseUp_qa.bind(this));
		
		function onMouseClick_qa(evt) {
		
			var item = evt.currentTarget;
			if (item.currentFrame == 0) {
				this.ans.visible = !this.ans.visible;
				item.gotoAndStop(1);
			} else {
				this.ans.visible = !this.ans.visible;
				item.gotoAndStop(0);
			}
		
		}
		function onMouseUp_qa(evt) {
		
		}
		//----------------------
		this.cls_btn.on("click", onMouseClick_cls.bind(this));
		this.cls_btn.on("pressup", onMouseUp_cls.bind(this));
		
		function onMouseClick_cls(evt) {
			//alert(temp);
			for (i = 0; i < this.temp.length; i++) {
				this.removeChild(this.getChildByName(this.temp[i]));
		
			}
			this.init();
		}
		function onMouseUp_cls(evt) {
		
		
		}
		
		//-------------------------
		
		this.ArrAdd = function (ss) {
		
			this.temp.push(ss);
		
			//檢查是否有重複	
			//------------------------
			var i;
			var j;
			for (i = 0; i < this.temp.length - 1; i++) {
				for (j = i + 1; j < this.temp.length; j++) {
					if (this.temp[i] === this.temp[j]) {
						this.temp.splice(j, 1);
					}
				}
			}
			//---------------------------------
		
			//alert(temp);
		}
		this.ArrDel = function (ss) {
		
			for (i = 0; i < this.temp.length; i++) {
				if (this.temp.indexOf(ss) > -1) {
					this.temp.splice(this.temp.indexOf(ss), 1);
				}
			}
			//---------------------------------
		
			//alert(temp);
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// help
	this.help = new lib.使用說明help();
	this.help.name = "help";
	this.help.setTransform(-416.95,-322.95);

	this.timeline.addTween(cjs.Tween.get(this.help).wait(1));

	// 按鈕
	this.ans_btn = new lib.答案按鈕影片();
	this.ans_btn.name = "ans_btn";
	this.ans_btn.setTransform(127.2,211.4,1,0.9989,0,0,0,-0.4,-0.9);

	this.help_btn = new lib.使用說明b1();
	this.help_btn.name = "help_btn";
	this.help_btn.setTransform(313.55,212.3,1,0.9989);
	new cjs.ButtonHelper(this.help_btn, 0, 1, 2, false, new lib.使用說明b1(), 3);

	this.cls_btn = new lib.重新佈題b1();
	this.cls_btn.name = "cls_btn";
	this.cls_btn.setTransform(220.6,212.3,1,0.9989);
	new cjs.ButtonHelper(this.cls_btn, 0, 1, 2, false, new lib.重新佈題b1(), 3);

	this.qa_btn = new lib.題目按鈕影片();
	this.qa_btn.name = "qa_btn";
	this.qa_btn.setTransform(34.2,211.5,1,0.9989,0,0,0,-0.4,-0.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.qa_btn},{t:this.cls_btn},{t:this.help_btn},{t:this.ans_btn}]}).wait(1));

	// 拉的物件
	this.a2 = new lib.a1();
	this.a2.name = "a2";
	this.a2.setTransform(-74.5,66.05,0.8,0.8);

	this.d3 = new lib.d1();
	this.d3.name = "d3";
	this.d3.setTransform(-53.75,55.75,0.8,0.8);

	this.f3 = new lib.f1();
	this.f3.name = "f3";
	this.f3.setTransform(-30.75,36.15,0.8,0.8);

	this.g2 = new lib.g1();
	this.g2.name = "g2";
	this.g2.setTransform(-152.05,64.6,0.8,0.8);

	this.f2 = new lib.f1();
	this.f2.name = "f2";
	this.f2.setTransform(-130.45,55.4,0.8,0.8);

	this.g3 = new lib.g1();
	this.g3.name = "g3";
	this.g3.setTransform(-113.1,36.15,0.8,0.8);

	this.h2 = new lib.h1();
	this.h2.name = "h2";
	this.h2.setTransform(-218.05,66.95,0.8,0.8);

	this.d2 = new lib.d1();
	this.d2.name = "d2";
	this.d2.setTransform(-202.05,58.3,0.8,0.8);

	this.e3 = new lib.e1();
	this.e3.name = "e3";
	this.e3.setTransform(-180.45,39.35,0.8,0.8);

	this.j2 = new lib.j1();
	this.j2.name = "j2";
	this.j2.setTransform(-289.65,61.65,0.8,0.8);

	this.i2 = new lib.i1();
	this.i2.name = "i2";
	this.i2.setTransform(-274.05,50.3,0.8,0.8);

	this.a3 = new lib.a1();
	this.a3.name = "a3";
	this.a3.setTransform(-251.45,38.95,0.8,0.8);

	this.e2 = new lib.e1();
	this.e2.name = "e2";
	this.e2.setTransform(-358.05,67.15,0.8,0.8);

	this.j2_1 = new lib.j1();
	this.j2_1.name = "j2_1";
	this.j2_1.setTransform(-339.65,54.35,0.8,0.8);

	this.h3 = new lib.h1();
	this.h3.name = "h3";
	this.h3.setTransform(-328,36.95,0.8,0.8);

	this.j1 = new lib.j1();
	this.j1.name = "j1";
	this.j1.setTransform(310.95,77.05);

	this.i1 = new lib.i1();
	this.i1.name = "i1";
	this.i1.setTransform(248.45,76.55);

	this.h1 = new lib.h1();
	this.h1.name = "h1";
	this.h1.setTransform(310.95,-14.15);

	this.g1 = new lib.g1();
	this.g1.name = "g1";
	this.g1.setTransform(248.45,-11.15);

	this.f1 = new lib.f1();
	this.f1.name = "f1";
	this.f1.setTransform(310.45,-107.5);

	this.c1 = new lib.c1();
	this.c1.name = "c1";
	this.c1.setTransform(253,136.1);

	this.e1 = new lib.e1();
	this.e1.name = "e1";
	this.e1.setTransform(248.45,-103.05);

	this.d1 = new lib.d1();
	this.d1.name = "d1";
	this.d1.setTransform(310.45,-195.75);

	this.a1 = new lib.a1();
	this.a1.name = "a1";
	this.a1.setTransform(246,-194.75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.a1},{t:this.d1},{t:this.e1},{t:this.c1},{t:this.f1},{t:this.g1},{t:this.h1},{t:this.i1},{t:this.j1},{t:this.h3},{t:this.j2_1},{t:this.e2},{t:this.a3},{t:this.i2},{t:this.j2},{t:this.e3},{t:this.d2},{t:this.h2},{t:this.g3},{t:this.f2},{t:this.g2},{t:this.f3},{t:this.d3},{t:this.a2}]}).wait(1));

	// b0
	this.b0 = new lib.反應區b0();
	this.b0.name = "b0";
	this.b0.setTransform(283.8,-53);

	this.timeline.addTween(cjs.Tween.get(this.b0).wait(1));

	// b1
	this.b2 = new lib.Symbol6();
	this.b2.name = "b2";
	this.b2.setTransform(76.95,-17.5,0.2929,0.8448,0,0,0,-204.8,-75);

	this.b1 = new lib.Symbol6();
	this.b1.name = "b1";
	this.b1.setTransform(-375.75,9.9,0.8843,0.6078,0,0,0,-204.8,-75);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.b1},{t:this.b2}]}).wait(1));

	// 圖層_2
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s().p("AvxW5QgWgBgTgEIgpgJQgTgEgSAEIgoAJQgYAFgTgKQgEgBgBgEIgBgEIABgEQACgEAEgBQAEgBAEABQANAHAQgEIApgJIAAAAQAWgEAXAFIABAAIAoAJQASAEAUAAQAUABAPgDIABAAQAQgDAZgBIABAAQAYgBASgCQAEAAAEADQADACAAAEIAAABQAAAEgCADQgDADgEAAQgTACgZABQgXABgQADIABAAQgOADgRAAIgKgBgALZW1IgogIQgSgEgTABQgUACgSADQgSAEgcgDQgFAAgCgDQgDgDAAgEIAAAAQABgEADgDQADgDAEAAQAZACAQgDIABAAQASgDAVgCIAAAAQAWgBAUAEIApAIQATAEAQgFIAAAAQAUgGAUgBQATAAAWABIAAAAQASACARgEIABAAQAVgGAaALQAEACACAEIAAADIAAAEQgCAEgEACQgEABgDgBQgUgIgQADQgUAGgWgDQgUgBgSAAQgSABgRAFIAAAAQgMAEgNAAQgKAAgKgCgABOWzQgSgFgTABIgpADIgiABIgogBQgcAAgSgDQgQgDgSAEQgFABgDgCQgEgCAAgEIgBgDQAAgCACgDQACgDAEgBQAXgFATADQARADAaAAIAoABIAhgBIAogDQAXgCAWAGQARAFAUgCIAAAAIAogFQAEgBADACQADADABAEIAAABQAAAEgBACQgDAEgEAAIgoAGIgBAAIgPABQgPAAgPgEgAF9WzQgSgEgRAAIAAAAQgUACgXgGQgUgEgRAEQgTAGgYgBQgWgBgPABQgEABgDgDQgDgDgBgEIAAgBQAAgDADgDQADgDAEgBQAQgBAXABQAUAAARgEQAVgGAZAGQAVAEARgBIAAAAQATAAAVAEIAAAAQASAEATgBIABAAIAoAAIABAAQASAAASgFIAAAAQAWgFAZAFQAEABADADQABADAAACIAAACQgBAEgDADQgEACgEgBQgUgEgRAFQgVAGgWgBIAAAAIgoAAIAAAAIgIABQgRAAgRgEgAoNWzQgUgEgSAAQgSABgTADQgVAEgWgHQgEgBgCgEIgCgFIABgCQABgEAEgCQADgCAEABQASAFARgDQAUgDATgBIABAAQATAAAXAFQAUAEASgDQAVgEAVgBQAEAAADADQADADAAAEIAAAAQAAAEgCADQgDADgEAAQgUABgTADQgKACgKAAQgNAAgNgDgAO1WwQgEgBgCgEIgCgFIABgCQABgEADgCQAEgCAEABQAVAFAOgBIAogEIAqgBIABAAIAnAAIApABIAAAAQATABAUgCQAEAAADADQADADAAAEIAAAAQAAAEgCADQgDADgEAAQgUACgVgBIgogBIgoAAIAAAAIgpABIgnAEIgIAAQgPAAgTgFgAs5WzQgTgCgUgBQgEAAgDgDQgDgCAAgFQAAgEADgDQADgDAEAAQAVAAAVADQASADATgDIAngFIAAAAQATgDAWACIAAAAQAVADAVAAQAEABADACQACADAAAEIAAABQAAAEgDADQgDADgEgBQgWAAgVgDIAAAAQgUgBgQACIgnAFQgLACgLAAQgLAAgKgCgA1MWdIAAAAIgMgNQgHgFgEgGIgCgCIAAAAQgKgKgOgVQgCgDABgEQAAgEAEgCIAEgCIADAAQAEABADADQAMATAJAJIAAAAIAaAaIAAABQANAOAUgBIApgBIAAAAIAnAAQAEABADACQACADAAAEIAAABQAAAEgDADQgDADgEgBIgmAAIgpABIgBAAQgcAAgTgUgAS9WwQgEAAgDgDQgDgDAAgEIAAAAQAAgEAEgDQADgDAEAAIAhABIApgBIABAAQAQgBAVgGIAAAAQAVgGANgKIABAAQANgKAIgPIAAgBQAIgOABgSQAAgEADgDQADgDAEAAIAAAAQAEAAADADQADADAAAEQgBAXgKATIAAAAQgLAUgRAMIAAAAQgQAMgYAHIAAAAQgYAHgTABIgqABIgigBgAkGWwIgoAAIgmAAIgrAAIAAAAIgkAAQgEAAgDgDQgDgCAAgFQAAgEADgDQADgDAEAAIAkAAIABAAIApAAIAAAAIAnAAIAAAAIAoAAIAmABIAtgBQAEAAADADQADADAAAEIAAAAQAAAEgCADQgDADgEAAIguABIgmgBgA14VTQgFgBgCgDQgDgDABgEQACgTgCgPIAAgBQgBgQADgZQADgWgDgTIAAgBQgCgTgDgWIAAAAQgEgWgBgYQgBgZAHgRIAAAAQAFgNgDgRQgBgEACgDQACgDAEgBIACgBQADAAADACQADACABAEQAFAYgIASIAAAAQgFANABAUQABAXADAVQAEAWACAUQADAWgDAYQgDAWABAPIAAAAQACASgCAVQgBAEgDADQgDACgCAAIgBAAIgBAAgAVyU8QgDgDAAgEIgBgoQgBgUAAgVIAAAAIADgpIAAAAIAEgsIAAAAQACgUgFgOQgIgSADgWIABAAQADgRgFgUQgGgYAGgUIAAAAQAEgRAAgXQAAgEADgDQADgCAEgBQAEABADACQADADAAAEQAAAagFATQgEAQAFATQAFAYgEAUIAAAAQgCAQAFAOQAHASgCAZIgEAsIgDAoIAAAAIABAnIABAoQAAAEgCADQgDADgEAAIgBAAIAAAAQgEAAgDgCgA14QlIgCAAQgEgBgCgEQgCgDABgEQACgLgDgXQgFgaAAgUIAAgmIAAAAQgBgWADgUIABAAQADgSgBgTQAAgEADgEQADgCAEgBIAAAAQAEAAADADQADADAAAEQABAVgEAUIAAAAQgDASABAUIAAAAQABAVgBATQAAARAEAZQAFAdgEANQgBAEgEACIgFABIAAAAgAVyO9QgDgCAAgFQAAgNgEgZIAAAAQgDgaABgTIAAAAIADglIAAAAQADgTgCgSQgBgTAGgYQAFgTgCgSIgBgBQgDgTgFgUQgGgZAKgWQACgEAEgBIADgBIAFABQADACACAEQABAEgCAEQgHAQAFARQAFAVADAUIAAAAQAEAWgGAYQgGAUABARQACATgDAVIgDAkIAAABQgBARADAXQAEAbAAAOQAAAFgDACQgDADgEAAQgEAAgDgDgA1/NEQgDgCAAgFIAAgoQgBgTgCgSIgBAAQgCgTABgYQABgWACgSQADgRgBgVIAAAAQAAgXADgVIAAgBQADgTgDgRIAAgBIgDgnQAAgEADgDQADgDAEgBIAAAAQAEAAADADQADADAAAEIADAmQADAVgDAVQgDAVAAAVIAAAAQABAXgDASQgCARgBAVQgBAWACARIAAAAQADATABAVIAAAoQAAAFgDACQgDADgEAAQgEAAgDgDgAV1JpQgEgBgBgEQgJgYAFgVIAIgkIAAAAQADgRAAgWIAAAAQABgVgGgQIAAgBQgGgTACgUIAAgBQACgSgBgbQAAgEADgEQADgCAEgBIAAAAQAEAAADADQADADAAAEQABAdgCATIAAAAQgCARAFAPIAAAAQAHATgBAZIAAAAQAAAZgEASIgIAlQgDAPAHASQABAEgCADQgBAEgEACIgEAAIgEgBgA14HwQgFAAgCgDQgDgDAAgEQACgXgBgSIgBgmIAAgBIABgoIABglIAAgBQAAgSgCgUIAAAAQgCgVABgWIABgpIAAgoQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIAAAoIgBAqQgBAVACAUQACAUAAATIAAAAQAAAUgBATIgBAnIAAAAIABAmQABATgCAYQAAAEgDADQgDACgEAAIAAAAIAAAAgAV5FjIAAAAQgEAAgDgDQgDgDAAgEIACgpIACgnIAAAAIABgoQAAgSgCgVIgGgpIAAAAQgDgXACgSIABAAQACgQABgXQAAgXgCgTIAAAAQgBgUgDgQIAAAAQgDgUAKgYQACgEAEgCIADgBIAEABQAEACACAEQABADgBAEQgIATACAPIAAAAQADARABAUQACAVAAAYQgBAZgDARIAAgBQgCAQADATIAAAAIAGAqQACAVAAAUIgBApIgCAnIgCApQAAAEgDADQgDACgEAAIAAAAgA14CZQgCABgDgCQgDgCgBgEQgGgWgBgVQAAgUAEgVIAAAAQADgSgCgVQgCgWACgSQACgSAAgUIABgpQABgTgDgTQAAgEACgEQADgDAEgBIABAAQAEAAACACQAEADAAAEQADAVgBAVIgBAoQAAAVgCATQgCAQACAUQACAYgEAVQgDASAAATQABATAFATQABAEgCADQgCAEgEABIgCAAIgBAAgAV5hCIgCAAQgEgBgCgEQgCgDABgEQADgRgCgYIgFgmIAAgBIgEgkIAAAAQgBgYAFgUQAEgQgEgTQgGgVAAgaQAAgZAFgWIAHgkIAAgBQACgNgEgQQgBgEACgEQACgDAEgCIACAAIAFABQAEACABAEQAGAVgEATIAAgBIgHAlQgEAUAAAXQAAAXAFAUQAGAXgFAVQgFARABAVIAEAiIAAAAQACAOADAaQACAcgEATQgBAEgDACQgDACgDAAIAAAAgA15iUQgEAAgCgDQgDgDAAgFQACgRgFgOQgGgRABgZQAAgXAHgcQAFgXgCgPIgGgiQgFgVADgWIAEgsIACgkQAAgEADgDQADgDAEAAQAEAAADADQADADAAAEIgCAlIgEAuQgDATAEARIAHAjQACARgGAdQgGAZAAAWQgBAUAFAPQAGASgCAVQAAAFgDACQgDADgEgBIAAAAIgBAAgAVznEQgEgDAAgEQgBgcgDgPIAAAAQgEgRAIgXQAFgSgCgTQgDgWACgSQACgQgCgUIgCgrIAAAAIAAgtQgBgYABgNQABgEADgDQADgCADAAIABAAQAEAAADADQADAEgBAEQgBAMABAXIAAAtIACApQACAWgCASQgCAQADATQADAYgHAWQgGARADANQADAQABAfQAAAEgCADQgDADgEAAIgBAAIAAAAQgEAAgCgDgA19nsQgEgCAAgEQgEgOACgaQABgWgCgYQgCgaAEgQIAAAAQACgMgFgRIAAAAQgHgVAEgaIABAAQADgWgBgRIAAAAQgCgSAGgXQAAgEAEgDQADgBACAAIADAAQAEABACAEQACADgBAEQgFAUACAPIAAABQABASgEAZIAAAAQgDAVAFARIAAABQAHAXgEAQIAAgBQgDAOACAXQACAZgBAYQgCAVADANQABAEgCADQgCAEgEABIgDAAIAAAAQgDAAgCgCgA15sYQgEgBgCgDQgDgDAAgEQADgYgFgUQgHgZAHgTQAEgNgEgOIAAAAQgFgSAFgXIAAAAQAEgSgEgUQgFgXADgYIAAAAQADgVABgSQAAgEAEgDQACgCAEAAIABAAQAEAAADADQADADgBAEQgBATgDAWIAAAAQgDAUAEAUQAFAZgFAVQgDARAEAPIgBgBQAGAUgGAUQgFAOAFASQAGAYgDAbQAAAEgDADQgDACgEAAIAAAAIgBAAgAVysbQgDgDAAgEIAAgtIAAgBQABgQgBgTIAAAAQgBgSgDgRQgEgTACgYIAAAAQADgWABgWIABgoQABgRgBgVQgBgWACgSQABgEADgDQADgCADAAIACAAQAEAAACAEQADADgBAEQgCARABAUQABAWgBASIgBAoQgBAXgDAWIAAAAQgCAVADAQQAEASABAUQABAUgBARIAAAtQAAAEgCADQgDADgEAAIgBAAIAAAAQgEAAgDgDgA14xGIgDgBQgEgBgBgEQgCgDABgEQAHgWgCgQQgEgSgBgTQgCgTAAgZIAAgkIAAgBQABgMAFgZIAAgBQAEgUgIgTIAAAAIgBgEIABgCIAAgCIAAgCQgBgEACgDQALgTAEgRQAEgXARgNIAAAAQAPgMATgHQARgHAUgEIAAAAQAVgFAYADQAVADATAAIABAAIAnAAQAEAAADADQADADAAAEIAAAAQAAAEgCADQgDADgEAAIgpAAQgUAAgWgDQgVgCgSADQgSAFgQAGQgQAGgNAKIAAAAQgLAJgDAOQgDAQgJARQABADAAAEQAAADgDAFQAHAWgFAXIAAAAQgEAXgBAMIAAAkQAAAYACASQABATADARQAEATgJAcQgCAEgDACIgEABIgBAAgAVyxxQgDgDAAgEIABgsQABgRgEgXQgGgaAEgTQADgQABgQQAAgEAEgDQACgCAEAAIABAAQAEAAADADQADADgBAEQgBASgDARQgDAQAEAVQAFAZgBAUIgBArQAAAEgDADQgDADgEAAQgEAAgDgDgAV50kIgCgBQgEgBgCgDQgCgEABgEQAHgXgGgQQgHgQgJgMIAAAAIgUgaIAAAAQgJgLgTgCQgWgBgSAAIAAAAQgUABgXgCIgogBQgEAAgDgDQgDgDAAgEIAAAAQAAgEAEgDQACgDAFAAIAoABIABAAQAVACATgBIAAAAQATgBAYACIAAAAQAcADANARIABAAIAUAbIAAAAQAKAOAIATQAJAUgJAgQgBAEgEACIgFABIAAAAgArZ2aIAAAAQgPgFgUAAIgsADQgZACgTgBQgUAAgTgDQgEgBgDgDQgCgDAAgDIABgCQAAgEADgCQAEgDAEABQASADATAAQASABAXgCIAugDQAXAAASAGIAAAAQAOAFAPgFIAAAAQASgFAZAAIAAAAIAuABIAAAAQAUABAOgCQAEgBADADQADACABAEIAAACQAAADgBADQgDADgEABQgPACgXgBIAAAAIgtgBQgWAAgQAFIAAgBQgKADgJAAQgLAAgKgDgAiA2aQgRgEgWAAIgsAAIghAAQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAhAAIAsAAIAAAAQAZAAATAFQAQADATgCIABAAQAVgBAUgDQAWgDAWAFIAAAAQARAEAPgFQAUgIAZAFQAUAFASgDIABAAQAVgDAVABQAEAAADADQACADAAAEIAAAAQAAAEgDADQgDADgEAAQgTAAgUACQgWADgXgFQgTgFgPAGQgVAIgWgFIgBAAQgSgFgSADQgVADgWABIgOABQgPAAgNgDgAmq2bQgPgDgTACQgWAEgYgEQgWgCgTAAQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAQAUAAAXACIABAAQAVADATgDQAXgDASAEQAQADARgBIAqgEIAAAAIAqgEQATgCAWAFQAEABACAEIABAFIAAACQgBAEgEACQgDADgEgBQgSgFgPACIgrAEQgYADgTABIgIABQgPAAgPgDgAN82hQgOgGgOAEIAAgBQgTAGgWAAQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAQATAAARgFIAAAAQAVgFAVAJQAPAIASgDIAsgFQAYgCAVABIAmACIAAAAQARABAWAAIAqgBIApAAQAEAAADADQADADAAAEIAAAAQAAAEgCADQgDADgEAAIgqAAIgpABQgYAAgSgBIglgCQgUgBgWACIgrAFIgLABQgSAAgQgIgALO2cQgTgEgWgBIgjAAIgkgBIgpABIgsACIgpABQgEAAgDgDQgDgDAAgEQAAgEADgDQADgDAEAAIAogBIABAAIArgCIAAAAQAVgBAWAAIAAAAIAiABIAlAAQAYACAUAEIABAAQASAEAVgEQAYgEAPABQAEAAADADQACADAAAEIAAABQAAAEgDACQgDADgEAAQgOgBgVAEQgMACgLAAQgMAAgMgDgAw12eIAAAAIglgDQgNgBgYAEQgEABgDgDQgEgCAAgEIgBgCQAAgDACgDQACgDAFgBQAbgFAPACIAkADIABAAQAXABASgCIABAAQAUgBASAAIAAAAQASABAVgCQAYgCAWAFQAEABACAEQABACAAADIAAACQgBAEgDACQgEADgEgBQgSgEgVABQgXADgSgCIgBAAQgRAAgTABIgYACIgVgBgADd2eQgRgBgZABQgEAAgDgDQgEgDAAgEIAAAAQAAgEADgDQADgDAEAAQAagBASABIAgAAIAoAAIABAAIAsAAIAAAAQAUAAAQgDQARgDAXADQAUADAXAAQAEAAADADQADADAAAEQAAAEgDADQgDADgEAAQgZAAgVgDQgTgDgPADQgRADgWAAIgtAAIgnAAIgMABIgWgBg");
	this.shape.setTransform(136.5955,46.5797,0.4383,0.45);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF99").s().p("ASxWoIAAgBQAAgEgEgDQgDgDgEABQgTABgUgBIAAAAIgpAAIgngBIAAAAIgrACIgnADQgPABgVgFQgDgBgEACQgEACgBAEIAAADIgDAAIgBgEQgBgEgEgCQgbgKgVAFIAAAAQgRAFgTgCIAAAAQgVgCgTABQgVAAgTAGIgBAAQgQAFgTgDIgogIQgUgEgWABIAAAAQgVABgTAEIAAAAQgQADgZgCQgEgBgEADQgDADAAAEIAAABIgDAAQAAgDgCgDQgCgDgEgBQgZgFgWAFIAAABQgSAFgTgBIAAAAIgpABIAAAAQgTABgSgFIAAAAQgVgEgTABIgBAAQgQABgVgFQgZgGgVAGQgRAFgVgBQgWAAgQABQgFAAgCADQgDADAAAEIgDAAIAAgCQgBgEgDgDQgEgCgEABIgnAFIAAAAQgUADgSgFQgVgGgXACIgoADIghABIgogBQgagBgRgCQgUgEgWAFQgEABgCADQgCADAAADIgCAAIAAgBQAAgEgDgDQgDgCgEAAIgtAAIgmAAIgpgBIAAAAIgmABIAAAAIgqAAIAAAAIgkAAQgEAAgDADQgDADAAAEIgCAAIAAgBQAAgEgDgDQgDgCgEAAQgVAAgVAEQgSADgVgEQgWgFgUABIAAAAQgTABgUADQgRACgSgFQgEgBgEACQgDACgBAEIgBADIgDAAQAAgEgDgDQgDgDgEAAQgVgBgUgCIAAAAQgWgCgTACIgBAAIgmAGQgTADgSgDQgVgDgVAAQgEAAgDADQgDADAAAEIgDAAIAAgBQAAgEgEgDQgDgDgEABQgTACgYAAIAAAAQgZABgRAEIAAAAQgPADgUgBQgUgBgSgEIgpgJIAAAAQgYgFgWAEIAAAAIgoAJQgQAEgOgGQgDgCgEABQgEACgCADIgBAFIgCAAQAAgEgDgDQgDgDgEAAIgngBIAAAAIgpABQgUABgNgOIAAAAIgagaIABAAQgJgJgNgTQgCgEgEgBIgDAAIgBgCQADAAADgCQADgCABgEQACgWgCgRIAAAAQgBgQADgWQADgYgDgVQgCgVgEgWQgEgVAAgWQgBgVAFgNIAAAAQAHgRgEgYQgBgEgEgCQgCgCgDAAIAAgCIAFgCQADgCABgDQAFgOgFgdQgEgYAAgSQABgTgBgUIAAgBQgBgTADgTIAAABQADgUAAgWQAAgEgDgDQgDgCgEAAIAAgCQAEAAADgDQADgDAAgEIgBgpQAAgVgDgTIAAABQgCgSABgVQABgWACgRQADgSgBgXIAAAAQAAgVADgUQADgWgDgUIgDgnQAAgEgDgDQgDgCgEAAIAAgDQAEAAACgDQAEgCAAgEQACgZgBgSIgBgmIAAAAIABgnQABgUAAgTIAAAAQAAgTgDgVQgBgUABgVIABgpIAAgoQAAgEgDgDQgDgDgEAAIAAgDIADgBQAEgBACgDQACgEgBgEQgFgTgBgTQgBgSAEgTQAEgVgCgXQgCgVACgQQACgSAAgVIABgpQABgVgDgVQgBgEgDgCQgDgCgDAAIAAgCQADAAADgCQAEgDAAgEQACgWgGgSQgFgPABgUQAAgWAGgZQAGgcgDgRIgGgkQgEgRADgTIAEguIACgkQAAgEgDgDQgDgDgEAAIAAgDIACAAQAEgBACgEQADgDgBgEQgDgMABgWQACgYgCgZQgCgXADgNIAAAAQAEgQgHgXIAAAAQgFgSADgVIAAABQAEgZgCgTIAAAAQgBgQAFgTQABgEgDgEQgCgEgEAAIgCgBIAAgCQADAAADgCQAEgDAAgEQADgbgGgYQgFgSAEgOQAHgUgGgTIAAAAQgEgOAEgSQAFgVgFgYQgEgUACgUIAAAAQAEgWABgTQAAgEgDgEQgCgDgFAAIAAAAIAAgCIAFgBQADgCABgEQAJgcgDgTQgDgRgBgSQgCgTAAgXIAAgkQAAgMAFgXIAAgBQAFgXgHgWQADgEgBgEQABgEgBgCQAJgSADgPQADgPALgJIAAAAQANgKAPgGQARgGASgFQASgDAUACQAXADAUAAIAoAAQAEAAADgDQADgDAAgEIADAAIAAACQABAEADACQAEADAEgBQAYgEAMABIAmADIAAAAQAZACAUgCQATgCARABIAAAAQATABAXgCQAVgCASAEQAEABADgCQAEgCABgEIAAgDIADAAQAAADACADQACAEAFAAQATADAUABQATAAAYgCIAtgCQATgBAPAFIABAAQATAHAVgGIgBAAQARgEAWgBIAsABIABAAQAXACAPgDQAEgBACgDQACgDAAgDIADAAQAAAEADADQADADAEAAQATAAAWADQAYADAWgDQATgDAPADQASAEAUgBQATgBAYgDIAqgFQAQgCARAFQAEABAEgCQAEgCABgEIAAgDIADAAQAAAEADADQADADAEAAIAhAAIArAAQAXABARADQATAFAXgCQAWgCAUgDQATgCASAEIAAAAQAXAGAVgIQAPgGASAEQAYAFAWgDQAUgCATAAQAEAAADgDQADgCAAgFIAAAAIADAAIAAABQAAAEADACQADADAFAAQAZgBARABQARABAQAAIAogBIAtAAQAWAAARgDQAPgDATADQAVADAZAAQAEAAADgDQADgDAAgEIACAAQAAAEADADQADADAEAAIApgBIAsgCIApAAIAjAAIAjABQAXABATAEQAWAEAZgEQAVgEANABQAEABAEgDQADgDAAgEIAAgBIADAAQAAAEADADQADADAEAAQAWAAATgFIgBAAQAPgEAOAHQAUAKAYgDIAsgFQAWgDAUABIAlACQASACAXgBIAqAAIApgBQAEAAADgDQADgDAAgEIADAAQAAAEADADQADADAEAAIAoACQAXABATgBIAAAAQATAAAWACQASACAKAKIAAAAIAUAaIAAAAQAJAMAGAQQAGAQgGAYQgCADACAEQACAEAEABIADAAIAAACQgEAAgDADQgDADAAAEQgBAQgDAQQgEASAFAaQAFAXgBASIgBArQAAAEADADQADADAEAAIAAACQgDAAgDADQgEACAAAEQgCASABAWQABAVgBARIgCApQAAAVgDAWIAAAAQgDAYAEATQAEARABASIAAAAQABATgBARIAAAAIAAAtQAAAFADACQADADAEAAIAAADQgEAAgDADQgDACAAAFQgBAMABAZIAAAsIAAABIACAqQABAUgBAQQgDASAEAXQACASgFASQgIAXAEARIAAABQADAOABAcQAAAFADACQADADAEAAIAAADIgDABQgEABgCADQgCAEACAEQAEAQgDANIAAABIgHAlQgEAVAAAZQAAAaAFAWQAFASgEARQgFATABAYIAAABIADAkIABAAIAFAmQACAYgEARQgBAEADADQACAEAEABIACAAIAAADIgEAAQgEACgBAEQgKAYADAUIAAABQADAQABATIAAAAQACAUAAAXQgBAXgDAPIAAABQgDASADAWIABABIAGAoQACAVAAATIgBAnIAAABIgCAmIgCAqQAAAEADADQADADAEAAIAAAAIAAADIAAAAQgEAAgDADQgDADAAAEQAAAcgCASIAAAAQgBAUAGAUIAAAAQAFAQAAAVIAAAAQAAAWgEARIAAABIgIAjQgEAVAJAYQABAEAEACIAEABIAAACIgDAAQgEACgCADQgLAXAHAYQAFAVADATIAAAAQADASgFATQgHAYACAUQABARgCATIAAAAIgDAlIAAABQgCASAEAbIAAAAQAEAYAAAOQAAAEADADQADADAEAAIAAACQgEAAgDADQgDADAAAEQAAAWgFARIAAAAQgFAUAGAZQAEATgDARIAAAAQgDAWAHASQAGAPgDATIAAAAIgDAsIAAAAIgDApIAAABQgBAUABAUIACAoQAAAEADADQADADAEAAIAAACIAAAAQgEAAgDADQgDADAAAEQgBASgIAPIAAAAQgIAPgOAKIAAAAQgOAKgUAGIgBAAQgUAHgRAAIAAAAIgpABIghAAQgFAAgDACQgDADAAAEIAAABg");
	this.shape_1.setTransform(136.6066,46.5217,0.4383,0.45);

	this.instance = new lib.未命名1();
	this.instance.setTransform(-388,-48,1.0086,1.0086);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance},{t:this.shape_1},{t:this.shape}]}).wait(1));

	// m1
	this.m1 = new lib.元件33();
	this.m1.name = "m1";
	this.m1.setTransform(-312.6,-211.85);

	this.timeline.addTween(cjs.Tween.get(this.m1).wait(1));

	// 中線
	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#6E6464").ss(1.5,1,1,3,true).p("EAjdAg3QAAgHAAgGMAAAhBTQAAgGAAgHQAFhzBThUQBYhYB8AAINRAAQB3ADBWBVQBYBZAAB7MAAABBTQAAB8hYBYQhYBYh8AAItKAAQh8AAhYhYQhThUgFhzgEAjdgg2QgEhzhThUQhYhYh8AAMhUEAAAQh8AAhYBYQhYBZAAB7MAAABBTQAAB8BYBYQBYBYB8AAMBUEAAAQB8AABYhYQBThUAEhz");
	this.shape_2.setTransform(-17.05,-58.55);

	this.timeline.addTween(cjs.Tween.get(this.shape_2).wait(1));

	// 圖層_23
	this.sum_ans = new lib.答案1();
	this.sum_ans.name = "sum_ans";
	this.sum_ans.setTransform(78,-137.1,1,1.0013);

	this.timeline.addTween(cjs.Tween.get(this.sum_ans).wait(1));

	// 題目
	this.ans = new lib.ans();
	this.ans.name = "ans";
	this.ans.setTransform(-100,-228.25);

	this.timeline.addTween(cjs.Tween.get(this.ans).wait(1));

	// 數學工具文字
	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("ABABYQgPgIgMgLQgGgFAAgDQAAgJAKAAQADAAADADQAZATAZAKQAGADAAAFQABAKgLAAQgDAAgagOgAhqBdQAAgFAEgDQAigNAXgTIAFgCQAIAAAAAIQAAAFgEACQgTATgjAQIgGABQgKAAAAgJgAhiAwQgIAAAAgJQAAgJAIAAIAQAAIAAh0QAAgPAPAAICGAAQAQAAABAPIAAB0IAPAAQAIAAAAAJQAAAJgIAAgAhBAeICDAAIAAgUIiDAAgAhBgDICDAAIAAgTIiDAAgAhBgkICDAAIAAgSIiDAAgAhBhPIAAALICDAAIAAgLQABgGgIAAIh2AAQgGAAAAAGg");
	this.shape_3.setTransform(319.25,-266.925);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AhfBaQgJAAAAgIQAAgIAJAAIBXAAIAAiTIhMAAQgIAAAAgIQAAgIAIAAICqAAQAIAAAAAIQAAAIgIAAIhNAAIAACTIBYAAQAIAAAAAIQAAAIgIAAg");
	this.shape_4.setTransform(293.975,-266.675);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AgsBjQgHgDAAgGQAAgJAHAAQAbAHAHAAIAJgBQAEgCADgDQAEgEAAgDQAAgGgCgEIhpAAQgHAAAAgIQAAgHAHAAIBhAAIgBgBQgFgEgGgDIgCgBQABgJAIAAIAFABIADACIAOgDIAMgFIAEgDQAAAAAAAAQAAgBgBAAQAAAAgBAAQgBAAgBAAIhVAAQgHAAAAgIQAAgHAHAAIBnAAQAOAAAAAKQAAACgEAEQgHAFgMAGIgYAJIAFAGIBMAAQAIAAAAAHQAAAIgIAAIhFAAIABAKQAAAIgGAJQgFAHgIAEQgIACgJAAQgPAAgUgGgAhnAVIAAgaQAAgMAMAAIAIAAIgFhDQAAgJAEgEQADgEAIAAQAQgBAPgCQAHgBAAAJQAAAHgIABIgaACQgFgBAAAGIABALIAbAAQAGAAAAAGQAAAHgGABIgZAAIABANIAaAAQAHAAAAAHQAAAHgHAAIgZAAIABAMICGAAIABgMIgZAAQgGAAAAgIQAAgGAGgBIAbAAIABgNIgeAAQgGAAAAgIQAAgGAGAAIAgAAIACgNQAAgCgFAAIgdAAQgGgBAAgGQAAgHAGAAIAlAAQANAAAAALIgJBIIAGAAQAJAAAFAGQAEAFAAAKQAAAHgCAKQgCAGgIAAQgIAAAAgIIADgOQAAgIgHABIiiAAQgGAAAAADIAAAUQAAAIgIAAQgIAAAAgIgAgfgcQAAgDADgBIARgIIgNgGQAAAAgBgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAgGAHAAIAEAAIARAIIAQgLIAEgCQAHAAAAAHQAAAEgDADIgJAHIALAGIABAFQAAAGgGABQgEAAgDgDIgNgHIgXALIgFABQgGABAAgJgAgkhEQAAgEAEgBIARgJIgNgFIgBgFQAAgGAGAAIAEABIARAHQAIgFAGgHIAFgBQAHgBAAAIQAAADgEADIgJAHIALAIIACAEQAAAHgGAAQgEAAgEgCIgLgIQgLAHgNAFIgEACQgHAAAAgIg");
	this.shape_5.setTransform(268.925,-267.05);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s().p("ABdBoQgRgMgLgKQgIgHgHgKIgFAGQgRATgWAMIgGACQgJAAAAgJQAAgEAEgCQAYgPAPgSIAGgHIgLgaQgGgTgEgTIgJAPQgDADgDAAQgIAAAAgIIABgEQALgUAFgZQADgUAAgWQAAgIAIAAQAJAAAAAIIgBAWIA+AAQAIABAAAHQAAAJgIAAIgIAAQAAAOgEAWQgDAZgIAXQgFANgGALQAHALALAKQAHAHANAJQAHACAAAGQAAAJgJAAIgDgBgAAdgxIgEARIAAAAQAFAAADAGQAFAbAGASIAFAOQAFgIADgKQAKgZACgvIgnAAIgBAIgAhNBlQgGgCAAgGQAAgHAGgBQAOAFAEAAQADAAACgCQAEgBACgEQACgEAAgEIgBgRQgVAFgdACQgGAAgBgIQAAgGAHgBQAdgCAQgDIABAAIgBgDIgHgJIAAgCQAAgIAIAAIADACIAFAFIAIgFIAGgGIADgEQAAAAAAAAQgBgBAAAAQAAAAgBAAQAAAAgBAAIgkAAIgCgBQgLAKgNAIQgDACgDAAQgCAAgDgDQgCgCAAgDQAAgDADgCQATgNAPgNIAQgSIgtAAQgHAAAAgIQAAgHAHAAIAgAAIAAgbIgbAAQgHAAAAgGQAAgIAHABIAbAAIAAgRQAAgIAIAAQAIAAAAAIIAAARIATAAQAGgBABAFIAGgRQACgEAGAAQADgBACACQACACAAAEIgBAEQgIAbgMATIAQAAQAGAAAAAHQAAAIgGAAIgZAAQgKAOgMALIAmAAQAMgBAAAJQAAADgDAEQgEAGgJAIQgIAHgJAFIAhgGIADgBQAFAAAAAGQAAAEgEACQgNAFgUAEQABAJAAAKQAAAIgEAJQgEAHgGADQgGADgIAAQgIAAgKgEgAgwgnIAHAAIADgFQAHgKAFgMIgDAAIgTAAg");
	this.shape_6.setTransform(243.775,-267.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.lf(["#666666","#999999"],[0,1],0,-8.7,0,9.3).s().p("Ao2COIAAkbIRtAAIAAEbg");
	this.shape_7.setTransform(281.85,-267.7);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#B7B7B7").s().p("ApVCtIAAgPIAAk6IAAgQISsAAIAAFZgApGCeISNAAIAAk6IyNAAg");
	this.shape_8.setTransform(281.85,-267.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.lf(["#666666","#CCCCCC"],[0,1],0,-15.7,0,15.8).s().p("ApGCdIAAk5ISNAAIAAE5gAo2CNIRtAAIAAkaIxtAAg");
	this.shape_9.setTransform(281.825,-267.675);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3}]}).wait(1));

	// 圖層_7
	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF0000").s().p("AgEB/QgEgFAAgLQgDgiACgWQgcAAgtALQgGACgIgCQgGgCgFgFQgGgGAIgBIBggLIABgWIgYADIgFAAQAAAJgFgBIgCAAQgNgKgBgTQgHghgJgNQgEgDACgCQAAgBABAAQAAAAABAAQAAgBABABQAAAAABAAQAKABAJAGIAdgFIAQgDIAAgVQgGAAgEABQgRAEgOgIQgIgGAMgBQATgBASgDIAAgOQgBgLgJgHQgEgEAEgCQAEgFAGACQAMAEAIAGQAHAEgDAFQgFAIAAAKIAQgFQAKgDAJACQAJADACADQABADgDACQgBACgOADIgeAFIgCAVQAOgDALgBQATgFAGAEQARAKAGAGQAGAGgHAFQgNAKgGASQgJASgDAEQgDAFgFAAQgEAAgCgFIAAgBIgbACIgBAVIBEgLQAOgCASAOQAGAFgCAEQgCADgHAAIgRgBQgugBggADQgBA+gEALQgCAEgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBgAgvggIAFAgQADAFABAHIAegEIAAgJIAAgJIgOACQgFABgDgCQgGgEAFgCIAXgGIAAgTQgXADgQAFgAAjAGQAFgIAHghQACgJgDgBQgGgEggAGIAAARIAKAAQAIACADAEQADAEgHABIgRACIAAASIAJgDIAGAAQAHAAAFAEg");
	this.shape_10.setTransform(149.3964,-40.5351);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF0000").s().p("AgLBoQgHgKgCgOQgBgFABgFQACgFAAgKIADgYQAFhogIgIQgpAEgbAJQgLAEgQgLQgHgFABgEQAAgFAFAAQAUAAAbgDIB0gNQARgCALgEQAJgCAGACQAPAGALAKQAEAFgDAEQgCADgIgBQg2gGg6AHQALAIgBAGQgCAKAAAUQAAAAAAAAQAAAAABAAQAAAAAAAAQABAAAAAAIABABQA2ANAGARQAGANgDAEQgCAEgDAAQgFgBgGgGQgagUgVgPIgDgDIAAB1QACALgFAMQgCAFgEAAIgHgJg");
	this.shape_11.setTransform(121.3713,-40.0694);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#6E6464").ss(1.5,1,1,3,true).p("EAjdgg2QAFhzBThUQBYhYB8AAINRAAQB3ADBWBVQBYBZAAB7MAAABBTQAAB8hYBYQhYBYh8AAItKAAQh8AAhYhYQhThUgFhzQAAgHAAgGMAAAhBTQAAgGAAgHgEAjdAg3QgEBzhTBUQhYBYh8AAMhUEAAAQh8AAhYhYQhYhYAAh8MAAAhBTQAAh7BYhZQBYhYB8AAMBUEAAAQB8AABYBYQBTBUAEBz");
	this.shape_12.setTransform(-17.05,-58.55);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#E7EDF1").s().p("EAoJAlVQh8AAhYhXQhThUgFhzIAAgOMAAAhBRIAAgOQAFhzBThUQBYhXB8gBINRAAQB3ADBWBVQBXBZAAB8MAAABBRQAAB8hXBZQhZBXh7AAgEg1SAlVQh8AAhXhXQhZhZABh8MAAAhBRQgBh8BZhZQBXhXB8gBMBUEAAAQB8ABBXBXQBUBUAEBzIAAAOMAAABBRIAAAOQgEBzhUBUQhXBXh8AAgEAjdAg3IAAAAg");
	this.shape_13.setTransform(-17.05,-58.55);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10}]}).wait(1));

	// 圖層_18
	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AgGAxQABgFAFgBIgBgUQgBgFgCgFQAAgBAAAAQAAAAAAAAQgBgBAAAAQAAAAgBAAIgXABQgBAAgBAAQAAAAAAAAQAAAAgBABQAAAAABAAIAHAKQAEAFAEACIADAAIAGgHIADAJQABAKgBABIgBAAQgNgCgKgJQgJgIgFgMIgJAAQgDgBAAgEQAAgEADAAIAHAAIABgBIgBgCQAAgJAFgIIgEgBQgDABgCgDQgCgDACgFQACgEAGACQAAAAAAAAQABAAAAABQABAAAAAAQAAABABAAIABACIABABIACgEIADAAIAYAAQABAAAAAAQABAAAAgBQAAAAAAAAQABgBAAAAQAAgBgBAAQAAgBAAAAQAAAAAAgBQgBAAAAAAIgWAAQAHgIAQgCIAAgLIAKAAIAAALQAPACAGAIIgVAAQAAAAgBAAQAAABAAAAQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAQAAABABAAQAAAAABAAIAZAAIACAAIACAEIABgBIABgCQABAAAAgBQAAAAABAAQAAgBABAAQAAAAABAAQAEgCAEAEQABAFgCADQgDADgDgBIgCABQADAIAAAJIAAACIABABIAHAAQADAAAAAEQAAAEgDABIgJAAQgEAMgKAIQgKAJgNACIgBAAQgBgBACgKIABgJIAHAHIADAAQADgCAFgFQAEgEAEgGQAAAAAAAAQAAgBgBAAQAAAAAAAAQgBAAAAAAIgYgBQgBAAAAAAQAAAAgBABQAAAAAAAAQAAAAAAABQgDAFgBAFIgBAUQAHABAAAFQgBAHgGAAQgGAAAAgHgAgLgCQAHAIADANIABAJIABgJQAEgNAIgIIALgLIgEABQgIADgMAAIgNgBIgGgCIgDgBQACACAJAJgAALABQAAABAAAAQAAAAAAAAQAAABAAAAQABAAAAAAIAWAAQACgBgBgHQgBgHgCgCQAAgBAAAAQAAAAgBAAQAAAAAAAAQAAAAAAAAQgFABgFAFIgBACIAFAAQAEAAAAAEQAAADgGAAIgKAAgAgfgOQgCACgBAHQgBAHACABIAWAAQAAAAABAAQAAAAAAgBQAAAAAAAAQAAAAAAgBIgCgBIgJAAQgHAAAAgDQAAgEAEAAIAFAAIgBgCQgFgFgEgBIgBAAIgBABgAgcgTQgBACAJADQALAEAJAAQAKAAALgEQAKgDgCgCIgDAAIgzAAg");
	this.shape_14.setTransform(-287.15,192.625);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AmkDKQB5ilCQhlQCThoCkggIAFgBQABAAAAAAQABAAAAAAQABAAAAAAQAAABAAAAIgCACIgFADQguAagjBAQgjBAgBA6QCMjBDwgUIgEAEQiXARhzBhQg7AygoA/IgXAAQgBgoARg0QAYhNA2gxQidAsh6BhQh0BbhjCZg");
	this.shape_15.setTransform(-346.95,212.9667);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AhyAtQAAgGABgEIAGgQQgSAPgLAHQgRAKgNAAQgLAAgIgHQgIgHAAgNQAAgNAJgNQAJgPAPgJQAQgMASgFQARgGAYgBIAgACQAAAAABAAQAAAAAAABQABAAAAAAQAAABAAAAIgBACQgJANgIAPQgJASgEAKIgGARQAAAAAAABQAAAAABABQAAAAAAABQABAAAAAAQACACAEgCIAxgkQAhgYAUgMIAOgGIAJgBIACAAIACABQAAAAABAAQAAAAAAABQAAAAABABQAAAAAAABQAAAEgHANIgMAWIAXgTQANgKAPgHQAQgHANAAQAMAAAAAHIgOAhQgPAggCAJQgCAKAqgZIA9gnQgyAjgYAQQgtAcACgZQAAgOATgnQAEgIAAgEQAAAAAAAAQAAgBgBAAQAAAAAAgBQAAAAgBAAIgDgBIgKACIgNAHIgRALQgHAFgJAJQgJAJgKATIgJATIgVgBIAghCIAGgOQABgGgFAEQgZAPhKA5QgMAJgHADQgJADgEAAQgHAAAAgGgAh+gkQgMAFgJAKQgJAIgGAMQgFALAAAKQAAAJAEAEQAEAEAFAAQAFAAAOgHQANgHALgLQAIgHAEgIQAFgHAJgVIAEgHQgLgDgJAAQgOAAgLAFg");
	this.shape_16.setTransform(-314.225,210.425);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("ArCBMQgVgIADgcQACgLALggIAFgQQAAgCgJgCQgFgBADgDIAFgCQAPgGAKACQABABABAAQAAAAABABQAAAAAAABQAAAAAAABQAAAEgCAFIgVAuQgOArASADQAgAGCzguQEFhCEUgdQHKgvC7BwQAiAVABAOQAAAJgMADIguAFQALgEADgIQAIgPgigTQjFhonSAyQkEAdjgA3QhnAagvAIQggAGgRAAQgKAAgFgCg");
	this.shape_17.setTransform(-217.4427,206.6864);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#CCCCCC").ss(4,1,1,3,true).p("EA5ggr5Mhy/AAAQh8AAhYBXQhYBXAAB8MAAABOfQAAB8BYBXQBYBXB8AAMBy/AAAQB8AABYhXQBYhXAAh8MAAAhOfQAAh8hYhXQhYhXh8AAg");
	this.shape_18.setTransform(-17,-40);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("Eg5eAr6Qh9AAhYhXQhYhYAAh7MAAAhOfQAAh8BYhWQBYhYB9AAMBy9AAAQB9AABYBYQBYBWAAB8MAAABOfQAAB7hYBYQhYBXh9AAg");
	this.shape_19.setTransform(-17,-40);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.topic1, new cjs.Rectangle(-417,-386.4,800.1,630.8), null);


// stage content:
(lib.i45_1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	this.actionFrames = [0];
	this.isSingleFrame = false;
	// timeline functions:
	this.frame_0 = function() {
		if(this.isSingleFrame) {
			return;
		}
		if(this.totalFrames == 1) {
			this.isSingleFrame = true;
		}
		this.clearAllSoundStreams();
		 
		/* stop();
		fscommand("fullscreen", "true");*/
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1));

	// css
	this.instance = new lib.an_CSS({'id': '', 'href':'assets/font.css'});

	this.instance.setTransform(50,11,1,1,0,0,0,50,11);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	// 圖層_1
	this.oo = new lib.topic1();
	this.oo.name = "oo";
	this.oo.setTransform(417.1,322.9);

	this.timeline.addTween(cjs.Tween.get(this.oo).wait(1));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(399.5,219.5,400.70000000000005,346.5);
// library properties:
lib.properties = {
	id: 'A7BB7914CF9E214DB9A2CBF472B17E6D',
	width: 800,
	height: 566,
	fps: 12,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"images/未命名1.png", id:"未命名1"},
		{src:"images/_3.png", id:"_3"},
		{src:"images/_1png複製.png", id:"_1png複製"},
		{src:"images/_5.png", id:"_5"},
		{src:"images/_8.png", id:"_8"},
		{src:"images/key01.png", id:"key01"},
		{src:"images/key20.png", id:"key20"},
		{src:"images/key11.png", id:"key11"},
		{src:"images/key30.png", id:"key30"},
		{src:"images/key21.png", id:"key21"},
		{src:"images/key10.png", id:"key10"},
		{src:"images/key41.png", id:"key41"},
		{src:"images/key50.png", id:"key50"},
		{src:"images/key51.png", id:"key51"},
		{src:"images/key60.png", id:"key60"},
		{src:"images/key61.png", id:"key61"},
		{src:"images/key70.png", id:"key70"},
		{src:"images/_2.png", id:"_2"},
		{src:"images/key80.png", id:"key80"},
		{src:"images/key81.png", id:"key81"},
		{src:"images/key71.png", id:"key71"},
		{src:"images/key91.png", id:"key91"},
		{src:"images/keyx0.png", id:"keyx0"},
		{src:"images/key90.png", id:"key90"},
		{src:"images/keyx2.png", id:"keyx2"},
		{src:"images/key40.png", id:"key40"},
		{src:"images/keyx1.png", id:"keyx1"},
		{src:"images/key31.png", id:"key31"},
		{src:"images/key00.png", id:"key00"},
		{src:"images/Image_0.png", id:"Image_0"},
		{src:"images/_7.png", id:"_7"},
		{src:"images/_6.png", id:"_6"},
		{src:"images/_4png複製.png", id:"_4png複製"},
		{src:"https://code.jquery.com/jquery-3.4.1.min.js", id:"lib/jquery-3.4.1.min.js"},
		{src:"components/sdk/anwidget.js", id:"sdk/anwidget.js"},
		{src:"components/ui/src/css.js", id:"an.CSS"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['A7BB7914CF9E214DB9A2CBF472B17E6D'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}			
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;			
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});			
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;			
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
function _updateVisibility(evt) {
	if((this.stage == null || this._off || this._lastAddedFrame != this.parent.currentFrame) && this._element && this._element._attached) {
		this._element.detach();
		stage.removeEventListener('drawstart', this._updateVisibilityCbk);
		this._updateVisibilityCbk = false;
	}
}
function _handleDrawEnd(evt) {
	if(this._element && this._element._attached) {
		var props = this.getConcatenatedDisplayProps(this._props), mat = props.matrix;
		var tx1 = mat.decompose(); var sx = tx1.scaleX; var sy = tx1.scaleY;
		var dp = window.devicePixelRatio || 1; var w = this.nominalBounds.width * sx; var h = this.nominalBounds.height * sy;
		mat.tx/=dp;mat.ty/=dp; mat.a/=(dp*sx);mat.b/=(dp*sx);mat.c/=(dp*sy);mat.d/=(dp*sy);
		this._element.setProperty('transform-origin', this.regX + 'px ' + this.regY + 'px');
		var x = (mat.tx + this.regX*mat.a + this.regY*mat.c - this.regX);
		var y = (mat.ty + this.regX*mat.b + this.regY*mat.d - this.regY);
		var tx = 'matrix(' + mat.a + ',' + mat.b + ',' + mat.c + ',' + mat.d + ',' + x + ',' + y + ')';
		this._element.setProperty('transform', tx);
		this._element.setProperty('width', w);
		this._element.setProperty('height', h);
		this._element.update();
	}
}

function _tick(evt) {
	this._lastAddedFrame = this.parent.currentFrame;
	var stage = this.stage;
	stage&&stage.on('drawend', this._handleDrawEnd, this, true);
	if(!this._updateVisibilityCbk) {
		this._updateVisibilityCbk = stage.on('drawstart', this._updateVisibility, this, false);
	}
}
function _componentDraw(ctx) {
	if(this._element && !this._element._attached) {
		this._element.attach($('#dom_overlay_container'));
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused){
			stageChild.syncStreamSounds();
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;