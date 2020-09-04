import React from "react";
import styles from "./post.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarPlus } from "@fortawesome/free-solid-svg-icons";
import PropTypes from "prop-types";
import Button from '../../common/button/button';

const Post = ({_id,image,title,date,description}) => {
  return (
    <div className={styles.eachPost} id={_id}>
      <div className={styles.wrapper}>
        <div className={styles.imageBox}>
          <img src={image} alt="product in basket" />
        </div>
        <div className={styles.description}>
          <h4 className={styles.blogTitle}>{title}</h4>
          <p className={styles.blogText}>{description}</p>
          <div className={styles.blogButton}>
          <Button
           padding="15px"
           width="150px"
           link={"/blog/post" +_id}
           >
              Zobacz wiecej
          </Button>
          </div>
          <div className={styles.dateBax}>
            <FontAwesomeIcon icon={faCalendarPlus} className={styles.icon} />{" "}
            {date}
          </div>
        </div>
      </div>
    </div>
  );
};

Post.propTypes = {
  _id: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
};
Post.defaultProps = {
  _id: "4532432adssa",
  image:
    "https://images.unsplash.com/photo-1463082459669-fd1ca1692fea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80 ",
  title: "Wykończenie z najwyższą starannością",
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  date: "20.05.2020",
};
export default Post;
