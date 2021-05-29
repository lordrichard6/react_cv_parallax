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

// Header -------------------------------------------------------------------------------
export const Hero = styled.div.attrs({
    className: "relative h-screen flex flex-col justify-center flex-wrap content-center bg-header-land_mobile md:bg-header-land bg-cover"
})`
    & {
        img:not(:first-child) {
            ${tw`w-full absolute`}
        }
    }
`;

// Projects -------------------------------------------------------------------------------


// Education -------------------------------------------------------------------------------
export const EducationContainer = styled.div.attrs({
    className: "flex flex-col flex-wrap justify-center content-center pb-10 2xl:pb-20"
})``;

// Experience -------------------------------------------------------------------------------
export const JobContainer = styled.div.attrs({
    className: "flex flex-wrap justify-center content-center"
})``;

// Footer -------------------------------------------------------------------------------
export const Footer = styled.footer.attrs({
    className: "h-auto flex pt-10 md:pt-0 space-x-2 md:space-x-12 flex-col md:flex-row justify-center flex-wrap content-center p-6 mb:mt-2 text-white bg-center bg-cover"
})`
    & {
        h1 {
            ${tw`text-4xl pb-4 flex justify-center`}
        }
    }
`;

export const FooterWrapper = styled.div.attrs({
    className: "flex flex-1 flex-col flex-wrap justify-center content-center  md:h-auto md:w-1/2 px-2 py-4"
})`
    & {
        h2 {
            ${tw `text-4xl pb-4 flex justify-center`}
        }

        p {
            ${tw`text-xl p-1`}
        }

        img {
            ${tw`h-1/3 w-1/3 md:w-1/5 md:h-auto p-1`}
        }

        a {
            ${tw`p-2`}
        }
    }
`;


