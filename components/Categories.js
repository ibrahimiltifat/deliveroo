import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import CategoryCard from "./CategoryCard";
import sanityClient, { urlFor } from "../sanity";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    sanityClient.fetch(`*[_type=="category"]`).then((data) => {
      setCategories(data);
    });
  }, []);
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      {categories?.map((category) => (
        <CategoryCard
          key={category._id}
          imgUrl={category.image}
          title={category.name}
        />
      ))}
    </ScrollView>
  );
}

export default Categories;
