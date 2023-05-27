const express = require("express");
const server = express();

const dumyData = {
  itemInfo: {
    itemId: 5,
    itemName: "농심 신라면 볶음면 131g (4개)",
    itemImg:
      "https://image.enuri.info/webimage_300/9763300000/9763300000/9763304112.jpg",
    detailImg:
      "https://image1.coupangcdn.com/image/vendor_inventory/df8b/541417776ed6ef060a434b6ca5bcb73a86e9757a89194288356521e4affb.jpg",
  },
  itemReview: {
    reviewRate: 3,
    totalSpicy: 3,
    totalAmount: 3,
    totalTaste: 3,
  },
  itemOnlinePrice: [
    {
      marketName: "티몬",
      marketCode: 6641,
      marketLogo: "https://storage.enuri.info/logo/logo16/logo_16_6641.png",
      marketPice: 3440,
      marketLink:
        "https://www.enuri.com/move/Redirect.jsp?cmd=move_link&vcode=6641&modelno=70681239&pl_no=13916197912&cate=15110100&urltype=0&coupon=0&from=detail&showPrice=3440&buycnt=1&referrer=",
      deliverFee: 2500,
    },
    {
      marketName: "롯데ON",
      marketCode: 49,
      marketLogo: "https://storage.enuri.info/logo/logo16/logo_16_49.png",
      marketPice: 3590,
      marketLink:
        "https://www.enuri.com/move/Redirect.jsp?cmd=move_link&vcode=49&modelno=70681239&pl_no=10083014136&cate=15110100&urltype=0&coupon=0&from=detail&showPrice=3590&buycnt=1&referrer=",
      deliverFee: 3000,
    },
    {
      marketName: "위메프",
      marketCode: 6508,
      marketLogo: "https://storage.enuri.info/logo/logo16/logo_16_6508.png",
      marketPice: 3590,
      marketLink:
        "https://www.enuri.com/move/Redirect.jsp?cmd=move_link&vcode=6508&modelno=70681239&pl_no=14853240557&cate=15110100&urltype=0&coupon=0&from=detail&showPrice=3590&buycnt=1&referrer=",
      deliverFee: 3000,
    },
  ],
};

server.post("/", (req, res) => {
  res.status(200).json(dumyData);
});

server.listen(3000, (err) => {
  if (err) return console.log(err);
  console.log("The server is listening on port 3000");
});
