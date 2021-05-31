import styled from "styled-components";
import tw from 'twin.macro';

// General -------------------------------------------------------------------------------
export const Section = styled.section.attrs({
    className: "min-h-screen py-2 px-2 md:p-6 bg-center bg-cover"
})`
    & {
        h3 {
            ${tw`italic tracking-widest text-2xl md:text-3xl mt-10 mb-5`}
        }
    }
`;

export const Title = styled.div.attrs({
    className: "flex justify-center 2xl:mt-40"
})``;

