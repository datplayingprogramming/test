// let a = Number(prompt("Nhập số a: "))
// let b = Number(prompt("Nhập số b: "))
// let tong = 0

// for (let i = a; i <= b; i ++)
// {
//     if (i %2 !== 0)
//     {
//         tong = tong + i
//     }
// }
// console.log("Tổng các số lẻ từ a đến b là: ", tong)

// let n = Number(prompt("Nhập năm: ")) 
//     if (((n %4 === 0) && (n %100 !== 0)) || (n %400 === 0))
// {
//     console.log("Đây là năm nhuận.")
// }
// else {
//     console.log("Đây không phải năm nhuận, vui lòng thử lại")
// }    

// Vừa gà vừa chó
// Bó lại cho tròn
// 36 con
// 100 chân chẵn
// Hỏi nhiêu gà nhiêu chó

// x + y = 36
// 2x + 4y = 100

// x= 36 - y
// 2x + 4y = 100
// 2(36 - y) + 4y = 100
// 72 - 2y + 4y = 100
// 2y = 28
// y = 14
// x = 36 - 14 = 22
// x = 22
// y = 14

// for (let ga = 1; ga <= 36; ga ++)
// {
//     if (ga*2) + (36 - ga)*4 === 100
//     {
//         console.log("Số gà: ", ga)
//         console.log("Số chó: ", 36 - ga)
//     }
// }   

// for (let cha = 1; cha <= 60; cha ++)
// {
//     if (cha+5) + (cha - 30)*2 === 60
//     {
//         console.log("Tuổi cha: ", cha)
//         console.log("Tuổi con: ", cha - 30) 

//     }
// }

for (let con = 1; con <= 100; con ++)
{
    let cha = con + 30
    if (cha + 5 === (con + 5)*2)
    {
        console.log("Tuổi cha: ", cha)
        console.log("Tuổi con: ", con)
    }

}    
