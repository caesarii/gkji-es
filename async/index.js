function AsyncRun(taskGenerator) {
    let task = taskGenerator();

    let result = task.next();

    function step() {
        if (!result.done) {
            if (typeof result.value === "function") {
                result.value(function(err, data) {
                    if (err) {
                        result = task.throw(err);
                        return;
                    }

                    result = task.next(data);
                    step();
                });
            } else {
                result = task.next(result.value);
                step();
            }
        }
    }
    step();
}

function readFile(filename) {
    return function(callback) {
            fs.readFile(filename, callback);
    };
}

run(function*() {
    let contents = yield readFile("config.json");
    doSomethingWith(contents);
    console.log("Done");
});