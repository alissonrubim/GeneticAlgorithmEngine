/********************************************************
    Thread System
********************************************************/
GAEngine.Thread = new Object();
GAEngine.Thread.Thread = function (args) {
    var NPrivate = {}, NPublic = this;

    NPublic.OnLoop = null;
    NPublic.Params = null;
    NPublic.Delay = 0;

    NPrivate.isAlive = false;
    NPrivate.isPaused = false;
    NPrivate.interval = null;

    NPublic.Constructor = function (args) {
        NPublic.OnLoop = args.OnLoop;
        NPublic.Params = args.Params;
        NPublic.Delay = args.Delay || NPublic.Delay; 
        return NPublic;
    }

    NPublic.Start = function(){
        NPrivate.isAlive = true;
        NPrivate.isPaused = false;

        var _tick = function(){
            if(NPrivate.isAlive){
                if(NPrivate.isPaused){
                    NPrivate.interval = setTimeout(_tick, 1);
                }else{
                    NPublic.OnLoop();
                    NPrivate.interval = setTimeout(_tick, NPublic.Delay);
                }
            }
        }

        NPrivate.interval = setTimeout(_tick, 0);
    }

    NPublic.Stop = function(){
        NPrivate.isAlive = false;
    }

    NPublic.Pause = function(){
        NPrivate.isPaused = true;
    }

    NPublic.Continue = function(){
        NPrivate.isPaused = false;
    }

    return NPublic.Constructor(args);
};