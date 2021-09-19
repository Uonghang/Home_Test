import './Tutorial.css'
import gt1 from '../../assets/img/gt1.jpg'
import gt2 from '../../assets/img/gt2.jpg'
import gt3 from '../../assets/img/gt3.jpg'
const Tutorial = () => {
    return ( <
        div className = "tutorial" >
        <
        div className = "containner" >
        <
        div class = "title-tutorial" >
        <
        div className = "title" > Tutorial Guide < /div> <
        div className = "sumary" > 영상 만들기, 어렵지 않아요 < /div> <
        div class = "sumary-light" >
        <
        div > 나에게 맞는 템플릿, < /div> <
        div > 망설이지 말고 지금 직접 체험해보세요! < /div> <
        /div> <
        /div> <
        div className = "tutorial-content" >
        <
        div className = "row" >
        <
        div className = "col-4 img-tutorial" >
        <
        img className = "img100"
        src = { gt1 }
        /> <
        div className = "cap-content" >
        <
        div class = "cap-top" >
        <
        div > 첫번째 < /div> <
        div > < /div> <
        /div> <
        div className = "cap-bot" >
        <
        div > 내 브랜드에 맞는 < /div> <
        div > 영상 만들기 < /div> <
        /div> <
        /div> <
        /div> <
        div className = "col-4  img-tutorial" >
        <
        img className = "img100"
        src = { gt2 }
        /> <
        div className = "cap-content" >
        <
        div class = "cap-top" >
        <
        div > 두번째 < /div> <
        div > < /div> <
        /div> <
        div className = "cap-bot" >
        <
        div > 작업자들이 소통하며 < /div> <
        div > 템플릿 영상 작업 < /div> <
        /div> <
        /div> <
        /div> <
        div className = "col-4  img-tutorial" >
        <
        img className = "img100"
        src = { gt3 }
        /> <
        div className = "cap-content" >
        <
        div class = "cap-top" >
        <
        div > 세번째 < /div> <
        div > < /div> <
        /div> <
        div className = "cap-bot" >
        <
        div > 단 하나 뿐인 < /div> <
        div > 내 브랜드 영상 제작 완료 < /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div> <
        /div>
    );
}



export default Tutorial;