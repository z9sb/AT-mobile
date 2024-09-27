import React from "react";
import Layout from "./components/Layout";
import ProductDetails from "./components/ProductDetails";
import SellerInfo from "./components/SellerInfo";
import UserComments from "./components/UserComments";
import ProductQuestions from "./components/ProductQuestions";
import RelatedProducts from "./components/RelatedProducts";

export default class AT_16 extends React.Component {
  render() {
    const product = {
      name: "Smartphone",
      image: "https://m.media-amazon.com/images/I/61aEbAwahaL._AC_SX679_.jpg",
      description:
        "Um smartphone de ponta com todos os recursos mais recentes.",
      price: 799,
      rating: 4.5,
    };

    const seller = {
      name: "Loja do John",
      email: "john@example.com",
      phone: "123-456-7890",
      rating: 4.8,
    };

    const comments = [
      {
        user: "Bob",
        date: "2024-09-01",
        rating: 5,
        message: "Produto incrível!",
      },
      {
        user: "Marlei",
        date: "2024-09-02",
        rating: 4,
        message: "Ótimo, mas poderia melhorar em algumas áreas.",
      },
    ];

    const questions = [
      {
        user: "Bruno",
        date: "2024-09-01",
        query: "Ele suporta 5G?",
        answer: "Sim, suporta.",
      },
      {
        user: "Italo",
        date: "2024-05-30",
        query: "Ele tem NFCe",
        answer: "Sim, o aparelho possui.",
      },
      {
        user: "Fernando",
        date: "2024-03-05",
        query: "Ele suporta 5G?",
        answer: "Sim, suporta.",
      },
    ];

    const relatedProducts = [
      {
        name: "Smartphone ABC",
        image: "https://via.placeholder.com/150",
        price: 699,
      },
      {
        name: "Smartphone DEF",
        image: "https://via.placeholder.com/150",
        price: 599,
      },
    ];

    return (
      <Layout>
        <ProductDetails product={product} />
        <SellerInfo seller={seller} />
        <UserComments comments={comments} />
        <ProductQuestions questions={questions} />
        <RelatedProducts products={relatedProducts} />
      </Layout>
    );
  }
}
