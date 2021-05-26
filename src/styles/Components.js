import styled from "styled-components";
import tw from 'twin.macro';

// Project Cards -------------------------------------------------------------------------------
export const ProjectCard = styled.div.attrs({
    className: "h-80 w-60 min-w-max 2xl:w-80 2xl:h-96 m-4"
})`
    & {       
    perspective: 500px; 
    
        .content {
            width: 100%;
            height: 100%;
            box-shadow: 0 0 15px rgba(0,0,0,0.1);
            transition: transform 1s;
            transform-style: preserve-3d;
        }
    
        :hover .content {
            transform: rotateY( 180deg ) ;
            transition: transform 0.5s;
        }
    
        .front,
        .back {
            font-size: 20px;
            border-radius: 10px;
            backface-visibility: hidden;
            position: absolute;
            ${tw`w-full h-full flex flex-wrap justify-center content-center text-center bg-cover bg-bottom`}
        }
    
        .back {
            background: #03446A;
            transform: rotateY( 180deg );
            ${tw`text-white text-2xl flex flex-col justify-center flex-wrap content-center`}
        } 
    }
`;

// Education Cards -------------------------------------------------------------------------------
export const EdCard = styled.div.attrs({
    className: "transform hover:-translate-y-1 transition duration-150 ease-in m-4 w-3/4 2xl:w-1/2 h-96 md:h-44 2xl:h-40 border-green-600 rounded-xl shadow-2xl bg-cover bg-center"
})``;

// Job Container -------------------------------------------------------------------------------
export const JobContainer = styled.div.attrs({
    className: "w-3/4 md:w-1/2 h-auto md:h-40 p-4 rounded-md text-white bg-top bg-gray-800 bg-opacity-75 shadow-2xl"
})``;