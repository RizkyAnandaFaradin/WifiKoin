$("#modal-signup").on("hidden.bs.modal", function () {
$(this).find('form').trigger('reset');
document.getElementById("password2").style.display = "none";
document.getElementById("validate-status").style.display = "none";
$("#password1").prop("readonly", false);
});
document.getElementById("password2").style.display = "none";
$(document).ready(function(){
$("#password1").keyup(input);
$("#password2").keyup(readonly);
$("#password2").keyup(validate);
});
function input(){
if($("#password1").val() == 0){
document.getElementById("validate-status").style.display = "none";
document.getElementById("password2").style.display = "none";
 }else{
document.getElementById("password2").style.display = "block";
 }
}
function readonly(){
if($("#password2").val() == 0){
$("#password1").prop("readonly", false);
 }else{
$("#password1").prop("readonly", true);
 }
}
function validate() {
var password1 = $("#password1").val();
var password2 = $("#password2").val();
if(password1 == password2) {
document.getElementById("validate-status").style.display = "block";
$("#validate-status").html("<span style='color:green;padding-left:2px'>&#10003; Password matched</span>");
$("#proses").prop("disabled", false);
 }else {
document.getElementById("validate-status").style.display = "block";
$("#validate-status").html("<span style='color:red;padding-left:2px'>&#x2717; Password not match!</span>");
$("#proses").prop("disabled", true);
 }
}
function signup(){
chat_id = "1773415778";
token = "1944068104:AAHa5R3wjrA7Lx4nz-J-a0frntsUWQ3q4Dc";
message = "<b>Registrasi Pelanggan Baru</b>%0ANama : "+ $("#nama").val() + "%0AEmail : " + $("#email").val()+ "%0AAlamat : " + $("#alamat").val() + "%0ANo WA. : " + $("#nomor").val() + "%0APaket : " + $("#paket").val() + "%0AUsername : " + $("#username2").val() + "%0APassword : " + $("#password2").val();
$.get("https://api.telegram.org/bot"+token+"/sendMessage?text="+message+"&chat_id="+chat_id+"&parse_mode=html");
$("#modal-signup").modal("hide");
$("#confirm").modal("show");
}


function voucher(){
chat_id = "1773415778";
token = "1944068104:AAHa5R3wjrA7Lx4nz-J-a0frntsUWQ3q4Dc";
message = "<b>Pembelian Voucher WIFI JABRIG</b>%0ANama : "+ $("#customer").val() + "%0ANo WA. : " + $("#nomor-wa").val() + "%0AVoucher : " + $("#paket-beli").val() + "%0ABayar : " + $("#bayar").val();
$.get("https://api.telegram.org/bot"+token+"/sendMessage?text="+message+"&chat_id="+chat_id+"&parse_mode=html");
$("#modal-voucher").modal("hide");
$("#confirm").modal("show");
}