import React from "react";
import styled from "styled-components";
import CommentListItem from "./CommentListItem";

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-itmes: flex-start;
    justify-content: center;

    & > * {
        :not(:lsat-child) {
            margin-bottom: 16px;
        }
    }
`;

function CommentList(props) {
    const { commnets } = props;

    return (
        <Wrapper>
            {commnets.map((comment, index) => {
                return <CommentListItem key= {comment.id} comment={comment} />;
            })}
        </Wrapper>
    );
}

export default CommentList;