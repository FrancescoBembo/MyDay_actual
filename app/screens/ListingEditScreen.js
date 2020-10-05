import React from "react";
import { StyleSheet } from "react-native";
import * as Yup from "yup";

import {
  Form,
  FormField,
  FormPicker as Picker,
  SubmitButton,
} from "../components/forms";
import CategoryPickerItem from "../components/CategoryPickerItem";
import Screen from "../components/Screen";
import FormImagePicker from "../components/forms/FormImagePicker";
import colors from "../config/colors";
import Header from "../components/Header";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(1).label("Title"),
  date: Yup.string().required().label("Date"),
  description: Yup.string().label("Description"),
  category: Yup.object().required().nullable().label("Category"),
  images: Yup.array().min(1, "Please select at least one image."),
});

const Moods = [
  {
    backgroundColor: colors.light,
    icon: "emoticon-happy-outline",
    label: "Happy",
    value: 1,
  },
  {
    backgroundColor: colors.light,
    icon: "emoticon-sad-outline",
    label: "Sad",
    value: 2,
  },
  {
    backgroundColor: colors.light,
    icon: "emoticon-tongue-outline",
    label: "Surprised",
    value: 3,
  },
  {
    backgroundColor: colors.light,
    icon: "emoticon-cool-outline",
    label: "Cool",
    value: 4,
  },
  {
    backgroundColor: colors.light,
    icon: "emoticon-neutral-outline",
    label: "Annoyed",
    value: 5,
  },
  {
    backgroundColor: colors.light,
    icon: "emoticon-kiss-outline",
    label: "In love",
    value: 6,
  },
  {
    backgroundColor: colors.light,
    icon: "emoticon-cry-outline", //frown icon not working
    label: "Scared",
    value: 7,
  },
  {
    backgroundColor: colors.light,
    icon: "emoticon-dead-outline",
    label: "Sick",
    value: 8,
  },
  {
    backgroundColor: colors.light,
    icon: "emoticon-angry-outline",
    label: "Angry",
    value: 9,
  },
];

function ListingEditScreen() {
  return (
    <Screen style={styles.container}>
      <Header>Add New Memory</Header>
      <Form
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
          images: [],
        }}
        // onSubmit={(values) => console.log(location)}
        validationSchema={validationSchema}
      >
        <FormImagePicker name="images" />
        <FormField maxLength={255} name="title" placeholder="Title" />
        <FormField
          keyboardType="numbers-and-punctuation"
          maxLength={10}
          name="date"
          placeholder="Date"
          width={140}
        />
        <Picker
          items={Moods}
          name="Mood"
          numberOfColumns={3}
          PickerItemComponent={CategoryPickerItem}
          placeholder="Mood"
          width="50%"
        />
        <FormField
          maxLength={255}
          multiline
          name="description"
          numberOfLines={3}
          placeholder="Description"
        />
        <SubmitButton title="ADD" />
      </Form>
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
});
export default ListingEditScreen;
