import main from "../img/logo_me.png";
import ReactTypingEffect from 'react-typing-effect';

const Header = () => {
  return (
    <div className="h-screen flex flex-col justify-center flex-wrap content-center">
      <img className="h-3/5 md:h-3/4" src={main} alt="" />
      <div className="flex content-center justify-center">
          <ReactTypingEffect 
                        className='typingeffect' 
                        text={["My name is Paulo Reizinho",
                            'Florina is cute', 
                            'I am a developer', 
                            'Welcome to my CV page', 
                            '...', 
                            'please UX is very simple', 
                            'click on a section on the left', 
                            '...' , 
                            'no need to stay here all day']} 
                        speed={100} eraseDelay={700} />
      </div>
      
    </div>
  );
};

export default Header;
