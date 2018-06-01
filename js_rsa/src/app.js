/*
  RSA TEST 
  2018.6.1
*/
import "./static/style/main.css";
import JSEncrypt from "jsencrypt";

window.addEventListener("DOMContentLoaded",() => {

  let rsa_encrypt = new JSEncrypt();
  let rsa_public_key = document.querySelector("#rsa_public_key");
  let plaintext = document.querySelector("#plaintext");
  let ciphertext = document.querySelector("#ciphertext");
  let create_rsa_ciphertext = document.querySelector("#create_rsa_ciphertext");
  
  create_rsa_ciphertext.addEventListener("click",() => {
    if(rsa_public_key.value){
      console.log(rsa_public_key.value);
      console.log(plaintext.value)
      rsa_encrypt.setPublicKey(rsa_public_key.value);
      console.log(rsa_encrypt)
      ciphertext.value = rsa_encrypt.encrypt(plaintext.value);
    }else{
      alert("参数填写不完整");
    }
  },false);

},false);