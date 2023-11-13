
$(document).ready(function () {
    $(".nav-link").on("click", function () {
        // Remove the 'active' class from all links
        $(".nav-link").removeClass("active-link");

        // Add the 'active' class to the clicked link
        $(this).addClass("active-link");
    });
});


function myFunction() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }



// section5 start


const accordionItems = document.querySelectorAll(".questions-item");

accordionItems.forEach((item) => {
    const accordionHeader = item.querySelector(".questions-header");

    accordionHeader.addEventListener("click", () => {
        const openItem = document.querySelector(".accordion-open");

        toggleItem(item);

        if (openItem && openItem !== item) {
            toggleItem(openItem);
        }
    });
});

const toggleItem = (item) => {
    const accordionContent = item.querySelector(".questions-content");

    if (item.classList.contains("accordion-open")) {
        accordionContent.removeAttribute("style");
        item.classList.remove("accordion-open");
    } else {
        accordionContent.style.height = accordionContent.scrollHeight + "px";
        item.classList.add("accordion-open");
    }
};

// SECTION5 END

//map

function initMap() {
    var options= {
      zoom:20,
      center:{lat:31.836977150584744,lng: 74.40054674666902}
    }
    var googlemap = new google.maps.Map(document.getElementById("map"), options);
  }
  