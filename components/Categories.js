import React from "react";
import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import CategoryCard from "./CategoryCard";

function Categories() {
  return (
    <ScrollView
      contentContainerStyle={{
        paddingHorizontal: 15,
        paddingTop: 10,
      }}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing" />
      <CategoryCard imgUrl="https://links.papareact.com/wru" title="Testing" />
    </ScrollView>
  );
}

export default Categories;
