console.log("Website KCKGP berjaya dibuka");


// =========================
// WHATSAPP BUTTON BIASA
// =========================

function whatsapp(){

    let phone = "601111959807";


    let message = 
    "Assalamualaikum KCKGP, saya ingin bertanya mengenai servis cucian karpet.";


    let url =
    "https://wa.me/" + phone + "?text=" + encodeURIComponent(message);


    window.open(url,"_blank");

}





// =========================
// CONTACT FORM WHATSAPP
// =========================


function sendWhatsApp(){


    let nama = document.getElementById("nama").value;


    let telefon = document.getElementById("telefon").value;


    let karpet = document.getElementById("karpet").value;


    let mesej = document.getElementById("mesej").value;




    let phone = "601111959807";





    let message =

    "Assalamualaikum KCKGP,%0A%0A" +

    "Saya ingin bertanya mengenai servis cucian karpet.%0A%0A" +


    "👤 Nama: " + nama + "%0A" +


    "📞 No Telefon: " + telefon + "%0A" +


    "🧼 Jenis Karpet: " + karpet + "%0A" +


    "💬 Pertanyaan: " + mesej;





    let url =

    "https://wa.me/" + phone + "?text=" + message;



    window.open(url,"_blank");



}






// =========================
// MOBILE MENU
// =========================


const menuBtn = document.querySelector(".menu-btn");

const nav = document.querySelector("nav");



if(menuBtn){


    menuBtn.addEventListener("click",function(){


        if(nav.style.display === "block"){


            nav.style.display = "none";


        }

        else{


            nav.style.display = "block";


        }


    });


}

