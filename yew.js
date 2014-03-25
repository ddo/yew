module.exports = yew;

function yew(fn) {
    var gen_obj = fn();

    //start iterator
    next();

    function next(last_data) {
        var yield_data = gen_obj.next(last_data);

        if(yield_data.done) {
            // console.log('done');
            return;
        }

        //is array
        if(!yewable(yield_data.value)) {
            return next(yield_data.value);

        //yew able
        } else {
            convertToFunction(yield_data.value)(function() {
                return next(arguments);
            });
        }
    }
}

/*
    yewable
    @return {Boolean}
*/
function yewable(arg) {
    if(!arg instanceof Array)
        return false;

    if(!arg.length)
        return false;

    if(typeof arg[0] !== 'function')
        return false;

    return true;
}

/*
    convertToFunction
    @param {Array} args

    @return {Function}
*/
function convertToFunction(args) {
    //get function
    var fn = args[0];

    //slice the 1st arg, since its a function
    args = args.slice(1);

    //converted function
    return function(callback) {
        args.push(callback);

        fn.apply(this, args);
    };
}
