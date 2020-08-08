import React, { Component } from "react";
import { Card, CardImg, CardText, CardBody, CardTitle } from "reactstrap";

class CampsiteInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderCampsite(campsite) {
    return (
      <div className="col-md-5 m-1">
        <Card>
          <CardImg top src={campsite.image} alt={campsite.name} />
          <CardBody>
            <CardTitle> {campsite.name}</CardTitle>
            <CardText>{campsite.description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }

  renderComments(comments) {
    //passing the comments from campsites.js into our map function
    if (comments) {
      return (
        <div className="col-md-5 m-1">
          <h4>Comments</h4>
          {/* start of the map(), pulling the object array from campsites.js and navigating to comments, map will build an array following the comments. then we pull the infomation into there own variable to which we can use.*/}
          {comments.map((comment) => (
            <div key={comment.id}>
              <p>{comment.text}</p>
              <p>
                {comment.author} --{" "}
                {new Intl.DateTimeFormat("en-US", {
                  year: "numeric",
                  month: "short",
                  day: "2-digit",
                }).format(new Date(Date.parse(comment.date)))}
              </p>
            </div>
          ))}
        </div>
      );
    }
    return <div />;
  }

  render() {
    if (this.props.campsite) {
      return (
        //passing data from props.campsite, into the renderCampsite method, and then rendering it out. {(method()) this.renderCampsite((data from external modual) this.props.campsite)}
        <div className="row">
          {this.renderCampsite(this.props.campsite)}
          {this.renderComments(this.props.campsite.comments)}
        </div>
      );
    }
    return <div />;
  }
}

export default CampsiteInfo;
