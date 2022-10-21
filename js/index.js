const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map(popoverTriggerEl => new bootstrap.Popover(popoverTriggerEl));
const talkSalesBtn = document.querySelector("#talk-sales");

talkSalesBtn.addEventListener("click",()=>{
    document.location.href = "./sales.html";
});