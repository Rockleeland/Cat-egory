import React, { Component } from "react";
// import { Categories } from './Categories';
// import CatList  from './CatList';
import { ThemeProvider } from "styled-components";
import Categories from "../Categories/index.js";
import { API } from "../../utils/catApi";
import {
  StyledContainer,
  StyledRow,
  StyledCol,
  theme
} from "./style";
import Title from '../Title'
import Card from '../Card'

class Layout extends Component {
  state = {
    cats: [],
    savedImages: [],
    categories: [],
    categoryInput: '',
    categoryId: {},
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

  handleChange = (event) => {
    this.setState({
        categoryInput: event.target.value
    })
  }

  handleClick = () => {
    const savedImages = (id, name, category, link) => {
        if (this.state.categoryId !== {}) {
            return (
                {
                    id,
                    name,
                    category,
                    link
                }
            )
        }
      }
      //saves image with
      let { categoryInput, cats } = this.state;
      let images = savedImages(cats, cats, categoryInput, cats)
      this.setState({
        categories: [
            ...this.state.categories,
            categoryInput
        ],
        categoryId: {
            id: this.state.cats,
            name: this.state.cats,
            category: this.state.categoryInput,
            link: this.state.cats
        },
        savedImages: [
            ...this.state.savedImages,
            images
        ],
        categoryInput: '',
      })
  }



  render() {
    return (
      <ThemeProvider theme={theme}>
        <StyledContainer>
          <StyledCol>
            <StyledRow>
              <Title />
            </StyledRow>
            <Card
             getCats={this.getCats}
             cats={this.state.cats}
             handleChange={this.handleChange}
             handleClick={this.handleClick}
             categoryInput={this.state.categoryInput}
            />
          </StyledCol>
          <Categories
            savedImages={this.state.savedImages}
          />
        </StyledContainer>
      </ThemeProvider>
    );
  }
}

export default Layout;
