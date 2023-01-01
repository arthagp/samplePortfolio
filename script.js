let slideIndex = 0;

const updateSlide = (n) => {
  slideIndex += n;
  showSlide(slideIndex);
}

const showSlide = (n) => {
  const slides = document.getElementsByClassName("card-project");
  if (n > slides.length - 1) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
}

showSlide(slideIndex);


// Ketika tombol openButton ditekan
function btnClick() {

  document.getElementById("myModal").style.display = "block";
  console.log("work");
}

// Ketika tombol closeButton ditekan
function closeClick() {

  document.getElementById("myModal").style.display = "none";
  console.log("work");
}

// alertt
const inputEmail = document.getElementById("mail");
const textArea = document.getElementById("txtArea");

function refresh() {
  mail.value = "";
  txtArea.value = "";
}
function require() {
  if (mail.value && txtArea.value) {
    refresh();
    alert('Berhasil');
    // return;
  } else if (mail.value === "" && txtArea.value === "") {
    refresh();
    alert('E-mail dan Message tidak boleh kosong')
  } else if (mail.value == "") {
    refresh();
    alert('E-mail tidak boleh kosong')
  } else if (txtArea.value === "") {
    refresh();
    alert('Message tidak boleh kosong')
  }
}

// ACCORDION

  const accordion = document.getElementsByClassName("accordion");

  for (let i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
      const panel = this.nextElementSibling;

      if (panel.style.display === "block") {
        console.log(panel)
        panel.style.display = "none";
      } else {
        panel.style.display = "block";
      }
    });
  }

