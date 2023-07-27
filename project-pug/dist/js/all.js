console.log("hello Pug");

function toogleSearch(e) {
  console.log("this: ", e);
  let $search__dropdown = document.querySelector(".search__dropdown");
  if ($search__dropdown.style.display === "none")
    $search__dropdown.style.display = "block";
  else $search__dropdown.style.display = "none";
}
const listNews = [
  {
    type: "explore",
    content: {
      type: "cities",
      link: "https://vietnam.travel/things-to-do/enjoy-bus-rides-back-and-forth-between-t1-and-t2-noi-bai-international-airport-free",
      img: {
        src: "https://vietnam.travel/sites/default/files/styles/large/public/2023-07/J7401628_1.jpg?itok=A9YSp28w",
      },
      title:
        "Enjoy bus rides back and forth between T1 and T2 Noi Bai International Airport free of charge!",
    },
  },
  {
    type: "explore",
    content: {
      type: "culture",
      link: "",
      img: {
        src: "https://vietnam.travel/sites/default/files/styles/large/public/2023-07/ct%20pba_1.jpg?itok=wwkn0wu6",
      },
      title: "Vietnam - A rising star for event and wedding tourism",
    },
  },
  {
    type: "explore",
    content: {
      type: "culture",
      link: "",
      img: {
        src: "https://vietnam.travel/sites/default/files/styles/large/public/2023-06/303-Ninh%20B%C3%ACnh-nguyentungduong1987%40gmail.com-nhung%20vi%20khach%20quoc%20te%20%281%29_1.jpg?itok=VuP8mkR_",
      },
      title: "Big News! Vietnam approves extending e-visas to 90 days",
    },
  },
  {
    type: "explore",
    content: {
      type: "culture",
      link: "",
      img: {
        src: "https://vietnam.travel/sites/default/files/styles/large/public/2023-04/shutterstock_1473883487_1.jpg?itok=CuQY1kVd",
      },
      title: "Moc Chau: Your One-Stop Nature Escape",
    },
  },
  {
    type: "explore",
    content: {
      type: "culture",
      link: "",
      img: {
        src: "https://vietnam.travel/sites/default/files/styles/large/public/2023-04/shutterstock_1218765286_1.jpg?itok=SgLtFthN",
      },
      title: "Explore the Bay of Dragons on a Halong Bay cruise",
    },
  },
  {
    type: "relax",
    content: {
      type: "wellness",
      link: "",
      img: {
        src: "https://vietnam.travel/sites/default/files/styles/large/public/2022-06/shutterstock_337356221_1.jpg?itok=ChFSInoB",
      },
      title: "Nha Trang Best Beaches for a Sustainable Vacation",
    },
  },
  {
    type: "relax",
    content: {
      type: "luxury",
      link: "",
      img: {
        src: "https://vietnam.travel/sites/default/files/styles/large/public/2022-05/shutterstock_1303493764_1.jpg?itok=AhlENvUY",
      },
      title: "Explore the food of Hoi An",
    },
  },
  {
    type: "relax",
    content: {
      type: "wellness",
      link: "",
      img: {
        src: "https://vietnam.travel/sites/default/files/styles/large/public/2021-12/580491601_1.jpg?itok=A_yGfWPY",
      },
      title: "Beach Yoga on Phu Quoc island",
    },
  },
  {
    type: "relax",
    content: {
      type: "wellness",
      link: "",
      img: {
        src: "https://vietnam.travel/sites/default/files/styles/large/public/2021-05/wellness%20resorts%20in%20vietnam_4.jpg?itok=2B-bq_sw",
      },
      title: "Vietnam’s wonderful wellness resorts",
    },
  },
  {
    type: "play",
    content: {
      type: "luxury",
      link: "",
      img: {
        src: "https://vietnam.travel/sites/default/files/styles/large/public/2023-07/blackpink_1.jpeg?itok=HV9xF9hW",
      },
      title: "Are you ready to rock with Born Pink in Hanoi?",
    },
  },
  {
    type: "play",
    content: {
      type: "luxury",
      link: "",
      img: {
        src: "https://vietnam.travel/sites/default/files/styles/large/public/2023-07/charlie%20puth_1.jpg?itok=nRF0i2m4",
      },
      title: "Up all night with Charlie Puth and 8Wonder Music Fest",
    },
  },
  {
    type: "play",
    content: {
      type: "culture",
      link: "",
      img: {
        src: "https://vietnam.travel/sites/default/files/styles/large/public/2023-07/z4523093428626_adbc13b9ec9669238837556478b8d088_1.jpg?itok=YFi60blt",
      },
      title:
        "Beautiful train route to the paradise of typical cuisine in Hai Phong",
    },
  },
  {
    type: "play",
    content: {
      type: "luxury",
      link: "",
      img: {
        src: "https://vietnam.travel/sites/default/files/styles/large/public/2023-07/BORNPINK_WORLD-TOUR_HANOI_WEB%20%281%29_1.jpg?itok=NpEkPl3z",
      },
      title: "Blackpink set to rock in Hanoi this July",
    },
  },
  {
    type: "play",
    content: {
      type: "Adventure",
      link: "",
      img: {
        src: "https://vietnam.travel/sites/default/files/styles/large/public/2023-06/Vinh%20Vinh%20Hy%20%282%29_1.jpg?itok=1NL5OWZq",
      },
      title: "Ninh Thuan: Beyond sun, wind and beach",
    },
  },
];
function change(type, ele) {
  let $list_news_item = document.querySelectorAll(".news__item");
  let $btn__main = document.querySelectorAll(".list-news  .btn__main");
  for (let i = 0; i < $btn__main.length; i++) {
    $btn__main[i].classList.remove("btn__main--hover");
  }
  ele.classList.add("btn__main--hover");
  switch (type) {
    case "all":
      let listAll = [];
      for (let i = 0; i < listNews.length; i++) {
        if ((i + 1) % 3 === 0 && listAll.length < 5) {
          listAll.push(listNews[i]);
        }
      }
      for (let i = 0; i < $list_news_item.length; i++) {
        let img = $list_news_item[i].querySelector("img");
        img.src = listAll[i].content.img.src;
        img.alt = listAll[i].content.title;

        let title = $list_news_item[i].querySelector(".title");
        title.innerText = listAll[i].content.title;

        let type = $list_news_item[i].querySelector(".type");
        type.innerText = listAll[i].content.type;
      }
      break;
    case "explore":
      let listExp = [];
      for (let i = 0; i < listNews.length; i++) {
        if (listNews[i].type === "explore") {
          listExp.push(listNews[i]);
        }
      }
      for (let i = 0; i < $list_news_item.length; i++) {
        let img = $list_news_item[i].querySelector("img");
        img.src = listExp[i].content.img.src;
        img.alt = listExp[i].content.title;

        let title = $list_news_item[i].querySelector(".title");
        title.innerText = listExp[i].content.title;

        let type = $list_news_item[i].querySelector(".type");
        type.innerText = listExp[i].content.type;
      }
      break;
    case "relax":
      let listRel = [];
      for (let i = 0; i < listNews.length; i++) {
        if (listNews[i].type === "relax") {
          listRel.push(listNews[i]);
        }
      }
      for (let i = 0; i < $list_news_item.length; i++) {
        let img = $list_news_item[i].querySelector("img");
        img.src = listRel[i].content.img.src;
        img.alt = listRel[i].content.title;

        let title = $list_news_item[i].querySelector(".title");
        title.innerText = listRel[i].content.title;

        let type = $list_news_item[i].querySelector(".type");
        type.innerText = listRel[i].content.type;
      }
      break;
    case "play":
      let listPl = [];
      for (let i = 0; i < listNews.length; i++) {
        if (listNews[i].type === "play") {
          listPl.push(listNews[i]);
        }
      }
      for (let i = 0; i < $list_news_item.length; i++) {
        let img = $list_news_item[i].querySelector("img");
        img.src = listPl[i].content.img.src;
        img.alt = listPl[i].content.title;

        let title = $list_news_item[i].querySelector(".title");
        title.innerText = listPl[i].content.title;

        let type = $list_news_item[i].querySelector(".type");
        type.innerText = listPl[i].content.type;
      }
      break;
    default:
  }
}
