"use strict";
//* Asynchronous Typescript;
Object.defineProperty(exports, "__esModule", { value: true });
function task1(inamBack) {
    setTimeout(() => {
        console.log("Task One Is Complete");
        inamBack();
    }, 900);
}
function task2(inamBack) {
    setTimeout(() => {
        const message = "Task Two Is Complete";
        console.log(message);
        inamBack(undefined, message);
    }, 700);
}
function task3(message, inamBack) {
    setTimeout(() => {
        console.log(`Task Three Is Complete with message: ${message}`);
        inamBack();
    }, 500);
}
function executeTasksSequentially() {
    task1((error) => {
        if (error) {
            console.log(`error is found ${error}`);
            return;
        }
        task2((error, message) => {
            if (error) {
                console.log(error);
                return;
            }
            if (message) {
                task3(message, (error) => {
                    if (error) {
                        console.log(error);
                        return;
                    }
                    console.log(" all work done");
                });
            }
        });
    });
}
//* executeTasksSequentially();
const showMessage = (inamBack) => {
    console.log(inamBack());
};
const firstMessage = (inamBack) => {
    setTimeout(() => {
        showMessage(() => "Muhammad");
        inamBack();
    }, 2000);
};
//? Promises
const promise = new Promise((resolve, reject) => {
    const randomCode = Math.floor(Math.random() * 10);
    console.log(randomCode);
    if (randomCode >= 5) {
        resolve("Data get succesful");
    }
    else {
        reject("some went wrong!");
    }
});
promise
    .then((value) => {
    console.log(value);
})
    .catch((error) => {
    console.log(error);
});
//? Aother Method to resolve and reject promise;
const firstPromise = new Promise((resolve, rejects) => {
    setTimeout(() => {
        resolve("Data get succesfull!");
    }, 2000);
});
const secondPromise = new Promise((resolve, rejects) => {
    setTimeout(() => {
        rejects("Data get Wrong  Wow");
    }, 1500);
});
Promise.all([firstPromise, secondPromise])
    .then((data) => {
    console.log(`${data[0]}\n${data[1]}`);
})
    .catch((error) => {
    console.log(error);
});
function myName(callback) {
    console.log("prpcess my name...");
    setTimeout(() => {
        console.log("My name is Inam");
    }, 5000);
    callback();
}
function myAge(callback) {
    console.log("my age process");
    setTimeout(() => {
        console.log(`my age is `);
        callback(2);
    });
}
function process(age, callback) {
    console.log("all work is done");
    callback();
}
let names = ['Muhammad', 'inam', 'GenAI'];
let loop = names.map((curElem) => {
    return curElem.toString();
});
console.log(loop);
myName(() => {
    myAge(() => {
        process(12, () => {
            console.log("all doin owsome");
        });
    });
});
const st1 = {
    name: "Muhammad",
    gender: "Male",
    age: 18
};
console.log(st1.name);
console.log(st1['gender']);
