console.log("ピラミッドを表示します");

// console.log("段数");

let receive = parseInt(prompt("段数"));

//空白のための変数
let blank = 0;

for(let i = 0; i <= receive; i++){

    //i回目の値を入れる変数
    let repetiton = (i - 1) * 2 + 1;

    //receive回目の値を入れる変数
    let max = (receive - 1) * 2 + 1;

    //ピラミッドの左側に空白を入れる
    if(max != repetiton){

        //maxの値からピラミッドに使用する*を引いた数の半分
        blank = (max - repetiton) / 2;

        for(let j = 0; j < blank; j++){
            console.log(" ");
        }
    }

        let sum = 0;

    for(let j = 1; j <= repetiton; j++){
        process.stdout.write("*");

    }

    console.log();
}

