// Home.js
import React from "react";
import { Box, Stack, SimpleGrid } from "@chakra-ui/react";
import Card from "./Card";
import axios from "axios";

const Home = () => {
  const checkoutHandler = async (amount) => {
    const {
      data: { key },
    } = await axios.get("http://www.localhost:4000/api/getkey");

    const {
      data: { order },
    } = await axios.post("http://localhost:4000/api/checkout", {
      amount,
    });

    const options = {
      key,
      amount: order.amount,
      currency: "INR",
      name: "Pankaj Kumar",
      description: "Learn to plugin Razorpay",
      image:
        "https://media.licdn.com/dms/image/D5603AQHRajIek-xksw/profile-displayphoto-shrink_400_400/0/1710964704377?e=1724284800&v=beta&t=aHfndDp6tf0GNQH6cO_trYJEtH2jypHfuEQxPnrVXgI",
      order_id: order.id,
      callback_url: "http://localhost:4000/api/paymentverification",
      prefill: {
        name: "Pankaj Kumar",
        email: "pankajkumar9771774088@gmail.com",
        contact: "9771774088",
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#121212",
      },
    };
    const razor = new window.Razorpay(options);
    razor.open();
  };

  const accessories = [
    {
      amount: 5000,
      img: "https://m.media-amazon.com/images/I/51hJIsWMagL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      amount: 4500,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNZ5QXQ-p5u2HmYSaAciJjNBFP5pvMNHWFEQ&s",
    },
    {
      amount: 3200,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaeNXZXiLSnVUZUJT5HP1GC-m85FlDFB88qA&s",
    },
    {
      amount: 2800,
      img: "https://cdn.pixabay.com/photo/2016/06/28/05/10/laptop-1483974_1280.jpg",
    },
    {
      amount: 1500,
      img: "https://cdn.pixabay.com/photo/2016/11/22/23/40/hands-1851218_1280.jpg",
    },
    {
      amount: 2300,
      img: "https://cdn.pixabay.com/photo/2019/07/13/10/49/music-4334557_1280.jpg",
    },
    {
      amount: 4100,
      img: "https://media.istockphoto.com/id/1368515707/photo/gray-electric-fan-on-white-table-space-for-text.jpg?s=1024x1024&w=is&k=20&c=kn1f5Q6PcKl59hUSkn95mS2eBKZj2fDUXYWHm5NJ4Mk=",
    },
    {
      amount: 3500,
      img: "https://cdn.pixabay.com/photo/2018/07/01/13/28/two-pin-3509490_1280.jpg",
    },
    {
      amount: 2900,
      img: "https://media.istockphoto.com/id/185277608/photo/hand-with-computer-mouse.jpg?s=1024x1024&w=is&k=20&c=Zdd0amjMviWAyTb3F_TPcxjT0NTNyypmClGGP-JNHow=",
    },
    {
      amount: 2700,
      img: "https://media.istockphoto.com/id/153065264/photo/computer-keyboard-with-clipping-path.webp?s=1024x1024&w=is&k=20&c=GLGTNLWcd_kovm9N_jvExI3qPPlxDI3h1HZJsfB1DhM=",
    },
  ];

  return (
    <Box bg="gray.100" minH="100vh" p="8">
      <SimpleGrid columns={[1, 2, 3]} spacing="8">
        {accessories.map((accessory, index) => (
          <Card
            key={index}
            amount={accessory.amount}
            img={accessory.img}
            checkoutHandler={checkoutHandler}
          />
        ))}
      </SimpleGrid>
    </Box>
  );
};

export default Home;
