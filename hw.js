// 1.Chương trình tạo số random 1-10
// 2.Tạo promt để ng dùng nhập số
// 3.Nếu người dùng nhập đúng =>  "congratulation !"
// 4. nếu nhâp sai => atlert "số bạn nhập quá lớn/quá nhỏ! số cần tìm là x"

let num = Math.floor(Math.random() *10+ 1)   // trả về số từ 1-10
let input = prompt("Hãy nhập số của bạn") // lấy số của ng dùng
// console.log(num + " là số của chương trình") // hiện ra số random
// console.log(input + " là số của bạn") // hiện ra số ng dùng
let n = Number(input)
if(n==num){
        alert('Congratulation')
} else if(num<n){
    alert("Số bạn nhập quá lớn! Số random là " + num)
} else if(num>n){
    alert('Số bạn nhập quá nhỏ! Số random là ' + num)
} else {
    alert('Đầu vào ko hợp lệ!')
}
