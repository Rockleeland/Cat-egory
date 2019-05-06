import React, { Component, Fragment } from "react"
import SavedImages from "../SavedImages"
import { StyledDiv, StyledButton } from "./style"

class Categories extends Component {
  state = {
    categories: this.props.categories,
    selectedCategory: ""
  };

  selectCategory = category => {
    this.setState({
      selectedCategory: category
    });
  };

  render() {
    const categories = this.props.categories;
    const selectedCategory = this.state.selectedCategory;
    return (
      <Fragment>
        <StyledDiv>
          {categories.map(category => {
            return (
              <StyledButton
                variant="outline-secondary"
                key={category}
                onClick={() => this.selectCategory(category)}
              >
                {category}
              </StyledButton>
            );
          })}
        </StyledDiv>
        <StyledDiv>
          <SavedImages
            category={selectedCategory}
            savedImages={this.props.savedImages}
          />
        </StyledDiv>
      </Fragment>
    );
  }
}

export default Categories
