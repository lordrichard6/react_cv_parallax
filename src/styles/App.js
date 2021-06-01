import styled from "styled-components";
import tw from 'twin.macro';

// General -------------------------------------------------------------------------------
export const Section = styled.section.attrs({
    className: "py-2 px-2 md:p-6 bg-center bg-cover"
})`
    & {
        h3 {
            ${tw`italic tracking-widest text-2xl md:text-3xl mt-10 mb-5`}
        }
    }
`;

export const Title = styled.div.attrs({
    className: "w-full flex flex-row justify-center my-28 subpixel-antialiased font-black text-4xl md:text-9xl"
})`

`;

