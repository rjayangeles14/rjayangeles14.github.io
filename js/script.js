
window.addEventListener("load", function(){
	setTimeout(function(){
		document.querySelector(".preloader").classList.add("opacity-0");
	},1000)
	setTimeout(function(){
		document.querySelector(".preloader").style.display="none";
	},1500)
})

// Portfolio Item Filter

const filterContainer=document.querySelector(".portfolio-filter"),
      filterBtns=filterContainer.children,
      totalFilterBtn=filterBtns.length,
      portfolioItems=document.querySelectorAll(".portfolio-item"),
      totalPortfolioItem=portfolioItems.length;

      for(let i=0; i<totalFilterBtn; i++){
      	filterBtns[i].addEventListener("click", function(){
      		filterContainer.querySelector(".active").classList.remove("active");
      		this.classList.add("active");

      		const filterValue=this.getAttribute("data-filter");
      		for(let k=0; k<totalPortfolioItem; k++){
      			if(filterValue === portfolioItems[k].getAttribute("data-category")){
      				portfolioItems[k].classList.remove("hide")
      				portfolioItems[k].classList.add("show");
      			}
      			else{
      				portfolioItems[k].classList.remove("show");
      				portfolioItems[k].classList.add("hide");
      			}
      			if(filterValue === "all"){
      				portfolioItems[k].classList.add("show");
      			}

      		}
      	})
      }
 // Portfolio Lightbox

const lightbox=document.querySelector(".lightbox"),
	  lightboxImg=lightbox.querySelector(".lightbox-img"),
	  lightboxClose=lightbox.querySelector(".lightbox-close"),
	  lightboxText=lightbox.querySelector(".caption-text"),
	  lightboxCounter=lightbox.querySelector(".caption-counter");
	  let itemIndex=0;

	  for(let i=0; i<totalPortfolioItem; i++){
	  	portfolioItems[i].addEventListener("click", function(){
	  		itemIndex = i;
	  		changeItem();
	  		toggleLightbox();
	  	})
	  }

	  function toggleLightbox(){
	  	lightbox.classList.toggle("open");
	  	showItem();
	  }

	  function	changeItem(){
	  	imgSrc=portfolioItems[itemIndex].querySelector(".portfolio-img img").getAttribute("src");
	  	lightboxImg.src = imgSrc;
	  	lightboxCounter.innerHTML= (itemIndex+1) + " of " + totalPortfolioItem;
	  	lightboxText.innerHTML=portfolioItems[itemIndex].querySelector("h4").innerHTML;
	  	showItem();
	  }

	  function nextItem(){
	  	if(itemIndex === totalPortfolioItem-1){
	  		itemIndex=0;
	  	}
	  	else{
	  		itemIndex++;
	  	}
	  	changeItem();
	  }

	  function prevItem(){
	  	if(itemIndex === 0){
	  		itemIndex=totalPortfolioItem-1;
	  	}
	  	else{
	  		itemIndex--;
	  	}
	  	changeItem();
	  }

	  function showItem(){
	  	var alink = document.getElementById("linkID"); //or grab it by tagname etc'
	  	var img = document.getElementById("myImg");
	  	var whatImg = img.getAttribute("src");
	  	// console.log(whatImg)

	  	switch (whatImg){
	  		case "images/portfolio/1.jpg":
	  			alink.href = "https://google.com"
	  		break;
	  		case "images/portfolio/2.jpg":
	  			alink.href = "https://yahoo.com"
	  		break;
	  		case "images/portfolio/3.jpg":
	  			alink.href = "https://facebook.com"
	  		break;
	  		case "images/portfolio/4.jpg":
	  			alink.href = "https://youtube.com"
	  		break;
	  		case "images/portfolio/5.jpg":
	  			alink.href = "https://instagram.com"
	  		break;
	  		case "images/portfolio/6.jpg":
	  			alink.href = "https://twitter.com"
	  		break;
	  	}
	  }

	  // close Lightbox
	  lightbox.addEventListener("click", function(){
	  	// console.log(event.target);
	  	if(event.target === lightboxClose || event.target === lightbox){
	  		toggleLightbox();
	  	}
	  })


// Aside NavBar
	const nav=document.querySelector(".nav"),
		  navList=nav.querySelectorAll("li"),
		  totalNavList=navList.length,
		  allSection=document.querySelectorAll(".section"),
		  totalSection=allSection.length;


	for(let i=0; i<totalNavList; i++){
		const a=navList[i].querySelector("a");
		a.addEventListener("click", function(){
			//Remove Back Section Class
			removeBackSectionClass();

			for(let j=0; j<totalNavList; j++){
				if(navList[j].querySelector("a").classList.contains("active")){
					// Add Back Section Class
					addBackSectionCLass(j);
				}
				navList[j].querySelector("a").classList.remove("active");
			}
			this.classList.add("active")
			showSection(this);

			if(window.innerWidth < 1100){
				asideSectionTogglerBtn()
			}
		})
	}

	function addBackSectionCLass(num){
		allSection[num].classList.add("back-section");
	}

	function removeBackSectionClass(){
		for(let k=0; k<totalSection; k++){
			allSection[k].classList.remove("back-section");
		}
	}

	function showSection(element){
		for(let i=0; i<totalSection; i++){
			allSection[i].classList.remove("active");
		}
		const target=element.getAttribute("href").split("#")[1];

		document.querySelector("#"+target).classList.add("active");
	}

	function updateNav(element){
		for(let i=0; i<totalNavList; i++){
			navList[i].querySelector("a").classList.remove("active");
			const target=element.getAttribute("href").split("#")[1];
			if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1]){
				navList[i].querySelector("a").classList.add("active");
			}
		}
	}
	document.querySelector(".hire-me").addEventListener("click", function(){
		const sectionIndex=this.getAttribute("data-section-index");
		showSection(this);
		console.log(sectionIndex + " " + this)
		updateNav(this);
		removeBackSectionClass();
		addBackSectionCLass(sectionIndex);
	})


	const navTogglerBtn=document.querySelector(".nav-toggler");
	aside=document.querySelector(".aside");

	navTogglerBtn.addEventListener("click",asideSectionTogglerBtn);

	function asideSectionTogglerBtn(){
		aside.classList.toggle("open");
		navTogglerBtn.classList.toggle("open");
		for(let i=0; i<totalSection; i++){
			allSection[i].classList.toggle("open");
		}
	}

	const sendBtn=document.querySelector(".sendBtn"),
		  formEmail=document.querySelector(".contact-form");

	sendBtn.addEventListener("click",function(){
		const subj = document.getElementById("subject").value + " [" +document.getElementById("name").value + "]";
		const message =document.getElementById("message").value;
		formEmail.action = "mailto:rjayangeles@yahoo.com?subject=" + subj +"&body=" +message;

	})