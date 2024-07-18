//*   function writeDocument (callback: () => void) {
//*       console.log('write a document few Sec.../.');
//*       const randomTime:number = Math.floor(Math.random() * 3300)
//*       let documentW = randomTime;
//*       setTimeout(() => {
//*           if ( documentW === randomTime ) {
//*               console.log('document write succefull..')
//*           } else {
//*               console.log('some went wrong')
//*           }
//*       }, 8000)

//*       callback()
//*   }

//*   function analyzeDocument (callback: (mistakeDocument: string) => void) {
//*       const mistake = "Ecrypted"
//*       setTimeout(() => {
//*           console.log('DOCUMENT ANALYZE STARTED./.../');
//*       console.log(`DOCUMENT ANALYZE OK BUT ONE MISTAKE GOTED ${mistake}`)
//*   }, 10000);
//*   callback(mistake)
//*   }

//*   function uploadedData (callback: () => void) {
//*       setTimeout(() => {
//*           console.log('document uploading started../..');
//*           console.log('document uploaded')
//*       }, 2000);
//*       callback()
//*   }
//*   function finallly (mistake:string) {
//*       setTimeout(() => {
//*           console.log(mistake)
//*       }, 15000)
//*   }

//*   writeDocument(() => {
//*       analyzeDocument(() => {
//*           uploadedData(() => {
//*               finallly("Descrypt passwords")
//*           })
//*       })
//*   })

//*  function firstTask(callback: () => void) {
//*    setTimeout(() => {
//*      console.log("1 task compltete");
//*      callback();
//*    }, 5000);
//*  }

//*  function SecondTask(callback: () => void) {
//*    setTimeout(() => {
//*      console.log("2 task compltete");
//*      callback();
//*    }, 3500);
//*  }

//*  function thirdTask(callback: () => void) {
//*    setTimeout(() => {
//*      console.log("3 task compltete");
//*    callback();
//*    }, 2500)
//*  }

//*  function fourthTask(callback: () => void) {
//*    setTimeout(() => {
//*      console.log("4 task compltete");
//*    callback();
//*    }, 1000)
//*  }


//*  console.log('my work is started')

//*  firstTask(() => {
//*    SecondTask(() => {
//*      thirdTask(() => {
//*        fourthTask(() => {
//*          console.log("compltede");
//*        });
//*      }); 
//*    });
//*  });

//*  console.log('my nwork is pendding')

const showMessage = (callback: () => string) => {
    console.log(callback())
}

const firstName = (callback: () => void) => {
    setTimeout(() => {
        showMessage(() => "Inam")
        callback()
    }, 3000)
}

firstName(() => {
    console.log('name find')
})
