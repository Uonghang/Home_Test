import './Procedure.css'
import icon1 from '../../assets/img/icon1.jpg'
import icon2 from '../../assets/img/icon2.jpg'
import icon3 from '../../assets/img/icon3.jpg'
import icon4 from '../../assets/img/icon4.jpg'
const Procedure = () => {
    return ( <
        div className = "procedure" >
        <
        div className = "title-procedure" >
        <
        div className = "title-procedure-top" > 한 눈에 보는 템플릿 절차 < /div> <
        div className = "title-procedure-bot" >
        <
        div > 비디온리가 아직 고민되시나요 ? < /div> <
        div > 비디온리는 오직 당신만을 위한 템플릿을 통해 기다리고 있습니다. < /div> <
        /div> <
        /div> <
        div className = "containner" >
        <
        div className = "row" >
        <
        div className = "col-3" >
        <
        div className = "chocie" >
        <
        img src = { icon1 }
        /> <
        div className = "step" >
        <
        div className = "name-step" > 이미지 찾기 < /div> <
        div className = "content-step" >
        <
        div > 내 회사에 맞는 이미지를 < /div> <
        div > 찾아 정합니다. < /div> <
        /div> <
        /div> <
        /div>


        <
        /div> <
        div className = "col-3" >
        <
        div className = "chocie" >
        <
        img src = { icon2 }
        /> <
        div className = "step" >
        <
        div className = "name-step" > 만들기 < /div> <
        div className = "content-step" >
        <
        div > 정해둔 이미지에 맞춰 < /div> <
        div > 템플릿을 만듭니다. < /div> <
        /div> <
        /div> <
        /div>

        <
        /div> <
        div className = "col-3" >
        <
        div className = "chocie" >
        <
        img src = { icon3 }
        /> <
        div className = "step" >
        <
        div className = "name-step" > 정리하기 < /div> <
        div className = "content-step" >
        <
        div > 회사와 비디온리가 소통을 < /div> <
        div > 통해 퀄리티를 높입니다. < /div> <
        /div> <
        /div> <
        /div>

        <
        /div> <
        div className = "col-3 " >
        <
        div className = "chocie" >
        <
        img src = { icon4 }
        /> <
        div className = "step" >
        <
        div className = "name-step" > 제작 완료 < /div> <
        div className = "content-step" >
        <
        div > 세상에 단 하나 뿐인 < /div> <
        div > 영상 제작 완료! < /div> <
        /div> <
        /div> <
        /div>

        <
        /div> <
        /div> <
        /div>

        <
        /div>
    );
}
export default Procedure;