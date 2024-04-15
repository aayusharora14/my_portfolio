import React from 'react';
import styled, { keyframes } from 'styled-components';

const dotMove = keyframes`
    0%, 100% {
        transform: rotate(180deg) translate(-110px, -10px) rotate(-180deg);
    }
    50% {
        transform: rotate(0deg) translate(-111px, 10px) rotate(0deg);
    }
`;

const letterStretch = keyframes`
    0%, 100% {
        transform: scale(1, 0.35);
        transform-origin: 100% 75%;
    }
    8%, 28% {
        transform: scale(1, 2.125);
        transform-origin: 100% 67%;
    }
    37% {
        transform: scale(1, 0.875);
        transform-origin: 100% 75%;
    }
    46% {
        transform: scale(1, 1.03);
        transform-origin: 100% 75%;
    }
    50%, 97% {
        transform: scale(1);
        transform-origin: 100% 75%;
    }
`;

const lineStretch = keyframes`
    0%, 45%, 70%, 100% {
        transform: scaleY(0.125);
    }
    49% {
        transform: scaleY(0.75);
    }
    50% {
        transform: scaleY(0.875);
    }
    53% {
        transform: scaleY(0.5);
    }
    60% {
        transform: scaleY(0);
    }
    68% {
        transform: scaleY(0.18);
    }
`;

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
`;

const Divider = styled.div`
    position: absolute;
    z-index: 2;
    top: 65px;
    left: 200px;
    width: 50px;
    height: 15px;
    background: #fff;
`;

const LoadingText = styled.p`
    position: relative;
    font-size: 3.75rem;
    font-weight: 300;
    margin: 0;
    white-space: nowrap;

    &::before {
        position: absolute;
        content: "";
        z-index: 1;
        top: 40px;
        left: 115px;
        width: 6px;
        height: 6px;
        background: #000;
        border-radius: 50%;
        animation: ${dotMove} 1800ms cubic-bezier(0.25, 0.25, 0.75, 0.75) infinite;
    }

    .letter {
        display: inline-block;
        position: relative;
        color: #000;
        letter-spacing: 8px;

        &:nth-child(1) {
            transform-origin: 100% 70%;
            transform: scale(1, 1.275);

            &::before {
                position: absolute;
                content: "";
                top: 22px;
                left: 0;
                width: 14px;
                height: 36px;
                background: #fff;
                transform-origin: 100% 0;
                animation: ${lineStretch} 1800ms cubic-bezier(0.25, 0.25, 0.75, 0.75) infinite;
            }
        }

        &:nth-child(5) {
            transform-origin: 100% 70%;
            animation: ${letterStretch} 1800ms cubic-bezier(0.25, 0.23, 0.73, 0.75) infinite;

            &::before {
                position: absolute;
                content: "";
                top: 15px;
                left: 2px;
                width: 9px;
                height: 15px;
                background: #fff;
            }
        }
    }
`;

const Loading = () => {
    return (
        <Container>
            <Divider />
            <LoadingText aria-label="Loading">
                <span className="letter">L</span>
                <span className="letter">o</span>
                <span className="letter">a</span>
                <span className="letter">d</span>
                <span className="letter">i</span>
                <span className="letter">n</span>
                <span className="letter">g</span>
            </LoadingText>
        </Container>
    );
}

export default Loading;
