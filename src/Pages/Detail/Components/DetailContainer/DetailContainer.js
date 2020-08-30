import React, { Component } from "react";
import SelfCommentBlock from "./SelfCommentBlock/SelfCommentBlock";
import ShowCommentBlock from "./ShowCommentBlock/ShowCommentBlock";
import ContentsContainer from "../ContentsContainer/ContentsContainer";
import DescriptionContainer from "./DescriptionContainer/DescriptionContainer";
import ContentSlider from "../DetailContainer/ContentSlider/ContentSlider";
import PersonInvolved from "./PersonInvolved/PersonInvolved";
import CommentContainer from "./CommentContainer/CommentContainer";
import RatingGraph from "./RatingGraph/RatingGraph";
import ContentsAside from "./ContentsAside/ContentsAside";
import "./DetailContainer.scss";

class DetailContainer extends Component {
  render() {
    const {
      movie,
      images,
      casts,
      scores,
      reviews,
      reviewStatus,
      rating,
      comment,
      user,
      openModal,
    } = this.props;
    return (
      <section className="DetailContainer">
        <div className="detailWrapper">
          <div className="detailItem">
            {(reviewStatus !== "none" || rating !== 0) && !comment && user && (
              <SelfCommentBlock
                rating={rating}
                username={user.name}
                openModal={openModal}
              />
            )}
            {comment && (
              <ShowCommentBlock comment={comment} openModal={openModal} />
            )}
            <div className="contentsBlock">
              <div className="contentsMain">
                <ContentsContainer title="기본 정보" button={true}>
                  <DescriptionContainer movie={movie} />
                </ContentsContainer>
                {casts && (
                  <ContentsContainer title="출연/제작">
                    <ContentSlider
                      numberOfItems={casts.length}
                      slidesRow={3}
                      slidesColumn={1}
                      slidesToShow={2}
                    >
                      {Array.from(casts).map(({ id, name, role, face_url }) => (
                        <PersonInvolved
                          key={id}
                          src={face_url}
                          name={name}
                          role={role}
                        />
                      ))}
                    </ContentSlider>
                  </ContentsContainer>
                )}
                {movie && (
                  <ContentsContainer
                    title="별점 그래프"
                    rating={movie.avg_rating}
                  >
                    <RatingGraph scores={scores} />
                  </ContentsContainer>
                )}
                {reviews && (
                  <ContentsContainer
                    title="코멘트"
                    button={true}
                    stretch={true}
                  >
                    <ContentSlider
                      numberOfItems={reviews.length}
                      slidesRow={1}
                      slidesColumn={1}
                      slidesToShow={2}
                    >
                      {Array.from(reviews).map(
                        ({ id, comment, score, like_count, user }) => (
                          <CommentContainer
                            key={id}
                            comment={comment}
                            rating={score}
                            numberOfLikes={like_count}
                            userImage={user.face_image_url}
                            username={user.name}
                          />
                        )
                      )}
                    </ContentSlider>
                  </ContentsContainer>
                )}
              </div>
            </div>
          </div>
          {movie && (
            <ContentsAside
              providers={movie.service_providers}
              images={images}
            />
          )}
        </div>
      </section>
    );
  }
}

export default DetailContainer;
