import React, { Component } from "react";
import Axios from 'axios';
// import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import Nav from "./components/Nav";
import Jumbotron from "./components/Jumbotron";
import API from "./utils/API";
import { Col, Row, Container } from "./components/Grid";
import Input from "./components/Input";
import Button from "./components/Button";
import { List, ListItem } from "./components/List";
import { ArticleList, ArticleListItem } from "./components/ArticleList";


class App extends Component {
  state = {
    articles: [],
    articleSearch: "",
    saved:[]
    
  }; 

// Input change for article search
  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

// Form submit function for article search and render
  handleFormSubmit = event => {
    event.preventDefault();
    API.getArticles(this.state.articleSearch)
      .then(res => {
        console.log('LOGGING IT!!----', res.data);
        this.setState({ articles: res.data});
      })
      .catch(err => console.log(err));
  };

  savingArticle = (saved) => {
    // this.setState({saved: [this.state.id]});
    this.setState({
      saved: [...this.state.saved, {id: saved.id, headline: saved.headline, snippet: saved.snippet, url: saved.url}]
    })
      console.log('id of saved article!--------', saved.id);
      Axios.post('/api/savedarticles', {
          saved: this.state.saved
        })
      .then(function (response) {
        console.log("posted save ---?-", response);
      }) 
    };

  savedRoute = () => {
    console.log('saved article route----!---')
    Axios.get('/api/savedarticles')
    .then(function (response) {
      console.log(response);
    })
  }
    // event.preventDefault();
    // console.log('saveArticle !--------', saved)
    //   API.saveArticle({
    //     id: this.state.id,
    //     headline: this.state.headline,
    //     snippet: this.state.snippet,
    //     url: this.state.web_url
    //   })
    //     .then(res => {
    //       console.log("SAVING_______");
    //       // this.loadSavedArticles())
    //       this.setState({saved: res.data});
    //     })
    //     .catch(err => console.log(err));
    // };

  render() {
    return (
      <div className="App">
        <Container>
        <Nav />
        <Jumbotron />
{/*----------insert original search input field row----------*/}
          
          <Row>
            <Col size="md-12">
              <form>
                <Container>
                  <Row>
                    <Col size="xs-9 sm-10">
                      <Input
                        name="articleSearch"
                        value={this.state.articleSearch}
                        onChange={this.handleInputChange}
                        placeholder="Search For a Article"
                      />
                    </Col>
                    <Col size="xs-3 sm-2">
                      <Button onClick={this.handleFormSubmit} type="success" className="input-lg">
                        Search
                      </Button>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
          </Row>

{/*-----------insert original search articles row--------*/}
        <Row>
          <Col size="xs-12 sm-12">
          
            <h1>Searched Articles</h1>
            <ArticleList>
            {this.state.articles.map((article) => {
              let saved = () => this.savingArticle({id: article._id, headline: article.headline.main, snippet: article.snippet, url: article.web_url});
              return (
                <ArticleListItem
                key={article._id} headline={article.headline.main} snippet={article.snippet} web_url={article.web_url} onClick={saved}/>
                );
            })}
            </ArticleList>
          </Col>
        </Row>

{/*-----------insert saved articles row--------*/}

        <Row>
          <Col size="xs-12 sm-12">
          
            <h1>Saved Articles</h1>
            <List>
            {this.state.saved.map((saved) => {
              return (
                <ListItem key={saved.id}>
                  <h2>{saved.headline}</h2> 
                  <p>{saved.snippet}</p> 
                  <a href={saved.web_url} target="_blank">more</a>
                </ListItem>
                );
            })}
            </List>
          </Col>
        </Row>
      </Container>
    </div>
  
);
  }
}
export default App;
