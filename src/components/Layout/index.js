import React, { Component } from "react";
import { ThemeProvider } from "styled-components";
import { API } from "../../utils/catApi";
import { StyledContainer, StyledRow, StyledCol, theme } from "./style";
import Title from "../Title";
import Card from "../Card";
import Categories from "../Categories";
import SavedImages from "../SavedImages";

class Layout extends Component {
  state = {
    cats: [],
    savedImages: [],
    categories: [],
    categoryInput: "",
    categoryId: {},
    category: ""
  };

  componentDidMount() {
    this.getCats();
  }

  getCats = () => {
    API()
      .then(res => {
        let cats = res.data.file;
        this.setState({
          cats
        });
      })
      .catch(err => console.log(err));
  };

  handleChange = event => {
    this.setState({
      categoryInput: event.target.value
    });
  };

  uniqueCategories = category => {
    //makes sure that there are no duplicate categories in array
    if (category === undefined) {
      return;
    }
    let categories = new Set(category);
    categories = Array.from(categories);
    return categories;
  };

  savedObject = (id, name, category, link) => {
    if (this.state.categoryId !== {}) {
      return {
        id,
        name,
        category,
        link
      };
    }
  };

  savedImages = () => {
    // saves image with id, name, category, and link
    // and puts it in the categoryId array
    let { categoryInput, cats } = this.state;
    let images = this.savedObject(cats, cats, categoryInput, cats);
    this.setState({
      categories: this.uniqueCategories([
        ...this.state.categories,
        categoryInput
      ]),
      categoryId: {
        id: this.state.cats,
        name: this.state.cats,
        category: this.state.categoryInput,
        link: this.state.cats
      },
      savedImages: [...this.state.savedImages, images],
      categoryInput: ""
    });
    this.getCats();
  };

  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledContainer>
          <StyledRow>
            <Title />
          </StyledRow>
          <StyledRow>
            <StyledCol md={12} lg={7}>
              <Card
                getCats={this.getCats}
                cats={this.state.cats}
                savedImages={this.savedImages}
                handleChange={this.handleChange}
                categoryInput={this.state.categoryInput}
              />
            </StyledCol>
            <StyledCol md={12} lg={5}>
              <Categories
                categories={this.state.categories}
                savedImages={this.state.savedImages}
                selectedCategory={this.selectedCategory}
                category={this.state.category}
              />
            </StyledCol>
          </StyledRow>
        </StyledContainer>
      </ThemeProvider>
    );
  }
}

export default Layout;
