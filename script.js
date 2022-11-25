// ========= MOUSE FOLLOW =========

let constrain = 1500;
let mouseOverContainer = document.getElementById("body");
let ex1Layer = document.getElementById("ex1-layer");

const transforms = (x, y, el) => {
  let box = el.getBoundingClientRect();
  let calcX = -(y - box.y - (box.height / 2)) / constrain;
  let calcY = (x - box.x - (box.width / 2)) / constrain;
  
  return "perspective(100px) "
    + "   rotateX("+ calcX +"deg) "
    + "   rotateY("+ calcY +"deg) ";
};

 const transformElement = (el, xyEl) => {
  el.style.transform  = transforms.apply(null, xyEl);
}

mouseOverContainer.onmousemove = (e) => {
  let xy = [e.clientX, e.clientY];
  let position = xy.concat([ex1Layer]);

  window.requestAnimationFrame(() => {
    transformElement(ex1Layer, position);
  });
};

// ================================






const ImagesDessin = (imgs) => {
  let expandImg = document.getElementById("expandedImg");
  let imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}


const AfficheFond = (Objet) => {

  let ToutObjets = ['Bonlieu', 'Lafayettes', 'Video3D', 'RocketLeague', 'AssassinCreed', 'IronMan', 'Katana', 'Oculus', 'Stormbreaker', 'Tracking'];

  for (const element of ToutObjets) {
    document.getElementById(element).style.display = "none";;
  }

  let Affiche = document.getElementById(Objet);
  Affiche.style.display = "block";
}

AfficheFond("Tracking");


const scrollBlur = () => {
  let scroll = document.getElementById("body").scrollTop;
  if (scroll >= 500) {
    document.getElementById("bg").classList.add("background-image-blur");
    document.querySelector(".arrowUp").style.opacity = "100%";
    document.querySelector(".arrowUp").style.pointerEvent = "all";
    document.querySelector(".arrowUp").style.cursor = "pointer";
    
  }
  else {
    document.getElementById("bg").classList.remove("background-image-blur");
    document.querySelector(".arrowUp").style.opacity = "0%";
    document.querySelector(".arrowUp").style.pointerEvent = "none";
    document.querySelector(".arrowUp").style.cursor = "default";
  }
}

const ImagesSwipeDroite = () => {
  document.getElementById("Ligne-1").style.display = "none";
  document.getElementById("Ligne-2").style.display = "block";
}
const ImagesSwipeGauche = () => {
  document.getElementById("Ligne-2").style.display = "none";
  document.getElementById("Ligne-1").style.display = "block";
}


const ShowMe = (id) => {
  let Moi = id;
  let Papa = document.getElementById("ElPapa");
  if (Moi.parentNode == Papa){
    for (const child of Papa.children) {
      child.style.display = "none";
    }
  }
  Moi.style.display = "block";
}


const toTop = () => {
  document.getElementById("body").scrollIntoView({behavior: "smooth", block: "start"});
}


const discoverButton = () => {
  document.getElementById("suiteSite").scrollIntoView({behavior: "smooth", block: "start"});
}
