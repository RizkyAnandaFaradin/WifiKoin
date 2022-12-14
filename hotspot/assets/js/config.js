//this is to enable multi vendo setup, set to true when multi vendo is supported
var isMultiVendo = false;

//list here all node mcu address for multi vendo setup
var multiVendoAddresses = [
	{
		vendoName: "Vendo 1 - ESP8266 WIRELESS", //change accordingly to your vendo name
		vendoIp: "10.10.10.108" //change accordingly to your vendo name
	},
	{
		vendoName: "Vendo 2 - ESP8266 WIRELESS", //change accordingly to your vendo name
		vendoIp: "10.10.10.108" //change accordingly to your vendo name
	},
	{
		vendoName: "Vendo 3 - ESP32 WIRELESS", //change accordingly to your vendo name
		vendoIp: "10.10.10.108" //change accordingly to your vendo name
	}
];

//0 means its login by username only, 1 = means if login by username + password
var loginOption = 0; //replace 1 if you want login voucher by username + password

var dataRateOption = true; //replace true if you enable data rates
//put here the default selected address
var vendorIpAddress = "10.0.0.252";

//hide pause time / logout true = you want to show pause / logout button
var showPauseTime = true;

//enable member login, true = if you want to enable member login
var showMemberLogin = true;

//enable extend time button for customers
var showExtendTimeButton = true;

//disable voucher input
var disableVoucherInput = false;

//disable auto screenshot function
var AutoScreenshot = false;