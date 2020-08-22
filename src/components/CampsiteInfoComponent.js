import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  Breadcrumb,
  BreadcrumbItem,
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
} from "reactstrap";
import { Control, LocalForm, Errors } from "react-redux-form";
import { Link } from "react-router-dom";

const required = (val) => val && val.length;
const maxLength = (len) => (val) => !val || val.length <= len;
const minLength = (len) => (val) => val && val.length >= len;

class CommentForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      modal: false,
      rating: " ",
      yourName: " ",
      comment: " ",
      touched: {
        yourName: false,
      },
    };
  }

  toggleModal = () => {
    this.setState({ modal: !this.state.modal });
  };

  handleSubmit = (values) => {
    alert(JSON.stringify(values));
  };

  render() {
    return (
      <>
        <Button outline onClick={this.toggleModal}>
          <i class="fa fa-lg fa-pencil" aria-hidden="true" />
          Submit Comment
        </Button>

        <Modal isOpen={this.state.modal} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>
            <h2> Submit Comment </h2>
          </ModalHeader>
          <ModalBody>
            <LocalForm onSubmit={(values) => this.handleSubmit(values)}>
              <div className="form-group">
                <Label htmlFor="rating" md={6}>
                  Rating
                </Label>
                <Control.select
                  model=".rating"
                  name="rating"
                  id="rating"
                  className="form-control"
                >
                  <option>1</option>
                  <option>2</option>
                  <option>3</option>
                  <option>4</option>
                  <option>5</option>
                  <option>6</option>
                </Control.select>
              </div>

              <div className="form-group">
                <Label htmlFor="yourName">Your Name</Label>
                <Control.text
                  model=".yourName"
                  name="yourName"
                  id="yourName"
                  className="form-control"
                  placeholder="Your Name"
                  validators={{
                    required,
                    minLength: minLength(2),
                    maxLength: maxLength(15),
                  }}
                />
                <Errors
                  className="text-danger"
                  model=".yourName"
                  show="touched"
                  component="div"
                  messages={{
                    required: "Required",
                    minLength: "Must be at least 2 characters",
                    maxLength: "Must enter 15 characters or less",
                  }}
                />
              </div>

              <div className="form-group">
                <Label htmlFor="comment" md={6}>
                  Comment
                </Label>
                <Control.textarea
                  model=".comment"
                  id="comment"
                  name="comment"
                  className="form-control"
                  rows="6"
                ></Control.textarea>
              </div>
              <Button type="submit" color="primary">
                {" "}
                Submit{" "}
              </Button>
            </LocalForm>
          </ModalBody>
        </Modal>
      </>
    );
  }
}

function RenderCampsite({ campsite }) {
  return (
    <div className="col-md-5 m-1">
      <Card>
        <CardImg top src={campsite.image} alt={campsite.name} />
        <CardBody>
          <CardText>{campsite.description}</CardText>
        </CardBody>
      </Card>
    </div>
  );
}

function RenderComments({ comments }) {
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
        <CommentForm />
      </div>
    );
  }
  return <div />;
}

function CampsiteInfo(props) {
  if (props.campsite) {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <Breadcrumb>
              <BreadcrumbItem>
                <Link to="/directory">Directory</Link>
              </BreadcrumbItem>
              <BreadcrumbItem active>{props.campsite.name}</BreadcrumbItem>
            </Breadcrumb>
            <h2>{props.campsite.name}</h2>
            <hr />
          </div>
        </div>
        <div className="row">
          <RenderCampsite campsite={props.campsite} />
          <RenderComments comments={props.comments} />
        </div>
      </div>
    );
  }
  return <div />;
}

export default CampsiteInfo;
