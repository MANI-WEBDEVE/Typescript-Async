//* Asynchronous Typescript;

function task1(inamBack: (error?: Error) => void): void {
  setTimeout(() => {
    console.log("Task One Is Complete");
    inamBack();
  }, 900);
}

function task2(inamBack: (error?: Error, message?: string) => void): void {
  setTimeout(() => {
    const message = "Task Two Is Complete";
    console.log(message);
    inamBack(undefined, message);
  }, 700);
}

function task3(message: string, inamBack: (error?: Error) => void): void {
  setTimeout(() => {
    console.log(`Task Three Is Complete with message: ${message}`);
    inamBack();
  }, 500);
}

function executeTasksSequentially(): void {
  task1((error?: Error) => {
    if (error) {
      console.log(`error is found ${error}`);
      return;
    }
    task2((error?: Error, message?: string) => {
      if (error) {
        console.log(error);
        return;
      }
      if (message) {
        task3(message, (error?: Error) => {
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

const showMessage = (inamBack: () => string) => {
  console.log(inamBack());
};

const firstMessage = (inamBack: () => void) => {
  setTimeout(() => {
    showMessage(() => "Muhammad");
    inamBack();
  }, 2000);
};

//? Promises

const promise = new Promise((resolve, reject) => {
  const randomCode: number = Math.floor(Math.random() * 10);
  console.log(randomCode);
  if (randomCode >= 5) {
    resolve("Data get succesful");
  } else {
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

function myName(callback: () => void) {
  console.log("prpcess my name...");
  setTimeout(() => {
    console.log("My name is Inam");
  }, 5000);
  callback();
}

function myAge(callback: (age: number) => void) {
  console.log("my age process");
  setTimeout(() => {
    console.log(`my age is `);
    callback(2);
  });
}

function process(age: number, callback: () => void) {
  console.log("all work is done");
  callback()
}

let names:string[]|number[] = ['Muhammad', 'inam',  'GenAI']

let loop = names.map((curElem) => {
  return curElem.toString()
})

console.log(loop)


myName(() => {
  myAge(() => {
    process(12,() => {
      console.log("all doin owsome")
    });
  });
});



type Student = {
  name: String;
  gender: String;
  age:number;
}
 const st1:Student = {
  name:"Muhammad",
  gender:"Male",
  age: 18
 }
 console.log(st1.name)
 console.log(st1['gender'])









