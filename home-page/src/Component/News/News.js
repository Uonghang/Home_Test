import './News.css'
import news1 from '../../assets/img/new.jpg'
import news2 from '../../assets/img/new1.jpg'
const News=()=>{
    return(
        <div className="news">
            <div className="title-news">
                    <div className="news-content">
                            <div className="content-big">퀄리티있는 브랜딩, 비디온리 하세요</div>
                            <div className="content-small">나에게 맞는 템플릿,망설이지 말고 지금 직접 체험해보세요! </div>
                            <button className="btn-title-news">시작하기</button>
                    </div>
            </div>
            <div class="news-top">
                <div className="row containner-news">
                    <div className="img-news">
                            <img src={news1}/>
                    </div> 
                    <div className="des-news"> 
                        <div class="videonly">What is the videonly</div>
                        <div className="des-title">비디온리는 무엇인가요?</div>
                        <div class="des-content">
                            <div>세상에는 수많은 회사들이 존재합니다.</div>
                            <div>비디온리에서는 그 중에서도 오직 단 하나의 영상</div>
                            <div> 템플릿을 만듭니다.</div> 
                            <div>우리는 특정 회사에서 원하는 템플릿을 만들고, 해당</div>
                            <div>템플릿을 사용해서 직접 더 나은 비디오를 만들 수 </div>
                            <div>  있도록 컨설팅을 해줄 수 있습니다. 세계에서 하나</div>
                            <div>뿐인 템플릿, 직접 경험해보세요.</div>
                        </div>
                        <button className="btn-des">시작하기</button>
                    </div>
                </div>
            </div>
            <div class="news-bot">
                <div className="row containner-news">
                    
                    <div className="des-news des-news-bot"> 
                        <div className="make-videp">How do I make a video</div>
                        <div className="des-title-bot">영상제작은 어떻게하나요?</div>
                       <div className="des-content-right">
                           <div>오직 단 하나의 영상 템플릿을 만들기 때문에 절차가</div>
                           <div>어려울 것이라고 생각합니다. 하지만 우리는 특정</div>
                           <div>회사에서 원하는 템플릿을 만들고, 해당 템플릿을 </div>
                           <div>사용해서 직접 더 나은 비디오를 만들 수 있도록 </div>
                           <div>컨설팅을 합니다. 세계에서 단 하나뿐인 템플릿, </div>
                           <div>어렵게 생각하지 마세요. 비디 온리와 함께라면 </div>
                           <div>쉽고 간편하게 만들 수 있습니다.</div>
                       </div>
                        <button className="btn-des-bot">시작하기</button>
                    </div>
                    <div className="img-news">
                        <img src={news2}/>
                    </div>
                </div>
                    
            </div>
        </div>
    );
}
export default News;