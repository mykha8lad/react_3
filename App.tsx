import {useState} from 'react'
import './App.css'
import { Textarea } from '@chakra-ui/react'

function App() {
    const [text, setText] = useState('')
    const [isBold, setIsBold] = useState(false)
    const [isItalic, setIsItalic] = useState(false)
    const [isUnderlined, setIsUnderlined] = useState(false)
    const [isStrikethrough, setIsStrikethrough] = useState(false)    
    const [fontSize, setFontSize] = useState('24px')
    const [fontFamily, setFontFamily] = useState('Inter')
    const [fontColor, setFontColor] = useState('black')

    const handleButtonClick = (style: any) => {
        switch(style) {
          case 'bold':
            setIsBold(!isBold);
            break;
          case 'italic':
            setIsItalic(!isItalic);
            break;
          case 'underline':
            setIsUnderlined(!isUnderlined);
            break;
          case 'strikethrough':
            setIsStrikethrough(!isStrikethrough);
            break;
          default:
            break;
        }
    };
    
    const handleTextChange = (e: any) => {
        setText(e.target.value)
    };

    const handleFontSizeChange = (e: any) => {
        setFontSize(e.target.value)
    }

    const handleFontFamilyChange = (e: any) => {
        setFontFamily(e.target.value)
    }

    const handleFontColorChange = (e: any) => {
        setFontColor(e.target.value)
    }

  return (
    <>
    <div className="container">
        <div className='content'>
            <div className="tools">
                <button onClick={() => handleButtonClick('bold')} style={{backgroundColor: isBold ? '#D0D0D0' : '#E5E5E5'}}><b>B</b></button>
                <button onClick={() => handleButtonClick('italic')} style={{backgroundColor: isItalic ? '#D0D0D0' : '#E5E5E5'}}><i>I</i></button>
                <button onClick={() => handleButtonClick('underline')} style={{backgroundColor: isUnderlined ? '#D0D0D0' : '#E5E5E5'}}><u>U</u></button>
                <button onClick={() => handleButtonClick('strikethrough')} style={{backgroundColor: isStrikethrough ? '#D0D0D0' : '#E5E5E5'}}><s>Tt</s></button>     
                <select onChange={handleFontSizeChange} value={fontSize} style={{backgroundColor: '#E5E5E5', border: 'none'}}>
                    <option value="12px">12</option>
                    <option value="16px">16</option>
                    <option value="20px">20</option>
                    <option value="24px">24</option>
                    <option value="28px">28</option>
                    <option value="32px">32</option>
                    <option value="36px">36</option>
                </select>
                <select onChange={handleFontFamilyChange} value={fontFamily} style={{backgroundColor: '#E5E5E5', border: 'none'}}>
                    <option value='"Inter", sans-serif'>Inter</option>
                    <option value='"Tiny5", sans-serif'>Tiny5</option>
                    <option value='"Oswald", sans-serif'>Oswald</option>
                    <option value='"Playfair Display", serif'>Playfair Display</option>
                </select>
                <select onChange={handleFontColorChange} value={fontColor} style={{backgroundColor: fontColor}} className='colors-column'>
                    <option value='black' style={{backgroundColor: 'black'}}/>
                    <option value='red' style={{backgroundColor: 'red'}}/>
                    <option value='blue' className='ddd' style={{backgroundColor: 'blue'}}/>
                    <option value='green' style={{backgroundColor: 'green'}}/>
                </select>
            </div>
            <div>
                <Textarea value={text} onChange={handleTextChange} style={{
                    fontWeight: isBold ? 'bold' : 'normal',
                    fontStyle: isItalic ? 'italic' : 'normal',
                    textDecoration: `
                        ${isUnderlined ? 'underline' : ''}
                        ${isStrikethrough ? 'line-through' : ''}`,
                    fontSize: fontSize,
                    fontFamily: fontFamily,
                    color: fontColor,
                    border: '2px solid #E5E5E5'
                    }} height={130} width={463}/>                
            </div>
        </div>
    </div>
    </>
  )
}

export default App
